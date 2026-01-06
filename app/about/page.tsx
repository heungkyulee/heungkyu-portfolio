import type { Metadata } from "next";
import Link from "next/link";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "소개",
  description:
    "AX(업무 전환)·AI 에이전트·풀스택(Next.js/React)으로 현장의 비효율을 해결하는 이흥규(Lee Heungkyu)의 프로필입니다.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    locale: "ko_KR",
    url: `${SITE_URL}/about`,
    title: "이흥규 소개 | AX 컨설턴트 · AI 엔지니어",
    description:
      "AX(업무 전환)·AI 에이전트·풀스택(Next.js/React)으로 현장의 비효율을 해결하는 이흥규(Lee Heungkyu)의 프로필입니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "이흥규 소개 | AX 컨설턴트 · AI 엔지니어",
    description:
      "AX(업무 전환)·AI 에이전트·풀스택(Next.js/React)으로 현장의 비효율을 해결하는 이흥규(Lee Heungkyu)의 프로필입니다.",
    images: [SITE_OG_IMAGE],
  },
};

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "이흥규 소개",
      url: `${SITE_URL}/about`,
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "ko-KR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "소개", item: `${SITE_URL}/about` },
      ],
    },
  ];

  return (
    <I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
        <SiteHeader />

        <header className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono text-zinc-500">
              <Link href="/" className="hover:text-zinc-200">
                홈
              </Link>{" "}
              / 소개
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              이흥규 (Lee Heungkyu)
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed whitespace-pre-line">
              {PORTFOLIO_DATA.profile.bio.ko}
            </p>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              저는 <strong className="text-zinc-200">AX 컨설턴트</strong>이자{" "}
              <strong className="text-zinc-200">AI 엔지니어</strong>,{" "}
              <strong className="text-zinc-200">풀스택 개발자</strong>로서 “현장에서
              돌아가는 시스템”을 만드는 데 집중합니다.
            </p>
          </div>
        </header>

        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6">
              <h2 className="text-sm font-mono text-indigo-400">AX(업무 전환)</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                데이터 흐름과 책임 구조를 먼저 설계해, AI가 붙을 수 있는 운영 체계를 만듭니다.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6">
              <h2 className="text-sm font-mono text-indigo-400">AI 에이전트</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                LangChain/LangGraph/n8n으로 실제 업무를 대체하는 에이전트를 설계·구현합니다.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6">
              <h2 className="text-sm font-mono text-indigo-400">풀스택</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                Next.js/React 기반으로 MVP부터 상용 운영까지 끝까지 책임집니다.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-14">
            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">주요 서비스</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                검색에서 잘 잡히는 키워드는 “서비스 랜딩”이 있어야 합니다. 아래 페이지들은
                AX/AI 에이전트/풀스택/물류 자동화 키워드로 노출을 확장하기 위한 핵심 랜딩입니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services/ax-consulting" className="text-indigo-400 hover:text-indigo-300">
                  AX 컨설팅 →
                </Link>
                <Link href="/services/ai-agents" className="text-indigo-400 hover:text-indigo-300">
                  AI 에이전트·업무 자동화 →
                </Link>
                <Link
                  href="/services/fullstack-development"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  풀스택 개발 →
                </Link>
                <Link
                  href="/services/logistics-automation"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  물류·배차 자동화 →
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">경력</h2>
              <div className="mt-6 space-y-4">
                {PORTFOLIO_DATA.experience.map((e) => (
                  <div
                    key={`${e.period}-${e.company.ko}-${e.role.ko}`}
                    className="rounded-2xl border border-zinc-800/40 bg-zinc-950/30 p-6"
                  >
                    <div className="text-xs font-mono text-zinc-500">{e.period}</div>
                    <div className="mt-2 text-lg font-semibold text-zinc-200">
                      {e.role.ko} · {e.company.ko}
                    </div>
                    <p className="mt-3 text-zinc-400 leading-relaxed">{e.description.ko}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">기술 스택</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs font-mono text-zinc-500">Frontend</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.techStack.frontend.map((x) => (
                      <span
                        key={x}
                        className="text-xs text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1 rounded-full"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">AI</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.techStack.ai.map((x) => (
                      <span
                        key={x}
                        className="text-xs text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1 rounded-full"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">연락처</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                “현재 상황/병목/원하는 결과”를 2~3문장만 보내주셔도, 가능한 접근을 빠르게
                정리해드립니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.contact.email}`}
                  className="inline-flex items-center rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
                >
                  이메일
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-700 text-zinc-200 px-5 py-2 text-sm font-medium hover:bg-zinc-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-700 text-zinc-200 px-5 py-2 text-sm font-medium hover:bg-zinc-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </section>

        <SiteFooter />
      </main>
    </I18nProvider>
  );
}


