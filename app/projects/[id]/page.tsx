import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n-provider";
import { Metadata } from "next";
import ProjectContent from "./project-content";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    
    if (!project) return {};

    const title = `${project.title.en} | Lee Heungkyu Project`;
    const description = project.description.en;

    return {
        title,
        description,
        alternates: {
            canonical: `/projects/${id}`,
        },
        openGraph: {
            title,
            description,
            type: "article",
            url: `https://heungkyulee.dev/projects/${id}`,
        },
    };
}

export default async function ProjectPageWrapper({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const projectIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.id === id);
    const project = PORTFOLIO_DATA.projects[projectIndex];

    if (!project) {
        notFound();
    }

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": project.title.en,
            "description": project.description.en,
            "author": {
                "@type": "Person",
                "name": "Lee Heungkyu"
            },
            "publisher": {
                "@type": "Person",
                "name": "Lee Heungkyu"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://heungkyulee.dev/projects/${id}`
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://heungkyulee.dev"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Projects",
                    "item": "https://heungkyulee.dev/projects"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": project.title.en,
                    "item": `https://heungkyulee.dev/projects/${id}`
                }
            ]
        }
    ];

    return (
        <I18nProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
                <SiteHeader />
                <ProjectContent id={id} />
                <SiteFooter />
            </main>
        </I18nProvider>
    );
}

