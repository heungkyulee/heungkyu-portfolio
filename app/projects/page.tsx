import type { Metadata } from "next";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { ProjectsContent } from "./projects-content";

const DESCRIPTION =
  "이흥규가 직접 만든 서비스와 고객 프로젝트입니다. Famo Play Factory, 익히, 티클, 단골쓰, 코낼리, 크노AI 등.";

export const metadata: Metadata = {
  title: "프로젝트",
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/projects`,
    title: "프로젝트 | 이흥규",
    description: DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "프로젝트 | 이흥규",
    description: DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "프로젝트",
  url: `${SITE_URL}/projects`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PORTFOLIO_DATA.projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/projects/${p.id}`,
      name: p.title.ko,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsContent />
    </>
  );
}
