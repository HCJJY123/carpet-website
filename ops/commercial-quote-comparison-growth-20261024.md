# Commercial carpet quote-comparison growth record — 2026-10-24

## Decision

The existing commercial carpet pricing page carried five public rows of numeric price, MOQ and lead-time claims without current product-matched quotation evidence. This is a commercial trust and inquiry-quality problem: a buyer can compare obsolete or unlike figures before the product, sales unit, approval state, packing and delivery scope are known. Preserve the indexed URL and replace the table with a supplier-quotation normalization guide.

The 274-URL audit captured on 2026-10-24 supplied the technical baseline. PR #105 already repaired its three recorded 404 links and 19 zero-inbound URLs, PR #104 revised fourteen carpet-tile product pages, and PR #107 corrected crawler-group exclusions and Organization type. This release does not repeat those completed tasks.

## Candidate priority

Scores are 0–3 for product relevance, B2B intent, evidence, site gap, factual readiness and inquiry value; the total ranks this run only.

| Candidate | Action | Score | Decision |
| --- | --- | ---: | --- |
| Existing price/MOQ/lead-time guide | B: deep update | 18/18 | Implement. Remove unsupported figures and make the page an RFQ comparison tool. |
| Commercial Terms quotation path | C: internal link and CTA | 17/18 | Implement. Add a contextual path to the guide and preserve the existing quote form. |
| Australia office carpet page with prior impressions | E: wait for current data | 14/18 | Do not revise from the short October 6 sample; fresh VCARPETS GSC data is unavailable. |
| Localized HTML language signal | E: architectural review | 13/18 | The audit flags 34 routes, while the site already uses a client-side correction. Do not change the root layout in this content release. |
| Manufacturer/factory evidence claims | E: evidence dependency | 12/18 | Inventory separately. Do not make identity or capacity claims from search snippets or inferred records. |

## Evidence and boundaries

- VCARPETS production page and Commercial Terms were fetched from Vercel deployment `dpl_3xJR5ASQErT7mSNDuXuhMdwNAA9N` on 2026-10-24; both returned HTTP 200. The article exposed the prior five-row price/MOQ/lead-time table.
- VCARPETS business facts used here: B2B supply, project-specific quotation, bulk-order basis FOB Tianjin Port, and paid-sample discussion with type, fee and timing confirmed by project.
- Carpet and Rug Institute, “Finding the Right Carpet,” accessed 2026-10-24: commercial selection depends on construction, size, backing and facility requirements. This supports comparing matched specifications before price; it does not prove VCARPETS product performance.
- International Chamber of Commerce Incoterms rules and FOB explanatory material, accessed 2026-10-24: FOB uses a named port for sea or inland-waterway transport; the exact term and handoff belong in the contract. This is trade-term guidance, not a VCARPETS logistics promise.
- Public search results show the existing VCARPETS article is discoverable, making correction more valuable than a competing new URL. Competitor numeric MOQ or lead-time claims were not transferred.
- GSC Wizard returned `payment_required`; no fresh VCARPETS clicks, impressions, ranks, countries or index status are claimed. No Semrush or Clarity session was available in this run. Reddit pricing threads were consumer/installer anecdotes and were not used as B2B product evidence.

## Implemented content

- Retain `/blog/commercial-carpet-pricing-moq-data-center-guide` and original publish date 2026-08-23; set review date 2026-10-24.
- Primary keyword: `commercial carpet price MOQ lead time`.
- Title: `Commercial Carpet Price, MOQ and Lead Time: A Quote Comparison Guide`.
- SEO title: `Commercial Carpet Price, MOQ & Lead Time | VCARPETS`.
- Replace public numeric ranges with:
  - a four-layer quotation comparison table;
  - sales-unit guidance for tile, broadloom and shaped products;
  - MOQ stage and substitution records;
  - comparable schedule milestones;
  - FOB versus landed-cost separation;
  - a normalized supplier matrix and exception log;
  - a copyable RFQ brief;
  - six long-tail FAQ answers.
- Link the guide to products, sample approval, total-cost and FOB resources, Commercial Terms and the existing project-prefilled contact form.
- Add a reverse link from `/commercial-terms` and give its quotation CTA a product and source context.

## Image decision

The prior article image path returned HTTP 404 in Preview. Replace it with the existing verified VCARPETS nylon carpet-tile product asset and label it as an example rather than evidence for every construction in the guide. No generated image is needed; no asset is deleted.

## Validation and release gates

Planned gates: exact branch scope, lint, production build, SEO/link/asset audits, FAQ visible/schema parity, one H1, self-canonical, no unexpected noindex, sitemap dates, internal targets, existing image resources, contact product/source prefill, desktop and mobile layout, required CI, Vercel Preview, PR merge and production verification. No real lead will be submitted.

After production, the two materially updated canonical URLs may be sent through the repository's automatic IndexNow/Bing workflow once. Acceptance is not indexing, ranking or inquiry evidence.

## Observation plan

- 7 days: HTTP, crawl/index state when the VCARPETS property becomes available, CTA navigation and form prefill.
- Approximately 28 days with enough data: queries around commercial carpet price, MOQ, lead time and quotation comparison; clicks to product and contact pages; form starts, successful submissions and sales-qualified project fit.
