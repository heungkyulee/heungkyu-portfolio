"use client";

import Image from "next/image";
import type { Project } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";

// 실제 화면이 있는 프로젝트는 그 화면을, 없는 프로젝트는 목록에 없는 설명·문제·결과를 담은 카드를 보여 줍니다.
// ponytail: 화면 캡처는 익히만 있음. 다른 프로젝트 캡처가 생기면 SCREENS에 경로만 추가.
export const SCREENS: Record<string, string> = {
  ikhi: "/work/ikhi.jpg",
};


export function ProjectStill({
  project,
  className = "",
  sizes = "(min-width: 768px) 30vw, 100vw",
}: {
  project: Project;
  className?: string;
  sizes?: string;
}) {
  const { t } = useI18n();
  const screen = SCREENS[project.id];

  if (screen) {
    return (
      <div className={`overflow-clip bg-surface ${className}`}>
        <div className="relative h-full w-full">
          <Image
            src={screen}
            alt={t({ ko: `${project.title.ko} 첫 화면`, en: `${project.title.en} home screen` })}
            fill
            sizes={sizes}
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col justify-end bg-surface p-[clamp(1.25rem,2.4vw,2rem)] ${className}`}>
      <p className="t-lead font-semibold text-ink">{t(project.title)}</p>
      <p className="t-body mt-3 max-w-[30ch] text-ink-soft">{t(project.description)}</p>
      <p className="t-body mt-8 max-w-[32ch] text-ink-soft">{t(project.problem)}</p>
      <p className="t-body mt-4 max-w-[32ch] text-ink">{t(project.impact)}</p>
    </div>
  );
}
