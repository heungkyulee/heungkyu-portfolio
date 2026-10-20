"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { NAV } from "@/components/site-header";
import { CREDITS, PORTFOLIO_DATA } from "@/app/data/portfolio";

export function SiteFooter() {
  const { t } = useI18n();
  const { contact } = PORTFOLIO_DATA.profile;

  const column = "t-body flex flex-col gap-2 text-muted";
  const first = "text-ink";

  return (
    <footer className="wrap bg-surface pb-6 pt-14 footer-reveal">
      <div className="grid grid-cols-2 gap-x-[var(--gutter)] gap-y-10 md:grid-cols-12">
        <div className={`${column} md:col-span-3`}>
          <p className={first}>{t({ ko: "연락", en: "Contact" })}</p>
          <a className="link" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className={`${column} md:col-span-2`}>
          <p className={first}>{t({ ko: "둘러보기", en: "Pages" })}</p>
          {NAV.map((item) => (
            <Link key={item.href} className="link" href={item.href}>
              {t(item.label)}
            </Link>
          ))}
          <Link className="link" href="/services">
            {t({ ko: "서비스", en: "Services" })}
          </Link>
        </div>
        <div className={`${column} md:col-span-2`}>
          <p className={first}>{t({ ko: "회사", en: "Company" })}</p>
          <a className="link" href={contact.company} target="_blank" rel="noopener noreferrer">
            {t({ ko: "주식회사 라이폴리", en: "LiFoli Corp." })}
          </a>
          <span>{t(PORTFOLIO_DATA.profile.title)}</span>
        </div>
        <div className={`${column} col-span-2 md:col-span-5`}>
          <p className={first}>{t({ ko: "사진과 영상", en: "Photographs and film" })}</p>
          {CREDITS.map((c) => (
            <a key={c.href} className="link" href={c.href} target="_blank" rel="noopener noreferrer">
              {t(c.title)}, {c.by}, {t(c.license)}
            </a>
          ))}
        </div>
      </div>

      <svg
        className="mt-[12vh] w-full fill-ink"
        viewBox="0 0 1000 104"
        role="img"
        aria-label="Heungkyu Lee"
      >
        <text
          x="0"
          y="94"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          style={{ fontSize: 118, fontWeight: 800, fontStretch: "150%", fontFamily: "var(--font-latin)" }}
        >
          HEUNGKYU LEE
        </text>
      </svg>
      <p className="t-small mt-4 flex justify-between text-muted">
        <span>© 2026 {t(PORTFOLIO_DATA.profile.name)}</span>
        <span>{t({ ko: "주식회사 라이폴리", en: "LiFoli Corp." })}</span>
      </p>
    </footer>
  );
}
