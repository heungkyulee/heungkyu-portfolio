"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useI18n } from "@/components/i18n-provider";
import { ReportCard } from "@/components/report-card";
import { BigList, Rise } from "@/components/stage/parts";
import { PORTFOLIO_DATA, type ArticleBlock } from "@/app/data/portfolio";

function Block({ block }: { block: ArticleBlock }) {
  const { t } = useI18n();
  switch (block.type) {
    case "p":
      return <p className="t-body text-ink-soft [line-height:1.9]">{t(block.text)}</p>;
    case "h2":
      return <h2 className="mt-12 text-[clamp(1.6rem,1.2rem+1.4vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.035em]">{t(block.text)}</h2>;
    case "h3":
      return <h3 className="t-lead mt-4 font-bold">{t(block.text)}</h3>;
    case "list":
      return (
        <ul className="t-body m-0 flex list-disc flex-col gap-2 pl-6 text-ink-soft marker:text-muted">
          {block.items.map((item) => (
            <li key={item.ko}>{t(item)}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote className="m-0 my-10 text-[clamp(1.6rem,1.1rem+1.8vw,2.75rem)] font-bold leading-[1.25] tracking-[-0.035em] text-white">{t(block.text)}</blockquote>;
    case "report":
      return <ReportCard title={block.title} text={block.text} className="my-6" />;
    case "pairs":
      return (
        <dl className="m-0 flex flex-col gap-5 rounded-3xl bg-surface p-[clamp(1.5rem,3vw,2.25rem)]">
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
  const bar = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  // 읽은 만큼 위쪽 막대가 찹니다.
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!bar.current || !body.current) return;
      const r = body.current.getBoundingClientRect();
      const p = Math.min(Math.max((window.innerHeight * 0.5 - r.top) / r.height, 0), 1);
      bar.current.style.transform = `scaleX(${p})`;
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-ink" />
      </div>

      <header className="wrap flex min-h-[72svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-36">
        <p data-fade className="label num" style={{ ["--d" as string]: "150ms" }}>
          WRITING · {post.date}
        </p>
        <h1 className="t-head mt-5 max-w-[18ch]">
          <Rise text={t(post.title)} />
        </h1>
        <p data-fade className="t-lead mt-8 max-w-[42ch] text-ink-soft" style={{ ["--d" as string]: "700ms" }}>
          {t(post.summary)}
        </p>
      </header>

      <figure data-in className="m-0 overflow-hidden">
        <div className="relative aspect-[16/9] max-h-[80svh] w-full overflow-hidden">
          <Image src={post.cover.src} alt={t(post.cover.alt)} fill priority sizes="100vw" className="photo zoom-in object-cover" />
        </div>
        <figcaption className="wrap label mt-3 font-normal">{t(post.cover.caption)}</figcaption>
      </figure>

      <article className="wrap grid-12 py-[var(--section)]">
        <div ref={body} className="col-span-12 flex max-w-[68ch] flex-col gap-6 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="wrap pb-[var(--section)]" aria-labelledby="more-title">
          <h2 id="more-title" className="label">
            {t({ ko: "다른 글", en: "More writing" })}
          </h2>
          <div className="mt-6">
            <BigList
              tag="h3"
              cursor={t({ ko: "읽기", en: "Read" })}
              items={others.map((o) => ({ href: `/insights/${o.id}`, title: t(o.title), meta: o.date, summary: t(o.summary), image: o.cover.src }))}
            />
          </div>
        </section>
      )}
    </>
  );
}
