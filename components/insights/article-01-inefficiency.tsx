"use client";

import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { Database, Server, Share2, ArrowRight, Users, FileSpreadsheet, Truck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleInefficiency() {
    const { language } = useI18n();
    const isKo = language === "ko";

    return (
        <article className="max-w-3xl mx-auto space-y-24">
            {/* Intro Section */}
            <section className="space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                    {isKo ? (
                        <>
                            많은 기업들이 <span className="text-indigo-400 font-medium">"데이터가 부족해서"</span> 혁신을 못한다고 말합니다. 
                            그래서 비싼 돈을 들여 데이터 레이크를 구축하고, 최신 대시보드 툴을 도입하죠. 
                            하지만 현장에 가보면 어떤가요?
                        </>
                    ) : (
                        <>
                            Many companies claim they can't innovate because they <span className="text-indigo-400 font-medium">"lack data."</span> 
                            So they spend fortunes building data lakes and adopting the latest dashboard tools. 
                            But what happens when you go to the actual field?
                        </>
                    )}
                </p>
                
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
                    <h3 className="text-lg font-mono text-zinc-500 mb-6">
                        {isKo ? "현장의 현실 (Reality)" : "Reality in the Field"}
                    </h3>
                    <div className="flex flex-col md:flex-row items-center gap-8 text-zinc-400">
                        <div className="flex-1 text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center">
                                <Database className="w-8 h-8 text-indigo-400" />
                            </div>
                            <p className="text-sm">
                                {isKo ? "HQ: 데이터 레이크" : "HQ: Data Lake"}
                                <br />
                                <span className="text-xs text-zinc-500">(Full & Stagnant)</span>
                            </p>
                        </div>
                        <div className="hidden md:flex flex-col items-center gap-2">
                            <span className="text-xs text-red-400 font-mono">Disconnected</span>
                            <div className="w-24 h-[2px] bg-gradient-to-r from-zinc-700 to-zinc-700 border-t border-dashed border-zinc-500" />
                            <span className="text-2xl">❌</span>
                        </div>
                        <div className="flex-1 text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-orange-500/10 rounded-full flex items-center justify-center">
                                <FileSpreadsheet className="w-8 h-8 text-orange-400" />
                            </div>
                            <p className="text-sm">
                                {isKo ? "현장: 엑셀 & 수기 메모" : "Field: Excel & Notes"}
                                <br />
                                <span className="text-xs text-zinc-500">(Manual Work)</span>
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-zinc-400 italic">
                        "{isKo 
                            ? "데이터 레이크에 쌓인 그 방대한 데이터는 현장의 의사결정에 전혀 영향을 미치지 못하고 있습니다." 
                            : "That massive amount of data sitting in the data lake is having absolutely no impact on field decision-making."}"
                    </p>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="space-y-8">
                <SectionHeader 
                    number="01" 
                    title={isKo ? "실제 사례: 물류 회사의 데이터 패러독스" : "Real Case: A Logistics Company's Data Paradox"} 
                />
                
                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>
                        {isKo 
                            ? "작년에 만난 한 물류 회사가 있었습니다. 하루 2만 건의 배송을 처리하는데, '배차 효율을 높이려면 더 많은 데이터가 필요하다'며 IoT 센서 도입을 검토 중이었죠."
                            : "Last year, I met a logistics company processing 20,000 deliveries per day. They were considering IoT sensors, believing 'We need more data to improve dispatch efficiency.'"}
                    </p>
                    <p>
                        {isKo 
                            ? "문제는, 이미 그 회사에는 엄청난 데이터가 있었다는 겁니다. 화물 정보망 3곳에서 실시간으로 차량 위치 데이터가 들어오고, ERP에는 과거 3년치 배송 기록이 쌓여 있었어요. 하지만 배차 담당자는 여전히 3개의 탭을 번갈아 보며 수기로 메모를 작성하고 있었습니다."
                            : "The problem? They already had massive data. Real-time vehicle location data was streaming in from 3 freight networks, and their ERP held 3 years of delivery history. Yet dispatchers were still manually switching between 3 tabs, taking notes by hand."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <SiloCard 
                        icon={Users} 
                        title={isKo ? "영업팀" : "Sales Team"} 
                        desc={isKo ? "엑셀로 고객 관리" : "Manage customers in Excel"} 
                    />
                    <SiloCard 
                        icon={Truck} 
                        title={isKo ? "물류팀" : "Logistics Team"} 
                        desc={isKo ? "외부 사이트 직접 조회" : "Check external sites manually"} 
                    />
                    <SiloCard 
                        icon={Building2} 
                        title={isKo ? "정산팀" : "Finance Team"} 
                        desc={isKo ? "ERP 수작업 대조" : "Manual cross-check in ERP"} 
                    />
                </div>
                <p className="text-center text-sm text-zinc-500 mt-2">
                    {isKo ? "각 부서는 마치 다른 행성에 살고 있는 것처럼 단절되어 있습니다." : "Each department operates like they're on different planets."}
                </p>
            </section>

            {/* Core Insight Section */}
            <section className="space-y-12">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 p-8 md:p-16 text-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6">
                        {isKo ? "문제는 '양'이 아니라 '흐름'입니다" : "The problem isn't 'Volume', it's 'Flow'"}
                    </h2>
                    <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                        {isKo 
                            ? <>진정한 비효율은 데이터가 없어서가 아니라, <br/><strong className="text-indigo-400">필요한 데이터가 필요한 사람에게 제때 도달하지 못해서</strong> 발생합니다.</>
                            : <>True inefficiency stems not from a lack of data, but from <br/><strong className="text-indigo-400">the failure of necessary data to reach the right person at the right time</strong>.</>}
                    </p>
                </div>
            </section>

            {/* Solution Section */}
            <section className="space-y-8">
                <SectionHeader 
                    number="02" 
                    title={isKo ? "사일로(Silo)를 부수는 것이 AX의 시작" : "Breaking Silos is the start of AX"} 
                />
                
                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>
                        {isKo 
                            ? "제가 현장에 들어가서 가장 먼저 하는 일은 새로운 AI 모델을 돌리는 게 아닙니다. 부서 간의 단절된 데이터 흐름을 잇는 것입니다."
                            : "The first thing I do when entering the field isn't running a new AI model. It's connecting the severed data flows between departments."}
                    </p>
                </div>

                {/* Integration Diagram */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Sources */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 bg-zinc-800/50 px-4 py-3 rounded-lg border border-zinc-700/50 text-zinc-400 text-sm">
                                <Server className="w-4 h-4" /> API Source A
                            </div>
                            <div className="flex items-center gap-3 bg-zinc-800/50 px-4 py-3 rounded-lg border border-zinc-700/50 text-zinc-400 text-sm">
                                <Server className="w-4 h-4" /> API Source B
                            </div>
                            <div className="flex items-center gap-3 bg-zinc-800/50 px-4 py-3 rounded-lg border border-zinc-700/50 text-zinc-400 text-sm">
                                <Server className="w-4 h-4" /> Internal DB
                            </div>
                        </div>

                        {/* Flow Animation */}
                        <div className="hidden md:flex flex-1 items-center justify-center relative h-20">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[2px] bg-gradient-to-r from-zinc-800 via-indigo-500/50 to-zinc-800" />
                            </div>
                            <motion.div 
                                animate={{ x: [-50, 50], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute"
                            >
                                <div className="w-20 h-[2px] bg-indigo-400 blur-[2px]" />
                            </motion.div>
                            <div className="bg-zinc-950 border border-indigo-500/30 px-4 py-2 rounded-full text-xs text-indigo-300 font-mono z-10">
                                Unified Pipeline
                            </div>
                        </div>

                        {/* Destination */}
                        <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 p-6 rounded-xl text-center">
                            <div className="text-zinc-200 font-bold mb-2">One Dashboard</div>
                            <div className="text-xs text-zinc-400">Real-time Decision Making</div>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg text-zinc-400 mt-8">
                    <p>
                        {isKo 
                            ? "앞서 말한 물류 회사에서는 화물 정보망 3곳의 API를 연동해서, 배차 담당자가 하나의 화면에서 모든 차량 정보를 볼 수 있게 했습니다. 결과는?"
                            : "For that logistics company, we integrated APIs from 3 freight networks so dispatchers could see all vehicle info on one screen. The result?"}
                    </p>
                    <ul className="list-none pl-0 space-y-2">
                        <li className="flex items-center gap-3 text-zinc-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            {isKo ? "배차 업무 시간 50% 감소" : "Dispatch time reduced by 50%"}
                        </li>
                        <li className="flex items-center gap-3 text-zinc-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            {isKo ? "수기 입력 오류 제로화" : "Zero manual entry errors"}
                        </li>
                        <li className="flex items-center gap-3 text-zinc-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            {isKo ? "실시간 데이터 기반 AI 최적화 가능" : "Ready for AI optimization based on real-time data"}
                        </li>
                    </ul>
                </div>
            </section>

            {/* Closing Section */}
            <section className="border-t border-zinc-800 pt-12">
                <h3 className="text-2xl font-bold text-zinc-100 mb-6">
                    {isKo ? "당신의 회사는 어떤가요?" : "How about your company?"}
                </h3>
                <div className="space-y-4">
                    <CheckItem text={isKo ? "부서 간 데이터를 수작업으로 옮기고 있지는 않나요?" : "Are you manually moving data between departments?"} />
                    <CheckItem text={isKo ? "같은 정보를 여러 시스템에 중복 입력하고 있지는 않나요?" : "Are you entering the same info into multiple systems?"} />
                    <CheckItem text={isKo ? "의사결정을 위해 '데이터를 찾는 시간'이 너무 길지는 않나요?" : "Does 'finding data' for decisions take too long?"} />
                </div>
                <p className="mt-8 text-lg text-indigo-300 font-medium">
                    {isKo 
                        ? "더 많은 데이터를 모으기 전에, 이미 있는 데이터부터 제대로 연결하세요. 혁신은 거기서 시작됩니다."
                        : "Before collecting more data, properly connect what you already have. Innovation starts there."}
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

function SiloCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
    return (
        <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl text-center hover:border-zinc-700 transition-colors">
            <Icon className="w-6 h-6 text-zinc-500 mx-auto mb-3" />
            <h4 className="font-bold text-zinc-300 mb-1">{title}</h4>
            <p className="text-xs text-zinc-500">{desc}</p>
        </div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 bg-zinc-600 rounded-full" />
            </div>
            <span className="text-zinc-400">{text}</span>
        </div>
    );
}

