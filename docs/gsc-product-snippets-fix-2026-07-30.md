# GSC Product Snippets Fix Record - 2026-07-30

## Property

- Search Console property: `https://www.vishomecarpet.com/`
- Report: Shopping > Product snippets
- Authenticated review date: 2026-07-30 (Asia/Shanghai)

## Current GSC Counts

| Metric | Count |
| --- | ---: |
| Valid pages/items | 9 |
| Invalid items | 55 |
| Critical issue types | 1 |
| Non-critical improvement types | 2 |

The overview previously showed 8 valid and 59 invalid items. On 2026-07-30 it showed 9 valid and 55 invalid, indicating that Google had already started replacing older crawled markup with the current implementation.

## Critical Issue

- GSC issue: `Either "offers", "review", or "aggregateRating" should be specified`
- Chinese UI label: `应指定“offers”、“review”或“aggregateRating”`
- Affected items reported: 55
- First detected: 2026-06-30
- Report last updated: 2026-07-29
- Status before action: Validation not started

### Example historical URLs shown by GSC

- `https://www.vishomecarpet.com/ar/sajad-fanadi-mukhasas`
- `https://www.vishomecarpet.com/es/losetas-alfombra-comerciales`
- `https://www.vishomecarpet.com/es/alfombra-mineria-oro`
- `https://www.vishomecarpet.com/factory`

The affected records were Product entities historically emitted on category, factory, or localized landing pages. Those pages are not individual product-detail pages and should not produce independent Product rich-result candidates.

## Current Implementation

- Product detail pages emit Product JSON-LD with an AggregateOffer when an indicative FOB range exists.
- Product category and manufacturer pages use CollectionPage > ItemList > ListItem references rather than embedding standalone Product rich-result entities.
- Localized landing pages describe related products through WebPage `about` entries using Thing references rather than standalone Product entities.
- No fabricated review or aggregate-rating data has been added.

## Formal GSC Action

On 2026-07-30, the `Validate fix` / `验证修正情况` action was submitted for the 55-item critical issue.

GSC completed the quick initial check and displayed:

- `Validation started` / `验证已开始`
- Start date: `2026-07-30`

Google must recrawl the affected URLs before the historical examples disappear from the report. The count may remain at 55 while validation is in progress.

## Non-Critical Suggestions

| Suggestion | Current count | Decision |
| --- | ---: | --- |
| Missing `aggregateRating` | 9 | Do not add without a verified review dataset |
| Missing `review` | 9 | Do not fabricate reviews |

These are enhancement suggestions, not critical invalid-item errors.

## Follow-Up

1. Recheck the validation detail after Google recrawls the affected examples.
2. Confirm that the critical issue moves from Started to Passed.
3. Record the final valid and invalid counts in this file.
4. Investigate any newly detected URL separately rather than adding unsupported ratings or artificial offers.
