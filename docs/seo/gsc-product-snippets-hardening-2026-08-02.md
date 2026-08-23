# GSC Product Snippets Hardening - 2026-08-02

## Code Changes Completed

- Country market pages now reference related products as `Thing` inside `WebPage.about` instead of incomplete `Product` entities.
- Shared product JSON-LD no longer creates an automatic one-year `priceValidUntil` value.
- Shared product JSON-LD defaults project products to `PreOrder` unless a product is explicitly marked as confirmed stock.
- Hand-written product JSON-LD pages were aligned to quotation-required or made-to-order availability.
- Product structured data now exposes sales unit and price basis as additional properties where a reference FOB range is shown.

## Commercial Accuracy Position

- Website FOB ranges remain reference ranges, not live checkout prices.
- Final price, unit, lead time, availability and quotation validity require written confirmation.
- OpenAI or merchant product-feed submission should remain paused until exact transactable price, store-country eligibility, availability and return/cancellation fields are confirmed.

## GSC Follow-up Required

Manual GSC validation is still required because the local build cannot access the logged-in Google Search Console account. After deployment, inspect these areas:

- Product snippets valid item count
- Product snippets invalid item count
- Newly indexed `/technical-documents` and `/commercial-terms`
- Coverage status for high-priority product pages
- Any remaining warnings about missing review, price validity, availability or return policy fields

## Validation Performed Locally

- `npm run lint` passed.
- `npm run build` passed.
- Local production HTTP checks returned 200 for home, technical documents, commercial terms, privacy policy, gold mining product page, Philippines market page and sitemap.
