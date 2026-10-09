# Vcarpets indexing review — 2026-10-09

Scope: authenticated GSC coverage and sitemap reports; public validation of all70 discovered-not-indexed examples and recent release/fix URLs. Not a full all-pages content quality audit. GSC coverage data date2026-10-03.

|Reason|Count|Treatment|
|---|---:|---|
|Alternate with proper canonical|46|Review canonical examples; do not request duplicate parameter URLs|
|Redirect|3|Keep valid redirects; submit canonical destination only|
|404|1|Correct Czech country link and add exact308 alias to existing page|
|Discovered not indexed|70|Validate status/indexability/canonical/sitemap; prioritize commercial URLs|
|Crawled not indexed|10|8 sitemap XML and2 parameter contact examples; not independent content candidates|

GSC shows8 existing successful sitemaps. Root/market/product/blog submissions refreshed2026-10-09 with success dialogs. Existing sitemap contents and XML routes kept. Individual indexing and Bing outcomes will be recorded after execution; no successful indexing claimed. Public audit details in adjacent JSON.

Release: local checks and guarded PR/Preview production deployment pending. No substantive content rewriting solely because of delayed discovery; existing buyer-specific content and stable URLs retained.

## Confirmed technical findings

All70 examples publicly checked:68 direct200 with self-canonical and indexable HTML;2 legacy redirects resolve to valid destinations, but both old source URLs are still in root sitemap. Remove only `/natural-sisal-carpet` and `/projects/case-6` from generator; keep final product/project pages. Root sitemap263→261. Cinema genuine modification date2026-10-08 supplied in root and product sitemaps; Czech referring pages date2026-10-09. No changes to robots or canonical policy.

Individual Google requests accepted: Philippine entertainment page, repeat/seam guide, cinema product page. More commercial candidates and final Bing outcome to be appended after completion.

Local: Ops/SEO/link audits; lint (no new warnings); build/TypeScript; runtime baseline and exact308/corrected country links/sitemap destination retention all pass. Production not yet verified.
