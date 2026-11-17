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
