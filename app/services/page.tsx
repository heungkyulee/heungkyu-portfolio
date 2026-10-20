import type { Metadata } from "next";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { ServicesContent } from "./services-content";

const DESCRIPTION = "AX 컨설팅, AI 에이전트·업무 자동화, 풀스택 개발. 운영 체계를 바꾸는 일을 진단부터 구현까지 맡습니다.";

export const metadata: Metadata = {
  title: "서비스",
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/services`,
    title: "서비스 | 이흥규",
    description: DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "서비스 | 이흥규",
    description: DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "서비스",
  url: `${SITE_URL}/services`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PORTFOLIO_DATA.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/services/${s.slug}`,
      name: s.title.ko,
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesContent />
    </>
  );
}
