"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n-provider";

// Wrapper component to provide context
export default async function InsightPageWrapper({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <I18nProvider>
            <InsightPage id={id} />
        </I18nProvider>
    );
}

function InsightPage({ id }: { id: string }) {
    const { t, language } = useI18n();
    const insight = PORTFOLIO_DATA.insights.find((i) => i.id === id);

    if (!insight) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
            <SiteHeader />

            <article className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 space-y-8">
                        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-zinc-100 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Intelligence
                        </Link>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                                <span>{insight.date}</span>
                                <span>|</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> 3 min read
                                </span>
                                <span>|</span>
                                <span className="text-indigo-400">Strategic Brief</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
                                {t(insight.title)}
                            </h1>

                            <p className="text-xl text-zinc-400 leading-relaxed border-l-2 border-indigo-500 pl-6 italic">
                                {t(insight.summary)}
                            </p>
                        </div>
                    </div>

                    {/*Content */}
                    <div
                        className="prose prose-invert prose-xl max-w-none
             prose-headings:font-display prose-headings:font-bold prose-headings:text-zinc-100 prose-headings:tracking-tight
             prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-12 prose-h3:mb-6
             prose-p:text-zinc-300 prose-p:leading-loose prose-p:text-lg prose-p:md:text-xl prose-p:mb-6
             prose-strong:text-indigo-400 prose-strong:font-semibold
             prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: (insight as any).content[language] }}
                    />

                    {/* Footer of Article */}
                    <div className="mt-16 pt-8 border-t border-zinc-900 flex justify-between items-center">
                        <div className="text-zinc-500 text-sm">
                            End of Brief //
                        </div>
                        <button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                            <Share2 className="w-4 h-4" /> Share Brief
                        </button>
                    </div>
                </div>
            </article>

            <SiteFooter />
        </main>
    );
}
