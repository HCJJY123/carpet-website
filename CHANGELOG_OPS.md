Warning: truncated output (original token count: 57090)
Total output lines: 1668

# Site Operations Changelog

This file is append-only. Do not delete or rewrite historical entries.

## 2026-10-23 — Sitewide SEO basics repair (release candidate)

Owner requested execution and production release of the reviewed SEO fixes. Branch `seo/site-basics-20261024`, rollback commit `534dcd9bfc611a95e7acdd3cb950dbd5861fb568`; exact scope is in `ops/change-request.json`. Production responses for 42 affected pages and two sitemap endpoints were captured before editing in the backup manifest. One previously linked target returned 404, as expected.

- Replace four confirmed 404 links with existing, HTTP 200 destinations. Link the 19 previously zero-inbound sitemap pages through product-line cards, Russian and German contextual pages, a wholesale trade guide cluster, Resources and About; add one Resources footer entry and a Solutions-to-Applications link.
- Add visible paths and matching BreadcrumbList markup to Products, its five product lines, Resources and Solutions. Keep Organization/Product/FAQ templates and every indexed URL and canonical intact.
- Record the substantive 14 carpet-tile detail rewrites from the prior release as 2026-10-23 in both root and product sitemaps; refresh dates for changed hubs and broken-link sources in their relevant sitemap endpoints. Correct EcoCore keyword ownership from an unverified PVC-free claim to a PE-backing description. Shorten the About meta description.
- Preserve the current client-side language correction on localized routes; no root SSR layout refactor. Product rich-result Offer/review eligibility is not claimed because verified offer or review data is absent. GSC submission remains unverified because the currently connected GSC property list does not include vcarpets.com.

Local acceptance: `ops:check`, lint, production build, source SEO/link/asset audits and local `ops:verify` pass. Re-crawl: 274/274 sitemap pages HTTP 200, zero orphan pages (was 19), 282/282 distinct internal link targets HTTP 200, no metadata/H1/canonical or JSON-LD parsing gaps, 14/14 revised tile dates match between root and product sitemaps. Forms, tracking, robots, canonical generation, DNS and dependency versions were not changed.

Preview acceptance: Vercel deployment `dpl_FR93G4AdZyq4KJJmW9zNk5P1pdd2` for head `712abb956ad25425cddda697cad0859c81bd9f84` is READY; `ops:verify` passes against its public URL. Twenty scoped Preview pages return 200 with one H1/self-canonical/no noindex; root sitemap has 274 URLs, product sitemap 35, and both carry 14 matching revised tile dates. Browser navigation confirms Products → Office Carpet Tiles → project quote form with the product prefilled, without a test lead submission. Desktop product-directory screenshot shows the visible breadcrumb and product-line cards; responsive grid classes were reviewed, but this browser did not expose a mobile viewport screenshot. GitHub Site Ops Guard run `39996651566` passed. GSC Wizard refuses all calls because its subscription has ended, and the other connected GSC organization does not contain `vcarpets.com`; no GSC submission is claimed. Merge and production verification pending.

Production verification: PR #105 merged as `5397a04c00c42d07f6c99ba777af41dc8a625259`. Vercel production deployment `dpl_DND6fzshtMZ689iZxYe3WxgqaGbU` is READY and aliased to `www.vcarpets.com` and `vcarpets.com`. Live `/products` returns 200, contains the new product-line link, and identifies that deployment. All 42 indexed page responses captured in the pre-release manifest returned HTTP 200 without unexpected redirects; each had one canonical, one H1, no noindex, parsed JSON-LD and the matching deployment marker. Root sitemap returned 274 URLs and product sitemap 35, each with 14 revised tile dates. Production `ops:verify` passed. No real customer lead was submitted. The unavailable GSC property and mobile viewport screenshot remain follow-up verification items; neither is reported as completed.

## 2026-10-08 — Printed broadloom repeat and seam planning

Owner explicitly authorizes publication and requests Vcarpets brand spelling for new content. Add one original buyer guide at `/blog/printed-broadloom-pattern-repeat-seam-planning` and a next-step backlink from the existing printing technology guide. Existing Blog listing and sitemap generation include the new record; no global SEO algorithms changed. Reuse the labeled P08 application illustration, no new generated assets. No product numbers, customer cases, certification or delivery promises added. Uploaded buyer data remains private; it supplies anonymized procurement questions only. Cinema product refresh and Philippine entertainment page remain unpublished pending supply/sample evidence.

Branch `content/pattern-repeat-guide-20261008`; rollback `f23cfa3b6588ebb47209f3f647465747d4cabb48`. Production HTML for existing printing article, Blog index and Blog sitemap backed up before editing. Scope and keyword ownership recorded; checks and Preview acceptance pending. No conversion-system modifications or real inquiry submission.

## 2026-10-04 — Existing tile RFQ procurement guide (local candidate)

Scope: `/blog/commercial-carpet-tile-rfq-checklist-b2b-buyers` only, with its inherited Blog list and existing sitemap metadata. Add quantity-unit/packing and ownership tables, copyablebuyerbrief, accurate form/file-transfer guidance, links back to existing PP/bitumen products and actual descriptionmetadata. No newURL/assets, no forms/tracking or globalSEOchanges. Keep published title/H1/canonical/author and currentimages; reviewdate2026-10-04 applies only to thisguide.

Authorization: owner continuous-growth instruction permits evidence-based localimplementation and preview; no commit/push/productionpermission inferred from priorPR62. Base/rollback9b1cfdad96a280898b03de1c80e06ff7b7028583; branchcontent/tile-rfq-procurement-20261004. Evidence/priority/monitoring in existing `ops/content-growth-20260930.md`; freshsnapshot/evidence under `/Users/haochangjian/Downloads/vcarpets-rfq-growth-qa-20261004/`. Sourceimplemented; localacceptancepending. Notdeployed.

**Local acceptance completed:** Ops scope/runtime, SEO/link audits, lint (zero errors; one unchanged ProductImage warning), production build and diff check pass.58unrelated article exports unchanged; title/H1/URL/images preserved.62internal URLs and25image resources200; Blog59/root261 URL sets retained with only scopedreviewdate updates.375/390/768/1440 table layout passes, actual390/1440 RFQ productprefill and productcard navigation pass; no real inquiry or console error. State: locally verified, awaiting deployment authorization; no commit/push/PR or production changes.

**Release stage authorized 2026-10-04:** Owner explicitly requested deployment after receiving local acceptance. Authorize commit/push, PR/Preview and merge through normal required checks for this scoped candidate. Preserve the prior stage record; production success must be independently verified after ready deployment. No authorization for unrelated pages or tracking.

## 2026-10-03 — Shared image preview click-again close (local only)

Owner requests all existing zoomable images close when the enlarged image is clicked again. Shared ImageProtection capture handler now excludes its own preview; removing the inner propagation blocker lets the enlarged image close through the existing backdrop handler. X and Escape remain, prior inline body overflow is restored on close, original page scroll remains untouched. Existing detail-route eligibility and linked/button image exclusions are unchanged. No content, assets, forms, tracking, navigation or SEO changes.

Base/rollback:7c772df99a9b7966eba1d5e4b74e7975bda3564b. Branch:fix/image-preview-click-toggle-20261003. Local acceptance pending. Not committed, pushed or production deployed; prior release permission does not authorize this new deployment.

**2026-10-04 release authorization:** Owner explicitly requested commit/deployment of this image-toggle fix. Local production build and Ops passed; lint has zero errors and the sole pre-existing ProductImage.tsx:43 warning. EcoCore390/1440 browser checks verify image-click/X/Escape/backdrop close and restored scroll/overflow across four open/close cycles per width. Additional scope and Preview/production acceptance will be recorded with PR release evidence; no claim of live completion before actual deployment.

## 2026-10-03 — PP/bitumen tile product content and owner-image Preview

**Authorization:** Owner explicitly requested repository implementation and PR/Preview. Do not merge or deploy production.

**Scope:** Existing `/products/carpet-tiles/pp-bitumen-backed-office-carpet-tiles`, its product data record and automatic `/products/carpet-tiles` card. Use four owner-provided JPEGs, actual tile stack hero and three application views;12 hashed AVIF/WebP files with full-square composition, append-only responsive entries. No competing product URL, Blog or Qatar page.

**Facts and conversion:** Brand Name and page-localProduct.brand use Vcarpets. No source brands, reviews, unverified certification/antimicrobial/washable/outdoor claims or marketplace numerical promises. Existing project quotation/MOQ/lead-time/availability values and conversion logic unchanged. Product describes layout, sample approval, packing assumptions and RFQ preparation. Gallery and share references derive from one exact product record. All old assets retained.

**Rollback/evidence:** Base36a051b4460416293232e6683430b5310b87c11f; detailed record `ops/pp-bitumen-product-preview-20261003.md`; backups/tests under `/Users/haochangjian/Downloads/vcarpets-pp-bitumen-preview-evidence-20261003/`. Local and Preview acceptance pending; no production completion claim.

**Local acceptance:** Ops/runtime, SEO/link audits and webpack build passed; lint zeroerrors and onepre-existing ProductImage warning. Detail/category200,12newresource hashes matched,76internal targets200;30product sitemapURLs preserved;brandVcarpets/OG/Twitter/Productimage/6visibleFAQ checks passed. Product/category eightviewport checks375/390/768/1440 and category-to-detail, quote/productprefill and sample navigation passed; no real form submission or observedconsoleerrors. Preview pending; owner has not authorized production.

## 2026-10-01 — Hotel submittal evidence review (local / Preview candidate)

- Reuse /blog/hotel-carpet-procurement-documents-checklist instead of adding a competing hotel specification URL. Add a hotel-zone matrix, construction-matched report review matrix, direct answers, missing-evidence workflow and dated primary-source links.
- Correct generic ASTM-certified footer text, shared homepage/company-profile certification badges, the About blanket certification sentence and a positive fire-rating fallback when construction information is absent. Do not alter actual product specifications, pricing, delivery promises or company identity.
- Connect corridor product, certificate review and technical-document hub to the existing guide and existing RFQ/sample paths. Reuse existing images; no new generation or additional deferred assets released.
- Preserve canonical, robots, sitemap and Schema generation logic; existing metadata handles content-review dates. Extend runtime verification without lowering gates. No form, contact, tracking, DNS or dependency changes.
- Authoritative public method/program descriptions explain document review only; they do not establish certification of VCARPETS products. Individual performance reports and numerical claims remain pending source-evidence matching.

**Rollback point:** `a2d04755391fb33e8b71afe2b305ad432a9c3618`

**Status:** Build/TypeScript, lint (one pre-existing warning), source audits and local HTTP QA passed: 11 pages, 103 linked destinations, 78 image URLs, unchanged 261-entry root sitemap and retained About alias redirect. Browser navigation was not executed because automatic approval review failed; no bypass was attempted. Actual mobile/desktop visual and CTA-click checks, PR and public Preview gates remain pending. Not merged or deployed. Exact scope, evidence and dependencies: ops/hotel-document-evidence-20261001.md. Prior PR #58 production records are preserved below.

Final-candidate follow-up: the footer-wrap rebuild passed; a fresh port-3041 server passed the same 11-page / 103-link / 78-image HTTP QA with zero failures and ops:verify. Visual and CTA-click checks remain blocked; no new production deployment is implied.

Visual acceptance follow-up: browser navigation to the public Preview returned a connection reset; the same browser successfully opened the local candidate. A 390px bottom-of-page screenshot exposed overlap between the revised footer badge and the existing floating controls. Add mobile-only bottom clearance in Footer without changing control behavior or desktop spacing. Rebuild and final-candidate acceptance are required; this is not a production release.

Final local acceptance: mobile footer clearance is fixed; corrected production build, source audits and local ops:verify passed. Eleven scoped pages at 390px and 1440px (22 checks) have no document-level overflow or broken images; 262 image elements loaded. Table gesture and 12 actual guide/product/document/quote/sample navigation checks passed after waiting for the existing hash-scroll to settle. Hotel product context reaches the quote form; no inquiry was submitted. Local HTTP regression passed 11 pages / 103 link targets / 78 image URLs. Public Preview browser access still resets; refresh corrected-head CI and public Preview HTTP guard, then seek owner production authorization. Local visual checks are not public Preview or production checks. Evidence: ops/hotel-document-evidence-20261001.md.

## 2026-10-01 — Production verification of content cluster (PR #58)

- Merged validated head d6adbe0068d05bf56f42e06693b013054e05ccd9 through PR #58 as a2d04755391fb33e8b71afe2b305ad432a9c3618; Vercel Production deployment 6772070075 completed successfully. Verified live www.vcarpets.com separately.
- Production QA: 13 pages, 96 internal-link destinations and 100 public image files passed. Root sitemap: 261 entries. No detected changed-page 404, soft-404 signature, missing image, broken link, duplicate title/H1 or JSON-LD parsing/structural error. No accidental noindex or historical enterprise identity in the checked page set.
- Production browser checks: 13 pages at 390px and 1440px (26 checks), no horizontal page overflow, loaded illustrative images, responsive AVIF delivery and internally scrolling mobile tables. Existing RFQ/sample entry points retained; no real inquiry submitted.
- Actual production RFQ click reached the existing quote-form anchor with the project context populated. Supplemental homepage/About/Contact/Privacy/Cookie identity checks passed. No customer details entered or lead submitted; form delivery and lead quality remain untested.
- Full 2026-10-01 delivery ZIP contains matching source bytes for the 12 deployed illustrations. The remaining 31 assets stay deferred; no additional page or image release is implied by receipt of the archive.
- IndexNow production run 36789107690 succeeded; IndexNow and Bing each accepted 260 URLs with HTTP 200. Acceptance does not prove indexing, ranking or AI recommendation. Local Vercel CLI could not access the deployment's owning team; the exact production SHA is evidenced by GitHub deployment records.
- Post-production documentation only; these ledger edits are not part of the deployed application SHA. Evidence and limitations: ops/content-growth-20260930.md and /tmp/vcarpets-cluster-production-qa-20261001.json.

**Rollback point:** `e05f901b4e1ffa82b70d25cf1fe787ac3f99e743`

## 2026-09-30 — Product, application and procurement content cluster

- Retain incumbent URLs for five priority commercial product themes; add project-selection questions, sample/quote links and 12 versioned Accio illustrations across the cluster.
- Publish two explicitly hypothetical Project Planning References and one fiber comparison guide. Expand the existing backing, 50x50 specification, MOQ and RFQ guides instead of creating competing URLs.
- Add bidirectional product → planning reference → guide → existing RFQ/sample paths. Add visible Projects hub entries, consistent Article/Breadcrumb data, native-ratio responsive WebP delivery and existing sitemap integration.
- Set the new planning-reference and changed hotel/hub sitemap dates through the existing static metadata dictionary rather than inheriting the historical default date.
- Extend the existing runtime guard to verify all affected content destinations and their visible illustration/planning labels on Preview and production.
- Do not publish the remaining 31 delivered assets, customer data, invented projects or new performance/price/certification promises. Retain actual product/gallery images and annotate illustrative visuals.

**Rollback point:** `e05f901b4e1ffa82b70d25cf1fe787ac3f99e743`

**Local validation:** Ops scope/runtime guards, build, TypeScript and SEO/link/asset audits passed. Lint has zero errors and one pre-existing ProductImage.tsx warning. Scoped runtime QA passed for 13 pages, 96 internal links and 100 image files; all 13 pages were checked at 390px and 1440px with no page overflow. AVIF/WebP responsive delivery uses the existing manifest, with 44 variants of each format and unchanged global optimizer configuration. Production remains gated on PR, CI and public Preview; subsequent release evidence is recorded in the PR timeline. See `ops/content-growth-20260930.md` for exact mappings and limitations.

## 2026-09-20 `domain-migration-vcarpets-20260920`

**Type:** Public domain migration / technical SEO / redirect preservation

**Scope:** Move the canonical public origin from `www.vishomecarpet.com` to `www.vcarpets.com` while preserving existing paths, query parameters, page content, inquiry flows, email identity and WhatsApp behavior. Add application-level 308 redirects for both old hostnames once those domains are attached to the same Vercel project.

**Changed systems:** Canonical and metadata origin, Open Graph and JSON-LD absolute URLs, hreflang/source URLs, split sitemaps, robots host and sitemap entries, `llms` files, `ai-sources.json`, product-feed generators, IndexNow host, visitor-intelligence origins and production URL references.

**Preserved:** `sales@vcarpets.com`, all published paths, existing page content structure and legacy PDF files. Legacy PDF links remain safe because the old hostnames redirect path-for-path after DNS/Vercel configuration.

**Manual release steps:** Attach `www.vcarpets.com`, `vcarpets.com`, `www.vishomecarpet.com` and `vishomecarpet.com` to the Vercel project; set the new `www` host as primary; configure DNS/HTTPS; verify old-host redirects; update Search Console and Bing properties; perform Change of Address only after redirects are live.

**Rollback point:** `391e9f9`

## 2026-09-22 — Microsoft privacy and tracking compliance hardening

- Split optional consent into independently controlled Analytics and Advertising categories with Accept All, Reject Non-Essential, Cookie Preferences and footer reopening.
- Block Microsoft UET, Google Ads, GA4, Clarity, optional GTM and optional Yandex until the applicable consent category is granted; preserve denied signaling and reload after consent withdrawal so previously loaded optional scripts stop running.
- Remove raw inquiry PII, full URLs, query strings and contact destinations from browser analytics, advertising, UET, Clarity, dataLayer and visitor-beacon payloads while preserving server-side lead delivery.
- Rebuild `/privacy-policy`, add `/cookie-policy`, add prominent global footer legal links and retain adjacent form privacy disclosures.
- Add a server-side visitor-payload allowlist and document remaining provider-account, retention, mailbox and public Preview verification as UNVERIFIED until separately evidenced.

**Rollback point:** `0bebf0b221225a802d84c5bb7c63d5df980cc6c7`

**Release gate:** Preview and Pull Request only. Do not merge or deploy production until the compliance QA matrix has no unresolved P0 failure and the owner approves release.

## 2026-09-21 — Entry-page responsive hero delivery

- Added content-hashed responsive AVIF delivery for the Contact hero, commercial carpet tile landing hero and second homepage carousel slide while retaining a WebP fallback and each source file.
- Preserved the existing layouts, crops, text, URLs, forms, tracking and CTA behavior; only image delivery and next-slide preparation change.
- Added 480px, 960px and desktop AVIF variants. Desktop AVIF sizes are 141,688 bytes for Contact, 219,825 bytes for commercial carpet tiles and 111,769 bytes for the hotel-corridor carousel slide, representing 66.6%, 48.7% and 31.0% reductions from their source WebP files.
- Contact opts into the responsive PageHero renderer, the commercial landing page uses the existing responsive product-image path, and the homepage prepares the next slide during browser idle time at low priority before the four-second rotation.
- Preserved the first homepage slide as the only high-priority carousel image. Fingerprinted derivatives continue to use the existing one-year immutable cache rule.

**Affected URLs:** `/`, `/contact`, `/commercial-carpet-tiles`

**Rollback point:** `fc1e90f7839a3651e8ff04267ed5bf6829269aa0`

**Verification:** Source-versus-optimized visual comparison passed. `npm run ops:check`, full lint, SEO/link/asset audits and `npm run build -- --webpack` passed; lint retains one pre-existing `ProductImage.tsx` `<img>` warning and no errors. `npm run ops:verify -- --origin=http://127.0.0.1:3022` passed. All three changed pages and all 12 generated assets returned local HTTP 200, the asset byte counts matched disk, and fingerprinted assets returned the one-year immutable cache header. Browser validation at 390px and 1440px confirmed responsive AVIF selection, eager/high priority for both page heroes, low-priority idle preparation of the next carousel slide, successful second-slide switching and no horizontal overflow.

## 2026-09-21 — Sample approval illustration refresh (Preview only)

- Scope: `/blog/commercial-carpet-sample-approval-checklist` and its shared cover thumbnails; no new route or changed canonical, inquiry flow, tracking, homepage or Contact image.
- Replaced four existing illustration references using supplied Accio PNGs; retained source PNGs and old delivery files. Actual originals are 1536×1024 (3:2), not the supplier's declared 2048×1152. Full compositions are contained inside the existing 16:9 article containers; optional per-block fit defaults to the previous cover behavior for all other posts.
- Added matching English alt text and explicit AI-generated illustration captions. No images are presented as actual products, factory/client evidence, measurements or certifications.
- Generated content-versioned 640w/1536w AVIF and 1536w WebP fallback assets using a scoped, append-only manifest generator. Preserved the September 10 publication date; updated the modification date to September 21, which the existing sitemap and Article schema consume.
- Delivery report: `docs/performance/sample-approval-images-20260921.json`. Desktop AVIF files are 136–294 KB; texture-heavy comparison/backing images exceed the nominal 180 KB budget to retain yarn detail. Mobile AVIF files are 30–63 KB. WebP fallback is a single full-width asset, not a second responsive size set.
- Base and rollback reference: `ce0a3df47da7d55b8210f7c61cc01841b3718dd3`; live HTML snapshot retained outside the repository before editing.
- Validation and release status will be appended after checks. Owner authorization is required before merging or publishing to production.
- Local validation: scope guard (20 files), lint (zero errors; one pre-existing ProductImage warning), SEO/link/asset audits, diff whitespace check and production build passed. Local production HTTP checks verified all 12 new assets, expected bytes and immutable cache headers; Article publication/modification dates and canonical remain consistent. The blog index lists this guide in compact text cards, so no missing index thumbnail needs adding. At 390px and 1440px viewport settings the article has no document-level horizontal overflow; the first image is eager/high and the three body images are lazy/low with contain fit. No real inquiry was submitted, and no performance score or production release is claimed.

## 2026-09-20 — VCARPETS public brand identity update

- Replaced public VISHOME/Vishome/Vishomecarpet brand references with `VCARPETS` across runtime pages, localized content, shared navigation, footer, forms, metadata, structured data, feeds, AI source files and outreach assets.
- Updated the public legal company name to `VCARPETS Global Commercial Carpet Co., Ltd.` and all public business mail links and displayed addresses to `sales@vcarpets.com`.
- Updated the actual SVG wordmarks and logo accessibility text while preserving the existing V mark, subtitle, colors, layout, paths and responsive structure.
- Regenerated and refreshed all seven public procurement PDFs, including embedded author metadata and visible worksheet labels.
- Preserved old-domain matching only in redirect logic and migration audit tooling; no product, blog, market or download URL paths were renamed.

**Validation target:** Public pages must render VCARPETS identity, `https://www.vcarpets.com` canonical signals and `sales@vcarpets.com`; actual mailbox delivery and third-party recipient settings remain account-level checks.
## 2026-09-20 — Restore Microsoft Advertising UET tag

- Mounted UET tag `97259674` in the root layout so the loader is present on every page and no longer depends on deferred marketing enhancements.
- Always load the UET script with consent defaulted to `ad_storage: denied`; update it to `granted` only after Accept Analytics, while preserving Google Analytics, Google Ads, Clarity, Yandex, attribution, inquiry and WhatsApp behavior.
- Added non-PII UET custom events for successful lead forms, high-intent leads, email, WhatsApp, phone and sample-box interactions.
- Documented `NEXT_PUBLIC_MICROSOFT_UET_TAG_ID=97259674` in `.env.example` for repeatable deployments.
- No URL, layout, redirect, third-party account ID or database table changes.

**Verification:** `npm run ops:check`, `npm run lint` and `npx next typegen && npx tsc --noEmit` pass. Production build requires network access to the existing Google Fonts configuration in the current environment.

## 2026-09-10 `content/uk-education-procurement-wave-20260910`

**Type:** B2B content growth / country procurement / AI-readable discovery / planning tools

**Scope:** Added a UK school and university carpet tile procurement guide, a UK education carpet tile supplier page, a standalone commercial carpet sample approval checklist, a broadloom waste calculator and a hotel carpet project checklist. Reused the existing carpet-tile RFQ calculator for quantity planning instead of creating a duplicate URL.

**Changed URLs:**

- `/blog/uk-school-university-carpet-tile-procurement-guide`
- `/uk/education-carpet-tile-supplier`
- `/blog/commercial-carpet-sample-approval-checklist`
- `/tools/broadloom-carpet-waste-calculator`
- `/tools/hotel-carpet-project-checklist`

**Why:** Close the next verified procurement-intent gaps for education flooring, sample approval and hotel project planning while giving search engines and AI assistants bounded, internally linked sources.

**Rollback point:** `67eef81`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack`. Content uses project-specific confirmation language and does not claim local stock, local entity, named clients, statutory compliance or guaranteed delivery.

## 2026-09-08 `chore/align-sitemap-ops-baseline-20260908`

**Type:** Operations / SEO protection baseline

**Scope:** Align production verification with the existing split sitemap architecture; no public page or UI changes

**Changed URLs:** None

**What changed:** Updated `ops/site-baseline.json` so the Site Ops Guard checks the root sitemap and all published split sitemaps using their current protected minimum counts. The root sitemap intentionally contains seven root-only URLs; product, page, project, resource, blog and market URLs are checked through their dedicated sitemap endpoints.

**Why:** Production verification was incorrectly treating the root sitemap as a legacy 132-URL monolith and failed even though all split sitemaps were healthy.

**Rollback point:** `67eef81`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run build -- --webpack`, and `npm run ops:verify -- --origin=https://www.vishomecarpet.com`. No production content, form, tracking, URL, robots or canonical logic is modified.

## 2026-09-08 `seo/phase-4-discovery-freshness-20260908`

**Type:** Technical SEO / AI-readable discovery / sitemap freshness / indexing support

**Scope:** Refreshed last-modified signals for the updated manufacturer, product, country-market and Singapore pages. Updated `llms.txt` and `llms-full.txt` from the stale 2026-08-31 review date to 2026-09-08 and added direct references to the high-exposure commercial carpet, hotel broadloom, nylon tile, manufacturer and country procurement pages. Added a machine-readable AI source record describing the same official pages and their citation boundaries. No UI styling, public URL, form, analytics, robots policy, canonical logic, image bytes or deployment configuration changed.

**Changed URLs:**

- `/sitemaps/pages.xml`
- `/sitemaps/products.xml`
- `/sitemap-markets.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/ai-sources.json`

**Why:** Make already-published content easier for search crawlers and answer engines to discover as recently reviewed, while giving AI tools a direct, bounded source path for commercial carpet procurement questions.

**Rollback point:** `85523b8`

**Verification:** `npm run ops:check`, `git diff --check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack` passed. Lint reports one existing `ProductImage.tsx` `<img>` warning and no errors.

## 2026-09-08 `content/phase-3-country-procurement-clusters-20260908`

**Type:** Country-market content cluster / local procurement intent / SEO / GEO

**Scope:** Extended existing Philippines, Australia, Bulgaria, Canada and Poland commercial carpet supplier pages from the current production baseline `85523b8`. Added local project triggers, application and climate checks, buyer search wording, sample and technical approval guidance, delivery-access planning and complete RFQ fields. No new URL was created; existing country-market paths, UI styling, product records, forms, analytics, canonical, robots and sitemap logic remain unchanged.

**Changed URLs:**

- Updated `/ph/commercial-carpet-supplier-philippines`
- Updated `/au/commercial-carpet-supplier-australia`
- Updated `/bg/commercial-carpet-supplier-bulgaria`
- Updated `/ca/commercial-carpet-supplier-canada`
- Updated `/pl/commercial-carpet-supplier-poland`

**Why:** Improve local search-to-answer relevance and give commercial buyers a clearer path from country-specific queries to product comparison, sample approval and a qualified project RFQ.

**Rollback point:** `85523b8`

**Verification:** `npm run ops:check`, `git diff --check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links` and `npm run audit:assets` passed. Lint reports one existing `ProductImage.tsx` `<img>` warning and no errors.

## 2026-09-08 `seo/phase-2-procurement-intent-20260908`

**Type:** High-exposure page content / procurement intent / SEO / GEO / inquiry support

**Scope:** Extended the current production baseline `85523b8` with procurement-first decision guidance on commercial carpet tiles, hotel wall-to-wall broadloom, nylon office carpet tiles, the commercial carpet manufacturer page, and the Singapore commercial carpet supplier page. Added buyer-language sections covering application fit, fiber and backing, rolling-chair traffic, replacement stock, pattern approval, subfloor and installation checks, RFQ fields, packing, delivery access and phased handover. Preserved existing URLs, UI styling, forms, analytics behavior, product facts, robots, sitemap and canonical logic.

**Changed URLs:**

- Updated `/products/carpet-tiles`
- Updated `/products/wall-to-wall`
- Updated `/products/carpet-tiles/nylon-office-carpet-tile`
- Updated `/commercial-carpet-manufacturer`
- Updated `/sg/commercial-carpet-supplier-singapore`

**Why:** Improve search-to-answer relevance for high-impression B2B queries such as `50x50 carpet tiles`, `wall-to-wall carpet for hospitality`, `nylon carpet tiles`, `commercial carpet manufacturer` and `commercial carpet supplier Singapore`, while giving qualified buyers clearer paths to samples and comparable RFQs.

**Rollback point:** `85523b8`

**Verification:** `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack` passed. Lint reports one existing `ProductImage.tsx` `<img>` warning and no errors.

## 2026-09-08 `fix/lead-attribution-reliability-20260908`

**Type:** Lead delivery reliability / attribution / conversion measurement

**Scope:** Repaired the inquiry funnel from the current production baseline `85523b8`. Form conversion events now depend on a successful `/api/lead` response and confirmed email delivery. Product CTA clicks, WhatsApp, email, phone, sample and Thank You page events remain measurable as GA4/Clarity micro-events instead of standalone Google Ads lead conversions. First-party funnel signals continue to record locally without requiring analytics consent, and contact CTA source propagation works independently from analytics event collection. No UI styling, content, SEO URLs, WhatsApp destination, email destination, database schema, robots or sitemap behavior changed.

**Changed URLs:**

- Updated `/api/lead` behavior only; no public page URL was added, removed or redirected.

**Why:** Prevent false or duplicate lead conversions, preserve product-to-contact attribution, and show an error when Formspree email delivery fails instead of presenting a false success state.

**Rollback point:** `85523b8`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack`. Validate empty-payload API rejection, successful test delivery through the configured Preview endpoint, product CTA source propagation and conversion-event ordering before PR merge.

## 2026-09-08 `content/uae-hotel-carpet-market-page-20260908`

**Type:** UAE country procurement page / hotel carpet sourcing / SEO / AI-readable sources / image optimization

**Scope:** Added `/ae/commercial-hotel-carpet-supplier-uae` from the current production baseline `cde08b8`. The page covers Dubai and Abu Dhabi hotel procurement intent across guestrooms, corridors, lobbies and ballrooms, with sample approval, technical-submittal, climate, packing and RFQ guidance. Added three UAE-specific illustrative B2B procurement visuals as optimized WebP assets. The images are not represented as customer projects, factory evidence or certification evidence. No existing URL, UI styling, inquiry form, analytics conversion behavior, robots, DNS, email, WhatsApp, database or dependency behavior changed.

**Changed URLs:**

- Added `/ae/commercial-hotel-carpet-supplier-uae`
- Updated `/markets` data output through the shared country-market registry
- Updated `/ai-sources.json`, `/llms.txt`, `/llms-full.txt` and `keyword-map.csv`

**Media:** Added `uae-commercial-hotel-carpet-supplier-hero.webp`, `uae-hotel-carpet-project-sample-review.webp` and `uae-hotel-carpet-shipping-rfq-review.webp` under `public/images/markets/generated/`. PNG source files remain in the Accio media-output directory.

**Rollback point:** `cde08b8`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack`; then validate the UAE URL, canonical, H1, FAQ, CTA, sitemap entry, AI source markers and all three image requests on Vercel Preview before PR merge.

## 2026-08-29 `content/commercial-carpet-tile-cost-guide-20260829`

**Type:** B2B buying guide / total-cost comparison / AI-readable content / image optimization

**Scope:** Added `/blog/commercial-carpet-tile-cost-total-cost-guide` with procurement-safe guidance on material, fiber, backing, packaging, freight, installation, maintenance, replacement stock and RFQ comparison. Added six supplied illustrative images as optimized WebP assets and registered the guide in the official AI source files. No UI styling, inquiry form, analytics conversion behavior, robots, DNS, email, WhatsApp, database or dependency behavior changed.

**Changed URLs:**

- Added `/blog/commercial-carpet-tile-cost-total-cost-guide`
- Updated `/ai-sources.json`, `/llms.txt` and `/llms-full.txt` for source discovery

**Rollback point:** `0b2dac0`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets`, and `npm run build -- --webpack`; validate the new article, six images and AI source markers on the Vercel Preview before PR merge.

## 2026-08-28 `content/poland-bulgaria-office-guides-20260828`

**Type:** Country procurement guide enhancement / image optimization

**Scope:** Updated the existing Poland phased-office-replacement guide and Sofia, Bulgaria high-traffic-office guide with four supplied illustrative WebP images each. The content continues to treat the images as generic B2B guide visuals, not verified customer projects, factory evidence, testing evidence or installation proof. No URL, UI styling, inquiry form, analytics, conversion event, robots, DNS, email, WhatsApp, database or dependency behavior changed.

**Changed URLs:**

- Updated `/blog/phased-office-flooring-replacement-poland-guide`
- Updated `/blog/heavy-traffic-office-carpet-tiles-sofia-fitout-guide`

**Rollback point:** `02ef8f9`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets`, and `npm run build -- --webpack`; validate both updated guides and their eight image paths on the Vercel Preview before PR merge.

## 2026-08-28 `content/commercial-carpet-tile-adhesive-guide-20260828`

**Type:** B2B buyer guide / installation compatibility / image optimization

**Scope:** Added `/blog/commercial-carpet-tile-adhesive-subfloor-compatibility-guide` with procurement-safe guidance on concrete inspection, moisture and pH documentation, backing and adhesive compatibility, mock-up review and RFQ documentation. Added four supplied Accio visuals as optimized WebP assets. No UI styling, forms, analytics, conversion events, robots, DNS, email, WhatsApp, database or dependency behavior changed.

**Changed URLs:**

- Added `/blog/commercial-carpet-tile-adhesive-subfloor-compatibility-guide`

**Rollback point:** `8035e22`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets`, and `npm run build -- --webpack`; validate the article and image paths on the Vercel Preview before PR merge.

## 2026-08-26 `fix/dach-native-localized-route-20260826`

**Type:** International SEO route correction

**Scope:** Registered `/de/gewerbliche-teppichfliesen` as a native localized path in the locale-routing allowlist. No UI styling, inquiry form, analytics, robots, sitemap, DNS or dependency behavior changed.

**Changed URLs:**

- Fixed `/de/gewerbliche-teppichfliesen`

**What changed:** The newly added German page was initially redirected by locale middleware to `/gewerbliche-teppichfliesen`, which does not exist. Added the native localized path allowlist entry so the published German URL returns its own page rather than a 404 destination.

**Why:** Preserve the intended DACH landing page URL, canonical and discoverability after deployment.

**URL mapping:** No URL was removed, renamed or redirected permanently. The existing `/de/gewerbliche-teppichfliesen` URL is restored as its canonical destination.

**Rollback point:** Revert the allowlist addition only if the German landing page itself is removed through an approved URL-change process.

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:links`, and `npm run build -- --webpack`; then verify the German URL returns HTTP 200 with its self-canonical after deployment.

## 2026-08-26 `seo/dach-commercial-carpet-tiles-20260826`

**Type:** International SEO / DACH commercial landing page / Sitemap discovery

**Scope:** Added a German-language commercial carpet tile landing page for Germany, Austria and Switzerland, then added all existing localized landing pages to the pages Sitemap. No UI styling, inquiry form, WhatsApp, email, analytics, robots, DNS or dependency behavior changed.

**Changed URLs:**

- Added `/de/gewerbliche-teppichfliesen`
- Updated `/sitemaps/pages.xml`

**What changed:** Added a DACH-focused procurement page for `gewerbliche Teppichfliesen`, covering office and object use, nylon and PP options, bitumen or PVC-free PE backing, samples, technical documents, subfloor considerations, replacement stock and RFQ inputs. Updated `pages.xml` to include localized landing pages, including the existing German hotel carpet page, for consistent search-engine discovery.

**Why:** SEMrush screenshots showed an Austria Google / German tracking setup with one keyword and no Top 100 position. The live technical audit found no status, canonical, title, description, H1 or noindex issue across 226 Sitemap URLs, but localized German pages were not listed in `pages.xml`. This update creates a relevant German commercial carpet tile answer page and removes that sitemap discovery gap.

**URL mapping:** New URL only. Existing localized URLs remain unchanged; no URL was removed, renamed or redirected.

**Rollback point:** Revert the German landing page, keyword-map entry and pages Sitemap localized landing inclusion if the DACH content needs to be revised.

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, and `npm run build -- --webpack`; then verify the new German page and `/sitemaps/pages.xml` after deployment.

## 2026-08-25 `content/fire-voc-guide-image-assets-20260825`

**Type:** Image asset integration / Blog enhancement

**Scope:** Converted four Accio-generated PNG assets to WebP and connected them to the existing commercial carpet tile fire rating and VOC documents guide. No UI styling, inquiry form, WhatsApp, email, analytics, robots, sitemap, DNS or dependency behavior changed.

**Changed URLs:**

- Updated `/blog/commercial-carpet-tile-fire-rating-voc-documents-guide`

**What changed:** Added a dedicated image directory for the fire/VOC guide, processed the hero document area to avoid readable fake text, and replaced the article's generic images with dedicated B2B procurement, fire-rating review, low-VOC material review and adhesive/subfloor check visuals.

**Why:** Improve article credibility, visual relevance, user engagement and AI/GEO content quality for high-intent fire rating, VOC document and technical submittal searches.

**URL mapping:** Existing URL only. No existing URL was removed, renamed or redirected.

**Rollback point:** Revert the four new WebP assets and article image-path updates if the generated visuals need to be replaced.

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, and `npm run build -- --webpack`; then verify the article and image URLs after deployment.

## 2026-08-25 `content/carpet-tile-fire-voc-documents-20260825`

**Type:** B2B buyer topic intelligence / Specification Guide / SEO-GEO-AI Search

**Scope:** Added one commercial carpet tile fire rating and VOC documents guide, registered it in blog data and keyword ownership, then connected AI-readable source maps and relevant carpet tile product links. No UI styling, inquiry form, WhatsApp, email, analytics, robots, sitemap, DNS or dependency behavior changed.

**Changed URLs:**

- Added `/blog/commercial-carpet-tile-fire-rating-voc-documents-guide`
- Updated `/resources/ai-commercial-carpet-source-guide`
- Updated `/products/carpet-tiles/nylon-office-carpet-tile`
- Updated `/products/carpet-tiles/ecocore-pe-backing-carpet-tiles`
- Updated `/products/carpet-tiles/pp-bitumen-backed-office-carpet-tiles`

**What changed:** Published a B2B guide covering fire-performance references, VOC and low-emission document requests, adhesive/subfloor assumptions, RFQ fields, supplier questions and VCARPETS document-review inquiry routing. Added the article to `llms.txt`, `llms-full.txt` and `ai-sources.json` for answer-engine discovery.

**Why:** Capture high-intent buyer questions around commercial carpet tile fire rating, VOC documents, low VOC carpet tiles, LEED flooring documents, Bfl-s1, ASTM E648 and adhesive VOC before buyers compare quotations.

**URL mapping:** New URL only. No existing URL was removed, renamed or redirected.

**Rollback point:** Revert the new article, blog registration, keyword-map entry, AI source additions and related product-page links if this guide needs to be withdrawn or rewritten.

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, and `npm run build -- --webpack`; then verify the new article URL, AI files, canonical, H1 and blog sitemap after deployment.

## 2026-08-25 `seo/ai-backing-guide-visibility-20260825`

**Type:** AI source visibility / GEO / Internal linking

**Scope:** Updated AI-readable source files and relevant carpet tile product links so the latest backing comparison guide is easier for AI assistants and search systems to discover. No UI styling, inquiry form, WhatsApp, email, analytics, robots, sitemap, DNS or dependency behavior changed.

**Changed URLs:**

- Updated `/resources/ai-commercial-carpet-source-guide`
- Updated `/products/carpet-tiles/nylon-office-carpet-tile`
- Updated `/products/carpet-tiles/ecocore-pe-backing-carpet-tiles`
- Updated `/products/carpet-tiles/pp-bitumen-backed-office-carpet-tiles`

**What changed:** Added `/blog/commercial-carpet-tile-backing-comparison-guide` to `llms.txt`, `llms-full.txt` and `ai-sources.json`; added backing-related AI query routing; added relevant product-page links pointing back to the guide.

**Why:** Strengthen VCARPETS's answer-engine visibility for commercial carpet tile backing, bitumen backed carpet tiles, PVC-free PE backing, cushion-backed systems, rolling-chair stability and concrete moisture RFQ questions.

**URL mapping:** Existing URLs only. No existing URL was removed, renamed or redirected.

**Rollback point:** Revert this entry's AI source file and product-page link updates if backing-related AI routing needs to be withdrawn.

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, and `npm run build -- --webpack`; then verify the AI files and changed URLs after deployment.

## 2026-08-25 `content/commercial-carpet-tile-backing-comparison-20260825`

**Type:** B2B buyer topic intelligence / Buying Guide / SEO-GEO-AI Search

**Scope:** Added one commercial carpet tile backing comparison article covering bitumen, PVC-free PE and cushion-backed systems, then connected four generated WebP visual assets. No UI styling, inquiry form, WhatsApp, email, analytics or deployment behavior changed.

**Changed URLs:**

- Added `/blog/commercial-carpet-tile-backing-comparison-guide`

**What changed:** Added a buyer-focused guide comparing backing systems by traffic, rolling chairs, concrete moisture, installation, comfort, documentation, spare stock and RFQ requirements. Converted the four Accio-generated PNG assets to WebP, connected them to the article, linked relevant carpet tile product pages and registered its primary keyword in `keyword-map.csv`.

**Why:** Give commercial carpet buyers and AI search systems a specific, citable decision page for backing selection instead of forcing a generic specification checklist to carry the entire intent.

**URL mapping:** New URL only. No existing URLs were removed, renamed or redirected.

**Rollback point:** Revert the new article, blog registration and keyword-map entry if the backing comparison page needs to be withdrawn or rewritten.

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, and `npm run build -- --webpack`; then verify the new article URL, canonical, H1, internal links, structured data and blog sitemap after deployment.

## 2026-08-22 `content/carpet-tile-spec-checklist-20260822`

**Type:** B2B buyer topic intelligence / Buying Guide / SEO-GEO-AI Search

**Scope:** Added one commercial carpet tile specification checklist article and a separate Accio Work image-generation prompt package. No UI styling, inquiry form, WhatsApp, email or deployment behavior changed.

**Changed URLs:**

- Added `/blog/commercial-carpet-tile-specification-checklist-b2b-buyers`
- Updated `/blog` planning tools entry

**What changed:** Added a B2B Buying Guide covering project zone selection, fiber, pile, backing, fire/VOC document checks, concrete subfloor risk, adhesive planning, RFQ fields, spare stock and supplier approval checks. Added keyword ownership and prepared seven realistic professional image prompts for Accio Work generation only.

**Why:** Convert buyer-topic intelligence from procurement questions, installation risk discussions and specification standards into a commercial-intent content asset that can support Google SEO, AI Search answers and higher-quality carpet tile inquiries.

**URL mapping:** New URL only. No existing URL was removed or redirected.

**Rollback point:** Revert this branch commit if the new article should be withdrawn before publication.

**Verification:** Run `SITE_OPS_BASE_REF=origin/main npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run lint`, and `npm run build -- --webpack`. Accio Work image generation remains review-only and is not deployed in this change.

## 2026-08-21 `fix/mobile-pagespeed-followup`

**Type:** Mobile performance / PageSpeed follow-up

**Scope:** Addressed the mobile PageSpeed report for the VCARPETS homepage without changing published URLs, page copy or UI styling.

**Changed URLs:**

- Updated `/` through shared layout and homepage hero components

**What changed:** Deferred non-critical analytics, visitor beacon, cookie consent and image-protection client bundles until after initial rendering. Preloaded the mobile LCP hero image, loaded carousel slide images only when needed instead of preloading hidden slides early, lowered the decorative hero logo mark from priority loading to lazy loading, and added long-lived cache headers for stable root static assets such as logos and favicons.

**Why:** The PageSpeed mobile report indicated performance opportunities consistent with JavaScript main-thread work and critical image priority. These changes reduce initial client work and competing image requests while preserving the existing page design and conversion controls.

**URL mapping:** No existing URLs were removed, renamed or redirected.

**Rollback point:** Revert this change set if delayed enhancement loading causes analytics, consent or image-protection regressions.

**Verification:** Run `SITE_OPS_BASE_REF=origin/main npm run ops:check`, `npm run lint`, and `npm run build -- --webpack`; then verify the homepage and PageSpeed mobile report in Preview.

## 2026-08-21 `seo/ai-recommendation-official-site-signals`

**Type:** GEO-AEO / AI recommendation signals / Official source guide

**Scope:** Strengthened VCARPETS independent-site signals so AI assistants can more confidently identify and recommend `vishomecarpet.com` as the official source for commercial carpet sourcing questions.

**Changed URLs:**

- Added `/resources/ai-commercial-carpet-source-guide`
- Updated `/resources` through the shared resource directory
- Updated `/sitemaps/resources.xml`
- Updated `/llms.txt`, `/llms-full.txt` and `/ai-sources.json`
- Updated global Organization/WebSite JSON-LD source references

**What changed:** Added an official AI source-selection guide explaining when to cite VCARPETS for commercial carpet manufacturer, office carpet tile supplier, hotel carpet supplier, public-area carpet, gold mining carpet mat, sample, MOQ, RFQ and VCARPETS company questions. Registered the guide in resources, keyword ownership, split resources sitemap, AI-readable files and global structured data.

**Why:** AI assistants need clear official-source, entity and citation-boundary signals before recommending an independent website. This change gives crawlers and AI systems a concise page plus machine-readable references that point to the owned VCARPETS domain rather than third-party summaries.

**URL mapping:** No existing URLs were removed, renamed or redirected. All changes are additive.

**Rollback point:** Revert this change set if the AI source-selection guide or structured source references need to be withdrawn.

**Verification:** Run `SITE_OPS_BASE_REF=HEAD npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run lint`, and `npm run build -- --webpack`; then verify the new guide, resources sitemap and AI files in Preview.

## 2026-08-21 `seo/ai-assistant-channel-playbook-actions`

**Type:** GEO-AEO / Interactive resource / Structured data / AI source map

**Scope:** Executed the low-risk, site-editable items from the AI assistant channel traffic growth handbook for the VCARPETS carpet website.

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

**Scope:** Continued the VCARPETS Country × Product × Application expansion specification and closed the most visible Wave 1 gaps.

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

**Country application expansion further continued:** Added Serbia and Belarus office carpet tile pages plus Slovenia and Ge…27090 tokens truncated…ng reviewed.
- Temporary Preview fixture removed and allowed scope narrowed. Final evidence-only candidate requires its own CI/READY Preview/HTTP gate; production and actual indexing receipt are not claimed by this pre-merge entry. Existing shared footer identity/history claims were not reverified and remain outside this content-only scope.

## 2026-10-16 — Heathered gray product local preparation

- Add /products/carpet-tiles/heathered-gray-modular-carpet-tiles with four main and three detail design illustrations; native category record and listing; canonical metadata and factual Product/BreadcrumbList JSON-LD.
- Add product/source-prefilled existing contact links and sample-approval checklist link. No form or tracking logic changes.
- Preserve PR83 sample-approval changes and existing taupe directional hotel tile product. No size, material, ratings, MOQ, price, stock or lead-time assumptions.
- Local validation: ops guard passed (18 scoped files); lint zero errors and one pre-existing ProductImage raw-image warning; production webpack build and TypeScript passed; built HTML/schema/category/sitemap/RFQ query assertions passed. All previous product records and PR83 protected files verified unchanged. Browser viewport checks and real inquiry submission remain pending; no remote writes, Preview or production deployment. Rollback base: 0f176bc298223cfc592994cf76ebbd239f31ff71.

- Publication preparation authorized 2026-10-16: scoped feature PR/Preview workflow; temporary responsive fixture removed before staging the release tree. IndexNow manifest selects only new product and materially updated category; no notification or indexed outcome claimed before production.

## 2026-10-17 — Format comparison and commercial category decision path

- Deepen existing /blog/carpet-tiles-vs-broadloom-commercial-projects-guide; preserve URL, primary keyword and August17 publication. Put the general answer first, retain cinema coverage, replace format-based comfort/performance assumptions with construction-specific checks, add zone decisions, comparable installed-scope worksheet, hypothetical quantity/repair examples, copyable RFQ and six matching FAQ. Review date October17.
- Turn plain product paths into contextual links and preserve the existing related products. Explicit recommendation link now carries the exact article source. Add one buyer-comparison link inside the existing carpet tile category procurement section; category metadata, product cards, prices, FAQ and schemas unchanged.
- Evidence: live source and repository agree on the displaced answer and generic claims; last actual GSC checkpoint is Oct16 (article86/category99 impressions, zero clicks in displayed Sep19–Oct14 window). This does not establish a title/CTR cause or current ranking. Oct17 GSC browser is signed out and connector payment_required; no new data or Google request claimed. CRI104 planning reference reviewed as industry context only.
- Reuse both reviewed images; clarify hero illustration scope. No new generation or claimed product/project proof. Category trade copy corrected to owner-confirmed FOB Tianjin Port at hero and snapshot; remove unsupported24-hour price/sample/response copy. No forms, tracking, product facts, shared rendering, global index logic or route changes. PR84 product preserved; PR71/19 excluded.
- Clean baseline and rollback ea1d60ddba9bfbcb097146d4cbae996e0b0ec580 / READY production dpl_4NKsgTx79dwPG7HDZ7vusSYrr94A. Before-edit live article/category/contact and sitemap backups saved outside repository. Scope, candidate scores, complete English body and review plan in ops/format-selection-growth-20261017.md.
- Stage: local candidate. Required local checks, exact-head CI/READY Preview, desktop and actual390px same-origin frame acceptance, no-submit RFQ verification and final fixture removal precede PR merge. Only materially updated Blog selected for automatic production IndexNow; recently submitted category and Oct16 submissions are not repeated. Publication and receipt must be recorded after occurrence.
- Local acceptance: final scope/lint/SEO/link/placeholder audits and complete webpack/TypeScript build passed; only existing ProductImage warning. HTTP Ops/custom checks confirm five pages200/singleH1/selfcanonical, six matching FAQ, publication/review dates,66 internal destinations/assets200, preserved category schemas and unchanged sitemap267/blog64/products32. Two new draft hrefs corrected to existing canonical slugs during HTTP testing.
- PR85 implementation494f764 passed CI38989435398 and READY Preview dpl_3kN91WXosvDUt3VbQTxpQcoUEaJw. Desktop1363px no overflow, both illustrations loaded. Actual390×844 same-origin frames: guide/category width382, four680px tables contained348px; category→guide and guide→explicit RFQ work. Product prefill, exact source and one quote fragment confirmed; first required form fields visible, no floating quote overlay or submission. Temporary fixture removed before final checks; final exact-head gates and production receipt recorded in PR85 after occurrence.

## 2026-10-17 — Linear Accent Commercial Carpet Tiles

- Added a distinct gray/red linear design product with four main and three detail illustrations, visible AI disclosure, sample-first specifications and matching Product/Breadcrumb/FAQ structured data. No invented price, availability, ratings or reviews.
- Added category discovery and contextual sample-guide and office-planning-reference links; reused existing RFQ prefill without changing form handling.
- Preserved all existing URLs and records. Rollback base: `ea41126`. Validation and Preview review pending; no production release claimed.

- Acceptance: local production/TypeScript build and Ops guard passed; lint has zero errors and one unchanged ProductImage warning. Preview HTTP checks passed for one H1, canonical, five matching FAQ entries and seven image assets. Independent source/assets review passed. Actual 390×844 CSS-pixel iframe review passed: no horizontal overflow, gallery swaps, details, FAQ and product/source-prefilled RFQ with required fields visible; no inquiry submitted. Temporary QA frame removed from final candidate. Final exact-head CI/Preview and production verification remain release gates.


## 2026-10-18 — Concrete underlay/site-readiness content candidate

- Base/rollback ad5ff73b752b325b924c92293fb62f71d59d76fb (PR86); new Linear Accent product retained. Targeted deep update of existing concrete guide; no duplicate URL. July28 publication retained, Oct18 substantive modification. Add underlay/preparation distinctions, procurement brief, separate product/site approvals and seven parity FAQs; source references scoped to their own systems.
- One contextual PP/PVC product paragraph; no product facts, schema, gallery, forms, tracking, global index logic or deployment configuration changes. Existing hero reused with explicit editorial/non-evidence disclosure.
- GSC Oct18 signed out / connector payment_required. Historical Oct17 seven-impression query is a lead, not page attribution, current volume or a trend. Connected GA4 returned only an old-domain row, not VCARPETS conversion evidence.
- IndexNow manifest limited to material concrete update and newly published Linear Accent URL: PR86 actual notification step explicitly skipped unchanged manifest; no duplicate format-guide notice. Submission acceptance remains to be verified after production.
- Full copy, evidence, priorities, dependencies and next review dates: ops/concrete-readiness-growth-20261018.md. At this checkpoint: candidate, not production. Preview/CI/production closeout to be recorded with exact SHA/time in PR. Temporary390px QA frame removed before final release.

- Local acceptance: webpack build, lint0 errors/one pre-existing raw-img warning, ops guard, SEO/link/placeholder audits and10 IndexNow mock tests passed. Local production HTTP:29 linked URLs/assets200, root268/blog64/products33 sets unchanged, sevenFAQ parity and product schema preservation checked. Awaiting actual Preview/browser/CI.

- Preview acceptance: be2be3f1b60b3dd412c21d17f3d44b9ba4ce5853 / dpl_G7y1ewBoJyFfFT1jp8NzrKiwSyxs READY, CI39085256004 success, public Preview ops:verify and29 links/assets passed. Desktop and actual390px CSS-frame reading/RFQ prefill verified; product link navigated desktop/keyboard, narrow tables scroll inside container, no page horizontal overflow. No real lead or personal data submitted.
- Temporary QA HTML removed before final tree. Remaining final changes are records/removal only; final CI/Preview and production/notification closeout still required. PR87 is authoritative for subsequent stage and exact release receipt.


## 2026-10-20 — Owner-provided VCARPETS GA4 stream candidate

- Owner screenshot explicitly shows web stream for https://www.vcarpets.com, property544103330, stream15191882499 and measurement G-WBRQWMXJ7R; install request names misspelled vcarepts, resolved to established vcarpets.com project. Base/rollback edb68877b8b626fcdfce7e240ce010598666138d (PR87).
- Replace old GA4 G-T2VYHXTK1F and remove automatic legacy Google tag GT-NMDDTW67 fallback; explicit optional environment override retained. One existing consent-aware tracker, no raw second snippet in layout. Deduplicate optional same-ID config; analytics-only loads G-WBRQWMXJ7R and advertising-only uses existing AW loader.
- Existing consent UI/categories, event names/sanitization, Google Ads ID, Clarity/UET/Yandex, forms and SEO/content remain outside mutation scope. No GA4/Ads account links, key-event settings, budgets, audience or data-collection extensions. Vercel environment metadata has no GA4/Google-tag/GTM override; no environment variables changed.
- Interrupted browser connection on Oct18 made no source changes; fresh clone recovered remote main Oct20. Live home/category/contact HTML backed up before edits. Candidate only at this checkpoint; required checks/Preview/browser/production evidence to follow in PR closeout.

- Local acceptance: webpack production build, lint0 errors/one pre-existing raw-img warning, ops guard, SEO/link/placeholder audits passed. Five isolated consent/target initialization scenarios passed without live measurement requests; no additional tracker configured before consent and no same-ID duplicate config. Local production HTTP ops passed; URL inventory baseline268/64/33 retained for comparison. Preview/browser/production remain pending at this checkpoint.

- Preview acceptance:6fc3e439 /dpl_FzTCBW5caHoDs8R9Qy5HMVa68Utp READY; CI39355914667 success; Preview ops/HTTP checks passed with268/64/33 unchanged sitemap sets. Browser necessary-only0 Google tags; analytics-only1 new GA4 loader/init, route transition retained1; consent withdrawal reload removed Google tags; advertising-only1 existing AW loader/config and analytics denied. No personal data or sales enquiry submitted.
- Final change after this acceptance is records only. Exact final CI/Preview and production target-ID/consent checks remain required. PR89 closeout is authoritative for final deployment SHA/time and validation boundary. GA4 backend Realtime/DebugView receipt not yet verified.

## 2026-10-20 — Nylon commercial carpet tile procurement clarity

- Scope: existing nylon-office tile page plus category/backing-guide contextual links. No new URL, asset, performance claim, analytics or conversion-system change.
- Evidence: Semrush US desktop snapshot 2026-10-19 lists “nylon commercial carpet” position 52 (volume 90, KD 3; dated 2026-10-15), an estimated search opportunity rather than actual visits.
- Update: search-intent metadata, 50x50 cm module math, qualified layout/backing review, sample and B2B FOB Tianjin brief, visible/schema-matched FAQ, precise inbound anchors. Existing listed TDS/prices are labeled sourcing references rather than new promises. Removed unverified plank/free-sample/cleaning promises from page prose; left shared catalog and analytics untouched.
- Dates: only changed category/product lastmod values in the existing sitemap maps; backing-guide dateModified updated. No generation or indexing logic change.
- Validation: local ops guard, lint/build, Preview layout/SEO/link/FAQ checks and production SHA verification are recorded in ops/nylon-commercial-procurement-20261020.md.
- Rollback: d8dcfccac3e08e6b1dbd3a8a1a797f3132f32d2a. Revert the scoped PR if needed; no history rewrite.

## 2026-10-20 — Clarity contact-path conversion candidate

- Reviewed authenticated Last30days Clarity dashboard and home/contact/category heatmaps. Production-visited cohort93 sessions/32 users, quote clicks10/email4/WhatsApp2 sessions; these overlap and include possible staff/QA, not qualified leads. Mobile home28 pageviews:10% depth11; contact mobile5 pageviews. Full evidence/limitations/priorities in ops/clarity-contact-paths-20261020.md.
- Fix conclusive WhatsApp detour: shared existing caller helper now opens configured wa.me destination directly with context; saved legacy contact bridge remains functional as an anchor. Compact contact hero/intro and expose email/chat before form. Add direct WhatsApp and linked email address to existing conversion panel.
- Preserve PR90/main9fb9c4f4, all form fields/submission/delivery/success logic, GA4/Ads/Clarity consent and tracking; no real sales inquiry/message. No new images, routes or index-policy changes. Rollback baseline9fb9c4f4d57e929814a40358ac747b886b65c289. Feature PR/required checks/Preview/production gates remain required; this entry does not claim release.

- Acceptance: webpack/TypeScript, lint0 errors/one existing ProductImage warning, scope/SEO/link/placeholder audits and3 helper regression tests passed. CI39422799210 success/READY Preview dpl_KXeqJsgpi3RWDdBwJc1tbfLJteGB for head9393198. Public Preview ops:verify passed; actual desktop/390px contact, legacy bridge and category→RFQ/product prefill checked without submitting. Native WhatsApp handoff cannot be observed by cloud browser; no message receipt claim. Temporary QA fixture removed; final exact-head CI/Preview/production gates remain.

## 2026-10-20 — Office layout pattern decision guide candidate

- Follow PR91 production bccd7d0; preserve direct WhatsApp/contact improvements and PR90 nylon procurement changes. Deep-update existing office-carpet-tile-layout-approval-bulk-order URL, retaining Oct12 publication/keyword ownership. Add clear orientation/offset comparison, two original SVG schematics, zone/approval decisions, separated quantity assumptions, hypothetical arithmetic and source/product-aware RFQ, eight matching FAQs. Full English source and evidence in ops/layout-pattern-growth-20261020.md.
- Replace one keyword-list paragraph on GrayLine product with a useful layout approval guide entry. No product facts, claims, images, URL, form/tracking/consent or global index mechanism changed. New SVGs are geometric planning illustrations, not installations or product permissions. Existing AI illustration disclosures retained.
- Primary sources: Interface EMEA PDF revision27Apr2023/page11 visually verified; Shaw product-scoped installation bulletin; CRI commercial installation context. GSC connector payment_required, no current rankings/search volume/Google requests claimed. Prior Clarity counts do not establish layout-query demand or effective leads.
- Feature branch content/layout-pattern-decisions-20261020. Rollback bccd7d007199a2c2f6c57acbac88f5b9968e6a07. Initial candidate; required local, Preview, final CI and production acceptance to follow. IndexNow manifest only materially updated guide, no live receipt yet. Temporary mobile QA frame removed before final tree.

- Local acceptance: webpack production/TypeScript build, lint0 errors/one existing raw-img warning, Ops/SEO/link/placeholder/diff checks and10 IndexNow mock tests passed. Eight FAQ entries match visible source, Oct12 publication preserved, both original SVGs XML/visual checks pass. Successful live baseline backups captured before release; Preview/CI and production still pending.

- Initial exact head5a3dd69/CI39425484000 and READY Preview dpl_Hwu6xAVyrJdibb99i61DZxUCsPz4 passed; ops:verify and HTTP/FAQ/date/canonical/assets/internal anchors/sitemap inventory checked. Actual desktop1355px and390px iframe widths have no page overflow; comparison tables scroll in their own containers; both original SVGs load and image preview opens/closes. Product→guide→article-specific RFQ prefill checked without submission. Temporary QA file removed. Final app/assets identical to reviewed candidate; final exact-head checks and production/IndexNow receipts are authoritative in PR92 closeout, not implied by this pre-release record.

## 2026-10-21 — Raised-floor carpet tile procurement guide candidate

- Baseline/rollback4ac5341 (PR92); fresh remote recovery after workspace pruning. New distinct buying guide /blog/carpet-tiles-raised-access-floor-procurement-guide and one category entry, original three-record planning SVG, new keyword ownership and existing registry/sitemap mechanism. No global index or conversion behavior change; preserve PR90/91/92 and exclude draftPR88.
- Complete English source and evidence/decision/link/image map in ops/raised-floor-growth-20261021.md. Interface EMEA section3.4, Tarkett and Shaw scoped documents; no product compatibility/performance/certification/price/lead-time invented. Browser tool unavailable and cloud session blank; no fresh GSC/Semrush figures. Reddit summaries only, full retrieval failed; not performance evidence.
- Candidate only: local/Preview/CI/production acceptance pending. Temporary QA fixture removed before release; IndexNow manifest only new canonical guide. No live index notice or indexing claim.

### Local acceptance — Oct21
Full production webpack/TypeScript build passed. Lint0 errors/one unchanged ProductImage.tsx43 raw-img warning. Scope guard10 files, SEO/link/sitemap/placeholder/diff checks and10 offline IndexNow tests passed; no live notification sent by tests. Original SVG1200×675 Sharp rendering visually inspected; existing pictures untouched. Live baseline backups successful. Candidate still requires exact-head CI/READY Preview, actual desktop/390px UI, quote prefill, final fixture removal and production checks.

- Initial8af4196/CI39525042662 success; READY Preview dpl_AAP81MCwkM8ovmQyoY74jCWmEFB9. Ops and scoped HTTP/FAQ/category-schema/canonical/links/image/sitemap checks passed, expected Preview noindex header retained. Actual1355px desktop and390px iframe tested; no outer overflow, independent table scroll, originalSVG loaded. Category→guide→product-aware RFQ verified via pointer/keyboard without real submission. Temporary QA removed; application/asset blobs unchanged. Final exact-head and production/IndexNow closeout to be recorded in PR93, not implied by this checkpoint.


## 2026-10-21 — Owner-selected office acoustics and natural sisal blogs

Owner selected topics 2 + 4. Added two distinct English B2B guides with three original high-resolution concept images each, category entry links, visible FAQs, topic-prefilled inquiry links and exact IndexNow URL manifest. Rollback baseline: ae856495984cbb62b5b662ebff1a3f28001a692e. No global SEO, product facts, form, tracking, dependency or domain changes. Validation and release evidence: ops/blog-open-plan-sisal-20261021.md (pending at implementation).

Pre-production verification passed for PR94: release Preview direct-200 pages; 3 original images and 6 matching FAQs each; 20 internal targets; six image-byte hashes; Blog/category links; main sitemap 271 URLs; desktop and 390px browser review; both quote topics prefilled. Required PR checks passed at application commit 1526ef0. Evidence-only follow-up leaves application source/assets unchanged. Production and IndexNow remain to be verified after merge.

## 2026-10-21 — Gradient accent office carpet tile product

- Scope: new `/products/carpet-tiles/gradient-accent-office-carpet-tiles`, product catalog/category listing, seven edited visuals, buyer guides and an explicitly labeled planning reference. Preserve all existing product URLs.
- Source: exact Alibaba listing 1600066903386 inspected on 2026-10-21; PP loop pile, bitumen, 500×500 mm, pile weight 420 g/m². Owner separately confirmed the supplied gradient design is available as 50×50 cm squares. No inferred nylon blend, numeric thickness, certification, numeric price or delivered-project claim.
- FOB price: Request a project quotation. Port: Tianjin Port, China. No Offer/AggregateOffer structured data for this quotation-only product.
- Base/rollback: `e286217cda6d639386779ed691e942ab35b63718`. Production category HTML backed up before edits.
- Validation: baseline build passed; one pre-existing lint warning in ProductImage.tsx. Final ops:check and build pass; lint has no new warnings or errors. All 38 local semantic, asset HTTP, internal-link, category and sitemap assertions pass. Preview, independent visual QA and production verification pending; evidence will be updated before merge.

Pre-production verification passed for PR95 application commit9647ba576c07f27da4b1a0fc3883f8278d8ca480: Preview READY; required CI success; full Preview ops:verify and38 semantic/asset/link/category/sitemap assertions passed. Independent desktop1180px and supported narrow-window approximately500px content review passed product layout, four-image switching, full color board, FAQ, quote-prefill and category-card navigation. This is narrow desktop responsive QA, not390px emulation or mobile-UA testing. No browser policy bypass. Production verification and webmaster submissions follow merge.

## 2026-10-21 — Enrich gradient office carpet tile product title

- Owner requested a fuller search-friendly title for the just-published product.
- Name now states 50×50 cm, commercial PP loop pile, bitumen backing and office application; gradient distinction remains visible in supporting copy.
- Permanent URL, seven images, verified specifications and quotation-only FOB terms preserved; no nylon/bestseller claims.
- Category name, product options, Product schema source and RFQ prefill aligned. Preview review required before merge.
- Local validation: ops:check, lint, build, 39 HTTP/semantic checks and ops:verify passed; no new lint warnings.
- Owner requested first main-image scene revision: updated to a clearly different reception visualization, preserving gray/green carpet style. Versioned asset avoids stale cache; other six images unchanged. Final-head Preview QA required.


## 2026-10-21 — Balance polypropylene carpet tile product

- Added an independent Balance collection product page and visible image/title category card.
- Preserved existing products and URLs; reused the established quotation route.
- Added edited-image disclosure, buyer guides, labelled planning reference, FOB quotation wording and Tianjin Port.
- Verification and release details: `ops/balance-product-20261021.md`.
- Rollback baseline: `bf8b5de7bd6154e4e99aee54cbcf2301d255d641`.

Pre-production validation on application commit `33eba6658fad2e9b08287f3e6d003f7b24ea51d4`: Vercel Preview READY, required CI success, public Preview ops:verify and 21 HTTP/asset/link/sitemap checks passed. Independent browser checks passed four-image switching, seven image loads, FAQ expand/collapse, full product quotation prefill without submission, back navigation and category-card return. Desktop 1180 CSS px and ordinary narrow window approximately 502 CSS px had no horizontal overflow; this is narrow desktop-browser QA, not mobile-UA emulation.

## 2026-10-21: Homepage PageSpeed and accessibility

- Scope: homepage image-manifest payload, color contrast and carousel touch target sizing. No content, lead flow, consent, analytics or indexing changes.
- Baseline official PSI: mobile 83/93/100/100; desktop 99/93/100/100 (performance/accessibility/best-practices/SEO).
- Rollback: 8b4c1b7f189dfa89560304148cef89b9686ca5b0. Validation and Preview are pending; production has not been changed by this branch.

- First Preview (58b732ee459d7ac3df27bfdce02a88601e67907b, dpl_2qqbUQ2aXfRzeNKk3w7s5VBPRjxg) passed required CI, ops:verify and desktop carousel, inquiry-navigation and cookie-preferences checks without submitting a lead. Official mobile filmstrip showed intact layout. PSI Preview mobile 80/97/100/100 and desktop 96/97/100/100: touch-target failures resolved, but contrast remained and performance was not improved on this run. These are Preview lab scores, not production results.
- Second pass fixes the remaining reported contrast nodes. The floating inquiry receives only server-projected product/category identities instead of importing the whole catalog; exact inquiry href and tracking identity equivalence passed on 33 routes. Initial homepage JavaScript falls from 784,473 to 715,988 raw bytes versus first Preview; the unused homepage monospace font is no longer preloaded. Font availability, inquiry behavior, consent and all trackers are unchanged.
- Current local scope guard, lint (zero warnings/errors), 224-page production/TypeScript build, SEO/link/sitemap/placeholder audits and diff checks pass. Exact-head Preview and final UI checks remain required before merge. Production remains unchanged at this checkpoint.

- Second-pass application commit 300367eac36d91b6f63a80d083ebd46d80d5d23a: READY Preview dpl_EZNERZvTePLKUvPC2HwmSTB4U8uk and required CI passed. Preview ops:verify passed. Actual 1180px desktop review has no horizontal overflow; loaded hero images, 44px indicators, navigation expand/collapse, necessary-only consent choice, category/product floating inquiry identity and product-name prefill all passed without sending a lead. Official mobile final screenshot was reviewed with intact logo/navigation, hero and three cookie controls.
- Official second Preview PSI: mobile 88/100/100/100 (LCP 3.8s, TBT 40ms, CLS 0.017); desktop 100/100/100/100 (LCP 0.8s, TBT 0, CLS 0.026). Report https://pagespeed.web.dev/analysis/https-carpet-website-4qls927ca-mike123-s-projects-vercel-app/jifgq254bo. Mobile performance is still below 100; no all-device 100 or production score claim. No CrUX field data available. This evidence-only checkpoint changes no application code/assets; final exact-head checks and production verification follow.

- Release checkpoint: the owner explicitly confirmed moving this optimization PR to review and merging after successful tests on 2026-10-21. No further image-quality experiments or application changes are included in this release. Revalidate the exact final head and Preview before merging; retain the original rollback commit above.

## 2026-10-22 — Carpet tile delivery inspection and site-storage guide

- Added a distinct B2B guide at `/blog/carpet-tile-delivery-inspection-site-storage-checklist` covering controlled order records, carton labels, quantity, visible condition, hold/release authority, site storage and installer handoff.
- Added one contextual reverse link from `/products/carpet-tiles#batch-zone-spare-record`; preserved all existing product and Blog URLs.
- Added one original 1200×675 procurement-process SVG, explicitly labelled as a planning diagram rather than product, factory, delivery, certificate or client-project evidence.
- Primary sources inform the procurement controls but their numeric conditions and proprietary systems are not stated as VCARPETS specifications. No price, MOQ, lead time, certification, factory, product-performance or universal acclimation claim was added.
- GSC connection did not expose the VCARPETS property, and no Semrush report, fresh Clarity sample or qualified-lead dataset was available. No current rank, volume, index count, traffic or conversion claim is made.
- Index notification manifest contains only the new canonical guide; no prior URL is repeated. Verification and release evidence is recorded in `ops/carpet-tile-receiving-growth-20261022.md`.
- First Preview review found FAQ schema without visible FAQ output in the shared route. Added six matching visible FAQ answers inside this article rather than expanding release scope to the shared Blog template; exact-head Preview revalidation is required.
- Exact application head `20ca895ce7ed63ceab12a0c793f6699a5275fc2a` passed Site Ops Guard run 39704811012. READY Preview `dpl_5knoJGiCNisBZYgP7AMqC7QBZiy2` passed HTTP/SEO/FAQ/link/CTA-prefill and 1363px desktop review without submitting a lead. A 390px emulator was unavailable; the shared responsive template is unchanged and both tables retain their existing horizontal overflow containers.


## 2026-10-22 — Product evidence copy, batch 1 of 2

- Owner request: rewrite existing product pages with a conclusion of at most 50 English words, H2 evidence sections, a third-block sourced supplier comparison, final long-tail FAQ answers under 80 words, and factual wording.
- Scope: 15 existing hotel broadloom, public-area, nylon-office and PP/PVC tile routes; two dedicated server-rendered product-copy/template modules. Existing URLs, source product records, images, global indexing, forms, tracking infrastructure and dependencies remain unchanged. The remaining 12 routes are a separate batch.
- Evidence: original production HTML for all 27 detail routes backed up from immutable deployment dpl_DXb2K2f8iT8q6K6oDeJBvQQR2Kc5 (main bdab5270a61ef91c3513dc17bc9cf3832acee2aa). Public competitor facts are attributed at the table row; own dimensions are catalog references, not lab verification.
- Copy: distinct construction/application details per SKU; separate Axminster, printed/tufted, sisal, rugs and miners-moss matting; no invented performance results, stock promises, free samples, fixed current prices or universal production deadlines. Paid sample and written-quote wording uses existing owner policy. Product/FAQ/Breadcrumb JSON-LD matches rendered copy; quotation-only Product has no invented Offer.
- Validation: copy checks report 35–46 words per opening and 49–57 words maximum per FAQ answer across 27 prepared profiles. Local ops guard, lint (zero errors/warnings), production build, and rendered-HTML checks passed for 15 routes: HTTP-independent prerender checks cover H1/canonical, third-block table order, every H2 having a data point, FAQ/schema equality, image existence, fragment targets and inquiry destinations. Exact-head Preview/CI remains the release gate. Existing view_item and quote/contact events for the two instrumented products retain their SKUs and event names.
- Rollback: bdab5270a61ef91c3513dc17bc9cf3832acee2aa; use a normal revert or prior production deployment if required.


## 2026-10-22 — Product evidence copy, batch 2 of 2

- Completes the same owner-approved rewrite for the remaining 12 carpet-tile detail routes, using the dedicated template and SKU profiles from batch 1. All 27 existing English product detail routes now share the requested content order while retaining distinct construction and application facts.
- Scope: 12 existing route files and two operations records. No new route, source price/MOQ/schedule record, asset, form, tracking infrastructure, global SEO or dependency changes. Original HTML is retained from dpl_DXb2K2f8iT8q6K6oDeJBvQQR2Kc5.
- Content: conclusions under 50 words; H2 sections with catalog data or explicit review counts where no specification exists; third-block supplier table links to Victoria Linen and Curran Ridge Tile sources; final six long-tail FAQs with matching JSON-LD. Unknown dimensions on Linear Accent/Heathered Gray remain unknown.
- Validation: local ops guard, lint and production build passed; all 27 rendered pages passed H1/canonical, opening limits, third-block comparison, per-H2 data, 162 FAQ/schema pairs, image paths, final FAQ and inquiry destination checks. Exact-head CI and public Preview are the remaining release gates. Preserve canonical URLs, sitemap counts, quote/contact destinations and image evidence labels.
- Rollback: prior batch 1 production; use an ordinary revert for this route-only follow-up.

## 2026-10-23 — Hospitality construction guide and broadloom category alignment

- Deeply updated the existing `/blog/axminster-vs-wilton-vs-tufted-hospitality-guide` instead of creating a duplicate. Preserved the June23 published date; Oct23 records the substantive review. Full English comparison covers structure versus colouring, hotel zones, evidence, pattern/seam review, comparable quotations, alternative-approval records and six visible matching FAQs.
- Updated `/products/wall-to-wall` to use the reviewed product names/summaries, contextual construction-guide entries and FOB Tianjin Port quotation wording. Removed stale category-wide price/MOQ/lead-time/stock/CIF/DAP promises and unsupported cost/speed generalizations. The original guestroom event identity remains intact.
- Replaced the guide’s unverified durability-chart role with an original labelled 1200×675 procurement SVG. No generated photo or technical cross-section is presented as product evidence.
- Evidence: CRI business selection, Bloomsburg weave structures and Tarkett DESSO Gravure pages read Oct23. No competitor specifications transferred. GSC property/session and fresh Semrush/Clarity data were unavailable; no rankings or conversion change claimed.
- Rollback: `c0da0a585954cce480170007f48aa5451d75e190`. Existing live HTML backed up before editing. Research, link map, dependencies, checks and release receipt: `ops/hospitality-construction-growth-20261023.md`.
- At this checkpoint: content implemented; local checks, Preview, PR and production verification pending. Submission manifest contains only the two materially updated canonical URLs.
- Local acceptance: 9-file guard, zero-warning lint, 224-page production/TypeScript build, SEO/link/asset/placeholder and diff checks passed. Seven HTTP resources and 57 internal targets passed; six visible FAQ/schema pairs match, old published date remains, category event identity remains, sitemap remains 274 URLs and both changed pages are included. Original SVG rendered and visually inspected. Preview and production remain pending.
- PR103 application commit `88088e44d41f8d5f175c9eb0d51a511a95e5a57b`: required CI run39883175444 passed; READY Preview `dpl_6BUXtuKNhB6Dxo3zVxBj5tkgtLUk` passed ops:verify and the same seven-resource/57-link assertions. Actual1363px desktop review passed guide/table/image/category/FAQ/product navigation and topic/source-prefilled contact without submitting a lead. Mobile emulator unavailable; official mobile PSI returned429, so no mobile score or emulated-device acceptance claimed. Evidence-only follow-up leaves application/assets unchanged; final checks and production closeout follow.

## 2026-10-24 — Office carpet tile evidence and procurement copy

- Owner requested continuation of the competitor recommendations and product copy format: conclusion within 50 English words, H2 sections with verifiable data, third content block as supplier comparison, and final long-tail FAQ answers within 80 words.
- Refines fourteen existing carpet-tile detail pages through a tile-only copy module and conditional server rendering. Replaces prior comparator rows with named Interface On Line and Judong Thunderclap product references checked Oct24. Distinguishes 25×100 cm plank and 50×50 cm square formats without claiming equivalent performance or price.
- Rewrites openings and six FAQs per tile; retains catalog-reference limitations. Adds five document checks separating dimensions/material from fire, acoustic, rolling-chair and emissions evidence. Unconfirmed Linear Accent and Heathered Gray dimensions remain unconfirmed. Existing design images remain labelled; no new image or performance claim.
- Replaces directory-order related tiles with explicit material/backing/design groups and links existing commercial category, office requirements, fiber guide and technical-document pages. Preserves all 27 product URLs, original catalog records, assets, conversion destinations, tracking, global SEO and dependencies.
- Fourteen production HTML pages backed up before editing at `/workspace/scratch/29fa4f5d9a82/office-tile-backup-20261024`. Rollback commit: `a9f4686070952100c01e335ceed3f585f6ef6fb6`. Full source and verification record: `ops/office-tile-evidence-20261024.md`.
- Implementation checkpoint: lint passed with no errors or warnings; local production build, complete rendered checks and exact-head Preview/CI validation are required before merge. No Google ranking or AI citation result is claimed.
- Local acceptance: six-file scope guard, zero-error/warning lint, production/TypeScript build and all27 rendered product checks passed. Fourteen revised tile openings contain32–42 English words; all84tile FAQ answers are60 words or fewer, with matching visible/schema text. Third-block comparisons, per-H2 data, five-document records, unknown-format handling, internal destinations and subjective-word checks passed. All13non-tile profile outputs are unchanged against starting main. Preview/UI and exact-head CI remain the release gates.
- First application head `d3f08ac1a36936b91ed6d250fead06c7db7b8fb8`: CI run39986021621 and READY Preview `dpl_7PnpZyatYHGFucXYC2NPYrYXG5xa` passed; Preview ops:verify passed. Actual1363px desktop review confirmed table/source readability, FAQ expansion and product-prefilled contact navigation without submitting a lead. Preview exposed a sticky-header overlap on product anchors; tile-only scroll offsets and a corrected FAQ topic sentence address it. Revalidate the final head before merge. Narrow-device emulation is unavailable in the current browser surface; responsive overflow containers were reviewed, with no device-test claim.


## 2026-10-23 — Crawler exclusions and Organization schema correction

- Bounded AI-discoverability repair: repeat the existing `/api/` and `/admin/` exclusions for the named crawler group, because specific user-agent groups do not inherit wildcard rules. Preserve every existing user agent and public `Allow: /`, including all existing training-crawler choices. This is crawler guidance, not an authentication or security control.
- Remove the unsupported `Manufacturer` class from the shared organization `@type`; retain `Organization`, the stable entity ID, all existing entity fields, product manufacturer relationships and visible manufacturer wording.
- Scope: two runtime files and the two required operations records. No URLs, visible copy, product facts, consent, API, forms, tracking, security, billing, dependency or sitemap changes.
- Evidence: live home HTML and robots backed up before editing. Official references: https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec and https://schema.org/manufacturer .
- Rollback baseline: `31ed9798340fae5e9c5611d26a72a2d2a089fb5d`. Local checks, one exact-head Preview, independent review and required CI are the release gates; production verification and GSC/Bing submission follow normal merge. No ranking or AI-citation gain is claimed.
- Local acceptance: four-file Site Ops Guard, SEO audit for 99 page files, link/sitemap audit, zero-error/warning lint, 13 existing offline tests and the 224-page production/TypeScript build passed. Focused source/rendering assertions verify all 20 user-agent entries, unchanged public access/host/sitemap, and the three global JSON-LD objects with only the intended Organization type difference. Exact-head Preview, independent review, CI and production checks remain pending.

## 2026-10-24 — Commercial carpet quote comparison guide (release candidate)

- Preserve the existing pricing/MOQ/lead-time article URL and original publication date. Remove five numeric price, MOQ and fixed lead-time rows that lack current product-matched quotation evidence; replace them with a complete comparison framework for product scope, quantity, sales unit, approval, packing, schedule milestones and FOB Tianjin Port handoff.
- Add six concise buyer FAQs, product and procurement links, and a project-prefilled contact path. Add one reverse link from Commercial Terms and record both keyword owners and 2026-10-24 sitemap dates.
- Reuse existing procurement-planning images; no generated asset or product/factory/case evidence added. No product records, forms, tracking, global schema, robots, canonical logic, dependencies, URL or customer contact changed.
- Evidence and priority: `ops/commercial-quote-comparison-growth-20261024.md`. Rollback baseline: `151632fdb2ef2e74d1f858807d0a1d398b996e79`. Local full-repository build is unavailable because the public Git source cannot be cloned in this runtime; required CI, Vercel Preview and production checks remain release gates. No ranking, index or inquiry gain is claimed.



## 2026-10-24 — Concise concept-image notices (Preview review)

- Shorten existing shared and Australia concept captions to “AI-generated concept · Not a product or project photo.”
- Keep the planning reference's hypothetical status in a short plain sentence; remove its alert-like border and duplicate AI explanation.
- Set project and country image notices to readable 12px regular text, 1.4 line height and 4px top spacing. No new labels on genuine photography.
- Preserve image assets, ratios, commercial terms, technical content, SEO/schema, forms and consent. Base and rollback: `611756a9f9aaff395e4b636fb42902214e67765a`.
- Validation: local Ops Guard, ESLint, production build (224 static pages) and diff whitespace checks passed. Normal Vercel Preview review is required before merge. Representative pre-change production HTML retained locally. No production merge in this change record.


## 2026-10-24 — E3 carpet tile replenishment guide

- Owner selected E3: dye-lot records, reserve stock and later replacement. Added one English answer-first guide with four distinct AI-generated planning images and compact provenance captions.
- Added existing category, delivery guide, sample guide and clearly labelled office planning-reference links; no invented product specifications, prices, universal reserve percentage or matching guarantee.
- Blog index, keyword ownership and existing sitemap data updated; global generation logic, robots, forms, tracking and production settings unchanged.
- Rollback source: e84181af3663b00542daf78cfd6a379c307951aa.
- Added an opt-in compact caption flag on this article only (12px, normal weight/case, 4px spacing); existing articles retain their rendering.
- Local validation: Site Ops Guard passed (11 scoped files), ESLint passed, Next.js 16.2.9 production build passed (224 static pages). Generated assets are distinct by file and pixel hash. Batch/zone/spare anchor exists in the category source.
- Preview and independent desktop/mobile validation are pending; do not merge before acceptance.


## 2026-10-25 — Commercial carpet supplier verification guide

- Add one answer-first English guide for importers, distributors, contractors and project buyers verifying a commercial carpet supplier before a bulk order.
- Separate legal counterparty, supplier role, nominated product, technical evidence, sample control, quotation scope, payment controls and inspection planning; no supplier audit, compliance guarantee or universal price/MOQ/lead-time claim.
- On the carpet-tile category, replace category-level manufacturer/factory-price wording with the verified B2B supplier/wholesale role and add one reverse link from the existing RFQ-planning path.
- Reuse existing sample-approval planning illustrations with explicit non-evidence captions; no new generated image or product/factory/case claim.
- Evidence and priority record: `ops/supplier-verification-growth-20261025.md`. Rollback baseline: `0ad7f69c97c93e0e57dec265f4d36cbd0cd7ede1`.
- No product specification, offer, rating, form, tracking, robots, global schema, dependency, URL or deployment configuration change. Required CI, Vercel Preview, visual review and production verification remain release gates.

## 2026-10-25 — 500 m² office carpet tile specification guide

- Added one user-selected English article with four original AI-generated concept images and explicit illustration captions.
- Added existing-template listing, related product links, unique keyword ownership and pending IndexNow URLs; existing sitemap derives the new article from blog data without logic changes.
- Hypothetical 500 m²/50 cm calculation separates net tiles, assumed waste/spares and carton rounding. No actual client case or unsupported certification claim.
- Rollback baseline: `d1f58d623f9084df739f15d6e030f40d519e94cb`.
- Validation: scope guard, lint, build and preview checks recorded in release evidence before merge.

## 2026-10-25 — Linear-block PP office carpet tile product

- Added one owner-requested standalone product, visible category entry and office-planning reference link. Existing product records and URLs are preserved.
- Reuses EvidenceProductPage with optional source note and resource supplement; existing invocations are unchanged. Four main plus three detail images are edited appearance concepts, not customer or performance evidence.
- Supplier-reference PP, PVC backing, 50×50 cm format, 520 g/m² pile weight, 4.0±0.5 mm pile height, approximately 6.0 mm thickness and 20 tiles / 5 m² packing are qualified pending quoted-SKU/sample approval. No washable, certification, numeric price or stock claim. FOB price is Request a project quotation; port is tianjingang.
- Exact Alibaba listing and technical table were read after owner-authorized CAPTCHA interaction. Conflicting pile-construction labels are disclosed; no third-party certificate reuse.
- Rollback baseline: `db1081824822fed22128811868b2e4ce05b38734`. Scope, lint, build, preview and production validation are recorded before final delivery.


## 2026-10-25 — Category evidence and office buyer-source consistency

- Approved goal: publish the two scoped GEO improvements requested by the owner: existing-page discoverability and verifiable procurement answers.
- Affected URLs: `/products/carpet-tiles` and `/resources/ai-commercial-carpet-source-guide`. Rollback base: `681119361976105b229eb5d8ec8f266aca501d1e`.
- Before: the category's nylon card and CollectionPage list asserted Class 33/antistatic performance while the product page required matched reports; category-level MOQ and production windows implied shared terms. The latest 500 m² guide lacked a contextual category entry.
- After: visible cards and structured list reuse the existing product evidence summaries; three named-model examples separate supplier, catalog and design-only evidence. MOQ and timing require written model-specific confirmation. The directory and category link to the existing quantity/specification guide; the new PP product's construction stays model-specific and its edited images are labelled. No product record, route, global SEO logic, dependency, form or analytics handler is changed.
- Baseline: ops guard, lint, SEO audit, link/sitemap audit and production build passed. An initial local dependency symlink caused a Turbopack environment failure; materializing the same locked dependency files resolved it without repository configuration changes.
- Browser baseline: parent independently checked live category → new PP and older nylon product navigation, Back and Forward. Canonicals were correct; no lifecycle metadata change was made.
- Independent review: restored all existing contextual installation, maintenance, concrete, raised-floor and format-comparison links after replacing the generic decision cards; added a regression assertion for these paths.
- Verification: final ops guard, lint, SEO audit, link/sitemap audit, production build and 14 built-HTML regression checks pass. The saved live baseline fails the 5 intended improvement checks while existing route/canonical/product protections pass. Preview/production receipts will be recorded with the PR before release. Local Chromium launch is blocked by the execution environment; supported cloud-browser Preview checks are required before merge.

## 2026-10-26 — Commercial carpet packing-list and carton-label guide

- Added one answer-first B2B guide that reconciles the purchase order, carton or roll label, export packing list and shipment-release record before dispatch.
- Added contextual reverse links from the existing FOB Tianjin Port and delivery-inspection guides, forming a pre-shipment-to-arrival procurement path.
- Added one original 1200×675 procurement SVG; it is labelled as a planning diagram, not product, factory, shipment, document or client evidence.
- Trade.gov, IMO CTU and Mohawk public guidance inform the workflow. Third-party numeric limits, packing methods and product claims are not transferred to VCARPETS.
- No price, MOQ, lead time, certification, factory, product performance, form, tracking, robots, global schema, dependency, canonical or URL change.
- GSC access did not expose the VCARPETS property, and no current Semrush, Clarity or qualified-lead dataset was available; no rank, traffic, index-count or conversion claim is made.
- Rollback baseline: `d59cc6e3145ab5cd3f896052f0106b738775e824`. Research, scores, image decision, links and release plan: `ops/carpet-packing-docs-growth-20261026.md`.
- Local, Preview, CI and production validation are pending at this implementation checkpoint.
- Local Site Ops Guard, zero-warning lint, SEO/link/asset/placeholder audits, 225-page production build and focused rendered checks passed. Preview, client-side prefill, CI and production remain pending.

## 2026-10-27 — Production recovery and commercial carpet project closeout guide

- Restored the existing Vercel `carpet-website` project after the public domain and deployment returned HTTP 503 `DEPLOYMENT_PAUSED`; the same production deployment returned HTTP 200 after resume. No domain, DNS, billing, environment or deployment setting was changed.
- Added one complete answer-first English guide for commercial carpet project closeout: final product identity, accepted installation zones, product-matched maintenance file, spare inventory, open issues and responsibility owners.
- Added contextual reverse links from the existing delivery-inspection, replenishment and maintenance-planning pages, connecting pre-installation records to facilities handover and later replacement.
- Added one original 1200×675 labelled procurement SVG. It is a process diagram, not product, installation, inspection, warranty, factory or client-project evidence.
- General closeout controls were checked against GSA contract-file examples updated Mar31,2026. Commercial maintenance boundaries were checked against CRI 204/facility guidance and Interface's product-specific, facility-customized maintenance guidance. No third-party cleaning interval, warranty, product specification or service promise was transferred to VCARPETS.
- Fresh VCARPETS GSC data was unavailable: connected properties did not include `vcarpets.com`, and the alternate connector returned `payment_required`. Semrush and Clarity data were unavailable. GA4 account `544103330` (“地毯网站”) was read for two complete equal 28-day periods; the current sample was only 17 sessions/11 users and one attributable Google-organic session, so it informed page-path priority but supports no trend, ranking or qualified-inquiry claim.
- Rollback baseline: `ac8f398fd067e3f32f1d9ba73e0dad30422cca80`. Existing production HTML for the three revised pages was saved before editing. Full evidence, candidate scores, link map, dependencies and release checks: `ops/commercial-carpet-closeout-growth-20261027.md`.
- Local acceptance: 11-file Site Ops Guard and local HTTP ops verification passed; lint completed with zero errors/warnings; SEO, link/sitemap, asset and placeholder audits passed; Next.js 16.2.9 production/TypeScript build generated 225 pages. Focused checks passed for the four scoped pages, category/contact targets, new Blog sitemap entry, one H1, self-canonical, indexability, six visible/schema-matching FAQs, CTA prefill and direct SVG response. The corrected 1200×675 SVG was rendered and visually inspected. Preview, CI, PR merge and production verification remain release gates.
- PR116 application head `3825b5673aab23d5ab382f9f770513c2119a1af7`: Site Ops Guard run `40431439857` succeeded; READY Preview `dpl_DsjySFnWVwh9WCDxJwW1UtUr6i6f` passed authenticated HTTP, canonical/body/image/FAQ/schema/sitemap/reverse-link checks. Desktop visual review passed and the article CTA reached the existing contact form with product and source prefill; no lead was submitted. A true390px emulator was unavailable, so no mobile-device acceptance is claimed; shared responsive template is unchanged and wide tables retain contained horizontal scroll. This evidence-only follow-up changes no application or asset file. Exact final-head CI/Preview, production and notification receipts remain release gates.

## 2026-10-28 — Commercial carpet purchase-order and production-release guide

- Added one complete answer-first English guide connecting approved sample/quotation records to a controlled carpet purchase order, exception log and authorized production-release revision.
- Added contextual reverse links from sample approval, quote comparison and packing/label guides, plus a project/source-prefilled inquiry path using the existing contact form.
- Added one original 1200×675 labelled procurement SVG. It is a workflow diagram, not a PO, product sample, production record, contract, factory or client-project document.
- Trade.gov, Acquisition.gov and ICC sources support general transaction, quantity/date and named-port controls. Government procurement wording is used only as a control example; no external product specification, commercial term or private-contract rule is transferred to VCARPETS.
- Current VCARPETS GSC/Bing data was unavailable because the relevant connected property was absent and the alternate connector returned `payment_required`; no current ranking, query or index-count claim is made. No Semrush account was connected. GA4 account `544103330` was read for two complete equal 28-day periods; the current sample was only 20 sessions/13 active users with two quote-form clicks and one WhatsApp click, without a form-success or qualified-lead event.
- Rollback baseline: `da0e0ccb6d92af18f0086583e31893ebccf3717b`. Existing production HTML for the three revised pages was saved before editing. Full evidence, scores, link map, image decision and release plan: `ops/commercial-carpet-purchase-order-growth-20261028.md`.
- Local Site Ops Guard, zero-warning lint, SEO/link/asset/placeholder audits and the 225-page production build passed. Focused local HTTP checks passed for the article, three reverse-link pages, products, contact, Blog sitemap and SVG; H1, canonical, indexability, answer/source content, image, CTA query, reverse links and six visible/schema-matching FAQs were verified. The rendered 1200×675 SVG was visually corrected and inspected. Preview, CI, production and index-notification receipts remain release gates.
- PR117 application head `a62b914b472dc5c6628b96297636935e6cf4110e`: Site Ops Guard run `40613905239` succeeded; READY Preview `dpl_6UEqykSYLkr6XZFTb33cejBUoSxs` passed authenticated HTTP, canonical/body/image/FAQ/schema/sitemap/reverse-link checks. Desktop visual review passed, and the article CTA reached the existing contact form with product and source prefill; no lead was submitted. A true mobile emulator was unavailable, so no mobile-device acceptance is claimed. This evidence-only follow-up changes no application or asset file; exact final-head CI/Preview, production and notification receipts remain release gates.

## 2026-10-28 — Carpet shedding inspection (preview preparation)
- Adds original article, four labelled illustrations, related product and quotation links.
- Reddit questions and CRI guidance inform the evidence checklist; no remote diagnosis or warranty promises.
- Rollback baseline: f83af39f0de28cc43aa05ff59635ae2ae8c22c3c. Tests and Preview pending; not yet published.

## 2026-10-29 — Commercial carpet warranty-claim documentation guide candidate

- Start from production/main `bba21a020f4044bebad07f2b53bc622c85348d4a`; preserve PR117 purchase-order controls and PR118 shedding guide.
- Add one answer-first B2B guide that connects written terms, exact order/product identity, affected-zone evidence, installation and maintenance records, intervention history, notice route and requested outcome. It does not create a warranty, diagnosis, coverage or remedy.
- Add contextual reverse links from the shedding, project-closeout and supplier-verification guides plus one product/source-prefilled inquiry path using the existing form.
- Add one exact 1200×675 SVG planning diagram; it is not a warranty, defect photo, inspection, remedy or client-project record.
- CRI installation/maintenance guidance and one Interface product-specific warranty example inform the evidence controls. No third-party duration, threshold, exclusion, remedy, maintenance interval or product claim is transferred to VCARPETS.
- PR118 production was verified at `dpl_DtdBchPWuQPBnw4AS9mpjNgFihz9`. Its IndexNow workflow `40709000637` sent no live request because the release manifest had no changed URL; today's manifest includes that still-new canonical once with today's new canonical.
- Current VCARPETS GSC and Semrush data are unavailable. GA4 2026-09-30 to 2026-10-27 is only 22 sessions/14 active users, two quote clicks and one WhatsApp click; no traffic, ranking, conversion or qualified-lead gain is claimed.
- The live site contains broad manufacturer/factory identity claims plus founding year and workforce fields across a large source scope. The owner instruction requires evidence before claiming an owned factory; a dedicated evidence/identity remediation plan is recorded but not bundled into this content release.
- Rollback baseline: `bba21a020f4044bebad07f2b53bc622c85348d4a`. Full evidence, scores, link map, image decision and release plan: `ops/commercial-carpet-warranty-claim-growth-20261029.md`. Local, Preview, CI, production and notification receipts remain release gates.
- Local Site Ops Guard, zero-warning lint, SEO/link/asset/placeholder audits and the 225-page production build passed. Focused local HTTP checks passed for the article, three reverse-link pages, contact route, Blog sitemap and SVG; one H1, title, canonical, indexability, direct answer, CTA query, six visible/schema-matching FAQs and exact 1200×675 dimensions were verified. The SVG was rendered and visually inspected. Preview, exact-head CI, production and notification receipts remain release gates.

## 2026-10-29 — PP cloud and geometric carpet-tile product
- Added one standalone product and category record for owner-confirmed 100% PP variants: gray cloud about 6 mm; black-gray geometric 5.4 mm. Other construction values remain variant-specific and pending.
- Added seven disclosed AI-edited design illustrations, category links, sample-approval guide reverse link and hypothetical office-planning reference link; no real client installation claimed.
- FOB port: tianjingang; FOB price: Request a project quotation. No numeric Offer, availability or performance rating invented.
- Rollback base: `965f1e6425f7a190cd3ddad9f3fcab046d75003e`; live affected HTML backed up before edits. Existing conversion handlers unchanged.
- Validation: `npm run ops:check`, `npm run lint`, full `npm run build`, local `npm run ops:verify -- --origin=http://127.0.0.1:3130` passed. Static checks confirm one H1, self-canonical, Product/Breadcrumb/FAQ JSON-LD and seven distinct assets. Preview and independent QA remain required before production merge.
- Independent mobile/desktop visual QA passed. Corrected only the new product and changed carpet-tile category lastmod to 2026-10-29 in both sitemap data maps; no global date refresh.
