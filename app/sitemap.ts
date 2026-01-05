import { MetadataRoute } from 'next';
import { PORTFOLIO_DATA } from './data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heungkyulee.dev';

  // 기본 페이지
  const routes = ['', '/projects', '/insights'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // 프로젝트 상세 페이지
  const projectRoutes = PORTFOLIO_DATA.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 인사이트 상세 페이지
  const insightRoutes = PORTFOLIO_DATA.insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes, ...insightRoutes];
}

