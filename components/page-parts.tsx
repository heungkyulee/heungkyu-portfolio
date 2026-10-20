"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { FilmLoop } from "@/components/film-loop";
import { diagnosisMailto, type Cover, MAIL_TEMPLATE } from "@/app/data/portfolio";

export function PageHead({
  title,
  lead,
  action = true,
  cover,
}: {
  title: string;
  lead?: string;
  action?: boolean;
  cover?: Cover;
}) {
  const { t } = useI18n();
  return (
    <header className="wrap grid-12 gap-y-12 pb-[clamp(5rem,8vw,7rem)] pt-[clamp(3rem,10vw,9rem)]">
      <div className={`col-span-12 ${cover ? "lg:col-span-7" : "lg:col-span-9"} lg:self-end`}>
        <h1 className="lines t-head max-w-[20ch]">
          <span className="line">
            <span data-line>{title}</span>
          </span>
        </h1>
        {lead && (
          <p data-load className="t-lead mt-8 max-w-[40ch] text-ink-soft">
            {lead}
          </p>
        )}
        {action && (
          <a data-load style={{ ["--d" as string]: "520ms" }} href={diagnosisMailto(t(MAIL_TEMPLATE))} className="btn mt-10">
            {t({ ko: "진단 요청하기", en: "Request a diagnosis" })}
          </a>
        )}
      </div>
      {cover && (
        <figure className="col-span-12 m-0 md:col-span-8 md:col-start-5 lg:col-span-4 lg:col-start-9">
          <div data-open className="relative aspect-[4/5] overflow-clip bg-surface">
            <Image src={cover.src} alt={t(cover.alt)} fill preload sizes="(min-width: 1024px) 32vw, (min-width: 768px) 66vw, 100vw" className="photo object-cover" />
          </div>
          <figcaption className="t-small mt-3 text-muted">{t(cover.caption)}</figcaption>
        </figure>
      )}
    </header>
  );
}

// 제목은 왼쪽 1/3, 본문은 오른쪽 2/3에 두는 긴 글 행
export function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section data-item className="grid-12 gap-y-4 py-10 md:py-14">
      <h2 className="t-lead col-span-12 font-semibold md:col-span-4">
        {title}
      </h2>
      <div className="col-span-12 max-w-[64ch] md:col-span-8">
        {children}
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="relative" aria-labelledby="cta-title">
      <FilmLoop className="relative h-[60svh] md:h-[80svh]" controlsClassName="bottom-auto top-[var(--margin)]" />
      <div className="wrap relative z-10 max-md:-mt-24 md:absolute md:inset-x-0 md:bottom-[var(--margin)]">
        <div className="grid-12 gap-y-6 bg-surface p-[clamp(1.5rem,4vw,3rem)]">
          <div className="col-span-12 md:col-span-7">
            <h2 id="cta-title" className="t-head">
              {t({ ko: "30분 업무 자동화 진단", en: "The 30-minute diagnosis" })}
            </h2>
            <p className="t-body mt-5 max-w-[44ch] text-ink-soft">
              {t({
                ko: "지금 상황, 막히는 지점, 원하는 결과를 2~3문장으로 보내 주세요. 진단은 온라인으로 진행합니다.",
                en: "Send two or three sentences on where things stand, where they get stuck and what you want. The diagnosis is held online.",
              })}
            </p>
          </div>
          <div className="col-span-12 flex flex-col items-start gap-4 self-end md:col-span-4 md:col-start-9 md:items-end">
            <a href={diagnosisMailto(t(MAIL_TEMPLATE))} className="btn">
              {t({ ko: "진단 요청하기", en: "Request a diagnosis" })}
            </a>
            <Link href="/#diagnosis" className="link link--under t-small text-ink-soft">
              {t({ ko: "반복 업무 시간 먼저 계산해 보기", en: "Count the hours first" })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
