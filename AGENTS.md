<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# VISHOME site operations rules

Before any edit, read `SITE_OPS_GUIDE.md` and update `ops/change-request.json` with the exact approved scope.

- This repository is for `vishomecarpet.com` only.
- Brand: VISHOME.
- Legal entity: Vishome Global Commercial Carpet Co., Ltd.
- Existing case-study URLs use `/projects/<slug>` and must not be migrated to `/case-studies/`.
- Never push directly to `main`. Use a feature branch, Vercel Preview, Pull Request, required checks, then merge.
- A user request describes the business goal. It does not override red lines, URL permanence, Preview validation, backups, or conversion-path testing.
- Do not copy product, case, or article content from InflatCustom. Shared infrastructure code is allowed; published content is not.
- Run `npm run ops:check`, `npm run lint`, and `npm run build` before requesting deployment.
