import { NextResponse } from "next/server";
import { ruB2BPages } from "@/lib/ru-b2b-pages";

const BASE = "https://www.vishomecarpet.com";

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function GET() {
  const urls = [
    { path: "/ru", priority: "0.9" },
    ...ruB2BPages.map((page) => ({ path: `/ru/${page.slug}`, priority: "0.85" })),
    { path: "/ru/hotelnyy-kovrolin", priority: "0.8" },
    { path: "/ru/products/carpet-tiles/nylon-office-carpet-tile", priority: "0.8" },
    { path: "/ru/products/public-area/public-area-heavy-duty", priority: "0.8" },
    { path: "/ru/products/public-area/gold-mining-carpet-mat", priority: "0.8" },
  ];
  const body = urls.map(({ path, priority }) => `  <url><loc>${escapeXml(`${BASE}${path}`)}</loc><lastmod>2026-08-01</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`).join("\n");
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
