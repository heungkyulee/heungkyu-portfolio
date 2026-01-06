import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n-provider";
import { Metadata } from "next";
import ProjectContent from "./project-content";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
    return PORTFOLIO_DATA.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    
    if (!project) return {};

    const title = project.title.ko;
    const description = project.description.ko;

    return {
        title,
        description,
        alternates: {
            canonical: `/projects/${id}`,
        },
        openGraph: {
            title: `${title} | 이흥규`,
            description,
            type: "article",
            url: `${SITE_URL}/projects/${id}`,
            images: [{ url: SITE_OG_IMAGE }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | 이흥규`,
            description,
            images: [SITE_OG_IMAGE],
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
            "headline": project.title.ko,
            "description": project.description.ko,
            "inLanguage": "ko-KR",
            "author": {
                "@type": "Person",
                "@id": `${SITE_URL}/#person`,
                "name": "이흥규"
            },
            "publisher": {
                "@type": "Person",
                "@id": `${SITE_URL}/#person`,
                "name": "이흥규"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${SITE_URL}/projects/${id}`
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "홈",
                    "item": SITE_URL
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "프로젝트",
                    "item": `${SITE_URL}/projects`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": project.title.ko,
                    "item": `${SITE_URL}/projects/${id}`
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

