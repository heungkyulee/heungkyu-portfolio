"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function InsightSection() {
    const { t } = useI18n();

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
            {/* Animated background glow */}
            <motion.div
                className="hidden md:block absolute top-20 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-[80px] pointer-events-none"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
                    <div className="text-right md:text-left w-full md:w-auto">
                        <h2 className="text-sm font-mono bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 tracking-widest uppercase animate-gradient-rotate">
                            {t({ ko: "Intelligence Briefs", en: "Intelligence Briefs" })}
                        </h2>
                        <h3 className="text-3xl md:text-6xl font-bold text-zinc-200 font-display">
                            {t({ ko: "Strategic Thoughts", en: "Strategic Thoughts" })}
                        </h3>
                    </div>
                    <div className="text-zinc-500 text-sm font-mono hidden md:block">
                        {t({ ko: "// 기밀 해제", en: "// DECLASSIFIED" })}
                    </div>
                </div>

                <div className="space-y-0">
                    {PORTFOLIO_DATA.insights.map((insight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group border-t border-zinc-900 py-12 hover:bg-zinc-900/30 transition-colors cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:items-baseline">
                                <span className="text-sm font-mono text-zinc-500 w-32 flex-shrink-0">
                                    {insight.date}
                                </span>

                                <div className="flex-1 space-y-4">
                                    <h4 className="text-2xl md:text-3xl font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors">
                                        {t(insight.title)}
                                    </h4>
                                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                        <p className="text-zinc-400 leading-relaxed max-w-2xl pt-2">
                                            {t(insight.summary)}
                                        </p>
                                        <div className="pt-6">
                                            <Link href={`/insights/${insight.id}`} className="inline-flex items-center text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors">
                                                Read Brief <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-zinc-900" />
                </div>
            </div>
        </section>
    );
}
