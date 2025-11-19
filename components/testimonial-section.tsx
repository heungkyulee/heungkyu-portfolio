"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
    const { t } = useI18n();

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-mono text-indigo-500 mb-4 tracking-widest uppercase">Field Reports</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-100">
                        Trusted by Builders
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PORTFOLIO_DATA.testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative p-10 bg-zinc-900 rounded-2xl border border-zinc-800"
                        >
                            <Quote className="absolute top-8 left-8 w-8 h-8 text-zinc-800 fill-zinc-800" />

                            <blockquote className="relative z-10 mb-8">
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium">
                                    "{t(item.quote)}"
                                </p>
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-zinc-400 font-bold">
                                    {t(item.name).charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-zinc-100">{t(item.name)}</div>
                                    <div className="text-sm text-zinc-500">{t(item.role)}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
