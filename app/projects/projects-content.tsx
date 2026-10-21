"use client";

import { useI18n } from "@/components/i18n-provider";
import { BigList, PageIntro, SCREENS } from "@/components/stage/parts";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

// AX와 가까운 일부터: 일을 맡기는 AI(Foli), 자동화한 제작 흐름(Famo), 그다음 직접 만든 서비스들.
const ORDER = ["famo-play-factory", "Famo-therapy", "conaly", "Chno-ai", "wesome", "daangols", "tikkle", "our-gwangju", "Eterners-chat", "interior-rec", "ikhi"];

export function ProjectsContent() {
  const { t } = useI18n();
  const owner = { own: t({ ko: "직접 만든 서비스", en: "Own product" }), client: t({ ko: "고객 프로젝트", en: "Client project" }) };
  const rank = (id: string) => (ORDER.indexOf(id) < 0 ? ORDER.length : ORDER.indexOf(id));
  const projects = [...PORTFOLIO_DATA.projects].sort((a, b) => rank(a.id) - rank(b.id));

  return (
    <>
      <PageIntro
        label="WORK"
        title={t({ ko: "직접 만든 것", en: "Things I built" })}
        lead={t({
          ko: "일을 진단하고, 시스템을 직접 만들었습니다. 기획부터 디자인, 개발, 운영까지.",
          en: "I diagnose the work and build the system myself, from planning and design to development and operation.",
        })}
      />
      <section className="wrap pb-[var(--section)]" aria-label={t({ ko: "작업 목록", en: "Work" })}>
        <BigList
          cursor={t({ ko: "보기", en: "View" })}
          items={[
            {
              href: "https://lifoli.co.kr/products/foli",
              external: true,
              title: "Foli",
              meta: t({ ko: "라이폴리 · 개발 중", en: "LiFoli · in the making" }),
              summary: t({ ko: "진짜 일을 맡길 수 있는 AI 동료. Bot은 맡은 일을 끝내고, 돈과 책임이 걸린 결정만 사람에게 묻습니다.", en: "An AI colleague you can hand work to. Each Bot finishes its job and asks a person only when money or responsibility is at stake." }),
              image: "/photos/foli-app-window.webp",
            },
            ...projects.map((p) => ({
              href: `/projects/${p.id}`,
              title: t(p.title),
              meta: [owner[p.owner], p.year].filter(Boolean).join(" · "),
              summary: `${t(p.description)}. ${t(p.impact)}`,
              image: SCREENS[p.id],
            })),
          ]}
        />
      </section>
    </>
  );
}
