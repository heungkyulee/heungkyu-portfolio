import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";
import { StageChrome } from "@/components/stage/chrome";
import { StageFooter } from "@/components/stage/parts";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

const TITLE = "이흥규 | AI 에이전트와 업무 자동화를 만드는 창업자";
const DESCRIPTION =
  "주식회사 라이폴리 공동창업자·대표 이흥규입니다. AI 에이전트와 업무 자동화를 기획하고 직접 만듭니다. 지금은 진짜 일을 맡길 수 있는 AI 동료, Foli를 만들고 있습니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | 이흥규",
  },
  description: DESCRIPTION,
  keywords: [
    "이흥규",
    "Heungkyu Lee",
    "라이폴리",
    "LiFoli",
    "Foli",
    "AX",
    "AI 전환",
    "AX 컨설팅",
    "AI 에이전트",
    "업무 자동화",
    "풀스택 개발자",
    "LangChain",
    "LangGraph",
    "Next.js",
  ],
  authors: [{ name: "Heungkyu Lee", url: SITE_URL }],
  creator: "Heungkyu Lee",
  publisher: "Heungkyu Lee",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "이흥규",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "googlef82c22375fb53df9",
  },
};

export const viewport: Viewport = {
  themeColor: "#040404",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "이흥규",
      alternateName: "Heungkyu Lee",
      url: SITE_URL,
      image: SITE_OG_IMAGE,
      email: "mailto:hklee@lifoli.co.kr",
      sameAs: [
        "https://github.com/heungkyulee",
        "https://www.linkedin.com/in/heungkyu-lee-37b888264/",
      ],
      jobTitle: "Co-founder & CEO",
      worksFor: {
        "@type": "Organization",
        name: "주식회사 라이폴리",
        alternateName: "LiFoli Corp.",
        url: "https://lifoli.co.kr/",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "성균관대학교",
        alternateName: "Sungkyunkwan University",
      },
      description: DESCRIPTION,
      knowsAbout: ["AI Agents", "Work Automation", "AI Transformation", "Full Stack Development"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "이흥규",
      url: SITE_URL,
      inLanguage: "ko-KR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="naver-site-verification" content="navercc9cf805a5a2a3da91ca9a2585f6f997" />
        <link rel="alternate" type="application/rss+xml" title="인사이트 RSS" href="/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <I18nProvider>
          <StageChrome />
          <main className="relative">{children}</main>
          <StageFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
