"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { motion } from "framer-motion";
import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiPython, SiPostgresql, SiSupabase, SiFastapi,
    SiLangchain, SiOpenai, SiAnthropic, SiDocker, SiFigma, SiGit, SiVercel, SiNotion
} from "react-icons/si";
import { IconType } from "react-icons";

// Icon mapping for technologies
const techIcons: Record<string, IconType> = {
    // Frontend
    "Next.js": SiNextdotjs,
    "React": SiReact,
    "React Native": SiReact,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Framer Motion": SiFramer,

    // Backend
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "PostgreSQL": SiPostgresql,
    "Supabase": SiSupabase,
    "FastAPI": SiFastapi,

    // AI - using similar/related icons
    "LangChain": SiLangchain,
    "LangGraph": SiLangchain,
    "OpenAI API": SiOpenai,
    "Claude API": SiAnthropic,
    "n8n": SiNodedotjs,
    "RAG": SiOpenai,

    // Tools
    "Git": SiGit,
    "Docker": SiDocker,
    "Vercel": SiVercel,
    "Figma": SiFigma,
    "Notion": SiNotion,
};

export function TechStack() {
    const allTech = [
        ...PORTFOLIO_DATA.techStack.frontend,
        ...PORTFOLIO_DATA.techStack.backend,
        ...PORTFOLIO_DATA.techStack.ai,
        ...PORTFOLIO_DATA.techStack.tools,
    ];

    // Duplicate for infinite scroll effect
    const marqueeItems = [...allTech, ...allTech, ...allTech];

    return (
        <section className="py-24 bg-zinc-950 overflow-hidden border-y border-zinc-900 relative">
            {/* Animated background glow */}
            <motion.div
                className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    x: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-l from-purple-500/5 to-amber-500/5 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    x: [0, -80, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
            
            <div className="mb-16 text-center relative z-10">
                <h2 className="text-sm font-mono bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-widest animate-gradient-rotate">
                    Technologies
                </h2>
            </div>

            <div className="relative flex">
                <motion.div
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex gap-8 md:gap-16 px-8"
                >
                    {marqueeItems.map((tech, index) => {
                        const Icon = techIcons[tech];
                        if (!Icon) return null;

                        return (
                            <div
                                key={`${tech}-${index}`}
                                className="flex flex-col items-center gap-3 group hover:scale-110 transition-transform"
                            >
                                <Icon
                                    className="w-12 h-12 md:w-16 md:h-16 text-zinc-700 group-hover:text-orange-500 transition-colors"
                                />
                                <span className="text-[10px] md:text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors whitespace-nowrap font-mono">
                                    {tech}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
