import { MetadataRoute } from "next";

const BASE = "https://www.vishomecarpet.com";

type RootOnlyRoute = {
  url: string;
  modified: string;
  priority: number;
  changeFrequency: "monthly" | "weekly";
};

// The detailed content groups are exposed through the split sitemaps listed in
// robots.txt. Keep this root sitemap limited to pages that have no split owner.
const rootOnlyRoutes = [
  { url: "/commercial-carpet-tiles", modified: "2026-08-04", priority: 0.88, changeFrequency: "monthly" as const },
  { url: "/hotel-carpet", modified: "2026-08-04", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/carpet-tiles-50x50", modified: "2026-08-04", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/solutions", modified: "2026-07-27", priority: 0.75, changeFrequency: "monthly" as const },
  { url: "/solutions/hotel-hospitality", modified: "2026-07-23", priority: 0.75, changeFrequency: "monthly" as const },
  { url: "/request-sample-box", modified: "2026-07-25", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/llms.txt", modified: "2026-08-04", priority: 0.2, changeFrequency: "weekly" as const },
  { url: "/llms-full.txt", modified: "2026-08-04", priority: 0.2, changeFrequency: "weekly" as const },
  { url: "/ai-sources.json", modified: "2026-08-04", priority: 0.2, changeFrequency: "weekly" as const },
] satisfies RootOnlyRoute[];

export default function sitemap(): MetadataRoute.Sitemap {
  return rootOnlyRoutes.map((entry) => ({
    ...entry,
    url: `${BASE}${entry.url}`,
    lastModified: new Date(`${entry.modified}T00:00:00.000Z`),
  }));
}
