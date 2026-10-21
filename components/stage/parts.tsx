"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { SlideToSend } from "@/components/stage/slide";
import { CREDITS, DIAGNOSIS_SUBJECT, MAIL_TEMPLATE, PORTFOLIO_DATA, mailto } from "@/app/data/portfolio";

// 실제 화면 캡처가 있는 프로젝트(공개 페이지에서 찍은 것만)
export const SCREENS: Record<string, string> = {
  ikhi: "/work/ikhi.jpg",
};

// 단어마다 가려진 줄 아래에서 올라옵니다.
export function Rise({ text, delay = 250 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split(" ").map((w, i, all) => (
        <span key={i} className="mask" style={{ ["--d" as string]: `${delay}ms` }}>
          <span style={{ ["--i" as string]: i }}>
            {w}
            {i < all.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </>
  );
}

// 페이지 첫 화면: 작은 이름표, 아주 큰 제목, 한 문장.
export function PageIntro({ label, title, lead, children, size = "display" }: { label: string; title: string; lead?: string; children?: React.ReactNode; size?: "display" | "head" }) {
  return (
    <header className="wrap flex min-h-[78svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-36">
      <p data-fade className="label" style={{ ["--d" as string]: "150ms" }}>
        {label}
      </p>
      <h1 className={`mt-5 max-w-[16ch] ${size === "display" ? "t-display" : "t-head max-w-[20ch]"}`}>
        <Rise text={title} />
      </h1>
      {lead && (
        <p data-fade className="t-lead mt-8 max-w-[40ch] text-ink-soft" style={{ ["--d" as string]: "700ms" }}>
          {lead}
        </p>
      )}
      {children}
    </header>
  );
}

// 스크롤하는 만큼 단어가 차례로 켜지는 문장
export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  useEffect(() => {
    const el = ref.current!;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.setProperty("--p", "0");
    let raf = 0;
    let on = false;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      el.style.setProperty("--p", String(Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.3), 0), 1)));
    };
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting && !on) {
        on = true;
        raf = requestAnimationFrame(loop);
      } else if (!en.isIntersecting && on) {
        on = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <p ref={ref} className={className} style={{ ["--n" as string]: words.length }}>
      {words.map((w, i) => (
        <span key={i} className="scrub-word" style={{ ["--i" as string]: i }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

export type ListItem = { href: string; title: string; meta?: string; summary?: string; image?: string; external?: boolean };

// 큰 이름 목록: 올리면 그 줄만 밝아지고 설명이 펼쳐지며, 사진이 있으면 커서를 따라 떠오릅니다.
export function BigList({ items, cursor, tag: Tag = "h2" }: { items: ListItem[]; cursor: string; tag?: "h2" | "h3" }) {
  const preview = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState<string | null>(null);
  useEffect(() => {
    const el = preview.current!;
    const p = { x: 0, y: 0, cx: 0, cy: 0 };
    const onMove = (e: PointerEvent) => {
      p.x = e.clientX;
      p.y = e.clientY;
    };
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      p.cx += (p.x - p.cx) * 0.12;
      p.cy += (p.y - p.cy) * 0.12;
      el.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0) translate(-50%, -50%) rotate(${(p.x - p.cx) * 0.03}deg)`;
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <ul className="group/list m-0 list-none p-0" onPointerLeave={() => setImg(null)}>
        {items.map((it, i) => {
          const inner = (
            <>
              <span className="label num col-span-12 md:col-span-2">{it.meta}</span>
              <Tag className="t-head col-span-11 transition-transform duration-700 ease-[var(--ease-out)] group-hover/row:translate-x-3 md:col-span-9">{it.title}</Tag>
              <span aria-hidden="true" className="col-span-1 self-center justify-self-end">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[clamp(1.5rem,2.4vw,2.5rem)] -rotate-45 transition-transform duration-700 ease-[var(--ease-out)] group-hover/row:rotate-0">
                  <path d="M2 12h18M13 5l7 7-7 7" />
                </svg>
              </span>
              {it.summary && (
                <span className="col-span-12 grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-out)] md:col-span-7 md:col-start-3 md:grid-rows-[0fr] md:group-hover/row:grid-rows-[1fr] md:group-focus-visible/row:grid-rows-[1fr]">
                  <span className="t-body overflow-hidden pt-3 text-ink-soft">{it.summary}</span>
                </span>
              )}
            </>
          );
          const cls = "group/row grid-12 items-baseline gap-y-2 py-[clamp(1.5rem,3.2vw,2.75rem)]";
          return (
            <li
              key={it.href}
              data-in
              style={{ ["--d" as string]: `${Math.min(i, 6) * 70}ms` }}
              className="transition-opacity duration-500 md:group-hover/list:opacity-30 md:hover:!opacity-100"
              onPointerEnter={() => setImg(it.image ?? null)}
            >
              {it.external ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className={cls} data-cursor={cursor}>
                  {inner}
                </a>
              ) : (
                <Link href={it.href} className={cls} data-cursor={cursor}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div ref={preview} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-20 hidden md:block">
        <div className={`relative aspect-[4/3] w-[clamp(16rem,24vw,24rem)] overflow-hidden rounded-2xl transition-[opacity,transform] duration-500 ease-[var(--ease-out)] ${img ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
          {items
            .filter((it) => it.image)
            .map((it) => (
              <Image key={it.href} src={it.image!} alt="" fill sizes="24vw" className={`photo object-cover transition-opacity duration-300 ${img === it.image ? "opacity-100" : "opacity-0"}`} />
            ))}
        </div>
      </div>
    </>
  );
}

// 모든 하위 페이지의 끝: 진단 요청과 큰 이름. 홈은 무대 마지막 장면이 이 역할을 합니다.
export function StageFooter() {
  const pathname = usePathname();
  const { t } = useI18n();
  if (pathname === "/") return null;
  const { contact } = PORTFOLIO_DATA.profile;
  const href = mailto(DIAGNOSIS_SUBJECT, t(MAIL_TEMPLATE));
  return (
    <footer className="wrap bg-surface pb-6 pt-[var(--section)]">
      <div data-in className="flex flex-col items-center text-center">
        <h2 className="t-head max-w-[12ch]">{t({ ko: "30분 업무 자동화 진단", en: "The 30-minute diagnosis" })}</h2>
        <p className="t-lead mt-6 text-ink-soft">{t({ ko: "어디부터 바꿀지 함께 봅니다. 무료입니다.", en: "We look at where to start, together. It's free." })}</p>
        <div className="mt-12">
          <SlideToSend href={href} label={t({ ko: "밀어서 진단 요청", en: "Slide to request" })} button={t({ ko: "진단 요청 메일 쓰기", en: "Write the request email" })} />
        </div>
      </div>

      <div className="mt-[clamp(6rem,14vh,9rem)] grid grid-cols-2 gap-x-[var(--gutter)] gap-y-8 text-[15px] md:grid-cols-12">
        <div className="flex flex-col gap-2 md:col-span-3">
          <p className="label">{t({ ko: "연락", en: "Contact" })}</p>
          <a className="link" href={`mailto:${contact.email}`} data-magnetic>
            {contact.email}
          </a>
          <a className="link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="flex flex-col gap-2 md:col-span-3">
          <p className="label">{t({ ko: "회사", en: "Company" })}</p>
          <a className="link" href={contact.company} target="_blank" rel="noopener noreferrer">
            {t({ ko: "주식회사 라이폴리", en: "LiFoli Corp." })}
          </a>
          <span className="text-muted">{t({ ko: "공동창업자·대표", en: "Co-founder & CEO" })}</span>
        </div>
        <p className="col-span-2 self-end text-[13px] leading-relaxed text-muted md:col-span-6 md:text-right">
          {t({ ko: "기록 사진과 영상: ", en: "Archival photographs: " })}
          {CREDITS.map((c, i) => (
            <span key={c.href}>
              {i > 0 && " · "}
              <a className="link" href={c.href} target="_blank" rel="noopener noreferrer">
                {c.by}
              </a>
            </span>
          ))}
        </p>
      </div>

      <svg className="mt-10 w-full fill-ink" viewBox="0 0 1000 118" role="img" aria-label="Heungkyu Lee">
        <text x="0" y="104" textLength="1000" lengthAdjust="spacingAndGlyphs" style={{ fontSize: 134, fontWeight: 800, letterSpacing: "-0.04em", fontFamily: "var(--font-sans)" }}>
          HEUNGKYU LEE
        </text>
      </svg>
      <p className="mt-4 text-[13px] text-muted">© 2026 {t(PORTFOLIO_DATA.profile.name)}</p>
    </footer>
  );
}
