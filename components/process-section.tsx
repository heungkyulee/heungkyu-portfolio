"use client";

import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProcessSection() {
    const { t } = useI18n();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-24 px-24">
                    {/* Intro Card */}
                    <div className="flex-shrink-0 w-[60vw] md:w-[40vw] flex flex-col justify-center">
                        <h2 className="text-sm font-mono text-pink-500 mb-4 tracking-widest uppercase">Operational Protocol</h2>
                        <h3 className="text-4xl md:text-7xl font-bold text-zinc-200 tracking-tight font-display leading-tight">
                            From the Mud <br />
                            to the Cloud.
                        </h3>
                    </div>

                    {/* Steps */}
                    {PORTFOLIO_DATA.process.map((step) => (
                        <div key={step.step} className="flex-shrink-0 w-[80vw] md:w-[60vw] flex flex-col justify-center border-l-2 border-zinc-800 pl-12 
                                             hover:border-pink-500 transition-colors duration-300 group">
                            <span className="text-8xl md:text-9xl font-bold text-zinc-900 mb-8 block group-hover:text-zinc-800 transition-colors">
                                {step.step}
                            </span>
                            <h4 className="text-3xl md:text-5xl font-bold text-zinc-200 mb-6 uppercase group-hover:text-pink-500 transition-colors">
                                {t(step.title)}
                            </h4>
                            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed group-hover:text-zinc-300 transition-colors whitespace-pre-line">
                                {t(step.description)}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
