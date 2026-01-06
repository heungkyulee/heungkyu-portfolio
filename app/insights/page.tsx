import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import InsightsList from "./insights-list";
import { SITE_OG_IMAGE, SITE_URL, parseLooseDate } from "@/lib/seo";

export const metadata: Metadata = {
  title: "인사이트",
  description:
    "AX(업무 전환)·AI 에이전트·소프트웨어 주권·운영의 현실에 대한 짧고 밀도 높은 글 모음입니다.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/insights`,
    title: "인사이트 | 이흥규",
    description:
      "AX(업무 전환)·AI 에이전트·소프트웨어 주권·운영의 현실에 대한 짧고 밀도 높은 글 모음입니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "인사이트 | 이흥규",
    description:
      "AX(업무 전환)·AI 에이전트·소프트웨어 주권·운영의 현실에 대한 짧고 밀도 높은 글 모음입니다.",
    images: [SITE_OG_IMAGE],
  },
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights",
    url: `${SITE_URL}/insights`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PORTFOLIO_DATA.insights.map((i, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/insights/${i.id}`,
        name: i.title.ko,
        datePublished: parseLooseDate(i.date)?.toISOString(),
      })),
    },
  };

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 overflow-hidden">
        <SiteHeader />
        <header className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              인사이트
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
              전략과 운영 사이의 간극을 줄이기 위한 짧은 브리프입니다. AX, AI 에이전트,
              데이터 흐름, 소프트웨어 주권을 다룹니다.
            </p>
          </div>
        </header>
        <InsightsList />
        <SiteFooter />
      </main>
    </I18nProvider>
  );
}


