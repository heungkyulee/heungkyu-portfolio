"use client";

import { useRef, useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProcessSection() {
    const { t } = useI18n();
    const targetRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Calculate roughly: Intro(40vw) + 4 Steps(60vw each) + Gaps ≈ 300vw width total.
    // We need to move left by (Total Width - Viewport Width) ≈ 200vw.
    // Adding some buffer to ensure the last item is fully visible.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-250vw"]);

    return (
        <section ref={targetRef} className={`relative md:h-[500vh] bg-zinc-950 ${isMobile ? 'h-auto min-h-screen' : ''}`}>
            {/* Background Container - Isolated for overflow control */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full blur-[100px] z-0"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-purple-500/5 to-amber-500/5 rounded-full blur-[90px] z-0"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="relative md:sticky md:top-0 flex flex-col md:h-screen md:items-center z-10 overflow-hidden">
                <div className="w-full px-6 py-16 md:px-0 md:py-32 md:overflow-hidden h-full flex items-center"> {/* Inner wrapper to clip horizontal content if needed, but let sticky work */}
                    <motion.div 
                        style={{ x: isMobile ? 0 : x }} 
                        className="flex flex-col md:flex-row gap-16 md:gap-24 md:px-24 md:pr-[20vw]"
                    >
                    {/* Intro Card */}
                    <div className="flex-shrink-0 w-full md:w-[40vw] flex flex-col justify-center mb-12 md:mb-0">
                        <h2 className="text-sm font-mono bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 tracking-widest uppercase animate-gradient-rotate">Operational Protocol</h2>
                        <h3 className="text-4xl md:text-7xl font-bold text-zinc-200 tracking-tight font-display leading-tight">
                            From the Mud <br />
                            to the Cloud.
                        </h3>
                    </div>

                    {/* Steps */}
                    {PORTFOLIO_DATA.process.map((step) => (
                        <div key={step.step} className="flex-shrink-0 w-full md:w-[60vw] flex flex-col justify-center border-l-2 border-zinc-800 pl-8 md:pl-12 
                                             hover:border-orange-500 active:border-orange-500 transition-colors duration-300 group py-4 md:py-0">
                            <span className="text-8xl md:text-9xl font-bold text-zinc-900 mb-8 block group-hover:text-zinc-800 group-active:text-zinc-800 transition-colors">
                                {step.step}
                            </span>
                            <h4 className="text-3xl md:text-5xl font-bold text-zinc-200 mb-6 uppercase group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent group-active:bg-gradient-to-r group-active:from-orange-400 group-active:to-pink-400 group-active:bg-clip-text group-active:text-transparent transition-colors">
                                {t(step.title)}
                            </h4>
                            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed group-hover:text-zinc-300 group-active:text-zinc-300 transition-colors whitespace-pre-line">
                                {t(step.description)}
                            </p>
                        </div>
                    ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
