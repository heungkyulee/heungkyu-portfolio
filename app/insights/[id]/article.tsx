"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PageHead, CtaBand } from "@/components/page-parts";
import { ReportCard } from "@/components/report-card";
import { PORTFOLIO_DATA, type ArticleBlock } from "@/app/data/portfolio";

function Block({ block }: { block: ArticleBlock }) {
  const { t } = useI18n();
  switch (block.type) {
    case "p":
      return <p className="t-body text-ink-soft">{t(block.text)}</p>;
    case "h2":
      return <h2 className="t-lead mt-10 font-semibold">{t(block.text)}</h2>;
    case "h3":
      return <h3 className="t-body mt-4 font-semibold">{t(block.text)}</h3>;
    case "list":
      return (
        <ul className="t-body m-0 flex list-disc flex-col gap-2 pl-6 text-ink-soft marker:text-muted">
          {block.items.map((item) => (
            <li key={item.ko}>{t(item)}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="t-lead m-0 my-6 py-2 pl-[clamp(1rem,4vw,3rem)] text-ink">{t(block.text)}</blockquote>
      );
    case "report":
      return <ReportCard title={block.title} text={block.text} className="my-4" />;
    case "pairs":
      return (
        <dl className="m-0 flex flex-col gap-5 bg-surface p-[clamp(1.25rem,3vw,2rem)]">
          {block.items.map((item) => (
            <div key={item.title.ko} className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6">
              <dt className="t-body font-semibold text-ink">{t(item.title)}</dt>
              <dd className="t-body m-0 text-ink-soft">{t(item.text)}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

export function Article({ id }: { id: string }) {
  const { t } = useI18n();
  const post = PORTFOLIO_DATA.insights.find((i) => i.id === id)!;
  const others = PORTFOLIO_DATA.insights.filter((i) => i.id !== id);

  return (
    <>
      <PageHead title={t(post.title)} lead={t(post.summary)} action={false} cover={post.cover} />

      <article className="wrap grid-12 pb-[var(--section)]">
        <p className="t-small col-span-12 mb-8 text-muted md:col-span-3 num">{post.date}</p>
        <div className="col-span-12 flex max-w-[68ch] flex-col gap-6 md:col-span-8 md:col-start-5 [&_p]:leading-[1.85]">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="wrap grid-12 gap-y-6 pb-[var(--section)]" aria-labelledby="more-title">
          <h2 id="more-title" className="t-head col-span-12 md:col-span-4">
            {t({ ko: "다른 글", en: "More" })}
          </h2>
          <ul className="col-span-12 m-0 flex list-none flex-col gap-8 p-0 md:col-span-8 md:col-start-5">
            {others.map((o) => (
              <li key={o.id}>
                <Link href={`/insights/${o.id}`} className="link link--under t-lead text-ink">
                  {t(o.title)}
                </Link>
                <p className="t-body mt-2 text-ink-soft">{t(o.summary)}</p>
              </li>
            ))}
            <li>
              <Link href="/insights" className="link link--under t-body text-ink-soft">
                {t({ ko: "인사이트 목록 보기", en: "All insights" })}
              </Link>
            </li>
          </ul>
        </section>
      )}

      <CtaBand />
    </>
  );
}
