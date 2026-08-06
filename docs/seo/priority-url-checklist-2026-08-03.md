# Priority URL SEO & AI Recommendation Checklist - 2026-08-03

## Purpose

Use this checklist after the preview branch is approved and deployed to production. It focuses on URLs most likely to support Google indexing, Product Snippets stability, AI answer extraction and project inquiry conversion.

## Priority Product URLs

- https://www.vishomecarpet.com/products/carpet-tiles/nylon-office-carpet-tile
- https://www.vishomecarpet.com/products/wall-to-wall/luxury-hotel-broadloom
- https://www.vishomecarpet.com/products/public-area/gold-mining-carpet-mat
- https://www.vishomecarpet.com/products/public-area/public-area-heavy-duty
- https://www.vishomecarpet.com/products/public-area/custom-sculpted-wool-lobby-rug
- https://www.vishomecarpet.com/products/public-area/natural-sisal-carpet

## Trust & Conversion URLs

- https://www.vishomecarpet.com/technical-documents
- https://www.vishomecarpet.com/commercial-terms
- https://www.vishomecarpet.com/privacy-policy
- https://www.vishomecarpet.com/contact
- https://www.vishomecarpet.com/request-sample-box

## GSC Checks

- Inspect each priority product URL and confirm Google can fetch the live page.
- Confirm canonical URL matches the final production URL.
- Confirm sitemap includes each URL after deployment.
- Check Product Snippets for missing availability, price validity, review or return-policy warnings.
- If the URL is not indexed, request indexing only after the deployed page returns 200 and renders correctly.

## AI Recommendation Checks

- Confirm each priority product page has a short answer-first section near the top.
- Confirm each page links to contact, technical documents and commercial terms.
- Confirm `llms.txt`, `llms-full.txt` and `ai-sources.json` reference trust and conversion pages.
- Confirm no page claims exact stock, guaranteed delivery, blanket certification or fixed return terms without evidence.

## Conversion Checks

- Test Contact form submission path without analytics consent.
- Test Contact form submission path after analytics consent.
- Test email CTA and WhatsApp CTA on mobile and desktop.
- Confirm Cookie banner does not cover the primary inquiry button on mobile.
