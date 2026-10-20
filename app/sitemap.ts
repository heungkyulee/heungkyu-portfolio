import { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "./data/portfolio";
import { parseLooseDate, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const insightDates = PORTFOLIO_DATA.insights
    .map((i) => parseLooseDate(i.date))
    .filter((d): d is Date => Boolean(d));
  const siteLastModified = insightDates.sort((a, b) => b.getTime() - a.getTime())[0] ?? new Date();

  const routes = ["", "/about", "/projects", "/insights", "/services"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  const serviceRoutes = PORTFOLIO_DATA.services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = PORTFOLIO_DATA.projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = PORTFOLIO_DATA.insights.map((insight) => ({
    url: `${SITE_URL}/insights/${insight.id}`,
    lastModified: parseLooseDate(insight.date) ?? siteLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}
