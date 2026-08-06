# Vishomecarpet Backlink Readiness Audit

Last reviewed: 2026-08-06

## Scope

This audit follows the Vishomecarpet backlink-readiness specification. The objective is to make the site easier for legitimate product platforms, architects, project partners, trade media and AI/search systems to cite. It does not recommend paid link schemes, bulk directory submissions, PBNs or unverifiable claims.

## Current Repository Snapshot

- Framework: Next.js App Router.
- Product source: `src/lib/data.ts`.
- Project/case source: `src/lib/data.ts` plus SEO route profiles in `src/lib/case-seo.ts`.
- Blog source: `src/lib/blog-data.ts` plus topic modules under `src/lib/blog-posts/`.
- Sitemap source: `src/app/sitemap.ts`, plus `/sitemap-markets.xml` and `/sitemap-ru.xml`.
- Global organization/schema source: `src/components/JsonLd.tsx`.
- Product schema helpers: `src/lib/seo.ts`.
- Lead and conversion tracking: `src/components/MarketingTracking.tsx`, `src/lib/tracking.ts`, `src/app/api/lead/route.ts`.
- Static app page files detected: 68.
- Products in master data: 21.
- Case studies in master data: 14.
- Published PDF downloads: 5.

## Existing Product Categories

- Commercial Carpet Tiles: /products/carpet-tiles
- Wall-to-Wall Carpets: /products/wall-to-wall
- Public Area Carpets: /products/public-area

## Product Coverage

- Commercial Carpet Tiles: 9 products
- Wall-to-Wall Carpets: 7 products
- Public Area Carpets: 5 products

Current strengths:

- Product pages already use structured product data, MOQ tiers, lead-time fields, image galleries and quote CTAs.
- Product categories are already represented in sitemap and in navigation.
- Key product groups map well to backlink targets: office carpet tiles, hospitality broadloom, public-area carpet, wool lobby rugs and gold mining carpet mats.

Main gaps before outreach:

- Only 5 PDFs are currently published, and they are direct PDF files rather than HTML download landing pages.
- Some products still need platform-ready packs with standardized 80-word and 200-word descriptions, technical CSV, image set and document links.
- External submission platforms may request exact certifications, factory figures, annual capacity, test reports and BIM/CAD files; these must be confirmed before use.

## Case / Project Coverage

- Total case studies in source data: 14.
- Case SEO profiles detected: 14.
- Recommended backlink target: each project partner link should point to the exact case page, not the homepage.
- Use anonymous reference names unless the client, hotel, designer, installer or distributor has approved public naming.

## Technical SEO and Schema Readiness

Already present:

- Organization / LocalBusiness / WebSite schema in `JsonLd`.
- Product schema helper in `src/lib/seo.ts`.
- BreadcrumbList support for product pages.
- Dynamic sitemap including products, projects, solutions, blogs, localized pages and country market pages.
- Privacy policy and contact page exist for ad compliance.

Needs follow-up:

- Split sitemap files for products, projects, resources, blog and static pages if growth continues.
- Add resource/download landing pages into sitemap after they are created.
- Add Dataset schema only for genuine downloadable structured specification files.
- Audit Product Schema price/availability fields before any product feed submission.

## Proposed Route Changes

Create or strengthen these routes in this order:

1. `/architects-designers` - specification support page for architects and interior designers.
2. `/resources/technical-library` - filterable technical library index using verified PDFs first.
3. `/media/press-kit` - company facts, product categories, media-safe descriptions and contact details.
4. `/resources/downloads/[document-slug]` - HTML landing page for each PDF, with version date, file size, product links and download CTA.
5. `/resources/bim-cad` - BIM/CAD readiness page and asset manifest, without inventing Revit files.
6. `/tools/carpet-tile-quantity-calculator` - citation-friendly estimating tool.
7. `/tools/broadloom-carpet-waste-calculator` - hospitality carpet planning tool.

## Proposed Data Models

### Product Submission Pack

Fields: product_id, product_name, category, URL, short title, SEO title, 80-word description, 200-word description, verified specification fields, MOQ tiers, lead time, image set, PDF documents, platform notes, manual confirmation status.

### Project Submission Pack

Fields: project_id, public slug, country/region, anonymous public title, application area, products used, approved images, project sheet URL, client authorization status, partner target URL, suggested anchor text, manual approval note.

### Document Record

Fields: document_id, title, document type, product category, public PDF URL, HTML landing URL, version date, file size, related product, download event name, manual verification note.

## File-by-File Implementation Plan

- `docs/backlink-readiness-audit.md`: current audit and route/data plan.
- `docs/missing-assets.md`: missing and manual-confirmation assets.
- `docs/manual-action-required.md`: items that must be done by the user or human operator.
- `docs/backlink-strategy.md`: execution priority and non-spam rules.
- `data/products-master.csv`: source-of-truth export for product submission packs.
- `data/projects-master.csv`: source-of-truth export for project partner and media references.
- `data/documents-master.csv`: downloadable document inventory and landing-page gaps.
- `data/link-prospects.csv`: prospect database schema.
- `data/outreach-log.csv`: outreach status log schema.
- `src/app/architects-designers/page.tsx`: specification support landing page.
- `src/app/resources/technical-library/page.tsx`: technical library landing page.
- `src/app/media/press-kit/page.tsx`: media and platform submission starter page.
- `src/app/sitemap.ts`: include new public pages.
