#!/usr/bin/env python3

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "downloads"
NAVY = colors.HexColor("#102A43")
GOLD = colors.HexColor("#C8752A")
MUTED = colors.HexColor("#52677A")
LIGHT = colors.HexColor("#F5F7F8")
BORDER = colors.HexColor("#D9E0E5")


def styles():
    base = getSampleStyleSheet()
    return {
        "brand": ParagraphStyle(
            "Brand", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=16, leading=18, textColor=NAVY,
        ),
        "eyebrow": ParagraphStyle(
            "Eyebrow", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=7.5, leading=10, textColor=GOLD, spaceAfter=4,
        ),
        "title": ParagraphStyle(
            "Title", parent=base["Heading1"], fontName="Helvetica-Bold",
            fontSize=21, leading=24, textColor=NAVY, spaceAfter=8,
        ),
        "intro": ParagraphStyle(
            "Intro", parent=base["Normal"], fontName="Helvetica",
            fontSize=9, leading=14, textColor=MUTED, spaceAfter=10,
        ),
        "section": ParagraphStyle(
            "Section", parent=base["Heading2"], fontName="Helvetica-Bold",
            fontSize=11, leading=14, textColor=NAVY, spaceBefore=8, spaceAfter=6,
        ),
        "cell": ParagraphStyle(
            "Cell", parent=base["Normal"], fontName="Helvetica",
            fontSize=8, leading=11, textColor=MUTED,
        ),
        "cell_bold": ParagraphStyle(
            "CellBold", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=8, leading=11, textColor=NAVY,
        ),
        "footer": ParagraphStyle(
            "Footer", parent=base["Normal"], fontName="Helvetica",
            fontSize=7.5, leading=11, alignment=TA_CENTER, textColor=MUTED,
        ),
    }


def page_header(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 12 * mm, width, 12 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(18 * mm, height - 7.5 * mm, "VISHOME GLOBAL COMMERCIAL CARPET")
    canvas.setFont("Helvetica", 7)
    canvas.drawRightString(width - 18 * mm, height - 7.5 * mm, "FACTORY DIRECT PROJECT SUPPORT")
    canvas.setFillColor(GOLD)
    canvas.rect(18 * mm, height - 13 * mm, 34 * mm, 1 * mm, fill=1, stroke=0)
    canvas.restoreState()


def fact_table(rows, sheet_styles):
    data = []
    for label, value in rows:
        data.append([
            Paragraph(label, sheet_styles["cell_bold"]),
            Paragraph(value, sheet_styles["cell"]),
        ])
    table = Table(data, colWidths=[44 * mm, 122 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), LIGHT),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def bullet_table(items, sheet_styles):
    data = [[Paragraph("[ ]", sheet_styles["cell_bold"]), Paragraph(item, sheet_styles["cell"])] for item in items]
    table = Table(data, colWidths=[9 * mm, 157 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (1, 0), (1, -1), 0.35, BORDER),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return table


def build_pdf(filename, title, subtitle, facts, sections):
    OUTPUT.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT / filename
    sheet_styles = styles()
    doc = SimpleDocTemplate(
        str(output_path), pagesize=A4,
        rightMargin=18 * mm, leftMargin=18 * mm,
        topMargin=22 * mm, bottomMargin=16 * mm,
        title=title, author="Vishome Global Commercial Carpet Co., Ltd.",
        subject="B2B procurement checklist",
    )

    story = [
        Paragraph("VISHOME BUYER DOCUMENT", sheet_styles["eyebrow"]),
        Paragraph(title, sheet_styles["title"]),
        Paragraph(subtitle, sheet_styles["intro"]),
        fact_table(facts, sheet_styles),
    ]

    for heading, items in sections:
        story.extend([
            KeepTogether([
                Paragraph(heading, sheet_styles["section"]),
                bullet_table(items, sheet_styles),
            ])
        ])

    story.extend([
        Spacer(1, 8),
        Paragraph(
            "Send the completed project information to sales@vishomecarpet.com or submit it at "
            '<link href="https://www.vishomecarpet.com/contact" color="#102A43">vishomecarpet.com/contact</link>.',
            sheet_styles["footer"],
        ),
        Spacer(1, 3),
        Paragraph(
            "Reference ranges are for procurement planning only. Final product specification, MOQ, price, sample availability, production time, compliance, packing, and freight must be confirmed in the formal quotation.",
            sheet_styles["footer"],
        ),
    ])

    doc.build(story, onFirstPage=page_header, onLaterPages=page_header)
    return output_path


def main():
    commercial = build_pdf(
        "commercial-carpet-procurement-checklist.pdf",
        "Commercial Carpet Procurement Checklist",
        "A one-page project brief for carpet tile, hotel broadloom, office, hospitality, and contract flooring quotations.",
        [
            ("Typical project MOQ", "Carpet tiles: commonly 200-500 SQM. Wall-to-wall options: commonly 100-500 SQM. Confirm by selected construction."),
            ("Typical production", "Carpet tiles: approximately 7-25 days. Hotel broadloom: approximately 15-35 days. Custom approval can affect timing."),
            ("Commercial terms", "FOB, CIF, or available DAP options can be calculated from destination, volume, packing, and current freight conditions."),
            ("Sample support", "Surface, color, backing, construction, and available technical information should be reviewed before bulk approval."),
        ],
        [
            ("1. Project Basics", [
                "Company, buyer name, email, WhatsApp, country, destination city or port",
                "Project type: hotel, office, school, airport, retail, public area, distributor stock, or other",
                "Total floor area, room or zone breakdown, floor plan, and target installation date",
            ]),
            ("2. Product Specification", [
                "Product format: 50x50cm tile, wall-to-wall broadloom, custom rug, or specified alternative",
                "Fiber and construction: nylon, Nylon 6.6, polypropylene, wool blend, printed, tufted, or woven",
                "Backing, pile weight, total thickness, roll width or tile size, color, and pattern requirements",
                "Required fire rating, traffic class, antistatic, acoustic, sustainability, or local test standard",
            ]),
            ("3. Quotation and Approval", [
                "Required quantity plus installation waste allowance and phased delivery plan",
                "Sample, color swatch, strike-off, technical data, packing, and labeling requirements",
                "Preferred trade term, destination, requested shipment date, and any tender deadline",
            ]),
        ],
    )

    mining = build_pdf(
        "gold-mining-mat-rfq-checklist.pdf",
        "Gold Mining Mat RFQ Checklist",
        "A quotation brief for PVC miners moss, sluice box matting, wash plants, dredges, trommels, and wholesale distribution.",
        [
            ("Standard reference", "1m x 15m roll with 10mm, 15mm, or 20mm thickness options."),
            ("Typical MOQ", "100 rolls for standard wholesale production. Samples and trial requirements are confirmed separately."),
            ("Typical production", "Approximately 15-25 days after size, thickness, quantity, packing, and order details are confirmed."),
            ("Reference FOB price", "US$18.00-45.00 per roll, subject to profile, thickness, size, quantity, packing, and current quotation."),
        ],
        [
            ("1. Mining Application", [
                "Equipment: sluice box, wash plant, dredge, trommel, concentrator, recovery tray, or separator",
                "Material flow, water flow, target particle range, operating environment, and cleaning method",
                "Reference photo, drawing, current mat profile, or equipment channel dimensions",
            ]),
            ("2. Mat Specification", [
                "Required profile, material, color, width, thickness, roll length, and backing option",
                "Quantity for sample, trial order, wholesale order, and expected repeat-order volume",
                "OEM logo, label, carton, roll wrap, pallet, barcode, and distributor packing requirements",
            ]),
            ("3. Delivery and Quote", [
                "Destination country, city or port, preferred trade term, and requested shipment date",
                "Required documents, inspection, product photos, sample need, and approval deadline",
                "Confirm whether pricing is required per roll, per meter, or for a custom cut length",
            ]),
        ],
    )

    for path in (commercial, mining):
        width = stringWidth(path.name, "Helvetica", 8)
        print(f"Generated {path} ({width:.1f})")


if __name__ == "__main__":
    main()
