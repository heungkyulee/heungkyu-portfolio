"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PageHead, CtaBand } from "@/components/page-parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function InsightsContent() {
  const { t } = useI18n();
  return (
    <>
      <PageHead
        action={false}
        title={t({ ko: "인사이트", en: "Insights" })}
        lead={t({
          ko: "모델 성능보다, 실제 기업 현장에서 AI가 굴러가게 만드는 조건에 대해 씁니다.",
          en: "Less about model performance, more about the conditions that make AI work inside a real company.",
        })}
      />
      <section className="wrap pb-[var(--section)]" aria-label={t({ ko: "글 목록", en: "Essays" })}>
        <ol className="m-0 flex list-none flex-col gap-[clamp(5rem,8vw,6rem)] p-0">
          {PORTFOLIO_DATA.insights.map((post, i) => (
            <li key={post.id} data-item style={{ ["--i" as string]: i }} className="grid-12 gap-y-4">
              <p className="t-small order-last col-span-12 text-muted md:order-none md:col-span-3 num">{post.date}</p>
              <div className="col-span-12 md:col-span-8 md:col-start-5">
                <h2 className="t-head">
                  <Link href={`/insights/${post.id}`} className="link">
                    {t(post.title)}
                  </Link>
                </h2>
                <p className="t-body mt-5 max-w-[56ch] text-ink-soft">{t(post.summary)}</p>
              </div>
            </li>
          ))}
        </ol>
        <a href="/rss.xml" className="link link--under t-small mt-16 inline-block text-muted">
          RSS
        </a>
      </section>
      <CtaBand />
    </>
  );
}
