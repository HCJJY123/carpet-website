import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const BASE = "https://www.vishomecarpet.com";

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/products", priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/carpet-tiles", priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/wall-to-wall", priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/public-area", priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles", priority: 0.85, changeFrequency: "monthly" },
  { url: "/products/public-area/natural-sisal-carpet", priority: 0.85, changeFrequency: "monthly" },
  { url: "/products/carpet-tiles/commercial-nylon-tiles", priority: 0.8, changeFrequency: "monthly" },
  { url: "/products/wall-to-wall/3d-printed-hotel-carpet", priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/wall-to-wall/luxury-hotel-broadloom", priority: 0.8, changeFrequency: "monthly" },
  { url: "/products/public-area/public-area-heavy-duty", priority: 0.8, changeFrequency: "monthly" },
  { url: "/commercial-carpet-tiles", priority: 0.8, changeFrequency: "monthly" },
  { url: "/hotel-carpet", priority: 0.8, changeFrequency: "monthly" },
  { url: "/carpet-tiles-50x50", priority: 0.8, changeFrequency: "monthly" },
  { url: "/projects", priority: 0.85, changeFrequency: "monthly" },
  { url: "/projects/case-1", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-2", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-3", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-4", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-5", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-6", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-7", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-8", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-9", priority: 0.75, changeFrequency: "yearly" },
  { url: "/projects/case-10", priority: 0.75, changeFrequency: "yearly" },
  { url: "/blog", priority: 0.85, changeFrequency: "weekly" },
  { url: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { url: "/factory", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { url: "/solutions", priority: 0.75, changeFrequency: "monthly" },
  { url: "/solutions/hotel-hospitality", priority: 0.75, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticEntries, ...blogEntries];
}
