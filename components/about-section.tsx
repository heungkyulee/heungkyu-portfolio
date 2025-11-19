"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AboutSection() {
    const { t } = useI18n();

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-950 to-zinc-950" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-8 bg-gradient-to-r from-pink-500 to-transparent" />
                        <h2 className="text-sm font-mono text-pink-500 tracking-widest uppercase">Core Capabilities</h2>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-zinc-200 font-display tracking-tight"
                    >
                        Neural Architecture
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {PORTFOLIO_DATA.about.bento.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={cn(
                                "relative p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm",
                                "border border-zinc-800/50 hover:border-cyan-500/50",
                                "transition-all duration-300 group overflow-hidden",
                                item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
                            )}
                        >
                            {/* Holographic effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-yellow-500/5 to-purple-600/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="h-full flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-lg font-mono font-bold text-zinc-200 uppercase tracking-tight group-hover:text-pink-500 transition-colors">
                                        {t(item.title)}
                                    </h4>
                                    {item.type === 'stat' && (
                                        <span className="text-4xl font-bold text-gradient-instagram">{item.value}</span>
                                    )}
                                </div>

                                <div>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 group-hover:text-zinc-300 transition-colors">
                                        {t(item.content)}
                                    </p>

                                    {item.tags && (
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-mono text-pink-400/80 border border-pink-500/30 px-2 py-0.5 
                                                       group-hover:border-pink-400 group-hover:text-pink-400 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
