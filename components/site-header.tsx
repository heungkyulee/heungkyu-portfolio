"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";
import { motion } from "framer-motion";
import { HKLogo } from "@/components/ui/hk-logo";
import Link from "next/link";

export function SiteHeader() {
    const { language, setLanguage } = useI18n();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 pointer-events-none"
        >
            <div className="pointer-events-auto mix-blend-difference flex items-center gap-6">
                <Link href="/" aria-label="홈으로 이동" className="inline-flex items-center">
                    <HKLogo className="w-8 h-8 text-zinc-100" />
                </Link>
                <nav className="hidden md:flex items-center gap-5 text-xs font-mono text-zinc-400">
                    <Link
                        href="/about"
                        className="hover:text-zinc-100 transition-colors"
                    >
                        {language === "ko" ? "소개" : "About"}
                    </Link>
                    <Link
                        href="/services"
                        className="hover:text-zinc-100 transition-colors"
                    >
                        {language === "ko" ? "서비스" : "Services"}
                    </Link>
                    <Link
                        href="/insights"
                        className="hover:text-zinc-100 transition-colors"
                    >
                        {language === "ko" ? "인사이트" : "Insights"}
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:text-zinc-100 transition-colors"
                    >
                        {language === "ko" ? "프로젝트" : "Projects"}
                    </Link>
                </nav>
            </div>

            <div className="pointer-events-auto bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full p-1 flex gap-1 shadow-lg">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('ko')}
                    className={`rounded-full px-4 h-8 text-xs font-medium transition-all ${language === 'ko'
                        ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                        }`}
                >
                    KO
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className={`rounded-full px-4 h-8 text-xs font-medium transition-all ${language === 'en'
                        ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                        }`}
                >
                    EN
                </Button>
            </div>
        </motion.header>
    );
}
