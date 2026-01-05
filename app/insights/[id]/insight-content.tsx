"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Import Custom Article Components
import { ArticleInefficiency } from "@/components/insights/article-01-inefficiency";
import { ArticleAiAgents } from "@/components/insights/article-02-ai-agents";
import { ArticleSovereignty } from "@/components/insights/article-03-sovereignty";
import { ArticleAxReality } from "@/components/insights/article-04-ax-reality";

export default function InsightContent({ id }: { id: string }) {
    const { t } = useI18n();
    const insight = PORTFOLIO_DATA.insights.find((i) => i.id === id);
    const otherInsights = PORTFOLIO_DATA.insights.filter((i) => i.id !== id).slice(0, 2);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

    if (!insight) {
        notFound();
    }

    return (
        <article className="relative z-10" ref={containerRef}>
            {/* Hero Section with Parallax */}
            <motion.section 
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 origin-center"
            >
                <div className="max-w-4xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Link 
                            href="/" 
                            className="inline-flex items-center text-sm text-zinc-400 hover:text-indigo-400 transition-colors group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Intelligence
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 font-mono tracking-wide">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                                <Calendar className="w-3 h-3" /> {insight.date}
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                                <Clock className="w-3 h-3" /> 3 min read
                            </span>
                            <Badge variant="outline" className="text-indigo-400 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20">
                                Strategic Brief
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-[1.1] font-display text-balance">
                            {t(insight.title)}
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl font-light border-l-2 border-indigo-500/50 pl-6">
                            {t(insight.summary)}
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Content Section */}
            <div className="px-6 md:px-12 pb-32 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Render Custom Articles based on ID */}
                    <div className="mt-16 mb-24">
                        {insight.id === "ax-reality" && <ArticleAxReality />}
                        {insight.id === "inefficiency-not-data" && <ArticleInefficiency />}
                        {insight.id === "ai-agents-colleagues" && <ArticleAiAgents />}
                        {insight.id === "software-sovereignty" && <ArticleSovereignty />}
                    </div>

                    {/* Article Footer */}
                    <div className="pt-12 border-t border-zinc-800/50 flex justify-between items-center">
                        <div className="text-zinc-600 font-mono text-sm">
                            // End of Brief
                        </div>
                        <button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all border border-zinc-800 hover:border-zinc-700">
                            <Share2 className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                            <span className="text-sm font-medium">Share Insight</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Read Next Section */}
            {otherInsights.length > 0 && (
                <section className="relative z-10 py-24 px-6 md:px-12 border-t border-zinc-900 bg-zinc-950">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-zinc-100 mb-12 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-indigo-500"></span>
                            Read Next
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {otherInsights.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link 
                                        href={`/insights/${item.id}`}
                                        className="group block p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-500 relative overflow-hidden h-full"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-2xl font-bold text-zinc-200 group-hover:text-white transition-colors leading-tight">
                                                    {t(item.title)}
                                                </h4>
                                                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-3 leading-relaxed">
                                                    {t(item.summary)}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-t border-zinc-800 pt-4 group-hover:border-zinc-700 transition-colors">
                                                <span>{item.date}</span>
                                                <span className="flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                                                    Read Brief <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
}

