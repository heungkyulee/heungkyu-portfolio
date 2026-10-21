import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 내린 페이지의 기존 주소는 목록으로 보냅니다 (검색 노출 유지).
  async redirects() {
    return [
      { source: "/projects/maestro-tms", destination: "/projects", permanent: true },
      { source: "/projects/opus-ai", destination: "/projects", permanent: true },
      { source: "/insights/inefficiency-not-data", destination: "/insights", permanent: true },
      { source: "/insights/ai-agents-colleagues", destination: "/insights", permanent: true },
      { source: "/services/logistics-automation", destination: "/services", permanent: true },
      { source: "/lab", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
