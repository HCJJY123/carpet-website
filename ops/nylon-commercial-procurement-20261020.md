# Nylon commercial carpet tile procurement update — 2026-10-20

## Scope and sources

- Existing target: `/products/carpet-tiles/nylon-office-carpet-tile`.
- Contextual inbound links: `/products/carpet-tiles` and `/blog/commercial-carpet-tile-backing-comparison-guide`, pointing to the target’s size/layout/backing section.
- Verified remote main and rollback: `d8dcfccac3e08e6b1dbd3a8a1a797f3132f32d2a` (PR 89, GA4 consent-aware stream).
- Semrush US desktop snapshot retrieved 2026-10-19: “nylon commercial carpet” position 52, volume 90, KD 3 (keyword date 2026-10-15). The category appears for “carpet tile dimensions”; the backing guide appears for “carpet tile backing types.” These are third-party estimates, not measured clicks or guaranteed ranking outcomes.
- Existing product record in `src/lib/data.ts` confirms what the listing contains: 100% nylon loop pile, nominal 50x50 cm, bitumen backing, alternatives to confirm. This update does not claim newly verified performance tests. The stated 0.25 m² per nominal square and four squares per m² are dimensional arithmetic, not order-quantity or wastage promises.

## Content changes

- Search-intent title and description; construction-first answer; size/layout/backing approval block.
- Eight visible questions generated from the same array as FAQ structured data, including sample review and B2B FOB Tianjin RFQ inputs.
- Removed unsupported plank-format, free-sample and bleach-cleaning promises from this page. Retained the existing catalog values, price tiers and Product offer data as references with explicit written-quotation and construction-document qualifications. No new ratings, certification, stock or price promises.
- Kept existing images and illustration disclosures. No generated assets or new article.
- Corrected the existing “Carpet Tiles vs Broadloom” card to the corresponding comparison article.
- Updated only the changed product/category date values in the two existing sitemap maps, and the backing-guide modification date. No canonical, indexing or generation logic changed.

## Verification at source-commit preparation

- All source files in the working snapshot matched remote Git blob hashes before editing.
- `npm run ops:check`: passed for scoped files.
- `npm run lint`: zero errors; one pre-existing `ProductImage.tsx` img-element warning. No new lint warning.
- `npm run build`: passed production compilation, TypeScript and static route generation.
- Generated target/category/backing HTML: one H1 and self-canonical each; eight target FAQ entries match the visible answers; both contextual anchors present.
- `git diff --check`: passed.
- `src/components/MarketingTracking.tsx`: byte-for-byte unchanged from remote main, including GA4 `G-WBRQWMXJ7R`. No consent, event, form, email or WhatsApp implementation changes.
- Shell browser launch is unavailable under the current sandbox. Preview browser checks and remote ops verification are release gates, not represented as passed here. Exact Preview/CI/production outcomes will be attached to the pull request before release.
- No inquiry was submitted and no analytics/account/DNS/project settings were changed.

## Release gates and rollback

Use a feature branch, draft PR, correct-project Vercel Preview, remote ops verification, desktop/mobile layout and navigation review, required CI, then merge. Verify production aliases and the exact merged Git SHA. Roll back by reverting this scoped PR, not resetting history; previous production commit is the rollback SHA above.
