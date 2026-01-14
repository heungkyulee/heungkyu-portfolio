"use client";

import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { Server, Users, FileSpreadsheet, GitMerge, ShieldAlert, Cpu, Workflow, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleAxReality() {
    const { language } = useI18n();
    const isKo = language === "ko";

    return (
        <article className="max-w-3xl mx-auto space-y-24">
            {/* Intro Section */}
            <section className="space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                    {isKo ? (
                        <>
                            물류, 금융, 가구 컨설팅 현장을 오가며 확인한 한 가지 사실이 있습니다. 
                            <span className="text-orange-400 font-medium"> 업종은 달라도 운영은 놀랍도록 비슷하게 굴러갑니다.</span>
                            <br /><br />
                            핵심 업무가 시스템이 아니라 사람의 손과 기억, 그리고 엑셀·메일함·메신저에 기대어 돌아가고 있었습니다.
                        </>
                    ) : (
                        <>
                            After visiting logistics, finance, and consulting fields, I confirmed one thing. 
                            <span className="text-orange-400 font-medium"> Different industries, but operations run surprisingly similarly.</span>
                            <br /><br />
                            Core tasks rely on human hands, memory, Excel, emails, and messengers, not systems.
                        </>
                    )}
                </p>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
                    <h3 className="text-lg font-mono text-zinc-500 mb-6">
                        {isKo ? "AI 도입 전의 현실 (The Reality)" : "The Reality Before AI"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <RealityCard 
                            icon={FileSpreadsheet}
                            title={isKo ? "물류" : "Logistics"}
                            desc={isKo ? "모니터 3개, 엑셀, 전화로 오더 확인. 누락 시 개인 책임." : "3 monitors, Excel, phone calls. Errors are personal liability."}
                        />
                        <RealityCard 
                            icon={Users}
                            title={isKo ? "금융 HR" : "Finance HR"}
                            desc={isKo ? "대상자 수기 식별, 메일 발송, 회신 추적, 누락 재확인." : "Manual identification, emailing, tracking, and re-checking."}
                        />
                        <RealityCard 
                            icon={Building2}
                            title={isKo ? "컨설팅" : "Consulting"}
                            desc={isKo ? "흩어진 조건들을 머릿속에서 매칭. 담당자 바뀌면 맥락 단절." : "Mental matching of scattered conditions. Context lost when staff changes."}
                        />
                    </div>
                    <p className="mt-8 text-center text-zinc-400 italic">
                        "{isKo 
                            ? "AI를 붙이기 전에, 이미 조직 내부에는 비효율과 책임 공백이 프로세스로 고착되어 있습니다." 
                            : "Before applying AI, inefficiency and responsibility gaps are already cemented into the process."}"
                    </p>
                </div>
            </section>

            {/* Core Insight: 3 Layers */}
            <section className="space-y-8">
                <SectionHeader 
                    number="01" 
                    title={isKo ? "AI 시장의 3가지 층위와 실패하는 지점" : "3 Layers of AI Market & Where It Fails"} 
                />
                
                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>
                        {isKo 
                            ? "AI 도입을 이야기하기 전에 시장을 세 층위로 나눠봅시다. 인프라, 모델, 그리고 운영입니다."
                            : "Let's divide the AI market into three layers: Infrastructure, Model, and Operations."}
                    </p>
                </div>

                <div className="space-y-4 mt-6">
                    <LayerBar 
                        level="Layer 1" 
                        name={isKo ? "인프라 (Infrastructure)" : "Infrastructure"} 
                        desc={isKo ? "컴퓨팅, 전력, 데이터센터" : "Computing, Power, Data Centers"}
                        status="Investment 💰"
                    />
                    <LayerBar 
                        level="Layer 2" 
                        name={isKo ? "파운데이션 모델 (Foundation Model)" : "Foundation Model"} 
                        desc={isKo ? "LLM, sLLM, Multimodal" : "LLM, sLLM, Multimodal"}
                        status="Competition 🔥"
                    />
                    <div className="relative">
                        <LayerBar 
                            level="Layer 3" 
                            name={isKo ? "운영 & 실무 (Operations)" : "Operations & Implementation"} 
                            desc={isKo ? "기업이 실제 성과를 만들어내는 영역" : "Where companies create actual value"}
                            status="Failure Point ⚠️"
                            isHighlight
                        />
                        <div className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 translate-x-full pl-4 hidden md:block">
                            <span className="text-orange-400 font-mono text-sm">← 문제 발생 지점</span>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg text-zinc-400 mt-6">
                    <p>
                        {isKo 
                            ? "대부분의 실패는 모델 성능이 아니라, 전사 운영관리 체계의 부재에서 옵니다. KPI, 데이터 정의, 책임 소재, 로그 체계가 없으면 AI는 혼란을 가중시키는 '짐'이 될 뿐입니다."
                            : "Most failures come not from model performance, but from the lack of operational systems. Without KPIs, data definitions, and clear responsibilities, AI becomes just another burden."}
                    </p>
                </div>
            </section>

            {/* Failure Patterns */}
            <section className="space-y-12">
                <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8">
                        {isKo ? "현장에서 목격한 3가지 실패 패턴" : "3 Failure Patterns Witnessed in the Field"}
                    </h2>
                    
                    <div className="space-y-12">
                        <PatternItem 
                            number="1"
                            title={isKo ? "데이터가 흐르지 않는 조직" : "Organizations Where Data Doesn't Flow"}
                            content={isKo 
                                ? "부서마다 데이터 기준이 다르고 엑셀로 관리됩니다. 이 상황에서 AI를 도입하면 '입력할 것만 늘어난 시스템' 취급을 받습니다. 모델보다 먼저 파이프라인과 단일 기준(Single Source of Truth)을 만들어야 합니다."
                                : "Data standards vary by department and are managed in Excel. AI becomes 'just more data entry'. Build pipelines and a Single Source of Truth before models."}
                        />
                        <PatternItem 
                            number="2"
                            title={isKo ? "워크플로우와 통제 체계의 부재" : "Lack of Workflow & Control Systems"}
                            content={isKo 
                                ? "현장은 예외가 기본입니다. 100% 자동화는 불가능합니다. 사람이 개입해야 하는 승인/반려 경계와 감사(Audit) 로그를 먼저 설계해야 조직이 AI를 신뢰하고 받아들입니다."
                                : "Exceptions are the norm. 100% automation is impossible. Design approval boundaries and audit logs first so the organization can trust and accept AI."}
                        />
                        <PatternItem 
                            number="3"
                            title={isKo ? "핵심 로직의 외주화" : "Outsourcing Core Logic"}
                            content={isKo 
                                ? "외부 솔루션에 의존하면 운영 노하우가 내재화되지 않습니다. AI 시대의 경쟁력은 자사 도메인 데이터와 의사결정 로직의 축적에서 나옵니다. 핵심은 내부에서 통제 가능해야 합니다."
                                : "Relying on external solutions prevents internalizing know-how. Competitiveness comes from accumulating domain data and decision logic. Core logic must be controllable internally."}
                        />
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-8">
                <SectionHeader 
                    number="02" 
                    title={isKo ? "AX는 운영 체제 전환 프로젝트다" : "AX is an Operating System Transition"} 
                />
                
                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>
                        {isKo 
                            ? "AX(AI Transformation)는 단순한 AI 도입 프로젝트가 아닙니다. 기업의 운영 체제(OS)를 업그레이드하는 프로젝트라고 부르는 게 더 적절합니다."
                            : "AX (AI Transformation) is not just an AI adoption project. It's more appropriate to call it a corporate Operating System (OS) upgrade."}
                    </p>
                    <p>
                        {isKo 
                            ? "모델을 고르기 전에 다음 질문들에 먼저 답해야 합니다:"
                            : "Before choosing a model, answer these questions first:"}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                        <li>{isKo ? "데이터가 어떤 기준으로 생성·변경·소멸되는가?" : "How is data created, modified, and deleted?"}</li>
                        <li>{isKo ? "업무 승인 권한과 예외 처리는 어디서 일어나는가?" : "Where do approvals and exception handling occur?"}</li>
                        <li>{isKo ? "실패 시 복구 루틴(Fallback)은 무엇인가?" : "What is the fallback routine for failures?"}</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 p-8 rounded-2xl text-center mt-12">
                    <p className="text-lg md:text-xl text-indigo-300 font-medium leading-relaxed">
                        {isKo 
                            ? "이 순서를 지키면, 모델 성능이 완벽하지 않아도 운영은 굴러가고 성과는 누적됩니다."
                            : "Follow this order, and operations will run and value will accumulate, even if the model isn't perfect."}
                    </p>
                </div>

                <p className="mt-8 text-zinc-400">
                    {isKo 
                        ? "앞으로 이 블로그에서는 모델 성능보다, 실제 기업 현장에서 AI가 굴러가게 만드는 '조건'들을 다루려 합니다. 데이터 기준, 승인과 책임, 로그와 품질 관측 같은 진짜 운영 이야기들입니다."
                        : "In this blog, I will focus on the 'conditions' that make AI work in the field, rather than model performance. Real operational stories about data standards, approvals, responsibility, and logging."}
                </p>
            </section>
        </article>
    );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
    return (
        <div className="flex items-start gap-4">
            <span className="text-4xl font-display font-bold text-zinc-800 select-none">{number}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mt-2">{title}</h2>
        </div>
    );
}

function RealityCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
    return (
        <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-xl text-left hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-zinc-900 rounded-lg text-zinc-400">
                    <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-zinc-300">{title}</h4>
            </div>
            <p className="text-sm text-zinc-500 leading-snug">{desc}</p>
        </div>
    );
}

function LayerBar({ level, name, desc, status, isHighlight = false }: { level: string; name: string; desc: string; status: string; isHighlight?: boolean }) {
    return (
        <div className={cn(
            "flex items-center justify-between p-4 rounded-xl border transition-all",
            isHighlight 
                ? "bg-orange-500/10 border-orange-500/50" 
                : "bg-zinc-900 border-zinc-800 opacity-60"
        )}>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className={cn("text-xs font-mono px-2 py-0.5 rounded", isHighlight ? "bg-orange-500/20 text-orange-400" : "bg-zinc-800 text-zinc-500")}>
                    {level}
                </span>
                <div>
                    <div className={cn("font-bold", isHighlight ? "text-orange-200" : "text-zinc-400")}>{name}</div>
                    <div className="text-xs text-zinc-500 hidden md:block">{desc}</div>
                </div>
            </div>
            <div className={cn("text-sm font-medium", isHighlight ? "text-orange-400" : "text-zinc-600")}>
                {status}
            </div>
        </div>
    );
}

function PatternItem({ number, title, content }: { number: string; title: string; content: string }) {
    return (
        <div className="flex gap-6">
            <div className="shrink-0 w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-400">
                {number}
            </div>
            <div className="space-y-2">
                <h4 className="text-xl font-bold text-zinc-200">{title}</h4>
                <p className="text-zinc-400 leading-relaxed">{content}</p>
            </div>
        </div>
    );
}



