# VCARPETS FOB Tianjin Port buyer-guide growth record — 2026-10-13

## 1. Scope and evidence boundary

- Site: https://www.vcarpets.com
- Brand/entity: VCARPETS / Tianjin Vcarpets Global Commercial Carpet Co., Ltd.
- Repository baseline: `f0765d7b25ec22ba8173d3051f761bb578bcdc31`
- Production baseline observed through Vercel: READY deployment `dpl_2VzBLs7B3H96wvZX9hMTF37bGq6u`, main `f0765d7`.
- Current remote history reviewed: PR72, PR73 and PR74 were already merged and deployed. Open PR71 and PR19 are unrelated and excluded.
- Search Console connector check on 2026-10-13: no readable VCARPETS property was available. No new GSC performance or indexing figure is claimed.
- Live contact HTML was backed up before editing. It returned HTTP 200 and contained both unsupported statements: “FOB or DAP basis” and “shipped globally within 3-5 days.”
- The future article URL returned HTTP 404 before this change, confirming that it is new rather than a duplicate route.

This work uses owner-confirmed facts only: bulk business is FOB Tianjin Port; sample type, fee, courier charge and time are project-specific. It does not claim a VCARPETS-owned factory, DAP supply, a fixed sample dispatch time, a freight booking, customs outcome, product certification or production promise.

## 2. Focused content map

| URL | Type | Buyer/intent | Current state before work | Gap/action |
|---|---|---|---|---|
| `/contact` | Transactional | B2B buyer requesting a project quote | Live, but commercial-copy conflicts | C: correct trade/sample/factory wording and link to explanation; preserve form |
| `/blog/commercial-carpet-fob-tianjin-port-buyer-checklist` | Commercial buying guide | Importer, dealer, contractor and project buyer comparing China-supply quotes | No existing route | A: publish independent quotation-scope guide |
| `/blog/shipping-optimization-5000sqm-mumbai-14days` | Logistics guide | Buyer planning shipment timeline and packing | Existing | C later: retain shipping intent; use as supporting link, do not cannibalize |
| `/blog/commercial-carpet-sample-approval-checklist` | Approval guide | Buyer controlling samples and project sign-off | Existing and recently strengthened | Keep; link from new guide rather than duplicate |
| `/products` and product detail pages | Commercial/product | Product selection | Existing | Receive contextual links from the new guide through related products |

## 3. Candidate scoring

Each factor is scored 0–3: product relevance, B2B intent, evidence strength, website gap, fact readiness and inquiry value. These totals prioritize this cycle only; they are not traffic forecasts.

| Candidate | Action | Score | Decision |
|---|---|---:|---|
| Correct contact trade/sample claims + FOB Tianjin guide | C + A | 18/18 | Selected: removes conversion misinformation and gives buyers a comparable RFQ path |
| Complete the open carpet-tile comparison PR71 | B | 15/18 | Defer: separate stale-base PR and unresolved category price inconsistency require dedicated review |
| Expand the existing general shipping article | B | 14/18 | Defer: supporting intent already exists; a focused FOB quotation page is more distinct |
| Publish cinema TDS/performance evidence | E | 13/18 | Wait for exact construction records, applicable TDS and product photographs |
| Add another country-replacement page | F | 10/18 | Reject this cycle: no new country-specific demand or service difference was verified |

## 4. Public research used

Research date: 2026-10-13. Target market: international B2B importers, dealers, project contractors and procurement teams.

1. International Chamber of Commerce, Incoterms rules  
   https://iccwbo.org/business-solutions/incoterms-rules/  
   Finding: Incoterms rules clarify tasks, costs and risks in contracts for the sale of goods. This supports explaining scope, not a VCARPETS delivery promise.
2. International Chamber of Commerce, Incoterms 2020  
   https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/  
   Finding: Incoterms 2020 is the current ICC edition and separates cost, risk and obligation allocation. The final contract should state the chosen rule, named place/port and edition.
3. ICC Digital Library, rules for sea and inland-waterway transport  
   https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_05_RulesSea.htm?AGENT=ICC_FIN  
   Finding: FOB is not appropriate where goods are handed to the carrier before they are on board; this creates a forwarder-confirmation point for containerized cargo. The article does not unilaterally change VCARPETS’ confirmed commercial basis.
4. U.S. International Trade Administration, Know Your Incoterms  
   https://www.trade.gov/know-your-incoterms  
   Finding: official public overview lists FOB as Free on Board with a named port of loading. Used as an accessible cross-check.
5. VCARPETS production contact page  
   https://www.vcarpets.com/contact  
   Finding: the page made DAP and fixed 3–5 day global sample statements that conflict with confirmed business terms. This is first-party evidence for the corrective action.

No search volume, stable Google position, Reddit popularity, GSC movement or conversion rate is inferred from these sources.

## 5. Implemented content

### New page

- URL: `/blog/commercial-carpet-fob-tianjin-port-buyer-checklist`
- Page type: commercial buying guide
- Primary keyword: `commercial carpet FOB Tianjin Port`
- Related phrases: FOB carpet quotation; commercial carpet import from China; carpet freight quotation checklist; B2B carpet shipping terms.
- Buyer: importer, dealer, commercial flooring contractor, hotel/office/entertainment project buyer.
- Market/language/stage: international / English / supplier comparison and quotation preparation.
- SEO title: `Commercial Carpet FOB Tianjin Port Buyer Guide | VCARPETS`
- Meta description: `Use this B2B checklist to compare commercial carpet quotations on an FOB Tianjin Port basis, including product scope, packing, samples and freight handoff.`
- H1: `Commercial Carpet FOB Tianjin Port: A Buyer Checklist for Comparable Quotations`

The complete publishable body is stored in:

`src/lib/blog-posts/commercial-carpet-fob-tianjin-port-buyer-checklist.ts`

It contains:

1. direct answer and five-layer quotation table;
2. FOB versus landed-cost responsibility table;
3. named-port and forwarder-handoff guidance;
4. cargo/packing checklist;
5. paid-sample separation and Philippine B2B sample boundary;
6. copyable FOB Tianjin Port RFQ;
7. five visible buyer FAQs;
8. source and product-specific limitation disclosure.

### Contact-page corrections

- “Factory Direct Project Support” → “B2B Commercial Carpet Support.”
- “factory pricing” → “written commercial quotation.”
- “FOB or DAP basis” → project-specific confirmation of the FOB Tianjin Port quotation basis.
- Added a visible internal link to the new guide next to the quote CTA.
- “Professional Sample Boxes shipped globally within 3-5 days” → project-specific sample format, fee, courier charge and preparation time.
- Map title “VCARPETS Factory Location” → “VCARPETS Business Location.”
- Map overlay “Manufacturing Hub” → “Business Location.”

The inquiry form, email, WhatsApp, analytics, event names, form fields and submission behavior are unchanged.

## 6. Internal links and conversion path

New article outgoing links:

- commercial carpet shipping guide;
- commercial carpet sample approval checklist;
- commercial carpet sourcing directory;
- office carpet tile, hotel broadloom and cinema carpet product pages;
- scoped contact URL with product `Commercial carpet FOB Tianjin Port quotation` and source path;
- official ICC and Trade.gov references.

Reverse link:

- `/contact`, inside the “Use the Project Quote Form” card, anchor `Review the FOB Tianjin Port buyer checklist`.

Quote inputs requested in visible article text:

- company/project and application;
- destination country and city;
- product/construction or reference;
- area/quantity and pricing unit;
- sample purpose and approval deadline;
- required documents;
- packing and cargo data;
- named FOB point and target milestones.

## 7. Image decision

No new generation is needed. Two existing 1200×675 WebP logistics illustrations are reused:

- `/images/blog-series/blog-6/Blog_6_Commercial_Carpet_Shipping_v2.webp`
- `/images/blog-series/blog-6/Blog_6_Shipping_Route_Packaging_v2.webp`

Both were visually reviewed. They are relevant to export planning, already optimized at about 117 KB and 101 KB, and now carry explicit captions that they are not evidence of a VCARPETS factory, product batch, stock, packing method or customer shipment.

## 8. Validation and release status

Status at record creation: code modified locally on branch `content/fob-tianjin-buyer-guide-20261013`; production remains main `f0765d7`.

Required gates before merge:

- operations scope and diff checks;
- lint, TypeScript and production build;
- SEO, internal-link, placeholder and asset audits;
- Preview HTTP/metadata/H1/canonical/robots/sitemap checks;
- desktop and narrow-layout visual review;
- contact copy and new-guide link;
- scoped RFQ product/source prefill without a real submission;
- exact-head CI and READY Vercel Preview.

Only the genuinely new canonical article URL belongs in the scoped IndexNow manifest. A successful notification will mean accepted for processing, not indexed. The updated existing contact page is not manually resubmitted.

## 9. Follow-up measurements

- Approximately 7 days after production: HTTP/canonical/sitemap, crawl/index status when a VCARPETS Search Console session is available, and contact-page usability.
- Approximately 28 days after production, subject to enough data: queries and clicks related to FOB carpet quotations/import planning; landing-page engagement; quote-form starts/submissions from the guide; qualified inquiry match by product, project, destination and next-step readiness.
- Next content action: review whether the older general shipping article needs a short link to this quotation guide, without changing its logistics-planning keyword ownership.
