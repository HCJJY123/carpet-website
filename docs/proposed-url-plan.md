# Proposed URL Plan for Backlink Readiness

Last reviewed: 2026-08-06

## Principle

Only create URLs that can be supported by verified product, project or document data. Do not create country, project, certification or test-report pages that rely on unconfirmed facts.

## URLs Implemented in Sprint 1

| URL | Purpose | Source data | Status |
|---|---|---|---|
| `/architects-designers` | Specification support page for architects and interior designers | Existing product categories, contact path, technical-document workflow | Implemented |
| `/resources/technical-library` | Public technical document library using current PDF guides | Existing `public/downloads/*.pdf` and technical-document page logic | Implemented |
| `/media/press-kit` | Media-safe company facts and product category overview for platform reviewers | Existing `brandInfo` and product categories | Implemented |

## Recommended Next URLs

| URL | Purpose | Dependency | Priority |
|---|---|---|---|
| `/resources/downloads/commercial-carpet-tile-buying-specification-guide` | HTML landing page for the PDF instead of a bare file link | Current PDF file exists; confirm version date and file size | High |
| `/resources/downloads/hotel-broadloom-procurement-guide` | HTML landing page for hotel broadloom guide | Current PDF file exists; confirm version date and file size | High |
| `/resources/downloads/public-area-carpet-specification-guide` | HTML landing page for public-area carpet guide | Current PDF file exists; confirm version date and file size | High |
| `/resources/downloads/commercial-carpet-procurement-checklist` | HTML landing page for procurement checklist | Current PDF file exists; confirm version date and file size | Medium |
| `/resources/downloads/gold-mining-mat-rfq-checklist` | HTML landing page for gold mining mat checklist | Current PDF file exists; confirm version date and file size | Medium |
| `/resources/bim-cad` | BIM/CAD readiness page and asset manifest | Must not invent Revit/BIM files; use manifest for verified textures/pattern files only | Medium |
| `/tools/carpet-tile-quantity-calculator` | Citation-friendly estimating tool | No product claims required; needs clear estimate disclaimer | Medium |
| `/tools/broadloom-carpet-waste-calculator` | Hotel broadloom planning tool | No product claims required; needs clear estimate disclaimer | Medium |
| `/tools/hotel-carpet-project-checklist` | Project planning checklist | Can use existing procurement guide content | Medium |

## URLs Not Recommended Yet

| URL type | Reason |
|---|---|
| Named hotel-brand case URLs | Client or brand authorization is not confirmed. |
| Certification landing pages | Public certificate IDs and current documents are not confirmed. |
| Test-report pages | Exact construction and current lab reports are not confirmed. |
| Large batches of similar country pages | Risk of thin or duplicated pages unless each has unique verified market content. |
| Public `/admin/outreach-dashboard` | Outreach management should remain local CSV/Markdown unless authentication is implemented. |

