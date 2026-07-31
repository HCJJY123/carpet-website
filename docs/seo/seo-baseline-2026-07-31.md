# Vishomecarpet SEO Baseline and Release Record - 2026-07-31

## Release

- Production domain: https://www.vishomecarpet.com
- Implementation commit: `8338107`
- Validation date: 2026-07-31 (Asia/Shanghai)
- Scope: GSC verification, Product structured data, internal links, six priority pages, technical SEO, two legacy Blogs, production validation

## GSC Baseline

The authenticated `https://www.vishomecarpet.com/` URL-prefix property reported:

- Organic search clicks: 11
- Indexed pages: 72
- Not indexed pages: 36
- HTTPS pages: 64
- Product snippets: 11 valid, 55 invalid
- Merchant listings: 1 valid, 0 invalid
- Breadcrumb items: 60 valid
- Dataset items: 28 valid

Index exclusion reasons at the start of this release:

| Reason | Count |
| --- | ---: |
| Excluded by `noindex` | 14 |
| Alternate page with correct canonical | 6 |
| Redirect page | 1 |
| Crawled, currently not indexed | 11 |
| Discovered, currently not indexed | 4 |
| Google chose a different canonical | 0 |

## Product Snippet Diagnosis and Fix

The 55 invalid Product Snippet items reported the required-field issue:

`offers`, `review`, or `aggregateRating` should be specified.

The affected examples were related-product references inside Case Article JSON-LD. Each related link had been marked as a complete `Product`, although the Case page did not and should not provide an offer or verified review for that referenced item.

Fix applied:

- Changed Case Article `mentions` entities from `Product` to `Thing`.
- Kept the visible related-product links and page content unchanged.
- Kept real product detail pages as `Product` JSON-LD.
- Did not fabricate prices, reviews, ratings, inventory, or availability.

After production deployment, a new GSC validation was started. GSC accepted the request and placed all 55 previously affected items into the pending validation set.

## Six Priority Page Improvements

Updated priority URLs:

1. `/products/carpet-tiles`
2. `/products/wall-to-wall`
3. `/products/public-area/public-area-heavy-duty`
4. `/products/public-area/gold-mining-carpet-mat`
5. `/products/public-area/custom-sculpted-wool-lobby-rug`
6. `/products/carpet-tiles/ecocore-pe-backing-carpet-tiles`

Improvements added or strengthened across these pages:

- Direct Answer-first procurement guidance
- Best-fit applications
- Explicit limitations and unsuitable applications
- Buyer verification requirements
- Sample / Trial Order / Project MOQ path
- Lead-time and quotation inputs
- Evidence and limitation notes
- Related products, categories, cases, Blogs, and quotation links
- July 31, 2026 content review references

No unsupported certification, client, guarantee, test result, or performance claim was added.

## Internal Link Results

Source-code references before this release included:

| Priority product | Referencing source files before release |
| --- | ---: |
| EcoCore PE backing carpet tiles | 6 |
| Custom sculpted wool lobby rug | 9 |
| Gold mining carpet mat | 12 |
| Public-area heavy-duty carpet | 13 |

Production rendered-link audit after deployment:

- 20 product detail pages audited across 86 indexable HTML pages.
- Minimum inbound links to any product detail page: 7 unique source pages.
- Public-area heavy-duty page: 14 unique rendered inbound source pages.
- EcoCore, gold mining carpet, and sculpted wool rug appear in the global related-product system and were linked from 87 rendered source pages each.
- No product page had fewer than five inbound links.

The two updated Blogs now add contextual links to EcoCore, commercial nylon carpet tiles, wall-to-wall hotel carpet, custom hotel-room carpet, and public-area heavy-duty carpet.

## Legacy Blog Updates

Updated:

- `/blog/commercial-space-carpet-tiles-maintenance-cost-guide`
- `/blog/hidden-cost-of-cheap-carpets-hospitality-roi-guide`

Both now use `dateModified: 2026-07-31` and include:

- Answer-first opening
- Procurement comparison tables
- Risk or lifecycle-cost framework
- Buyer checklist
- Buyer FAQs
- Product/category internal links
- Direct quotation entry

Existing images were retained.

## Technical SEO Cleanup

Resolved production issues found during the crawl:

- Removed `/commercial-carpet-tiles` and `/natural-sisal-carpet` from Sitemap because their canonical URLs point to the formal category/product URLs.
- Fixed `/products/broadloom` to `/products/wall-to-wall`.
- Replaced two internal Blog links that returned 404 with existing relevant Blog URLs.
- Added exact `lastModified` dates for the six changed priority pages and two updated Blogs.
- Fixed one existing lint-blocking variable name in the OpenAI product-feed generator.
- Removed two invalid ARIA attributes from decorative responsive-image wrappers.
- Added `scripts/audit-technical-seo.mjs` for repeatable production checks.

## Build and Production Validation

- `npm run build`: passed; 83 routes generated.
- `npm run lint`: passed with zero errors and zero warnings.
- Production priority page returned HTTP 200 with no redirect and included the new Answer-first and FAQ content.
- Production Sitemap HTML pages audited: 86.
- Unique internal HTML links checked: 88.
- Page-level HTTP/title/description/canonical/H1/noindex failures: 0.
- Internal links returning 4xx or 5xx: 0.
- Duplicate title groups: 0.
- Duplicate description groups: 0.
- Pages emitting meta keywords: 0.
- Product pages failing MOQ/canonical/Product/Breadcrumb/FAQ JSON-LD checks: 0.

## GSC URL Inspection and Actions

| URL | GSC status at inspection | Action |
| --- | --- | --- |
| `/products/public-area/public-area-heavy-duty` | Indexed; one valid Product item | Reindex requested and accepted |
| `/products/carpet-tiles/commercial-nylon-tiles` | Indexed; one valid Product item | Status verified |
| `/products/wall-to-wall/custom-luxury-hotel-room-carpet` | Indexed; one valid Product item | Status verified |
| `/products/carpet-tiles/ecocore-pe-backing-carpet-tiles` | Indexed; valid Product, Breadcrumb, and Dataset items | Reindex requested and accepted |
| `/products/public-area/gold-mining-carpet-mat` | Indexed; GSC still showed stale Product enhancement errors from an older crawl | Reindex requested and accepted |
| `/products/public-area/custom-sculpted-wool-lobby-rug` | Indexed; valid Product, Merchant, Breadcrumb, and Dataset items | Reindex requested and accepted |
| `/request-sample-box` | Discovered, currently not indexed | Indexing requested and accepted |

The GSC Sitemap report showed `/sitemap.xml` as successful, last read on 2026-07-31, with 91 discovered URLs. A duplicate submission was not necessary.

## Limitations and Follow-up

- GSC reporting is delayed. The 55 Product Snippet items will remain pending until Google recrawls enough affected Case pages and completes validation.
- The gold mining page inspection still displayed the previous crawled enhancement state. Production HTML passed the current structured-data audit and the URL was placed in the priority crawl queue.
- An indexing request is not a guarantee of inclusion or ranking.
- Product review and rating fields remain absent unless a verified first-party review dataset becomes available.
- Quote-only products do not receive fabricated offer data.

