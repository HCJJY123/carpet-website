# Phase 0 Repository and Website Audit

Date: 2026-08-07

Repository: `vishome-site-quality-hardening`

Production domain: `https://www.vishomecarpet.com`

Branch inspected: `feature/backlink-readiness`

Master specification reviewed: `/Users/haochangjian/Desktop/VishomeCarpet_Enterprise_Master_Specification_COMPLETE_RECONSTRUCTED.md`

Execution boundary: Phase 0 only. No Phase 1 implementation was started. No production feature code was intentionally changed during this Phase 0 audit; this report is the only Phase 0 artifact.

## 1. Executive Summary

The site is a mature Next.js App Router B2B commercial carpet website with product categories, product detail pages, cases, blogs, solution pages, country market pages, technical resources, privacy policy, lead forms, analytics hooks, AI-readable files, robots/sitemaps, and a custom responsive image pipeline.

The implementation already satisfies many foundation requirements in the Master Specification: canonical host, HTTPS production access, sitemap coverage, robots openness for major search and AI crawlers, product/category/project/blog routing, structured data helpers, contact forms, conversion tracking code, image protection, and documented backlink/resource readiness work.

The largest Phase 0 risks are governance and factual verification, not basic rendering. The current working tree contains a large direct-deployed change set that is not yet synchronized into a clean PR workflow. Several product, case, certificate, price, lead-time, project, factory, sample-shipping, and document claims still require human confirmation before aggressive SEO, GEO, AEO, backlink, feed, or AI-search publication work continues.

## 2. Evidence Reviewed

### Local repository evidence

- `package.json`
- `next.config.ts`
- `.env.example`
- `.vercel/project.json`
- `src/app/**`
- `src/components/**`
- `src/lib/**`
- `src/app/api/lead/route.ts`
- `src/app/api/visit/route.ts`
- `scripts/*.mjs`
- `public/robots.txt` equivalent generated route output via production check
- `public/llms.txt`
- `public/llms-full.txt`
- `public/ai-sources.json`
- `docs/backlink-readiness-audit.md`
- `docs/manual-action-required.md`
- `docs/deployment-checklist.md`
- `docs/site-protection-log.md`
- `visitor-intelligence/README.md`, `schema.sql`, `wrangler.toml`

### Production checks performed

The following production URLs returned HTTP 200 during Phase 0 spot checks:

- `https://www.vishomecarpet.com/`
- `https://www.vishomecarpet.com/robots.txt`
- `https://www.vishomecarpet.com/sitemap.xml`
- `https://www.vishomecarpet.com/sitemap-markets.xml`
- `https://www.vishomecarpet.com/sitemaps/products.xml`
- `https://www.vishomecarpet.com/products/wall-to-wall/singapore-casino-carpet`
- `https://www.vishomecarpet.com/sg/singapore-casino-carpet-supplier`
- `https://www.vishomecarpet.com/contact`

Observed production response examples:

- Homepage: 200, final URL unchanged, approximately 204 KB HTML.
- Product page `/products/wall-to-wall/singapore-casino-carpet`: 200, approximately 213 KB HTML.
- Singapore casino landing page: 200, approximately 166 KB HTML.
- Main sitemap: 200, 176 URLs detected.
- `sitemap-markets.xml`: 200 and includes `/sg/singapore-casino-carpet-supplier`.
- `sitemaps/products.xml`: 200 and includes `/products/wall-to-wall/singapore-casino-carpet`.

## 3. Current Implementation Inventory

### Framework and version

- Framework: Next.js App Router.
- Next.js: `16.2.9`.
- React: `19.2.4`.
- TypeScript: present.
- Styling: Tailwind CSS 4 with global CSS and component-level utility classes.

### Routing architecture

- App Router under `src/app`.
- Static routes for homepage, products, categories, solutions, resources, contact, privacy, factory, FAQ, etc.
- Dynamic routes:
  - `src/app/blog/[slug]/page.tsx`
  - `src/app/projects/[id]/page.tsx`
  - `src/app/[market]/[slug]/page.tsx`
  - `src/app/products/[line]/page.tsx`
  - `src/app/resources/downloads/[slug]/page.tsx`
  - `src/app/ru/[slug]/page.tsx`
- Explicit legacy project redirects are configured in `next.config.ts`.
- No production redirect was observed for the homepage during Phase 0 checks.

### Repository structure

- `src/app`: route implementation.
- `src/components`: shared UI, schema, tracking, contact, floating CTA, image protection, localized experience.
- `src/lib`: product, case, blog, solution, market, SEO, tracking, attribution, funnel, sitemap, WhatsApp, image manifest data.
- `public`: static images, optimized image variants, favicon/logo assets, verification files, `llms.txt`, `llms-full.txt`, `ai-sources.json`.
- `scripts`: audits, IndexNow, responsive image generation, resource/document generation.
- `docs`: backlink readiness, implementation plans, deployment checklist, manual action files, validation notes.
- `visitor-intelligence`: independent Cloudflare Worker/D1 visitor intelligence project.

### Content source

- Products: mainly `src/lib/data.ts`.
- Cases/projects: `src/lib/data.ts` plus `src/lib/case-seo.ts` profiles.
- Blogs: `src/lib/blog-data.ts` and modules under `src/lib/blog-posts`.
- Country market pages: `src/lib/country-market-pages.ts`.
- Solutions: `src/lib/solution-data.ts`.
- Product-line/application pages: `src/lib/product-line-data.ts`, `src/lib/application-data.ts`.
- CSV master/reference files exist under `data/`, but the live app primarily reads TypeScript modules.

### Metadata system

- Root metadata in `src/app/layout.tsx`.
- Many page-level `export const metadata` and `generateMetadata` implementations.
- Product schema helper functions in `src/lib/seo.ts` also supply canonical path helpers.
- Production product page check confirmed title, meta description, canonical, and JSON-LD script blocks.

### Schema system

Detected schema components/helpers:

- Global schema: `src/components/JsonLd.tsx`.
- Product schema: `productJsonLd` in `src/lib/seo.ts`.
- Breadcrumb schema: `productBreadcrumbJsonLd`, `categoryBreadcrumbJsonLd`.
- Blog/article, country market, FAQ, ItemList, WebPage and other page-specific schema appear in route/component code.

Current risk: Product schema may include `Offer` from reference FOB ranges. The Master Specification says Offer should be used only when real price, currency, availability, and terms are displayed. This requires verification for each product.

### Analytics and tracking

Code-level support detected:

- GA4 measurement ID default: `G-T2VYHXTK1F`.
- Google tag ID default: `GT-NMDDTW67`.
- Google Ads ID default: `AW-18306142236`.
- Microsoft Clarity default: `xgg9z07tsm`.
- Microsoft UET fallback ID in code: `97259674`.
- Optional GTM: `NEXT_PUBLIC_GTM_CONTAINER_ID`.
- Optional Yandex Metrica: `NEXT_PUBLIC_YANDEX_METRICA_ID`.
- Event tracking: product views, section views, high-intent sessions, lead conversions, WhatsApp/email/phone/sample events, AI referral attribution.
- Cookie consent gating is present through `CookieConsent` and `useAnalyticsConsent`.

Manual account-level verification remains required. Phase 0 code inspection cannot prove that GA4, Google Ads, Microsoft Ads, Clarity, Yandex Metrica, GTM, enhanced conversions, or conversion goals are correctly receiving data in their dashboards.

### Forms and lead system

- Contact form page exists at `/contact`.
- Lead endpoint: `src/app/api/lead/route.ts`.
- Lead route has same-origin request handling, body size checks, honeypot, field allowlist, required-field logic, email validation, rate limiting, lead ID creation, optional lead archive, and Formspree delivery.
- Formspree endpoint is present in `.env.example`.
- Visitor endpoint: `src/app/api/visit/route.ts`, forwarding to Worker/D1 style ingest with text/plain style behavior.
- File upload support is not confirmed in the live contact form.

### Image pipeline

- Next image optimization is disabled via `images.unoptimized: true`.
- Custom image component `ProductImage` uses `src/lib/responsive-image-manifest.ts` when a responsive entry exists.
- Responsive generation script: `scripts/generate-responsive-images.mjs`.
- Image cache headers are configured in `next.config.ts`, including long immutable cache for `/images/optimized/:path*`.
- Public image count is high, over 1,000 files.
- The responsive image report exists at `docs/performance/responsive-image-report.json`.

### Deployment and environment

- Vercel project file: `.vercel/project.json`.
- Project name: `carpet-website`.
- Git remote: `ssh://git@ssh.github.com:443/HCJJY123/carpet-website.git`.
- Branch inspected: `feature/backlink-readiness`.
- Production deployment process uses Vercel.
- `.env.example` exists and no real `.env` file was found tracked by the basic guard output.
- Current environment variables in Vercel were not read in Phase 0.

## 4. Automated Checks and Results

Passed:

- `npm run audit:seo`: passed for 85 page files.
- `npm run audit:links`: passed.
- `npm run audit:assets`: passed for 5 downloads and 20 page images.
- `npm run audit:placeholders`: passed for 100 app files.
- `npm run build`: already passed before this Phase 0 handoff state; the current production deploy also returned 200 for spot-checked routes.

Failed / blocked:

- `node scripts/audit-technical-seo.mjs`: blocked because it attempts to fetch local `localhost:3100`, where no local server was running. This is a missing precondition, not proof of a page defect.
- `npm run ops:check`: failed because current working tree has 84 changed files, exceeds the approved maximum of 20, includes many out-of-scope image/code files, and `CHANGELOG_OPS.md` was not updated for the change set.

## 5. Gap Inventory by Priority

### P0 Findings

#### P0-1: Current production state is ahead of clean Git governance

The current working tree contains a large direct-deployed change set from recent work. `ops:check` reports 84 changed files and fails the approved scope limit.

Impact: Future deployments from a clean remote branch may lose deployed content or bypass the intended PR/check workflow. This conflicts with Master Specification Part 25 repository governance and rollback discipline.

Required action: Before Phase 1, create a controlled PR or approved direct synchronization plan for the current production-equivalent changes, including `CHANGELOG_OPS.md`, build/audit output, and rollback notes.

#### P0-2: Production rollback point is not formally captured for the current deployed state

The latest production deployment exists in Vercel, but the repository has not yet captured a matching commit/PR in this working tree.

Impact: Rollback can still be done through Vercel, but source-code rollback and future rebuild stability are weaker.

Required action: Record the current Vercel deployment ID, previous deployment ID, current branch/commit, and exact changed-file set before Phase 1.

### P1 Findings

#### P1-1: Structured product data does not follow the recommended `/data/products/{slug}.json` source model

The Master Specification recommends structured product source records under `/data/products/{slug}.json`. Current live product data is mainly centralized in `src/lib/data.ts`.

Impact: Product fact governance, feed generation, auditability, and per-product confirmation status are harder to maintain.

Required action: Design a migration plan from TypeScript product objects to verified product records, or formally approve the existing TypeScript source model with equivalent validation fields.

#### P1-2: Product Offer schema and reference FOB pricing require verification

Product records include `fobPrice` and `productJsonLd` emits `AggregateOffer` when `fobPrice` exists. Some pages label prices as reference ranges.

Impact: Google Product snippets, Merchant/product feeds, and AI summaries may treat reference ranges as real commercial offer terms.

Required action: Confirm every displayed price range, currency, unit, availability, validity condition, and trade term before submitting product feeds or treating Offer schema as final.

#### P1-3: Case study evidence is not fully confirmed against Master Specification requirements

The Master Specification requires permission, country, building type, product, area, timeline, technical challenge, decision process, production/delivery process, QC, final result, approved images, and project owner.

Impact: Case pages can help SEO/GEO/AEO, but unverified cases or AI-generated images presented as real evidence could damage trust and violate the non-negotiable rules.

Required action: Audit each case for `CONFIRM_CASE_PERMISSION`, `CONFIRM_PROJECT_OWNER`, `CONFIRM_APPROVED_IMAGES`, `CONFIRM_AREA`, `CONFIRM_TIMELINE`, and `CONFIRM_FINAL_RESULT`.

#### P1-4: Certificate, testing, and compliance claims require human confirmation

Several product/category/resource areas mention fire rating, antistatic, acoustic, class, or document availability. The certification page and resource pages exist, but exact current certificates/test reports were not verified in Phase 0.

Impact: Unsupported compliance claims create legal, SEO, and buyer-trust risk.

Required action: Build a certificate/test-report register with document ID, issuer, date, product coverage, standard, expiry, public/private status, and allowed claim wording.

#### P1-5: Analytics account installation and conversion receipt are not proven from code alone

Tracking code is present, but dashboard-side verification is not included in the repository.

Impact: Lead quality optimization and paid advertising attribution may be unreliable if tags are blocked, misconfigured, or consent-gated unexpectedly.

Required action: Verify GA4, Google Ads, Microsoft UET, Clarity, Yandex Metrica, GTM, enhanced conversions, and event naming in the live browser and account dashboards.

#### P1-6: Visitor intelligence storage and retention governance needs confirmation

The independent Cloudflare Worker/D1 visitor intelligence project exists. The site has `/api/visit` forwarding logic. Environment values and D1 retention/deletion rules were not verified.

Impact: B2B visitor intelligence is useful, but IP-derived company inference has privacy and accuracy constraints.

Required action: Confirm `VISITOR_INGEST_URL`, `LEAD_INGEST_SECRET`, D1 schema in production, hash salt handling, retention period, export access, and privacy disclosure alignment.

#### P1-7: `llms.txt` and `ai-sources.json` are present but not automatically guaranteed current

The AI-readable files exist and are referenced in metadata. However, newly added or modified products/pages may not always be reflected immediately.

Impact: AI search/source maps can become stale and reduce citation readiness.

Required action: Add a Phase 1 validation step that compares live products, cases, solutions, blogs, and country pages against `llms.txt`, `llms-full.txt`, and `ai-sources.json`.

#### P1-8: International market pages risk template similarity and unsupported local claims

Country pages exist through `src/lib/country-market-pages.ts`. The Master Specification permits market expansion but prohibits doorway pages and unsupported local claims.

Impact: Large-scale country pages can help long-tail acquisition, but thin or repetitive local pages can create SEO quality risk.

Required action: For each market page, verify unique local procurement context, language quality, real product fit, no fake local stock/office/installation claims, and native-language review status.

### P2 Findings

#### P2-1: Category pages are stronger than simple grids, but systematic completeness audit is incomplete

Product category pages include explanatory sections, product grids, FAQs, price/MOQ information, and CTAs. A full line-by-line comparison against the category standard was not completed in Phase 0.

Required action: Score each category page against Part 7: definition, applications, variants, fiber/material, backing, construction, decision matrix, related products, solutions, projects, guides, FAQ, CTA, CollectionPage schema, ItemList schema.

#### P2-2: Product pages vary in depth and schema style

Several product pages have custom page files, while product facts are in shared data. Some newer pages are more AEO/AI-ready than older ones.

Required action: Create a product-page completeness matrix against Part 8 for every product.

#### P2-3: Resource/download system exists but document versioning needs stronger governance

There are 5 published downloads and HTML download landing routes. Existing docs already list `CONFIRM_DOCUMENT_VERSION` and `CONFIRM_DOCUMENT_ISSUE_DATE`.

Required action: Add visible version/date/file-size/source status to every document landing page and maintain a document register.

#### P2-4: Performance evidence is partial

Images have responsive variants and cache headers. Production HTML for important pages is still roughly 166-213 KB. No Lighthouse/Core Web Vitals lab report was produced in Phase 0.

Required action: Run Lighthouse/PageSpeed for homepage, category, product, case, blog, contact, and market page templates; record LCP/INP/CLS and image payload opportunities.

#### P2-5: Accessibility evidence is partial

Semantic pages and alt text are widely present, but there is no full axe/accessibility report in Phase 0.

Required action: Run automated accessibility checks and manual keyboard/mobile checks for navigation, floating CTAs, language widget, gallery, forms, and accordions.

#### P2-6: Brand naming is still mixed across older files

The site uses `Vishome`, `VISHOME`, and `Vishomecarpet` in different contexts. Some may be intentional, but the user recently requested uniform `Vishomecarpet` for new casino-related work.

Required action: Define canonical display rules: legal entity, brand, short brand, product brand, schema brand, logo text, and market-page wording.

#### P2-7: Contact and quote forms need CRM/backup clarity

Lead delivery uses Formspree and optional archive/ingest. It is not yet clear whether every production lead is stored in a durable owned database when third-party delivery fails.

Required action: Confirm production lead backup path, email delivery tests, spam handling, export format, and owner notification process.

### P3 Findings

#### P3-1: Documentation is broad but scattered

The repository has many docs: backlink audit, missing assets, manual actions, deployment checklist, URL inventory, SEO validation, and ops logs.

Required action: Create a single docs index mapping operational documents to owners and update cadence.

#### P3-2: Tooling can be made easier to run safely

The technical SEO audit requires a local server at a fixed port. Phase 0 encountered a precondition failure.

Required action: Add a wrapper script that starts a local preview server, waits for readiness, runs HTTP checks, then shuts down.

#### P3-3: AI-search monitoring remains manual

The Master Specification requires AI prompt observation and monitoring. Templates exist, but no active automated monitor was verified.

Required action: Maintain a monthly AI answer observation sheet for ChatGPT, Perplexity, Gemini, Copilot, Claude, and Google AI Overviews where accessible.

## 6. Missing or Conflicting Facts Requiring Human Confirmation

### Business and legal facts

- `CONFIRM_LEGAL_ENTITY_NAME`: exact English legal entity name and any Chinese registration name.
- `CONFIRM_BRAND_STYLE`: whether public brand should be `Vishomecarpet`, `Vishome Carpet`, `VISHOME`, or a scoped combination.
- `CONFIRM_FACTORY_ADDRESS`: exact public factory/office address and allowed map display wording.
- `CONFIRM_FACTORY_SCALE`: any claims such as factory area, employee count, annual capacity, lines, equipment, or export countries.
- `CONFIRM_FOUNDING_YEAR`: public claim such as `Since 2005`.
- `CONFIRM_CONTACT_PHONE_WHATSAPP`: public phone/WhatsApp number ownership and allowed regions.
- `CONFIRM_EMAIL_OWNER`: `sales@vishomecarpet.com` routing, monitoring owner, and backup mailbox.

### Product facts

- `CONFIRM_PRODUCT_PRICE_RANGES`: all FOB/reference price ranges, units, validity, and whether schema Offer can use them.
- `CONFIRM_PRODUCT_AVAILABILITY`: in-stock, made-to-order, preorder, sample availability for every product.
- `CONFIRM_PRODUCT_MOQ_TIERS`: Sample / Trial Order / Project MOQ for every product.
- `CONFIRM_PRODUCT_LEAD_TIMES`: exact lead time and conditions by construction/order quantity.
- `CONFIRM_PRODUCT_MATERIALS`: fiber/material composition for each product.
- `CONFIRM_PRODUCT_BACKING`: backing options and default backing by product.
- `CONFIRM_PRODUCT_DIMENSIONS`: roll widths, tile sizes, thickness, pile height, pile weight.
- `CONFIRM_PRODUCT_FIRE_RATING`: standard, test method, certificate date and product coverage.
- `CONFIRM_PRODUCT_ANTISTATIC_ACOUSTIC_STAIN`: any antistatic, acoustic, stain, wear, traffic class claims.
- `CONFIRM_PRODUCT_COUNTRY_OF_ORIGIN`: Product schema and feed field.
- `CONFIRM_PACKAGING`: carton/roll/pallet specs, gross weight, packing dimensions.
- `CONFIRM_SAMPLE_POLICY`: sample size, sample cost, sample lead time, courier options.
- `CONFIRM_SINGAPORE_CASINO_CARPET_FACTS`: exact construction, roll/modular format, backing, MOQ, price range, sample speed and allowed casino-related wording.

### Project and case facts

- `CONFIRM_CASE_PERMISSION` for every case page.
- `CONFIRM_PROJECT_OWNER` or approval to use anonymous reference wording.
- `CONFIRM_APPROVED_PROJECT_IMAGES` and whether any AI-generated images are illustrative only.
- `CONFIRM_CASE_COUNTRY_BUILDING_TYPE_AREA_TIMELINE`.
- `CONFIRM_CASE_PRODUCT_USED`.
- `CONFIRM_CASE_RESULTS` including any durability, cost, acoustic or timeline outcomes.
- `CONFIRM_CASE_CUSTOMER_LOGO_USE` if ever planned.

### Certificate and technical documents

- `CONFIRM_CERTIFICATE_REGISTER`.
- `CONFIRM_TEST_REPORT_ISSUER_DATE_STANDARD_PRODUCT_SCOPE`.
- `CONFIRM_DOCUMENT_VERSION` for each PDF.
- `CONFIRM_DOCUMENT_ISSUE_DATE` for each PDF.
- `CONFIRM_DOCUMENT_PUBLICATION_PERMISSION`.
- `CONFIRM_BIM_CAD_ASSET_AVAILABILITY` before claiming CAD/BIM support.

### Market and international claims

- `CONFIRM_COUNTRY_PAGE_LANGUAGE_REVIEW` for every non-English or localized market page.
- `CONFIRM_NO_LOCAL_OFFICE_STOCK_INSTALLATION_CLAIM` unless verified.
- `CONFIRM_FREIGHT_CAPABILITY_BY_MARKET`.
- `CONFIRM_MARKET_PAGE_UNIQUENESS` to avoid doorway-like repetition.
- `CONFIRM_RUSSIA_YANDEX_METRICA_AND_WEBMASTER_STATUS` if Russian market execution continues.

### Analytics, privacy and operations

- `CONFIRM_GA4_ACCOUNT_RECEIVING_EVENTS`.
- `CONFIRM_GOOGLE_ADS_CONVERSIONS`.
- `CONFIRM_MICROSOFT_UET_TAG_STATUS`.
- `CONFIRM_CLARITY_STATUS`.
- `CONFIRM_YANDEX_METRICA_STATUS`.
- `CONFIRM_GTM_CONTAINER_STATUS`.
- `CONFIRM_ENHANCED_CONVERSION_POLICY` for hashed email/phone handling.
- `CONFIRM_VISITOR_D1_RETENTION_POLICY`.
- `CONFIRM_PRIVACY_POLICY_COVERS_VISITOR_INTELLIGENCE`.
- `CONFIRM_LEAD_STORAGE_BACKUP`.

## 7. Backup and Rollback Procedures

### Before any Phase 1 work

1. Record current branch and commit:
   - Branch: `feature/backlink-readiness`.
   - Recent commit inspected: `0d6bbf0 chore: rerun required guard`.
2. Export current working tree diff:
   - `git diff > backups/YYYY-MM-DD-current-working-tree.diff`
   - `git diff --stat > backups/YYYY-MM-DD-current-working-tree-stat.txt`
   - `git status --short > backups/YYYY-MM-DD-git-status.txt`
3. Record untracked files:
   - `git ls-files --others --exclude-standard > backups/YYYY-MM-DD-untracked-files.txt`
4. Record current production deployment:
   - Vercel deployment URL observed previously: `https://carpet-website-mdsx3hjsy-mike123-s-projects.vercel.app`.
   - Vercel deployment ID observed previously: `dpl_3HyRcLgSRXTnie26XCzLpTrhxfxE`.
   - Confirm latest production deployment again in Vercel dashboard before rollback-sensitive work.
5. Run and save validation:
   - `npm run build`
   - `npm run audit:seo`
   - `npm run audit:links`
   - `npm run audit:assets`
   - `npm run audit:placeholders`
   - `npm run ops:check` after scope/changelog are corrected.

### Rollback options

#### Vercel production rollback

Use when the live site is broken or leads/search pages are impacted.

1. Open the Vercel project `carpet-website`.
2. Find the previous known-good production deployment.
3. Promote/rollback to that deployment.
4. Verify key URLs: homepage, products, contact, robots, sitemap, affected route.
5. Record incident in `docs/site-protection-log.md` or an incident report.

#### Git rollback through PR

Use when the code change is already committed/merged.

1. Create a revert branch.
2. Revert the problematic commit or merge commit.
3. Run build and audits.
4. Open PR with rollback reason and affected URLs.
5. Deploy after approval.

#### Working-tree rollback

Use only before committing current local changes.

1. Do not run destructive commands without explicit human approval.
2. Prefer backing up diffs first.
3. Revert only the specific files in scope.
4. Never remove user-provided images or recent deployed assets unless the rollback target is explicitly approved.

## 8. Recommended Phase 1 Gate

Do not begin Phase 1 until all of the following are explicitly approved:

- Decide whether to sync the current deployed work into GitHub through PR or approved direct commit.
- Resolve or formally waive the current `ops:check` failure.
- Confirm brand naming rules.
- Confirm product price/availability/schema policy.
- Confirm case evidence policy.
- Confirm analytics/dashboard access and privacy boundaries.
- Confirm the first Phase 1 workstream and maximum file scope.

## 9. Stop Point

Phase 0 is complete after this audit report is reviewed. Await explicit human approval before starting Phase 1.
