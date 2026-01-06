import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "이흥규 | AX 컨설턴트 · AI 엔지니어 · 풀스택 개발자",
    template: "%s | 이흥규",
  },
  description:
    "비즈니스 문제를 정의하고, 기술로 끝까지 해결합니다. AX(업무 전환)·AI 에이전트·풀스택(Next.js/React)·물류/업무 자동화를 다룹니다.",
  keywords: [
    "이흥규",
    "Lee Heungkyu",
    "AX 컨설턴트",
    "AX Consulting",
    "AI 엔지니어",
    "AI Engineer",
    "풀스택 개발자",
    "Full Stack Developer",
    "AI 에이전트",
    "AI Agent",
    "LangChain",
    "LangGraph",
    "LLM",
    "Next.js",
    "React",
    "물류 AI",
    "업무 자동화",
    "Software Sovereignty",
  ],
  authors: [{ name: "Lee Heungkyu", url: "https://heungkyulee.dev" }],
  creator: "Lee Heungkyu",
  publisher: "Lee Heungkyu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    title: "이흥규 | AX 컨설턴트 · AI 엔지니어 · 풀스택 개발자",
    description:
      "비즈니스 문제를 정의하고, 기술로 끝까지 해결합니다. AX(업무 전환)·AI 에이전트·풀스택(Next.js/React)·물류/업무 자동화를 다룹니다.",
    siteName: "Lee Heungkyu Portfolio",
    images: [{ url: SITE_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "이흥규 | AX 컨설턴트 · AI 엔지니어 · 풀스택 개발자",
    description:
      "비즈니스 문제를 정의하고, 기술로 끝까지 해결합니다. AX(업무 전환)·AI 에이전트·풀스택(Next.js/React)·물류/업무 자동화를 다룹니다.",
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  verification: {
    google: "googlef82c22375fb53df9",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "이흥규",
      alternateName: "Lee Heungkyu",
      url: SITE_URL,
      image: SITE_OG_IMAGE,
      sameAs: [
        "https://github.com/heungkyulee",
        "https://www.linkedin.com/in/heungkyu-lee-37b888264/",
      ],
      jobTitle: "AX Consultant & AI Engineer",
      worksFor: [
        {
          "@type": "Organization",
          name: "Korean Logistics Data Corp.",
        },
        {
          "@type": "Organization",
          name: "LiFoli Corp.",
        },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Sungkyunkwan University",
      },
      description:
        "비즈니스 문제를 정의하고, 기술로 끝까지 해결합니다. AX(업무 전환)·AI 에이전트·풀스택·물류/업무 자동화를 다룹니다.",
      knowsAbout: [
        "Artificial Intelligence",
        "Full Stack Development",
        "Logistics",
        "Digital Transformation",
        "AI Agents",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "이흥규 포트폴리오",
      url: SITE_URL,
      inLanguage: "ko-KR",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Insights RSS"
          href="/rss.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
