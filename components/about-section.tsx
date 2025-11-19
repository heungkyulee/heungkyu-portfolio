"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
    Layers, 
    Trophy, 
    Bot, 
    Briefcase, 
    Users, 
    Cpu,
    ArrowUpRight
} from "lucide-react";

// 아이콘 매핑
const iconMap = {
    "Full Stack": Layers,
    "AI Top 100": Cpu,
    "AI Agent": Bot,
    "AX Consulting": Briefcase,
    "Awards": Trophy,
    "Networking": Users,
    "풀스택 개발": Layers,
    "AI Top 100": Cpu,
    "AI 에이전트": Bot,
    "AX 컨설팅": Briefcase,
    "수상 이력": Trophy,
    "네트워킹": Users,
} as const;

export function AboutSection() {
    const { t, language } = useI18n();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-950 relative overflow-visible">
            {/* Background gradient - 더 깊이감 있게 조정 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />
            
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-transparent" />
                            <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase">Core Capabilities</span>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold text-white font-display tracking-tight leading-none"
                        >
                            Neural<br />Architecture
                        </motion.h3>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-md text-sm leading-relaxed font-mono text-right md:text-left"
                    >
                        {language === 'ko' 
                            ? "비즈니스 로직과 AI 기술을 결합하여 살아있는 시스템을 설계합니다." 
                            : "Architecting living systems by synthesizing business logic with AI technology."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[240px]">
                    {PORTFOLIO_DATA.about.bento.map((item, index) => {
                        const Icon = iconMap[item.title[language] as keyof typeof iconMap] || Layers;
                        const isHovered = hoveredIndex === index;
                        const isBottomRow = index >= 3;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className={cn(
                                    "relative group",
                                    item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
                                    "z-0 hover:z-50" // 호버 시 z-index 상승
                                )}
                            >
                                {/* Main Card */}
                                <div className={cn(
                                    "relative h-full p-8 transition-all duration-500 ease-out",
                                    "bg-zinc-900/40 backdrop-blur-sm border border-white/5",
                                    "hover:bg-zinc-900/80 hover:border-pink-500/30",
                                    "flex flex-col justify-between overflow-hidden",
                                    isHovered ? "shadow-[0_0_30px_-5px_rgba(236,72,153,0.1)]" : ""
                                )}>
                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Header */}
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-pink-500/20 group-hover:bg-pink-500/10 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-zinc-400 group-hover:text-pink-400 transition-colors" />
                                        </div>
                                        {item.type === 'stat' && (
                                            <span className="text-4xl font-bold text-white tracking-tighter">{item.value}</span>
                                        )}
                                        {item.type !== 'stat' && (
                                            <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-pink-500/50 transition-colors" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold text-zinc-200 mb-2 group-hover:text-pink-100 transition-colors">
                                            {t(item.title)}
                                        </h4>
                                        <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-2">
                                            {t(item.content)}
                                        </p>

                                        {/* Tags (only visible on non-stat cards) */}
                                        {item.tags && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {item.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-[10px] font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-800 group-hover:border-pink-500/20 group-hover:text-pink-400/70 transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {item.tags.length > 2 && (
                                                    <span className="text-[10px] font-mono text-zinc-600 py-1 px-1">+{item.tags.length - 2}</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Tooltip Overlay */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: isBottomRow ? 10 : -10, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: isBottomRow ? 10 : -10, scale: 0.98 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className={cn(
                                                "absolute left-0 right-0 pointer-events-none md:pointer-events-auto",
                                                "w-full md:w-[120%] md:-left-[10%]", // Desktop: wider than card
                                                "z-[100]",
                                                isBottomRow ? "bottom-[calc(100%_+_12px)]" : "top-[calc(100%_+_12px)]"
                                            )}
                                        >
                                            <div className={cn(
                                                "relative p-6 md:p-8 rounded-xl overflow-hidden",
                                                "bg-[#0A0A0A]/95 backdrop-blur-xl",
                                                "border border-white/10 shadow-2xl shadow-black/50",
                                                "flex flex-col gap-4"
                                            )}>
                                                {/* Decorative Top Border */}
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50" />
                                                
                                                {/* Header in Tooltip */}
                                                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                                    <div className="flex items-center gap-3">
                                                        <Icon className="w-5 h-5 text-pink-500" />
                                                        <h4 className="text-lg font-bold text-white">{t(item.title)}</h4>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Detailed View</span>
                                                </div>

                                                {/* Detailed Content */}
                                                <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                                                    <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line font-light">
                                                        {t(item.detailedContent)}
                                                    </p>
                                                    
                                                    {item.tags && (
                                                        <div className="mt-6 flex flex-wrap gap-2">
                                                            {item.tags.map(tag => (
                                                                <span key={tag} className="text-xs font-medium text-pink-300 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-md">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Tooltip Connector (Triangle) */}
                                                <div className={cn(
                                                    "absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] border-l border-t border-white/10 rotate-45",
                                                    isBottomRow ? "-bottom-2 border-l-0 border-t-0 border-r border-b" : "-top-2"
                                                )} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(236, 72, 153, 0.5);
                }
            `}</style>
        </section>
    );
}

