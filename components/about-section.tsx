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
    "AI 에이전트": Bot,
    "AX 컨설팅": Briefcase,
    "수상 이력": Trophy,
    "네트워킹": Users,
} as const;

// 텍스트 포매팅 함수 (Bold 처리)
const formatText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

export function AboutSection() {
    const { t, language } = useI18n();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-950 relative overflow-visible">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />
            
            {/* Animated floating orbs */}
            <motion.div
                className="hidden md:block absolute top-20 right-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full blur-[80px]"
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="hidden md:block absolute bottom-20 left-20 w-[250px] h-[250px] bg-gradient-to-tr from-purple-500/5 to-amber-500/5 rounded-full blur-[60px]"
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, 40, -20, 0],
                    scale: [1, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            
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
                             <motion.div 
                                 className="h-px w-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                                 animate={{
                                     backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                 }}
                                 transition={{
                                     duration: 3,
                                     repeat: Infinity,
                                     ease: "linear"
                                 }}
                                 style={{ backgroundSize: "200% 100%" }}
                             />
                             <span className="text-xs font-mono bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent tracking-[0.2em] uppercase animate-gradient-rotate">Core Capabilities</span>
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
                        className="text-zinc-400 max-w-md text-base leading-relaxed font-mono text-right md:text-left"
                    >
                        {language === 'ko' 
                            ? "비즈니스 로직과 AI 기술을 결합하여 살아있는 시스템을 설계합니다." 
                            : "Architecting living systems by synthesizing business logic with AI technology."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[380px]">
                    {PORTFOLIO_DATA.about.bento.map((item, index) => {
                        const Icon = iconMap[item.title[language] as keyof typeof iconMap] || Layers;
                        const isHovered = hoveredIndex === index;

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
                                    "relative h-full p-8 transition-all duration-500 ease-out rounded-3xl",
                                    "bg-zinc-900/40 backdrop-blur-sm border border-white/5",
                                    // 호버 시 스타일 변경
                                    isHovered 
                                        ? "bg-zinc-950/90 border-orange-500/30 shadow-[0_0_30px_-5px_rgba(255,107,53,0.15)]" 
                                        : "hover:bg-zinc-900/60 hover:border-white/10",
                                    "flex flex-col overflow-hidden"
                                )}>
                                    {/* Hover Gradient Effect */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-purple-500/5 transition-opacity duration-500",
                                        isHovered ? "opacity-100" : "opacity-0"
                                    )} />

                                    {/* Header */}
                                    <div className="flex justify-between items-start relative z-10 mb-6 shrink-0">
                                        <div className={cn(
                                            "flex items-center gap-4 transition-all duration-300",
                                            isHovered ? "scale-90 origin-left" : ""
                                        )}>
                                            <div className={cn(
                                                "p-3 rounded-2xl border transition-colors duration-300",
                                                isHovered 
                                                    ? "bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-orange-500/30" 
                                                    : "bg-white/5 border-white/5"
                                            )}>
                                                <Icon className={cn(
                                                    "w-8 h-8 transition-colors duration-300",
                                                    isHovered ? "text-orange-400" : "text-zinc-400"
                                                )} />
                                            </div>
                                            <h4 className={cn(
                                                "text-2xl font-bold transition-colors duration-300",
                                                isHovered 
                                                    ? "bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent" 
                                                    : "text-zinc-200"
                                            )}>
                                                {t(item.title)}
                                            </h4>
                                        </div>
                                        
                                        {/* Top Right Indicator */}
                                        {item.type === 'stat' ? (
                                            <span className={cn(
                                                "text-4xl font-bold transition-all duration-300",
                                                isHovered ? "text-white scale-90 origin-right" : "text-white"
                                            )}>{item.value}</span>
                                        ) : (
                                            <ArrowUpRight className={cn(
                                                "w-6 h-6 transition-all duration-300",
                                                isHovered ? "text-orange-500 rotate-45 opacity-100" : "text-zinc-700 opacity-50"
                                            )} />
                                        )}
                                    </div>

                                    {/* Content Switching */}
                                    <div className="relative z-10 flex-1 overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            {!isHovered ? (
                                                // 기본 상태: 요약 내용
                                                <motion.div
                                                    key="summary"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex flex-col justify-between h-full"
                                                >
                                                    <p className="text-lg text-zinc-400 line-clamp-3 leading-relaxed font-medium">
                                                        {t(item.content)}
                                                    </p>

                                                    {/* Tags (Summary View) */}
                                                    {item.tags && (
                                                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                                            {item.tags.slice(0, 2).map(tag => (
                                                                <span key={tag} className="text-[13px] font-mono text-zinc-500 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-800">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                            {item.tags.length > 2 && (
                                                                <span className="text-[13px] font-mono text-zinc-600 py-1 px-2">+{item.tags.length - 2}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            ) : (
                                                // 호버 상태: 상세 내용
                                                <motion.div
                                                    key="detail"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                    className="h-full flex flex-col"
                                                >
                                                    {/* Scrollable Detail Content */}
                                                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 -mr-4">
                                                        <p className="text-base text-zinc-300 leading-relaxed whitespace-pre-line font-light">
                                                            {formatText(t(item.detailedContent))}
                                                        </p>
                                                        
                                                        {/* Tags (Detail View) */}
                                                        {item.tags && (
                                                            <div className="mt-6 flex flex-wrap gap-2 pb-2">
                                                                {item.tags.map(tag => (
                                                                    <span key={tag} className="text-[13px] font-medium text-orange-300 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Bottom Fade for Scroll Indication */}
                                                    <div className="h-8 bg-gradient-to-t from-zinc-950/90 to-transparent shrink-0" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
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
                    background: linear-gradient(to bottom, rgba(255, 107, 53, 0.3), rgba(236, 72, 153, 0.3));
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, rgba(255, 107, 53, 0.6), rgba(236, 72, 153, 0.6));
                }
            `}</style>
        </section>
    );
}
