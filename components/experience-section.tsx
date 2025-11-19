"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";

export function ExperienceSection() {
    const { t } = useI18n();

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Experience</h2>
                    <p className="text-zinc-400">My journey in Tech & Business</p>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-[21px] top-2 bottom-2 w-[2px] bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

                    {PORTFOLIO_DATA.experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[12px] md:left-1/2 w-5 h-5 rounded-full bg-zinc-950 border-4 border-indigo-500 z-10 -translate-x-1/2 mt-1.5" />

                            <div className="flex-1 ml-12 md:ml-0">
                                <div className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-400 mb-3">
                                        {item.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-zinc-100 mb-1">
                                        {t(item.role)}
                                    </h3>
                                    <h4 className="text-lg text-indigo-400 mb-3">
                                        {t(item.company)}
                                    </h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {t(item.description)}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
