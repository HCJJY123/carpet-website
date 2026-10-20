# VCARPETS Clarity conversion review — 2026-10-20

## Scope and baseline
Only www.vcarpets.com. Owner requested a one-month Clarity review, targeted quote/email/WhatsApp conversion improvements, then today's daily task. Brand VCARPETS; entity Tianjin Vcarpets Global Commercial Carpet Co., Ltd.; B2B FOB Tianjin Port. Clean remote baseline 9fb9c4f4d57e929814a40358ac747b886b65c289 (PR90). Exact production dpl_ALnaQjvJM5H5jsp5K2WLFw17YddV READY, matching main and domain aliases, verified before edits. Preserve today's nylon procurement work and GA4 G-WBRQWMXJ7R; exclude draft banner PR88.

Live before-edit home, contact, category, nylon product and root/product/blog sitemap HTML/XML saved to /tmp/vcarpets-clarity-baseline-20261020 for local comparison. This temporary backup is not represented as a persistent artifact. Public baselines all HTTP200. No existing user source edits; transient clone download file was not staged.

## Clarity evidence and boundaries
Observed 2026-10-20 through authenticated project xgg9z07tsm, named 地毯主页. Native browser connection did not respond and was cancelled; available cloud browser had the same authorized Clarity project already signed in. No login credentials read or entered. UI selected Last30days; UI did not state reporting timezone or exact start/end boundaries, so no fabricated calendar-date precision. Historical heatmap screenshot content differs from current production; confirm behavior against current source and live pages.

Unfiltered project:96 sessions,35 users,2 bots excluded;2.03 pages/session,42.46% scroll. Includes Vercel Preview hostnames: not a clean customer cohort. Added Visited URL starts with https://www.vcarpets.com/ filter:93 sessions,32 users,2 bots excluded,1.98 pages/session,41.84% scroll,1.2min active of4.2min total. This is a session-level visited-URL cohort, not a guarantee that every pageview in those sessions is production-only. Staff, repeat QA and buyer identity not established; top user had21 sessions. Consent/sample coverage means this is not all website traffic.

Same filtered cohort: quote_form_click10 sessions; email_click4; whatsapp_click2; contact_form_submit2; thank_you_page_view2; form_start2. Counts are separate overlapping session events, not a sequential funnel or verified qualified enquiries. Old WhatsApp links went through contact, and the bridge final action was a button, so event labels undercount direct chat intent and can contaminate quote-click counts. No conversion rate or completed email/chat/customer claim.

Insights:11 dead-click sessions (11.83%),15 quick-back sessions (16.13%),1 rage-click session (1.08%),2 JS errors in1 session. No attribution to the contact form established. Performance card:23 sampled pageviews, LCP11s, INP510ms, CLS0.074; insufficient to identify page/region cause and contains possible QA/repeat visits. Do not use as a site-wide field-performance diagnosis.

### Heatmaps actually inspected
- Home desktop click:15 pageviews/48 clicks. Most-clicked elements include carousel wrapper8, footer descriptive paragraph7, footer company block5 and carousel control5. This is not proof that visitors attempted enquiries or that those clicks were broken.
- Home mobile scroll:28 pageviews. Table:5% depth12(42.86%),10%11(39.29%),20%7(25%),50%3(10.71%),100%1(3.57%). Low-depth sample supports offering contact choices earlier, but historical screenshot geometry and repeat visits prevent attributing exits to a specific module.
- Contact mobile scroll:5 pageviews;10%5(100%),15%1(20%),50%1(20%). Very small sample, not evidence of a form failure. Screenshot shows tall hero/intro and WhatsApp contact bridge.
- Carpet-tile category mobile tap:6 pageviews/2 taps, both on product-list elements. No usable evidence that chat was preferred or that category text caused loss.

Sources: https://clarity.microsoft.com/projects/view/xgg9z07tsm/dashboard and its Heatmaps tab (Last30days plus production visited-URL filter); current public site, src/lib/whatsapp.ts, QueryProductWhatsAppLink, WhatsAppBridgePrompt and Contact page. Not a full-site/replay audit; no GSC/GA4 analytics, inbox or WhatsApp conversation data read this round.

## Priority decisions
Scores 0–3 each: product relevance / B2B intent / evidence / gap / readiness / inquiry value. Internal prioritization, not traffic prediction.

|Action|Opportunity|Scores|Total|Decision|
|---|---|---|---|---|
|C|Direct WhatsApp instead of contact-to-contact bridge|3/3/3/3/3/3|18|Implement; current shared helper and contact links conclusively reproduce detour|
|C|Compact contact intro; early email/chat and intact quote fields|3/3/2/3/3/3|17|Implement; shallow scroll + actual long contact layout|
|C|Three channels in existing conversion panel; clickable email text|3/3/2/2/3/3|16|Implement; no new form/system or account|
|E|Investigate slow LCP/INP by production page/device/region|3/2/1/2/1/2|11|Keep open;23 samples insufficient to isolate cause|
|E|Exclude staff/Preview analytically and verify enquiry quality|3/3/2/2/1/3|14|Document; do not silently change collection/consent or classify visitors|

## Implementation
- src/lib/whatsapp.ts: existing getContactBridgeUrl caller API now returns existing getWhatsAppBusinessUrl. Same configured number +86 15222885400. Product, quantity, country, intent, source page and placement context preserved. No auto-open or sent message. All existing callers benefit, including header/footer/product/solution and localized pages.
- WhatsAppBridgePrompt: old saved /contact?wa_message links still expose explicit Open WhatsApp as a real external anchor (accessible and recognized by current global click handler), no popup-only handler.
- /contact: compact text header replaces decorative large hero; shortened intro, early product-aware WhatsApp link plus existing mailto and visible linked sales@vcarpets.com. Quote form, API, validation, source/product prefill and success logic unmodified. No response-time/24-hour availability promise in new copy.
- ConversionLiftPanel: existing RequestQuote + EmailSales supplemented by direct WhatsApp; displayed email changed from inert text to mailto. Existing data attributes/events reused, no new payload collection.
- scripts/whatsapp-contact-paths.test.mjs: actual TS module tests cover avoiding contact loops, configured destination, multilingual encoding/context and compatibility.

## Acceptance and status
At this record: code candidate only. Local checks, Preview desktop/390px and exact production acceptance recorded below after occurrence; PR closeout authoritative for final production SHA/time. No real enquiry or message sent. End-to-end sales receipt/WhatsApp response is not tested; UI navigation and destination validation must not be described as sales delivery verification. Forms and tracking code are preserved byte-for-byte.

Images: no new generation; decorative contact hero removed to reduce friction. Existing product, case and Blog images unchanged. No synthetic product/technical evidence.

## Follow-up and continuity
After release: re-enable existing daily automation; queue today's saved growth task only after this conversion release is verified. Run-now acceptance is a request receipt, not content/deployment completion. Daily task must start from this release +PR90, read this record, deliver a complete evidence-backed English Blog or substantive existing-Blog update, and avoid repeating the nylon product edit or this conversion release. No duplicate automation.

7-day review (2026-10-27): production contact/mobile behavior, direct WhatsApp click classification, unintended regressions and enough fresh production samples. Approximately28 days (2026-11-17): contextual quote/email/chat initiations, successful form requests and sales-confirmed qualified B2B leads, product/destination relevance; normalize traffic mix/consent/QA effects. No causal uplift claim from small samples.

### Preview acceptance
Implementation head9393198a8b6b28f393882f6aad295197d8981924, READY Preview dpl_KXeqJsgpi3RWDdBwJc1tbfLJteGB. CI SiteOps39422799210 success. Full local webpack/TypeScript build, lint0 errors/one existing ProductImage img warning, scope/SEO/link/placeholder audits and three URL tests pass. Local HTTP server not reliably reachable (initial network-interface error; explicit hostname started but subsequent check ECONNREFUSED); public Preview ops:verify passed instead. Shell git push lacked credentials; authorized GitHub connector created identical tree1ea75fc0, feature branch and PR91; no direct-main push or protection bypass.

Actual Preview browser desktop1355px: oneH1, document client=scroll1355; compact contact hero217px; six WhatsApp placements all direct to configured business; no contact floating overlays; four required fields unchanged. Mobile390px same-origin frame (content382px): client=scroll382, oneH1; email and chat within first viewport, contact chat top562px, form top678px. Prefilled quote: Nylon Office Carpet Tile retained, first required company field at344px below65px header, no floating overlay. Legacy wa_message link renders explicit direct external anchor with same product. Mobile category panel has three48px channel buttons and44px email address; category→RequestQuote actual click reaches form with Commercial Carpet Tiles prefilled and no overflow. Desktop three panel buttons58px high; no overlap.

Actual click on contact chat attempts external WhatsApp application handoff. The cloud browser cannot observe the non-HTTP app protocol (security policy); no workaround, message, chat or receipt claimed. Native-app delivery remains outside automated verification. mailto target/subject and existing source/product RFQ mapping validated; no real form/email/message submitted. Form submission component/API/consent/tracking blobs match baseline. React component checklist reviewed: no extra effect/global listener/dependency, existing Suspense boundary retained, semantic external anchors and tap targets, server-rendered conversion panel retained.

Temporary noindex390px fixture removed before final candidate, scope narrowed to eight files. Final records/removal-only SHA requires fresh CI/READY Preview/HTTP gates before PR91 merge. PR closeout records exact production SHA/time after occurrence. No indexing notification needed for shared conversion-only changes; no new indexable URL, canonical or sitemap logic changes.
