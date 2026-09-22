# VCARPETS — Microsoft Advertising Final Compliance Gate

**Date:** 2026-09-22  
**Site:** https://www.vcarpets.com  
**Branch:** `fix/microsoft-final-compliance-gate-20260922`  
**Production baseline:** `d5d8bbb`  
**Rollback point:** `d5d8bbb`

## Scope and evidence boundary

This gate covers the exact Microsoft Personal Data disclosures, the sample-request notice, production consent behavior, a production test inquiry, tracking URL inspection, and local branch validation. The production HTML was backed up before the legal-page changes under `/tmp/vcarpets-microsoft-final-gate-20260922/`.

The production test inquiry was submitted after explicit confirmation using synthetic values. The form processor receiving the lead data was an expected result. The browser tool exposed observed resource URLs and rendered DOM, but could not expose the isolated page's real `localStorage`, `sessionStorage`, cookie jar, main-world `window.uetq`, main-world `dataLayer`, or request bodies. Those areas are marked `UNVERIFIED` rather than inferred as `PASS`.

## Production page verification

The following production routes rendered successfully in the browser at both 390px and 1440px widths, with the VCARPETS identity, `sales@vcarpets.com`, legal links, and Cookie Preferences entry present:

- `/`
- `/privacy-policy`
- `/cookie-policy`
- `/contact`
- `/request-sample-box`

No horizontal overflow was observed at either target viewport. The production legal pages still contain the existing Microsoft Privacy Statement link. The new exact Microsoft Personal Data sentences and the new sample-request sentence are not yet on production because this branch has not been merged or deployed.

## Consent-state verification

Testing was performed against the production site with an isolated browser session and observed resource URLs.

### Fresh visitor — PASS

The initial Cookie Banner was visible. No `bat.bing.com`, Microsoft UET, standalone Clarity, GA4, Google Ads, DoubleClick, GTM, Yandex, or Meta resource was observed before a choice.

### Reject Non-Essential — PASS

Rejecting optional consent left the page stable, kept the Cookie Preferences control available, and did not load Microsoft UET or other optional tracking resources.

### Analytics Only — PASS

GA4, GTM and standalone Clarity loaded. Microsoft UET, Google Ads and DoubleClick resources were not observed.

### Advertising Only — PASS

Microsoft UET loaded with tag ID `97259674`; Google Ads resources loaded. The standalone VCARPETS Clarity tag did not load. A UET-associated Clarity endpoint was observed at `clarity.ms/tag/uet/97259674?conversions=1`, which is documented separately from the standalone Analytics-controlled Clarity tag.

### Accept All — PASS

UET, Google Ads, configured GA4, standalone Clarity and the UET-associated Clarity endpoint were observed.

### Advertising Withdrawal — PASS

After Advertising consent was changed from ON to OFF and the page refreshed, GA4 and standalone Clarity remained available under Analytics consent, while Microsoft UET, Google Ads, DoubleClick and Google consent-management requests were not observed. The browser tool could not inspect provider cookie persistence, so no claim is made that existing provider cookies were immediately deleted.

## Production PII leakage test

The following synthetic inquiry was submitted to `https://www.vcarpets.com/contact` and reached `/thank-you` successfully:

```text
Name: VCARPETS_PRIVACY_TEST
Email: privacy-test-vcarpets@example.com
Phone: +1-555-010-7721
Company: VCARPETS_TEST_COMPANY_9482
Message: VCARPETS_UET_PII_TEST_94821
```

The observed resource inventory after submission included Microsoft UET, Google Ads, GA4/GTM, standalone Clarity, Yandex and related provider requests. A case-insensitive search of all observed resource URLs found none of the five synthetic values. The Thank You page URL and observed tracking URL query strings did not contain the synthetic name, email, phone, company or message.

The form processor receiving the submitted lead fields was expected. Request bodies, Clarity payload bodies, and main-world `dataLayer` contents were not exposed by the browser isolation layer; therefore provider-specific PII safeguards remain `UNVERIFIED`, not `PASS`.

## Microsoft account-side integration

Microsoft Advertising account credentials or an authenticated account view were not available. The browser session could not verify the account-side **Enable Microsoft Clarity** setting or an equivalent UET/Clarity integration control. Status: `UNVERIFIED`.

## Branch remediation

The branch contains only the requested final-gate changes:

- Privacy Policy: adds the exact Microsoft Personal Data disclosure under Microsoft Advertising and UET.
- Cookie Policy: adds the exact Microsoft Personal Data disclosure under Microsoft Advertising UET.
- Sample request form: replaces the minimal notice with the requested wording and keeps `Privacy Policy` clickable; no pre-checked checkbox was added.
- Operations record: narrows the approved scope, preserves rollback commit `d5d8bbb`, and records the final-gate report.

The branch, including this report, passed the following checks:

```text
npm run ops:check           PASS
npm run lint                PASS (0 errors; existing ProductImage <img> warning only)
npm run audit:seo           PASS (92 page files)
npm run audit:links         PASS
npm run build -- --webpack  PASS (216 static pages)
git diff --check            PASS
```

## Strict result matrix

The **Production** column describes the currently deployed baseline. The **Branch / Preview** column describes the remediation state; Preview remains pending until the branch is pushed and a Preview deployment is available.

| Check | Production | Branch / Preview | Evidence / note |
|---|---|---|---|
| Privacy Policy | PASS | PASS | Page accessible; exact new sentence is branch-only until deployment. |
| Cookie Policy | PASS | PASS | Page accessible; exact new sentence is branch-only until deployment. |
| Microsoft Personal Data disclosure | FAIL | PASS | Production still lacks the two requested exact sentences. |
| Microsoft Privacy Statement | PASS | PASS | Visible link retained and present. |
| Contact form privacy notice | PASS | PASS | Existing notice visible and linked. |
| Sample form privacy notice | FAIL | PASS | Production still has the old notice; branch contains requested wording. |
| Cookie Preferences | PASS | PASS | Footer control available and reusable. |
| Fresh visitor | PASS | PASS | Optional trackers blocked before choice. |
| Reject | PASS | PASS | Optional trackers remained blocked. |
| Analytics Only | PASS | PASS | GA4/standalone Clarity observed; UET/Ads absent. |
| Advertising Only | PASS | PASS | UET/Ads observed; standalone Clarity absent. |
| Accept All | PASS | PASS | Both consent categories operated according to configuration. |
| Withdrawal | PASS | PASS | Future Advertising requests stopped after withdrawal; cookie deletion unverified. |
| UET PII safeguard | UNVERIFIED | UNVERIFIED | No PII in observed URLs; request body/main-world queue unavailable. |
| GA4 PII safeguard | UNVERIFIED | UNVERIFIED | No PII in observed URLs; request body/main-world queue unavailable. |
| Google Ads PII safeguard | UNVERIFIED | UNVERIFIED | No PII in observed URLs; request body/main-world queue unavailable. |
| Clarity PII safeguard | UNVERIFIED | UNVERIFIED | No PII in observed URLs; payload body unavailable. |
| URL PII safeguard | PASS | PASS | No synthetic value occurred in observed resource URLs or final URL. |
| Microsoft UET/Clarity account integration | UNVERIFIED | UNVERIFIED | Account-side authenticated verification unavailable. |
| Mobile 390px | PASS | PASS | No horizontal overflow; legal and conversion-path elements rendered. |
| Desktop 1440px | PASS | PASS | No horizontal overflow; legal and conversion-path elements rendered. |
| Build | PASS | PASS | Production build and TypeScript completed successfully. |

## Release gate

This task does not merge or deploy production. The exact legal-page and sample-form fixes remain pending PR review, Preview deployment, Preview verification, and the normal owner-authorized merge/release process. After deployment, rerun the two legal-page disclosure checks and the sample-form wording check before marking the production P0 items `PASS`.
