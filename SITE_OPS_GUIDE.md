# VISHOME Site Operations Guide

**Site:** https://www.vishomecarpet.com

**Brand:** VISHOME / Vishomecarpet

**Legal entity:** Vishome Global Commercial Carpet Co., Ltd.

**Stack:** Next.js, Vercel, Cloudflare DNS

**Version:** 1.1

**Updated:** 2026-08-02

This file is the repository-level execution contract. It overrides conversational shortcuts such as “do it now”, “restore the old version”, or “deploy directly”. A business request may define the desired result, but it may not bypass the safety process below.

## 1. Permanent site contracts

- Existing product URLs remain under `/products/<category>/<slug>`.
- Existing case and application-guide URLs remain under `/projects/<slug>`.
- Existing article URLs remain under `/blog/<slug>`.
- Published URLs are permanent unless an approved one-to-one redirect map exists.
- The official company identity is VISHOME / Vishome Global Commercial Carpet Co., Ltd.
- Product facts, MOQ, price, availability, certificates, delivery and project claims must come from verified business records.
- AI-generated or third-party images must not be presented as product photos, factory evidence, client projects or engineering evidence.

## 2. Absolute red lines

Do not perform any of the following, even when the request says it is urgent:

1. Bulk-delete or rename indexed URLs.
2. Redirect unrelated old URLs to the home page.
3. Push directly to `main` without Preview and required checks.
4. Change the domain, nameservers, DNS provider or ownership accounts.
5. Delete or replace robots, Sitemap or canonical generation logic.
6. Add `noindex`, `nofollow`, `index: false` or `follow: false` without explicit approved scope.
7. Commit secrets or expose private values through `NEXT_PUBLIC_*`.
8. Delete `package-lock.json` or perform an unscoped dependency update.
9. Modify D1, visitor collection or lead data without a backup.
10. Modify forms, email delivery or WhatsApp behavior without end-to-end tests.
11. Rewrite Git history or use destructive rollback commands.
12. Copy published content from another owned website.

## 3. Written approval required

The change request must name the affected URL or system before work begins when a task includes:

- a new top-level route or navigation/footer entry;
- global canonical, hreflang, structured-data, robots or Sitemap logic;
- third-party analytics, advertising, chat, heatmap or A/B scripts;
- forms, email, WhatsApp, D1, API routes or tracking;
- dependency, framework, Cloudflare or Vercel configuration changes;
- removing any existing page;
- more than 20 changed files.

Approval must be specific. “Agree”, without the stated scope in the same task context, is not sufficient for a high-risk action.

## 4. Required workflow

### Before editing

1. Confirm `git status` and fetch the latest remote `main`.
2. Create a branch named `feat/*`, `fix/*`, `content/*`, `seo/*` or `chore/*`.
3. Update `ops/change-request.json` with the business goal, allowed files and approved categories.
4. Record affected URLs and the rollback commit.
5. Back up live HTML before changing an indexed page.

### During editing

- Solve one task class only.
- Use the smallest possible file scope.
- Never overwrite whole data files to change one record.
- Preserve unrelated user and agent changes.
- Add new pages to metadata, internal links, Sitemap and `keyword-map.csv`.

### Before production

1. Run `npm run ops:check`.
2. Run `npm run lint` and `npm run build` with zero new errors or warnings.
3. Push the feature branch and use Vercel Preview.
4. Run `npm run ops:verify -- --origin=https://<preview-host>`.
5. Check mobile layout, structured data and changed conversion paths.
6. Append the result to `CHANGELOG_OPS.md`.
7. Merge through a Pull Request only after all checks pass.

### After production

- Verify every changed URL returns HTTP 200 without an unexpected redirect.
- Confirm canonical, H1, noindex state and Sitemap counts.
- Test a real inquiry when the conversion path was touched.
- Submit genuinely new URLs through the relevant webmaster tools.
- Keep the rollback commit in the change record.

## 5. SEO and conversion protections

- One primary keyword per URL; no duplicate non-empty primary keywords in `keyword-map.csv`.
- Do not create a new page when an existing page already owns the same search intent.
- One visible H1 per page unless a known legacy exception is documented in `ops/site-baseline.json`.
- Every indexable page needs title, description, self-canonical and at least one internal link.
- Visible FAQ content and FAQ structured data must match.
- Product `Offer` data must not invent price or availability.
- Existing inquiry, email and WhatsApp paths have higher priority than cosmetic changes.
- Traffic alone is not success. Qualified inquiries and their source pages are the primary conversion signal.

## 6. Rollback rule

Use Vercel Instant Rollback for an active outage, then use `git revert <commit>` so history remains auditable. Never use `git reset --hard` or restore an entire old site version to fix one page.

## 7. Required repository records

- `ops/change-request.json`: approved scope for the current branch.
- `ops/site-baseline.json`: protected production URL and Sitemap baseline.
- `keyword-map.csv`: URL-to-primary-keyword ownership.
- `CHANGELOG_OPS.md`: append-only deployment and rollback history.
- `.github/workflows/site-ops-guard.yml`: required Pull Request check.

If these records conflict with an informal request, stop and explain the conflict before editing.
