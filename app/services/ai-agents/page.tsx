import type { Metadata } from "next";
import Link from "next/link";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI 에이전트 · 업무 자동화",
  description:
    "챗봇이 아니라 ‘디지털 동료’. LangChain/LangGraph/n8n 기반으로 실제 업무를 대체하는 에이전트를 설계·구현합니다.",
  alternates: { canonical: "/services/ai-agents" },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: `${SITE_URL}/services/ai-agents`,
    title: "AI 에이전트 · 업무 자동화 | 이흥규",
    description:
      "챗봇이 아니라 ‘디지털 동료’. LangChain/LangGraph/n8n 기반으로 실제 업무를 대체하는 에이전트를 설계·구현합니다.",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 에이전트 · 업무 자동화 | 이흥규",
    description:
      "챗봇이 아니라 ‘디지털 동료’. LangChain/LangGraph/n8n 기반으로 실제 업무를 대체하는 에이전트를 설계·구현합니다.",
    images: [SITE_OG_IMAGE],
  },
};

const FAQ = [
  {
    q: "AI 에이전트와 기존 자동화(RPA/매크로)의 차이는 뭔가요?",
    a: "정해진 화면/규칙만 따라가는 것이 아니라, 목표를 받고 계획을 세우며 도구(API/DB/문서)를 호출해 결과를 만들어냅니다. 단, 운영 안전을 위해 권한/승인/로그 설계가 핵심입니다.",
  },
  {
    q: "어디까지 자동화할 수 있나요?",
    a: "대부분 ‘초안 생성·정보 조회·분류·요약·알림’부터 시작해, 승인 워크플로우를 붙여 단계적으로 확장하는 방식이 가장 안전합니다.",
  },
  {
    q: "LLM 비용/품질은 어떻게 관리하나요?",
    a: "프롬프트/툴콜 구조를 고정하고, 캐시·라우팅·리트라이·가드레일(금칙어/PII/정책)을 둬서 비용과 품질을 동시에 관리합니다.",
  },
];

export default function AiAgentsServicePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "AI 에이전트 · 업무 자동화",
      url: `${SITE_URL}/services/ai-agents`,
      areaServed: "KR",
      provider: {
        "@type": "Person",
        name: "이흥규",
        url: SITE_URL,
      },
      serviceType: [
        "AI Agent Development",
        "Workflow Automation",
        "LLM Ops",
        "System Integration",
      ],
      description:
        "LangChain/LangGraph/n8n 기반으로 실제 업무를 대체하는 AI 에이전트를 설계·구현합니다.",
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
          name: "AI 에이전트 · 업무 자동화",
          item: `${SITE_URL}/services/ai-agents`,
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
              / AI 에이전트 · 업무 자동화
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 font-display">
              AI 에이전트 · 업무 자동화
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
              단순 챗봇이 아니라, <strong className="text-zinc-200">계획하고 실행하는 “디지털 동료”</strong>
              를 만듭니다. 조회/분류/요약/초안 생성부터 승인 워크플로우까지 운영 가능한 형태로
              설계합니다.
            </p>
          </div>
        </header>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-14">
            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">적용 예시(자주 나오는 업무)</h2>
              <ul className="mt-6 space-y-3 text-zinc-300 leading-relaxed list-disc pl-5">
                <li>문의/메시지에서 핵심 정보 추출 → DB/시스템 조회 → 응답 초안 생성</li>
                <li>문서/회의록 요약 → 태스크 생성 → 담당자 알림</li>
                <li>운영 리포트 자동 작성(주간/월간), KPI 이상 탐지/알림</li>
                <li>정산/검증 보조(대조·불일치 탐지·근거 링크 생성)</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">기술 스택</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                LangChain/LangGraph, n8n, 벡터 검색(RAG), API/DB 연동, 가드레일(정책/PII),
                관측(로그·트레이싱), 비용/품질 라우팅.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.ai.map((x) => (
                  <span
                    key={x}
                    className="text-xs text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1 rounded-full"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8">
              <h2 className="text-2xl font-bold text-zinc-100">관련 사례</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/projects/opus-ai"
                  className="block rounded-3xl border border-zinc-800/60 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
                >
                  <div className="text-sm font-mono text-zinc-500">Case Study</div>
                  <div className="mt-2 text-xl font-bold text-zinc-100">OPUS AI</div>
                  <p className="mt-3 text-zinc-400">
                    메시지 분석→조회→초안 생성으로 단순 문의 응대 80% 자동화.
                  </p>
                </Link>
                <Link
                  href="/insights/ai-agents-colleagues"
                  className="block rounded-3xl border border-zinc-800/60 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all p-6"
                >
                  <div className="text-sm font-mono text-zinc-500">Insight</div>
                  <div className="mt-2 text-xl font-bold text-zinc-100">
                    AI 에이전트: 도구를 넘어선 동료
                  </div>
                  <p className="mt-3 text-zinc-400">
                    ‘명령’이 아니라 ‘위임’하는 소프트웨어로의 전환.
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


