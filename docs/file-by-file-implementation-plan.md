# File-by-File Implementation Plan

Last reviewed: 2026-08-06

## Sprint 1 Files Completed

| File | Purpose |
|---|---|
| `scripts/generate-backlink-readiness-assets.mjs` | Generates audit docs and master CSV files from verified repository data. |
| `docs/backlink-readiness-audit.md` | Current repository, route, schema, product, case and document readiness audit. |
| `docs/missing-assets.md` | Missing assets and manual confirmation list using `CONFIRM_*` where needed. |
| `docs/manual-action-required.md` | Human-only tasks: platform accounts, business confirmation, outreach and analytics account checks. |
| `docs/backlink-strategy.md` | Safe backlink execution priority and rejection rules. |
| `docs/proposed-url-plan.md` | URL changes already implemented and recommended next URLs. |
| `docs/backlink-data-models.md` | Product, project, document and link prospect data models. |
| `docs/file-by-file-implementation-plan.md` | This implementation plan. |
| `data/products-master.csv` | Product export generated from existing product data. |
| `data/projects-master.csv` | Case/project export generated from existing case data. |
| `data/documents-master.csv` | PDF inventory generated from current downloads. |
| `data/link-prospects.csv` | Empty prospect database template. |
| `data/outreach-log.csv` | Empty outreach tracking template. |
| `src/app/architects-designers/page.tsx` | Architect/designer specification support page using existing product category and contact data. |
| `src/app/resources/technical-library/page.tsx` | Technical library page using existing published PDF guides. |
| `src/app/media/press-kit/page.tsx` | Media-safe company facts and product category page. |
| `src/app/sitemap.ts` | Adds the new public pages to sitemap. |

## Next Implementation Batch

1. Create HTML landing pages for the 5 existing PDFs.
2. Add `technical_document_download` tracking parameters consistently to all document links.
3. Create `/resources/bim-cad` with a manifest of verified assets only.
4. Build `tools/carpet-tile-quantity-calculator` with estimate disclaimer.
5. Generate first 6 product submission packs under `outreach-assets/` using product data already verified in `data/products-master.csv`.
6. Add an automated audit script for missing galleries, missing documents, placeholder words and sitemap coverage.

## Files That Must Not Be Changed Without Confirmation

- Product specifications that imply certification, fire rating, acoustic performance, annual capacity or exact test results.
- Case pages that would name hotel brands, project owners, designers, contractors or distributors.
- Contact information beyond the verified website contact details.
- Pricing/availability fields intended for external product feeds.

