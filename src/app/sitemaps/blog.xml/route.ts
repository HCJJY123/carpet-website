import { blogPosts } from "@/lib/blog-data";
import { sitemapResponse } from "@/lib/sitemap-xml";
import { siteUrl } from "@/lib/seo";

const BASE = siteUrl;

export function GET() {
  return sitemapResponse(blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.slug === "carpet-tile-delivery-inspection-site-storage-checklist"
      ? "2026-10-23"
      : post.dateModified ?? post.date,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  })));
}
