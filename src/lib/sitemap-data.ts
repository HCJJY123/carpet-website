import { applicationPages } from "@/lib/application-data";
import { blogPosts } from "@/lib/blog-data";
import { projectPath } from "@/lib/case-seo";
import { countryApplicationPages } from "@/lib/country-application-pages";
import { countryMarketPages } from "@/lib/country-market-pages";
import { caseStudies, productCategories, products } from "@/lib/data";
import { generatedStaticSitemapRoutes } from "@/lib/generated-static-sitemap-routes";
import { localizedLandings } from "@/lib/localized-landings";
import { productLinePages } from "@/lib/product-line-data";
import { resourceCategories, technicalDocuments } from "@/lib/resource-data";
import { productPath, siteUrl } from "@/lib/seo";
import { ruB2BPages } from "@/lib/ru-b2b-pages";
import { solutionPages } from "@/lib/solution-data";

type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

export type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

type SitemapEntryInput = Omit<SitemapEntry, "url"> & { path: string };

const defaultModified = "2026-08-06";
const staticRouteMetadata: Record<string, Pick<SitemapEntry, "lastModified" | "changeFrequency" | "priority">> = {
  "/": { lastModified: defaultModified, changeFrequency: "weekly", priority: 1 },
  "/products": { lastModified: defaultModified, changeFrequency: "weekly", priority: 0.95 },
  "/projects": { lastModified: defaultModified, changeFrequency: "weekly", priority: 0.82 },
  "/blog": { lastModified: defaultModified, changeFrequency: "weekly", priority: 0.82 },
  "/markets": { lastModified: defaultModified, changeFrequency: "weekly", priority: 0.82 },
  "/commercial-carpet-tiles": { lastModified: "2026-08-04", changeFrequency: "monthly", priority: 0.88 },
  "/hotel-carpet": { lastModified: "2026-08-04", changeFrequency: "monthly", priority: 0.8 },
  "/carpet-tiles-50x50": { lastModified: "2026-08-04", changeFrequency: "monthly", priority: 0.8 },
  "/solutions": { lastModified: "2026-07-27", changeFrequency: "monthly", priority: 0.75 },
  "/solutions/hotel-hospitality": { lastModified: "2026-07-23", changeFrequency: "monthly", priority: 0.75 },
  "/resources/technical-library": { lastModified: defaultModified, changeFrequency: "monthly", priority: 0.76 },
  "/request-sample-box": { lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
  "/privacy-policy": { lastModified: "2026-09-22", changeFrequency: "yearly", priority: 0.3 },
  "/commercial-carpet-manufacturer": { lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
  "/tools/broadloom-carpet-waste-calculator": { lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.72 },
  "/tools/hotel-carpet-project-checklist": { lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.72 },
};

function canonicalUrl(path: string) {
  const url = new URL(path, siteUrl);
  if (url.origin !== siteUrl || url.search || url.hash) return null;

  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  return pathname === "/" ? siteUrl : `${siteUrl}${pathname}`;
}

function addEntry(entries: Map<string, SitemapEntry>, entry: SitemapEntryInput) {
  const url = canonicalUrl(entry.path);
  if (!url) return;

  entries.set(url, { ...entry, url });
}

export function getSitemapEntries(): SitemapEntry[] {
  const entries = new Map<string, SitemapEntry>();
  const add = (entry: SitemapEntryInput) => addEntry(entries, entry);

  generatedStaticSitemapRoutes.forEach((path) => {
    add({
      path,
      ...(staticRouteMetadata[path] ?? { lastModified: defaultModified, changeFrequency: "monthly" as const, priority: 0.7 }),
    });
  });

  applicationPages.forEach((page) => add({ path: `/applications/${page.slug}`, lastModified: defaultModified, changeFrequency: "monthly", priority: 0.76 }));
  localizedLandings.forEach((page) => add({ path: page.path, lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.72 }));
  productCategories.forEach((category) => add({ path: `/products/${category.slug}`, lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.9 }));
  productLinePages.forEach((page) => add({ path: `/products/${page.slug}`, lastModified: defaultModified, changeFrequency: "monthly", priority: 0.84 }));
  products.forEach((product) => add({ path: productPath(product.id), lastModified: "2026-09-08", changeFrequency: "monthly", priority: product.category === "carpet-tiles" ? 0.9 : 0.85 }));
  caseStudies.forEach((project) => add({ path: projectPath(project.id), lastModified: defaultModified, changeFrequency: "monthly", priority: 0.78 }));
  resourceCategories.forEach((category) => add({ path: category.href, lastModified: category.lastModified ?? defaultModified, changeFrequency: "monthly", priority: 0.68 }));
  technicalDocuments.forEach((document) => add({ path: `/resources/downloads/${document.slug}`, lastModified: document.reviewDate, changeFrequency: "monthly", priority: 0.66 }));
  blogPosts.forEach((post) => add({ path: `/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: "monthly", priority: 0.72 }));
  solutionPages.forEach((page) => add({ path: `/solutions/${page.slug}`, lastModified: defaultModified, changeFrequency: "monthly", priority: 0.78 }));
  ruB2BPages.forEach((page) => add({ path: `/ru/${page.slug}`, lastModified: "2026-08-01", changeFrequency: "monthly", priority: 0.85 }));
  countryMarketPages.forEach((page) => add({ path: page.path, lastModified: page.updatedDate ?? "2026-08-19", changeFrequency: "monthly", priority: page.kind === "gold" ? 0.86 : 0.84 }));
  countryApplicationPages.forEach((page) => add({ path: page.path, lastModified: "2026-08-19", changeFrequency: "monthly", priority: page.market === "sg" ? 0.85 : 0.83 }));

  return [...entries.values()].sort((left, right) => left.url.localeCompare(right.url));
}
