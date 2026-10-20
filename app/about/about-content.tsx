"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PageHead, Row, CtaBand } from "@/components/page-parts";
import { RecordTable } from "@/components/record-table";
import { PORTFOLIO_DATA, introLine } from "@/app/data/portfolio";

const BIO = [
  {
    ko: "2022년 9월 라이폴리 창업팀을 시작했고, 2023년 9월 26일 주식회사 라이폴리를 세워 대표를 맡고 있습니다. 공동창업자 두 사람이 운영하는 회사에서 기획, 디자인, 개발, 배포, 운영을 직접 합니다.",
    en: "I started the LiFoli founding team in September 2022 and incorporated LiFoli Corp. on 26 September 2023, where I am CEO. It is a company of two co-founders, and I do the planning, design, development, deployment and operation myself.",
  },
  {
    ko: "Claude Code와 Codex 같은 에이전틱 AI를 매일 쓰고, 회사에 꼭 필요한 부분은 기존 도구와 호환되게 직접 만듭니다.",
    en: "I work with agentic AI such as Claude Code and Codex every day, and build the parts a company truly needs so they fit the tools it already uses.",
  },
  {
    ko: "성균관대학교에서 융합생명공학과 인공지능융합을 복수전공하고 있으며 2027년 8월 졸업 예정입니다. 하나증권과 성균관대학교 창업지원단에서 AI와 업무 자동화를 강의했습니다.",
    en: "I am double-majoring in Biotechnology and AI at Sungkyunkwan University, graduating in August 2027, and have taught AI and work automation for Hana Securities and the SKKU Startup Support Foundation.",
  },
];

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
      <PageHead
        title={t(profile.name)}
        lead={introLine(t(profile.title), t(profile.line))}
        cover={{
          src: "/portrait-tall.jpg",
          alt: { ko: "바닷가 언덕에서 하늘을 올려다보는 이흥규", en: "Heungkyu Lee looking up on a coastal hill" },
          caption: { ko: "이흥규", en: "Heungkyu Lee" },
        }}
      />

      <div className="wrap">
        <Row title={t({ ko: "약력", en: "Biography" })}>
          <div className="flex flex-col gap-5">
            {BIO.map((p) => (
              <p key={p.ko} className="t-lead max-w-[40ch] text-ink-soft">
                {t(p)}
              </p>
            ))}
          </div>
        </Row>

        <Row title={t({ ko: "맡는 일", en: "What I take on" })}>
          <ul className="m-0 flex list-none flex-col gap-8 p-0">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="link link--under t-lead text-ink">
                  {t(s.title)}
                </Link>
                <p className="t-body mt-2 max-w-[52ch] text-ink-soft">{t(s.summary)}</p>
              </li>
            ))}
          </ul>
        </Row>

        <Row title={t({ ko: "경력", en: "Experience" })}>
          <ul className="m-0 flex list-none flex-col gap-8 p-0">
            {experience.map((e) => (
              <li key={e.period} className="grid gap-1 md:grid-cols-[12rem_1fr] md:gap-6">
                <span className="t-body text-muted num">{e.period}</span>
                <div>
                  <p className="t-lead text-ink">
                    {t(e.company)}, {t(e.role)}
                  </p>
                  <p className="t-body mt-2 max-w-[52ch] text-ink-soft">{t(e.description)}</p>
                </div>
              </li>
            ))}
          </ul>
        </Row>

        <Row title={t({ ko: "쓰는 도구", en: "Tools I use" })}>
          <dl className="m-0 flex flex-col gap-5">
            {(Object.keys(STACK_LABELS) as (keyof typeof STACK_LABELS)[]).map((k) => (
              <div key={k} className="grid gap-1 md:grid-cols-[12rem_1fr] md:gap-6">
                <dt className="t-body text-muted">{t(STACK_LABELS[k])}</dt>
                <dd className="t-body m-0 text-ink">{techStack[k].join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Row>
      </div>

      <section className="wrap section" aria-labelledby="about-record">
        <h2 id="about-record" className="t-head mb-14">
          {t({ ko: "걸어온 길", en: "Record" })}
        </h2>
        <RecordTable />
      </section>

      <CtaBand />
    </>
  );
}
