"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { Rise, SCREENS, ScrubText } from "@/components/stage/parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

// 케이스 스터디: 큰 이름 → 스크롤로 켜지는 문제 문장 → (Famo) 6단계 작업 흐름이 가로로 지나감 → 결과 → 해결과 기술 → 다음 프로젝트.

const OWNER = {
  own: { ko: "직접 만든 서비스", en: "Own product" },
  client: { ko: "고객 프로젝트", en: "Client project" },
};

function useCountdown(on: boolean) {
  const [left, setLeft] = useState(20 * 60);
  useEffect(() => {
    if (!on) return;
    const tick = () => setLeft(20 * 60 - (Math.floor(Date.now() / 1000) % (20 * 60)));
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [on]);
  return `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
}

export function CaseStudy({ id }: { id: string }) {
  const { t } = useI18n();
  const { projects, famoCase } = PORTFOLIO_DATA;
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const screen = SCREENS[project.id];
  const isFamo = project.id === "famo-play-factory";
  const timer = useCountdown(isFamo);
  const pipeline = useRef<HTMLElement>(null);
  const rail = useRef<HTMLOListElement>(null);
  const [stage, setStage] = useState(0);
  const steps = famoCase.stages.length;

  // 작업 흐름: 세로 스크롤을 가로 이동으로 바꿉니다.
  useEffect(() => {
    if (!isFamo) return;
    let raf = 0;
    let last = -1;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!pipeline.current || !rail.current) return;
      const r = pipeline.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const prog = Math.min(Math.max(-r.top / (r.height - vh), 0), 1);
      const travel = rail.current.scrollWidth - window.innerWidth;
      rail.current.style.transform = `translate3d(${-prog * Math.max(travel, 0)}px, 0, 0)`;
      const s = Math.min(Math.floor(prog * steps * 0.999), steps - 1);
      if (s !== last) {
        last = s;
        setStage(s);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isFamo, steps]);

  const meta = [t(OWNER[project.owner]), project.year, project.category].filter(Boolean).join(" · ");

  return (
    <div className="case">
      {/* 첫 화면 */}
      <section className="wrap relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-[clamp(1.5rem,5vh,3.25rem)] pt-28">
        {isFamo && (
          <p aria-hidden="true" data-fade className="num pointer-events-none absolute inset-x-0 top-[14vh] select-none text-center font-extrabold leading-none tracking-[-0.06em] text-[#141414] text-[clamp(8rem,30vw,30rem)]" style={{ ["--d" as string]: "0ms" }}>
            {timer}
          </p>
        )}
        {screen && (
          <div data-fade className="absolute inset-x-0 top-0 h-[70svh] opacity-40" style={{ ["--d" as string]: "0ms" }}>
            <Image src={screen} alt="" fill priority sizes="100vw" className="photo object-cover object-top" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,var(--color-bg))]" /> {/* taste-skill-ignore: neutral scrim under text on a photo */}
          </div>
        )}
        <div className="relative">
          <p data-fade className="label" style={{ ["--d" as string]: "150ms" }}>
            {meta}
          </p>
          <h1 className="t-display mt-4">
            <Rise text={t(project.title)} />
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p data-fade className="t-lead max-w-[30ch] text-ink-soft" style={{ ["--d" as string]: "650ms" }}>
              {t(project.description)}
            </p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic data-fade style={{ ["--d" as string]: "750ms" }}>
                {t({ ko: "서비스 열기", en: "Open the service" })}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 문제 */}
      <section aria-labelledby="problem-title" className="wrap py-[var(--section)]">
        <h2 id="problem-title" className="label">
          {t({ ko: "문제", en: "Problem" })}
        </h2>
        <ScrubText text={t(project.problem)} className="mt-8 max-w-[22ch] text-[clamp(2rem,1rem+3.4vw,4.75rem)] font-bold leading-[1.18] tracking-[-0.035em]" />
      </section>

      {/* Famo: 작업 흐름 6단계 */}
      {isFamo && (
        <section ref={pipeline} aria-labelledby="flow-title" className="relative" style={{ height: `${steps * 55 + 100}svh` }}>
          <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
            <div className="wrap flex items-baseline justify-between">
              <h2 id="flow-title" className="label">
                {t({ ko: "하나로 이은 작업 흐름", en: "One connected flow" })}
              </h2>
              <p className="label num" aria-hidden="true">
                {stage + 1} / {steps}
              </p>
            </div>
            <ol ref={rail} className="wrap mt-10 flex list-none gap-[clamp(1rem,2vw,2rem)] p-0 will-change-transform">
              {famoCase.stages.map((s, i) => {
                const human = i === steps - 2;
                const on = i <= stage;
                return (
                  <li
                    key={s.en}
                    className={`flex h-[min(56svh,30rem)] w-[min(78vw,26rem)] shrink-0 flex-col justify-between rounded-[28px] p-[clamp(1.5rem,2.5vw,2.25rem)] transition-[background-color,color,transform] duration-700 ${
                      on ? (human ? "bg-ink text-bg" : "bg-surface-2 text-ink") : "bg-surface text-faint"
                    } ${i === stage ? "scale-100" : "scale-[0.96]"}`}
                  >
                    <span className="num text-[clamp(3.5rem,2rem+4vw,6.5rem)] font-extrabold leading-none tracking-[-0.06em]">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-[clamp(1.5rem,1.1rem+1.4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.03em]">{t(s)}</span>
                      {human && <span className={`mt-3 block text-[15px] ${on ? "text-[#555]" : ""}`}>{t({ ko: "여기서는 사람이 결정합니다.", en: "A person decides here." })}</span>}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* 결과 */}
      <section aria-labelledby="result-title" className="wrap py-[var(--section)]">
        <h2 id="result-title" className="label">
          {t({ ko: "결과", en: "Result" })}
        </h2>
        {isFamo ? (
          <div data-in className="case-result mt-10">
            <p className="font-extrabold leading-none tracking-[-0.06em] text-faint text-[clamp(4.5rem,2rem+11vw,15rem)]">
              <span className="case-strike">{t(famoCase.before)}</span>
            </p>
            <p className="t-lead mt-3 text-muted">{t(famoCase.beforeNote)}</p>
            <p className="case-after mt-[clamp(2.5rem,6vw,5rem)] text-right font-extrabold leading-none tracking-[-0.06em] text-white text-[clamp(5rem,2rem+14vw,19rem)]">{t(famoCase.after)}</p>
            <p className="case-after t-lead mt-3 text-right text-ink-soft">{t(famoCase.afterNote)}</p>
          </div>
        ) : (
          <p data-in className="mt-8 max-w-[26ch] text-[clamp(1.75rem,1rem+2.4vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.03em]">
            {t(project.impact)}
          </p>
        )}
      </section>

      {/* 해결과 기술 */}
      <section className="wrap grid grid-cols-1 gap-x-10 gap-y-16 pb-[var(--section)] md:grid-cols-12">
        <div data-in className="md:col-span-7">
          <h2 className="label">{t({ ko: "해결", en: "Solution" })}</h2>
          <p className="t-lead mt-6 text-ink-soft">{t(project.solution)}</p>
        </div>
        <div data-in className="md:col-span-4 md:col-start-9" style={{ ["--d" as string]: "120ms" }}>
          <h2 className="label">{t({ ko: "사용한 기술", en: "Built with" })}</h2>
          <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
            {project.techStack.map((s) => (
              <li key={s} className="rounded-full bg-surface-2 px-4 py-2 text-[15px] text-ink-soft">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 다음 프로젝트 */}
      <Link href={`/projects/${next.id}`} className="wrap group block py-[clamp(4rem,12vh,8rem)]" data-cursor={t({ ko: "다음", en: "Next" })}>
        <span className="label">{t({ ko: "다음 프로젝트", en: "Next project" })}</span>
        <span className="mt-4 flex items-end justify-between gap-6">
          <span className="t-display transition-transform duration-700 ease-[var(--ease-out)] group-hover:translate-x-4">{t(next.title)}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-[0.6em] size-[clamp(2rem,4vw,4rem)] shrink-0 -rotate-45 transition-transform duration-700 group-hover:rotate-0">
            <path d="M2 12h18M13 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      <style>{`
        .case-strike { position: relative; }
        .case-strike::after { content: ""; position: absolute; left: -0.03em; right: -0.03em; top: 52%; height: 0.08em; background: var(--color-ink); }
        @media (prefers-reduced-motion: no-preference) {
          .js .case-strike::after { transform: scaleX(0); transform-origin: left; transition: transform 900ms var(--ease-out) 300ms; }
          .js .case-result.is-in .case-strike::after { transform: none; }
          .js .case-after { opacity: 0; transform: translateY(0.25em); transition: opacity 900ms var(--ease-out) 800ms, transform 1100ms var(--ease-out) 800ms; }
          .js .case-result.is-in .case-after { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
