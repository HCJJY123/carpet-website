# Commercial carpet packing documents growth work — 2026-10-26

## Decision

Publish one new English B2B guide at `/blog/commercial-carpet-packing-list-carton-label-checklist` and add contextual entry links from the existing FOB and delivery-inspection guides. The page owns the pre-shipment intent: reconciling the purchase order, physical carton/roll identity, packing list and release record. It does not duplicate the post-arrival inspection workflow or the trade-term comparison page.

## Evidence boundary

- Current production baseline: main `d59cc6e3145ab5cd3f896052f0106b738775e824`; Vercel production `dpl_BaBRdzWd7FvKUsyrJsASrXzAUSih` was READY when checked on 2026-10-26 China time.
- GSC Wizard returned `payment_required`. The Content Planner exposed seven properties for the InflatCustom organization, including the unverified legacy `https://www.vishomecarpet.com/`, but no `vcarpets.com` property. No current VCARPETS query, click, impression, CTR, position or indexing number is used.
- No current Semrush report, Clarity session or qualified-inquiry dataset was available to this run. The task uses repository/production evidence and public primary or product-specific sources.
- Research queries, accessed 2026-10-26: `commercial invoice packing list export documents buyer shipment checklist`; `IMO CTU Code cargo packing container checklist labels moisture`; `commercial carpet tile delivery cartons labels batch order problem`; `commercial carpet tile packaging cartons batch number packing list importer supplier`.
- Trade.gov states that packing lists itemize package contents, weights and measurements and are used by freight forwarders and customs officials. The commercial invoice serves a different commercial/customs role.
- The IMO/ILO/UNECE CTU Code identifies internal humidity/condensation as a cargo risk that can damage cardboard and cargo. The guide does not turn this into a universal packing prescription.
- Mohawk Group's public carpet-tile instructions show carton pack information and colour/dye-lot identity as carpet-specific controls. Its numeric storage conditions and proprietary instructions are not transferred to VCARPETS products.
- One current Reddit flooring discussion about mixed lots is retained only as a buyer-problem signal. It is not search volume, trend evidence or a VCARPETS performance claim.

## Candidate priority score

Each dimension is 0–3: core-product relevance, B2B intent, evidence strength, site gap, fact readiness and inquiry value. The total is a release priority, not a traffic forecast.

| Candidate | Product | Page decision | Rel. | Intent | Evidence | Gap | Ready | Inquiry | Total | Decision |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| Packing list and carton-label approval | Carpet tile, broadloom, custom carpet | New buyer guide | 3 | 3 | 3 | 3 | 3 | 3 | 18 | Publish |
| Connect FOB and arrival controls | Cross-product | Internal links on two existing guides | 3 | 3 | 3 | 3 | 3 | 3 | 18 | Implement |
| Container-loading quantity calculator | Cross-product | Tool | 3 | 3 | 2 | 3 | 1 | 3 | 15 | Hold: actual pack/CBM data varies by SKU |
| Hotel threshold and transition planning | Hospitality | Guide | 3 | 2 | 2 | 3 | 1 | 2 | 13 | Hold: needs transition profiles and drawings |
| Australia carpet-tile CTR revision | Carpet tile | Existing market page | 3 | 3 | 1 | 2 | 3 | 2 | 14 | Hold until fresh GSC query/page data is available |

## Buyer path

`FOB quotation guide → packing-list/carton-label approval → delivery inspection/site storage → contact form`

The new contact URL pre-fills `Commercial carpet packing-list and carton-label review` and the source page. It requests application, area/quantity, product or design reference, destination, project timing and packing/label requirements. Existing form behavior, email, WhatsApp and analytics handlers are unchanged. No real inquiry will be sent during QA.

## Content and image decisions

- Primary keyword: `commercial carpet packing list`.
- Related topics: carpet tile carton labels, commercial carpet shipping marks, carpet export packing checklist, batch labels and shipment documents.
- New SVG: `commercial-carpet-packing-list-carton-label-workflow.svg`, 1200×675. It is a precise buyer workflow, not a product, factory, loaded-container, certificate, shipping-document or client-project image.
- No generated photograph is needed. Exact documents and carpet batches require real order evidence; a synthetic photograph would weaken trust.

## Verification plan

1. Run Site Ops Guard, ESLint, production build, SEO/link/asset/placeholder audits and focused article assertions.
2. Check the generated page for HTTP 200, one H1, title, self-canonical, no `noindex`, visible FAQ/FAQ JSON-LD parity, image, internal links and contact prefill.
3. Use a Vercel Preview and inspect desktop plus the narrowest supported browser view. Do not claim mobile-device testing unless an actual mobile or emulator is available.
4. Merge through PR only after required checks and Preview pass; verify production SHA/deployment and the three affected URLs.
5. Submit only the new canonical URL through the existing production IndexNow/Bing workflow. Acceptance is not indexing.

## Follow-up

- Around 7 days after publication: verify crawl/index status where access exists, links, image and contact prefill.
- Around 28 days with adequate data: review relevant GSC queries/landing-page impressions and clicks, CTA starts, successful submissions and qualified inquiries containing product, quantity/area, destination and project timing.
- If buyers repeatedly request custom labels, obtain one redacted real label/packing-list example before adding a downloadable template or making product-specific packing claims.

## Local acceptance

- Site Ops Guard passed for the 10 scoped files.
- ESLint passed with zero errors or warnings.
- SEO, link/sitemap, asset and placeholder audits passed.
- Next.js 16.2.9 production/TypeScript build passed with 225 generated pages.
- Local rendered checks passed for the new guide, the two reverse-link pages, contact destination, sitemap and SVG: HTTP 200; one H1; 55-character title; 149-character description; self-canonical; no `noindex`; visible FAQ and FAQ JSON-LD; new sitemap entry; unique keyword owner.
- The answer-first opening is 44 English words. All six FAQ answers are 34–43 words.
- The 1200×675 SVG was rasterized and visually inspected; all four record panels and the release rule are legible without overlap.
- The contact destination contains `#quote-form`; its client-side prefill must still be checked on Preview. No inquiry was submitted.
- Vercel Preview, browser review, required CI and production verification remain release gates.
