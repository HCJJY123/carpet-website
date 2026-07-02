import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies, products } from "@/lib/data";

const siteUrl = "https://www.vishomecarpet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about-us/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/carpet-tiles-50x50", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/commercial-carpet-tiles", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/factory", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/hotel-carpet", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/products/carpet-tiles", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/products/public-area", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/products/wall-to-wall", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/solutions", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/solutions/hotel-hospitality", priority: 0.8, changeFrequency: "monthly" as const }
  ];

  const productRoutes = products.map((product) => ({
    path: `/products/${product.category}/${product.id}`,
    priority: 0.9,
    changeFrequency: "monthly" as const
  }));

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const
  }));

  const projectRoutes = caseStudies.map((project) => ({
    path: `/projects/${project.id}`,
    priority: 0.7,
    changeFrequency: "monthly" as const
  }));

  const routes = [...staticRoutes, ...productRoutes, ...blogRoutes, ...projectRoutes];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
