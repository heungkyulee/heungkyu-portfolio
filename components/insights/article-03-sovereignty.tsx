"use client";

import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { Lock, Unlock, Settings, Layers, Box, Fingerprint, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleSovereignty() {
    const { language } = useI18n();
    const isKo = language === "ko";

    return (
        <article className="max-w-3xl mx-auto space-y-24">
            {/* Intro */}
            <section className="space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                    {isKo ? (
                        <>
                            편리함에는 대가가 따릅니다. 많은 기업들이 운영의 효율을 위해 거대 SaaS 플랫폼에 자신의 비즈니스 프로세스를 맞춥니다.
                            <br/><span className="text-zinc-500 text-lg">"업계 표준이니까", "다들 쓰니까"</span>라는 이유로 말이죠.
                        </>
                    ) : (
                        <>
                            Convenience comes at a cost. Many companies align their business processes with massive SaaS platforms for operational efficiency.
                            <br/><span className="text-zinc-500 text-lg">"It's the industry standard," "Everyone uses it."</span>
                        </>
                    )}
                </p>
                
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div className="space-y-2">
                        <h4 className="text-yellow-400 font-bold">
                            {isKo ? "차별화의 역설" : "The Paradox of Differentiation"}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {isKo 
                                ? "남들과 똑같은 ERP, 똑같은 CRM을 쓰면서 어떻게 차별화된 가치를 만들 수 있을까요? 기업의 핵심 경쟁력은 남들과 '다른' 프로세스에서 나옵니다."
                                : "How can you create differentiated value while using the same ERP and CRM as everyone else? Core competitiveness comes from processes that are 'different'."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Concept Section: Black Box */}
            <section className="space-y-12">
                <SectionHeader 
                    number="01" 
                    title={isKo ? "블랙박스에 갇힌 비즈니스" : "Business Trapped in a Black Box"} 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500">
                            <Lock className="w-16 h-16 text-zinc-600" />
                        </div>
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="z-20 mt-32 text-zinc-500 font-mono text-sm">Black Box SaaS</div>
                    </div>
                    
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-zinc-200">
                            {isKo ? "데이터 주권의 상실" : "Loss of Data Sovereignty"}
                        </h3>
                        <ul className="space-y-4">
                            <ListItem text={isKo ? "내 고객 데이터가 플랫폼 안에 갇힘" : "Customer data trapped in the platform"} icon={Box} />
                            <ListItem text={isKo ? "알고리즘의 결과를 설명할 수 없음" : "Cannot explain algorithm results"} icon={Settings} />
                            <ListItem text={isKo ? "'기능 지원 불가'라는 답변만 돌아옴" : "Feature requests rejected"} icon={Lock} />
                        </ul>
                    </div>
                </div>
            </section>

            {/* Solution Section: Sovereign Software */}
            <section className="space-y-12">
                <SectionHeader 
                    number="02" 
                    title={isKo ? "소프트웨어를 위한 운영인가, 운영을 위한 소프트웨어인가?" : "Software for Ops, or Ops for Software?"} 
                />

                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>
                        {isKo 
                            ? "소프트웨어가 운영을 지원해야지, 운영이 소프트웨어에 맞춰져서는 안 됩니다. 제가 'Forward Deployed Engineer'로서 현장을 중시하는 이유가 여기에 있습니다."
                            : "Software should support operations; operations should not be tailored to software. This is why I, as a 'Forward Deployed Engineer', prioritize the field."}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/20 to-pink-900/20 border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-4">
                        <Unlock className="w-8 h-8 text-orange-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white">
                        {isKo ? "소프트웨어 주권 (Software Sovereignty)" : "Software Sovereignty"}
                    </h3>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                        {isKo 
                            ? "현장의 독특한 맥락, 그 기업만의 고유한 노하우를 소프트웨어에 녹여내야 합니다. 비록 투박하더라도, 우리만의 로직과 우리만의 데이터가 흐르는 '자주적인 소프트웨어'를 가져야 합니다."
                            : "We must embed the unique context of the field and the company's proprietary Chnow-how into the software. We must possess 'sovereign software' where our own logic and data flow."}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-mono text-orange-300 mt-8">
                        <div className="bg-orange-500/10 rounded-lg py-3 border border-orange-500/20">
                            Transparent Logic
                        </div>
                        <div className="bg-orange-500/10 rounded-lg py-3 border border-orange-500/20">
                            Data Ownership
                        </div>
                        <div className="bg-orange-500/10 rounded-lg py-3 border border-orange-500/20">
                            Custom Workflow
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="border-t border-zinc-800 pt-12">
                 <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-zinc-100">
                            {isKo ? "진정한 디지털 전환" : "True Digital Transformation"}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            {isKo 
                                ? "가장 좋은 소프트웨어는 사용자가 주도권을 쥐는 소프트웨어입니다. 블랙박스가 되어서는 안 됩니다. 당신의 비즈니스 로직을 소프트웨어에 직접 구현하세요."
                                : "The best software empowers the user to hold the reins. It must never be a black box. Implement your business logic directly into the software."}
                        </p>
                    </div>
                    <div className="shrink-0">
                        <Fingerprint className="w-24 h-24 text-zinc-800" />
                    </div>
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

function ListItem({ text, icon: Icon }: { text: string; icon: any }) {
    return (
        <div className="flex items-center gap-3 text-zinc-300">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-zinc-400" />
            </div>
            <span>{text}</span>
        </div>
    );
}

