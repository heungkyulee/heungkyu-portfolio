import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n-provider";
import { Metadata } from "next";
import InsightContent from "./insight-content";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const insight = PORTFOLIO_DATA.insights.find((i) => i.id === id);
    
    if (!insight) return {};

    const title = `${insight.title.en} | Lee Heungkyu Insight`;
    const description = insight.summary.en;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            url: `https://heungkyulee.dev/insights/${id}`,
            publishedTime: insight.date,
        },
    };
}

export default async function InsightPageWrapper({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const insight = PORTFOLIO_DATA.insights.find((i) => i.id === id);

    if (!insight) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": insight.title.en,
        "description": insight.summary.en,
        "datePublished": insight.date,
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
            "@id": `https://heungkyulee.dev/insights/${id}`
        }
    };

    return (
        <I18nProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 overflow-hidden">
                <SiteHeader />
                <InsightContent id={id} />
                <SiteFooter />
            </main>
        </I18nProvider>
    );
}

