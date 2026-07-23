#!/usr/bin/env python3
"""Export the D1 lead table to Excel and a Google Ads offline conversion CSV."""

import json
import os
import sys
from pathlib import Path
from urllib.parse import urlparse

import pandas as pd


QUALIFIED_STATUSES = {"qualified", "quoted", "sample_sent", "won"}
GRADE_ORDER = {"A": 0, "B": 1, "C": 2}


def load_rows(path: str) -> pd.DataFrame:
    with open(path, encoding="utf-8") as file:
        payload = json.load(file)

    rows = []
    for block in payload if isinstance(payload, list) else [payload]:
        rows.extend(block.get("results", []))

    frame = pd.DataFrame(rows)
    if frame.empty:
        return frame

    text_columns = [
        "lead_id", "submitted_at", "form_name", "language", "name", "company",
        "email", "whatsapp", "country", "project_type", "product", "quantity",
        "delivery_time", "project_stage", "purchase_timeframe", "need_samples",
        "message", "page_url", "page_path", "landing_page", "referrer", "utm_source",
        "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid",
        "lead_grade", "lead_score_reasons", "lead_status", "qualified_at",
        "conversion_currency", "google_ads_uploaded_at", "next_follow_up_at", "sales_notes",
    ]
    for column in text_columns:
        if column not in frame:
            frame[column] = ""
        else:
            frame[column] = frame[column].fillna("").astype(str)

    numeric_columns = [
        "lead_score", "session_product_views", "session_max_engaged_seconds",
        "session_section_views", "conversion_value",
    ]
    for column in numeric_columns:
        if column not in frame:
            frame[column] = 0
        else:
            frame[column] = pd.to_numeric(frame[column], errors="coerce").fillna(0)

    return frame


def conversion_time(row: pd.Series) -> str:
    value = row.get("qualified_at") or row.get("submitted_at")
    timestamp = pd.to_datetime(value, utc=True, errors="coerce")
    if pd.isna(timestamp):
        return ""
    return timestamp.strftime("%Y-%m-%d %H:%M:%S+00:00")


def google_ads_rows(frame: pd.DataFrame) -> pd.DataFrame:
    if frame.empty:
        return pd.DataFrame()

    status = frame["lead_status"].str.lower().str.strip()
    eligible = frame[
        status.isin(QUALIFIED_STATUSES)
        & frame["gclid"].str.strip().ne("")
        & frame["google_ads_uploaded_at"].str.strip().eq("")
    ].copy()

    if eligible.empty:
        return pd.DataFrame()

    conversion_name = os.getenv("GOOGLE_ADS_QUALIFIED_CONVERSION_NAME", "Qualified Lead")
    values = eligible["conversion_value"].where(eligible["conversion_value"] > 0, 1.0)
    currencies = eligible["conversion_currency"].replace("", "USD")

    return pd.DataFrame({
        "Google Click ID": eligible["gclid"],
        "Conversion Name": conversion_name,
        "Conversion Time": eligible.apply(conversion_time, axis=1),
        "Conversion Value": values.map(lambda value: f"{value:.2f}"),
        "Conversion Currency": currencies,
        "Order ID": eligible["lead_id"],
    })


def traffic_source(row: pd.Series) -> str:
    source = str(row.get("utm_source", "")).strip().lower()
    if source:
        return source
    if str(row.get("gclid", "")).strip():
        return "google_ads"
    if str(row.get("fbclid", "")).strip():
        return "meta_ads"

    referrer = str(row.get("referrer", "")).strip()
    if referrer:
        hostname = urlparse(referrer).hostname or ""
        hostname = hostname.lower().removeprefix("www.")
        if hostname:
            return hostname
    return "direct_or_unknown"


def source_performance(frame: pd.DataFrame) -> pd.DataFrame:
    report = frame.copy()
    report["Source"] = report.apply(traffic_source, axis=1)
    report["Medium"] = report["utm_medium"].replace("", "not_set")
    report["Is A Lead"] = report["lead_grade"].eq("A")
    report["Is Sales Qualified"] = report["lead_status"].str.lower().isin(QUALIFIED_STATUSES)

    summary = (
        report.groupby(["Source", "Medium"], dropna=False)
        .agg(
            Leads=("lead_id", "count"),
            A_Leads=("Is A Lead", "sum"),
            Sales_Qualified=("Is Sales Qualified", "sum"),
            Average_Lead_Score=("lead_score", "mean"),
            Latest_Lead=("submitted_at", "max"),
        )
        .reset_index()
    )
    summary["A Lead Rate"] = (summary["A_Leads"] / summary["Leads"]).fillna(0)
    summary["Sales Qualified Rate"] = (summary["Sales_Qualified"] / summary["Leads"]).fillna(0)
    summary = summary.rename(columns={
        "A_Leads": "A Leads",
        "Sales_Qualified": "Sales Qualified",
        "Average_Lead_Score": "Average Lead Score",
        "Latest_Lead": "Latest Lead",
    })
    summary["Average Lead Score"] = summary["Average Lead Score"].round(1)
    summary["A Lead Rate"] = summary["A Lead Rate"].map(lambda value: f"{value:.1%}")
    summary["Sales Qualified Rate"] = summary["Sales Qualified Rate"].map(lambda value: f"{value:.1%}")
    return summary.sort_values(
        ["Sales Qualified", "A Leads", "Average Lead Score", "Leads"],
        ascending=[False, False, False, False],
    ).reset_index(drop=True)


def landing_page_performance(frame: pd.DataFrame) -> pd.DataFrame:
    report = frame.copy()
    report["Landing Page"] = report["landing_page"].where(
        report["landing_page"].str.strip().ne(""),
        report["page_path"],
    )
    report["Is A Lead"] = report["lead_grade"].eq("A")
    report["Is Sales Qualified"] = report["lead_status"].str.lower().isin(QUALIFIED_STATUSES)
    summary = (
        report.groupby("Landing Page", dropna=False)
        .agg(
            Leads=("lead_id", "count"),
            A_Leads=("Is A Lead", "sum"),
            Sales_Qualified=("Is Sales Qualified", "sum"),
            Average_Lead_Score=("lead_score", "mean"),
            Latest_Lead=("submitted_at", "max"),
        )
        .reset_index()
        .rename(columns={
            "A_Leads": "A Leads",
            "Sales_Qualified": "Sales Qualified",
            "Average_Lead_Score": "Average Lead Score",
            "Latest_Lead": "Latest Lead",
        })
    )
    summary["Average Lead Score"] = summary["Average Lead Score"].round(1)
    return summary.sort_values(
        ["Sales Qualified", "A Leads", "Average Lead Score", "Leads"],
        ascending=[False, False, False, False],
    ).reset_index(drop=True)


def main(input_path: str, output_dir: str = ".") -> None:
    output = Path(output_dir)
    output.mkdir(parents=True, exist_ok=True)
    frame = load_rows(input_path)

    excel_path = output / "vishome_leads.xlsx"
    ads_path = output / "google_ads_qualified_leads.csv"

    if frame.empty:
        pd.DataFrame().to_excel(excel_path, sheet_name="All Leads", index=False)
        pd.DataFrame(columns=[
            "Google Click ID", "Conversion Name", "Conversion Time",
            "Conversion Value", "Conversion Currency", "Order ID",
        ]).to_csv(ads_path, index=False)
        print(f"No leads found. Empty files created in {output.resolve()}")
        return

    frame["_grade_order"] = frame["lead_grade"].map(GRADE_ORDER).fillna(3)
    frame = frame.sort_values(
        ["_grade_order", "lead_score", "submitted_at"],
        ascending=[True, False, False],
    ).drop(columns=["_grade_order"])

    ads = google_ads_rows(frame)
    sources = source_performance(frame)
    landing_pages = landing_page_performance(frame)
    with pd.ExcelWriter(excel_path) as writer:
        frame.to_excel(writer, sheet_name="All Leads", index=False)
        sources.to_excel(writer, sheet_name="Source Performance", index=False)
        landing_pages.to_excel(writer, sheet_name="Landing Pages", index=False)
        ads.to_excel(writer, sheet_name="Qualified for Ads", index=False)

    if ads.empty:
        ads = pd.DataFrame(columns=[
            "Google Click ID", "Conversion Name", "Conversion Time",
            "Conversion Value", "Conversion Currency", "Order ID",
        ])
    ads.to_csv(ads_path, index=False)

    print(f"Exported {len(frame)} leads to {excel_path}")
    print(f"Prepared {len(ads)} sales-qualified GCLID conversions in {ads_path}")
    print(frame[["lead_grade", "lead_score", "company", "country", "product", "lead_status"]].head(20).to_string(index=False))


if __name__ == "__main__":
    source = sys.argv[1] if len(sys.argv) > 1 else "leads.json"
    destination = sys.argv[2] if len(sys.argv) > 2 else "."
    main(source, destination)
