import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

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
  metadataBase: new URL('https://heungkyulee.dev'),
  title: "Lee Heungkyu | AX Consultant & AI Engineer",
  description: "Forward Deployed Engineer specializing in operational reality. Building systems that work in the mud, not just on paper.",
  keywords: ["Lee Heungkyu", "이흥규", "AX Consultant", "AI Engineer", "Full Stack Developer", "AI Agent", "Logistics AI", "Next.js", "Software Sovereignty"],
  authors: [{ name: "Lee Heungkyu", url: "https://heungkyulee.dev" }],
  creator: "Lee Heungkyu",
  publisher: "Lee Heungkyu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://heungkyulee.dev",
    title: "Lee Heungkyu | AX Consultant & AI Engineer",
    description: "Forward Deployed Engineer specializing in operational reality. Building systems that work in the mud, not just on paper.",
    siteName: "Lee Heungkyu Portfolio",
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
  "@type": "Person",
  "name": "이흥규",
  "alternateName": "Lee Heungkyu",
  "url": "https://heungkyulee.dev",
  "image": "https://heungkyulee.dev/hero-portrait.png",
  "sameAs": [
    "https://github.com/heungkyulee",
    "https://www.linkedin.com/in/heungkyu-lee-37b888264/"
  ],
  "jobTitle": "AX Consultant & AI Engineer",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Korean Logistics Data Corp."
    },
    {
      "@type": "Organization",
      "name": "LiFoli Corp."
    }
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Sungkyunkwan University"
  },
  "description": "Forward Deployed Engineer specializing in operational reality. Building systems that work in the mud, not just on paper.",
  "knowsAbout": ["Artificial Intelligence", "Full Stack Development", "Logistics", "Digital Transformation", "AI Agents"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
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
