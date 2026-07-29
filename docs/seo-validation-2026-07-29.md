# SEO Validation Record - 2026-07-29

## Release

- Production domain: https://www.vishomecarpet.com
- Production deployment: `carpet-website-fuw5gtcgl-mike123-s-projects.vercel.app`
- Final validation commit: `6c265f0`
- Validation date: 2026-07-29 (Asia/Shanghai)

## Build and Site Audit

- `npm run build`: passed, 71 routes generated
- `npm run lint`: passed
- Indexable HTML pages audited: 86
- Product pages audited: 20
- Minimum unique inbound internal links to any product page: 7
- Pages emitting `<meta name="keywords">`: 0
- Product pages failing MOQ, canonical, Product JSON-LD, or Breadcrumb JSON-LD checks: 0

## MOQ Standard

All 20 product pages now use the same three-level structure:

1. Sample
2. Trial Order
3. Project MOQ

The three levels are included in visible product specifications and Product JSON-LD.

## New Long-Tail Product Pages

All four URLs returned direct HTTP 200 responses with no redirects:

- https://www.vishomecarpet.com/products/carpet-tiles/healthcare-hospital-carpet-tiles
- https://www.vishomecarpet.com/products/carpet-tiles/education-school-carpet-tiles
- https://www.vishomecarpet.com/products/wall-to-wall/cinema-theater-carpet
- https://www.vishomecarpet.com/products/public-area/commercial-stair-carpet-runner

## Case Title Review

Weak title wording was removed from the affected Case titles:

- Case 11: Exhibition & Expo Booth Carpet Specification Guide - Johannesburg
- Case 12: Gold Mining Sluice Carpet Field Specification Guide - Peru

No Case title contains "Concept" or "Reference".

## Google Rich Results Test

Official live-URL tests were run with Google Inspection Tool Smartphone.

| URL | Official result | Product | Breadcrumb | Dataset | Test result |
| --- | --- | --- | --- | --- | --- |
| Healthcare product | 7 valid items, 0 invalid | Valid | Valid | Valid | `YvzTRqPHXX4nEjKOSn9-4A` |
| Education product | 7 valid items, 0 invalid | Valid | Valid | Valid | `jv92k_x6HsdxySK_tshKJA` |
| Cinema product | 7 valid items, 0 invalid | Valid | Valid | Valid | `PGlEh5FR6Jlvv1fZ0PoODw` |
| Stair runner product | 7 valid items, 0 invalid | Valid | Valid | Valid | `ulIGS5bwiagJ8eZPAnZHYw` |
| Case 11 | 7 valid items, 0 invalid | Not applicable | Valid | Valid | `QlqIgt7Kup3FWde9l0I-mQ` |

The first official test found that the global Dataset item lacked a required
description and recommended creator and license fields. These fields were added,
a public data-use license was published, and all five URLs then passed without
invalid items.

Google reports non-critical Product suggestions for `review` and
`aggregateRating`. These fields were intentionally not added because no verified
first-party review dataset was available. No ratings or reviews were fabricated.

## Google Search Console URL Inspection

Pending authenticated URL Inspection results.
