import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const ROOT = process.cwd();
const TODAY = "2026-08-06";

function loadTs(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;
  const compiledModule = { exports: {} };
  const sandboxRequire = (name) => {
    throw new Error(`Unsupported require while loading ${relativePath}: ${name}`);
  };
  vm.runInNewContext(output, { exports: compiledModule.exports, module: compiledModule, require: sandboxRequire, console }, { filename: relativePath });
  return compiledModule.exports;
}

function ensureDir(relativePath) {
  fs.mkdirSync(path.join(ROOT, relativePath), { recursive: true });
}

function csvEscape(value) {
  const text = String(value ?? "").replace(/\r?\n/g, " ").trim();
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function writeCsv(relativePath, rows) {
  const headers = Object.keys(rows[0] ?? {});
  const body = [headers.join(","), ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","))].join("\n");
  fs.writeFileSync(path.join(ROOT, relativePath), `${body}\n`);
}

function writeText(relativePath, content) {
  fs.writeFileSync(path.join(ROOT, relativePath), content.trimStart());
}

const { brandInfo, products, productCategories, caseStudies } = loadTs("src/lib/data.ts");
const { caseSeoProfiles, projectPath } = loadTs("src/lib/case-seo.ts");

const downloads = fs.readdirSync(path.join(ROOT, "public/downloads"))
  .filter((file) => file.toLowerCase().endsWith(".pdf"))
  .sort();

const appPages = fs.readdirSync(path.join(ROOT, "src/app"), { recursive: true })
  .filter((file) => file.endsWith("page.tsx"));

const productRows = products.map((product) => ({
  product_id: product.id,
  product_name: product.name,
  category: product.category,
  url: `${brandInfo.url}${product.category ? `/products/${product.category}/${product.id}` : ""}`,
  image: product.image,
  gallery_count: product.gallery?.length ?? 0,
  material: product.spec?.material ?? "CONFIRM_PRODUCT_MATERIAL",
  size: product.spec?.size ?? "CONFIRM_PRODUCT_SIZE",
  moq_sample: product.moqTiers?.sample ?? "CONFIRM_SAMPLE_MOQ",
  moq_trial_order: product.moqTiers?.trialOrder ?? "CONFIRM_TRIAL_ORDER_MOQ",
  moq_project: product.moqTiers?.project ?? product.moq ?? "CONFIRM_PROJECT_MOQ",
  lead_time: product.leadTime ?? "CONFIRM_PRODUCTION_LEAD_TIME",
  fob_price_display: product.fobPrice?.display ?? "CONFIRM_PRICE_OR_KEEP_QUOTATION_REQUIRED",
  availability: product.availability ?? "preorder",
  has_product_schema_source: "yes",
  backlink_asset_status: (product.gallery?.length ?? 0) >= 3 ? "usable_for_submission_pack" : "needs_more_images",
}));

const projectRows = caseStudies.map((project) => {
  const profile = caseSeoProfiles[project.id] ?? {};
  const recommendedProducts = project.recommendedProductIds?.join("; ") || "CONFIRM_PRODUCTS_USED";
  return {
    project_id: project.id,
    route_slug: profile.slug ?? project.id,
    title: profile.h1 ?? project.h1 ?? project.title,
    url: `${brandInfo.url}${projectPath(project.id)}`,
    category: project.category,
    country_or_market: profile.decisionFacts?.find((item) => /country|market|scale|application/i.test(item.label))?.value ?? "CONFIRM_COUNTRY_OR_MARKET",
    image: profile.heroImage ?? project.image,
    sections_count: project.sections?.length ?? 0,
    gallery_count: project.gallery?.length ?? 0,
    recommended_product_ids: recommendedProducts,
    authorization_status: "use_anonymous_reference_until_client_approval",
    backlink_target_status: profile.slug ? "usable_case_reference" : "needs_seo_slug_review",
  };
});

const documentRows = downloads.map((file) => {
  const slug = file.replace(/\.pdf$/i, "");
  return {
    document_id: slug,
    title: slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" "),
    document_type: /checklist/i.test(file) ? "Checklist" : /guide/i.test(file) ? "Guide" : "PDF",
    file_url: `${brandInfo.url}/downloads/${file}`,
    html_landing_page: "CONFIRM_OR_CREATE_/resources/downloads/" + slug,
    product_category: /hotel|broadloom/i.test(file) ? "wall-to-wall" : /gold/i.test(file) ? "public-area" : /tile/i.test(file) ? "carpet-tiles" : "multiple",
    version_date: "CONFIRM_DOCUMENT_VERSION_DATE",
    backlink_asset_status: "pdf_exists_landing_page_needed",
  };
});

ensureDir("docs");
ensureDir("data");

writeCsv("data/products-master.csv", productRows);
writeCsv("data/projects-master.csv", projectRows);
writeCsv("data/documents-master.csv", documentRows);
writeCsv("data/link-prospects.csv", [{
  prospect_id: "",
  domain: "",
  organization: "",
  platform_type: "",
  country: "",
  target_audience: "",
  submission_url: "",
  contact_name: "",
  contact_email: "",
  contact_form: "",
  status: "Researching",
  priority: "",
  relevance_score: "",
  authority_score: "",
  traffic_potential: "",
  target_asset: "",
  suggested_target_url: "",
  contact_date: "",
  followup_date: "",
  response: "",
  result: "",
  live_url: "",
  anchor_text: "",
  notes: "",
}]);
writeCsv("data/outreach-log.csv", [{
  log_id: "",
  prospect_id: "",
  status: "Researching",
  owner: "manual",
  last_action_date: "",
  next_action_date: "",
  action_summary: "",
  response_summary: "",
  risk_or_blocker: "",
}]);

const categorySummary = productCategories.map((category) => `- ${category.name}: /products/${category.slug}`).join("\n");
const productCategoryCounts = productCategories.map((category) => `- ${category.name}: ${products.filter((product) => product.category === category.id).length} products`).join("\n");
const lowGalleryProducts = productRows.filter((row) => Number(row.gallery_count) < 3);

writeText("docs/backlink-readiness-audit.md", `# Vishomecarpet Backlink Readiness Audit

Last reviewed: ${TODAY}

## Scope

This audit follows the Vishomecarpet backlink-readiness specification. The objective is to make the site easier for legitimate product platforms, architects, project partners, trade media and AI/search systems to cite. It does not recommend paid link schemes, bulk directory submissions, PBNs or unverifiable claims.

## Current Repository Snapshot

- Framework: Next.js App Router.
- Product source: \`src/lib/data.ts\`.
- Project/case source: \`src/lib/data.ts\` plus SEO route profiles in \`src/lib/case-seo.ts\`.
- Blog source: \`src/lib/blog-data.ts\` plus topic modules under \`src/lib/blog-posts/\`.
- Sitemap source: \`src/app/sitemap.ts\`, plus \`/sitemap-markets.xml\` and \`/sitemap-ru.xml\`.
- Global organization/schema source: \`src/components/JsonLd.tsx\`.
- Product schema helpers: \`src/lib/seo.ts\`.
- Lead and conversion tracking: \`src/components/MarketingTracking.tsx\`, \`src/lib/tracking.ts\`, \`src/app/api/lead/route.ts\`.
- Static app page files detected: ${appPages.length}.
- Products in master data: ${products.length}.
- Case studies in master data: ${caseStudies.length}.
- Published PDF downloads: ${downloads.length}.

## Existing Product Categories

${categorySummary}

## Product Coverage

${productCategoryCounts}

Current strengths:

- Product pages already use structured product data, MOQ tiers, lead-time fields, image galleries and quote CTAs.
- Product categories are already represented in sitemap and in navigation.
- Key product groups map well to backlink targets: office carpet tiles, hospitality broadloom, public-area carpet, wool lobby rugs and gold mining carpet mats.

Main gaps before outreach:

- Only ${downloads.length} PDFs are currently published, and they are direct PDF files rather than HTML download landing pages.
- Some products still need platform-ready packs with standardized 80-word and 200-word descriptions, technical CSV, image set and document links.
- External submission platforms may request exact certifications, factory figures, annual capacity, test reports and BIM/CAD files; these must be confirmed before use.

## Case / Project Coverage

- Total case studies in source data: ${caseStudies.length}.
- Case SEO profiles detected: ${Object.keys(caseSeoProfiles).length}.
- Recommended backlink target: each project partner link should point to the exact case page, not the homepage.
- Use anonymous reference names unless the client, hotel, designer, installer or distributor has approved public naming.

## Technical SEO and Schema Readiness

Already present:

- Organization / LocalBusiness / WebSite schema in \`JsonLd\`.
- Product schema helper in \`src/lib/seo.ts\`.
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

1. \`/architects-designers\` - specification support page for architects and interior designers.
2. \`/resources/technical-library\` - filterable technical library index using verified PDFs first.
3. \`/media/press-kit\` - company facts, product categories, media-safe descriptions and contact details.
4. \`/resources/downloads/[document-slug]\` - HTML landing page for each PDF, with version date, file size, product links and download CTA.
5. \`/resources/bim-cad\` - BIM/CAD readiness page and asset manifest, without inventing Revit files.
6. \`/tools/carpet-tile-quantity-calculator\` - citation-friendly estimating tool.
7. \`/tools/broadloom-carpet-waste-calculator\` - hospitality carpet planning tool.

## Proposed Data Models

### Product Submission Pack

Fields: product_id, product_name, category, URL, short title, SEO title, 80-word description, 200-word description, verified specification fields, MOQ tiers, lead time, image set, PDF documents, platform notes, manual confirmation status.

### Project Submission Pack

Fields: project_id, public slug, country/region, anonymous public title, application area, products used, approved images, project sheet URL, client authorization status, partner target URL, suggested anchor text, manual approval note.

### Document Record

Fields: document_id, title, document type, product category, public PDF URL, HTML landing URL, version date, file size, related product, download event name, manual verification note.

## File-by-File Implementation Plan

- \`docs/backlink-readiness-audit.md\`: current audit and route/data plan.
- \`docs/missing-assets.md\`: missing and manual-confirmation assets.
- \`docs/manual-action-required.md\`: items that must be done by the user or human operator.
- \`docs/backlink-strategy.md\`: execution priority and non-spam rules.
- \`data/products-master.csv\`: source-of-truth export for product submission packs.
- \`data/projects-master.csv\`: source-of-truth export for project partner and media references.
- \`data/documents-master.csv\`: downloadable document inventory and landing-page gaps.
- \`data/link-prospects.csv\`: prospect database schema.
- \`data/outreach-log.csv\`: outreach status log schema.
- \`src/app/architects-designers/page.tsx\`: specification support landing page.
- \`src/app/resources/technical-library/page.tsx\`: technical library landing page.
- \`src/app/media/press-kit/page.tsx\`: media and platform submission starter page.
- \`src/app/sitemap.ts\`: include new public pages.
`);

writeText("docs/missing-assets.md", `# Missing Assets and Confirmation List

Last reviewed: ${TODAY}

## High-Priority Missing Assets

1. HTML landing pages for each PDF under \`/resources/downloads/[document-slug]\`.
2. Platform submission packs for the first 6-8 representative products.
3. Download-ready product technical data sheets matched to exact construction, not generic claims.
4. BIM/CAD placeholder records and a manifest; do not create inaccurate Revit files.
5. Project sheet PDFs for priority cases where images and public wording are approved.
6. A link prospect database with only relevant architecture, flooring, hospitality, office design and project partner targets.

## Product Pages Needing More Submission Images

Products with fewer than 3 gallery images in the current source data:

${lowGalleryProducts.length ? lowGalleryProducts.map((row) => `- ${row.product_name} (${row.product_id}) - gallery count: ${row.gallery_count}`).join("\n") : "- None found in current product source."}

## Business Information Requiring Manual Confirmation

- CONFIRM_LEGAL_COMPANY_NAME if any third-party platform requires exact registered entity text beyond the current website display.
- CONFIRM_FACTORY_AREA if used in external profiles.
- CONFIRM_EMPLOYEE_COUNT if used in external profiles.
- CONFIRM_ANNUAL_CAPACITY before publishing platform profiles.
- CONFIRM_CERTIFICATIONS before adding certificate links or logos.
- CONFIRM_TEST_REPORTS before naming fire, acoustic, antistatic or wear standards on submission platforms.
- CONFIRM_CLIENT_AUTHORIZATION before naming any hotel, designer, architect, contractor or distributor.
- CONFIRM_PROJECT_AREA before putting square meters into partner/media copy.
- CONFIRM_DOCUMENT_VERSION_DATE for each downloadable PDF.

## Content Claims That Must Not Be Invented

- Named hotel brands such as Marriott, Hilton, Hyatt, IHG or Accor.
- Third-party certifications, lab test results or fire ratings for a specific construction unless current documentation exists.
- Factory size, employee count, annual capacity or export-market counts outside already approved website copy.
- Customer names, project locations, installation dates or project values without permission.

## Recommended First Submission Packs

1. Office carpet tile 50x50 / nylon or PP commercial tiles.
2. Luxury hotel carpet tile 50x50cm.
3. Custom printed hotel carpet / hospitality broadloom.
4. 3D printed hotel carpet.
5. Public area heavy-duty commercial carpet.
6. Gold mining carpet mat.
7. Custom sculpted wool lobby rug.
8. Natural sisal carpet.
`);

writeText("docs/manual-action-required.md", `# Manual Action Required

Last reviewed: ${TODAY}

These actions should not be automated by Codex because they require account access, commercial confirmation, legal/brand approval or third-party review.

## Platform and Account Actions

- Register or log in to Archiproducts, Architonic, Archello, BIMobject, MaterialDistrict, SpecifiedBy, NBS Source, CADdetails, ARCAT and Sweets.
- Confirm whether each platform accepts the manufacturer, country, product category and listing budget.
- Confirm any listing fees, contract terms, required document formats and review timelines.
- Complete CAPTCHA, identity checks, business verification and email verification manually.

## Business Confirmation

- Confirm exact company legal name, factory address, public contact person, email and phone for external profiles.
- Confirm which certifications, test reports and lab documents can be publicly shared.
- Confirm whether factory area, employee count, founding year and export market figures can be used externally.
- Approve all public project references before outreach.

## Outreach Actions

- Send emails, LinkedIn messages, WhatsApp messages and platform forms manually.
- Do not send more than 3 touches to the same prospect within 90 days.
- Stop contacting immediately after refusal or unsubscribe request.
- Record all responses in \`data/outreach-log.csv\`.

## Google / Analytics Actions

- Confirm GA4, Google Ads and Search Console access in the browser.
- Verify document download and outbound click events after public pages are deployed.
- Do not claim Looker Studio or GA4 dashboards are configured unless account access was used and verified.
`);

writeText("docs/backlink-strategy.md", `# Vishomecarpet Backlink Strategy

Last reviewed: ${TODAY}

## Principle

Build linkable assets first, then request links from relevant real-world sources. Avoid any tactic that creates many low-quality links faster than the website can support with trustworthy pages.

## Priority Order

1. Real project partners: designers, contractors, installers, distributors, photographers and project owners.
2. Product/specification platforms: architecture, material, BIM/CAD and product library websites.
3. Hospitality, office design and flooring trade media.
4. Associations, exhibitions, chambers and certification/testing bodies.
5. High-quality local or industry directories only when directly relevant.

## First 30-Day Target Mix

- 8 project or supply-chain partners.
- 5 design/material product platforms.
- 4 hospitality design media targets.
- 3 office design media targets.
- 3 flooring trade media targets.
- 2 exhibition or association directories.
- 2 material or technical partners.
- 1 high-quality business directory.

## Recommended Target Pages

- Product platform listing: exact product page or category page.
- Project partner link: exact project case page.
- Editorial/media link: technical guide, case page or relevant product category.
- Association or directory: company/factory page or commercial carpet manufacturer page.
- BIM/CAD platform: future \`/resources/bim-cad\` or exact product pack.

## Anchor Text Guidance

Use natural anchors such as:

- Vishome Carpet
- commercial carpet manufacturer
- office carpet tile supplier
- hotel carpet project specification
- custom hospitality carpet manufacturer
- technical data sheet for commercial carpet

Avoid repeating the same exact-match keyword across all links.

## Rejection Rules

Reject targets that are unrelated to flooring, architecture, hospitality, office design, commercial procurement or manufacturing. Reject pages that appear automated, thin, spammed with unrelated outbound links or not indexed by Google.
`);

console.log(`Generated backlink readiness assets: ${products.length} products, ${caseStudies.length} projects, ${downloads.length} documents.`);
