# Backlink Readiness Implementation Plan

Last updated: 2026-08-06

## Stage A - Repository and Website Audit

Completed. Outputs:

- `docs/backlink-readiness-audit.md`
- `docs/missing-assets.md`
- `docs/manual-action-required.md`
- `docs/url-inventory.md`
- `docs/site-protection-log.md`

## Stage B - Data Models and Content Architecture

Completed using existing project data sources. Outputs:

- `src/lib/resource-data.ts`
- `src/lib/application-data.ts`
- `src/lib/product-line-data.ts`
- `data/products-master.csv`
- `data/projects-master.csv`
- `data/documents-master.csv`
- `data/link-prospects.csv`
- `data/outreach-log.csv`
- `docs/backlink-data-models.md`

## Stage C - Technical SEO Foundation

Implemented or strengthened:

- Added public resource, application, product-line, quality-control and certification pages with metadata and canonical URLs.
- Added split sitemap routes under `/sitemaps/`.
- Added new routes to `robots.ts` sitemap list.
- Added download landing pages with DigitalDocument schema.
- Added custom 404 page.
- Extended analytics click payloads for document and outbound-style CTA parameters.

## Stage D - Core Page Buildout

Implemented public pages:

- `/resources`
- `/applications`
- `/applications/office`
- `/applications/hotel-guestroom`
- `/applications/hotel-corridor`
- `/applications/hotel-ballroom`
- `/applications/public-space`
- `/quality-control`
- `/certifications`
- `/architects-designers`
- `/media/press-kit`

## Stage E - Product and Case Templates

Implemented product-line landing pages based on existing products:

- `/products/office-carpet-tiles`
- `/products/hospitality-carpet`
- `/products/custom-axminster-carpet`
- `/products/printed-carpet`
- `/products/wool-carpet`

Existing case pages remain unchanged. Project sheets are handled through `/resources/project-sheets` until approved project PDFs are available.

## Stage F - Technical Resource Center

Implemented:

- `/resources/technical-library`
- `/resources/specification-guides`
- `/resources/installation-guides`
- `/resources/maintenance-guides`
- `/resources/project-sheets`
- `/resources/bim-cad`
- `/resources/downloads`
- `/resources/downloads/[slug]` for 5 existing PDFs

## Stage G - Architects and Designers Area

Implemented at `/architects-designers`. File upload is not added because the current form system does not support verified upload handling.

## Stage H - Outreach Assets

Implemented under `outreach-assets/` with company profile, product notes, case notes, certificate checklist, BIM/CAD notes, media brief and email templates.

## Stage I - Link Prospect Database

Implemented `data/link-prospects.csv` with 30 prospect slots by category and `Researching` status. No fake domains, names or emails were added.

## Stage J - Analytics Tracking

Existing GA4/GTM/Google Ads infrastructure was preserved. Generic click payload now supports document type, document slug, page type, product category, product name, project country, source platform and CTA location parameters.

## Stage K - Automated QA

Implemented commands:

- `npm run audit:seo`
- `npm run audit:links`
- `npm run audit:assets`
- `npm run audit:placeholders`

## Stage L - Build and Test

Run before approval/deployment:

- `npm run lint`
- `npm run audit:seo`
- `npm run audit:links`
- `npm run audit:assets`
- `npm run audit:placeholders`
- `npm run build`

