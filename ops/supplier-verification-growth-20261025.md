# Supplier verification growth work — 2026-10-25

## Evidence boundary

- Target: https://www.vcarpets.com only.
- Production baseline checked 2026-10-25: main `0ad7f69c97c93e0e57dec265f4d36cbd0cd7ede1`, Vercel production deployment `dpl_7YH412UDSumoehYpoGuaL1g1S5Wk` READY.
- The preceding release already published `/blog/commercial-carpet-tile-replenishment-dye-lots-spare-stock`. This work does not duplicate replenishment, dye-lot or spare-stock intent.
- GSC Content Planner returned seven properties for another organization and no `vcarpets.com` property. No current VCARPETS query, click, impression, CTR, country or ranking data is used. Historic Oct 3 data is not represented as current.
- No Semrush account report or current Clarity session was available in this run. Public results and repository/production content were used for demand and gap research.
- Search/research date: 2026-10-25. Queries included `commercial carpet supplier verification`, `B2B buyer verify overseas supplier company product documents`, and Reddit supplier-verification questions. No search volume or fixed ranking claim is made.

## Evidence used

1. U.S. International Trade Administration, Perform Due Diligence and Company and Partner Risk:
   - https://www.trade.gov/perform-due-diligence
   - https://www.trade.gov/company-and-partner-risk
   - Boundary: general foreign-counterparty due diligence and independent company-profile services; these sources do not verify VCARPETS.
2. U.S. Commercial Service Tips on Background Checks:
   - https://www.trade.gov/feature-article/commercial-service-tips-background-checks
   - Boundary: preliminary company existence/contact checks do not replace in-country due diligence.
3. Carpet and Rug Institute Model Specification for Commercial Carpet:
   - https://carpet-rug.org/wp-content/uploads/2019/03/Model-Specification-for-Commercial-Carpet-2018.pdf
   - Boundary: industry submittal framework; not a VCARPETS product specification.
4. Recent Reddit discussions:
   - https://www.reddit.com/r/dropship/comments/1mulcw2/heres_how_i_verify_if_a_supplier_from_china_is/
   - https://www.reddit.com/r/smallbusiness/comments/1sfizbn/how_i_verify_a_chinese_supplier_before_sending/
   - Boundary: individual buyer questions about legal names, registration, samples and document authenticity. They are demand signals, not prevalence, search volume or proof about a supplier.

## Candidate priorities

Scores are 0–3 for product relevance, B2B intent, evidence strength, site gap, factual readiness and inquiry value. They rank this run only.

| Candidate | Action / page type | Rel. | Intent | Evidence | Gap | Ready | Inquiry | Total | Decision |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| Commercial carpet supplier verification | A new cross-product buying guide | 3 | 3 | 3 | 3 | 3 | 3 | 18 | Selected |
| Clarify supplier-role wording on carpet-tile category | B/C core category trust and reverse link | 3 | 3 | 3 | 3 | 3 | 3 | 18 | Selected |
| Carpet packing and container data | B deepen FOB guide | 3 | 3 | 2 | 1 | 3 | 3 | 15 | Covered substantially by existing FOB guide; no separate URL |
| Hotel threshold and transition coordination | A hotel fit-out guide | 2 | 2 | 2 | 2 | 2 | 2 | 12 | Hold for hotel-specific drawings or recurring demand |
| Australia office tile CTR work | B market landing page | 3 | 3 | 1 | 2 | 2 | 3 | 14 | Hold until fresh GSC query/page data is available |

## Bottleneck and decision

The website has extensive product and quotation content, but the generic supplier-verification question lacks a dedicated cross-product page. Public search results also expose mixed first-party identity wording: some pages label VCARPETS as a manufacturer while the current operating brief only verifies the legal company and B2B supply role. This can reduce trust for buyers trying to connect the seller, production source, quoted product, sample, technical documents and payment beneficiary.

This release adds a complete English verification guide and changes the carpet-tile category wording to the verified B2B supplier role. It does not perform or claim an independent audit, guarantee a transaction, or rewrite every company-identity page. Wider identity claims need a separate evidence-backed review.

## Content unit

- Decision: new page; no existing generic supplier-verification URL was found. Hotel supplier selection, sample approval and sourcing directory pages have narrower or adjacent intent.
- URL: `/blog/commercial-carpet-supplier-verification-checklist-b2b-buyers`
- Type: B2B buying guide.
- Buyer: importers, distributors, contractors, hotel/office project buyers and procurement teams.
- Market/language/stage: international English; supplier shortlisting through pre-order approval.
- Primary keyword: `commercial carpet supplier verification`.
- Related: `how to verify a carpet supplier`, `commercial carpet supplier checklist`, `China carpet supplier due diligence`, `B2B carpet supplier`.
- Intent: commercial investigation / risk-controlled quotation.
- SEO title: `Commercial Carpet Supplier Verification Checklist | VCARPETS`.
- Meta description: `Verify a commercial carpet supplier before a bulk order: legal entity, supplier role, samples, TDS, test reports, quotation, payment and inspection.`
- H1: `How to Verify a Commercial Carpet Supplier Before a Bulk Order`.
- CTA: project-prefilled contact path asking for application, quantity, destination, product/construction, documents, sample purpose and dates.
- Internal links: sourcing directory, sample approval, FOB Tianjin, carpet-tile category and contact.
- Reverse link: carpet-tile category, Samples, quantity and RFQ planning section.
- Facts: Tianjin Vcarpets Global Commercial Carpet Co., Ltd. is identified as the VCARPETS B2B supplier; product evidence, samples, prices, MOQ, production time, test reports and packing remain configuration/project-specific.

## Category adjustment

- URL: `/products/carpet-tiles`
- Change `manufactures`, `manufacturer` and `factory price` wording in the category's title, description, eyebrow and two buyer-facing sentences to supplier/wholesale wording.
- Add the supplier-verification guide to the existing RFQ-planning route.
- Do not change product records, schema types, offers, ratings, forms, tracking, global identity pages or URLs.

## Image decision

Reuse existing sample-approval planning illustrations. They directly show samples and documents and already carry a non-evidence disclosure. No new image is required. The article states that the reused image is not a supplier audit, factory photo, certificate, laboratory result or completed client inspection.

## Verification plan

- TypeScript/Next build, ESLint, Site Ops Guard and SEO/link checks through existing CI.
- Vercel Preview: single H1, title, description, self-canonical, indexable HTML, visible FAQ/schema parity, image response, internal links and prefilled contact anchor.
- Desktop and mobile visual review for tables, FAQ and CTA.
- Production after required checks: verify deployment SHA, HTTP 200, article text, category wording, sitemap inclusion and contact prefill without submitting a real inquiry.
- Submit only the new article and substantively updated category through the repository's existing IndexNow/Bing workflow. HTTP acceptance will not be described as indexing.

## Observation

- 7-day: production function, crawl discovery, sitemap/IndexNow receipt, contact-prefill integrity and any support questions caused by the wording change.
- About 28 days with adequate data: supplier-verification and related commercial queries/pages, qualified contact starts, form submissions and sales-qualified inquiries where product, use, quantity/project scope, destination and contactability are present.
- GSC/GA4/Clarity events are not equivalent to valid B2B opportunities; inquiry quality needs sales-side review.
