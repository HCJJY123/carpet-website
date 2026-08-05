# Deployment Checklist

Last updated: 2026-08-06

## Current Status

- Branch: `feature/backlink-readiness`
- Build status: passed locally with network access for Google Fonts.
- Production deployment: not performed in this continuation because the supplemental instruction forbids direct production deployment without permission.

## Required Pre-Deploy Checks

- [x] `npm run lint`
- [x] `npm run audit:seo`
- [x] `npm run audit:links`
- [x] `npm run audit:assets`
- [x] `npm run audit:placeholders`
- [x] `npm run build`
- [x] Local production HTTP spot check for key routes.

## Local HTTP Spot Check Results

- `/resources` - 200
- `/resources/technical-library` - 200
- `/resources/downloads/hotel-broadloom-procurement-guide` - 200
- `/applications/office` - 200
- `/products/office-carpet-tiles` - 200
- `/quality-control` - 200
- `/certifications` - 200
- `/sitemaps/products.xml` - 200
- `/sitemaps/resources.xml` - 200
- `/not-a-real-page-for-404` - 404

## Deployment Command

Use the existing Vercel production deployment process only after approval:

```bash
VERCEL_ORG_ID=team_qvgr1dWcQ4t5QLcvJFUpWZQi VERCEL_PROJECT_ID=prj_W2oIVAQd3PkX1jP8cfKKyeOmI6xI vercel deploy --prod --yes --scope mike123-s-projects
```

## Post-Deploy Checks

- Confirm all new public URLs return HTTP 200.
- Confirm `/sitemap.xml` includes new routes.
- Confirm `/sitemaps/pages.xml`, `/sitemaps/products.xml`, `/sitemaps/projects.xml`, `/sitemaps/resources.xml`, `/sitemaps/blog.xml` return 200.
- Confirm `/robots.txt` lists the split sitemaps.
- Submit new sitemap URLs in Google Search Console and Bing Webmaster Tools if desired.
- Verify document download events in GA4/GTM after real browser interaction.

## Rollback

If production issues appear, roll back to the previous Vercel production deployment from the Vercel dashboard or revert the merge commit and redeploy the last known-good commit.

