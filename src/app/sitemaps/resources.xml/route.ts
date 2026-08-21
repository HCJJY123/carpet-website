import { resourceCategories, technicalDocuments } from "@/lib/resource-data";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = "https://www.vishomecarpet.com";

export function GET() {
  const entries = [
    { url: `${BASE}/resources`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: 0.78 },
    { url: `${BASE}/technical-documents`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: 0.76 },
    ...resourceCategories.map((category) => ({ url: `${BASE}${category.href}`, lastModified: category.lastModified ?? "2026-08-06", changeFrequency: "monthly" as const, priority: 0.68 })),
    ...technicalDocuments.map((document) => ({ url: `${BASE}/resources/downloads/${document.slug}`, lastModified: document.reviewDate, changeFrequency: "monthly" as const, priority: 0.66 })),
  ];
  return sitemapResponse(entries);
}
