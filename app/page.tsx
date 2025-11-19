"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectSection } from "@/components/project-section";
import { SiteFooter } from "@/components/site-footer";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { TechStack } from "@/components/tech-stack";
import { ExperienceSection } from "@/components/experience-section";
import { ProcessSection } from "@/components/process-section";
import { InsightSection } from "@/components/insight-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
        <SiteHeader />
        <HeroSection />
        <TechStack />
        <ProcessSection />
        <AboutSection />
        <InsightSection />
        <ProjectSection />
        <TestimonialSection />
        <ExperienceSection />
        <SiteFooter />
      </main>
    </I18nProvider>
  );
}
