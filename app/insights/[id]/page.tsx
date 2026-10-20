import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL, parseLooseDate } from "@/lib/seo";
import { Article } from "./article";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PORTFOLIO_DATA.insights.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const insight = PORTFOLIO_DATA.insights.find((i) => i.id === id);
  if (!insight) return {};
  const title = insight.title.ko;
  const description = insight.summary.ko;
  return {
    title,
    description,
    alternates: { canonical: `/insights/${id}` },
    openGraph: {
      title: `${title} | 이흥규`,
      description,
      type: "article",
      url: `${SITE_URL}/insights/${id}`,
      publishedTime: parseLooseDate(insight.date)?.toISOString(),
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

export default async function InsightPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const insight = PORTFOLIO_DATA.insights.find((i) => i.id === id);
  if (!insight) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: insight.title.ko,
      description: insight.summary.ko,
      datePublished: parseLooseDate(insight.date)?.toISOString(),
      inLanguage: "ko-KR",
      author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "이흥규" },
      publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "이흥규" },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/insights/${id}` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "인사이트", item: `${SITE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: insight.title.ko, item: `${SITE_URL}/insights/${id}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Article id={id} />
    </>
  );
}
