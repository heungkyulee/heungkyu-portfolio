"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n-provider";

// Wrapper component to provide context
export default async function ProjectPageWrapper({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <I18nProvider>
            <ProjectPage id={id} />
        </I18nProvider>
    );
}

function ProjectPage({ id }: { id: string }) {
    const { t } = useI18n();
    const projectIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.id === id);
    const project = PORTFOLIO_DATA.projects[projectIndex];

    if (!project) {
        notFound();
    }

    const nextProject = PORTFOLIO_DATA.projects[(projectIndex + 1) % PORTFOLIO_DATA.projects.length];

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
            <SiteHeader />

            <article className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 space-y-8">
                        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-zinc-100 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Link>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                                    {project.category}
                                </Badge>
                                <span className="text-zinc-600">|</span>
                                <span className="text-zinc-500 text-sm font-mono">
                                    {String(projectIndex + 1).padStart(2, '0')} / {String(PORTFOLIO_DATA.projects.length).padStart(2, '0')}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 font-display">
                                {t(project.title)}
                            </h1>

                            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                                {t(project.description)}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 px-3 py-1">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="aspect-video w-full bg-zinc-900 rounded-2xl border border-zinc-800 mb-24 flex items-center justify-center overflow-hidden">
                        <div className="text-center">
                            <span className="text-zinc-700 text-lg font-mono uppercase tracking-widest">Project Visual</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-24">
                        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                            <h2 className="text-sm font-mono text-indigo-500 uppercase tracking-widest pt-2">The Problem</h2>
                            <div className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                {t(project.problem)}
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                            <h2 className="text-sm font-mono text-indigo-500 uppercase tracking-widest pt-2">The Solution</h2>
                            <div className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                {t(project.solution)}
                            </div>
                        </section>

                        {/* Secondary Image Placeholder */}
                        <div className="aspect-[21/9] w-full bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden">
                            <span className="text-zinc-700 text-sm font-mono uppercase tracking-widest">Interface Detail</span>
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                            <h2 className="text-sm font-mono text-indigo-500 uppercase tracking-widest pt-2">The Impact</h2>
                            <div className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                {t(project.impact)}
                            </div>
                        </section>
                    </div>

                    {/* Next Project Navigation */}
                    <div className="mt-32 pt-16 border-t border-zinc-900">
                        <Link href={`/projects/${nextProject.id}`} className="group block">
                            <div className="text-sm text-zinc-500 mb-2">Next Project</div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-3xl md:text-5xl font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors">
                                    {t(nextProject.title)}
                                </h3>
                                <ArrowRight className="h-8 w-8 text-zinc-500 group-hover:text-zinc-100 group-hover:translate-x-2 transition-all" />
                            </div>
                        </Link>
                    </div>
                </div>
            </article>

            <SiteFooter />
        </main>
    );
}
