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
        <section className="py-24 bg-zinc-950 overflow-hidden border-y border-zinc-900">
            <div className="mb-16 text-center">
                <h2 className="text-sm font-mono text-pink-500 uppercase tracking-widest">
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
                    className="flex gap-16 px-8"
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
                                    className="w-16 h-16 text-zinc-700 group-hover:text-pink-500 transition-colors"
                                />
                                <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors whitespace-nowrap font-mono">
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
