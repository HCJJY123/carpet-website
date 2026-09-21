# VCARPETS Microsoft Privacy & Tracking Compliance QA

**Review date:** September 22, 2026  
**Repository:** VCARPETS website  
**Branch:** `compliance/microsoft-privacy-hardening`  
**Production deployment:** Not authorized  
**Architecture decision:** Option A — block optional analytics and advertising scripts until the applicable consent category is granted.

## Executive Summary

The previous implementation used one Analytics choice for GA4, Google Ads, GTM, Microsoft Clarity, Yandex and Microsoft Advertising. Microsoft UET loaded before a visitor made a choice, lead conversion code passed normalized email and telephone values to Google enhanced-conversion `user_data`, event payloads could include full URLs and contact destinations, and the visitor beacon forwarded the client JSON without a server-side allowlist.

This change separates Necessary, Analytics and Advertising choices; adds Accept All, Reject Non-Essential and functional Cookie Preferences; blocks optional scripts before the applicable choice; removes raw inquiry PII and query strings from browser tracking; adds a server-side visitor payload allowlist; rebuilds the Privacy Policy; adds a Cookie Policy; adds permanent footer Legal links; retains adjacent form disclosures; removes runtime VISHOME identity residue; and documents actual observed network behavior.

The code, build, local HTTP, consent UI and responsive checks pass. Production release remains blocked because Microsoft account-side UET/Clarity integration, provider retention settings, public Preview network behavior, real mailbox/Formspree delivery and a real post-submit PII network test remain **UNVERIFIED**. Advertising-only browser testing also observed Microsoft UET requesting Clarity-related endpoints; this is disclosed but requires account-side confirmation before production approval.

## Existing Tracking Architecture

| Platform | Identifier / endpoint | Implementation | Finding |
| --- | --- | --- | --- |
| Microsoft Advertising UET | `97259674` | Direct `bat.bing.com/bat.js` script in `MicrosoftUet.tsx` | Present; now Advertising-only |
| Microsoft Clarity | `xgg9z07tsm` | Standalone direct script in `MarketingTracking.tsx` | Present; now Analytics-only |
| Google Analytics 4 | `G-T2VYHXTK1F` | `gtag.js` in `MarketingTracking.tsx` | Present; now Analytics-only |
| Google tag | `GT-NMDDTW67` | `gtag.js` loader | Present; loaded only when Analytics or Advertising is allowed |
| Google Ads | `AW-18306142236` | `gtag.js` conversion configuration | Present; now Advertising-only |
| Google Tag Manager | `NEXT_PUBLIC_GTM_CONTAINER_ID` | Optional environment configuration | Code path present; no default container ID verified |
| Yandex Metrica | `NEXT_PUBLIC_YANDEX_METRICA_ID` | Optional environment configuration | Code path present; no default ID verified |
| Meta Pixel | None found | Repository search for `fbq`, `connect.facebook.net`, Meta Pixel | Not present |
| Form processor | Formspree `xlgkpkza`; optional `LEAD_INGEST_URL` | Server-side `/api/lead` | Present; provider account settings unverified |
| Visitor ingest | `VISITOR_INGEST_URL` or public worker fallback | Server-side `/api/visit` | Optional; not configured in local QA |
| Hosting | Vercel / Next.js | Repository and operations configuration | Present |

## Microsoft UET

- **Tag ID:** `97259674`
- **Method:** Direct script; not loaded by GTM.
- **Consent architecture:** Script is not rendered until Advertising consent is true.
- **Initialization:** UET queue sets `ad_storage: denied`, then updates to `granted` only after Advertising consent.
- **Withdrawal:** Preference saving sends `ad_storage: denied`; withdrawing a previously granted category reloads the page so previously loaded optional scripts are removed from the new document.
- **Events:** Generic `generate_lead`, `high_intent_lead`, WhatsApp, email, phone, sample-request and thank-you interaction events. Payloads are sanitized and gated by current consent.
- **PII safeguards:** No raw name, email, telephone, WhatsApp number, company name, message, address, filename, full URL or query is intentionally sent to UET.
- **Observed provider behavior:** Advertising-only testing loaded `bat.bing.com`, consent events with denied then granted status, and `www.clarity.ms/tag/uet/97259674?conversions=1`. The account-side UET/Clarity relationship is **UNVERIFIED**.

## Microsoft Requirements Matrix

| Requirement | Implementation | URL / File | Evidence | Status |
| --- | --- | --- | --- | --- |
| Dedicated Microsoft UET disclosure | Dedicated heading and provider explanation | `/privacy-policy`, `src/app/privacy-policy/page.tsx` | H1/canonical/browser review | PASS |
| Microsoft Privacy Statement link | Visible descriptive external link | `/privacy-policy` | Browser DOM verified | PASS |
| UET blocked before choice | Component returns `null` without Advertising consent | `src/components/MicrosoftUet.tsx` | Fresh and Reject asset inventory had no Bing resource | PASS |
| Default advertising consent denied | UET queue initializes denied | `src/components/MicrosoftUet.tsx` | Browser observed UET consent default denied before granted | PASS |
| Advertising acceptance grants consent | UET update granted after Advertising selection | `src/components/MicrosoftUet.tsx` | Advertising-only Bing requests showed granted consent update | PASS |
| Withdrawal returns denied | Code sends denied and reloads after withdrawal | `src/lib/consent.ts`, `src/components/CookieConsent.tsx` | Future UET/Ads resources absent after withdrawal; exact denied wire event not retained through reload | UNVERIFIED |
| No raw lead PII in UET | Sanitized generic payload only | `src/lib/tracking.ts` | Static audit; no real submitted lead test | UNVERIFIED |
| UET / Clarity account integration understood | Disclosure added for observed associated endpoint | Privacy/Cookie Policy | `clarity.ms/tag/uet/97259674` observed | UNVERIFIED |

## Privacy Policy Matrix

| Topic | Evidence | Status |
| --- | --- | --- |
| Company identity | Vcarpets Global Commercial Carpet Co., Ltd.; VCARPETS; website and email shown | PASS |
| Required H1 | `Privacy Policy` | PASS |
| Canonical | `https://www.vcarpets.com/privacy-policy` | PASS |
| Last updated | September 22, 2026 | PASS |
| Information categories | Inquiry and verified technical categories described | PASS |
| Purposes | RFQ, samples, support, security, analytics and advertising purposes separated | PASS |
| Microsoft UET | Dedicated heading | PASS |
| Microsoft Privacy Statement | Visible labelled link | PASS |
| Clarity / Google / optional GTM / Yandex | Actual implementation and conditional configuration described | PASS |
| Meta | Explicitly states repository implementation was not found | PASS |
| Service providers | Formspree, optional ingest and measurement providers described without unsupported certification claims | PASS |
| Retention | Category-based wording; account-side periods explicitly not claimed | PASS |
| International transfers | General cross-border processing disclosure without invented mechanisms | PASS |
| Privacy rights | Jurisdiction-dependent access/correction/deletion/withdrawal explanation | PASS |
| Security / children / changes / contact | Dedicated sections present | PASS |

## Cookie Consent Matrix

| State | Analytics | Advertising | Browser evidence | Status |
| --- | --- | --- | --- | --- |
| Fresh visitor | Blocked | Blocked | No Google, Bing, Clarity, Yandex or Meta third-party asset; all three banner actions visible | PASS |
| Reject Non-Essential | Blocked | Blocked | No optional third-party asset; footer preferences available after reload | PASS |
| Analytics only | GA4 and standalone Clarity loaded | UET and Google Ads blocked | GA4 `G-T2VYHXTK1F` and Clarity `xgg9z07tsm` observed; no Bing/AW request | PASS |
| Advertising only | Configured GA4 and standalone Clarity blocked | UET and Google Ads loaded | Bing UET and `AW-18306142236` observed; configured GA4 ID absent; UET-associated Clarity endpoint also observed | UNVERIFIED |
| Accept All | Loaded | Loaded | Standalone Analytics plus UET / Ads resources observed | PASS |
| Withdraw Advertising | Analytics remains | Future Advertising blocked | New document contained Analytics resources only; no Bing, Ads, DoubleClick or Google CCM asset | PASS |

## Tracking Inventory

| Provider | Technology | Purpose | Consent category | Trigger | Data sent by site code | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Google | GA4 | Page and engagement measurement | Analytics | Analytics accepted | Clean pathname, title, generic events, sanitized campaign attribution | PASS |
| Microsoft | Clarity standalone | Interaction analysis | Analytics | Analytics accepted | Generic event names and limited non-personal business context | PASS |
| Yandex | Metrica | Optional usage measurement | Analytics | Analytics accepted and ID configured | Sanitized event payload | UNVERIFIED (ID/account absent locally) |
| Microsoft | UET | Advertising attribution and conversions | Advertising | Advertising accepted | Generic event metadata; sanitized | UNVERIFIED (account integration and real submit test) |
| Google | Ads | Advertising attribution and conversions | Advertising | Advertising accepted | Generic conversion metadata; enhanced-conversion `user_data` removed | UNVERIFIED (account and real submit test) |
| Google | GTM | Optional tag container | Advertising | Advertising accepted and container configured | Depends on external container configuration | UNVERIFIED |
| VCARPETS | Visitor beacon | Pseudonymous visit measurement | Analytics | Analytics accepted | Pathname, host, pseudonymous IDs, sanitized attribution; server allowlist | UNVERIFIED (local ingest not configured) |
| Meta | Pixel | N/A | Advertising if ever added | Not present | None | PASS (not installed) |

## PII Leakage Test

| Destination | Static / browser finding | Status |
| --- | --- | --- |
| Microsoft UET | Raw form values removed; generic payload allowlist/sanitizer used | UNVERIFIED until a real post-submit network test is approved and completed |
| GA4 | Raw form values and full query-bearing URLs removed; clean pathname used | UNVERIFIED until a real post-submit network test is approved and completed |
| Google Ads | Enhanced-conversion email/phone `user_data` removed | UNVERIFIED until a real post-submit network test is approved and completed |
| Meta | No implementation found | PASS |
| Clarity custom parameters | Generic event and limited business context only; no name/email/phone/message | UNVERIFIED for provider-side automatic form masking/account settings |
| dataLayer | Central sanitizer removes PII keys and full URLs | PASS (static code path) |
| Visitor beacon | Client no longer sends query/full URL/referrer URL; server allowlists fields | PASS (static and local endpoint code) |
| Form processor | May receive the submitted inquiry because it is the intended business delivery path | UNVERIFIED provider retention, mailbox receipt and deletion settings |

No real dummy inquiry was submitted during this run because that would transmit a message to the configured external form processor. Therefore the report does not claim a complete end-to-end PII network PASS.

## VCARPETS Brand Migration Audit

### Fixed

- Removed `Vishome Global Commercial Carpet` and `Vishomecarpet` from Organization JSON-LD alternate names.
- Removed `Vishomecarpet` from `public/llms.txt` and `public/llms-full.txt`.
- Privacy and Cookie pages use VCARPETS and the verified legal company name only.

### Intentional historical / migration references

- `src/proxy.ts` old-host detection for path-preserving 308 redirects.
- Domain migration generator and URL mapping records.
- Append-only operations changelog and historical audit reports.
- Visitor-intelligence database or script names that are infrastructure identifiers, not public company identity.

### Remaining

- Runtime `src` and public AI source search found no unintended VISHOME or VISFURN identity after the fixes.
- Old-domain DNS/HTTPS redirect effectiveness remains account-level **UNVERIFIED**.

## Landing Page Audit

Local production server checks returned HTTP 200 and self-consistent `https://www.vcarpets.com` canonical URLs for:

| URL | Legal links | Form disclosure | Consent behavior | Result |
| --- | --- | --- | --- | --- |
| `/` | Global footer | N/A | Fresh/Reject/Preferences tested | PASS |
| `/commercial-carpet-tiles` | Global footer | N/A | Global component | PASS |
| `/hotel-carpet` | Global footer | N/A | Global component | PASS |
| `/products/carpet-tiles` | Global footer | N/A | Global component | PASS |
| `/markets` | Global footer | N/A | Global component | PASS |
| `/contact` | Global footer | Adjacent link; form explicitly POST | Global component | PASS |
| `/request-sample-box` | Global footer | Adjacent link; form explicitly POST | Global component | PASS |
| `/privacy-policy` | Global footer | N/A | Readable without optional consent | PASS |
| `/cookie-policy` | Global footer | N/A | Readable without optional consent | PASS |

Paid-platform account Final URLs are not stored in the repository and remain **UNVERIFIED**.

## Mobile QA

| Width | Banner / Preferences | Overflow | Result |
| --- | --- | --- | --- |
| 375px | Dialog 343px; Save and Close visible | None | PASS |
| 390px | Fresh banner shows Accept All, Reject Non-Essential and Cookie Preferences; preferences dialog 358px | None | PASS |
| 430px | Dialog 398px; Save and Close visible | None | PASS |

Mobile Privacy Policy, Cookie Policy, form disclosure and footer Legal links were browser-checked. Evidence was captured under `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/`.

## Desktop QA

| Width | Preferences dialog | Overflow | Result |
| --- | --- | --- | --- |
| 1280px | 460px; Save and Close visible | None | PASS |
| 1440px | 460px; Save and Close visible | None | PASS |
| 1920px | 460px; Save and Close visible | None | PASS |

## Build and Validation

- `SITE_OPS_APPROVED_LARGE_CHANGE=1 npm run ops:check`: PASS. The owner request explicitly approves the repository-wide legacy-brand and compliance scope above the normal file-count guard.
- `npm run lint`: PASS with one pre-existing `ProductImage.tsx` `<img>` warning unrelated to this change.
- `npm run audit:seo`: PASS for 92 page files.
- `npm run audit:links`: PASS.
- `npm run audit:assets`: PASS.
- `npm run build -- --webpack`: PASS; 216 static pages generated and TypeScript passed.
- `npm run ops:verify -- --origin=http://127.0.0.1:3023`: PASS.
- Local key-page HTTP/canonical check: PASS.

## Screenshot Evidence

- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/cookie-banner-fresh-mobile-390.png`
- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/cookie-preferences-mobile-390.png`
- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/privacy-policy-mobile-390.png`
- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/footer-legal-mobile-390.png`
- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/privacy-policy-1440.png`
- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/cookie-policy-1440.png`
- `/tmp/vcarpets-microsoft-privacy-20260921/screenshots/contact-form-1440.png`

## Remaining Risks

1. **Microsoft UET / Clarity account relationship — UNVERIFIED.** Advertising-only browser testing loaded a Microsoft Clarity-related UET endpoint. Confirm or disable the integration in the Microsoft Advertising / Clarity account as appropriate.
2. **Real PII leakage submission test — UNVERIFIED.** A real dummy form submission was not sent to Formspree. Complete only with explicit authorization and inspect all provider requests and payloads.
3. **Provider retention and deletion settings — UNVERIFIED.** Microsoft, Google, Clarity, Formspree, optional Yandex, optional GTM and visitor-ingest account settings are outside repository evidence.
4. **Public Preview network QA — UNVERIFIED.** Repeat consent and network matrices on the Vercel Preview URL because local hostnames can cause provider-specific behavior.
5. **Visitor ingest — UNVERIFIED.** The local environment did not configure the visitor ingest URL/secret, so delivery returned unavailable while the browser payload and server allowlist were verified in code.
6. **Mailbox / lead delivery — UNVERIFIED.** No real inquiry was sent and no mailbox receipt was tested.
7. **Paid advertising Final URLs — UNVERIFIED.** Microsoft Ads and Google Ads account Final URLs are not represented in repository configuration.

## Deployment Gate

The production gate is **STOP**. Do not merge or deploy while the Microsoft account integration and real post-submit network test remain `UNVERIFIED`. A Preview and Pull Request may be created for review, but production requires explicit owner approval after the remaining P0 evidence is completed.
