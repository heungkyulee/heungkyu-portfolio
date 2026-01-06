import { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "./data/portfolio";
import { parseLooseDate, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const insightDates = PORTFOLIO_DATA.insights
    .map((i) => parseLooseDate(i.date))
    .filter((d): d is Date => Boolean(d));
  const latestInsight = insightDates.sort((a, b) => b.getTime() - a.getTime())[0];
  const siteLastModified = latestInsight ?? new Date();

  // 기본 페이지
  const routes = ["", "/about", "/projects", "/insights", "/services"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: route === "" ? 1 : 0.9,
  }));

  const serviceRoutes = [
    "/services/ax-consulting",
    "/services/ai-agents",
    "/services/fullstack-development",
    "/services/logistics-automation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 프로젝트 상세 페이지
  const projectRoutes = PORTFOLIO_DATA.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 인사이트 상세 페이지
  const insightRoutes = PORTFOLIO_DATA.insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.id}`,
    lastModified: parseLooseDate(insight.date) ?? siteLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}


