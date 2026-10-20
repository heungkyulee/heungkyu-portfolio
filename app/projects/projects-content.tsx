"use client";

import { useI18n } from "@/components/i18n-provider";
import { PageHead, CtaBand } from "@/components/page-parts";
import { WorkIndex } from "@/components/work-index";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function ProjectsContent() {
  const { t } = useI18n();
  return (
    <>
      <PageHead
        title={t({ ko: "프로젝트", en: "Projects" })}
        lead={t({
          ko: "직접 만든 서비스와 고객 프로젝트입니다. 이름을 누르면 문제, 해결, 결과를 볼 수 있습니다.",
          en: "Products I made myself and work for clients. Open a name to read the problem, the solution and the result.",
        })}
      />
      <section className="wrap pb-[var(--section)]" aria-label={t({ ko: "프로젝트 목록", en: "Project list" })}>
        <WorkIndex projects={PORTFOLIO_DATA.projects} nameTag="h2" />
      </section>
      <CtaBand />
    </>
  );
}
