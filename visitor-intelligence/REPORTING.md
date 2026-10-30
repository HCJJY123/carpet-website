# Site-separated offline reporting

This script does not read D1 itself, change collection, identify a person's employer, or verify an inquiry. Use only authorized local exports. Keep detailed reports private.

## Recommended aggregate export

    python visitor-intelligence/scripts/weekly_report.py authorized-export.json aggregate.xlsx --aggregate-only
    python visitor-intelligence/scripts/weekly_report.py authorized-export.json carpet.xlsx --aggregate-only --site vcarpets.com

Default groups require at least 5 distinct browser keys; `--min-visitors` cannot be below 2. Counts are event/browser-key observations, not confirmed people. Aggregate output has only Site, Day, coarse Page section, Channel, Events, Distinct Browser Keys, and Observed Sampling Seconds. There are no raw or individual visitor sheets. This minimizes disclosure but is not a mathematical anonymity guarantee; do not share without appropriate authorization.

`--site` normalizes casing, a leading www, scheme and a trailing dot only. It does not combine vishomecarpet.com with vcarpets.com or inflatcustom.com. Missing/invalid sites become `unknown`; do not silently attribute them to a website. Cross-site identical visitor IDs and paths stay separate.

## Detailed export

The previous positional command remains supported, but detailed sheets include pseudonymous/source fields. Only use for authorized internal review. No claims of verified company identity are made: ASN/IP/network-derived company candidates are unverified. A/B/C and intent/attraction scores are rule-based heuristics, not sales qualification.

The current beacon may send an initial approximately 8-second sample and not update complete dwell time. All report duration labels therefore describe observed sampling, never full visit duration. Invalid/negative/infinite values become zero and extreme samples are capped at 86400 seconds as a defensive input bound, not evidence of attention. Thank-you page observations do not prove a unique submitted inquiry. Do not add multiple success-stage events as separate leads.

## Validation and scope

    cd visitor-intelligence/scripts
    python -m unittest -v

Synthetic tests cover same IDs/paths on multiple domains, old-domain separation, missing sites, bad durations, aggregate small-cell suppression and forbidden-field absence, per-site filtering, empty data, and Excel formula injection. No production data is included in these tests. Website code, Worker collection, D1 schema, account access, tracking and advertisement settings remain unchanged. No actual company opportunity list is delivered without a separately verified authorized source export.
