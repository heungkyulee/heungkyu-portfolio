import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { ServiceDetail } from "./service-detail";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PORTFOLIO_DATA.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = PORTFOLIO_DATA.services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = service.title.ko;
  const description = service.lead.ko;
  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: `${SITE_URL}/services/${slug}`,
      title: `${title} | 이흥규`,
      description,
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = PORTFOLIO_DATA.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: service.title.ko,
      url: `${SITE_URL}/services/${slug}`,
      areaServed: "KR",
      provider: { "@id": `${SITE_URL}/#person` },
      description: service.lead.ko,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.q.ko,
        acceptedAnswer: { "@type": "Answer", text: f.a.ko },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.title.ko, item: `${SITE_URL}/services/${slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetail slug={slug} />
    </>
  );
}
