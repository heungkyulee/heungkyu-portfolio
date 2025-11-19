"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";

export function HeroSection() {
    const { t, language } = useI18n();

    return (
        <section className="h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 py-24 relative bg-zinc-950 overflow-hidden">
            {/* Subtle Instagram gradient glow */}
            <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-pink-500/10 via-yellow-500/10 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full flex flex-col justify-between h-full">
                {/* Top: Minimal label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
                        {t(PORTFOLIO_DATA.profile.name)}
                    </span>
                </motion.div>

                {/* Center: Main titles */}
                <div className="space-y-8 md:space-y-12">
                    {PORTFOLIO_DATA.profile.roles[language].map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display text-zinc-200 leading-tight">
                                {role}
                            </h1>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom: Bio */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="max-w-md"
                >
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                        {t(PORTFOLIO_DATA.profile.bio)}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
