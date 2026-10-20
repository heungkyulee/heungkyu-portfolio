"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { Row, CtaBand } from "@/components/page-parts";
import { SCREENS } from "@/components/project-still";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

const OWNER = {
  own: { ko: "직접 만든 서비스", en: "Own product" },
  client: { ko: "고객 프로젝트", en: "Client project" },
};

export function ProjectDetail({ id }: { id: string }) {
  const { t } = useI18n();
  const { projects } = PORTFOLIO_DATA;
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const screen = SCREENS[project.id];

  const meta = [t(OWNER[project.owner]), project.year, project.category].filter(Boolean).join(", ");

  return (
    <>
      <header
        className="wrap flex min-h-[64svh] flex-col justify-between bg-surface pb-[clamp(2rem,5vw,4rem)] pt-8"
      >
        <Link href="/projects" className="link link--under t-small self-start text-ink-soft">
          {t({ ko: "프로젝트 목록", en: "All projects" })}
        </Link>
        <div className="grid-12 mt-24 gap-y-6">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="lines t-head max-w-[18ch]">
              <span className="line">
                <span data-line>{t(project.title)}</span>
              </span>
            </h1>
            <p data-load className="t-lead mt-6 max-w-[36ch] text-ink-soft">
              {t(project.description)}
            </p>
            <p data-load style={{ ["--d" as string]: "520ms" }} className="t-small mt-4 text-ink-soft num">
              {meta}
            </p>
          </div>
          {project.link && (
            <div data-load className="col-span-12 self-end lg:col-span-3 lg:col-start-10 lg:justify-self-end">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                {t({ ko: "서비스 열기", en: "Open the service" })}
              </a>
            </div>
          )}
        </div>
      </header>

      {screen && (
        <figure className="wrap m-0 pt-[var(--margin)]">
          <div data-shutter className="relative aspect-[16/10] overflow-clip bg-surface">
            <Image
              src={screen}
              alt={t({ ko: `${project.title.ko} 첫 화면`, en: `${project.title.en} home screen` })}
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </figure>
      )}

      <div className="wrap pt-[clamp(2rem,6vw,5rem)]">
        <Row title={t({ ko: "문제", en: "Problem" })}>
          <p className="t-lead max-w-[42ch] text-ink-soft">{t(project.problem)}</p>
        </Row>
        <Row title={t({ ko: "해결", en: "Solution" })}>
          <p className="t-lead max-w-[42ch] text-ink-soft">{t(project.solution)}</p>
        </Row>
        <Row title={t({ ko: "결과", en: "Result" })}>
          <p className="t-lead max-w-[42ch] text-ink">{t(project.impact)}</p>
        </Row>
        <Row title={t({ ko: "사용한 기술", en: "Built with" })}>
          <p className="t-body text-ink-soft">{project.techStack.join(", ")}</p>
        </Row>
      </div>

      <section className="wrap section" aria-labelledby="next-title">
        <div className="grid-12 gap-y-6">
          <h2 id="next-title" className="t-head col-span-12 md:col-span-5">
            {t({ ko: "다음 프로젝트", en: "Next project" })}
          </h2>
          <Link href={`/projects/${next.id}`} className="group col-span-12 block md:col-span-6 md:col-start-7">
            <span className="t-lead link link--under block text-ink">{t(next.title)}</span>
            <span className="t-body mt-2 block text-ink-soft">{t(next.description)}</span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
