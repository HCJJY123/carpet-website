# Hotel document evidence and procurement content — 2026-10-01

Site: https://www.vcarpets.com
Brand: VCARPETS
Entity: Tianjin Vcarpets Global Commercial Carpet Co., Ltd.
Branch: fix/hotel-document-evidence-20261001
Baseline / rollback: a2d04755391fb33e8b71afe2b305ad432a9c3618
Status: Content implemented; final local visual, CTA and HTTP acceptance passed after a mobile footer-clearance correction. PR #59 exists; refresh CI / Preview for the corrected candidate before requesting separate owner production authorization. Not deployed to production.

## Scope decision and data boundary

The owner authorized continuing the recommended evidence review and hotel procurement improvement. Reuse the existing document checklist instead of creating /blog/hotel-carpet-specification-guide or another hotel specification URL. Change generic certification signals, not confirmed company identity, individual product specifications, prices, quantities, lead times or legal terms. Keep forms, contact details, tracking and delivery systems unchanged. Production merge requires owner confirmation for this new release.

No GSC, GA4, inquiry-quality or search-volume dataset was supplied or accessed in this round. Web search returned no usable SERP evidence; direct reads of primary industry sources and actual site content support the decision. No ranking, popularity, traffic forecast or AI recommendation outcome is claimed.

## Content map and candidate ranking

| Existing destination | Type / product | Buyer and intent | Current gap / action |
|---|---|---|---|
| /hotel-carpet | Commercial hospitality landing / broadloom and hotel options | Hotel developers and contractors selecting by zone | Existing entry retained; shared related-guide label clarified |
| /products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet | Corridor product | Hospitality contractors comparing pattern and installation | Add document-review guide link through existing procurement component; do not change technical specifications |
| /products/wall-to-wall/3d-printed-hotel-carpet | Printed broadloom product | Buyers preparing custom artwork and samples | Existing document-guide relationship retained |
| /blog/hotel-carpet-procurement-documents-checklist | Buying guide / hotel carpet submittal | Procurement and specification teams before sample approval | Add zone matrix, evidence review matrix, direct FAQ answers and references; retain primary intent and URL |
| /certifications | Controlled-document request page | Buyers verifying report applicability | Explain method versus certificate and missing-evidence handling; no public certificate register invented |
| /technical-documents | Public guides / controlled-document request hub | Tender and project procurement | Link to the upgraded guide and certificate review; clarify document matching |
| / and legacy /about-us/about source | Existing shared document badges | Supplier evaluation | Replace implicit whole-range certification signals with document-review topics; preserve the alias's 308 redirect to /about-us and noindex source |
| /about-us | Company profile | Supplier evaluation | Replace blanket ASTM/CRI/CE certified sentence only; preserve other company facts for a separate evidence review |

Scores: relevance / B2B intent / evidence strength / current gap / available facts / RFQ value, each 0–3. These are prioritization judgments, not forecasts.

| Opportunity | Action | Scores | Total | Decision |
|---|---|---|---:|---|
| Generic certification badge and fallback cleanup | C: clarify existing commercial content | 3/3/3/3/3/3 | 18 | Selected; repository checklist explicitly requires confirmation and accessible pages contain blanket statements |
| Hotel submittal evidence and zone decisions | B: expand existing buying guide | 3/3/2/2/3/3 | 16 | Selected content unit; connects documents and samples to existing hotel RFQ |
| Publish another hotel specification guide URL | A versus B | 3/3/1/0/2/2 | 11 | Do not add; existing checklist and corridor resources already own related intent |
| Publish construction-specific performance numbers | E: await records | 3/3/1/3/0/3 | 13 | Defer; existing product declarations do not establish report applicability |
| Measure qualified inquiry growth | E: await authorized data | 3/3/0/2/0/3 | 11 | Defer; no analytics or lead-quality data available |

## Evidence sources

All sources below were directly fetched with HTTP 200 on 2026-10-01 (Asia/Shanghai). Public excerpts, not purchased standards, were reviewed. Local snapshots and pre-edit public HTML are under /tmp/vcarpets-hotel-evidence-20261001/.

| Source URL / project record | Finding | Boundary |
|---|---|---|
| https://store.astm.org/e0648-23.html | Public scope describes a test of floor-covering systems and representative specimen mounting | Refer to the method; do not label the supplier certified or choose the project-required edition from this link |
| https://carpet-rug.org/testing/green-label-plus/ | Separate carpet, adhesive and cushion emissions programs are described | No VCARPETS product listing was established; do not claim product certification |
| https://carpet-rug.org/resources/installation-standards/ | CRI 104 provides commercial installation guidance | General installation reference, not project approval or a selected system's installation limits |
| outreach-assets/06-certificates/certificate-submission-checklist.md | Explicitly requires confirming certificates, test reports, product match, validity and public-sharing permission | Internal process evidence, not the certificates themselves |
| Existing product records in src/lib/data.ts and data/products-master.csv | Identify hotel broadloom, printed carpet and modular product destinations | Catalog facts do not verify fire, acoustic, traffic, static or program claims |

## Claim review ledger

| Claim / source | Evidence status in this review | Action |
|---|---|---|
| Footer: ASTM E648 Certified | No construction-matched report found in accessible repository documents; a method name is not a supplier-wide certificate | Replace with Project Document Review; no navigation or contact change |
| Shared homepage / company-profile badges: ASTM E648 and CRI Green Label Plus | Referenced names without documented product applicability | Replace badge names with Fire Document Review / VOC Document Review |
| About: ASTM E648, CRI Green Label and CE certified | Blanket certification sentence unsupported by the accessible records | Replace this sentence with construction-specific evidence review, not another certification claim |
| ProductConversion default: ASTM E648 Available | Supplies a positive fire-document assertion when product information is absent | Use Confirm Exact Construction; leave actual product fields unchanged |
| Individual product Class I, Class 33, Bfl-s1, sound-insulation dB and antistatic declarations | Existing declarations observed; original reports, specimen configuration and issuer references not found in accessible records | Await owner-supplied records. Neither verify nor delete numerical catalog specifications in this round |
| About factory area, staff count and export-market numbers; global establishment year | Existing company statements outside this construction-evidence unit | Separate source-evidence review required; not revalidated or modified here |

Unknown evidence is not a finding that a product failed testing. Do not publish the internal pending-evidence ledger as product performance content.

## Delivered content and implementation

Primary keyword: hotel carpet procurement documents.
Related intent: hotel carpet specification checklist, hotel carpet technical submittal, hotel carpet RFQ checklist.
Audience: English-language hotel developers, hospitality contractors, procurement companies and specification buyers; destination requirements confirmed by project, not by a fabricated country capability.

The full publishable article remains in src/lib/blog-posts/hotel-carpet-procurement-documents-checklist.ts. It now includes a hotel-zone decision table, exact-construction evidence acceptance/hold matrix, method-versus-certification explanation, missing-evidence workflow, FAQ and dated source boundary. Preserve the original publication date; set dateModified to 2026-10-01. Remove the visitor-facing AI-Friendly FAQ label.

Guide → hotel/corridor/printed products → hypothetical hotel reference → certificate review / technical documents → existing sample and /contact#quote-form paths. Corridor product → guide is the new reverse link; hotel and printed products already linked to it. Certificate and technical-document hubs now link directly to the upgraded guide.

Images: reuse existing images and explicitly illustrative captions. No Accio generation, no deployment of the 31 deferred assets, no new product photograph, lab report or client project claim. Retain responsive delivery and existing components.

Metadata: retain indexable URLs, self-canonical and existing Article/Breadcrumb generation. dateModified flows through the existing article schema and sitemap. Only update lastModified for the three substantively changed indexable static pages through the existing metadata dictionary, not all pages that share a footer. Keep the /about-us/about redirect and legacy noindex intact; do not count it as a new page. Add runtime markers to the existing guard without relaxing any checks.

## Preserving prior work

The three local PR #58 post-production documentation edits were backed up as files plus a binary diff under /tmp/vcarpets-hotel-evidence-20261001/previous-release-records/. The completed release ledger remains intact and its production verification will be included in this branch's narrowly staged documentation. Its old change-request copy is preserved in the backup; the active change request names this round only.

## Earlier verification record (before acceptance follow-up)

Pre-edit backups: nine indexable public URLs returned HTTP 200 and were saved before edits. /about-us/about returned the expected 308 redirect to /about-us rather than HTTP 200, and its response headers were saved. These checks are production baselines, not validation of the new content.

Passed: production build (webpack) and TypeScript; lint with zero errors and one pre-existing ProductImage.tsx warning; source SEO/link/asset checks; ops scope guard and local runtime ops:verify. Scoped local HTTP QA checked 11 pages, 103 linked destinations and 78 image URLs with zero failures. Root sitemap remains 261 entries; blog sitemap has 59 entries and pages sitemap has 35. Self-canonical, title, H1, descriptions, OG title, JSON-LD parsing/structural sanity, revised copy, reverse links, quote anchor and source references passed. /about-us/about retains 308 to /about-us and is absent from root sitemap. Report: /tmp/vcarpets-hotel-evidence-20261001/local-qa.json. The design detector reported no mechanical findings; this is not visual QA.

Blocked: the attempted in-app browser navigation to the local guide was not executed because the automatic permission reviewer could not complete its review (HTTP 403 / provider credit). No browser surface, raw CDP, screenshot workaround or alternative browser was used to bypass the block. Temporary viewport and test tab were cleaned up. Actual 390px/1440px visual checks and CTA click remain unverified for this release. Existing server-rendered form/anchor responses passed; no inquiry was submitted. Do not merge while the required visual check is outstanding.

Final candidate: the production build after the footer's wrapping adjustment passed. A fresh server on port 3041 served that build; repeated scoped HTTP QA passed for 11 pages, 103 linked destinations and 78 image URLs with zero failures, unchanged sitemap counts and the retained About alias redirect. Runtime ops:verify passed. Final report: /tmp/vcarpets-hotel-evidence-20261001/final-local-qa.json; build log: /tmp/vcarpets-hotel-evidence-20261001/release-build.log.

Pending: PR checks and public Preview HTTP verification; browser visual/CTA checks when the approval service is available or the owner performs them. No new production deployment or new indexing result is claimed.

Next dependencies: owner records for the exact construction-specific performance claims; approved access to GSC and qualified inquiry data if growth measurement is requested. Keep the remaining specialty and generated-image expansion deferred rather than publishing unsupported pages.

## Final local visual and CTA acceptance — 2026-10-01

The owner requested completing acceptance before seeking separate production authorization. The existing in-app browser now opened the local candidate successfully; no alternative browser, CDP or standalone browser automation was used. Browser navigation to both the recorded immutable public Preview and the PR's branch Preview returned ERR_CONNECTION_RESET. This local access limitation does not establish a production or Preview outage. GitHub's public Preview HTTP guard previously passed for 0f196a3; refresh it for the corrected head. Do not call the local visual inspection a public Preview browser check.

Observed and fixed: at the bottom of the 390px page the existing floating controls overlapped the revised Project Document Review footer badge. The Footer container now reserves mobile bottom clearance (pb-28); desktop padding and all control behavior remain unchanged. The after screenshot shows the badge above the controls. No contact, form, tracking, image or URL code was modified.

Final application candidate was served from a fresh local production server on port 3042 after a successful webpack build. Inspected 11 scoped pages at 390px and 1440px, 22 checks: homepage, About, certificate review, technical documents, hotel landing, hotel document guide, corridor product, printed hotel product, nylon office tile, Contact and sample request. Screenshot review and DOM measurements found no document-level horizontal overflow or broken images; all 262 image elements across these repeated viewports completed loading after progressive scrolling. Each checked page has one H1. Scope is not a full-site accessibility or performance audit.

The guide's five mobile tables use internally scrolling containers; an actual horizontal gesture changed the first table's scrollLeft from 0 to 332 without widening the document. Desktop matrix, mobile table, image captions, responsive page tops and footer screenshots were inspected. Twelve actual navigation checks (six paths at each viewport) passed: guide to hotel quote, guide to samples, and certificate / technical-document / corridor-product / hotel-landing reverse links to the guide. One mobile wrapped inline link required clicking its visible text run after inspecting the screenshot: semantic automation had clicked the gap between the two runs. The link works; no workaround code was added.

Quote checks waited for the existing deferred hash-scroll and smooth scrolling to settle. Mobile form top: 13px, matching the existing header-height-minus-52px behavior; all four required input boxes were visible below the header. Desktop quote section top: 81px, matching the header height. The product field retained Hotel Carpet Procurement Documents. Sample form was present. No personal data entered, no real inquiry submitted, no lead-delivery or analytics-event validation claimed.

Final local HTTP regression: 11 pages, 103 linked destinations and 78 image URLs, zero failures. Root sitemap 261; blog 59; pages 35; legacy About alias remains 308. Metadata, canonical, robots meta, H1, JSON-LD parsing/structural checks and runtime scope guard passed. SEO/link/asset source audits passed; lint has zero errors and the same one pre-existing ProductImage warning. Reports: /tmp/vcarpets-hotel-evidence-20261001/visual-acceptance/acceptance-report.json and /tmp/vcarpets-hotel-evidence-20261001/acceptance-http-qa.json. Screenshots are local QA artifacts, not website assets. Build log: /tmp/vcarpets-hotel-evidence-20261001/acceptance-build.log.

Pending: corrected-head GitHub checks, refreshed public Preview HTTP verification, then a specific owner authorization to merge PR #59 and publish. Public Preview browser visual access and actual inquiry delivery remain unverified; preserve those limitations in the approval request. No new production release or indexing result is claimed.
