#!/usr/bin/env python3
"""Build a visitor- and company-level intelligence workbook from a D1 JSON export."""

import json
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
    "screen", "traffic_channel", "ai_source", "utm_source", "utm_medium",
    "utm_campaign", "utm_term", "utm_content", "gclid",
    "product_interest", "intent_grade", "intent_reasons", "ts",
)


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

    for column in ("duration", "company_candidate", "internal_visit", "intent_score"):
        if column not in frame:
            frame[column] = 0
        else:
            frame[column] = pd.to_numeric(frame[column], errors="coerce").fillna(0).astype(int)

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
            return "Company identified"
        return "Probable company"
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
        return f"Submitted inquiry; {interests or 'commercial carpet project'}"
    if "/contact" in paths:
        return f"Project quotation; {interests or 'commercial carpet'}"
    if "/request-sample-box" in paths:
        return f"Sample request; {interests or 'carpet samples'}"
    return interests or "Commercial carpet research"


def build_visitor_frame(frame: pd.DataFrame) -> pd.DataFrame:
    leads = []
    for visitor_key, group in frame.groupby("visitor_key", dropna=False):
        score = score_group(group)
        leads.append({
            "Priority": grade(score),
            "Intent Score": score,
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
            "Top Referrer": mode(group["referrer"]),
            "Visit Days": group["day"].nunique(),
            "Sessions": max(group["session_id"].nunique(), 1),
            "Pageviews": len(group),
            "Unique Pages": group["path"].nunique(),
            "Total Duration (min)": round(group["duration"].sum() / 60, 1),
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
        ["_priority_order", "Intent Score", "Visit Days", "Pageviews"],
        ascending=[True, False, False, False],
    ).drop(columns=["_priority_order"]).reset_index(drop=True)


def build_company_frame(visitor_frame: pd.DataFrame) -> pd.DataFrame:
    if visitor_frame.empty:
        return visitor_frame.copy()
    return visitor_frame[
        visitor_frame["Company Match"].isin(["Company identified", "Probable company"])
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
        visitor_frame["AI Source"].ne("")
        | visitor_frame["Traffic Channel"].eq("ai_referral")
    ].copy().reset_index(drop=True)


def build_page_frame(frame: pd.DataFrame) -> pd.DataFrame:
    external = frame[frame["internal_visit"] == 0].copy()
    if external.empty:
        return pd.DataFrame()
    page_frame = (
        external.groupby("path", dropna=False)
        .agg(
            Pageviews=("path", "size"),
            Unique_Visitors=("visitor_key", "nunique"),
            Company_Candidates=("company_candidate", "sum"),
            Countries=("country", "nunique"),
            Total_Duration_Seconds=("duration", "sum"),
            Average_Duration_Seconds=("duration", "mean"),
        )
        .reset_index()
        .rename(columns={"path": "Page"})
    )
    page_frame["Intent Weight"] = page_frame["Page"].map(page_weight)
    page_frame["Total Duration (min)"] = (page_frame.pop("Total_Duration_Seconds") / 60).round(1)
    page_frame["Average Duration (sec)"] = page_frame.pop("Average_Duration_Seconds").round(1)
    page_frame["Attraction Score"] = (
        page_frame["Unique_Visitors"] * 4
        + page_frame["Company_Candidates"] * 5
        + page_frame["Pageviews"] * 2
        + page_frame["Average Duration (sec)"].clip(upper=180) / 30
        + page_frame["Intent Weight"]
    ).round(1)
    return page_frame.rename(columns={
        "Unique_Visitors": "Unique Visitors",
        "Company_Candidates": "Company Candidates",
        "Countries": "Country Count",
    }).sort_values(["Attraction Score", "Unique Visitors", "Pageviews"], ascending=False).reset_index(drop=True)


def main(input_path: str, output_path: str = "visitor_intelligence.xlsx") -> None:
    frame = load_rows(input_path)
    visitor_frame = build_visitor_frame(frame) if not frame.empty else pd.DataFrame()
    company_frame = build_company_frame(visitor_frame)
    unknown_frame = build_unknown_frame(visitor_frame)
    ai_frame = build_ai_frame(visitor_frame)
    page_frame = build_page_frame(frame) if not frame.empty else pd.DataFrame()

    summary = pd.DataFrame([
        {"Metric": "Raw visit events", "Value": len(frame)},
        {"Metric": "Unique visitors", "Value": len(visitor_frame)},
        {"Metric": "A-grade visitors", "Value": int((visitor_frame.get("Priority") == "A").sum()) if not visitor_frame.empty else 0},
        {"Metric": "B-grade visitors", "Value": int((visitor_frame.get("Priority") == "B").sum()) if not visitor_frame.empty else 0},
        {"Metric": "Company matches", "Value": len(company_frame)},
        {"Metric": "High-intent company unknown", "Value": len(unknown_frame)},
        {"Metric": "AI referral visitors", "Value": len(ai_frame)},
        {"Metric": "Internal-country visitors retained", "Value": int((visitor_frame.get("Internal Visit") == "Yes").sum()) if not visitor_frame.empty else 0},
    ])

    output = Path(output_path)
    with pd.ExcelWriter(output) as writer:
        summary.to_excel(writer, sheet_name="Summary", index=False)
        visitor_frame.to_excel(writer, sheet_name="Visitor Leads", index=False)
        company_frame.to_excel(writer, sheet_name="Company Matches", index=False)
        unknown_frame.to_excel(writer, sheet_name="High Intent Unknown", index=False)
        ai_frame.to_excel(writer, sheet_name="AI Referrals", index=False)
        page_frame.to_excel(writer, sheet_name="Page Performance", index=False)
        frame.sort_values("ts", ascending=False).drop(columns=["visitor_key"], errors="ignore").to_excel(
            writer, sheet_name="Raw Visits", index=False
        )

    print(f"Exported {len(visitor_frame)} visitors, {len(company_frame)} company matches, and {len(unknown_frame)} high-intent unknown visitors to {output}")
    if not visitor_frame.empty:
        print(visitor_frame[["Priority", "Intent Score", "Visitor Label", "Company Match", "Company / Org", "Country", "Likely Need"]].head(20).to_string(index=False))


if __name__ == "__main__":
    main(
        sys.argv[1] if len(sys.argv) > 1 else "raw.json",
        sys.argv[2] if len(sys.argv) > 2 else "visitor_intelligence.xlsx",
    )
