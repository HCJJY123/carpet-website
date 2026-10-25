import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';
import { products } from '../src/lib/data.ts';
const id = 'staggered-block-pp-office-carpet-tiles';
const product = products.find(p => p.id === id);
const root = path.resolve(import.meta.dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const route = read(`src/app/products/carpet-tiles/${id}/page.tsx`);

test('one new independent product in carpet tile category', () => {
  assert.equal(products.filter(p => p.id === id).length, 1);
  assert.equal(product.category, 'carpet-tiles');
  assert.match(route, /EvidenceProductPage/);
  assert.match(read('src/lib/generated-static-sitemap-routes.ts'), new RegExp(`/products/carpet-tiles/${id}`));
});
test('all previous product records are unchanged', async () => {
  const previous = execFileSync('git', ['show', 'db1081824822fed22128811868b2e4ce05b38734:src/lib/data.ts'], {cwd:root,encoding:'utf8'});
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pp-product-baseline-'));
  const file = path.join(dir, 'data.ts'); fs.writeFileSync(file, previous);
  const baseline = await import(pathToFileURL(file).href);
  assert.deepEqual(products.filter(p => p.id !== id), baseline.products);
});
test('nominal format and PP references are qualified, technical unknowns not borrowed', () => {
  assert.match(product.spec.material, /supplier reference/);
  assert.match(product.spec.size, /confirm sample/);
  assert.match(product.technicalSpecs.backing, /PVC/);
  assert.match(product.technicalSpecs.totalThickness, /Approximately 6.0 mm/);
  assert.match(product.technicalSpecs.pileWeight, /520 g/);
  assert.equal(product.fobPrice, undefined);
  assert.equal(product.availability, undefined);
  assert.doesNotMatch(product.name, /washable|waterproof|BALANCE|Metadata/i);
});
test('exact quote-only FOB and port plus planning and blog links', () => {
  assert.match(route, /Request a project quotation/);
  assert.match(route, /tianjingang/);
  for (const link of ['/products/carpet-tiles','/blog/500-sqm-office-carpet-tiles-specification-guide','/projects/office-carpet-tile-renovation']) assert.ok(route.includes(link));
  assert.match(route, /not an installation record/);
  assert.match(route, /includeManufacturer=\{false\}/);
});
test('category and planning reference visibly link new record without replacing existing ones', () => {
  assert.ok(read('src/app/products/carpet-tiles/page.tsx').includes(`/products/carpet-tiles/${id}`));
  assert.ok(read('src/lib/project-planning-references.ts').includes(`/products/carpet-tiles/${id}`));
  assert.match(read('src/lib/project-planning-references.ts'), /not a supplied-project record/);
});
test('seven distinct web images are valid and decode', async () => {
  assert.equal(product.gallery.length, 7);
  assert.equal(new Set(product.gallery.map(i => i.src)).size, 7);
  assert.equal(product.gallery[0].src, product.image);
  for (const img of product.gallery) {
    assert.ok(img.alt.length > 20);
    const metadata = await sharp(path.join(root, 'public', img.src)).metadata();
    assert.equal(metadata.format, 'webp');
    assert.ok(metadata.width >= 1000 && metadata.height >= 650);
  }
});
test('all existing template calls retain optional defaults', () => {
  const source = read('src/components/EvidenceProductPage.tsx');
  assert.match(source, /includeManufacturer = true/);
  assert.match(source, /sourceNote \?\?/);
  assert.match(source, /\{supplement\}/);
  assert.doesNotMatch(source, /"@type": "Offer"/);
});
