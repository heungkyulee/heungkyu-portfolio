"use client";

import Image from "next/image";
import { useI18n } from "@/components/i18n-provider";
import { BigList, PageIntro } from "@/components/stage/parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function ServiceDetail({ slug }: { slug: string }) {
  const { t } = useI18n();
  const service = PORTFOLIO_DATA.services.find((s) => s.slug === slug)!;
  const process = slug === "ax-consulting" ? PORTFOLIO_DATA.process : null;
  const related = [
    ...service.related,
    ...PORTFOLIO_DATA.services.filter((o) => o.slug !== slug).map((o) => ({ href: `/services/${o.slug}`, title: o.title })),
  ];

  return (
    <>
      <PageIntro label="SERVICE" title={t(service.title)} lead={t(service.lead)} size="head" />

      <figure data-in className="m-0 overflow-hidden">
        <div className="relative aspect-[21/9] max-h-[70svh] w-full overflow-hidden">
          <Image src={service.cover.src} alt={t(service.cover.alt)} fill priority sizes="100vw" className="photo zoom-in object-cover" />
        </div>
        <figcaption className="wrap label mt-3 font-normal">{t(service.cover.caption)}</figcaption>
      </figure>

      {/* 하는 일 */}
      <section className="wrap grid-12 gap-y-10 py-[var(--section)]" aria-labelledby="svc-points">
        <h2 id="svc-points" className="label col-span-12 md:col-span-3">
          {t({ ko: "하는 일", en: "What it covers" })}
        </h2>
        <ul className="col-span-12 m-0 flex list-none flex-col gap-10 p-0 md:col-span-9">
          {service.points.map((p, i) => (
            <li key={p.ko} data-in style={{ ["--d" as string]: `${i * 80}ms` }} className="text-[clamp(1.5rem,1rem+1.8vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.035em]">
              {t(p)}
            </li>
          ))}
        </ul>
      </section>

      {/* 진행 방식 */}
      {process && (
        <section className="wrap pb-[var(--section)]" aria-labelledby="svc-process">
          <h2 id="svc-process" className="label">
            {t({ ko: "진행 방식", en: "How it runs" })}
          </h2>
          <ol className="mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title.en} data-in style={{ ["--d" as string]: `${i * 90}ms` }} className="flex min-h-[22rem] flex-col justify-between rounded-[28px] bg-surface p-[clamp(1.5rem,2.4vw,2.25rem)] transition-colors duration-500 hover:bg-surface-2">
                <span className="num text-[clamp(3rem,2rem+3vw,5rem)] font-extrabold leading-none tracking-[-0.06em] text-faint">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-[clamp(1.4rem,1.1rem+1vw,2rem)] font-bold leading-[1.15] tracking-[-0.03em]">{t(step.title)}</span>
                  <span className="t-body mt-3 block text-ink-soft">{t(step.description)}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 도구 */}
      {service.stack && (
        <section className="wrap grid-12 gap-y-6 pb-[var(--section)]" aria-labelledby="svc-stack">
          <h2 id="svc-stack" className="label col-span-12 md:col-span-3">
            {t({ ko: "쓰는 도구", en: "Tools" })}
          </h2>
          <ul data-in className="col-span-12 m-0 flex list-none flex-wrap gap-2 p-0 md:col-span-9">
            {service.stack.map((s) => (
              <li key={s} className="rounded-full bg-surface-2 px-4 py-2 text-[15px] text-ink-soft">
                {s}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 자주 묻는 질문 */}
      <section className="wrap grid-12 gap-y-6 pb-[var(--section)]" aria-labelledby="svc-faq">
        <h2 id="svc-faq" className="label col-span-12 md:col-span-3">
          {t({ ko: "자주 묻는 질문", en: "Questions" })}
        </h2>
        <div className="col-span-12 flex flex-col gap-3 md:col-span-9">
          {service.faq.map((f) => (
            <details key={f.q.ko} data-in className="group rounded-3xl bg-surface transition-colors duration-500 open:bg-surface-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-[clamp(1.25rem,2.4vw,2rem)] text-[clamp(1.15rem,1rem+0.6vw,1.5rem)] font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                {t(f.q)}
                <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 shrink-0 transition-transform duration-500 ease-[var(--ease-out)] group-open:rotate-45">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </summary>
              <p className="t-body max-w-[60ch] px-[clamp(1.25rem,2.4vw,2rem)] pb-[clamp(1.25rem,2.4vw,2rem)] text-ink-soft">{t(f.a)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 관련 */}
      <section className="wrap pb-[var(--section)]" aria-labelledby="svc-related">
        <h2 id="svc-related" className="label">
          {t({ ko: "관련 글과 사례", en: "Related" })}
        </h2>
        <div className="mt-6">
          <BigList tag="h3" cursor={t({ ko: "보기", en: "View" })} items={related.map((r) => ({ href: r.href, title: t(r.title) }))} />
        </div>
      </section>
    </>
  );
}
