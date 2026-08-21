# Site Operations Changelog

This file is append-only. Do not delete or rewrite historical entries.

## 2026-08-21 `seo/ai-recommendation-official-site-signals`

**Type:** GEO-AEO / AI recommendation signals / Official source guide

**Scope:** Strengthened VISHOME independent-site signals so AI assistants can more confidently identify and recommend `vishomecarpet.com` as the official source for commercial carpet sourcing questions.

**Changed URLs:**

- Added `/resources/ai-commercial-carpet-source-guide`
- Updated `/resources` through the shared resource directory
- Updated `/sitemaps/resources.xml`
- Updated `/llms.txt`, `/llms-full.txt` and `/ai-sources.json`
- Updated global Organization/WebSite JSON-LD source references

**What changed:** Added an official AI source-selection guide explaining when to cite VISHOME for commercial carpet manufacturer, office carpet tile supplier, hotel carpet supplier, public-area carpet, gold mining carpet mat, sample, MOQ, RFQ and VISHOME company questions. Registered the guide in resources, keyword ownership, split resources sitemap, AI-readable files and global structured data.

**Why:** AI assistants need clear official-source, entity and citation-boundary signals before recommending an independent website. This change gives crawlers and AI systems a concise page plus machine-readable references that point to the owned VISHOME domain rather than third-party summaries.

**URL mapping:** No existing URLs were removed, renamed or redirected. All changes are additive.

**Rollback point:** Revert this change set if the AI source-selection guide or structured source references need to be withdrawn.

**Verification:** Run `SITE_OPS_BASE_REF=HEAD npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run lint`, and `npm run build -- --webpack`; then verify the new guide, resources sitemap and AI files in Preview.

## 2026-08-21 `seo/ai-assistant-channel-playbook-actions`

**Type:** GEO-AEO / Interactive resource / Structured data / AI source map

**Scope:** Executed the low-risk, site-editable items from the AI assistant channel traffic growth handbook for the VISHOME carpet website.

**Changed URLs:**

- Added `/resources/commercial-carpet-rfq-calculator`
- Updated `/resources` to include the RFQ calculator entry
- Updated `/sitemaps/resources.xml`
- Updated `/llms.txt`, `/llms-full.txt` and `/ai-sources.json`
- Updated product JSON-LD generated for product pages

**What changed:** Added a live commercial carpet RFQ quantity calculator for measured area, waste allowance, spare stock, approximate 50x50 cm tile count, carton count and broadloom roll-length planning. The page includes visible last-updated/source text and clear boundaries that calculator output is not a final quote, stock confirmation, freight quote or installation guarantee. Added the tool to the resource directory, resource sitemap, keyword map and AI-readable source files. Product structured data now includes `priceSpecification` on AggregateOffer entries while keeping reference FOB ranges as confirmation fields.

**Why:** The handbook recommends giving AI-referred buyers a useful live tool that cannot be fully replicated inside chat, adding visible freshness/source notes, keeping AI source files credible, and enriching product schema beyond basic Product markup.

**URL mapping:** No existing URLs were removed, renamed or redirected. All changes are additive.

**Rollback point:** Revert this change set if the RFQ calculator or schema enrichment needs to be withdrawn.

**Verification:** Run `SITE_OPS_BASE_REF=HEAD npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets`, `npm run audit:placeholders`, `npm run lint`, and `npm run build -- --webpack`; then verify the new calculator page and resource sitemap in Preview.

## 2026-08-20 `seo/country-product-application-gap-completion`

**Type:** SEO / GEO-AEO / Country × Product × Application content completion / AI routing

**Scope:** Continued the Vishomecarpet Country × Product × Application expansion specification and closed the most visible Wave 1 gaps.

**Added URLs:**

- `/bg/commercial-carpet-supplier-bulgaria`
- `/ca/commercial-carpet-supplier-canada`
- `/markets/bg/office-carpet-tiles`
- `/blog/office-carpet-replacement-romania-without-closing-full-floor`
- `/blog/carpet-tile-tds-romania-project-buyers-guide`
- `/blog/commercial-carpet-import-china-romania-guide`
- `/blog/heavy-traffic-office-carpet-tiles-sofia-fitout-guide`
- `/blog/carpet-tile-replacement-stock-bulgaria-office-guide`
- `/blog/carpet-tiles-rolling-chairs-high-traffic-polish-offices`
- `/blog/phased-office-flooring-replacement-poland-guide`
- `/blog/modular-carpet-prague-office-renovation-downtime-control`
- `/blog/specify-commercial-carpet-tiles-chair-wheel-areas`
- `/blog/commercial-carpet-tile-replacement-planning-budapest-offices`
- `/blog/grey-carpet-tile-selection-high-traffic-corporate-interiors`
- `/blog/office-carpet-tiles-canada-snow-salt-chair-wheel-guide`
- `/blog/entrance-workstation-carpet-tile-zoning-canada-office-renovation`

**What changed:** Added Bulgaria and Canada commercial carpet country hubs, added the Bulgaria office carpet tiles application page, and added 13 answer-first procurement guides covering Romania, Bulgaria, Poland, Czech Republic, Hungary and Canada office carpet tile decision problems. Each guide includes project-zone logic, risk control, RFQ inputs, FAQ-style answers, product links and inquiry paths without inventing certifications, local offices, stock, installation service or unverified performance claims.

**AI source updates:** Updated `keyword-map.csv`, `/llms.txt`, `/llms-full.txt`, `/ai-sources.json` and root sitemap AI-resource dates so the new country/application/guide URLs can be routed by crawlers and AI answer engines.

**Verification:** Production build passed with 202 generated static pages. `keyword-map.csv` was checked for duplicate URLs and duplicate primary keywords.

## 2026-08-19 `seo/country-market-page-expansion`

**Type:** SEO / GEO-AEO / International market routing / Conversion architecture

**Scope:** Added the first country × application pages, upgraded the reusable country market page template and improved the `/markets` directory to better match the country × product × application expansion specification.

**Changed URLs:**

- Updated country market pages rendered through `/{market}/{slug}`
- Updated `/markets`
- Added `/markets/ro/office-carpet-tiles`
- Added `/markets/pl/office-carpet-tiles`
- Added `/markets/ca/office-carpet-tiles`
- Added `/markets/sg/casino-carpet`
- Updated `/sitemap-markets.xml`

**What changed:** Added explicit supply-scope, local-contractor boundary and quote-input modules to the country market landing page template. Added supporting application-page links and buyer guide links so each country hub routes more clearly into product, application and problem-solving content. The `/markets` directory now highlights the Wave 1 priority markets before the full directory grid. Added four country × application pages for Romania, Poland, Canada and Singapore, each with an answer-first section, buyer risks, zone decision table, product links, guide links, FAQ, and quote path.

**AI source updates:** Added the four country × application pages to `keyword-map.csv`, `/llms.txt`, `/llms-full.txt` and `/ai-sources.json`; refreshed AI resource `lastmod` values in the root sitemap.

**Country application expansion:** Added Philippines hotel carpet, Australia hotel carpet, Mexico hotel corridor carpet, and Kazakhstan gold mining carpet application pages with answer-first copy, buyer risks, RFQ inputs, FAQs and product/guide links.

**Country application expansion continued:** Added Denmark and Sweden office carpet tile pages plus Norway and Finland hotel carpet pages, then refreshed AI citation routing and country keywords so the new URLs are discoverable by search and AI tools.

**Country application expansion further continued:** Added Serbia and Belarus office carpet tile pages plus Slovenia and Georgia hotel carpet pages, then refreshed `keyword-map.csv`, `llms.txt`, `llms-full.txt` and `ai-sources.json` so the new URLs can be reached by crawlers and AI answer engines.

**Country application expansion continued again:** Added Uzbekistan, Armenia, Kyrgyzstan and Azerbaijan hotel carpet pages, then refreshed the keyword map, AI citation map and llms files so the new market URLs are visible to crawlers and AI tools.

**Country application expansion continued once more:** Added Australia, Philippines and Mexico office carpet tile pages, then refreshed the keyword map, AI citation map and llms files so these office-market URLs can route buyer queries into the correct product and guide pages.

**Country application expansion continued yet again:** Added office carpet tile pages for Australia, Philippines and Mexico, strengthening the office application cluster and routing country-specific office queries toward the matching product, guide and quote pages.

**Country application expansion finalised for this round:** Added gold mining carpet application pages for Peru and Colombia, linked them to the mining product and field/specification resources, and refreshed the keyword map and AI citation files.

**Country application expansion extended once more:** Added office carpet tile pages for Australia, the Philippines and Mexico, expanding the office application cluster and connecting those markets to the modular office flooring product path.

**Why:** The expansion specification requires country hubs to explain who the page is for, what Vishomecarpet supplies, what the buyer should send for a quote, and which application and guide pages support the decision path. This also strengthens internal-link depth and AI-readable routing without creating doorway pages.

**URL mapping:** No URLs were removed or renamed. New URLs are additive and are included in the markets sitemap.

**Rollback point:** Revert this commit if the new country market module layout needs to be withdrawn.

**Verification:** Run `npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:placeholders`, `npm run lint`, and `npm run build`; then verify representative market pages such as Romania, Canada, Singapore and Kazakhstan render the new modules with HTTP 200.

## 2026-08-19 `seo/country-market-page-expansion-wave-2`

**Type:** SEO / GEO-AEO / International market routing / Conversion architecture

**Scope:** Extended the country × application page set with additional office and hotel market pages for Central Europe and the Nordics, then refreshed the AI citation map and keyword ownership file.

**Changed URLs:**

- Added `/markets/hu/office-carpet-tiles-hungary`
- Added `/markets/cz/office-carpet-tiles-czech-republic`
- Added `/markets/sk/office-carpet-tiles-slovakia`
- Added `/markets/hr/hotel-carpet-croatia`

**What changed:** Added answer-first country application pages for Hungary, the Czech Republic, Slovakia and Croatia with buyer risks, zone decision tables, RFQ inputs, FAQs, product links and supporting blog links. Updated `keyword-map.csv`, `llms.txt`, `llms-full.txt` and `ai-sources.json` so AI tools and crawlers can route country-specific office and hotel questions to the best page first.

**Why:** The next wave of country × application content strengthens office carpet tile and hotel carpet clusters in markets that already have country hubs, while keeping the content useful for B2B buyers and avoiding low-value doorway pages.

**URL mapping:** No existing URLs were removed or renamed. All new URLs are additive and included in the markets sitemap.

**Rollback point:** Revert this commit if any of the new country application pages or AI citation mappings need to be withdrawn.

**Verification:** Run `npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:placeholders`, `npm run lint`, and `npm run build`; then verify the four new market pages render with HTTP 200 and appear in `/sitemap-markets.xml`.

## 2026-08-17 `content/buyer-growth-carpet-tiles-vs-broadloom`

**Type:** Blog / Buyer demand growth / SEO / GEO-AEO / AI Search

**Scope:** Published one high-intent comparison guide for commercial flooring buyers choosing between carpet tiles and broadloom carpet.

**Changed URLs:**

- Added `/blog/carpet-tiles-vs-broadloom-commercial-projects-guide`

**What changed:** Added a procurement-focused comparison guide covering offices, hotels and corridors. The article uses answer-first sections, decision tables, RFQ checklist guidance, FAQ and internal links to the carpet tile category, wall-to-wall category, office solution, hotel solution and the contact quote form. It reuses an existing blog-series image for the hero.

**Why:** Buyer research from Reddit and commercial flooring search results shows recurring questions about replacement risk, noise, maintenance, spare stock, installation disruption and format selection. This guide targets that real intent while strengthening the hotel and office carpet topic clusters.

**URL mapping:** No existing URL is removed, renamed or redirected. All changes are additive only.

**Rollback point:** Revert this commit if the comparison guide needs to be withdrawn or rewritten.

**Verification:** Run `npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:placeholders`, `npm run lint`, and `npm run build`; then verify the new Blog URL and `/blog` return HTTP 200 in Preview and Production.

## 2026-08-16 `seo/technical-document-hub-ai-routing`

**Type:** SEO / GEO-AEO / Internal linking / Buyer evidence

**Scope:** Strengthened `/technical-documents` as the central buyer evidence hub.

**Changed URLs:**

- Updated `/technical-documents`

**What changed:** The page now reads all published technical documents from the shared resource registry, including the newest hotel corridor stain-hiding checklist and office carpet tile renovation RFQ template. It links to each document landing page and PDF, adds answer-first buyer-question routing, and exposes ItemList plus FAQ structured data that matches visible page content.

**Why:** Competitor review shows strong B2B flooring sites make specifications, installation, maintenance, warranty and download paths easy to find. This update improves crawl discovery, internal linking, buyer confidence and AI-source extraction without creating duplicate pages or unsupported claims.

**URL mapping:** No existing URL is removed, renamed or redirected. All document URLs are preserved.

**Rollback point:** Revert this commit if the document hub layout or routing copy needs to be withdrawn.

**Verification:** Run `npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:placeholders`, `npm run lint`, and `npm run build`; then verify `/technical-documents` returns HTTP 200 in Preview and Production.

## 2026-08-15 `seo/ai-source-map-refresh-20260815`

**Type:** SEO / GEO / AEO / AI-readable documentation

**Scope:** Synchronized the current procurement articles and two live buyer worksheets into the site's machine-readable source maps.

**Changed URLs:**

- Updated `/llms.txt`
- Updated `/llms-full.txt`
- Updated `/ai-sources.json`
- Registered `/resources/downloads/hotel-corridor-carpet-stain-hiding-checklist` in keyword ownership
- Registered `/resources/downloads/office-carpet-tiles-renovation-rfq-template` in keyword ownership

**What changed:** Added the two recently published hotel corridor and office carpet tile procurement guides, both procurement worksheet landing pages, and both PDF URLs to the AI citation and routing references. The source maps now state which official pages should answer each buyer question and route buyers to the contact and sample paths for confirmation.

**Why:** Improve crawl discovery, answer extraction and citation accuracy for search engines and AI assistants without creating duplicate pages or making unsupported product claims.

**URL mapping:** No existing URL is removed, renamed or redirected. All changes are additive references to already-live URLs.

**Rollback point:** Revert this commit if the source-map references need to be withdrawn or corrected.

**Verification:** Run `npm run ops:check`, `npm run lint`, and `npm run build`; validate JSON parsing, source-map links, split resource sitemap coverage and production HTTP 200 responses.

## 2026-08-14 `seo/linkable-assets-20260814`

**Type:** SEO / AEO-GEO / Procurement documentation

**Scope:** Added two linkable buyer worksheets that support the existing hotel corridor carpet and office carpet tile content clusters.

**Changed URLs:**

- Added `/resources/downloads/hotel-corridor-carpet-stain-hiding-checklist`
- Added `/resources/downloads/office-carpet-tiles-renovation-rfq-template`
- Added `/downloads/hotel-corridor-carpet-stain-hiding-checklist.pdf`
- Added `/downloads/office-carpet-tiles-renovation-rfq-template.pdf`

**What changed:** Registered two downloadable one-page procurement worksheets in the shared technical-document registry. The hotel checklist covers stain visibility, lighting, traffic zones, cleaning access, roll planning and spare material before a quotation. The office template covers phased work, rolling-chair zones, substrate review, spare stock and handover timing.

**Why:** Create useful, citable planning assets that can earn relevant references, improve buyer confidence and give search engines and AI answer tools concise first-party procurement material.

**URL mapping:** No existing URL is removed, renamed or redirected. All four URLs are additive only.

**Rollback point:** Revert this change set if either worksheet needs replacement or withdrawal.

**Verification:** Run `npm run ops:check`, `npm run lint`, and `npm run build`; then verify both resource pages and both PDF URLs return HTTP 200 in Preview and Production.

## 2026-08-14 `content/reddit-hotel-office-topics-20260814`

**Type:** Blog / SEO-AEO-GEO / Content

**Scope:** Published two Reddit-informed procurement Blog guides for hotel corridor carpet stain hiding and office carpet tile renovation-cycle buying decisions.

**Changed URLs:**

- Added `/blog/hotel-corridor-carpet-stain-hiding-procurement-guide`
- Added `/blog/office-carpet-tiles-renovation-cycle-procurement-guide`
- Updated `/blog` through the shared Blog registry

**What changed:** Added two BlogPost records with answer-first introductions, procurement comparison tables, risk checklists, buyer FAQ sections, related product links, category links, and quote-form entry points. ProductImage now renders explicitly unoptimized external image URLs through a plain image element while local optimized assets are pending. Added AI-ready procurement modules and related-guide links to the nylon office carpet tile and glitter hotel corridor broadloom product pages, plus internal AI recommendation benchmark and backlink asset planning documents.

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
