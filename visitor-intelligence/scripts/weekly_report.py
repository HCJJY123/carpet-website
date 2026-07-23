#!/usr/bin/env python3
"""
Build a company-level weekly visitor report from Cloudflare D1 JSON export.

Usage:
  wrangler d1 execute vishome_visitors --remote --json \
    --command "SELECT * FROM visits WHERE day >= date('now','-7 day')" > raw.json
  python3 scripts/weekly_report.py raw.json
"""

import json
import sys
from collections import Counter
from pathlib import Path

import pandas as pd


HOT_WEIGHTS = {
    "/contact": 12,
    "/request-sample-box": 10,
    "/thank-you": 16,
    "/products/public-area/gold-mining-carpet-mat": 12,
    "/products/public-area/custom-sculpted-wool-lobby-rug": 12,
    "/products/public-area/public-area-heavy-duty": 11,
    "/products/public-area": 8,
    "/products/wall-to-wall": 8,
    "/products/carpet-tiles": 8,
    "/products": 6,
    "/solutions": 5,
    "/projects": 5,
    "/hotel-carpet": 5,
}

EXCLUDED_COUNTRIES = {"CN", "US"}


def load_rows(path: str) -> pd.DataFrame:
    with open(path, encoding="utf-8") as file:
        payload = json.load(file)

    rows = []
    for block in payload if isinstance(payload, list) else [payload]:
        rows.extend(block.get("results", []))

    frame = pd.DataFrame(rows)
    if frame.empty:
        return frame

    for column in (
        "day",
        "org",
        "domain",
        "country",
        "site",
        "path",
        "query",
        "referrer",
        "landing",
        "event",
        "language",
        "timezone",
        "screen",
        "ts",
    ):
        if column not in frame:
            frame[column] = ""
        else:
            frame[column] = frame[column].fillna("").astype(str)

    if "duration" not in frame:
        frame["duration"] = 0
    else:
        frame["duration"] = pd.to_numeric(frame["duration"], errors="coerce").fillna(0).astype(int)
    return frame


def mode(series: pd.Series) -> str:
    values = [value for value in series.astype(str).tolist() if value]
    return Counter(values).most_common(1)[0][0] if values else ""


def page_weight(path: str) -> int:
    for prefix, weight in HOT_WEIGHTS.items():
        if path.startswith(prefix):
            return weight
    return 1


def score_group(group: pd.DataFrame) -> float:
    page_score = sum(page_weight(path) for path in group["path"])
    duration_score = min(group["duration"].sum() / 60, 40)
    return_days_score = max(group["day"].nunique() - 1, 0) * 8
    depth_score = min(group["path"].nunique() * 2, 20)
    return round(page_score + duration_score + return_days_score + depth_score, 1)


def grade(score: float) -> str:
    if score >= 35:
        return "A"
    if score >= 15:
        return "B"
    return "C"


def outreach_angle(paths: list[str]) -> str:
    joined = " ".join(paths)
    if "/products/wall-to-wall" in joined or "hotel" in joined:
        return "Hotel and hospitality carpet specification support"
    if "/products/carpet-tiles" in joined:
        return "Commercial carpet tile pricing and sample support"
    if "/products/public-area" in joined:
        return "Public-area flooring durability and quotation support"
    if "/contact" in joined:
        return "Project quotation follow-up"
    return "Commercial carpet supplier introduction"


def main(input_path: str) -> None:
    frame = load_rows(input_path)
    if not frame.empty:
        frame = frame[~frame["country"].str.upper().isin(EXCLUDED_COUNTRIES)].copy()
    if frame.empty:
        print("No company visitors found after excluding China and the United States.")
        return

    leads = []
    grouped = frame.groupby(["org", "domain", "country"], dropna=False)
    for (org, domain, country), group in grouped:
        paths = sorted(path for path in group["path"].unique() if path)
        score = score_group(group)
        leads.append({
            "Priority": grade(score),
            "Intent Score": score,
            "Company / Org": org,
            "Domain": domain,
            "Country": country,
            "Site": mode(group["site"]),
            "Visit Days": group["day"].nunique(),
            "Pageviews": len(group),
            "Unique Pages": group["path"].nunique(),
            "Total Duration (min)": round(group["duration"].sum() / 60, 1),
            "First Visit": group["ts"].min(),
            "Last Visit": group["ts"].max(),
            "Top Referrer": mode(group["referrer"]),
            "Outreach Angle": outreach_angle(paths),
            "Viewed Pages": " | ".join(paths[:12]),
        })

    lead_frame = pd.DataFrame(leads).sort_values(
        ["Priority", "Intent Score", "Visit Days", "Pageviews"],
        ascending=[True, False, False, False],
    ).reset_index(drop=True)

    page_frame = (
        frame.groupby("path", dropna=False)
        .agg(
            Pageviews=("path", "size"),
            Unique_Companies=("org", "nunique"),
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
        page_frame["Unique_Companies"] * 5
        + page_frame["Pageviews"] * 2
        + page_frame["Average Duration (sec)"].clip(upper=180) / 30
        + page_frame["Intent Weight"]
    ).round(1)
    page_frame = page_frame.rename(columns={
        "Unique_Companies": "Unique Companies",
        "Countries": "Country Count",
    }).sort_values(
        ["Attraction Score", "Unique Companies", "Pageviews"],
        ascending=[False, False, False],
    ).reset_index(drop=True)

    output = Path("weekly_leads.xlsx")
    with pd.ExcelWriter(output) as writer:
        lead_frame.to_excel(writer, sheet_name="Leads", index=False)
        page_frame.to_excel(writer, sheet_name="Page Performance", index=False)
        frame.sort_values("ts", ascending=False).to_excel(writer, sheet_name="Raw Visits", index=False)

    print(f"Exported {len(lead_frame)} company leads and {len(page_frame)} page summaries to {output}")
    print(lead_frame.head(20).to_string(index=False))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "raw.json")
