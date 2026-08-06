# Backlink Readiness Data Models

Last reviewed: 2026-08-06

## Product Model

Source file: `src/lib/data.ts`

Master export: `data/products-master.csv`

Required fields for external product submission packs:

| Field | Status |
|---|---|
| product_id | Existing |
| product_name | Existing |
| product_category | Existing |
| product_url | Derived from existing route |
| construction | Use existing technical specs where present; otherwise `CONFIRM_CONSTRUCTION` |
| fiber_material | Existing for many products; confirm before platform submission |
| size / roll width | Existing |
| backing | Existing in technical specs where present |
| MOQ sample / trial / project | Existing MOQ tiers |
| production_lead_time | Existing |
| fob_price_display | Existing for many products; final quote still required |
| availability | Existing as preorder or in-stock flag |
| hero image | Existing |
| gallery images | Existing for most mature products; some need more images |
| TDS URL | `CONFIRM_OR_CREATE_TDS_URL` until exact document exists |
| installation guide URL | `CONFIRM_OR_CREATE_INSTALLATION_GUIDE_URL` |
| maintenance guide URL | `CONFIRM_OR_CREATE_MAINTENANCE_GUIDE_URL` |
| certification/test report | `CONFIRM_CERTIFICATION_OR_TEST_REPORT` |

Do not invent fire rating, acoustic rating, wear class or test results. Use `To be confirmed for project specification` or `CONFIRM_*` when not verified.

## Case / Project Model

Source files: `src/lib/data.ts`, `src/lib/case-seo.ts`

Master export: `data/projects-master.csv`

Required fields:

| Field | Status |
|---|---|
| project_id | Existing |
| route_slug | Existing in case SEO profiles |
| public_title | Existing / SEO profile |
| project_url | Derived |
| category | Existing |
| country_or_market | Existing in many case profiles, otherwise `CONFIRM_COUNTRY_OR_MARKET` |
| application_area | Existing in case content or decision facts |
| products_used | Existing recommended product IDs or `CONFIRM_PRODUCTS_USED` |
| hero image | Existing |
| gallery images | Existing where available |
| client authorization status | Default `use_anonymous_reference_until_client_approval` |
| project area | `CONFIRM_PROJECT_AREA` unless present and approved |
| completion year | `CONFIRM_COMPLETION_YEAR` unless present and approved |

Named hotels, designers, contractors, architects, distributors or owners must remain anonymous until written approval is confirmed.

## Technical Document Model

Source path: `public/downloads/*.pdf`

Master export: `data/documents-master.csv`

Required fields:

| Field | Status |
|---|---|
| document_id | Derived from file name |
| document_title | Derived; needs editorial review for platform submission |
| document_type | Guide, checklist or PDF |
| file_url | Existing |
| html_landing_page | `CONFIRM_OR_CREATE_/resources/downloads/[slug]` |
| product_category | Derived from file name where possible |
| version_date | `CONFIRM_DOCUMENT_VERSION_DATE` |
| file_size | To be calculated when landing pages are created |
| related_product_url | `CONFIRM_RELATED_PRODUCT_URL` |
| download_event_name | `technical_document_download` |

## Link Prospect Model

Source file: `data/link-prospects.csv`

Fields follow the execution specification: prospect ID, domain, organization, platform type, country, audience, submission URL, contact info, status, priority, scores, target asset, suggested target URL, dates, response, result, live URL, anchor text and notes.

Only prospects with strong topical relevance should move beyond `Researching`.

