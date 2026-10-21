"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useI18n } from "@/components/i18n-provider";
import { DIAGNOSIS_SUBJECT, MAIL_TEMPLATE, mailto } from "@/app/data/portfolio";

// 모든 페이지가 함께 쓰는 무대 장치: 부드러운 스크롤, 헤더와 메뉴, 커서, 자석, 글자 섞기, 화면에 들어올 때 켜지기.

export const lenisRef: { current: Lenis | null } = { current: null };

// 화면 어디서든 커서 안에 글자를 띄웁니다(null이면 지움).
export function setCursorLabel(label: string | null) {
  window.dispatchEvent(new CustomEvent("cursor-label", { detail: label }));
}

export const NAV = [
  { href: "/projects", label: "WORK" },
  { href: "/services", label: "SERVICES" },
  { href: "/insights", label: "WRITING" },
  { href: "/about", label: "ABOUT" },
];

const GLYPHS = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789#%&*+=";
function scramble(el: HTMLElement) {
  if (el.dataset.busy) return;
  const text = el.dataset.text ?? el.textContent ?? "";
  el.dataset.text = text;
  el.dataset.busy = "1";
  let frame = 0;
  const id = window.setInterval(() => {
    frame += 1;
    el.textContent = [...text].map((c, i) => (c === " " || i < (frame / 14) * text.length ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");
    if (frame >= 14) {
      window.clearInterval(id);
      el.textContent = text;
      delete el.dataset.busy;
    }
  }, 28);
}

const seoul = () =>
  new Intl.DateTimeFormat("ko-KR", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());

export function StageChrome() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState("");
  const cursor = useRef<HTMLDivElement>(null);
  const contact = mailto(DIAGNOSIS_SUBJECT, t(MAIL_TEMPLATE));

  // 스크롤·커서·자석·글자 섞기
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!coarse) document.documentElement.classList.add("has-cursor");
    const lenis = reduce ? null : new Lenis({ lerp: 0.085, smoothWheel: true, autoRaf: true });
    lenisRef.current = lenis;

    const p = { x: -200, y: -200, cx: -200, cy: -200 };
    let hovered: string | null = null;
    let forced: string | null = null;
    const paint = () => {
      const el = cursor.current;
      if (!el) return;
      const l = forced ?? hovered;
      if (l) {
        el.dataset.label = l;
        el.firstElementChild!.textContent = l;
      } else delete el.dataset.label;
    };
    const onMove = (e: PointerEvent) => {
      p.x = e.clientX;
      p.y = e.clientY;
      if (coarse || reduce) return;
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((m) => {
        const r = m.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const pull = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.9 + 40 ? 0.3 : 0;
        m.style.transform = pull ? `translate3d(${dx * pull}px, ${dy * pull}px, 0)` : "";
      });
    };
    const onOver = (e: Event) => {
      const el = e.target as HTMLElement;
      const s = el.closest<HTMLElement>("[data-scramble]");
      if (s && !reduce) scramble(s);
      hovered = el.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? null;
      paint();
    };
    const onLabel = (e: Event) => {
      forced = (e as CustomEvent<string | null>).detail;
      paint();
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    window.addEventListener("cursor-label", onLabel);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      p.cx += (p.x - p.cx) * 0.22;
      p.cy += (p.y - p.cy) * 0.22;
      if (cursor.current) cursor.current.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0)`;
    };
    if (!coarse) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("cursor-label", onLabel);
      lenis?.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  // 페이지가 바뀔 때: 맨 위로, 메뉴 닫기, 등장 블록 다시 찾기
  useEffect(() => {
    const close = window.setTimeout(() => setOpen(false), 0);
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    setCursorLabel(null);
    let heard = false;
    const io = new IntersectionObserver(
      (entries) => {
        heard = true;
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    const scan = () => document.querySelectorAll("[data-in]:not(.is-in)").forEach((n) => io.observe(n));
    scan();
    const later = window.setTimeout(scan, 400);
    // 관찰 결과가 오지 않는 환경에서는 전부 보여 줍니다.
    const failsafe = window.setTimeout(() => {
      if (!heard) document.querySelectorAll("[data-in]").forEach((n) => n.classList.add("is-in"));
    }, 1500);
    return () => {
      window.clearTimeout(close);
      window.clearTimeout(later);
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const tick = () => setClock(seoul());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 30_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (open) lenisRef.current?.stop();
    else lenisRef.current?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const langToggle = (
    <span className="flex items-center gap-2" role="group" aria-label="Language">
      {(["ko", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLanguage(l)}
          aria-pressed={language === l}
          className={`uppercase transition-opacity ${language === l ? "opacity-100" : "opacity-45 hover:opacity-100"}`}
        >
          {l}
        </button>
      ))}
    </span>
  );

  return (
    <>
      <header className="wrap fixed inset-x-0 top-0 z-40 flex items-center justify-between py-6 text-[15px] text-white mix-blend-difference">
        <Link href="/" className="link inline-block whitespace-nowrap font-semibold" data-magnetic data-scramble aria-label={t({ ko: "홈", en: "Home" })}>
          HEUNGKYU LEE
        </Link>
        <nav aria-label={t({ ko: "주요 메뉴", en: "Main" })} className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              className={`link inline-block ${pathname.startsWith(n.href) ? "underline decoration-current" : ""}`}
              data-magnetic
              data-scramble
            >
              {n.label}
            </Link>
          ))}
          {langToggle}
          <span className="num hidden opacity-55 lg:inline">SEOUL {clock}</span>
          <a href={contact} className="link inline-block" data-magnetic data-scramble>
            CONTACT
          </a>
        </nav>
        <button type="button" className="md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((v) => !v)}>
          {open ? "CLOSE" : "MENU"}
        </button>
      </header>

      {/* 폰 메뉴 */}
      <div
        id="menu"
        className={`wrap fixed inset-0 z-30 flex flex-col justify-between bg-bg pb-8 pt-28 transition-[clip-path] duration-700 ease-[var(--ease-in-out)] md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label={t({ ko: "메뉴", en: "Menu" })} className="flex flex-col gap-1">
          {[{ href: "/", label: "HOME" }, ...NAV].map((n) => (
            <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1} className="t-head py-1" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-end justify-between text-[15px]">
          <a href={contact} tabIndex={open ? 0 : -1} className="link link--under">
            hklee@lifoli.co.kr
          </a>
          {langToggle}
        </div>
      </div>

      <div ref={cursor} aria-hidden="true" className="cursor">
        <span />
      </div>
    </>
  );
}
