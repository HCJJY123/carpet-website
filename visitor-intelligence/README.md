# Vishome Visitor Intelligence

Independent Cloudflare Worker endpoint for company-level visitor intelligence.

The website does not need to be proxied by Cloudflare. VishomeCarpet sends a small `text/plain` beacon to this Worker, the Worker reads the Cloudflare visitor IP, enriches it with IPinfo Lite ASN/company data, filters consumer ISP/cloud traffic, hashes the IP, and stores company-level visits in D1.

## 1. Cloudflare Setup

Install and log in:

```bash
npm install -g wrangler
wrangler login
```

Create D1 and KV:

```bash
cd visitor-intelligence
wrangler d1 create vishome_visitors
wrangler kv namespace create VISITOR_CACHE
```

Copy the returned IDs into `wrangler.toml`.

Create tables:

```bash
wrangler d1 execute vishome_visitors --remote --file=./schema.sql
```

Create secrets:

```bash
wrangler secret put IPINFO_TOKEN
wrangler secret put VISITOR_HASH_SALT
```

Deploy:

```bash
wrangler deploy
```

## 2. Connect VishomeCarpet

Add the Worker URL to Vercel:

```bash
NEXT_PUBLIC_VISITOR_BEACON_URL=https://vishome-visitor-intelligence.<your-subdomain>.workers.dev
```

The website integration is already in `src/components/VisitorBeacon.tsx` and `src/app/layout.tsx`. If the env var is empty, no beacon is sent.

## 3. Test

For China-side testing, temporarily set this in `wrangler.toml`:

```toml
DROP_COUNTRIES = ""
```

Then deploy and visit the site for more than 5 seconds. Check latest rows:

```bash
wrangler d1 execute vishome_visitors --remote --command "SELECT * FROM visits ORDER BY id DESC LIMIT 10"
```

After testing, set `DROP_COUNTRIES = "CN"` again if you want to exclude domestic visits.

## 4. Weekly Export

Export raw rows:

```bash
wrangler d1 execute vishome_visitors --remote --json \
  --command "SELECT * FROM visits WHERE day >= date('now','-7 day')" > raw.json
```

Build the Excel report:

```bash
python3 scripts/weekly_report.py raw.json
```

Output:

```text
weekly_leads.xlsx
```

The report ranks companies by visit days, page depth, time on site, contact/product page intent, and return visits.

## Notes

- IPinfo Lite data is used at ASN/company level. Add attribution in site/legal materials when using the Lite database/API commercially.
- The system stores an IP hash, not the raw IP.
- This identifies companies or organizations, not personal visitor identities.
- Keep `VISITOR_HASH_SALT` as a secret. Do not commit it.
