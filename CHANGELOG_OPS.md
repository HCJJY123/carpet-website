# Site Operations Changelog

This file is append-only. Do not delete or rewrite historical entries.

## 2026-08-14 `content/reddit-hotel-office-topics-20260814`

**Type:** Blog / SEO-AEO-GEO / Content

**Scope:** Published two Reddit-informed procurement Blog guides for hotel corridor carpet stain hiding and office carpet tile renovation-cycle buying decisions.

**Changed URLs:**

- Added `/blog/hotel-corridor-carpet-stain-hiding-procurement-guide`
- Added `/blog/office-carpet-tiles-renovation-cycle-procurement-guide`
- Updated `/blog` through the shared Blog registry

**What changed:** Added two BlogPost records with answer-first introductions, procurement comparison tables, risk checklists, buyer FAQ sections, related product links, category links, and quote-form entry points. ProductImage now renders explicitly unoptimized external image URLs through a plain image element while local optimized assets are pending.

**Why:** Strengthen the hotel corridor carpet and office carpet tile topic clusters with high-intent procurement content that supports Google search, AEO/GEO answer extraction, and AI-tool recommendation relevance.

**URL mapping:** No existing URL is removed, renamed, or redirected. New Blog URLs are additive only.

**Rollback point:** Revert this change set if either Blog topic or externally hosted image handling needs to be withdrawn.

**Verification:** Run `npm run ops:check`, `npm run lint`, and `npm run build`; then verify both new Blog URLs and `/blog` return HTTP 200 in Preview and Production.

## 2026-08-11 `conversion/cookie-consent-analytics-20260811`

**Type:** Conversion / Consent UX / Analytics

**Scope:** Improved the site-wide cookie consent banner to make analytics opt-in easier to understand while keeping the Necessary only choice.

**Changed URLs:**

- Global site chrome only

**What changed:** Reworded the cookie notice to explain that analytics help measure pages that lead to quote requests, promoted the Accept analytics button, and kept the privacy policy link visible.

**Why:** Increase analytics consent rate so GA4, Microsoft UET, Clarity and related lead tracking can observe more real sessions without removing the user’s control over consent.

**URL mapping:** No URL changes.

**Rollback point:** Revert this commit if the banner becomes too assertive or if consent analytics need to return to the previous copy.

**Verification:** Run `npm run ops:check`, `npm run lint`, and `npm run build`, then confirm the cookie banner still hides after either choice and that analytics remain disabled until Accept analytics is chosen.

## 2026-08-10 `seo/category-guide-internal-links`

**Type:** SEO / Internal linking

**Scope:** Added contextual procurement-guide links from the two primary commercial carpet category pages to the two Blog articles merged in PR #11.

**Changed URLs:**

- Updated `/products/carpet-tiles`
- Updated `/products/wall-to-wall`

**What changed:** The office carpet tile category now links to the rolling-chair fit-out guide, and the wall-to-wall category now links to the hotel renovation decision guide. Existing product, canonical, form and layout behavior is unchanged.

**Why:** Give the new procurement guides a clear category-level discovery path and reinforce the corresponding office carpet tile and hotel broadloom topic clusters without creating duplicate URLs.

**URL mapping:** No existing URL is removed, renamed or redirected.

**Rollback point:** Revert this feature commit if the category source links need to be withdrawn.

**Verification:** Run `npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run lint`, and `npm run build`; then verify both category pages and both Blog URLs return HTTP 200 in Preview and Production.

## 2026-08-07 `sync/singapore-casino-carpet-production`

**Type:** Product page / Country market page / SEO-AEO-GEO / Media optimization / Documentation

**Scope:** Sync already-deployed production work for the Singapore casino carpet product into GitHub history.

**Changed URLs:**

- Added `/products/wall-to-wall/singapore-casino-carpet`
- Added `/sg/singapore-casino-carpet-supplier`
- Updated `/products/wall-to-wall` to include the Singapore casino carpet entry and generalized product-count language
- Updated `/solutions/casino-carpet-supplier` related product links

**What changed:** Added the Singapore casino carpet product record, product detail route, optimized responsive AVIF/WebP image set, country-market entry, casino solution internal link, and Phase 0 repository/website audit report.

**Why:** The production site was already deployed with this work. This change set brings the Git repository back in line with the live site so future GitHub/Vercel deployments do not drop the new product page or market page.

**URL mapping:** No existing URL is removed or redirected. New URLs are additive only.

**Rollback point:** Previous production deployment can be restored from Vercel if the new product or market page causes a live issue. Git rollback can revert this commit/PR only.

**Verification:** `npm run build` passed before production deployment. Production checks returned HTTP 200 for `/`, `/products/wall-to-wall`, `/products/wall-to-wall/singapore-casino-carpet`, `/sg/singapore-casino-carpet-supplier`, `/sitemap.xml`, `/sitemap-markets.xml`, `/sitemaps/products.xml`, and `/contact`. Sitemaps contain both new URLs.

## 2026-08-02 `chore/site-ops-guardrails`

**Type:** Governance / CI / SEO safety

**Scope:** Repository operations only; no public page content or URL changes

**Changed URLs:** None

**What changed:** Added site-specific operating rules, scope approval, URL baseline, keyword ownership map and automated Pull Request checks.

**Why:** Prevent mistaken instructions or broad edits from damaging builds, indexed URLs, SEO signals or inquiry paths.

**URL mapping:** None

**Rollback point:** `105c1ac`

**Verification:** Scope guard passed; negative out-of-scope test was blocked; ESLint passed; 128-page production build passed; current production baseline verification passed. Preview network failures now produce a clear blocking result instead of an unhandled exception. Vercel Preview validation remains required before merge.
