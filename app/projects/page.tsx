import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ProjectsList from "./projects-list";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "프로젝트",
  description:
    "Next.js·React·AI 에이전트·물류/업무 자동화 등 실무 문제를 끝까지 해결한 프로젝트 사례 모음입니다.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/projects`,
    title: "프로젝트 | 이흥규",
    description:
      "Next.js·React·AI 에이전트·물류/업무 자동화 등 실무 문제를 끝까지 해결한 프로젝트 사례 모음입니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "프로젝트 | 이흥규",
    description:
      "Next.js·React·AI 에이전트·물류/업무 자동화 등 실무 문제를 끝까지 해결한 프로젝트 사례 모음입니다.",
    images: [SITE_OG_IMAGE],
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${SITE_URL}/projects`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PORTFOLIO_DATA.projects.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/projects/${p.id}`,
        name: p.title.ko,
      })),
    },
  };

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
        <SiteHeader />
        <header className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              프로젝트
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
              제품·데이터·자동화·AI 에이전트까지, “현장에서 돌아가는 시스템”을 목표로 만든
              사례들입니다.
            </p>
          </div>
        </header>
        <ProjectsList />
        <SiteFooter />
      </main>
    </I18nProvider>
  );
}


