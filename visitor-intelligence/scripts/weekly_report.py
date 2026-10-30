#!/usr/bin/env python3
"""Offline site-separated report; network identity and scores are unverified signals."""

import argparse
import json
import re
from urllib.parse import urlsplit
import sys
from collections import Counter
from pathlib import Path

import pandas as pd


HOT_WEIGHTS = {
    "/thank-you": 30,
    "/contact": 22,
    "/request-sample-box": 20,
    "/products/public-area/gold-mining-carpet-mat": 14,
    "/products/public-area/custom-sculpted-wool-lobby-rug": 14,
    "/products/public-area/public-area-heavy-duty": 13,
    "/commercial-carpet-tiles": 10,
    "/products/public-area": 9,
    "/products/wall-to-wall": 9,
    "/products/carpet-tiles": 9,
    "/products": 6,
    "/solutions": 5,
    "/projects": 5,
}

TEXT_COLUMNS = (
    "day", "ip_hash", "visitor_id", "session_id", "visitor_label", "asn", "org",
    "domain", "country", "network_type", "company_confidence", "classification_reason",
    "site", "path", "query", "referrer", "landing", "event", "language", "timezone",
    "screen", "traffic_channel", "ai_source", "ai_referrer_host", "ai_landing_path",
    "utm_source", "utm_medium",
    "utm_campaign", "utm_term", "utm_content", "gclid",
    "product_interest", "intent_grade", "intent_reasons", "ts",
)


def normalize_site(value: str) -> str:
    """Normalize host casing/www only; never merge different registrable domains."""
    raw = str(value).strip()
    try:
        parsed = urlsplit(raw if "://" in raw else "//" + raw)
        host = (parsed.hostname or "").lower().rstrip(".")
        if parsed.username or parsed.password or parsed.port not in (None, 80, 443):
            return "unknown"
        host = host.removeprefix("www.")
        if not re.fullmatch(r"[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?", host) or "." not in host:
            return "unknown"
        return host
    except (ValueError, TypeError):
        return "unknown"


def safe_cell(value):
    if isinstance(value, str) and value.lstrip().startswith(("=", "+", "-", "@")):
        return "'" + value
    return value


def safe_frame(frame):
    return frame.apply(lambda column: column.map(safe_cell))


def load_rows(path: str) -> pd.DataFrame:
    with open(path, encoding="utf-8") as file:
        payload = json.load(file)

    rows = []
    for block in payload if isinstance(payload, list) else [payload]:
        rows.extend(block.get("results", []))

    frame = pd.DataFrame(rows)
    if frame.empty:
        return frame

    for column in TEXT_COLUMNS:
        if column not in frame:
            frame[column] = ""
        else:
            frame[column] = frame[column].fillna("").astype(str)

    for column in ("duration", "company_candidate", "internal_visit", "intent_score", "ai_referred"):
        if column not in frame:
            frame[column] = 0
        else:
            frame[column] = pd.to_numeric(frame[column], errors="coerce").replace([float("inf"), -float("inf")], 0).fillna(0).clip(lower=0, upper=86400 if column == "duration" else 1000000).astype(int)

    frame["site"] = frame["site"].map(normalize_site)
    frame["visitor_key"] = frame["visitor_id"]
    frame.loc[frame["visitor_key"] == "", "visitor_key"] = frame["ip_hash"]
    frame.loc[frame["visitor_key"] == "", "visitor_key"] = (
        frame["org"] + "|" + frame["country"] + "|" + frame.index.astype(str)
    )
    return frame


def mode(series: pd.Series) -> str:
    values = [value for value in series.astype(str).tolist() if value]
    return Counter(values).most_common(1)[0][0] if values else ""


def unique_text(series: pd.Series, limit: int = 12) -> str:
    values = []
    for value in series.astype(str):
        if value and value not in values:
            values.append(value)
    return " | ".join(values[:limit])


def page_weight(path: str) -> int:
    for prefix, weight in HOT_WEIGHTS.items():
        if path.startswith(prefix):
            return weight
    return 1


def score_group(group: pd.DataFrame) -> float:
    event_score = group["intent_score"].max()
    duration_score = min(group["duration"].sum() / 60, 30)
    depth_score = min(group["path"].nunique() * 2, 20)
    return_score = min(max(group["day"].nunique() - 1, 0) * 8, 24)
    repeat_session_score = min(max(group["session_id"].nunique() - 1, 0) * 3, 12)
    return round(min(event_score + duration_score + depth_score + return_score + repeat_session_score, 100), 1)


def grade(score: float) -> str:
    if score >= 45:
        return "A"
    if score >= 22:
        return "B"
    return "C"


def company_match(group: pd.DataFrame) -> str:
    if group["company_candidate"].max() == 1:
        if "high" in group["company_confidence"].str.lower().values:
            return "Network-based company candidate (unverified)"
        return "Network-based company candidate (unverified)"
    if "isp" in group["network_type"].str.lower().values:
        return "Company unknown - ISP/mobile network"
    if "cloud" in group["network_type"].str.lower().values:
        return "Company unknown - cloud/VPN network"
    return "Company unknown"


def review_note(group: pd.DataFrame) -> str:
    notes = []
    if group["internal_visit"].max() == 1:
        notes.append("Internal-country visit; review before outreach")
    network_types = set(group["network_type"].str.lower())
    if "isp" in network_types:
        notes.append("Residential/mobile network")
    if "cloud" in network_types:
        notes.append("Cloud or VPN network")
    if group["duration"].sum() >= 300 or group["path"].nunique() >= 5:
        notes.append("Strong engagement")
    return "; ".join(notes) or "Normal external visit"


def inferred_need(group: pd.DataFrame) -> str:
    interests = unique_text(group["product_interest"], 5)
    paths = " ".join(group["path"].astype(str)).lower()
    if "/thank-you" in paths:
        return f"Thank-you page observed (not confirmed inquiry); {interests or 'commercial carpet project'}"
    if "/contact" in paths:
        return f"Project quotation; {interests or 'commercial carpet'}"
    if "/request-sample-box" in paths:
        return f"Sample request; {interests or 'carpet samples'}"
    return interests or "Commercial carpet research"


def build_visitor_frame(frame: pd.DataFrame) -> pd.DataFrame:
    leads = []
    for (site, visitor_key), group in frame.groupby(["site", "visitor_key"], dropna=False):
        score = score_group(group)
        leads.append({
            "Site": site,
            "Priority": grade(score),
            "Rule Intent Score": score,
            "Visitor Label": mode(group["visitor_label"]),
            "Visitor ID": mode(group["visitor_id"]) or visitor_key,
            "Company Match": company_match(group),
            "Company Confidence": mode(group["company_confidence"]) or "low",
            "Network Type": mode(group["network_type"]) or "unknown",
            "Company / Org": mode(group["org"]),
            "Domain": mode(group["domain"]),
            "Country": mode(group["country"]),
            "Likely Need": inferred_need(group),
            "Product Interest": unique_text(group["product_interest"], 6),
            "Search Terms": unique_text(group["utm_term"], 6),
            "Campaign": unique_text(group["utm_campaign"], 4),
            "Traffic Channel": mode(group["traffic_channel"]),
            "AI Source": mode(group["ai_source"]),
            "AI Referrer Host": mode(group["ai_referrer_host"]),
            "AI First Landing Page": mode(group["ai_landing_path"]),
            "AI Referred": "Yes" if group["ai_referred"].max() == 1 else "No",
            "Top Referrer": mode(group["referrer"]),
            "Visit Days": group["day"].nunique(),
            "Sessions": max(group["session_id"].nunique(), 1),
            "Pageviews": len(group),
            "Unique Pages": group["path"].nunique(),
            "Observed Sampling (min)": round(group["duration"].sum() / 60, 1),
            "First Visit": group["ts"].min(),
            "Last Visit": group["ts"].max(),
            "Internal Visit": "Yes" if group["internal_visit"].max() == 1 else "No",
            "Review Note": review_note(group),
            "Intent Reasons": unique_text(group["intent_reasons"], 8),
            "Viewed Pages": unique_text(group["path"], 15),
        })

    visitor_frame = pd.DataFrame(leads)
    if visitor_frame.empty:
        return visitor_frame
    priority_order = visitor_frame["Priority"].map({"A": 0, "B": 1, "C": 2}).fillna(9)
    visitor_frame.insert(0, "_priority_order", priority_order)
    return visitor_frame.sort_values(
        ["_priority_order", "Rule Intent Score", "Visit Days", "Pageviews"],
        ascending=[True, False, False, False],
    ).drop(columns=["_priority_order"]).reset_index(drop=True)


def build_company_frame(visitor_frame: pd.DataFrame) -> pd.DataFrame:
    if visitor_frame.empty:
        return visitor_frame.copy()
    return visitor_frame[
        visitor_frame["Company Match"].isin(["Network-based company candidate (unverified)"])
        & (visitor_frame["Internal Visit"] == "No")
    ].copy().reset_index(drop=True)


def build_unknown_frame(visitor_frame: pd.DataFrame) -> pd.DataFrame:
    if visitor_frame.empty:
        return visitor_frame.copy()
    return visitor_frame[
        visitor_frame["Priority"].isin(["A", "B"])
        & visitor_frame["Company Match"].str.startswith("Company unknown")
        & (visitor_frame["Internal Visit"] == "No")
    ].copy().reset_index(drop=True)


def build_ai_frame(visitor_frame: pd.DataFrame) -> pd.DataFrame:
    if visitor_frame.empty:
        return visitor_frame.copy()
    return visitor_frame[
        visitor_frame["AI Referred"].eq("Yes")
        | visitor_frame["AI Source"].ne("")
        | visitor_frame["Traffic Channel"].eq("ai_referral")
    ].copy().reset_index(drop=True)


def build_page_frame(frame: pd.DataFrame) -> pd.DataFrame:
    external = frame[frame["internal_visit"] == 0].copy()
    if external.empty:
        return pd.DataFrame()
    page_frame = (
        external.groupby(["site", "path"], dropna=False)
        .agg(
            Pageviews=("path", "size"),
            Unique_Visitors=("visitor_key", "nunique"),
            Company_Candidates=("company_candidate", "sum"),
            Countries=("country", "nunique"),
            Total_Duration_Seconds=("duration", "sum"),
            Average_Duration_Seconds=("duration", "mean"),
        )
        .reset_index()
        .rename(columns={"site": "Site", "path": "Page"})
    )
    page_frame["Intent Weight"] = page_frame["Page"].map(page_weight)
    page_frame["Observed Sampling (min)"] = (page_frame.pop("Total_Duration_Seconds") / 60).round(1)
    page_frame["Average Observed Sampling (sec)"] = page_frame.pop("Average_Duration_Seconds").round(1)
    page_frame["Rule Attraction Score"] = (
        page_frame["Unique_Visitors"] * 4
        + page_frame["Company_Candidates"] * 5
        + page_frame["Pageviews"] * 2
        + page_frame["Average Observed Sampling (sec)"].clip(upper=180) / 30
        + page_frame["Intent Weight"]
    ).round(1)
    return page_frame.rename(columns={
        "Unique_Visitors": "Unique Visitors",
        "Company_Candidates": "Company Candidates",
        "Countries": "Country Count",
    }).sort_values(["Rule Attraction Score", "Unique Visitors", "Pageviews"], ascending=False).reset_index(drop=True)


def build_aggregate_frame(frame, min_visitors=5):
    """Data minimization, not a mathematical anonymity guarantee."""
    columns = ["Site", "Day", "Page", "Channel", "Events", "Distinct Browser Keys", "Observed Sampling Seconds"]
    if frame.empty:
        return pd.DataFrame(columns=columns)
    work = frame[frame["internal_visit"].eq(0)].copy()
    # Only coarse known categories; never echo free-form source/query/identity data.
    allowed_channels = {"organic_search", "paid_search", "organic_social", "paid_social", "referral", "direct", "email", "ai_referral"}
    work["traffic_channel"] = work["traffic_channel"].where(work["traffic_channel"].isin(allowed_channels), "other")
    work["day"] = pd.to_datetime(work["day"], errors="coerce", utc=True).dt.strftime("%Y-%m-%d").fillna("unknown")
    # Paths may contain personal data: only retain known broad sections.
    sections = ("/products", "/blog", "/projects", "/solutions", "/contact", "/thank-you", "/request-sample-box")
    work["path"] = work["path"].map(lambda path: next((x for x in sections if path == x or path.startswith(x + "/")), "/" if path == "/" else "other"))
    result = work.groupby(["site", "day", "path", "traffic_channel"], dropna=False).agg(
        Events=("path", "size"), Keys=("visitor_key", "nunique"), Seconds=("duration", "sum")
    ).reset_index()
    result = result[result["Keys"] >= min_visitors].copy()
    result.columns = columns
    return result


def main(input_path, output_path="visitor_intelligence.xlsx", aggregate_only=False, min_visitors=5, site=None):
    if min_visitors < 2:
        raise ValueError("Aggregate threshold must be at least 2; default is 5")
    frame = load_rows(input_path)
    if site and not frame.empty:
        frame = frame[frame["site"].eq(normalize_site(site))].copy()
    notes = pd.DataFrame({"Limitations": [
        "Site separation is mandatory. Different domains are not merged; unknown site is explicit.",
        "Observed sampling seconds are beacon samples, not complete dwell time or confirmed attention.",
        "A/B/C and scores are heuristic rules, not verified purchasing intent or lead qualification.",
        "ASN/network company candidates do not identify a visitor's employer; no verified company identity is claimed.",
        "Thank-you page views do not establish unique server-confirmed inquiries.",
        "Aggregate mode excludes identity fields, uses coarse page sections and suppresses small groups; this is not a guarantee of anonymity.",
        "Detailed mode contains pseudonymous/source data. Keep private and share only with authorized recipients.",
        "No tracking, D1 collection, data mutation or identity enrichment is performed by this offline script.",
    ]})
    sheets = {"Read Me": notes}
    if aggregate_only:
        sheets["Site Aggregates"] = build_aggregate_frame(frame, min_visitors)
    else:
        visitors = build_visitor_frame(frame) if not frame.empty else pd.DataFrame()
        sheets.update({"Visitor Leads": visitors, "Company Candidates": build_company_frame(visitors),
                       "High Intent Unknown": build_unknown_frame(visitors), "AI Referrals": build_ai_frame(visitors),
                       "Page Performance": build_page_frame(frame) if not frame.empty else pd.DataFrame()})
        # All counts are site-scoped; do not deduplicate browser keys across domains.
        sheets["Site Summary"] = frame.groupby("site", dropna=False).agg(
            Events=("site", "size"), Browser_Keys=("visitor_key", "nunique")
        ).reset_index() if not frame.empty else pd.DataFrame(columns=["site", "Events", "Browser_Keys"])
        sheets["Raw Visits"] = frame.sort_values("ts", ascending=False).drop(columns=["visitor_key"], errors="ignore") if not frame.empty else pd.DataFrame()
    with pd.ExcelWriter(Path(output_path), engine="openpyxl") as writer:
        for name, sheet in sheets.items():
            safe_frame(sheet).to_excel(writer, sheet_name=name, index=False)
            ws = writer.sheets[name]
            ws.freeze_panes = "A2"
            ws.auto_filter.ref = ws.dimensions
    print(f"Exported {len(frame)} input events to {output_path}; no verified company or complete dwell-time claim.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", nargs="?", default="raw.json")
    parser.add_argument("output", nargs="?", default="visitor_intelligence.xlsx")
    parser.add_argument("--aggregate-only", action="store_true", help="Exclude raw/visitor identity data and suppress small coarse groups")
    parser.add_argument("--min-visitors", type=int, default=5)
    parser.add_argument("--site", help="Export exactly one normalized site; no cross-domain aliasing")
    args = parser.parse_args()
    main(args.input, args.output, args.aggregate_only, args.min_visitors, args.site)
