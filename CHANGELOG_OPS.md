# Site Operations Changelog

This file is append-only. Do not delete or rewrite historical entries.

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

**Country application expansion further continued:** Added Serbia and Belarus office carpet tile pages plus Slovenia and Georgia hotel carpet pages, then refreshed `keyword-map.csv`, `llms.txt`, `llms-full.txt` and `ai-sources.json` so the new URLs can be reached by crawlers and AI answer engines.

**Country application expansion continued again:** Added Uzbekistan, Armenia, Kyrgyzstan and Azerbaijan hotel carpet pages, then refreshed the keyword map, AI citation map and llms files so the new market URLs are visible to crawlers and AI tools.

**Country application expansion continued once more:** Added Australia, Philippines and Mexico office carpet tile pages, then refreshed the keyword map, AI citation map and llms files so these office-market URLs can route buyer queries into the correct product and guide pages.

**Country application expansion continued yet again:** Added office carpet tile pages for Australia, Philippines and Mexico, strengthening the office application cluster and routing country-specific office queries toward the matching product, guide and quote pages.

**Country application expansion finalised for this round:** Added gold mining carpet application pages for Peru and Colombia, linked them to the mining product and field/specification resources, and refreshed the keyword map and AI citation files.

**Country application expansion extended once more:** Added office carpet tile pages for Australia, the Philippines and Mexico, expanding the office application cluster and connecting those markets to the modular office flooring product path.

**Why:** The expansion specification requires country hubs to explain who the page is for, what VCARPETS supplies, what the buyer should send for a quote, and which application and guide pages support the decision path. This also strengthens internal-link depth and AI-readable routing without creating doorway pages.

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

## 2026-08-21 `fix/gsc-indexing-cleanup-20260821`

**Type:** SEO / Indexing cleanup / Navigation

**Scope:** Cleaned up Google Search Console indexing coverage issues reported from screenshots without changing UI styling or inquiry forms.

**Changed URLs:**

- Preserved native localized URLs such as `/ru`, `/ru/hotelnyy-kovrolin`, `/fr/moquette-hotel-sur-mesure`, and similar campaign pages
- Canonicalized non-native locale-prefixed duplicates such as `/ru/factory`, `/ru/contact`, `/es/hotel-carpet`, and `/ja/contact` back to their English source URLs
- Updated internal links that still pointed at `/natural-sisal-carpet` and `/?lang=en`
- Removed `/llms.txt`, `/llms-full.txt`, and `/ai-sources.json` from the XML page sitemap while keeping the root files available for AI crawlers

**What changed:** Non-native language-prefixed paths now redirect to the canonical English path instead of serving rewritten duplicate pages with `X-Robots-Tag: noindex`. The client language layer no longer rewrites every internal link into `/locale/...` variants. Header, footer and priority route references now point to final canonical destinations instead of redirecting URLs.

**Why:** Reduce GSC noindex and redirect coverage noise caused by auto-generated translated URL duplicates and old internal links, while keeping intentional canonical handling for inquiry query URLs and preserving indexable native localized campaign pages.

**URL mapping:** No published URL was removed. Existing legacy redirects remain in place; non-native locale-prefixed duplicates now resolve to their canonical English equivalents.

**Rollback point:** Revert this branch commit if localized navigation needs to restore full translated-path persistence.

**Verification:** Run `SITE_OPS_BASE_REF=origin/main npm run ops:check`, `npm run audit:seo`, `npm run audit:links`, `npm run lint`, and `npm run build -- --webpack`; then verify sample duplicate paths, legacy redirects, sitemaps, and native localized URLs in Preview before merging.

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
## 2026-08-31 `content/hotel-carpet-procurement-documents-20260831`

**Type:** B2B buyer guide / SEO / AI-readable sources / image optimization

**Scope:** Added a hotel carpet procurement documents checklist article and six supplied illustrative WebP assets from the live `d657d14` baseline.

**Changed URLs:**

- Added `/blog/hotel-carpet-procurement-documents-checklist`

**What changed:** Added a document-first hotel carpet procurement guide covering product data, fiber and pile, backing, sample approval, fire and VOC evidence, adhesive and subfloor requirements, packing, MOQ, spare stock, delivery and RFQ fields. Added contextual links to hotel carpet, wall-to-wall, carpet tile, technical document, commercial terms, RFQ calculator and related guide pages. Registered the page in the keyword map, `ai-sources.json`, `llms.txt` and `llms-full.txt`.

**Media:** Converted six supplied PNG illustrations to WebP quality 82 under `public/images/blog-series/hotel-carpet-procurement-documents-checklist/`. The visuals are procurement workflow illustrations and are not represented as real hotel projects, client approvals, factory evidence or certification evidence.

**Why:** Improve discovery for hotel carpet technical-submittal and RFQ questions while giving search engines and AI assistants a clearly scoped, internally linked source that routes qualified buyers to verified product and inquiry pages.

**URL mapping:** New additive article URL only. No existing URL was removed, renamed or redirected.

**Rollback point:** `d657d14`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack`; then validate the article, blog listing, blog sitemap, canonical, structured data and all six image requests in Vercel Preview before merging.

## 2026-09-08 — Performance hardening

- Delayed Google Translate loading on the English site until the language switcher is opened.
- Preserved immediate translation initialization for translated routes and existing navigation behavior.
- Scope limited to `src/components/LocaleExperience.tsx` and `src/components/DeferredSiteEnhancements.tsx`; no UI styling, forms, tracking, SEO URLs, or deployment configuration changed.
- Avoided synchronous state updates when enabling deferred enhancements on high-intent pages so the existing lint guard passes without changing enhancement timing.
- Prevented the English homepage and locale redirects from issuing redundant locale-cookie deletion headers when no locale cookie exists.

## 2026-09-08 — Image delivery and release validation

- Verified the existing responsive image manifest delivers AVIF first, WebP fallback, explicit intrinsic dimensions, and mobile-aware `sizes` for the home hero and content imagery.
- Confirmed image asset and link/sitemap audits pass without changing composition or UI styling.
- Completed required operations, lint, TypeScript, and production build checks before Preview release.

## 2026-09-08 `content/uae-hotel-carpet-procurement-documents-checklist-20260908`

**Type:** UAE hotel procurement blog / SEO / AI-readable sources / image optimization

**Scope:** Added `/blog/uae-hotel-carpet-procurement-documents-checklist` from the current production baseline `cde08b8`. The guide covers Dubai and Abu Dhabi hotel procurement documents, product and backing records, fire and VOC evidence, sample approval, installation readiness, packing, delivery, spare stock and RFQ fields. Added four supplied illustrative UAE B2B visuals as optimized WebP assets. The visuals are not represented as real hotel projects, client approvals, factory evidence or certification evidence.

**Changed URLs:**

- Added `/blog/uae-hotel-carpet-procurement-documents-checklist`
- Updated `/ai-sources.json`, `/llms.txt`, `/llms-full.txt` and `keyword-map.csv`

**Media:** Converted four supplied PNG illustrations to metadata-stripped WebP quality 82 under `public/images/blog-series/uae-hotel-carpet-procurement-documents-checklist/`. The corridor/sample image uses the supplied `uae-hotel-carpet-project-sample-review.png` source and the article-specific delivery filename.

**Why:** Improve discovery for UAE hotel carpet technical-submittal and RFQ questions while routing qualified buyers to verified product, technical-document and inquiry pages.

**URL mapping:** New additive article URL only. No existing URL was removed, renamed or redirected.

**Rollback point:** `cde08b8`

**Verification:** Run `npm run ops:check`, `npm run lint`, `npm run audit:seo`, `npm run audit:links`, `npm run audit:assets` and `npm run build -- --webpack`; validate the article, blog listing, blog sitemap, canonical, structured data, AI source markers and all four image requests in Vercel Preview before PR merge.
## 2026-09-10 — UK education and sample approval visual integration

- Converted eight supplied Accio PNG assets to metadata-stripped WebP files at quality 82 for the UK education procurement and commercial sample approval content wave.
- Connected the four UK education visuals to the UK school and university procurement blog and the UK education carpet tile supplier country page with descriptive `alt` text and procurement captions.
- Connected the four sample approval visuals to the commercial carpet sample approval checklist blog with descriptive `alt` text and approval-stage captions.
- Corrected the reusable country-page procurement visual heading so it uses the current country instead of a hard-coded UAE hotel phrase.
- Preserved the existing UI styling and kept generated visuals clearly illustrative rather than customer project, factory or certification evidence.
## 2026-09-10 — Lead attribution and short-session funnel recovery

- Capture first-touch attribution before analytics consent gates external tracking, while keeping analytics and advertising events consent-controlled.
- Preserve the product or content page and funnel snapshot when a visitor clicks through to `/contact`, then recover the values at form submission if the contact route loses them.
- Record eight-second engagement in addition to longer thresholds so short, high-intent product-to-quote visits are not stored as zero-second sessions.
- Derive a stable traffic channel for campaign, paid, organic-search, referral and direct visits while retaining AI-referral classification.
- Keep server-confirmed lead conversion behavior unchanged: `generate_lead` and advertising conversion events remain after a successful `/api/lead` response.
## 2026-09-10 — AI citation map expansion

- Expanded the official AI source guide with explicit citation paths for UK education procurement, the UK education supplier page, commercial sample approval and hotel procurement documents.
- Added buyer-question wording and citation boundaries so assistants can route school, university, hotel and sample-approval requests to the most specific VCARPETS page instead of the homepage.
- Updated the source guide freshness date to September 10, 2026 without changing UI styling or making unsupported local-stock, compliance or project claims.
## 2026-09-10 — Commercial carpet tile buyer-intent routing

- Added an answer-first procurement path section to `/products/carpet-tiles` for office rolling-chair areas, hotels, education, backing and sustainability, healthcare/high traffic, and RFQ planning.
- Connected each path to the most specific product, guide, calculator or quote route so commercial search and AI referrals reach a relevant next step instead of a generic product grid.
- Kept the existing UI system, product claims and project-specific confirmation boundaries unchanged.

## 2026-09-20 — vcarpets.com domain and business email migration

- Updated the public business email to `sales@vcarpets.com` across runtime contact details, header mail links, privacy policy, AI source files, outreach records and PDF generation sources.
- Regenerated five source-managed procurement PDFs and refreshed the two legacy RFQ worksheet PDFs without changing their page paths or content structure; visible URLs and contact details now use `www.vcarpets.com` and `sales@vcarpets.com`.
- Preserved the existing `https://www.vcarpets.com` canonical, sitemap, robots, JSON-LD, Open Graph, hreflang, feed and old-host 308 logic from the migration baseline.
- Added the missing apex normalization so `vcarpets.com` also returns a path- and query-preserving 308 to `www.vcarpets.com`.
- Added a migration-only PDF refresh helper and expanded the approved change scope to cover generated downloads.

**External status:** New-domain DNS, Vercel domain attachment, HTTPS, mailbox authentication, form delivery credentials, third-party allowlists, Google Search Console, Bing Webmaster Tools and old-domain redirect availability require account-level verification. The old domain currently cannot be treated as publicly redirecting until DNS/HTTPS responds.

**Rollback point:** `391e9f9`
## 2026-09-22 — Microsoft Advertising final compliance gate

- Added the requested explicit Microsoft Personal Data disclosure to the dedicated Microsoft Advertising/UET sections of the Privacy Policy and Cookie Policy.
- Replaced the sample request's minimal policy reference with the complete adjacent submission disclosure while keeping Privacy Policy clickable and adding no checkbox.
- Scoped the final gate to production consent/UET behavior, provider/network PII inspection, mobile/desktop verification and a strict PASS/FAIL/UNVERIFIED report.

**Rollback point:** `d5d8bbb`
## 2026-09-23 — Yandex Metrica global tag (counter 111239007)

- Installed the exact owner-supplied Yandex Metrica block into the root layout `<head>` so the full counter script and noscript watch pixel appear in the served HTML of every page.
- Kept all Yandex parameters unchanged (`ssr`, `webvisor`, `clickmap`, `ecommerce:"dataLayer"`, `accurateTrackBounce`, `trackLinks`) and did not hardcode a domain.
- Removed the previous consent-gated duplicate Yandex loader from MarketingTracking to prevent a second `ym(...)` initialization once the global tag is live.

**Rollback point:** `c680b9fd2b4e487be676642239a78609f4b6b7e5`

**Note:** The global Metrica block is rendered in page source and loads before the cookie-consent gate, which differs from the existing privacy-policy wording that described Yandex Metrica as consent-gated. Policy wording was left unchanged in this change set and should be reviewed separately.

## 2026-09-23 — Yandex Webmaster site-ownership verification file

- Added the owner-supplied verification file at `public/yandex_83c276caf5355ffa.html` so Yandex Webmaster can confirm site ownership at `https://www.vcarpets.com/yandex_83c276caf5355ffa.html`.
- Static file only; the body content (`Verification: 83c276caf5355ffa`) is preserved byte-for-byte with no script, tracking, SEO or product-content changes.

**Rollback point:** `f7d61a2af44117a599503cb9f670ad90528f74b9`

## 2026-09-23 — Yandex HTTPS property ownership verification file

- Added the owner-supplied verification file at `public/yandex_9ff8e71e4e1a3e31.html` for the `https://www.vcarpets.com` Webmaster property.
- Retained the earlier verification file for the existing property; no tracking, consent, product-content, canonical, robots or sitemap behavior changed.

**Rollback point:** `01fb0663c75907ff388ee79325be48de3a7d19dd`

## 2026-09-28 — Carpet tile category supply-status clarity

- **URL:** `/products/carpet-tiles`. Production HTML backed up at `/tmp/vcarpets-growth-20260928/carpet-tiles.production.html` before editing.
- **Evidence:** All category cards displayed `In Stock / Made to Order`, although the product data marks only one carpet tile as `preorder` and contains no confirmed live stock status for the others. Hero, FAQ and evidence copy claimed eight products, while the page renders nine.
- **Change:** Show `Pre-order; confirm lead time` for the marked product and `Confirm by color & quantity` for the other cards; replace the stale count with evergreen language in the hero, FAQ and evidence copy. Prices, MOQ, links, SEO metadata, images and inquiry behavior remain unchanged. No new image is needed.
- **Preview verification:** Add a manual Vercel-origin verification input to the existing GitHub Site Ops Guard because the local network resets Preview connections. The ordinary PR guard remains unchanged; no production site behavior changes from this workflow step.
- **Status:** Code change prepared on a feature branch; production deployment and qualified-inquiry impact remain unverified.
- **Review:** After deployment, compare the next two complete 28-day periods for category-page organic landing sessions, contact-form starts, submitted leads and sales-qualified carpet tile inquiries; do not attribute changes solely to this wording.

**Rollback point:** `9884235fed3fe029252f82e22f4478617d56e347`

## 2026-09-28 — Installation planning buyer brief (local content cycle)

- **Site and scope:** VCARPETS, English B2B commercial carpet procurement. Existing `/resources/installation-guides` expanded; contextual links added on `/products/carpet-tiles` and `/products/wall-to-wall`. The unchanged inquiry destination is `/contact?resource=installation-guide#quote-form`. No new URL, product claim, installer service, image, form or tracking change. Production HTML for the three affected pages is backed up under `/tmp/vcarpets-installation-planning/`.
- **Observed gap:** The resource page previously offered four generic reminders and a document-request CTA, but no buyer/installer handoff brief. The tile concrete and site-climate articles answer narrower installation questions; the resource hub and technical library already link to documents. Strengthening the existing page avoids another overlapping Blog URL.
- **Content map (sample, not a full-site audit):**

| URL | Type / product | Buyer and intent | Status and downstream | Main gap / disposition |
| --- | --- | --- | --- | --- |
| `/products/carpet-tiles` | Category / modular tile | Fit-out buyer, product comparison | Active → product detail / contact | Add installation brief context |
| `/products/wall-to-wall` | Category / hotel broadloom | Hotel buyer, product comparison | Active → product detail / contact | Add roll-plan handoff context |
| `/resources/installation-guides` | Resource / tile and broadloom | Specifier or project manager, pre-order planning | Thin → contact | Expand existing URL, not new Blog |
| `/blog/carpet-tiles-over-concrete-installation-guide` | Guide / tile | Installer, concrete substrate questions | Active → tile products | Keep separate single-substrate detail |
| `/blog/climate-control-carpet-installation-stability-guide` | Guide / multiple | Site team, climate conditions | Active → product pages | Keep separate climate detail |
| `/resources/technical-library` | Documents / multiple | Buyer, document availability | Active → contact | Match request to construction |
| `/contact` | RFQ / multiple | Buyer, inquiry | Active; `#quote-form` exists | No form change or real test submission |

- **Priority (0–3 each; product relevance / B2B intent / demand evidence / site gap / fact readiness / inquiry value; ordering aid, not a traffic forecast):** Existing installation brief B = `3/3/2/3/2/3` (16), selected; existing maintenance resource B = `3/2/2/3/2/2` (14), later; technical-library document matching C = `3/3/1/1/2/3` (13), observe; new local-market installation page E = `2/2/0/1/1/1` (7), defer without local demand and service evidence.
- **Evidence and boundaries:** The [CRI commercial installation standards page](https://carpet-rug.org/resources/installation-standards/) and its [CRI 104 commercial PDF](https://carpet-rug.org/wp-content/uploads/2019/03/CRI-104-STANDARD-For-INSTALLATION-of-COMMERCIAL-CARPET.pdf) were accessed on 2026-09-28 UTC. CRI 104 covers product/area identification, shop drawings, substrate testing and manufacturer-specific limits; it is an industry planning reference, not evidence of VCARPETS certification or a universally applicable local requirement. Repository and live-page checks establish page structure and CTA, not search demand volume. GSC, GA4, qualified lead records and reliable Google SERP access were not available for this cycle; no ranking or conversion inference is made.
- **Content handoff:** Primary keyword `commercial carpet installation planning guide`; English informational-to-commercial intent for global project buyers. SEO title, description and visible H1 updated on the existing canonical route. Tile/broadloom decision paths, a four-role handoff checklist, buyer FAQs and scoped industry reference now lead to the existing RFQ and technical library. The form has no file upload, so the page asks buyers to describe the layout and arrange drawing exchange after a reply. Two category pages provide reverse links; the resource page links back to categories and the existing concrete/climate guides. Reuse the existing illustrative hero; no new image or Accio task is needed.
- **Validation and release gate:** `npm run ops:check`, SEO/link audits, `npm run build -- --webpack`, `git diff --check` and localhost `ops:verify` passed. Lint had only the pre-existing `ProductImage.tsx` `<img>` warning. The resource and both category pages returned direct local HTTP 200; the resource rendered one H1, self-canonical, no `noindex` and its existing Sitemap entry. Browser checks at 390px and 1440px showed no horizontal overflow; the CTA navigated to the existing `/contact?resource=installation-guide#quote-form` with a form present, without submitting an inquiry. Owner subsequently authorized release for this scope; PR checks, Vercel Preview and production verification remain required. Next review requires product-specific installation documents and, when available, actual landing-page and qualified-inquiry data before further expansion.

**Rollback point:** `77fcbb50c3c7273bffb7d79943f5bbcd35c34e0c`

## 2026-09-29 — Commercial carpet maintenance planning brief (local content cycle)

- **Site / audience / status:** VCARPETS, English for global B2B facilities and project buyers. Existing `/resources/maintenance-guides` expanded locally; two category pages provide reverse links. Status `已本地验证`, release authorized by owner on 2026-09-29; PR/Preview and production checks remain release gates. Existing production page HTML backed up at `/tmp/vcarpets-maintenance-before.html` before editing. Rollback base: `a9e0d65e6b91c22110250b5cfdb060494bebde6f`. The preceding installation brief PR #55 reached Vercel production success on 2026-09-29 CST; the guide, category pages and sitemap returned 200 and the production Site Ops Guard passed (verification recorded on PR #55).
- **Content map (sample, not a full-site audit):** `/resources/maintenance-guides` was a six-topic list and generic request CTA, now the main planning/handoff page → existing `/contact?resource=maintenance-guide#quote-form`; `/products/carpet-tiles` and `/products/wall-to-wall` are commercial category entries → maintenance planning and product pages; `/blog/commercial-space-carpet-tiles-maintenance-cost-guide` covers localized replacement economics, not the multi-format care handoff; `/resources/technical-library` is the document-request path, not a downloadable product-specific care file. Published PDFs in `public/downloads` are procurement guides and RFQ checklists, not construction-matched care instructions.
- **Priority (product relevance / B2B intent / demand evidence / site gap / fact readiness / inquiry value, each 0–3; not a traffic estimate):** B, expand existing maintenance resource `3/3/2/3/2/3` = 16, selected; C, improve technical-library document matching `3/3/1/1/2/3` = 13, observe; E, product-specific care instruction `3/3/1/3/0/3` = 13, defer pending approved documents; F, generic new cleaning Blog `2/1/1/0/2/1` = 7, duplicates existing intent. Installation planning is already addressed on the existing resource URL.
- **Evidence and bounds:** Live maintenance, category and contact pages were checked on 2026-09-29; the old maintenance page returned 200 but did not explain product/zone/method approval or spare-stock handoff. The [CRI business cleaning and maintenance resource](https://carpet-rug.org/carpet-for-business/cleaning-and-maintenance/) returned 200 on 2026-09-29 and discusses soil control, vacuuming and spot response as industry reference, not VCARPETS product requirements. The site has an existing carpet-tile lifecycle article and the published PDF inventory was reviewed. GSC, GA4, qualified lead records and reliable Google SERP access were unavailable; no demand volume, ranking or lead-quality claim is made.
- **Content handoff:** Primary keyword `commercial carpet maintenance planning guide`, informational-to-commercial intent. Existing canonical route has updated English title, description and H1, direct answer, tile/broadloom decisions, four-role handoff, buyer FAQ and the unchanged RFQ destination. It links to both categories, an existing tile replacement article, corridor guide and technical library; both categories link back. The form has no file upload, so it asks buyers to describe available documents for later exchange. Existing illustrative hero reused; no new image or Accio task required. No product-specific cleaning interval, chemical, test result, certification, warranty or service promise is published.
- **Validation and dependency:** `npm run ops:check`, `audit:seo`, `audit:links`, `npm run lint`, `npm run build -- --webpack`, `git diff --check` and local `ops:verify` passed. Lint retained only the pre-existing `ProductImage.tsx:43` image warning. The changed routes and existing contact form returned local HTTP 200; the maintenance page rendered one H1, self-canonical and no `noindex`, with the two category reverse links present. At 390px and 1440px, browser screenshots showed no horizontal overflow; mobile CTA points to the existing form. No real inquiry was submitted. Request controlled care files with version, applicable SKU/fiber/backing, equipment and chemistry limits, moisture/extraction limits, spot-response and replacement guidance, destination requirements and permission for public use. Without these, product-specific instructions remain `待资料`; this page is a planning brief only. Owner now authorized release; PR checks, Vercel Preview verification and production validation are still required.

## 2026-09-29 — Reconcile root Sitemap PR #53 with current main

- Merged latest main into the existing sitemap PR branch and retained subsequent carpet-tile, installation-planning and maintenance-planning changes in the append-only changelog. The change request remains scoped to the originally approved Sitemap fix, rather than the previous content release.
- Current production `/sitemap.xml` returned 200 with 256 entries on 2026-09-29; `/privacy-policy` returned 200, is self-canonical and not `noindex`, but is absent from that Sitemap. Production sitemap and robots responses were saved under `/tmp/vcarpets-current-sitemap53.xml` and `/tmp/vcarpets-current-robots53.txt` before reconciliation.
- The PR retains the existing root XML endpoint, adds only the indexable privacy URL, and strengthens coverage checks for the privacy, cookie and sample-request pages. No published URL, page content, canonical, crawler permission, form or tracking change. Revalidate build, Preview and URL list before any separate production merge decision.

**Rollback point:** `6c83f99f6c111caa089c5f278a7340b61f9d6bc3`

## 2026-09-29 `content/faq-rfq-sourcing-directory-20260930`

**Type:** B2B content expansion / RFQ preparation / entity consistency / internal linking

**Scope:** Expanded `/faq` into a commercial carpet procurement and RFQ knowledge hub, added the buyer-focused `/blog/commercial-carpet-sourcing-directory`, added a homepage entry, and added a local-only RFQ question builder that stores a draft in same-origin `sessionStorage` before pre-filling the existing contact form. Corrected the owner-confirmed legal entity in website metadata, visible company references, Organization/Article publisher data and AI-readable source files. No URL removals, redirects, robots, tracking, advertising, API or real inquiry submission changes.

**Content decisions:** Kept one primary FAQ URL; covered product selection, hotel procurement, samples, MOQ, pricing, logistics and documentation without inventing fixed commercial terms. Reused `/images/about/quality-control-inspection.webp` as an explicitly illustrative procurement image; no generated image or fabricated case evidence was added.

**Changed URLs:** `/faq`, `/blog/commercial-carpet-sourcing-directory`, `/` and existing pages containing the owner-confirmed company identity.

**Rollback point:** `964cdae4a78ee4043a202e08542a5152b1344433`

**Release gate:** Run Ops guard, SEO/link audits, lint, build and Preview verification. Do not merge or deploy production until the Preview pages and the existing inquiry path are checked and the owner authorizes release.

**Local verification:** Ops guard, SEO/link audits, TypeScript/webpack production build and diff check passed. ESLint returned no errors and one pre-existing `ProductImage.tsx` image warning. At 390px, `/faq` has one H1, a self-canonical URL and no document overflow; the new article has one H1, self-canonical, visible author, Article publisher with the confirmed legal name, and a scoped buyer-question builder. At 1440px, `/faq` has no document overflow. A sample RFQ draft reached the existing contact form without entering the URL; no inquiry was submitted. Local `/sitemaps/blog.xml` returned 200 and included the new article once. Production and Vercel Preview remain unverified at this stage. Legacy downloadable PDFs and historical outreach drafts still need a separate entity-name review; they are not changed in this release.

**Preview verification:** PR #57 Vercel deployment passed, as did the GitHub Site Ops Guard workflow on the exact PR commit; a second `workflow_dispatch` run (36602037965) executed `npm run ops:verify` against the public Vercel Preview and passed all configured baseline routes and sitemaps. The current workstation's connection to the Preview hostname resets, so new-page Preview HTTP and interactive behavior were checked on the local production build, not independently from this workstation. No live inquiry was sent. Owner explicitly authorized deployment in the follow-up conversation.

## 2026-10-01 — Hotel procurement document guide hero replacement

**Scope and authorization:** Owner explicitly requested replacing the single guide's blurred-person hero with the supplied unoccupied conference-table image, including production deployment through the existing PR/Preview gates. URL: `/blog/hotel-carpet-procurement-documents-checklist`. No body, title, date, route, canonical, navigation, form, tracking, legal or unrelated article changes.

**Image:** Original `酒店地毯样品评审.png`, 1672x941, 2,542,447 bytes, retained unchanged outside the public directory. New versioned `/images/optimized/hotel-procurement-hero-v2/hotel-carpet-procurement-documents-checklist-v2.webp`, 262,922 bytes (89.66% smaller). AVIF/WebP width variants: 480/768/1200/1672, never upscaled or cropped; full-width AVIF 189,010 bytes. Append-only manifest entry; all prior resources remain intact. Full composition via existing per-article `contain` and intrinsic aspect ratio; existing eager/high-priority hero handling and illustrative caption preserved.

**References:** Article hero, list/related-card image consumers, Open Graph and Article JSON-LD use the new article image field. Existing Twitter image is the global `/images/og-cover.webp`, not the old hero, so remains unchanged. Prior hero references were confined to this article's two image fields.

**Rollback:** `9c12e9902f149e83e87a785cf4fde2d4ed3149fd`. Live HTML backup and source/asset hashes under `/tmp/vcarpets-hotel-hero-v2-20261001/`. Previous PR59 local release records remain untouched in the original worktree. Validation and release results follow in the PR evidence; this entry alone is not a claim of production completion.

**Local acceptance:** Ops scope/runtime checks, SEO/link audits, diff checks and webpack production build passed. ESLint: zero errors, only the pre-existing `ProductImage.tsx:43` warning. HTTP verification: article and blog 200, 18 unique image resources 200 with exact source-byte hashes, 59 blog sitemap entries unchanged; title, description, H1, canonical, dates, article body and five body illustrations unchanged. Open Graph and Article image point to v2; Twitter retains its existing generic cover. The guide's current blog-topic cards are compact text-only, so no new thumbnail or card layout was introduced. Responsive browser checks at 375/390/768/1440 passed with loaded AVIF variants, complete composition, eager/high priority, preserved caption and no horizontal overflow or observed console warnings/errors. Screenshots under `/Users/haochangjian/Downloads/vcarpets-hotel-hero-v2-release-evidence/`. Preview/production completion must be verified separately.
