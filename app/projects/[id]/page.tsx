import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { CaseStudy } from "@/components/stage/case-study";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
  if (!project) return {};
  const title = project.title.ko;
  const description = `${project.description.ko}. ${project.impact.ko}`;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${id}` },
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

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
  if (!project) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title.ko,
      description: project.description.ko,
      inLanguage: "ko-KR",
      author: { "@id": `${SITE_URL}/#person` },
      url: `${SITE_URL}/projects/${id}`,
      ...(project.year ? { dateCreated: project.year.slice(0, 4) } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "프로젝트", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: project.title.ko, item: `${SITE_URL}/projects/${id}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudy id={id} />
    </>
  );
}
