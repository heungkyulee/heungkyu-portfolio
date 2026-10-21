"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Geometry, Mesh, Plane, Program, Renderer, Texture, Transform, Triangle } from "ogl";
import { useI18n } from "@/components/i18n-provider";
import { lenisRef, setCursorLabel } from "@/components/stage/chrome";
import { SlideToSend } from "@/components/stage/slide";
import { DIAGNOSIS_SUBJECT, MAIL_TEMPLATE, mailto, type L } from "@/app/data/portfolio";

// 홈 무대: 빛 입자로 다시 그린 얼굴 → 휘어진 스크린 위로 지나가는 AX 장면들 → 무대 조명 아래 진단 요청.
// 화면 전체는 흑백. 스톡 영상(연기, 큐브, 조명)은 분위기용이고 작업이나 인물로 쓰지 않습니다.

type Media = { kind: "image" | "video"; src: string } | { kind: "timer" };
type Chapter = { title: L; line: L; href: string; cta: L; media: Media };

const CHAPTERS: Chapter[] = [
  {
    title: { ko: "6개월 → 20분", en: "6 months → 20 min" },
    line: {
      ko: "콘텐츠 40편에 6개월 걸리던 제작을 한 편 20분으로 줄였습니다. 마지막 승인은 사람이 합니다.",
      en: "Forty pieces took six months to make. Now one takes 20 minutes. A person still gives the final approval.",
    },
    href: "/projects/famo-play-factory",
    cta: { ko: "Famo Play Factory", en: "Famo Play Factory" },
    media: { kind: "timer" },
  },
  {
    title: { ko: "Foli", en: "Foli" },
    line: { ko: "진짜 일을 맡길 수 있는 AI 동료. 지금 만들고 있습니다.", en: "An AI colleague you can actually hand work to. In the making now." },
    href: "https://lifoli.co.kr/products/foli",
    cta: { ko: "Foli 보기", en: "See Foli" },
    media: { kind: "image", src: "/photos/foli-app-window.webp" },
  },
  {
    title: { ko: "운영 체제 전환", en: "A new operating system" },
    line: {
      ko: "AX는 AI 도입이 아닙니다. 모델을 고르기 전에 데이터 흐름과 책임 구조부터 설계합니다.",
      en: "AX is not adopting AI. Before choosing a model, I design how data flows and who is responsible.",
    },
    href: "/insights/ax-reality",
    cta: { ko: "글 읽기", en: "Read the essay" },
    media: { kind: "video", src: "/lab/cubes.mp4" },
  },
  {
    title: { ko: "강의와 컨설팅", en: "Teaching and consulting" },
    line: {
      ko: "하나증권 AI 강의·컨설팅, 성균관대학교 창업지원단 업무 자동화 강의.",
      en: "AI lectures and consulting for Hana Securities; work automation lectures for the SKKU startup programme.",
    },
    href: "/about",
    cta: { ko: "이력 보기", en: "See the record" },
    media: { kind: "image", src: "/photos/lecture.webp" },
  },
  {
    title: { ko: "무대", en: "On stage" },
    line: { ko: "실리콘밸리 Plug and Play, 도쿄 ILS, AI TOP 100 본선.", en: "Plug and Play in Silicon Valley, ILS in Tokyo, the AI TOP 100 finals." },
    href: "/about",
    cta: { ko: "이력 보기", en: "See the record" },
    media: { kind: "image", src: "/photos/stage-plug-and-play-2023.webp" },
  },
];

const N = CHAPTERS.length;
const STATEMENT: L[] = [
  { ko: "회사의 일을", en: "I redesign" },
  { ko: "AI로 다시", en: "how companies" },
  { ko: "설계합니다.", en: "work, with AI." },
];

// ---------- 셰이더 ----------

const BG_VERT = /* glsl */ `#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }`;

// 배경: 커서 조명이 비추는 연기, 끝에서는 무대 조명 영상.
const BG_FRAG = /* glsl */ `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D tSmoke;
uniform sampler2D tLight;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform vec2 uSmokeSize;
uniform vec2 uLightSize;
uniform float uTime;
uniform float uOutro;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec2 cover(vec2 uv, vec2 res, vec2 img) {
  vec2 r = vec2(min((res.x / res.y) / (img.x / img.y), 1.0), min((res.y / res.x) / (img.y / img.x), 1.0));
  return uv * r + (1.0 - r) * 0.5;
}
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
void main() {
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  float spot = smoothstep(0.75, 0.0, length((vUv - uMouse) * asp));
  float smk = luma(texture(tSmoke, cover(vUv, uRes, uSmokeSize)).rgb);
  vec3 col = vec3(smk * (0.04 + spot * spot * 0.32));
  float lt = luma(texture(tLight, cover(vUv * 0.8 + vec2(0.22, 0.02), uRes, uLightSize)).rgb);
  col = mix(col, vec3(pow(lt, 1.3) * 0.75), uOutro);
  col += (hash(vUv * uRes + fract(uTime) * 61.0) - 0.5) * 0.05;
  col *= smoothstep(1.35, 0.25, length((vUv - 0.5) * asp));
  fragColor = vec4(col, 1.0);
}`;

// 얼굴 입자: 흩어진 자리에서 모여들고, 커서가 비추는 곳은 밝아지고, 스크롤에 흩어집니다.
const DOT_VERT = /* glsl */ `#version 300 es
in vec3 position;
in vec4 random;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uAssemble;
uniform float uDisperse;
uniform float uSize;
uniform float uScale;
uniform vec2 uOffset;
uniform vec2 uMouse;
uniform float uRadius;
out float vLum;
out float vAlpha;
out float vLit;
void main() {
  float lum = position.z;
  vec3 target = vec3(position.xy * uScale + uOffset, 0.0);
  vec3 scatter = (random.xyz - 0.5) * vec3(16.0, 11.0, 8.0);
  float a = clamp(uAssemble * 1.7 - random.w * 0.7, 0.0, 1.0);
  a = a * a * (3.0 - 2.0 * a);
  vec3 p = mix(scatter, target, a);
  p.x += sin(uTime * 0.7 + random.x * 6.2831) * 0.004;
  p.y += cos(uTime * 0.6 + random.y * 6.2831) * 0.004;
  p.z += sin(uTime * 1.3 + position.y * 9.0) * 0.012;
  vec2 d = p.xy - uMouse;
  float f = smoothstep(uRadius, 0.0, length(d));
  p.xy += normalize(d + 1e-5) * f * f * 0.05;
  p.z += f * 0.35;
  vec3 dir = normalize(vec3(random.x - 0.5, random.y - 0.15, random.z - 0.5) + 1e-4);
  p += dir * uDisperse * (1.5 + random.w * 5.0);
  p.y += uDisperse * uDisperse * random.y * 2.0;
  vLum = lum;
  vLit = f;
  vAlpha = (1.0 - smoothstep(0.35, 1.0, uDisperse)) * (0.25 + 0.75 * a);
  vec4 mv = viewMatrix * modelMatrix * vec4(p, 1.0);
  gl_PointSize = uSize * (0.35 + lum * 1.05) * (1.0 + f * 0.9) * (6.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;

const DOT_FRAG = /* glsl */ `#version 300 es
precision highp float;
in float vLum;
in float vAlpha;
in float vLit;
out vec4 fragColor;
void main() {
  float r = length(gl_PointCoord - 0.5);
  if (r > 0.5) discard;
  float soft = smoothstep(0.5, 0.15, r);
  float b = (0.08 + pow(vLum, 1.25) * 0.8) * (1.0 + vLit * 0.9);
  fragColor = vec4(vec3(b), soft * vAlpha);
}`;

const CARD_VERT = /* glsl */ `#version 300 es
in vec3 position;
in vec2 uv;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uCurve;
uniform float uVel;
out vec2 vUv;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  w.z += w.x * w.x * uCurve;
  w.y += sin(uv.x * 3.14159) * uVel * 0.6;
  w.x += (uv.y - 0.5) * uVel * 0.35;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

const CARD_FRAG = /* glsl */ `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D tMap;
uniform vec2 uPlane;
uniform vec2 uImage;
uniform float uActive;
uniform float uHover;
uniform float uOpacity;
uniform float uTime;
uniform float uVel;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
void main() {
  vec2 r = vec2(min((uPlane.x / uPlane.y) / (uImage.x / uImage.y), 1.0), min((uPlane.y / uPlane.x) / (uImage.y / uImage.x), 1.0));
  vec2 uv = vUv * r + (1.0 - r) * 0.5;
  uv = (uv - 0.5) * (1.0 - 0.06 * uHover - 0.03 * uActive) + 0.5;
  uv.x += sin(uTime * 0.15) * 0.006 * uActive;
  float s = abs(uVel) * 0.04;
  float l = luma(texture(tMap, uv + vec2(s, 0.0)).rgb) * 0.5 + luma(texture(tMap, uv - vec2(s, 0.0)).rgb) * 0.5;
  l = smoothstep(0.04, 0.96, l);
  // 제목이 얹히는 가운데 띠를 어둡게 눌러 흰 제목이 읽히게 합니다.
  float band = smoothstep(0.42, 0.0, abs(vUv.y - 0.5)) * smoothstep(0.5, 0.1, abs(vUv.x - 0.5));
  l *= mix(0.2, mix(0.82, 0.48, band), uActive);
  float edge = smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x) * smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
  l *= mix(0.75, 1.0, edge);
  l += (hash(vUv * 1200.0 + fract(uTime) * 37.0) - 0.5) * 0.07;
  fragColor = vec4(vec3(l), uOpacity);
}`;

// ---------- 보조 ----------

const FONT = '"Pretendard Variable", Pretendard, sans-serif';

// Famo 카드: 20분에서 실제로 줄어드는 타이머를 배경 무늬로
function drawTimer(c: HTMLCanvasElement, now: number, caption: string) {
  const g = c.getContext("2d")!;
  g.fillStyle = "#0a0a0a";
  g.fillRect(0, 0, c.width, c.height);
  const left = 20 * 60 - (Math.floor(now / 1000) % (20 * 60));
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  g.textAlign = "center";
  g.fillStyle = "#3a3a3a";
  g.font = `800 520px ${FONT}`;
  g.fillText(`${mm}:${ss}`, c.width / 2, 700);
  g.fillStyle = "#8a8a8a";
  g.font = `600 44px ${FONT}`;
  g.fillText(caption, c.width / 2, 900);
  g.textAlign = "left";
}

// 얼굴 컷의 밝기를 격자로 읽어 입자로 만듭니다.
function sampleFace(img: HTMLImageElement, grid: number) {
  const c = document.createElement("canvas");
  c.width = grid;
  c.height = grid;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.drawImage(img, 0, 0, grid, grid);
  const { data } = g.getImageData(0, 0, grid, grid);
  const pos: number[] = [];
  const rnd: number[] = [];
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      const i = (y * grid + x) * 4;
      if (data[i + 3] < 140) continue;
      const l = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
      pos.push((x + (Math.random() - 0.5) * 0.6) / grid - 0.5, 0.5 - (y + (Math.random() - 0.5) * 0.6) / grid, l);
      rnd.push(Math.random(), Math.random(), Math.random(), Math.random());
    }
  }
  return { position: new Float32Array(pos), random: new Float32Array(rnd) };
}

const smooth = (a: number, b: number, x: number) => {
  const k = Math.min(Math.max((x - a) / (b - a), 0), 1);
  return k * k * (3 - 2 * k);
};

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`inline size-[1em] align-[-0.15em] ${back ? "rotate-180" : ""}`}>
      <path d="M2 12h18M13 5l7 7-7 7" />
    </svg>
  );
}

// ---------- 화면 ----------

export function HomeStage() {
  const { t } = useI18n();
  const host = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const chapterBox = useRef<HTMLDivElement>(null);
  const titleBox = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const hoverRef = useRef(false);
  const activeRef = useRef(-1);
  const readyAt = useRef(0);
  const words = useRef({ view: "보기", timer: "한 편, 20분" });
  const view = t({ ko: "보기", en: "View" });
  const timerCaption = t({ ko: "한 편, 20분", en: "One piece, 20 min" });
  useEffect(() => {
    words.current = { view, timer: timerCaption };
  }, [view, timerCaption]);

  useEffect(() => {
    if (ready && !readyAt.current) readyAt.current = performance.now();
  }, [ready]);

  useEffect(() => {
    const el = host.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.innerWidth < 768;

    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 1.5), alpha: false, antialias: false, powerPreference: "high-performance" });
    const gl = renderer.gl;
    gl.clearColor(0.015, 0.015, 0.015, 1);
    el.appendChild(gl.canvas);
    gl.canvas.setAttribute("aria-hidden", "true");

    const camera = new Camera(gl, { fov: 35 });
    camera.position.z = 6;
    const scene = new Transform();

    // 자산 로딩 → 프리로더 숫자
    let total = 0;
    let done = 0;
    const tick = () => {
      done += 1;
      setLoaded(Math.round((done / total) * 100));
    };
    const videos = new Map<string, HTMLVideoElement>();
    const blank = () => new Texture(gl, { generateMipmaps: false, minFilter: gl.LINEAR, magFilter: gl.LINEAR });
    const loadImage = (src: string, tex: Texture | null, size: number[], then?: (img: HTMLImageElement) => void) => {
      total += 1;
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (tex) tex.image = img;
        size[0] = img.naturalWidth;
        size[1] = img.naturalHeight;
        then?.(img);
        tick();
      };
      img.onerror = tick;
      img.src = src;
    };
    const loadVideo = (src: string, tex: Texture, size: number[]) => {
      total += 1;
      const v = document.createElement("video");
      Object.assign(v, { src, muted: true, loop: true, playsInline: true, preload: "auto" });
      let counted = false;
      const count = () => {
        if (!counted) {
          counted = true;
          tick();
        }
      };
      v.addEventListener("loadeddata", () => {
        size[0] = v.videoWidth;
        size[1] = v.videoHeight;
        tex.image = v;
        count();
      });
      v.addEventListener("error", count);
      videos.set(src, v);
      v.load();
    };
    const want = (src: string, on: boolean) => {
      const v = videos.get(src);
      if (!v || reduce) return;
      if (on && v.paused) v.play().catch(() => {});
      if (!on && !v.paused) v.pause();
    };

    // 배경
    const smokeSize = [16, 9];
    const lightSize = [16, 9];
    const tSmoke = blank();
    const tLight = blank();
    loadVideo("/lab/smoke.mp4", tSmoke, smokeSize);
    loadVideo("/lab/stagelight.mp4", tLight, lightSize);
    const bgProgram = new Program(gl, {
      vertex: BG_VERT,
      fragment: BG_FRAG,
      depthTest: false,
      uniforms: {
        tSmoke: { value: tSmoke },
        tLight: { value: tLight },
        uRes: { value: [1, 1] },
        uMouse: { value: [0.6, 0.6] },
        uSmokeSize: { value: smokeSize },
        uLightSize: { value: lightSize },
        uTime: { value: 0 },
        uOutro: { value: 0 },
      },
    });
    const bg = new Mesh(gl, { geometry: new Triangle(gl), program: bgProgram, frustumCulled: false });

    // 얼굴 입자
    const dotProgram = new Program(gl, {
      vertex: DOT_VERT,
      fragment: DOT_FRAG,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uAssemble: { value: 0 },
        uDisperse: { value: 0 },
        uSize: { value: 3 },
        uScale: { value: 3.6 },
        uOffset: { value: [1, -0.1] },
        uMouse: { value: [99, 99] },
        uRadius: { value: 0.5 },
      },
    });
    dotProgram.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    const dotScene = new Transform();
    const grid = small ? 150 : 230;
    loadImage("/photos/portrait-studio-cut.webp", null, [1, 1], (img) => {
      const face = sampleFace(img, grid);
      const geometry = new Geometry(gl, {
        position: { size: 3, data: face.position },
        random: { size: 4, data: face.random },
      });
      new Mesh(gl, { geometry, program: dotProgram, mode: gl.POINTS, frustumCulled: false }).setParent(dotScene);
    });

    // 장면 카드
    const plane = new Plane(gl, { widthSegments: 56, heightSegments: 8 });
    let timerCanvas: HTMLCanvasElement | null = null;
    const cards = CHAPTERS.map((ch) => {
      const tex = blank();
      const size = [16, 10];
      if (ch.media.kind === "image") loadImage(ch.media.src, tex, size);
      else if (ch.media.kind === "video") loadVideo(ch.media.src, tex, size);
      else {
        total += 1;
        document.fonts.load(`800 400px ${FONT}`).finally(() => {
          timerCanvas = document.createElement("canvas");
          timerCanvas.width = 1600;
          timerCanvas.height = 1000;
          drawTimer(timerCanvas, Date.now(), words.current.timer);
          tex.image = timerCanvas;
          size[0] = 1600;
          size[1] = 1000;
          tick();
        });
      }
      const program = new Program(gl, {
        vertex: CARD_VERT,
        fragment: CARD_FRAG,
        transparent: true,
        cullFace: false,
        depthTest: false,
        uniforms: {
          tMap: { value: tex },
          uPlane: { value: [1.6, 1] },
          uImage: { value: size },
          uActive: { value: 0 },
          uHover: { value: 0 },
          uOpacity: { value: 0 },
          uTime: { value: 0 },
          uCurve: { value: 0.1 },
          uVel: { value: 0 },
        },
      });
      const mesh = new Mesh(gl, { geometry: plane, program, frustumCulled: false });
      mesh.setParent(scene);
      return { mesh, program, tex, src: ch.media.kind === "video" ? ch.media.src : "", active: 0, hover: 0 };
    });

    // 크기
    let vw = 1;
    let vh = 1;
    let cardW = 1;
    let cardH = 1;
    let gap = 1;
    let cardY = 0;
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 768;
      renderer.setSize(w, h);
      camera.perspective({ aspect: w / h });
      vh = 2 * Math.tan(((camera.fov as number) * Math.PI) / 360) * camera.position.z;
      vw = vh * (w / h);
      cardW = vw * (mobile ? 0.86 : 0.62);
      cardH = cardW / (mobile ? 1.25 : 1.7);
      gap = cardW * (mobile ? 1.06 : 1.1);
      cardY = mobile ? vh * 0.1 : vh * 0.04;
      const curve = (mobile ? 0.8 : 1.6) / Math.pow(vw / 2, 2);
      cards.forEach((c) => {
        c.mesh.scale.set(cardW, cardH, 1);
        c.program.uniforms.uPlane.value = [cardW, cardH];
        c.program.uniforms.uCurve.value = curve;
      });
      // 얼굴: 데스크톱은 오른쪽에서 화면 아래로 잘리고, 폰은 위쪽 가운데.
      const faceH = mobile ? vh * 0.62 : vh * 1.02;
      const du = dotProgram.uniforms;
      du.uScale.value = faceH;
      du.uOffset.value = mobile ? [0, vh * 0.5 - faceH * 0.5 - vh * 0.1] : [vw * 0.2, -vh * 0.5 + faceH * 0.5 - vh * 0.06];
      du.uSize.value = (((faceH / vh) * h) / grid) * (mobile ? 1.35 : 1.05) * Math.min(window.devicePixelRatio, 1.5);
      du.uRadius.value = mobile ? 0.35 : 0.6;
      bgProgram.uniforms.uRes.value = [w, h];
      track.current!.style.height = `${(1.3 + N + 1.6) * h}px`;
      lenisRef.current?.resize();
    };
    resize();
    window.addEventListener("resize", resize);

    // 포인터: 조명과 카드 위 표시
    const target = { x: 0.62, y: 0.55 };
    const light = { x: 0.62, y: 0.55 };
    const pointer = { x: -200, y: -200, inside: false };
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth;
      target.y = 1 - e.clientY / window.innerHeight;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.inside = true;
    };
    const onLeave = () => (pointer.inside = false);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    const onClick = (e: MouseEvent) => {
      if (!hoverRef.current || activeRef.current < 0) return;
      if ((e.target as HTMLElement).closest("a,button")) return;
      const ch = CHAPTERS[activeRef.current];
      if (ch.href.startsWith("http")) window.open(ch.href, "_blank", "noopener");
      else window.location.href = ch.href;
    };
    window.addEventListener("click", onClick);

    let vel = 0;
    let raf = 0;
    let lastActive = -1;
    let lastTimer = 0;
    let running = true;
    const start = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      const t = (now - start) / 1000;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const L = lenisRef.current;
      const scroll = L ? L.scroll : window.scrollY;
      vel += ((L ? L.velocity : 0) - vel) * 0.12;

      const introEnd = 1.3 * h;
      const carStart = introEnd;
      const carEnd = carStart + (N - 0.2) * h;
      const ip = Math.min(Math.max(scroll / introEnd, 0), 1);
      const op = Math.min(Math.max((scroll - carEnd) / (1.0 * h), 0), 1);

      if (coarse || reduce || !pointer.inside) {
        target.x = reduce ? 0.62 : 0.6 + Math.sin(t * 0.4) * 0.18;
        target.y = reduce ? 0.55 : 0.5 + Math.cos(t * 0.31) * 0.14;
      }
      light.x += (target.x - light.x) * 0.07;
      light.y += (target.y - light.y) * 0.07;

      const bu = bgProgram.uniforms;
      bu.uMouse.value = [light.x, light.y];
      bu.uTime.value = t;
      bu.uOutro.value = smooth(0, 1, op);

      // 얼굴: 준비되면 모이고, 스크롤하면 흩어집니다.
      const since = readyAt.current ? (now - readyAt.current) / 1000 : 0;
      const du = dotProgram.uniforms;
      du.uTime.value = t;
      du.uAssemble.value = reduce ? 1 : smooth(0, 2.6, since);
      du.uDisperse.value = reduce ? smooth(0.2, 0.7, ip) : smooth(0.04, 0.95, ip);
      du.uMouse.value = coarse || !pointer.inside ? [99, 99] : [(light.x - 0.5) * vw, (light.y - 0.5) * vh];

      // 카드: 중앙에서 잠시 머물렀다가 다음으로 넘어갑니다.
      const o = (scroll - carStart) / h;
      const oe = o < 0 ? o : Math.min(Math.floor(o) + smooth(0.3, 0.85, o - Math.floor(o)), N - 1);
      const cur = o > -0.45 && op < 0.45 ? Math.min(Math.max(Math.round(oe), 0), N - 1) : -1;
      if (cur !== lastActive) {
        lastActive = cur;
        activeRef.current = cur;
        setActive(cur);
      }

      const cw = (cardW / vw) * w;
      const chh = (cardH / vh) * h;
      const cyPx = h / 2 - (cardY / vh) * h;
      const over = !coarse && cur >= 0 && Math.abs(pointer.x - w / 2) < cw / 2 && Math.abs(pointer.y - cyPx) < chh / 2;
      if (over !== hoverRef.current) {
        hoverRef.current = over;
        setCursorLabel(over ? words.current.view : null);
      }

      const bend = reduce ? 0 : Math.max(Math.min(vel * 0.004, 0.45), -0.45);
      cards.forEach((c, i) => {
        c.mesh.position.x = (i - oe) * gap;
        c.mesh.position.y = cardY;
        const isActive = i === cur ? 1 : 0;
        c.active += (isActive - c.active) * 0.08;
        c.hover += ((isActive && over ? 1 : 0) - c.hover) * 0.1;
        const pu = c.program.uniforms;
        pu.uActive.value = c.active;
        pu.uHover.value = c.hover;
        pu.uTime.value = t;
        pu.uVel.value = bend;
        pu.uOpacity.value = smooth(-1.0, -0.45, o) * (1 - smooth(0, 0.5, op));
        if (c.src) {
          const near = Math.abs(i - oe) < 1.2 && o > -1;
          want(c.src, near);
          if (near && c.tex.image instanceof HTMLVideoElement && c.tex.image.readyState >= 2) c.tex.needsUpdate = true;
        }
      });
      if (timerCanvas && now - lastTimer > 250 && Math.abs(oe) < 1.2) {
        lastTimer = now;
        drawTimer(timerCanvas, Date.now(), words.current.timer);
        cards[0].tex.needsUpdate = true;
      }
      want("/lab/smoke.mp4", op < 0.95);
      want("/lab/stagelight.mp4", op > 0);
      if (op < 0.95 && tSmoke.image instanceof HTMLVideoElement && tSmoke.image.readyState >= 2) tSmoke.needsUpdate = true;
      if (op > 0 && tLight.image instanceof HTMLVideoElement && tLight.image.readyState >= 2) tLight.needsUpdate = true;

      // HTML 층
      if (intro.current) {
        const a = 1 - smooth(0.05, 0.5, ip);
        intro.current.style.opacity = String(a);
        intro.current.style.transform = `translate3d(0, ${-ip * 90}px, 0)`;
        intro.current.style.visibility = a < 0.01 ? "hidden" : "visible";
      }
      if (hint.current) hint.current.style.opacity = String(1 - smooth(0, 0.15, ip));
      if (chapterBox.current && titleBox.current) {
        const a = smooth(-0.5, -0.1, o) * (1 - smooth(0, 0.35, op));
        chapterBox.current.style.opacity = String(a);
        chapterBox.current.style.visibility = a < 0.01 ? "hidden" : "visible";
        titleBox.current.style.opacity = String(a);
        titleBox.current.style.visibility = a < 0.01 ? "hidden" : "visible";
        titleBox.current.style.transform = `translate3d(${-bend * 120}px, -60%, 0) skewX(${bend * -10}deg)`;
      }
      if (contact.current) {
        const a = smooth(0.35, 1, op);
        contact.current.style.opacity = String(a);
        contact.current.style.visibility = a < 0.01 ? "hidden" : "visible";
        contact.current.style.transform = `translate3d(0, ${(1 - a) * 40}px, 0)`;
      }

      renderer.render({ scene: bg, camera });
      renderer.render({ scene: dotScene, camera, clear: false });
      renderer.render({ scene, camera, clear: false });
    };
    raf = requestAnimationFrame(frame);

    const onVisibility = () => {
      running = !document.hidden;
      if (document.hidden) videos.forEach((vd) => vd.pause());
    };
    document.addEventListener("visibilitychange", onVisibility);
    const giveUp = window.setTimeout(() => setReady(true), 6000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(giveUp);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
      setCursorLabel(null);
      videos.forEach((vd) => {
        vd.pause();
        vd.removeAttribute("src");
        vd.load();
      });
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      gl.canvas.remove();
    };
  }, []);

  useEffect(() => {
    if (loaded >= 100) {
      const id = window.setTimeout(() => setReady(true), 450);
      return () => window.clearTimeout(id);
    }
  }, [loaded]);

  const goTo = (i: number) => {
    const h = window.innerHeight;
    const y = 1.3 * h + i * h + 0.55 * h;
    if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: 1.5 });
    else window.scrollTo(0, y);
  };

  const ch = active >= 0 ? CHAPTERS[active] : null;
  const title = ch ? t(ch.title) : "";
  const pad = "px-[var(--margin)]";
  const diagnosis = mailto(DIAGNOSIS_SUBJECT, t(MAIL_TEMPLATE));

  return (
    <div className={`home-stage relative ${ready ? "is-ready" : ""}`}>
      <div ref={host} className="fixed inset-0 z-0" />
      <div ref={track} aria-hidden="true" />

      {/* 인트로 */}
      <div ref={intro} className={`pointer-events-none fixed inset-0 z-10 flex flex-col justify-between ${pad} pb-[clamp(1.5rem,5vh,3.25rem)] pt-[clamp(6rem,22vh,14rem)] max-md:justify-end`}>
        <h1 className="sr-only">{t({ ko: "이흥규, AX 컨설턴트", en: "Heungkyu Lee, AX consultant" })}</h1>
        <p aria-hidden="true" className="font-extrabold leading-[1.0] tracking-[-0.055em] text-[clamp(2.75rem,0.8rem+5.4vw,7.25rem)]">
          {STATEMENT.map((line, i) => (
            <span key={line.en} className="hs-word block" style={{ ["--i" as string]: i }}>
              {t(line)}
            </span>
          ))}
        </p>
        <div className="mt-8 flex flex-col gap-1 text-[clamp(0.95rem,0.85rem+0.35vw,1.2rem)] md:flex-row md:items-baseline md:gap-12">
          <p className="hs-meta font-semibold">{t({ ko: "이흥규 · AX 컨설턴트", en: "Heungkyu Lee · AX consultant" })}</p>
          <p className="hs-meta text-muted" style={{ ["--d" as string]: "120ms" }}>
            {t({ ko: "주식회사 라이폴리 공동창업자·대표", en: "Co-founder & CEO, LiFoli Corp." })}
          </p>
        </div>
      </div>
      <div ref={hint} aria-hidden="true" className="hs-hint pointer-events-none fixed bottom-[clamp(1.5rem,5vh,3.25rem)] right-[var(--margin)] z-10 hidden h-14 w-px overflow-hidden bg-[#2a2a2a] md:block">
        <span />
      </div>

      {/* 장면 제목 */}
      <div ref={titleBox} aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-1/2 z-10 text-center max-md:top-[38%]">
        <p key={title} className="font-extrabold leading-none tracking-[-0.06em] text-white text-[clamp(3rem,1rem+7.5vw,10rem)]">
          {title.split("").map((s, i) => (
            <span key={i} className="hs-mask">
              <span className="hs-char" style={{ ["--i" as string]: i }}>
                {s === " " ? " " : s}
              </span>
            </span>
          ))}
        </p>
      </div>

      {/* 장면 설명 */}
      <div ref={chapterBox} className={`pointer-events-none fixed inset-x-0 bottom-0 z-10 ${pad} pb-[clamp(1.25rem,4vh,2.5rem)]`}>
        <div className="flex flex-col items-center text-center">
          {ch && <h2 className="sr-only">{title}</h2>}
          <p key={`l-${title}`} className="hs-line max-w-[44ch] text-[clamp(1rem,0.92rem+0.3vw,1.2rem)] leading-[1.5] text-[#a8a8a8]">
            {ch && t(ch.line)}
          </p>
          {ch && (
            <a
              key={`c-${title}`}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="link hs-line pointer-events-auto mt-3 inline-block text-[15px] font-semibold"
              data-magnetic
            >
              {t(ch.cta)}
            </a>
          )}
        </div>
        <div className="pointer-events-auto mt-5 hidden items-baseline justify-between text-[14px] text-muted md:flex">
          <button type="button" className="link transition-opacity disabled:opacity-0" disabled={active <= 0} onClick={() => goTo(active - 1)}>
            <Arrow back /> {active > 0 ? t(CHAPTERS[active - 1].title) : ""}
          </button>
          <span aria-hidden="true" className="flex gap-1.5">
            {CHAPTERS.map((c, i) => (
              <span key={c.href + i} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-ink" : "w-1.5 bg-[#3a3a3a]"}`} />
            ))}
          </span>
          <button type="button" className="link transition-opacity disabled:opacity-0" disabled={active < 0 || active >= N - 1} onClick={() => goTo(active + 1)}>
            {active >= 0 && active < N - 1 ? t(CHAPTERS[active + 1].title) : ""} <Arrow />
          </button>
        </div>
      </div>

      {/* 진단 요청 */}
      <div ref={contact} className={`fixed inset-0 z-10 flex flex-col items-center justify-center ${pad} text-center`} style={{ opacity: 0, visibility: "hidden" }}>
        <h2 className="max-w-[12ch] font-extrabold leading-[0.98] tracking-[-0.055em] text-white text-[clamp(3rem,1rem+7vw,9.5rem)]">
          {t({ ko: "30분 업무 자동화 진단", en: "The 30-minute diagnosis" })}
        </h2>
        <p className="mt-6 text-[clamp(1rem,0.92rem+0.3vw,1.25rem)] text-[#c4c4c4]">{t({ ko: "어디부터 바꿀지 함께 봅니다. 무료입니다.", en: "We look at where to start, together. It's free." })}</p>
        <div className="mt-12">
          <SlideToSend href={diagnosis} label={t({ ko: "밀어서 진단 요청", en: "Slide to request" })} button={t({ ko: "진단 요청 메일 쓰기", en: "Write the request email" })} />
        </div>
        <a href="mailto:hklee@lifoli.co.kr" className="link mt-7 inline-block text-[15px] text-[#a0a0a0]" data-magnetic>
          hklee@lifoli.co.kr
        </a>
      </div>

      {/* 화면 읽기 프로그램용 장면 목록 */}
      <nav aria-label={t({ ko: "장면", en: "Scenes" })} className="sr-only">
        <ul>
          {CHAPTERS.map((c, i) => (
            <li key={c.href + i}>
              <a href={c.href}>
                {t(c.title)}: {t(c.line)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 프리로더 */}
      <div aria-hidden="true" className={`hs-loader fixed inset-0 z-50 flex items-end justify-between bg-bg ${pad} pb-[clamp(1.25rem,4vh,2.5rem)]`} data-done={ready ? "1" : "0"}>
        <span className="text-[15px] font-semibold">HEUNGKYU LEE</span>
        <span className="num font-extrabold leading-[0.8] tracking-[-0.06em] text-[clamp(5rem,16vw,15rem)]">{loaded}</span>
      </div>

      <style>{`
        .hs-mask { display: inline-block; overflow: hidden; padding: 0.06em 0 0.1em; margin: -0.06em 0 -0.1em; vertical-align: top; }
        .hs-char { display: inline-block; }
        .hs-loader { transition: clip-path 1100ms var(--ease-in-out), visibility 0s linear 1100ms; clip-path: inset(0 0 0 0); }
        .hs-loader[data-done="1"] { clip-path: inset(0 0 100% 0); visibility: hidden; }
        .hs-hint span { position: absolute; inset: 0; background: var(--color-ink); }
        @media (prefers-reduced-motion: no-preference) {
          .hs-char { animation: hs-up 900ms var(--ease-out) both; animation-delay: calc(var(--i) * 32ms); }
          .hs-line { animation: hs-fade 800ms var(--ease-out) 180ms both; }
          .home-stage .hs-word, .home-stage .hs-meta { opacity: 0; }
          .home-stage.is-ready .hs-word { animation: hs-word 1300ms var(--ease-out) both; animation-delay: calc(var(--i) * 140ms + 900ms); }
          .home-stage.is-ready .hs-meta { animation: hs-fade 900ms var(--ease-out) both; animation-delay: calc(1600ms + var(--d, 0ms)); }
          .hs-hint span { animation: hs-hint 1800ms var(--ease-in-out) infinite; }
        }
        @keyframes hs-up { from { transform: translateY(105%); } }
        @keyframes hs-fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes hs-word { 0% { opacity: 0; transform: translateY(0.35em); filter: blur(12px); } 60% { opacity: 1; filter: blur(0); } 100% { opacity: 1; transform: none; } }
        @keyframes hs-hint { 0% { transform: translateY(-100%); } 60%, 100% { transform: translateY(100%); } }
      `}</style>
    </div>
  );
}
