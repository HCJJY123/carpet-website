# Broadloom approval and quantity clarification — draft only

## Evidence and scope
- User asked for five-site optimization based on competitor/search-intent/AI-visibility research on 17 November 2026.
- Existing category already contained procurement cards and a quote checklist. This small change replaces two generic paragraphs and clarifies one checklist field; it adds no duplicate section or route.
- Official comparator read 2026-11-17: https://www.axminster-carpets.co.uk/commercial/technical/bespoke-carpets/ describes design, prototyping and construction selection.
- Official comparator: https://www.axminster-carpets.co.uk/commercial/technical/ready-to-weave/ separates CAD printouts and quality samples.
- These are content-design references, not evidence of their traffic, conversion or AI recommendations. No competitor manufacturing capability, dimensions, timing or credentials are attributed to VCARPETS.
- The existing VCARPETS copy already called for a physical sample, roll planning and allowances. The revision makes the buyer approval boundaries explicit. Sample availability remains project-specific.
- Semrush AI daily quota was exhausted; no new AI answer, citation or recommendation is claimed.

## Safety boundary
Base `b19ced3a650c836070190010b05657b624b41ad3`. Draft only, no merge or production deploy. Leave existing 28-day observation product pages untouched. No changes to metadata, schema, links, tracking, forms, phone numbers or configuration. Retain original section layout.

## Verification
Local `npm run ops:check`, full `npm run lint`, full `npm run build` and `git diff --check` passed. An initial build attempt failed because Turbopack rejected a node_modules symlink outside the worktree; the final successful build used a local dependency copy. Static invariants confirmed hrefs, tracking attributes, metadata, FAQ and script markup unchanged. Preview and 390px visual QA are not yet verified. The broader operating-plan baseline gate is not marked passed by this content patch.


## 2026-11-18 — Subsequent release authorization and preview acceptance

This dated update supersedes the initial draft-only release status above; the original research and verification history is retained. The coordinating thread verified user production authorization in message `Sentinel_5c1c9f1f9c148191bcd66806e074d3b1` at 2026-11-18 03:49:52 UTC. Scope remains PR #141's three text changes in the existing wall-to-wall category, originally tested at `9c969b3bec1858042b0cfbbea2110e0603f92560`; this follow-up changes release documentation only.

- Existing Mike Preview: `dpl_3HWE5G2cDKuSZEPiFJeCuPzVdDD9`, https://carpet-website-ghoqivap8-mike123-s-projects.vercel.app/products/wall-to-wall . Preview `ops:verify` passed, as did the source-level form-label and WhatsApp-path tests. Original exact-head lint/build and scope checks passed; these are prior checks, not a new build claimed for this documentation update.
- Coordinating-thread visual acceptance reported around 2026-11-18 22:50 UTC used ordinary browser UI zoom and window resizing: 150% zoom for 390x505 and 375x505 CSS viewports, 80% for 1440x946. Document client/scroll widths matched at 382/382, 367/367 and 1432/1432 respectively. All three changed text areas had no self-overflow. This is CSS-viewport evidence, not a physical-phone or mobile-device emulation test.
- The 390px inline RFQ and the 375px/1440px broadloom recommendation links were actually clicked. Destination was `/contact?product=Wall-to-Wall%20Carpet#quote-form`. At 375px, Company was visible and operable and product prefill was `Wall-to-Wall Carpet`. No fields were filled and no inquiry, email or WhatsApp message was sent.
- No tracking, Cookie, Yandex, forms, CTA targets, metadata/schema, robots/canonical, sitemap or protected observation-window product source was changed. This narrow acceptance does not mark the entire recurring-operation Step 0 baseline complete, establish physical-phone coverage or prove conversion/traffic gains.
- Rollback remains `b19ced3a650c836070190010b05657b624b41ad3`; the refreshed Mike production alias `www.vcarpets.com` points to `dpl_F1qgM8t4f4xvVJddbnpE1PajV46G` before this release.
- Release state: authorized and preview acceptance recorded; documentation reconciliation is pending final head/check verification. No merge, new production deployment or production acceptance is claimed here. The final commit and production result must be verified separately.
