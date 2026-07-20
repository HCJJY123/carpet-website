/**
 * IndexNow 批量提交脚本
 * 用途：新内容发布后，通知 Bing/Yandex 立即爬取
 * 使用：node scripts/indexnow-submit.mjs
 */

const KEY = "47ce845ea2794869a16a0b4abad37110";
const HOST = "www.vishomecarpet.com";
const BASE = `https://${HOST}`;

const urls = [
  `${BASE}/`,
  `${BASE}/about-us`,
  `${BASE}/about-us/about`,
  `${BASE}/products`,
  `${BASE}/products/carpet-tiles`,
  `${BASE}/products/wall-to-wall`,
  `${BASE}/products/public-area`,
  `${BASE}/products/carpet-tiles/nylon-tiles-elite`,
  `${BASE}/products/carpet-tiles/ecocore-pe-backing-carpet-tiles`,
  `${BASE}/products/carpet-tiles/ct-premium`,
  `${BASE}/products/carpet-tiles/ct-luxury`,
  `${BASE}/products/carpet-tiles/ct-hexagonal`,
  `${BASE}/products/wall-to-wall/luxury-hotel-broadloom`,
  `${BASE}/products/wall-to-wall/3d-printed-hotel-carpet`,
  `${BASE}/products/wall-to-wall/3d-printed-luxury-banquet-carpet`,
  `${BASE}/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet`,
  `${BASE}/products/wall-to-wall/bl-premium`,
  `${BASE}/products/wall-to-wall/bl-patterned`,
  `${BASE}/products/public-area/natural-sisal-carpet`,
  `${BASE}/products/public-area/public-area-heavy-duty`,
  `${BASE}/projects`,
  `${BASE}/projects/hotel-dubai`,
  `${BASE}/projects/retail-india`,
  `${BASE}/projects/office-tokyo`,
  `${BASE}/projects/case-1`,
  `${BASE}/projects/case-2`,
  `${BASE}/projects/case-3`,
  `${BASE}/projects/case-4`,
  `${BASE}/projects/case-5`,
  `${BASE}/projects/case-6`,
  `${BASE}/projects/case-7`,
  `${BASE}/projects/case-8`,
  `${BASE}/projects/case-9`,
  `${BASE}/projects/case-10`,
  `${BASE}/blog`,
  `${BASE}/blog/commercial-space-carpet-tiles-maintenance-cost-guide`,
  `${BASE}/blog/axminster-vs-wilton-vs-tufted-hospitality-guide`,
  `${BASE}/blog/carpet-printing-technology-design-to-installation-guide`,
  `${BASE}/blog/carpet-tile-specifications-high-traffic-durability-guide`,
  `${BASE}/blog/hidden-cost-of-cheap-carpets-hospitality-roi-guide`,
  `${BASE}/blog/shipping-optimization-5000sqm-mumbai-14days`,
  `${BASE}/blog/climate-control-carpet-installation-stability-guide`,
  `${BASE}/blog/stain-resistance-technology-scotchgard-vs-alternatives`,
  `${BASE}/blog/acoustic-properties-carpet-sound-absorption-offices`,
  `${BASE}/blog/color-fastness-uv-resistance-fading-prevention`,
  `${BASE}/blog/modular-carpet-tiles-vs-broadloom-property-decision-framework`,
  `${BASE}/blog/seaming-excellence-invisible-commercial-carpet-seams-guide`,
  `${BASE}/blog/sustainability-carpet-manufacturing-eco-friendly-options`,
  `${BASE}/blog/underfloor-heating-integration-carpet-installation-guide`,
  `${BASE}/blog/custom-design-services-concept-to-installation-process`,
  `${BASE}/blog/commercial-space-carpet-tiles-maintenance-cost-guide`,
  `${BASE}/about-us`,
  `${BASE}/factory`,
  `${BASE}/faq`,
  `${BASE}/contact`,
  `${BASE}/solutions`,
  `${BASE}/solutions/hotel-hospitality`,
  `${BASE}/commercial-carpet-tiles`,
  `${BASE}/natural-sisal-carpet`,
  `${BASE}/commercial-carpet-manufacturer`,
  `${BASE}/hotel-carpet`,
  `${BASE}/carpet-tiles-50x50`,
  `${BASE}/about-us/about`,
  `${BASE}/thank-you`,
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: urls,
};

async function submit(endpoint) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  console.log(`[${endpoint}] → ${res.status} ${res.statusText}`);
}

await submit("https://api.indexnow.org/indexnow");
await submit("https://www.bing.com/indexnow");
console.log(`✅ IndexNow submitted ${urls.length} URLs`);
