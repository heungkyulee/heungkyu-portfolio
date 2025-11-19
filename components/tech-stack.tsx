"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { motion } from "framer-motion";

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
            <div className="mb-12 text-center">
                <h2 className="text-xl font-medium text-zinc-400 uppercase tracking-widest">Technologies</h2>
            </div>

            <div className="relative flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex gap-12 whitespace-nowrap px-6"
                >
                    {marqueeItems.map((tech, index) => (
                        <span
                            key={`${tech}-${index}`}
                            className="text-4xl md:text-6xl font-bold text-zinc-800 hover:text-zinc-600 transition-colors select-none"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
