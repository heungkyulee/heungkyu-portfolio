"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PageHead, Row, CtaBand } from "@/components/page-parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function ServiceDetail({ slug }: { slug: string }) {
  const { t } = useI18n();
  const service = PORTFOLIO_DATA.services.find((s) => s.slug === slug)!;
  const process = slug === "ax-consulting" ? PORTFOLIO_DATA.process : null;

  return (
    <>
      <PageHead title={t(service.title)} lead={t(service.lead)} cover={service.cover} />

      <div className="wrap">
        <Row title={t({ ko: "하는 일", en: "What it covers" })}>
          <ul className="m-0 flex list-none flex-col gap-6 p-0">
            {service.points.map((p) => (
              <li key={p.ko} className="t-lead max-w-[40ch] text-ink-soft">
                {t(p)}
              </li>
            ))}
          </ul>
        </Row>

        {process && (
          <Row title={t({ ko: "진행 방식", en: "How it runs" })}>
            <ol className="m-0 flex list-none flex-col gap-8 p-0">
              {process.map((step) => (
                <li key={step.title.en}>
                  <p className="t-lead text-ink">{t(step.title)}</p>
                  <p className="t-body mt-2 max-w-[52ch] text-ink-soft">{t(step.description)}</p>
                </li>
              ))}
            </ol>
          </Row>
        )}

        {service.stack && (
          <Row title={t({ ko: "쓰는 도구", en: "Tools" })}>
            <p className="t-body text-ink-soft">{service.stack.join(", ")}</p>
          </Row>
        )}

        <Row title={t({ ko: "관련 글과 사례", en: "Related" })}>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {[
              ...service.related,
              ...PORTFOLIO_DATA.services.filter((o) => o.slug !== slug).map((o) => ({ href: `/services/${o.slug}`, title: o.title })),
            ].map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="link link--under t-lead text-ink">
                  {t(r.title)}
                </Link>
              </li>
            ))}
          </ul>
        </Row>

        <Row title={t({ ko: "자주 묻는 질문", en: "Questions" })}>
          <div className="flex flex-col gap-2">
            {service.faq.map((f) => (
              <details key={f.q.ko} className="group bg-surface">
                <summary className="t-body flex cursor-pointer list-none items-center justify-between gap-6 p-5 text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {t(f.q)}
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-45">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </summary>
                <p className="t-body max-w-[60ch] px-5 pb-6 text-ink-soft">{t(f.a)}</p>
              </details>
            ))}
          </div>
        </Row>
      </div>

      <CtaBand />
    </>
  );
}
