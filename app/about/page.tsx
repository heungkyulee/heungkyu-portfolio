import type { Metadata } from "next";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { AboutContent } from "./about-content";

const DESCRIPTION =
  "주식회사 라이폴리 공동창업자·대표 이흥규의 약력, 경력과 기록입니다. AI 에이전트와 업무 자동화를 기획하고 직접 만듭니다.";

export const metadata: Metadata = {
  title: "소개",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    locale: "ko_KR",
    url: `${SITE_URL}/about`,
    title: "이흥규 소개",
    description: DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "이흥규 소개",
    description: DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "이흥규 소개",
    url: `${SITE_URL}/about`,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    inLanguage: "ko-KR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "소개", item: `${SITE_URL}/about` },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutContent />
    </>
  );
}
