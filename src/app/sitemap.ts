import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies, productCategories, products } from "@/lib/data";
import { localizedLandings } from "@/lib/localized-landings";
import { productPath } from "@/lib/seo";
import { solutionPages } from "@/lib/solution-data";

const BASE = "https://www.vishomecarpet.com";

type StaticRoute = {
  url: string;
  modified: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticRoutes: StaticRoute[] = [
  { url: "/", modified: "2026-07-27", priority: 1.0, changeFrequency: "weekly" },
  { url: "/products", modified: "2026-07-23", priority: 0.9, changeFrequency: "monthly" },
  { url: "/commercial-carpet-manufacturer", modified: "2026-07-28", priority: 0.9, changeFrequency: "monthly" },
  { url: "/commercial-carpet-tiles", modified: "2026-07-25", priority: 0.8, changeFrequency: "monthly" },
  { url: "/hotel-carpet", modified: "2026-07-27", priority: 0.8, changeFrequency: "monthly" },
  { url: "/carpet-tiles-50x50", modified: "2026-07-27", priority: 0.8, changeFrequency: "monthly" },
  { url: "/natural-sisal-carpet", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/projects", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
  { url: "/blog", modified: "2026-07-30", priority: 0.85, changeFrequency: "weekly" },
  { url: "/about-us", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/factory", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faq", modified: "2026-07-26", priority: 0.8, changeFrequency: "monthly" },
  { url: "/contact", modified: "2026-07-25", priority: 0.7, changeFrequency: "yearly" },
  { url: "/privacy-policy", modified: "2026-07-25", priority: 0.3, changeFrequency: "yearly" },
  { url: "/request-sample-box", modified: "2026-07-25", priority: 0.8, changeFrequency: "monthly" },
  { url: "/solutions", modified: "2026-07-27", priority: 0.75, changeFrequency: "monthly" },
  { url: "/solutions/hotel-hospitality", modified: "2026-07-23", priority: 0.75, changeFrequency: "monthly" },
  { url: "/llms.txt", modified: "2026-07-29", priority: 0.2, changeFrequency: "weekly" },
  { url: "/llms-full.txt", modified: "2026-07-29", priority: 0.2, changeFrequency: "weekly" },
  { url: "/ai-sources.json", modified: "2026-07-29", priority: 0.2, changeFrequency: "weekly" },
  { url: "/ru", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ru/products/carpet-tiles/nylon-office-carpet-tile", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
  { url: "/ru/products/public-area/public-area-heavy-duty", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
  { url: "/ru/products/public-area/gold-mining-carpet-mat", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDates = {
    catalog: new Date("2026-07-28T00:00:00.000Z"),
    contentTrust: new Date("2026-07-28T00:00:00.000Z"),
    localizedLandings: new Date("2026-07-24T00:00:00.000Z"),
    solutions: new Date("2026-07-26T00:00:00.000Z"),
  };
  const imageUrl = (path: string) => (path.startsWith("http") ? path : `${BASE}${path}`);
  const uniqueImages = (images: Array<string | undefined>) => [
    ...new Set(images.filter((image): image is string => Boolean(image)).map(imageUrl)),
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ url, modified, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(`${modified}T00:00:00.000Z`),
    changeFrequency,
    priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = productCategories.map((category) => ({
    url: `${BASE}/products/${category.slug}`,
    lastModified: contentDates.catalog,
    changeFrequency: "monthly",
    priority: 0.9,
    images: uniqueImages([category.image]),
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}${productPath(product.id)}`,
    lastModified: contentDates.catalog,
    changeFrequency: "monthly",
    priority: product.category === "carpet-tiles" ? 0.9 : 0.85,
    images: uniqueImages([product.image, ...(product.gallery?.map((image) => image.src) ?? [])]),
  }));

  const projectEntries: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${BASE}/projects/${project.id}`,
    lastModified: contentDates.catalog,
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
    lastModified: contentDates.solutions,
    changeFrequency: "monthly" as const,
    priority: 0.84,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(Math.max(
      new Date(post.dateModified ?? post.date).getTime(),
      contentDates.contentTrust.getTime(),
    )),
    changeFrequency: "monthly" as const,
    priority: 0.72,
    images: uniqueImages([
      post.image,
      post.h1Image,
      ...post.sections.map((section) => section.image),
    ]),
  }));

  const localizedLandingEntries: MetadataRoute.Sitemap = localizedLandings.map((page) => {
    const product = products.find((item) => item.id === page.primaryProductId);

    return {
      url: `${BASE}${page.path}`,
      lastModified: contentDates.localizedLandings,
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: product ? uniqueImages([product.image]) : undefined,
    };
  });

  return [...staticEntries, ...categoryEntries, ...productEntries, ...projectEntries, ...solutionEntries, ...blogEntries, ...localizedLandingEntries];
}
