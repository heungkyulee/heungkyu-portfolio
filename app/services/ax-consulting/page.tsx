import type { Metadata } from "next";
import Link from "next/link";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AX 컨설팅",
  description:
    "AI 모델보다 먼저, 데이터 흐름과 책임 구조를 설계합니다. 현장에서 돌아가는 AX(업무 전환) 컨설팅을 제공합니다.",
  alternates: { canonical: "/services/ax-consulting" },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: `${SITE_URL}/services/ax-consulting`,
    title: "AX 컨설팅 | 이흥규",
    description:
      "AI 모델보다 먼저, 데이터 흐름과 책임 구조를 설계합니다. 현장에서 돌아가는 AX(업무 전환) 컨설팅을 제공합니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AX 컨설팅 | 이흥규",
    description:
      "AI 모델보다 먼저, 데이터 흐름과 책임 구조를 설계합니다. 현장에서 돌아가는 AX(업무 전환) 컨설팅을 제공합니다.",
    images: [SITE_OG_IMAGE],
  },
};

const FAQ = [
  {
    q: "AX(업무 전환) 컨설팅은 AI 도입 컨설팅과 뭐가 다른가요?",
    a: "도구(모델) 선택보다 먼저, 데이터가 흘러야 하고 책임 구조가 정해져야 합니다. AX는 운영 체계(OS)를 바꾸는 프로젝트이며, 현장 프로세스·데이터 파이프라인·권한/책임을 함께 설계합니다.",
  },
  {
    q: "보통 어디부터 시작하나요?",
    a: "현장 병목(반복 업무/대기/오류/정산 등)을 먼저 정의하고, 데이터를 연결한 뒤 자동화/에이전트 적용 범위를 정합니다. ‘빠른 2주 진단 → 4~8주 실행’ 형태가 가장 흔합니다.",
  },
  {
    q: "산출물은 어떤 형태로 나오나요?",
    a: "업무 흐름/역할(RACI) 정리, 데이터 사전/파이프라인 설계, 화면/워크플로우 프로토타입, KPI/모니터링 지표, 그리고 필요 시 실제 제품(MVP)까지 포함됩니다.",
  },
];

export default function AxConsultingServicePage() {
  const process = PORTFOLIO_DATA.process;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "AX 컨설팅",
      url: `${SITE_URL}/services/ax-consulting`,
      areaServed: "KR",
      provider: {
        "@type": "Person",
        name: "이흥규",
        url: SITE_URL,
      },
      serviceType: ["AX Consulting", "Business Process Automation", "AI Transformation"],
      description:
        "AI 모델보다 먼저, 데이터 흐름과 책임 구조를 설계합니다. 현장에서 돌아가는 AX(업무 전환) 컨설팅.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
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
          name: "AX 컨설팅",
          item: `${SITE_URL}/services/ax-consulting`,
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
              / AX 컨설팅
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              AX 컨설팅
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
              AX는 <strong className="text-zinc-200">AI 도입</strong>이 아니라{" "}
              <strong className="text-zinc-200">운영 체제 전환</strong>입니다. 모델
              선택보다 먼저, 데이터 흐름과 책임 구조를 설계해 “현장에서 실제로 돌아가는
              시스템”을 만듭니다.
            </p>
          </div>
        </header>

        <section className="px-6 md:px-12 pb-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6">
              <h2 className="text-sm font-mono text-indigo-400">진단</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                돈·시간이 새는 병목을 정의하고, 자동화 가능한 지점을 찾아냅니다.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6">
              <h2 className="text-sm font-mono text-indigo-400">설계</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                데이터 흐름/권한/책임(RACI)을 정리하고, 운영 가능한 구조로 설계합니다.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6">
              <h2 className="text-sm font-mono text-indigo-400">구현</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                필요하면 직접 MVP까지 개발하고, 운영/모니터링까지 붙입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
              진행 방식(Framework)
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6"
                >
                  <div className="text-xs font-mono text-zinc-500">{p.step}</div>
                  <div className="mt-2 text-lg font-semibold text-zinc-200">
                    {p.title.ko}
                  </div>
                  <p className="mt-3 text-zinc-400 whitespace-pre-line leading-relaxed">
                    {p.description.ko}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-16 text-2xl md:text-3xl font-bold text-zinc-100">
              관련 사례
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/projects/maestro-tms"
                className="block rounded-3xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
              >
                <div className="text-sm font-mono text-zinc-500">Case Study</div>
                <div className="mt-2 text-xl font-bold text-zinc-100">
                  Maestro TMS
                </div>
                <p className="mt-3 text-zinc-400">
                  운송 주선사의 반복 업무를 줄이기 위한 통합 배차 오케스트레이션.
                </p>
              </Link>
              <Link
                href="/projects/opus-ai"
                className="block rounded-3xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
              >
                <div className="text-sm font-mono text-zinc-500">Case Study</div>
                <div className="mt-2 text-xl font-bold text-zinc-100">OPUS AI</div>
                <p className="mt-3 text-zinc-400">
                  메시지 분석→조회→초안 생성까지, 현업 커뮤니케이션을 자동화한 에이전트.
                </p>
              </Link>
            </div>

            <h2 className="mt-16 text-2xl md:text-3xl font-bold text-zinc-100">
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

            <div className="mt-16 rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">문의</h2>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                1~2문장으로 “현재 상황/병목/원하는 결과”만 보내주셔도, 가능한 접근을
                빠르게 정리해드릴게요.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.contact.email}`}
                  className="inline-flex items-center rounded-full bg-zinc-100 text-zinc-950 px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
                >
                  이메일로 문의하기
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
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </I18nProvider>
  );
}


