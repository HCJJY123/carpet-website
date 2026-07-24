# Vishome Visitor Intelligence

Independent Cloudflare Worker endpoint for visitor- and company-level intelligence.

The website does not need to be proxied by Cloudflare. VishomeCarpet sends a small `text/plain` beacon to this Worker. The Worker hashes the visitor IP, enriches the event with IPinfo Lite ASN/company data, classifies the network as business, ISP/mobile, cloud/VPN, automation, or unknown, and stores the event in D1. Consumer and internal-country visits are retained with review flags instead of being deleted.

The browser creates a random first-party visitor ID and per-tab session ID. The same pseudonymous identity is sent to D1 and Microsoft Clarity so a ranked report can be matched to the relevant Clarity recording. No raw visitor IP is stored in D1.

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

For an existing installation, apply the visitor-correlation migration once:

```bash
wrangler d1 execute vishome_visitors --remote \
  --file=./migrations/2026-07-24-visitor-correlation.sql
```

Create secrets:

```bash
wrangler secret put IPINFO_TOKEN
wrangler secret put VISITOR_HASH_SALT
wrangler secret put LEAD_INGEST_SECRET
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

The inquiry archive also needs these server-only Vercel variables:

```bash
LEAD_INGEST_URL=https://vishome-visitor-intelligence.<your-subdomain>.workers.dev/lead
LEAD_INGEST_SECRET=<same random value stored in the Worker secret>
```

The browser posts to Vishome's same-origin `/api/lead` route. That route sends the inquiry to Formspree and archives it in D1 using the private Worker secret; the secret is never exposed to the browser.

## 3. Test

China visits are retained and marked as internal-country traffic through `INTERNAL_COUNTRIES`. Deploy and visit the site for at least one second, then check the latest rows:

```bash
wrangler d1 execute vishome_visitors --remote --command "SELECT * FROM visits ORDER BY id DESC LIMIT 10"
```

## 4. Weekly Export

Export raw rows:

```bash
wrangler d1 execute vishome_visitors --remote --json \
  --command "SELECT * FROM visits WHERE day >= date('now','-7 day')" > raw.json
```

Build the Excel report:

```bash
python3 scripts/weekly_report.py raw.json visitor_intelligence.xlsx
```

Output:

```text
visitor_intelligence.xlsx
```

The workbook contains `Visitor Leads`, `Company Matches`, `High Intent Unknown`, `Page Performance`, and `Raw Visits` sheets. It retains all genuine visitors, marks internal-country traffic for review, ranks demand by page depth and engagement, and separates identifiable company networks from high-intent residential or mobile visitors.

## 5. Unified Lead Export and Google Ads

Export all form leads to a ranked Excel workbook and prepare the eligible Google Ads offline-conversion CSV:

```bash
./scripts/export_leads.sh
```

The files are written to `~/Downloads/Vishome-Lead-Reports/<date>/`:

```text
vishome_leads.xlsx
google_ads_qualified_leads.csv
```

The lead workbook includes `Source Performance` and `Landing Pages` sheets. They compare lead volume, A-grade leads, average intent score, and sales-confirmed qualification rate by traffic source and landing page.

Automatic A/B/C scoring prioritizes follow-up, but it does not by itself qualify a lead for Google Ads. After sales confirms a real opportunity, update the D1 record:

```bash
wrangler d1 execute vishome_visitors --remote --command \
  "UPDATE leads SET lead_status='qualified', qualified_at=CURRENT_TIMESTAMP, conversion_value=1 WHERE lead_id='<lead-id>'"
```

Only leads with a GCLID, an empty `google_ads_uploaded_at`, and a sales-confirmed status of `qualified`, `quoted`, `sample_sent`, or `won` enter the Google Ads CSV. After a successful Google Ads import, mark the row to prevent a duplicate upload:

```bash
wrangler d1 execute vishome_visitors --remote --command \
  "UPDATE leads SET google_ads_uploaded_at=CURRENT_TIMESTAMP WHERE lead_id='<lead-id>'"
```

## Notes

- IPinfo Lite data is used at ASN/company level. Add attribution in site/legal materials when using the Lite database/API commercially.
- The system stores an IP hash, not the raw IP.
- Company matches are confidence-based signals, not proof of an individual visitor's employer.
- Keep `VISITOR_HASH_SALT` as a secret. Do not commit it.
