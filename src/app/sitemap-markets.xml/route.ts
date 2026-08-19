import { NextResponse } from "next/server";
import { countryApplicationPages } from "@/lib/country-application-pages";
import { countryMarketPages } from "@/lib/country-market-pages";

const BASE = "https://www.vishomecarpet.com";

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&apos;");
}

export function GET() {
  const urls = [
    { path: "/markets", priority: "0.9" },
    ...countryMarketPages.map((page) => ({ path: page.path, priority: page.kind === "gold" ? "0.86" : "0.84" })),
    ...countryApplicationPages.map((page) => ({ path: page.path, priority: page.market === "sg" ? "0.85" : "0.83" })),
  ];
  const body = urls
    .map(({ path, priority }) => `  <url><loc>${escapeXml(`${BASE}${path}`)}</loc><lastmod>2026-08-19</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`)
    .join("\n");

  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}
