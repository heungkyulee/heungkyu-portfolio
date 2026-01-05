"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    const { t, language } = useI18n();

    return (
        <section className="h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 relative bg-zinc-950 overflow-hidden">
            {/* Background Image */}
            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-30 grayscale">
                <Image
                    src="/hero-portrait.png"
                    alt="Lee Heungkyu - AX Consultant & AI Engineer"
                    unoptimized
                    fill
                    className="object-cover object-right-bottom"
                    priority
                />
            </div>

            {/* AI-powered gradient glow - Animated */}
            <motion.div 
                className="hidden md:block absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-600/10 rounded-full blur-[150px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="hidden md:block absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/5 via-orange-500/5 to-pink-500/5 rounded-full blur-[120px] pointer-events-none"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -60, 0],
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="max-w-6xl mx-auto w-full flex flex-col justify-between h-full text-right md:text-left">
                {/* Top: Minimal label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
                        {t(PORTFOLIO_DATA.profile.name)}
                    </h1>
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
                            <div className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display text-zinc-200 leading-tight">
                                {role}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom: Bio */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="max-w-md ml-auto md:ml-0"
                >
                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed whitespace-pre-line">
                        {t(PORTFOLIO_DATA.profile.bio)}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
