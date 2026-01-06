import type { Metadata } from "next";
import Link from "next/link";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "AX 컨설팅, AI 에이전트/업무 자동화, 풀스택 개발 등 실무 문제 해결 중심의 서비스 소개 페이지입니다.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/services`,
    title: "서비스 | 이흥규",
    description:
      "AX 컨설팅, AI 에이전트/업무 자동화, 풀스택 개발 등 실무 문제 해결 중심의 서비스 소개 페이지입니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "서비스 | 이흥규",
    description:
      "AX 컨설팅, AI 에이전트/업무 자동화, 풀스택 개발 등 실무 문제 해결 중심의 서비스 소개 페이지입니다.",
    images: [SITE_OG_IMAGE],
  },
};

const SERVICES = [
  {
    href: "/services/ax-consulting",
    title: "AX 컨설팅",
    desc: "AI 도입이 아니라 운영 체제 전환. 데이터 흐름·책임 구조·자동화를 함께 설계합니다.",
    keywords: ["AX 컨설팅", "AI 전환", "업무 전환", "프로세스 설계", "데이터 흐름"],
  },
  {
    href: "/services/ai-agents",
    title: "AI 에이전트 · 업무 자동화",
    desc: "LangChain/LangGraph/n8n 기반으로 실제 업무를 대체하는 에이전트를 만듭니다.",
    keywords: ["AI 에이전트", "업무 자동화", "LangChain", "LangGraph", "n8n"],
  },
  {
    href: "/services/fullstack-development",
    title: "풀스택 개발",
    desc: "Next.js/React 기반으로 기획→개발→배포까지 빠르게 런칭하고 운영합니다.",
    keywords: ["풀스택 개발자", "Next.js 개발", "React 개발", "Supabase", "MVP"],
  },
  {
    href: "/services/logistics-automation",
    title: "물류 · 배차 자동화",
    desc: "현장 데이터를 연결하고, 배차/정산/커뮤니케이션 병목을 자동화합니다.",
    keywords: ["물류 자동화", "배차 자동화", "TMS", "운송 주선", "물류 AI"],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    url: `${SITE_URL}/services`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${s.href}`,
        name: s.title,
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              서비스
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
              저는 “AI를 넣는 것”보다 <strong className="text-zinc-200">운영 체계를 바꾸는 것</strong>
              에 집중합니다. 아래는 제가 자주 맡는 문제 유형과 해결 방식입니다.
            </p>
          </div>
        </header>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block rounded-3xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {s.title}
                </h2>
                <p className="mt-4 text-zinc-400 leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.keywords.slice(0, 6).map((k) => (
                    <span
                      key={k}
                      className="text-xs text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1 rounded-full"
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm font-mono text-indigo-400">
                  자세히 보기 →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </I18nProvider>
  );
}


