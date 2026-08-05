import { productCategories, products } from "@/lib/data";
import { productLinePages } from "@/lib/product-line-data";
import { productPath } from "@/lib/seo";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = "https://www.vishomecarpet.com";

export function GET() {
  const entries = [
    ...productCategories.map((category) => ({ url: `${BASE}/products/${category.slug}`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: 0.9 })),
    ...productLinePages.map((page) => ({ url: `${BASE}/products/${page.slug}`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: 0.84 })),
    ...products.map((product) => ({ url: `${BASE}${productPath(product.id)}`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: product.category === "carpet-tiles" ? 0.9 : 0.85 })),
  ];
  return sitemapResponse(entries);
}
