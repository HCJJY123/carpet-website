import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const originArg = process.argv.find((arg) => arg.startsWith('--origin='));
const origin = originArg?.slice('--origin='.length);
const snapshotDir = process.argv.find((arg) => arg.startsWith('--snapshot-dir='))?.slice('--snapshot-dir='.length);
const category = '/products/carpet-tiles';
const directory = '/resources/ai-commercial-carpet-source-guide';
const guide = '/blog/500-sqm-office-carpet-tiles-specification-guide';
const pp = `${category}/staggered-block-pp-office-carpet-tiles`;
const canonicalOrigin = 'https://www.vcarpets.com';
async function page(path) {
  if (snapshotDir) return fs.readFile(`${snapshotDir}/${path.slice(1).replaceAll('/', '_')}.html`, 'utf8');
  if (!origin) return fs.readFile(`.next/server/app${path}.html`, 'utf8');
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `${path}: HTTP 200`);
  return response.text();
}
const schema = (html) => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
const results = [];
function check(name, fn) { try { fn(); results.push({ name, passed: true }); } catch (error) { results.push({ name, passed: false, error: error.message.slice(0, 400) }); } }
const paths = origin || snapshotDir ? [category, directory, pp, guide] : [category, directory, pp];
const pages = new Map(await Promise.all(paths.map(async (path) => [path, await page(path)])));
for (const [path, html] of pages) {
  check(`${path}: one H1 and self-canonical`, () => {
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${canonicalOrigin}${path}"`));
    assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/);
  });
  check(`${path}: JSON-LD parses`, () => assert.ok(schema(html).length > 0));
}
const categoryHtml = pages.get(category);
const collection = schema(categoryHtml).find((item) => item['@type'] === 'CollectionPage');
check('Category collection identifies the canonical page, website and legal entity', () => {
  assert.equal(collection['@id'], `${canonicalOrigin}${category}#webpage`);
  assert.equal(collection.publisher['@id'], `${canonicalOrigin}/#organization`);
  assert.equal(collection.isPartOf['@id'], `${canonicalOrigin}/#website`);
});
check('All 15 collection summaries match rendered card text and preserve every product URL', () => {
  assert.equal(collection.mainEntity.itemListElement.length, 15);
  for (const item of collection.mainEntity.itemListElement) {
    const escaped = item.description.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
    assert.ok(categoryHtml.includes(escaped), `Missing visible summary: ${item.name}`);
    assert.ok(categoryHtml.includes(`href="${new URL(item.url).pathname}"`), item.url);
  }
});
check('Nylon list description no longer asserts unsupported Class 33 or antistatic performance', () => {
  const nylon = collection.mainEntity.itemListElement.find((item) => item.url.endsWith('/nylon-office-carpet-tile'));
  assert.match(nylon.description, /Catalog references/);
  assert.doesNotMatch(nylon.description, /Class 33|antistatic performance/);
});
check('Blanket category MOQ and production windows are removed', () => {
  assert.doesNotMatch(categoryHtml, /Generally 200-500 SQM across the listed range|>200-500 SQM<|>7-25 Days</);
  assert.ok(categoryHtml.includes('Confirm in quotation'));
});
check('Evidence answer separates supplier, catalog and design-only models', () => {
  for (const phrase of ['id="product-evidence"', 'Supplier-reference construction', 'Catalog-reference construction', 'Appearance-led design reference', 'Each specification belongs only to the named model']) assert.ok(categoryHtml.includes(phrase), phrase);
  assert.ok(categoryHtml.includes('2,000 net tiles'));
  assert.ok(!categoryHtml.includes('Co., Ltd..'), 'Legal entity should have one terminal period');
  assert.ok(categoryHtml.includes(`href="${guide}"`));
});
check('Existing installation, maintenance and comparison resource paths are retained', () => {
  for (const path of ['/resources/installation-guides', '/resources/maintenance-guides', '/blog/carpet-tiles-vs-broadloom-commercial-projects-guide', '/blog/carpet-tiles-raised-access-floor-procurement-guide', '/blog/carpet-tiles-over-concrete-installation-guide', '/products/carpet-tiles/nylon-office-carpet-tile#size-layout-backing']) assert.ok(categoryHtml.includes(`href="${path}"`), path);
});
check('Existing paid inquiry path and product/carton specificity are preserved', () => {
  assert.ok(categoryHtml.includes('/contact?product=Commercial%20Carpet%20Tiles#quote-form'));
  const productHtml = pages.get(pp);
  for (const phrase of ['520 g/m²', '4.0±0.5 mm', '20 tiles / 5 m²', 'No washable or waterproof performance is established']) assert.ok(productHtml.includes(phrase), phrase);
});
check('Resource directory exposes the new buyer paths in visible links and schema', () => {
  const html = pages.get(directory);
  const resource = schema(html).find((item) => item['@type'] === 'WebPage');
  assert.equal(resource.dateModified, '2026-10-25');
  for (const path of [guide, pp, `${category}#product-evidence`]) {
    assert.ok(html.includes(`href="${path}"`), path);
    assert.ok(resource.mainEntity.itemListElement.some((item) => item.url === `${canonicalOrigin}${path}`), path);
  }
});
console.log(JSON.stringify({ origin: origin || snapshotDir || 'local production build', results }, null, 2));
if (results.some((result) => !result.passed)) process.exitCode = 1;
