import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies, products } from "@/lib/data";
import { absoluteUrl, priorityRoutes, productPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = priorityRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route.includes("contact") ? 0.8 : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: absoluteUrl(productPath(product.id)),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const projectRoutes = caseStudies.map((project) => ({
    url: absoluteUrl(`/projects/${project.id}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes, ...blogRoutes];
}
