"use client";

import { useI18n } from "@/components/i18n-provider";
import { BigList, PageIntro } from "@/components/stage/parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function InsightsContent() {
  const { t } = useI18n();
  return (
    <>
      <PageIntro
        label="WRITING"
        title={t({ ko: "글", en: "Writing" })}
        lead={t({
          ko: "모델 성능보다, 실제 기업 현장에서 AI가 굴러가게 만드는 조건에 대해 씁니다.",
          en: "Less about model performance, more about the conditions that make AI work inside a real company.",
        })}
      />
      <section className="wrap pb-[var(--section)]" aria-label={t({ ko: "글 목록", en: "Essays" })}>
        <BigList
          cursor={t({ ko: "읽기", en: "Read" })}
          items={PORTFOLIO_DATA.insights.map((post) => ({
            href: `/insights/${post.id}`,
            title: t(post.title),
            meta: post.date,
            summary: t(post.summary),
            image: post.cover.src,
          }))}
        />
        <a href="/rss.xml" className="link link--under label mt-16 inline-block">
          RSS
        </a>
      </section>
    </>
  );
}
