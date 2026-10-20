"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PageHead, CtaBand } from "@/components/page-parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function ServicesContent() {
  const { t } = useI18n();
  return (
    <>
      <PageHead
        title={t({ ko: "서비스", en: "Services" })}
        lead={t({
          ko: "AI를 넣는 것보다 운영 체계를 바꾸는 데 집중합니다. 자주 맡는 문제와 푸는 방식입니다.",
          en: "I focus on changing how the work runs, not on adding AI. These are the problems I take on most, and how.",
        })}
      />
      <section className="wrap pb-[var(--section)]" aria-label={t({ ko: "서비스 목록", en: "Service list" })}>
        <ul className="m-0 flex list-none flex-col p-0">
          {PORTFOLIO_DATA.services.map((s, i) => (
            <li key={s.slug} data-item style={{ ["--i" as string]: i }}>
              <Link href={`/services/${s.slug}`} className="group grid-12 gap-y-4 py-[clamp(2rem,5vw,4rem)]">
                <h2 className="t-head col-span-12 underline decoration-transparent decoration-[0.06em] underline-offset-[0.18em] transition-[text-decoration-color] duration-200 group-hover:decoration-current md:col-span-6">
                  {t(s.title)}
                </h2>
                <p className="t-body col-span-12 max-w-[46ch] self-end text-ink-soft md:col-span-5 md:col-start-8">
                  {t(s.summary)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
