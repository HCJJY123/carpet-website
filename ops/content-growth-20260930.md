# Commercial product / application / procurement cluster

Site: https://www.vcarpets.com
Brand: VCARPETS
Entity: Tianjin Vcarpets Global Commercial Carpet Co., Ltd.
Branch: content/product-application-cluster-20260930
Rollback: e05f901b4e1ffa82b70d25cf1fe787ac3f99e743
State: Local validation passed; PR / public Preview / production gates pending. Release results are recorded in the PR timeline after each gate.

## Decision and evidence boundary

Do not create all proposed URLs. Existing product and procurement pages already own most of the intent. Use the first-priority five product themes to connect selection information, planning guidance, samples and RFQ. No GSC, GA4, search-volume or inquiry-quality data was available. This is a relevance and procurement-gap decision, not a traffic forecast.

Primary reference: https://carpet-rug.org/carpet-for-business/finding-the-right-carpet/ (accessed 2026-09-30; publication date not established). Its facility-first selection framework considers use conditions and construction. It does not certify VCARPETS products. The previously guessed /specifying-commercial-carpet/ URL is a 404 and is not a source.

## Opportunity ranking

Scores are 0–3 for product relevance / procurement intent / evidence / current gap / available facts / RFQ value, respectively. They rank only this batch.

| Opportunity | Scores | Total | Action |
|---|---|---:|---|
| Connect nylon + 50x50 tiles with fiber/backing/specification and phased-office procurement | 3/3/2/3/3/3 | 17 | Update existing product pages and guides; one differentiated fiber comparison and one planning reference |
| Connect hotel broadloom/corridor/printed products with project/sample/document decisions | 3/3/2/2/3/3 | 16 | Update three existing destinations and add one hypothetical hotel reference |
| Create a PVC-only product URL | 3/3/1/1/1/3 | 12 | Defer standalone SKU; discuss the existing construction's confirmed backing options |
| Publish completed project cases from generated visuals | 3/3/0/2/0/3 | 11 | Reject completed-project claims; use clearly hypothetical planning references |
| Publish the remaining specialty products and regional scenarios | 2/2/1/1/1/2 | 9 | Defer pending distinct intent, product records and image review |

## Exact selected image mapping

Original delivery mapping is a proposal, not permission to create duplicate URLs. The owner's no-competing-URL requirement takes precedence. Each selected image has one primary content destination; same-origin hub/OG references may reuse its own thumbnail. No image is substituted as evidence of an actual supplied project.

| ID | Proposed target | Retained / created destination | Decision |
|---|---|---|---|
| P01 | /products/commercial-nylon-carpet-tiles | /products/carpet-tiles/nylon-office-carpet-tile | Retain nylon product intent |
| P03 | /products/50x50-pvc-backing-carpet-tiles | /products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles | Backing option, not a new verified PVC SKU |
| P05 | /products/hotel-wall-to-wall-carpet | /hotel-carpet | Existing commercial hospitality landing page |
| P06 | /products/hotel-corridor-carpet | /products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet | Existing corridor SKU; visual explicitly not that SKU's photograph |
| P08 | /products/custom-printed-commercial-carpet | /products/wall-to-wall/3d-printed-hotel-carpet | Existing custom printed product intent |
| C01 corridor visual only | /projects/hotel-wall-to-wall-carpet-project-oceania | Same URL (new) | Hypothetical Oceania planning scope, not a verified location |
| C03 | /projects/office-carpet-tile-renovation | Same URL (new) | Hypothetical phased-office procurement |
| B02 | /blog/nylon-vs-polyester-vs-polypropylene-carpet-tiles | Same URL (new) | Fiber comparison; polyester supply not claimed |
| B03 | /blog/pvc-vs-bitumen-vs-pe-carpet-tile-backing | /blog/commercial-carpet-tile-backing-comparison-guide | Expand PVC within existing backing comparison |
| B04 | /blog/how-to-specify-50x50-carpet-tiles | /blog/commercial-carpet-tile-specification-checklist-b2b-buyers | Expand existing specification checklist |
| B09 | /blog/commercial-carpet-moq-explained | /blog/commercial-carpet-tile-moq-sample-trial-project-guide | Expand existing MOQ / sample / trial guide |
| B16 | /blog/how-to-prepare-commercial-carpet-rfq | /blog/commercial-carpet-tile-rfq-checklist-b2b-buyers | Expand existing RFQ checklist |

## Image QA and delivery

- All 43 source WebPs were checked against manifest SHA-256, byte sizes and intrinsic dimensions in the prior review; corrected dimension-field handling produced zero failures.
- Contact sheets and all 12 selected full-resolution assets were inspected with an image viewing tool. No obvious named client, watermark or readable personal details observed. This is visual screening, not a guarantee of pixel-perfect realism or a human certification.
- Accio's status remains PENDING_HUMAN_REVIEW; do not rewrite or publish the original manifest. Its filenames/alt proposals cannot prove material chemistry, module dimensions or actual installation.
- Use natural illustration alt text. Correct P03's unproven PVC/50cm assertion; B02 cannot identify fiber chemistry visually. Public captions explicitly identify generated illustrations.
- Copy selected WebPs byte-for-byte with SHA-256-derived filenames under public/images/optimized/content-growth-20260929. Original PNG masters and delivery documents remain outside the repo/public site.
- Local rendered-image inspection discovered the global Next image optimizer is disabled. Reuse the established responsive-image manifest with scoped 480/768/1200/1600px AVIF derivatives and WebP fallback (never wider than the source), not a global configuration change. Preserve native image ratio. Priority only on actual page heroes; hub images lazy-load. No new dependency or image pipeline. The 12 source originals produce 44 AVIF and 44 WebP responsive derivatives.
- Source sizes above the preferred 200KB hero budget are retained to preserve fiber detail; check actual responsive transfers before release. Do not imply compression improvement from source filesize alone.
- Remaining 31 images deferred, including unused C01 supporting visuals and unsupported product/market themes. Existing sample-approval article imagery remains untouched.

## Identity and privacy

- Source/public text identity search found no Guyang, Mufeng, Baizhe or Visfurn identity residues. Legacy VISHOME domain strings in the host-migration proxy are redirects, not current company identity; preserve them.
- Text extracted from all seven public/downloads PDFs had no listed old-identity matches. This is a text check, not an OCR or pixel audit of embedded logos.
- New references contain no clients, hotels, contact details, order IDs, quotes or outcomes. No real inquiry is submitted, no lead API or analytics configuration changes.
- Existing product tables include legacy numeric commercial terms and performance claims. They were not independently authenticated in this batch. No new certification, performance value, price, MOQ or timing is invented; request exact-construction documents before approval.

## Discovery and conversion

New URL ownership is recorded in keyword-map.csv. Projects hub links to both references; nylon/50x50 pages and four updated guides link to the office reference and comparison. Hotel/corridor/printed pages link to the hotel reference, whose product/document/sample links close the loop. Existing blog collection and generated blog sitemap expose the comparison. Existing root sitemap scanner discovers the two static reference routes; the project sub-sitemap explicitly includes them.

Use the existing static-route metadata dictionary to give the new planning references and changed hotel/projects/blog hubs the actual 2026-09-30 content-review date, rather than the legacy default 2026-08-06. No sitemap generation architecture is replaced.

Extend the existing runtime guard's critical-page list to include all 12 primary content destinations and their visible illustration/planning disclosures. The unchanged Projects hub was already a critical page. This enables the existing GitHub public-Preview verification workflow to check the whole affected page cluster, without replacing CI or lowering any gate.

Use /contact?product=...#quote-form and /request-sample-box. Do not add a second form, transmit personal data, or imply installed-area quantities are confirmed order quantities.

## Validation ledger

Passed: ops scope guard; full TypeScript/production build; lint with zero errors and the one existing ProductImage.tsx no-img warning; source SEO/link/asset audits; local ops:verify. The scoped runtime audit verified 13 pages, 96 internal-link destinations, 100 public image files (12 sources + 88 derivatives), unique H1/title, self-canonical, JSON-LD parsing/structural sanity and sitemap inclusion, with zero failures. Root sitemap contains 261 URLs. Both project sub-sitemap entries and the new blog sub-sitemap entry are present.

Browser checks: all 13 pages at 390px and 1440px (26 checks), no horizontal page overflow, one H1, loaded illustrative heroes, high/eager hero priority and low/lazy hub priority. Tables scroll within their containers. Actual AVIF currentSrc selection was observed on both widths. The new planning component has one page main landmark, not a nested main. Reduce the existing hotel hero's mobile vertical padding without redesigning the page. New CTA text uses the site's dark primary color on the gold accent for readable contrast.

Delivery: mobile 480px variants are about 14–37KB; responsive WebP fallback and intrinsic dimensions are present. Highest-resolution texture-rich hero variants exceed 200KB by a justified detail-preservation exception. No field LCP/CLS/INP measurement or Lighthouse score is claimed. Global optimizer settings remain unchanged. Source images contain no EXIF, XMP or IPTC metadata. Final local release-candidate QA again passed for all 13 pages / 96 destinations / 100 images. A real click on the planning-reference CTA reached the existing contact quote-form anchor; fields and mobile layout rendered, with no form submission or private customer input.

Pending: public Preview verification, CI gates, production merge and live changed-page / sitemap / asset verification. Local reports: /tmp/vcarpets-cluster-local-qa.json and /tmp/vcarpets-cluster-responsive-qa.json. Preview and final production evidence will be appended to the release PR timeline; do not treat local evidence as production evidence.

The live indexed originals were backed up under /tmp/vcarpets-content-growth-20261001 before content edits. Release remains feature branch → PR → successful checks + public Preview → authorized merge → production verification. Update this ledger with actual evidence, never treat local checks as production results.
