# Vishomecarpet AI Referral Monitoring Rules

Date: 2026-07-30

## 1. Source classification

Classify a visit as `ai_referral` only when the first session referrer or `utm_source` matches a known source:

| Source | Matching signals | Stored `ai_source` |
| --- | --- | --- |
| ChatGPT | `chatgpt.com`, `openai.com`, `utm_source=chatgpt` | `chatgpt` |
| Perplexity | `perplexity.ai`, `utm_source=perplexity` | `perplexity` |
| Claude | `claude.ai`, `utm_source=claude` | `claude` |
| Google Gemini | `gemini.google.com`, `bard.google.com`, `utm_source=gemini` | `google_gemini` |
| Microsoft Copilot | `copilot.microsoft.com`, `bing.com/chat`, `utm_source=copilot` | `microsoft_copilot` |

Poe and You.com are recorded when their referrer is visible, but are not combined with the five core sources.

## 2. Attribution model

- Use first-touch attribution within the browser session.
- Persist the source across subsequent page navigation until the session ends.
- Store `ai_source`, `ai_referred`, `ai_referrer_host`, and `ai_landing_path`.
- Also send `ai_referral_landing` to GA4 once per session.
- Do not classify direct traffic as AI traffic when the referrer is absent and no AI UTM exists.

## 3. D1 and weekly report rules

- AI referrals receive a six-point intent uplift, but this does not make an anonymous residential visitor a confirmed company.
- The Excel report contains an `AI Referrals` sheet sorted with the same intent model as other traffic.
- Review AI source, first landing page, all viewed pages, engagement time, inferred product interest, network type, and company confidence together.
- Exclude internal/test, bot, cloud/VPN, and obvious ISP traffic from the confirmed-company count; retain high-intent anonymous traffic for content analysis.

## 4. Commercial reporting

Report weekly:

1. AI-referred sessions by source.
2. AI landing pages by session count.
3. Product/category pages viewed after the AI landing.
4. Quote form, email, WhatsApp, and sample-request conversions attributed to AI sessions.
5. AI sessions reaching at least two product pages or 60 seconds of engagement.
6. Confirmed company candidates and anonymous high-intent sessions separately.

## 5. Quality controls and limitations

- AI tools may remove or suppress referrer data, so measured AI referrals are a conservative lower bound.
- Organization detection is ASN/IP-based and identifies a company network, not an individual person.
- Do not infer a company from a residential ISP, mobile carrier, cloud host, or VPN.
- Do not contact a visitor by claiming that their browsing was individually monitored.
- Retain only hashed IP identifiers and follow the site's privacy and consent disclosures.

## 6. Retest schedule

- Check D1 ingestion after each analytics deployment.
- Review source matching monthly as AI tools change domains and link behavior.
- Compare AI landing-page visibility and inquiry conversion every Monday.
- Retest the 30-question AI recommendation benchmark after material content, product-data, or structured-data changes.
