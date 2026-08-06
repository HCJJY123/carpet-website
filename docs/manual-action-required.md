# Manual Action Required

Last reviewed: 2026-08-06

These actions should not be automated by Codex because they require account access, commercial confirmation, legal/brand approval or third-party review.

## Platform and Account Actions

- Register or log in to Archiproducts, Architonic, Archello, BIMobject, MaterialDistrict, SpecifiedBy, NBS Source, CADdetails, ARCAT and Sweets.
- Confirm whether each platform accepts the manufacturer, country, product category and listing budget.
- Confirm any listing fees, contract terms, required document formats and review timelines.
- Complete CAPTCHA, identity checks, business verification and email verification manually.

## Business Confirmation

- Confirm exact company legal name, factory address, public contact person, email and phone for external profiles.
- Confirm which certifications, test reports and lab documents can be publicly shared.
- Confirm whether factory area, employee count, founding year and export market figures can be used externally.
- Approve all public project references before outreach.

## Outreach Actions

- Send emails, LinkedIn messages, WhatsApp messages and platform forms manually.
- Do not send more than 3 touches to the same prospect within 90 days.
- Stop contacting immediately after refusal or unsubscribe request.
- Record all responses in `data/outreach-log.csv`.

## Google / Analytics Actions

- Confirm GA4, Google Ads and Search Console access in the browser.
- Verify document download and outbound click events after public pages are deployed.
- Do not claim Looker Studio or GA4 dashboards are configured unless account access was used and verified.

## Additional Confirmation Added During P0/P1 Execution

- CONFIRM_DOCUMENT_VERSION for each PDF download.
- CONFIRM_DOCUMENT_ISSUE_DATE for each PDF download.
- CONFIRM_PRIMARY_CONTACT for outreach emails and platform submissions.
- CONFIRM_REAL_NAME for all outbound email templates.
- CONFIRM_CONTACT_NAME and CONFIRM_EDITOR_NAME before sending outreach.
- CONFIRM_CASE_URL before requesting a project partner backlink.
- CONFIRM_BIM_PLATFORM_REQUIREMENTS before preparing platform-specific BIM files.
- CONFIRM_CAD_PATTERN_FILES before listing CAD downloads.
- CONFIRM_REVIT_SERVICE_PROVIDER before producing Revit assets.
- CONFIRM_PRODUCT_METADATA_FOR_BIM before any BIM/CAD platform submission.
- CONFIRM_BIM_OR_CAD_PUBLICATION_PERMISSION for external platforms.
- CONFIRM_UPLOAD_HANDLER if the architect/designer form should support drawing uploads. The current contact form does not add file upload because no verified upload service is configured.

## Public Claim Restrictions

- Certification and test-report pages must remain request/verification pages until exact current documents are confirmed.
- Project sheet pages must not publish named client or hotel-brand project sheets until authorization is confirmed.
- Link prospect records must remain in `Researching` until the target domain, contact route and relevance are manually verified.
