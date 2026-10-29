import { productCategories, products } from "@/lib/data";
import { productLinePages } from "@/lib/product-line-data";
import { productPath, siteUrl } from "@/lib/seo";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = siteUrl;

const productModifiedDates: Record<string, string> = {
  "/products/carpet-tiles/pp-commercial-carpet-tiles-cloud-geometric": "2026-10-29",
  "/products/office-carpet-tiles": "2026-10-23",
  "/products/hospitality-carpet": "2026-10-23",
  "/products/custom-axminster-carpet": "2026-10-23",
  "/products/printed-carpet": "2026-10-23",
  "/products/wool-carpet": "2026-10-23",
  "/products/carpet-tiles/education-school-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/healthcare-hospital-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/pp-bitumen-backed-office-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/commercial-nylon-tiles": "2026-10-23",
  "/products/carpet-tiles/gradient-accent-office-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/linear-accent-commercial-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/pp-pvc-backed-office-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/gray-line-nylon-office-hotel-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/heathered-gray-modular-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/balance-polypropylene-carpet-tiles": "2026-10-23",
  "/products/carpet-tiles/luxury-hotel-carpet-tile-50x50cm": "2026-10-23",
  "/products/wall-to-wall/cinema-theater-carpet": "2026-10-09",
  "/products/carpet-tiles": "2026-10-29",
  "/products/wall-to-wall": "2026-09-08",
  "/products/carpet-tiles/nylon-office-carpet-tile": "2026-10-23",
};

export function GET() {
  const entries = [
    ...productCategories.map((category) => {
      const url = `/products/${category.slug}`;
      return { url: `${BASE}${url}`, lastModified: productModifiedDates[url] ?? "2026-08-06", changeFrequency: "monthly" as const, priority: 0.9 };
    }),
    ...productLinePages.map((page) => ({ url: `${BASE}/products/${page.slug}`, lastModified: productModifiedDates[`/products/${page.slug}`] ?? "2026-08-06", changeFrequency: "monthly" as const, priority: 0.84 })),
    ...products.map((product) => {
      const url = productPath(product.id);
      return { url: `${BASE}${url}`, lastModified: productModifiedDates[url] ?? "2026-08-06", changeFrequency: "monthly" as const, priority: product.category === "carpet-tiles" ? 0.9 : 0.85 };
    }),
  ];
  return sitemapResponse(entries);
}
