"use client";

import Image from "next/image";
import { useI18n } from "@/components/i18n-provider";
import { RecordTable } from "@/components/record-table";
import { BigList, PageIntro, ScrubText } from "@/components/stage/parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

const STATEMENT = {
  ko: "2022년 창업팀을 시작해 주식회사 라이폴리를 세웠습니다. 회사의 일을 진단하고, 기획부터 디자인, 개발, 배포, 운영까지 직접 합니다. Claude Code와 Codex 같은 에이전틱 AI를 매일 쓰고, 꼭 필요한 부분은 기존 도구와 맞물리게 직접 만듭니다.",
  en: "I started the founding team in 2022 and incorporated LiFoli Corp. I diagnose how a company works and do the planning, design, development, deployment and operation myself. I work with agentic AI such as Claude Code and Codex every day, and build what a company truly needs so it fits the tools it already uses.",
};

const STACK_LABELS = {
  product: { ko: "제품", en: "Product" },
  data: { ko: "데이터·백엔드", en: "Data and backend" },
  ai: { ko: "AI·자동화", en: "AI and automation" },
  tools: { ko: "작업 도구", en: "Tools" },
};

export function AboutContent() {
  const { t } = useI18n();
  const { profile, services, experience, techStack } = PORTFOLIO_DATA;

  return (
    <>
      <PageIntro label="ABOUT" title={t(profile.name)} lead={`${t(profile.title)}. ${t({ ko: "AX 컨설턴트.", en: "AX consultant." })}`} />

      {/* 사진과 한 문단 */}
      <section className="wrap grid-12 items-start gap-y-14 pb-[var(--section)]">
        <figure data-in className="col-span-12 m-0 overflow-hidden rounded-3xl md:col-span-5">
          <div className="relative aspect-[4/5]">
            <Image src="/portrait-tall.jpg" alt={t({ ko: "바닷가 언덕에서 하늘을 올려다보는 이흥규", en: "Heungkyu Lee looking up on a coastal hill" })} fill sizes="(min-width: 768px) 40vw, 100vw" className="photo zoom-in object-cover" />
          </div>
        </figure>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <ScrubText text={t(STATEMENT)} className="text-[clamp(1.6rem,1rem+2vw,3rem)] font-bold leading-[1.25] tracking-[-0.03em]" />
        </div>
      </section>

      {/* 맡는 일 */}
      <section className="wrap pb-[var(--section)]" aria-labelledby="about-services">
        <h2 id="about-services" className="label">
          {t({ ko: "맡는 일", en: "What I take on" })}
        </h2>
        <div className="mt-6">
          <BigList
            tag="h3"
            cursor={t({ ko: "보기", en: "View" })}
            items={services.map((s) => ({ href: `/services/${s.slug}`, title: t(s.title), summary: t(s.summary), image: s.cover.src }))}
          />
        </div>
      </section>

      {/* 경력 */}
      <section className="wrap grid-12 gap-y-10 pb-[var(--section)]" aria-labelledby="about-exp">
        <h2 id="about-exp" className="label col-span-12 md:col-span-3">
          {t({ ko: "경력", en: "Experience" })}
        </h2>
        <ul className="col-span-12 m-0 flex list-none flex-col gap-12 p-0 md:col-span-9">
          {experience.map((e, i) => (
            <li key={e.period} data-in style={{ ["--d" as string]: `${i * 80}ms` }} className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
              <span className="label num">{e.period}</span>
              <div>
                <p className="text-[clamp(1.5rem,1.1rem+1.4vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.03em]">
                  {t(e.company)}
                  <span className="text-muted">, {t(e.role)}</span>
                </p>
                <p className="t-body mt-3 max-w-[56ch] text-ink-soft">{t(e.description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 기록 */}
      <section className="wrap grid-12 gap-y-10 pb-[var(--section)]" aria-labelledby="about-record">
        <h2 id="about-record" className="label col-span-12 md:col-span-3">
          {t({ ko: "걸어온 길", en: "Record" })}
        </h2>
        <div className="col-span-12 md:col-span-9">
          <RecordTable />
        </div>
      </section>

      {/* 도구 */}
      <section className="wrap grid-12 gap-y-10 pb-[var(--section)]" aria-labelledby="about-tools">
        <h2 id="about-tools" className="label col-span-12 md:col-span-3">
          {t({ ko: "쓰는 도구", en: "Tools I use" })}
        </h2>
        <dl className="col-span-12 m-0 flex flex-col gap-8 md:col-span-9">
          {(Object.keys(STACK_LABELS) as (keyof typeof STACK_LABELS)[]).map((k) => (
            <div key={k} data-in className="grid gap-3 md:grid-cols-[11rem_1fr] md:gap-8">
              <dt className="label">{t(STACK_LABELS[k])}</dt>
              <dd className="m-0 flex flex-wrap gap-2">
                {techStack[k].map((s) => (
                  <span key={s} className="rounded-full bg-surface-2 px-4 py-2 text-[15px] text-ink-soft">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
