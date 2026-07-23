/**
 * IndexNow 批量提交脚本
 * 用途：新内容发布后，通知 Bing/Yandex 立即爬取
 * 使用：node scripts/indexnow-submit.mjs
 */

const KEY = "47ce845ea2794869a16a0b4abad37110";
const HOST = "www.vishomecarpet.com";
const BASE = `https://${HOST}`;

async function loadSitemapUrls() {
  const response = await fetch(`${BASE}/sitemap.xml`, {
    headers: { "User-Agent": "VishomeCarpet-IndexNow/1.0" },
  });
  if (!response.ok) {
    throw new Error(`Unable to load sitemap: HTTP ${response.status}`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  const validUrls = [...new Set(urls.filter((url) => url.startsWith(`${BASE}/`)))];

  if (validUrls.length === 0) {
    throw new Error("No Vishome URLs found in sitemap.xml");
  }

  return validUrls;
}

async function submit(endpoint, urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  };
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  if (![200, 202].includes(res.status)) {
    const message = await res.text();
    throw new Error(`${endpoint} returned HTTP ${res.status}: ${message}`);
  }
  console.log(`[${endpoint}] -> ${res.status} ${res.statusText} (${urls.length} URLs)`);
  return urls.length;
}

const urls = await loadSitemapUrls();
const indexNowCount = await submit("https://api.indexnow.org/indexnow", urls);
const bingCount = await submit("https://www.bing.com/indexnow", urls);
console.log(`IndexNow and Bing accepted ${Math.min(indexNowCount, bingCount)} sitemap URLs.`);
