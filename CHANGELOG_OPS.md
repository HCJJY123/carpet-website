# Site Operations Changelog

This file is append-only. Do not delete or rewrite historical entries.

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
