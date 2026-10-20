import type { Metadata } from "next";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { InsightsContent } from "./insights-content";

const DESCRIPTION = "AX와 AI 에이전트, 소프트웨어 주권과 운영의 현실에 대한 글입니다.";

export const metadata: Metadata = {
  title: "인사이트",
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/insights`,
    title: "인사이트 | 이흥규",
    description: DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "인사이트 | 이흥규",
    description: DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "이흥규 인사이트",
  url: `${SITE_URL}/insights`,
  inLanguage: "ko-KR",
  author: { "@id": `${SITE_URL}/#person` },
  blogPost: PORTFOLIO_DATA.insights.map((i) => ({
    "@type": "BlogPosting",
    headline: i.title.ko,
    url: `${SITE_URL}/insights/${i.id}`,
  })),
};

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InsightsContent />
    </>
  );
}
