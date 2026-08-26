import { applicationPages } from "@/lib/application-data";
import { localizedLandings } from "@/lib/localized-landings";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = "https://www.vishomecarpet.com";

const staticPages = [
  "/",
  "/products",
  "/applications",
  "/projects",
  "/blog",
  "/about-us",
  "/factory",
  "/quality-control",
  "/certifications",
  "/architects-designers",
  "/media/press-kit",
  "/commercial-carpet-manufacturer",
  "/contact",
  "/faq",
  "/privacy-policy",
];

export function GET() {
  const entries = [
    ...staticPages.map((path) => ({ url: `${BASE}${path}`, lastModified: "2026-08-06", changeFrequency: path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...applicationPages.map((page) => ({ url: `${BASE}/applications/${page.slug}`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: 0.76 })),
    ...localizedLandings.map((page) => ({ url: `${BASE}${page.path}`, lastModified: "2026-08-26", changeFrequency: "monthly" as const, priority: 0.72 })),
  ];

  return sitemapResponse(entries);
}
