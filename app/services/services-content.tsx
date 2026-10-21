"use client";

import { useI18n } from "@/components/i18n-provider";
import { BigList, PageIntro } from "@/components/stage/parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function ServicesContent() {
  const { t } = useI18n();
  return (
    <>
      <PageIntro
        label="SERVICES"
        title={t({ ko: "맡는 일", en: "What I take on" })}
        lead={t({
          ko: "AI를 넣는 것보다 운영 체계를 바꾸는 데 집중합니다. 자주 맡는 문제와 푸는 방식입니다.",
          en: "I focus on changing how the work runs, not on adding AI. These are the problems I take on most, and how.",
        })}
      />
      <section className="wrap pb-[var(--section)]" aria-label={t({ ko: "서비스 목록", en: "Service list" })}>
        <BigList
          cursor={t({ ko: "보기", en: "View" })}
          items={PORTFOLIO_DATA.services.map((s) => ({ href: `/services/${s.slug}`, title: t(s.title), summary: t(s.summary), image: s.cover.src }))}
        />
      </section>
    </>
  );
}
