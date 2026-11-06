// Verified content dates only; evidence: ops/sitemap-lastmod-evidence-20261105.json.
// This registry changes metadata, never sitemap membership or canonical URLs.
const verifiedModifiedDates: Record<string, string> = {
  "/technical-documents": "2026-10-01",
  "/projects": "2026-10-01",
  "/blog": "2026-11-06",
  "/certifications": "2026-10-01",
  "/privacy-policy": "2026-09-30",
  "/products/public-area": "2026-10-21",
  "/products/carpet-tiles/staggered-block-pp-office-carpet-tiles": "2026-10-25",
  "/products/wall-to-wall/luxury-hotel-broadloom": "2026-10-22",
  "/products/wall-to-wall/3d-printed-hotel-carpet": "2026-10-22",
  "/products/wall-to-wall/custom-luxury-hotel-room-carpet": "2026-10-22",
  "/products/wall-to-wall/3d-printed-banquet-hall-carpet": "2026-10-22",
  "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet": "2026-10-22",
  "/products/wall-to-wall/singapore-casino-carpet": "2026-10-22",
  "/products/wall-to-wall/custom-floral-printed-hotel-carpet": "2026-10-22",
  "/products/public-area/gold-mining-carpet-mat": "2026-10-22",
  "/products/public-area/public-area-heavy-duty": "2026-10-22",
  "/products/public-area/natural-sisal-carpet": "2026-10-22",
  "/products/public-area/custom-sculpted-wool-lobby-rug": "2026-10-22",
  "/products/public-area/commercial-stair-carpet-runner": "2026-10-22",
  "/ru": "2026-10-23",
  "/ru/hotelnyy-kovrolin": "2026-09-20",
  "/ru/products/carpet-tiles/nylon-office-carpet-tile": "2026-09-20",
  "/ru/products/public-area/public-area-heavy-duty": "2026-09-20",
  "/ru/products/public-area/gold-mining-carpet-mat": "2026-09-20",
  "/markets": "2026-09-20",
  "/ph/commercial-carpet-supplier-philippines": "2026-10-23",
  "/cz/commercial-carpet-supplier-czech-republic": "2026-10-09",
  "/cz/dodavatel-komercnich-kobercu": "2026-10-09",
  "/products/wall-to-wall/cinema-theater-carpet": "2026-10-22",
  "/products/carpet-tiles": "2026-11-02",
  "/projects/multi-floor-office-carpet-tiles-tokyo": "2026-11-04",
  "/contact": "2026-11-01",
  "/projects/office-carpet-tile-renovation": "2026-10-29",
  "/products/wall-to-wall": "2026-10-23"
};

export function sitemapLastModified(pathOrUrl: string, fallback: string): string {
  const path = pathOrUrl.startsWith("https://www.vcarpets.com")
    ? pathOrUrl.slice("https://www.vcarpets.com".length) || "/"
    : pathOrUrl;
  return verifiedModifiedDates[path] ?? fallback;
}
