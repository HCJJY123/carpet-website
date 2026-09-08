import { productCategories, products } from "@/lib/data";
import { productLinePages } from "@/lib/product-line-data";
import { productPath } from "@/lib/seo";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = "https://www.vishomecarpet.com";

const productModifiedDates: Record<string, string> = {
  "/products/carpet-tiles": "2026-09-08",
  "/products/wall-to-wall": "2026-09-08",
  "/products/carpet-tiles/nylon-office-carpet-tile": "2026-09-08",
};

export function GET() {
  const entries = [
    ...productCategories.map((category) => {
      const url = `/products/${category.slug}`;
      return { url: `${BASE}${url}`, lastModified: productModifiedDates[url] ?? "2026-08-06", changeFrequency: "monthly" as const, priority: 0.9 };
    }),
    ...productLinePages.map((page) => ({ url: `${BASE}/products/${page.slug}`, lastModified: "2026-08-06", changeFrequency: "monthly" as const, priority: 0.84 })),
    ...products.map((product) => {
      const url = productPath(product.id);
      return { url: `${BASE}${url}`, lastModified: productModifiedDates[url] ?? "2026-08-06", changeFrequency: "monthly" as const, priority: product.category === "carpet-tiles" ? 0.9 : 0.85 };
    }),
  ];
  return sitemapResponse(entries);
}
