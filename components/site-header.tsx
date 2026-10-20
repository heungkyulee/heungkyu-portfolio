"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export const NAV = [
  { href: "/about", label: { ko: "소개", en: "About" } },
  { href: "/projects", label: { ko: "프로젝트", en: "Projects" } },
  { href: "/insights", label: { ko: "인사이트", en: "Insights" } },
];

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();
  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {(["ko", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          aria-label={lang === "ko" ? "한국어" : "English"}
          className={`t-small min-h-10 min-w-10 px-2 uppercase transition-colors ${
            language === lang ? "text-ink" : "text-muted hover:text-ink"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="wrap relative z-30 flex h-[var(--nav-h)] items-center justify-between bg-bg">
      <Link href="/" className="link t-body flex items-center gap-3 font-semibold text-ink" aria-label={t({ ko: "홈", en: "Home" })}>
        <span aria-hidden="true" className="t-wide text-[0.8125rem] leading-none">
          HK
        </span>
        {t(PORTFOLIO_DATA.profile.name)}
      </Link>

      <nav className="hidden items-center gap-8 md:flex" aria-label={t({ ko: "주요 메뉴", en: "Main" })}>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            className={`link t-small ${pathname.startsWith(item.href) ? "text-ink" : "text-ink-soft"}`}
          >
            {t(item.label)}
          </Link>
        ))}
        <LanguageToggle />
        <Link href="/#contact" className="link link--under t-small text-ink">
          {t({ ko: "연락하기", en: "Contact" })}
        </Link>
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <Link href="/#contact" className="link link--under t-small px-2 text-ink">
          {t({ ko: "연락하기", en: "Contact" })}
        </Link>
        <button
          type="button"
          className="t-small min-h-10 px-2 text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t({ ko: "닫기", en: "Close" }) : t({ ko: "메뉴", en: "Menu" })}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="wrap fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-30 flex flex-col justify-between bg-bg pb-10 md:hidden"
        >
          <nav className="flex flex-col gap-2 pt-6" aria-label={t({ ko: "주요 메뉴", en: "Main" })}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="t-head py-1 text-ink">
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      )}
    </header>
  );
}
