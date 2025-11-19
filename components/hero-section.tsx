"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { ScrambleText } from "@/components/ui/scramble-text";
import { NeuralGrid } from "@/components/ui/neural-grid";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    const { t, language } = useI18n();

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden bg-zinc-950">
            {/* Neural Grid Background */}
            <NeuralGrid />

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] animate-glow-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 mb-8"
                >
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <h2 className="text-lg font-mono text-cyan-400 tracking-wider uppercase">
                        {t(PORTFOLIO_DATA.profile.name)}
                    </h2>
                </motion.div>

                <div className="space-y-4 md:space-y-6 mb-12">
                    {PORTFOLIO_DATA.profile.roles[language].map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight font-display text-zinc-200 
                             hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 
                             transition-all duration-300 cursor-default">
                                <ScrambleText text={role} />
                            </h1>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                        {t(PORTFOLIO_DATA.profile.bio)}
                    </p>

                    <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-2 text-cyan-400 font-medium cursor-pointer group"
                    >
                        <span className="text-sm uppercase tracking-wider">Explore Work</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
        </section>
    );
}
