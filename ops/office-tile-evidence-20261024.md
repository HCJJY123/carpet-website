# Office carpet tile evidence copy — 24 October 2026

## Request and scope

Continue the owner-approved competitor recommendations on the fourteen existing English carpet-tile detail routes. Retain every indexed URL. No advertising, outreach, lead submission, sitewide keyword replacement or new technical certification is authorized by this content change.

The existing server-rendered product template already supplies an opening conclusion, H2 evidence sections, comparison in the third content block and a final FAQ. This iteration improves the facts and procurement links rather than duplicating that structure.

## Source records

- Own construction: current product records in `src/lib/data.ts`, present at rollback commit `a9f4686070952100c01e335ceed3f585f6ef6fb6`. These are catalog references, not independent verification. No source commercial record was modified.
- Interface On Line: https://shop.interface.com/US/en-US/carpet-tile/on-line/7335C.html — reviewed Oct24. Named nylon tufted-loop product; 25×100 cm format. Backing selection matters; no performance or environmental claim is transferred to VCARPETS.
- Judong Thunderclap: https://www.judong-carpets.com/product/New-Special-Nylon-with-PVC-Backing-Carpet-Tile.html — reviewed Oct24. Named nylon/PVC product; 50×50 cm, 600 g/m² pile weight. No supplier endorsement or performance equivalence is implied.
- Patcraft Color Reveal was checked but its current public extraction did not expose the product specifications. It was not added to the published comparison.

The two comparator formats both have nominal area 0.25 m², but a square and a plank do not have the same layout geometry. Four nominal 50×50 cm tiles cover 1 m² before cutting. Packing, wastage and spares remain separate procurement inputs. The 20 oz reference for the nylon6.6 SKU has no declared denominator in the source record; buyers must confirm the weight unit basis.

## Evidence and limitations

Linear Accent and Heathered Gray have design illustrations, not confirmed material/dimension records. They do not inherit the 50×50 cm coverage calculation. Their FAQ asks for physical dimensions first.

The five-check document table asks for nominated product evidence. It states that this page does not publish matched fire or acoustic reports. It does not say the company cannot supply a report, and does not convert legacy catalog classifications into current certifications.

Each tile keeps six visible long-tail questions with the same text in FAQPage JSON-LD. Schema is for consistent content expression; no preferential Google/AI inclusion is promised. Existing Product and BreadcrumbList behavior remains.

## Internal links

Related product order follows explicit PP/PVC, PP/bitumen, nylon, PE/options and unconfirmed-design groups. Every related product has its own construction and is not claimed as an equivalent substitute.

Tile pages link existing `/commercial-carpet-tiles`, `/solutions/office-carpet-tiles-supplier`, `/blog/nylon-vs-polyester-vs-polypropylene-carpet-tiles` and `/technical-documents`, alongside the existing backing, RFQ and sample guides. No duplicate landing page is created.

## Release acceptance

- Original production HTML: fourteen direct HTTP200 responses saved before editing.
- Local lint: passed, zero ESLint warnings/errors. Environment emitted an existing npm http-proxy configuration notice.
- Local acceptance completed: six-file scope guard and production/TypeScript build passed. All27rendered product pages pass H1, canonical, indexability, opening limit, third-block comparison, per-H2 data and final sixFAQ/schema checks. Fourteen tile openings are32–42words; the84tile FAQ answers are at most60words. Five-document table, source facts, unknown dimensions, subjective-word scan and destination checks passed. Dynamic Blog destinations were verified against the local production server rather than assumed absent from the static file directory. All13non-tile copy outputs match the original profiles.
- Required before release: scope guard, TypeScript/production build, all27 shared-template rendered checks,14tile copy/data/FAQ/link checks, Preview operations and responsive layout/conversion navigation review, exact-head CI.
- Required after release: all14 real-domain URLs HTTP200, unchanged self-canonicals/H1/indexability, sitemap counts, final deployed content and FAQ/schema checks.
- No new route: no new-URL submission is needed.

Rollback uses an ordinary revert of this content change; preserve unrelated later changes. Starting production commit: `a9f4686070952100c01e335ceed3f585f6ef6fb6`.
