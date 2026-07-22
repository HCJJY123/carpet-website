import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies, productCategories, products } from "@/lib/data";
import { productPath } from "@/lib/seo";
import { solutionPages } from "@/lib/solution-data";

const BASE = "https://www.vishomecarpet.com";

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/products", priority: 0.9, changeFrequency: "monthly" },
  { url: "/commercial-carpet-manufacturer", priority: 0.9, changeFrequency: "monthly" },
  { url: "/commercial-carpet-tiles", priority: 0.8, changeFrequency: "monthly" },
  { url: "/hotel-carpet", priority: 0.8, changeFrequency: "monthly" },
  { url: "/carpet-tiles-50x50", priority: 0.8, changeFrequency: "monthly" },
  { url: "/natural-sisal-carpet", priority: 0.8, changeFrequency: "monthly" },
  { url: "/projects", priority: 0.85, changeFrequency: "monthly" },
  { url: "/blog", priority: 0.85, changeFrequency: "weekly" },
  { url: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { url: "/factory", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/request-sample-box", priority: 0.8, changeFrequency: "monthly" },
  { url: "/solutions", priority: 0.75, changeFrequency: "monthly" },
  { url: "/solutions/hotel-hospitality", priority: 0.75, changeFrequency: "monthly" },
  { url: "/ru", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ru/products/carpet-tiles/nylon-office-carpet-tile", priority: 0.85, changeFrequency: "monthly" },
  { url: "/ru/products/public-area/public-area-heavy-duty", priority: 0.85, changeFrequency: "monthly" },
  { url: "/ru/products/public-area/gold-mining-carpet-mat", priority: 0.85, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const imageUrl = (path: string) => (path.startsWith("http") ? path : `${BASE}${path}`);
  const uniqueImages = (images: Array<string | undefined>) => [
    ...new Set(images.filter((image): image is string => Boolean(image)).map(imageUrl)),
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = productCategories.map((category) => ({
    url: `${BASE}/products/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
    images: uniqueImages([category.image]),
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}${productPath(product.id)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: product.category === "carpet-tiles" ? 0.9 : 0.85,
    images: uniqueImages([product.image, ...(product.gallery?.map((image) => image.src) ?? [])]),
  }));

  const projectEntries: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${BASE}/projects/${project.id}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.75,
    images: uniqueImages([
      project.image,
      ...project.sections.map((section) => section.image),
      ...(project.gallery ?? []),
    ]),
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutionPages.map((page) => ({
    url: `${BASE}/solutions/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.84,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.72,
    images: uniqueImages([
      post.image,
      post.h1Image,
      ...post.sections.map((section) => section.image),
    ]),
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries, ...projectEntries, ...solutionEntries, ...blogEntries];
}
