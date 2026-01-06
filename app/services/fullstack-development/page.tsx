import type { Metadata } from "next";
import Link from "next/link";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "풀스택 개발",
  description:
    "Next.js/React 기반으로 기획→개발→배포→운영까지 빠르게 런칭합니다. MVP부터 상용까지 풀스택 개발을 제공합니다.",
  alternates: { canonical: "/services/fullstack-development" },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: `${SITE_URL}/services/fullstack-development`,
    title: "풀스택 개발 | 이흥규",
    description:
      "Next.js/React 기반으로 기획→개발→배포→운영까지 빠르게 런칭합니다. MVP부터 상용까지 풀스택 개발을 제공합니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "풀스택 개발 | 이흥규",
    description:
      "Next.js/React 기반으로 기획→개발→배포→운영까지 빠르게 런칭합니다. MVP부터 상용까지 풀스택 개발을 제공합니다.",
    images: [SITE_OG_IMAGE],
  },
};

const FAQ = [
  {
    q: "어떤 형태의 프로젝트를 맡을 수 있나요?",
    a: "B2B SaaS, 내부 운영툴, 데이터 파이프라인/대시보드, 웹 MVP/프로덕트, 간단한 모바일(React Native)까지 가능합니다.",
  },
  {
    q: "기간은 어느 정도 잡아야 하나요?",
    a: "범위에 따라 다르지만, ‘2주 내 프로토타입 → 4~12주 MVP’가 가장 흔합니다. 이후 운영/개선은 스프린트로 진행합니다.",
  },
  {
    q: "품질은 어떻게 보장하나요?",
    a: "지표/로깅/에러 모니터링을 기본으로 깔고, 요구사항을 좁게 정의한 뒤 빠르게 배포해 실제 사용 데이터로 개선합니다.",
  },
];

export default function FullstackServicePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "풀스택 개발",
      url: `${SITE_URL}/services/fullstack-development`,
      areaServed: "KR",
      provider: { "@type": "Person", name: "이흥규", url: SITE_URL },
      serviceType: ["Full Stack Development", "Next.js Development", "MVP Development"],
      description:
        "Next.js/React 기반으로 기획→개발→배포→운영까지 빠르게 런칭하는 풀스택 개발 서비스.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "풀스택 개발",
          item: `${SITE_URL}/services/fullstack-development`,
        },
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
              <Link href="/services" className="hover:text-zinc-200">
                서비스
              </Link>{" "}
              / 풀스택 개발
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              풀스택 개발
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
              “아이디어”를 “사용 가능한 제품”으로 바꾸는 속도와 운영 품질에 집중합니다.
              Next.js/React 기반으로 빠르게 런칭하고, 지표 기반으로 개선합니다.
            </p>
          </div>
        </header>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-14">
            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">자주 쓰는 스택</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  ...PORTFOLIO_DATA.techStack.frontend,
                  ...PORTFOLIO_DATA.techStack.backend.slice(0, 4),
                  ...PORTFOLIO_DATA.techStack.tools.slice(0, 4),
                ]
                  .slice(0, 14)
                  .map((x) => (
                    <span
                      key={x}
                      className="text-xs text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1 rounded-full"
                    >
                      {x}
                    </span>
                  ))}
              </div>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                안정적인 운영을 위해 배포/모니터링/에러 수집을 기본으로 포함합니다.
              </p>
            </section>

            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">관련 사례</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/projects/maestro-tms"
                  className="block rounded-3xl border border-zinc-800/60 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
                >
                  <div className="text-sm font-mono text-zinc-500">Case Study</div>
                  <div className="mt-2 text-xl font-bold text-zinc-100">Maestro TMS</div>
                  <p className="mt-3 text-zinc-400">
                    반응형 웹앱 + 실시간 데이터 동기화로 현장 배차 업무를 단축.
                  </p>
                </Link>
                <Link
                  href="/projects/tikkle"
                  className="block rounded-3xl border border-zinc-800/60 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
                >
                  <div className="text-sm font-mono text-zinc-500">Case Study</div>
                  <div className="mt-2 text-xl font-bold text-zinc-100">tikkle</div>
                  <p className="mt-3 text-zinc-400">
                    4개월 내 크로스플랫폼 앱 런칭. 결제/초대/흐름 구현.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
                자주 묻는 질문(FAQ)
              </h2>
              <div className="mt-8 space-y-4">
                {FAQ.map((f) => (
                  <details
                    key={f.q}
                    className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6"
                  >
                    <summary className="cursor-pointer text-zinc-100 font-semibold">
                      {f.q}
                    </summary>
                    <p className="mt-4 text-zinc-400 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>

        <SiteFooter />
      </main>
    </I18nProvider>
  );
}


