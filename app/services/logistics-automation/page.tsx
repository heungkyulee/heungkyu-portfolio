import type { Metadata } from "next";
import Link from "next/link";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "물류 · 배차 자동화",
  description:
    "물류/운송 주선 현장의 반복 업무(배차·정산·커뮤니케이션)를 데이터 연결과 자동화로 줄입니다. TMS/정보망/ERP 통합까지 지원합니다.",
  alternates: { canonical: "/services/logistics-automation" },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: `${SITE_URL}/services/logistics-automation`,
    title: "물류 · 배차 자동화 | 이흥규",
    description:
      "물류/운송 주선 현장의 반복 업무(배차·정산·커뮤니케이션)를 데이터 연결과 자동화로 줄입니다. TMS/정보망/ERP 통합까지 지원합니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "물류 · 배차 자동화 | 이흥규",
    description:
      "물류/운송 주선 현장의 반복 업무(배차·정산·커뮤니케이션)를 데이터 연결과 자동화로 줄입니다. TMS/정보망/ERP 통합까지 지원합니다.",
    images: [SITE_OG_IMAGE],
  },
};

const FAQ = [
  {
    q: "정보망이 여러 개로 분산된 환경에서도 가능한가요?",
    a: "가능합니다. 핵심은 ‘한 화면에서 의사결정할 수 있는 통합 뷰’와 ‘데이터 표준화(온톨로지)’입니다. 가능한 범위에서 API/크롤링/수기 입력 최소화를 조합합니다.",
  },
  {
    q: "가장 먼저 줄일 수 있는 비용은 뭔가요?",
    a: "보통은 (1) 탭/시스템 전환 + 복붙, (2) 단순 문의 커뮤니케이션, (3) 정산 대조/증빙 수집에서 큰 절감이 납니다.",
  },
  {
    q: "보안/권한은 어떻게 다루나요?",
    a: "업무 역할 기준으로 접근 권한을 분리하고, 로그/감사(누가 어떤 결정을 했는지)를 남깁니다. 자동화는 승인 워크플로우와 함께 단계적으로 확대합니다.",
  },
];

export default function LogisticsAutomationServicePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "물류 · 배차 자동화",
      url: `${SITE_URL}/services/logistics-automation`,
      areaServed: "KR",
      provider: { "@type": "Person", name: "이흥규", url: SITE_URL },
      serviceType: [
        "Logistics Automation",
        "Dispatch Automation",
        "TMS Integration",
        "Workflow Automation",
      ],
      description:
        "물류/운송 주선 현장의 반복 업무(배차·정산·커뮤니케이션)를 데이터 연결과 자동화로 줄입니다.",
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
          name: "물류 · 배차 자동화",
          item: `${SITE_URL}/services/logistics-automation`,
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
              / 물류 · 배차 자동화
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              물류 · 배차 자동화
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
              정보망/ERP/TMS가 분산된 환경에서 생기는 “복붙·대기·오류·정산 병목”을 줄입니다.
              데이터 흐름을 연결하고, 자동화와 에이전트로 실무 시간을 줄입니다.
            </p>
          </div>
        </header>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-14">
            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">주요 해결 영역</h2>
              <ul className="mt-6 space-y-3 text-zinc-300 leading-relaxed list-disc pl-5">
                <li>배차 담당자의 멀티탭/수기 입력(복붙) 최소화</li>
                <li>단순 문의 자동 응대(야간/주말 포함) + 배차 초안 생성</li>
                <li>정산 대조/증빙 수집 자동화, 오류 탐지</li>
                <li>실시간 KPI/이상 징후 모니터링(지연/미정산/불일치)</li>
              </ul>
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
                    배차 오케스트레이션 SaaS로 업무 시간을 50% 단축.
                  </p>
                </Link>
                <Link
                  href="/projects/opus-ai"
                  className="block rounded-3xl border border-zinc-800/60 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
                >
                  <div className="text-sm font-mono text-zinc-500">Case Study</div>
                  <div className="mt-2 text-xl font-bold text-zinc-100">OPUS AI</div>
                  <p className="mt-3 text-zinc-400">
                    단순 문의 응대 80% 자동화, 야간/주말 응대 100%.
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


