import { NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { parseLooseDate, SITE_URL } from "@/lib/seo";

function escapeXml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const items = PORTFOLIO_DATA.insights
    .map((i) => {
      const url = `${SITE_URL}/insights/${i.id}`;
      const title = i.title.ko;
      const description = i.summary.ko;
      const pubDate = parseLooseDate(i.date)?.toUTCString();

      return `
        <item>
          <title>${escapeXml(title)}</title>
          <link>${escapeXml(url)}</link>
          <guid isPermaLink="true">${escapeXml(url)}</guid>
          ${pubDate ? `<pubDate>${escapeXml(pubDate)}</pubDate>` : ""}
          <description>${escapeXml(description)}</description>
        </item>
      `.trim();
    })
    .join("\n");

  const latest = PORTFOLIO_DATA.insights
    .map((i) => parseLooseDate(i.date))
    .filter((d): d is Date => Boolean(d))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml("이흥규 인사이트")}</title>
        <link>${escapeXml(SITE_URL)}</link>
        <description>${escapeXml(
          "AX(업무 전환)·AI 에이전트·소프트웨어 주권·운영의 현실에 대한 인사이트"
        )}</description>
        <language>ko-KR</language>
        ${latest ? `<lastBuildDate>${escapeXml(latest.toUTCString())}</lastBuildDate>` : ""}
        ${items}
      </channel>
    </rss>
  `.trim();

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


