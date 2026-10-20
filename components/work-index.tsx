"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ProjectStill, SCREENS } from "@/components/project-still";
import type { Project } from "@/app/data/portfolio";

const OWNER = {
  own: { ko: "직접 만든 서비스", en: "Own product" },
  client: { ko: "고객 프로젝트", en: "Client project" },
};

export function WorkIndex({ projects, nameTag = "h3" }: { projects: Project[]; nameTag?: "h2" | "h3" }) {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const Name = nameTag;

  return (
    <div className="grid-12">
      <ol className="col-span-12 m-0 list-none p-0 md:col-span-8">
        {projects.map((p, i) => {
          const isActive = p.id === active.id;
          return (
            <li key={p.id} data-item style={{ ["--i" as string]: Math.min(i, 8) }} className="mb-8 md:mb-0 md:pb-14 lg:pb-0">
              {SCREENS[p.id] && <ProjectStill project={p} className="mb-4 aspect-[16/10] md:hidden" sizes="100vw" />}
              <Link
                href={`/projects/${p.id}`}
                onMouseEnter={() => setActiveId(p.id)}
                onFocus={() => setActiveId(p.id)}
                className="group flex flex-col gap-1 py-2 md:py-3 lg:grid lg:grid-cols-[1fr_auto] lg:items-baseline lg:gap-6"
              >
                <Name
                  className={`t-head font-semibold transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-ink md:text-muted"
                  } group-hover:text-ink`}
                >
                  {t(p.title)}
                </Name>
                <span className="t-body text-muted lg:text-right num">
                  {t(OWNER[p.owner])}
                  {p.year ? `, ${p.year}` : ""}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="hidden md:col-span-4 md:col-start-9 md:block" aria-hidden="true">
        <div className="sticky top-[15vh] aspect-[4/5]">
          <ProjectStill
            key={active.id}
            project={active}
            sizes="30vw"
            className="h-full w-full motion-safe:animate-[fade-in_240ms_var(--ease-out)]"
          />
        </div>
      </div>
    </div>
  );
}
