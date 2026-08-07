import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies, productCategories, products } from "@/lib/data";
import { localizedLandings } from "@/lib/localized-landings";
import { productPath } from "@/lib/seo";
import { solutionPages } from "@/lib/solution-data";
import { getCaseSeoProfile, projectPath } from "@/lib/case-seo";
import { ruB2BPages } from "@/lib/ru-b2b-pages";
import { countryMarketPages } from "@/lib/country-market-pages";
import { applicationPages } from "@/lib/application-data";
import { productLinePages } from "@/lib/product-line-data";
import { resourceCategories, technicalDocuments } from "@/lib/resource-data";

const BASE = "https://www.vishomecarpet.com";

type StaticRoute = {
  url: string;
  modified: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticRoutes: StaticRoute[] = [
  { url: "/", modified: "2026-07-27", priority: 1.0, changeFrequency: "weekly" },
  { url: "/products", modified: "2026-08-04", priority: 0.9, changeFrequency: "monthly" },
  { url: "/markets", modified: "2026-08-02", priority: 0.86, changeFrequency: "monthly" },
  { url: "/commercial-carpet-manufacturer", modified: "2026-07-28", priority: 0.9, changeFrequency: "monthly" },
  { url: "/commercial-carpet-tiles", modified: "2026-08-04", priority: 0.88, changeFrequency: "monthly" },
  { url: "/hotel-carpet", modified: "2026-08-04", priority: 0.8, changeFrequency: "monthly" },
  { url: "/carpet-tiles-50x50", modified: "2026-08-04", priority: 0.8, changeFrequency: "monthly" },
  { url: "/projects", modified: "2026-08-04", priority: 0.85, changeFrequency: "monthly" },
  { url: "/blog", modified: "2026-08-05", priority: 0.85, changeFrequency: "weekly" },
  { url: "/about-us", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/factory", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faq", modified: "2026-07-26", priority: 0.8, changeFrequency: "monthly" },
  { url: "/technical-documents", modified: "2026-08-02", priority: 0.76, changeFrequency: "monthly" },
  { url: "/resources", modified: "2026-08-06", priority: 0.78, changeFrequency: "monthly" },
  { url: "/resources/technical-library", modified: "2026-08-06", priority: 0.76, changeFrequency: "monthly" },
  { url: "/architects-designers", modified: "2026-08-06", priority: 0.74, changeFrequency: "monthly" },
  { url: "/media/press-kit", modified: "2026-08-06", priority: 0.5, changeFrequency: "monthly" },
  { url: "/applications", modified: "2026-08-06", priority: 0.78, changeFrequency: "monthly" },
  { url: "/quality-control", modified: "2026-08-06", priority: 0.7, changeFrequency: "monthly" },
  { url: "/certifications", modified: "2026-08-06", priority: 0.58, changeFrequency: "monthly" },
  { url: "/commercial-terms", modified: "2026-08-02", priority: 0.64, changeFrequency: "monthly" },
  { url: "/contact", modified: "2026-07-25", priority: 0.7, changeFrequency: "yearly" },
  { url: "/privacy-policy", modified: "2026-07-25", priority: 0.3, changeFrequency: "yearly" },
  { url: "/request-sample-box", modified: "2026-07-25", priority: 0.8, changeFrequency: "monthly" },
  { url: "/solutions", modified: "2026-07-27", priority: 0.75, changeFrequency: "monthly" },
  { url: "/solutions/hotel-hospitality", modified: "2026-07-23", priority: 0.75, changeFrequency: "monthly" },
  { url: "/llms.txt", modified: "2026-08-04", priority: 0.2, changeFrequency: "weekly" },
  { url: "/llms-full.txt", modified: "2026-08-04", priority: 0.2, changeFrequency: "weekly" },
  { url: "/ai-sources.json", modified: "2026-08-04", priority: 0.2, changeFrequency: "weekly" },
  { url: "/ru", modified: "2026-07-23", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ru/products/carpet-tiles/nylon-office-carpet-tile", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
  { url: "/ru/products/public-area/public-area-heavy-duty", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
  { url: "/ru/products/public-area/gold-mining-carpet-mat", modified: "2026-07-23", priority: 0.85, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDates = {
    catalog: new Date("2026-08-04T00:00:00.000Z"),
    contentTrust: new Date("2026-07-28T00:00:00.000Z"),
    localizedLandings: new Date("2026-07-24T00:00:00.000Z"),
    solutions: new Date("2026-07-26T00:00:00.000Z"),
  };
  const categoryLastModified: Record<string, Date> = {
    "carpet-tiles": new Date("2026-08-05T00:00:00.000Z"),
    "wall-to-wall": new Date("2026-08-07T00:00:00.000Z"),
    "public-area": new Date("2026-08-04T00:00:00.000Z"),
  };
  const productLastModified: Record<string, Date> = {
    "ecocore-pe-backing-carpet-tiles": new Date("2026-07-31T00:00:00.000Z"),
    "public-area-heavy-duty": new Date("2026-07-31T00:00:00.000Z"),
    "gold-mining-carpet-mat": new Date("2026-07-31T00:00:00.000Z"),
    "custom-sculpted-wool-lobby-rug": new Date("2026-07-31T00:00:00.000Z"),
    "pp-bitumen-backed-office-carpet-tiles": new Date("2026-08-05T00:00:00.000Z"),
    "singapore-casino-carpet": new Date("2026-08-07T00:00:00.000Z"),
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
    lastModified: categoryLastModified[category.slug] ?? contentDates.catalog,
    changeFrequency: "monthly",
    priority: 0.9,
    images: uniqueImages([category.image]),
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}${productPath(product.id)}`,
    lastModified: productLastModified[product.id] ?? contentDates.catalog,
    changeFrequency: "monthly",
    priority: product.category === "carpet-tiles" ? 0.9 : 0.85,
    images: uniqueImages([product.image, ...(product.gallery?.map((image) => image.src) ?? [])]),
  }));

  const productLineEntries: MetadataRoute.Sitemap = productLinePages.map((page) => ({
    url: `${BASE}/products/${page.slug}`,
    lastModified: new Date("2026-08-06T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.84,
    images: uniqueImages([page.image]),
  }));

  const projectEntries: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${BASE}${projectPath(project.id)}`,
    lastModified: new Date("2026-08-04T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.78,
    images: uniqueImages([
      getCaseSeoProfile(project.id).heroImage ?? project.image,
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

  const applicationEntries: MetadataRoute.Sitemap = applicationPages.map((page) => ({
    url: `${BASE}/applications/${page.slug}`,
    lastModified: new Date("2026-08-06T00:00:00.000Z"),
    changeFrequency: "monthly" as const,
    priority: 0.76,
    images: uniqueImages([page.image]),
  }));

  const resourceEntries: MetadataRoute.Sitemap = [
    ...resourceCategories.map((category) => ({
      url: `${BASE}${category.href}`,
      lastModified: new Date("2026-08-06T00:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: category.href === "/resources/bim-cad" ? 0.58 : 0.68,
    })),
    ...technicalDocuments.map((document) => ({
      url: `${BASE}/resources/downloads/${document.slug}`,
      lastModified: new Date(`${document.reviewDate}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.66,
    })),
  ];

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

  const ruB2BEntries: MetadataRoute.Sitemap = ruB2BPages.map((page) => {
    const product = products.find((item) => item.id === page.primaryProductId);
    return {
      url: `${BASE}/ru/${page.slug}`,
      lastModified: new Date("2026-08-01T00:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: 0.88,
      images: product ? uniqueImages([product.image]) : undefined,
    };
  });

  const countryMarketEntries: MetadataRoute.Sitemap = countryMarketPages.map((page) => {
    const product = products.find((item) => item.id === page.primaryProductId);
    return {
      url: `${BASE}${page.path}`,
      lastModified: new Date("2026-08-02T00:00:00.000Z"),
      changeFrequency: "monthly" as const,
      priority: page.kind === "gold" ? 0.86 : 0.84,
      images: product ? uniqueImages([product.image]) : undefined,
    };
  });

  return [...staticEntries, ...categoryEntries, ...productLineEntries, ...productEntries, ...projectEntries, ...solutionEntries, ...applicationEntries, ...resourceEntries, ...blogEntries, ...localizedLandingEntries, ...ruB2BEntries, ...countryMarketEntries];
}
