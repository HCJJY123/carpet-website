import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { products, caseStudies } from "@/lib/data";

const BASE = "https://www.vishomecarpet.com";

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/",                          priority: 1.0, changeFrequency: "weekly" },
  { url: "/products",                  priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/carpet-tiles",     priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/wall-to-wall",     priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/public-area",      priority: 0.9, changeFrequency: "monthly" },
  { url: "/projects",                  priority: 0.85, changeFrequency: "monthly" },
  { url: "/blog",                      priority: 0.85, changeFrequency: "weekly" },
  { url: "/about-us",                  priority: 0.8,  changeFrequency: "monthly" },
  { url: "/about-us/about",            priority: 0.75, changeFrequency: "monthly" },
  { url: "/factory",                   priority: 0.8,  changeFrequency: "monthly" },
  { url: "/faq",                       priority: 0.8,  changeFrequency: "monthly" },
  { url: "/contact",                   priority: 0.7,  changeFrequency: "yearly" },
  { url: "/thank-you",                 priority: 0.3,  changeFrequency: "yearly" },
  { url: "/solutions",                 priority: 0.85, changeFrequency: "monthly" },
  { url: "/solutions/hotel-hospitality",priority: 0.85, changeFrequency: "monthly" },
  { url: "/commercial-carpet-tiles",   priority: 0.85, changeFrequency: "monthly" },
  { url: "/natural-sisal-carpet",      priority: 0.85, changeFrequency: "monthly" },
  { url: "/commercial-carpet-manufacturer",priority: 0.85, changeFrequency: "monthly" },
  { url: "/hotel-carpet",              priority: 0.85, changeFrequency: "monthly" },
  { url: "/carpet-tiles-50x50",        priority: 0.85, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.category}/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE}/projects/${cs.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [...staticEntries, ...productEntries, ...blogEntries, ...caseStudyEntries];
}
