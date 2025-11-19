"use client";

import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { Bot, BrainCircuit, MessageSquare, Play, CheckCircle2, ArrowDown, Laptop, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleAiAgents() {
    const { language } = useI18n();
    const isKo = language === "ko";

    return (
        <article className="max-w-3xl mx-auto space-y-24">
            {/* Intro */}
            <section className="space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                    {isKo ? (
                        <>
                            우리는 지금까지 소프트웨어를 <span className="text-zinc-500">'도구(Tool)'</span>로만 사용해왔습니다. 
                            엑셀은 계산을 위한 도구이고, 슬랙은 대화를 위한 도구죠. 
                            도구의 특징은 명확합니다. <strong className="text-white font-medium">인간이 명령하지 않으면 아무것도 하지 않는다</strong>는 것입니다.
                        </>
                    ) : (
                        <>
                            Until now, we have used software strictly as <span className="text-zinc-500">'Tools'</span>. 
                            Excel is for calculation, Slack is for communication. 
                            The characteristic of a tool is clear: <strong className="text-white font-medium">it does nothing unless a human commands it</strong>.
                        </>
                    )}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ComparisonCard 
                        type="Tool"
                        title={isKo ? "기존 소프트웨어" : "Traditional Software"}
                        desc={isKo ? "시키는 일만 수행 (Passive)" : "Passive Execution"}
                        icon={Laptop}
                        active={false}
                    />
                    <ComparisonCard 
                        type="Agent"
                        title={isKo ? "AI 에이전트" : "AI Agent"}
                        desc={isKo ? "스스로 계획하고 수행 (Proactive)" : "Proactive Planning"}
                        icon={Bot}
                        active={true}
                    />
                </div>
            </section>

            {/* Concept Section */}
            <section className="space-y-12">
                <SectionHeader 
                    number="01" 
                    title={isKo ? "명령(Command)에서 위임(Delegation)으로" : "From Command to Delegation"} 
                />

                <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 md:p-10 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                                <User className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div className="bg-zinc-800 rounded-2xl rounded-tl-none px-5 py-3 text-zinc-300 max-w-[80%]">
                                {isKo 
                                    ? "이번 주 해외 물류 동향 보고서 작성해서 월요일 아침까지 내 책상에 올려놔."
                                    : "Draft a report on global logistics trends for this week and have it on my desk by Monday morning."}
                            </div>
                        </div>
                        <div className="flex items-start gap-4 flex-row-reverse">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                                <Bot className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div className="space-y-2 max-w-[80%]">
                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl rounded-tr-none px-5 py-3 text-indigo-200">
                                    {isKo ? "네, 알겠습니다. 다음과 같은 계획으로 진행하겠습니다:" : "Understood. I will proceed with the following plan:"}
                                </div>
                                
                                {/* Agent Thinking Process Visualization */}
                                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3 text-xs font-mono">
                                    <AgentStep step="1. Planning" text="Analyze requirements & Identify key sources" status="done" />
                                    <AgentStep step="2. Researching" text="Search web for 'Global Logistics Trends 2025'" status="done" />
                                    <AgentStep step="3. Drafting" text="Summarize findings & Create document" status="processing" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-zinc-400 text-lg leading-relaxed">
                    {isKo 
                        ? "이것이 바로 '위임'입니다. 에이전트는 스스로 계획(Planning)하고, 추론(Reasoning)하고, 도구(Tool Use)를 사용하여 목표를 달성합니다."
                        : "This is 'Delegation'. The agent autonomously Plans, Reasons, and Uses Tools to achieve the goal."}
                </p>
            </section>

            {/* Case Study Section */}
            <section className="space-y-12">
                <SectionHeader 
                    number="02" 
                    title={isKo ? "실제 사례: OPUS AI의 배차 자동화" : "Real Case: OPUS AI's Dispatch Automation"} 
                />

                <div className="relative border-l-2 border-zinc-800 pl-8 space-y-12 ml-4">
                    <CaseStep 
                        number="01"
                        title={isKo ? "메시지 분석 (Perception)" : "Message Analysis"}
                        desc={isKo ? "카카오톡 메시지의 자연어를 이해하고 핵심 정보(출발지, 도착지, 화물, 날짜)를 추출합니다." : "Understands natural language in messages and extracts key info (Origin, Dest, Cargo, Date)."}
                        icon={MessageSquare}
                    />
                    <CaseStep 
                        number="02"
                        title={isKo ? "최적 차량 탐색 (Action)" : "Optimal Vehicle Search"}
                        desc={isKo ? "화물 정보망 API를 호출하여 조건에 맞는 차량을 찾고, 과거 데이터를 기반으로 신뢰도를 평가합니다." : "Calls freight network APIs to find vehicles and evaluates reliability based on past data."}
                        icon={BrainCircuit}
                    />
                    <CaseStep 
                        number="03"
                        title={isKo ? "배차 초안 생성 (Result)" : "Draft Generation"}
                        desc={isKo ? "담당자가 바로 사용할 수 있는 배차 요약본을 생성하여 제안합니다." : "Generates a ready-to-use dispatch summary for the manager."}
                        icon={CheckCircle2}
                    />
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-xl text-center">
                    <p className="text-zinc-300 font-medium text-lg mb-2">
                        {isKo ? "결과 (Impact)" : "Impact"}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-indigo-400">80%</div>
                            <div className="text-xs text-zinc-500">{isKo ? "단순 문의 자동화" : "Automation Rate"}</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-400">2m</div>
                            <div className="text-xs text-zinc-500">{isKo ? "평균 응답 속도" : "Response Time"}</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-400">24/7</div>
                            <div className="text-xs text-zinc-500">{isKo ? "가동 시간" : "Availability"}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="border-t border-zinc-800 pt-12">
                <h3 className="text-2xl font-bold text-zinc-100 mb-6">
                    {isKo ? "디지털 동료를 채용하세요" : "Hire Digital Colleagues"}
                </h3>
                <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                    {isKo 
                        ? "앞으로 기업의 경쟁력은 '어떤 SaaS를 쓰느냐'가 아니라, '얼마나 유능한 디지털 동료들을 보유하고 있느냐'로 결정될 것입니다."
                        : "Future competitiveness won't be decided by 'what SaaS you use', but by 'how many competent digital colleagues you possess'."}
                </p>
                
                <div className="bg-indigo-500/5 border border-indigo-500/20 p-6 rounded-xl">
                    <h4 className="text-indigo-400 font-bold mb-4">
                        {isKo ? "에이전트 도입을 위한 질문" : "Questions for Adopting Agents"}
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-zinc-300 text-sm">
                            <ArrowDown className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                            {isKo ? "당신의 팀에서 반복적으로 하는 일이 무엇인가요?" : "What repetitive tasks does your team do?"}
                        </li>
                        <li className="flex items-start gap-3 text-zinc-300 text-sm">
                            <ArrowDown className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                            {isKo ? "그 일을 '위임'할 수 있다면 어떻게 설명하시겠어요?" : "If you could 'delegate' that work, how would you describe it?"}
                        </li>
                        <li className="flex items-start gap-3 text-zinc-300 text-sm">
                            <ArrowDown className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                            {isKo ? "에이전트가 그 일을 하려면 어떤 '권한'과 '도구'가 필요할까요?" : "What permissions and tools would an agent need?"}
                        </li>
                    </ul>
                </div>
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

function ComparisonCard({ type, title, desc, icon: Icon, active }: { type: string; title: string; desc: string; icon: any; active: boolean }) {
    return (
        <div className={cn(
            "p-6 rounded-2xl border transition-all duration-300",
            active 
                ? "bg-indigo-500/10 border-indigo-500/50 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]" 
                : "bg-zinc-900/30 border-zinc-800 opacity-60"
        )}>
            <div className="flex items-center justify-between mb-4">
                <span className={cn("text-xs font-mono uppercase tracking-wider", active ? "text-indigo-400" : "text-zinc-500")}>
                    {type}
                </span>
                <Icon className={cn("w-5 h-5", active ? "text-indigo-400" : "text-zinc-500")} />
            </div>
            <h3 className={cn("text-xl font-bold mb-2", active ? "text-white" : "text-zinc-400")}>{title}</h3>
            <p className="text-sm text-zinc-500">{desc}</p>
        </div>
    );
}

function AgentStep({ step, text, status }: { step: string; text: string; status: 'done' | 'processing' | 'waiting' }) {
    return (
        <div className="flex items-center gap-3">
            <div className={cn(
                "w-2 h-2 rounded-full",
                status === 'done' ? "bg-green-500" : status === 'processing' ? "bg-yellow-500 animate-pulse" : "bg-zinc-700"
            )} />
            <div className="flex-1">
                <span className="text-zinc-400 mr-2">{step}</span>
                <span className="text-zinc-500">{text}</span>
            </div>
        </div>
    );
}

function CaseStep({ number, title, desc, icon: Icon }: { number: string; title: string; desc: string; icon: any }) {
    return (
        <div className="relative group">
            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-indigo-500 transition-colors flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors" />
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <h4 className="text-xl font-bold text-zinc-200">{title}</h4>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                    {desc}
                </p>
            </div>
        </div>
    );
}

