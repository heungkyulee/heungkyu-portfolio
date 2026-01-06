"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
    const { t, language } = useI18n();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.profile.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight">
                            {language === 'ko' ? (
                                <>
                                    함께 만드는 <br />
                                    <span className="text-zinc-600 text-[80px]">변화.</span>
                                </>
                            ) : (
                                <>
                                    Let's work <br />
                                    <span className="text-zinc-600 text-[80px]">together.</span>
                                </>
                            )}
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-md whitespace-pre-line">
                            {t({
                                ko: "새로운 프로젝트, 기술적인 고민,\n혹은 가벼운 커피챗도 환영합니다.",
                                en: "Open for new projects, technical discussions,\nor just a casual coffee chat."
                            })}
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <Button
                                size="lg"
                                className="rounded-full h-14 px-8 text-lg bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                                onClick={handleCopyEmail}
                            >
                                {copied ? <Check className="mr-2 h-5 w-5" /> : <Copy className="mr-2 h-5 w-5" />}
                                {copied ? "Copied!" : "Copy Email"}
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-start md:items-end gap-6">
                        <div className="flex flex-wrap gap-4 text-sm font-mono text-zinc-500">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">
                                {language === "ko" ? "홈" : "Home"}
                            </Link>
                            <Link href="/about" className="hover:text-zinc-100 transition-colors">
                                {language === "ko" ? "소개" : "About"}
                            </Link>
                            <Link href="/services" className="hover:text-zinc-100 transition-colors">
                                {language === "ko" ? "서비스" : "Services"}
                            </Link>
                            <Link href="/insights" className="hover:text-zinc-100 transition-colors">
                                {language === "ko" ? "인사이트" : "Insights"}
                            </Link>
                            <Link href="/projects" className="hover:text-zinc-100 transition-colors">
                                {language === "ko" ? "프로젝트" : "Projects"}
                            </Link>
                        </div>
                        {Object.entries(PORTFOLIO_DATA.profile.contact).map(([key, value]) => {
                            if (key === 'email') return null;
                            return (
                                <a
                                    key={key}
                                    href={value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-2xl md:text-3xl font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                                >
                                    <span className="capitalize">{key}</span>
                                    <ArrowUpRight className="h-6 w-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-900 text-zinc-500 text-sm">
                    <p>© {new Date().getFullYear()} {t(PORTFOLIO_DATA.profile.name)}. All rights reserved.</p>
                    <p>Designed & Built by HK.</p>
                </div>
            </div>
        </footer>
    );
}
