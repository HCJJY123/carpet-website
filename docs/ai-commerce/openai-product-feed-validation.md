# OpenAI Product Feed Draft Validation - 2026-07-30

## Status

- Source products: 20
- Draft feed rows: 20
- Search-eligible rows: 0
- Rows missing one exact price: 20
- Rows using unknown availability: 20
- Rows missing a public return-policy URL: 20
- Rows whose main image is not JPEG/PNG: 20

The feed is intentionally a non-submittable draft. All rows use `is_eligible_search=false` and `is_eligible_checkout=false` so incomplete commercial data cannot be published accidentally.

## Blocking Decisions

1. Select a sellable unit for each product, such as one tile, one square meter, one sample box, or one standard roll.
2. Confirm one accurate price and currency for that unit. A low-to-high FOB range is not used as a single price.
3. Confirm real availability for the selected unit.
4. Publish a public return-policy page appropriate for made-to-order B2B products.
5. Create JPEG or PNG feed images without replacing the website's optimized WebP delivery images.
6. Confirm OpenAI merchant eligibility for a China-based manufacturer because the current stable schema lists `US` as the supported store country.

## Source Specification

- Stable file-upload schema: https://developers.openai.com/commerce/specs/file-upload/products
- Required fields represented in the draft include eligibility flags, item ID, title, description, URL, brand, image URL, price, availability, seller information, return policy, target country, and store country.
