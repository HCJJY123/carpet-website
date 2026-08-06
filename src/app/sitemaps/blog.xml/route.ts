import { blogPosts } from "@/lib/blog-data";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = "https://www.vishomecarpet.com";

export function GET() {
  return sitemapResponse(blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  })));
}
