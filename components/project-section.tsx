"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectSection() {
    const { t, language } = useI18n();
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-zinc-950 relative">
            {/* Background Container - Isolated for overflow control */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="hidden md:block absolute top-40 right-10 w-[300px] h-[300px] bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full blur-[80px] z-0"
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24">
                    <h2 className="text-sm font-mono bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 tracking-widest uppercase animate-gradient-rotate">
                        {t({ ko: "Selected Works", en: "Selected Works" })}
                    </h2>
                    <h3 className="text-3xl md:text-6xl font-bold text-zinc-200 font-display">
                        {t({ ko: "Portfolio", en: "Portfolio" })}
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    {/* Sticky Visual Side */}
                    <div className="lg:w-1/2 order-2 lg:order-1 relative md:sticky md:top-32 self-start">
                        <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center">
                            {/* Dynamic Visual based on activeProjectIndex */}
                            <div className="text-center p-8">
                                <span className="text-9xl font-bold text-zinc-800 block mb-4">
                                    {String(activeProjectIndex + 1).padStart(2, '0')}
                                </span>
                                <p className="text-zinc-600">Project Visual Placeholder</p>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Text Side */}
                    <div className="lg:w-1/2 order-1 lg:order-2 space-y-32 pb-32">
                        {PORTFOLIO_DATA.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.2 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ margin: "-20% 0px -20% 0px" }}
                                onViewportEnter={() => setActiveProjectIndex(index)}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-mono text-indigo-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="h-px w-12 bg-zinc-800" />
                                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-zinc-100">
                                    {t(project.title)}
                                </h3>

                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    {t(project.description)}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href={`/projects/${project.id}`}>
                                        <Button
                                            variant="outline"
                                            className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
                                        >
                                            {t({ ko: "자세히 보기", en: "View Case Study" })}
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
