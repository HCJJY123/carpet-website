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
  `${BASE}/products`,
  `${BASE}/products/carpet-tiles`,
  `${BASE}/products/wall-to-wall`,
  `${BASE}/products/public-area`,
  `${BASE}/products/carpet-tiles/commercial-nylon-tiles`,
  `${BASE}/products/wall-to-wall/luxury-hotel-broadloom`,
  `${BASE}/products/public-area/public-area-heavy-duty`,
  `${BASE}/projects`,
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
  `${BASE}/about-us`,
  `${BASE}/factory`,
  `${BASE}/faq`,
  `${BASE}/contact`,
  `${BASE}/solutions`,
  `${BASE}/solutions/hotel-hospitality`,
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
