export type SimpleSitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function sitemapXml(entries: SimpleSitemapEntry[]) {
  const urls = entries.map((entry) => [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    `    <lastmod>${entry.lastModified}</lastmod>`,
    entry.changeFrequency ? `    <changefreq>${entry.changeFrequency}</changefreq>` : "",
    typeof entry.priority === "number" ? `    <priority>${entry.priority.toFixed(2)}</priority>` : "",
    "  </url>",
  ].filter(Boolean).join("\n"));

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

export function sitemapResponse(entries: SimpleSitemapEntry[]) {
  return new Response(sitemapXml(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
