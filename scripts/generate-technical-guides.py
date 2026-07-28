#!/usr/bin/env python3

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    LongTable,
    PageBreak,
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
LIGHT = colors.HexColor("#F4F7F8")
BORDER = colors.HexColor("#D8E0E5")
WHITE = colors.white


def guide_styles():
    base = getSampleStyleSheet()
    return {
        "eyebrow": ParagraphStyle(
            "GuideEyebrow", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=7.5, leading=10, textColor=GOLD, spaceAfter=4,
        ),
        "title": ParagraphStyle(
            "GuideTitle", parent=base["Heading1"], fontName="Helvetica-Bold",
            fontSize=23, leading=27, textColor=NAVY, spaceAfter=8,
        ),
        "subtitle": ParagraphStyle(
            "GuideSubtitle", parent=base["Normal"], fontName="Helvetica",
            fontSize=9.5, leading=15, textColor=MUTED, spaceAfter=12,
        ),
        "section": ParagraphStyle(
            "GuideSection", parent=base["Heading2"], fontName="Helvetica-Bold",
            fontSize=13, leading=16, textColor=NAVY, spaceBefore=8, spaceAfter=7,
        ),
        "body": ParagraphStyle(
            "GuideBody", parent=base["Normal"], fontName="Helvetica",
            fontSize=8.7, leading=13.5, textColor=MUTED, spaceAfter=6,
        ),
        "body_bold": ParagraphStyle(
            "GuideBodyBold", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=8.7, leading=13.5, textColor=NAVY,
        ),
        "cell": ParagraphStyle(
            "GuideCell", parent=base["Normal"], fontName="Helvetica",
            fontSize=7.7, leading=11, textColor=MUTED,
        ),
        "cell_bold": ParagraphStyle(
            "GuideCellBold", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=7.7, leading=11, textColor=NAVY,
        ),
        "table_head": ParagraphStyle(
            "GuideTableHead", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=7.5, leading=10, textColor=WHITE,
        ),
        "callout": ParagraphStyle(
            "GuideCallout", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=8.3, leading=13, textColor=NAVY,
        ),
        "footer": ParagraphStyle(
            "GuideFooter", parent=base["Normal"], fontName="Helvetica",
            fontSize=7.2, leading=10.5, alignment=TA_CENTER, textColor=MUTED,
        ),
    }


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 12 * mm, width, 12 * mm, fill=1, stroke=0)
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 8.5)
    canvas.drawString(17 * mm, height - 7.5 * mm, "VISHOME GLOBAL COMMERCIAL CARPET")
    canvas.setFont("Helvetica", 6.8)
    canvas.drawRightString(width - 17 * mm, height - 7.5 * mm, "TECHNICAL PROCUREMENT REFERENCE")
    canvas.setStrokeColor(BORDER)
    canvas.line(17 * mm, 13 * mm, width - 17 * mm, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 6.5)
    canvas.drawString(17 * mm, 8.5 * mm, "sales@vishomecarpet.com")
    canvas.drawCentredString(width / 2, 8.5 * mm, "www.vishomecarpet.com")
    canvas.drawRightString(width - 17 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def facts_table(rows, styles):
    data = [
        [Paragraph(label, styles["cell_bold"]), Paragraph(value, styles["cell"])]
        for label, value in rows
    ]
    table = Table(data, colWidths=[45 * mm, 120 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), LIGHT),
        ("GRID", (0, 0), (-1, -1), 0.45, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def checklist(items, styles):
    data = [
        [Paragraph("[ ]", styles["cell_bold"]), Paragraph(item, styles["cell"])]
        for item in items
    ]
    table = Table(data, colWidths=[9 * mm, 156 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (1, 0), (1, -1), 0.35, BORDER),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def comparison_table(headers, rows, widths, styles):
    data = [[Paragraph(value, styles["table_head"]) for value in headers]]
    for row in rows:
        data.append([
            Paragraph(value, styles["cell_bold"] if index == 0 else styles["cell"])
            for index, value in enumerate(row)
        ])
    table = LongTable(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("GRID", (0, 0), (-1, -1), 0.45, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, LIGHT]),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def section_block(title, items, styles):
    return KeepTogether([
        Paragraph(title, styles["section"]),
        checklist(items, styles),
    ])


def build_guide(filename, title, subtitle, facts, comparison, sections, source_urls):
    OUTPUT.mkdir(parents=True, exist_ok=True)
    path = OUTPUT / filename
    styles = guide_styles()
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        rightMargin=17 * mm,
        leftMargin=17 * mm,
        topMargin=20 * mm,
        bottomMargin=18 * mm,
        title=title,
        author="Vishome Global Commercial Carpet Co., Ltd.",
        subject="Commercial carpet technical procurement guide",
        keywords="commercial carpet, procurement, specification, RFQ",
    )

    story = [
        Paragraph("VISHOME BUYER TECHNICAL GUIDE", styles["eyebrow"]),
        Paragraph(title, styles["title"]),
        Paragraph(subtitle, styles["subtitle"]),
        facts_table(facts, styles),
        Spacer(1, 8),
        Paragraph(comparison["title"], styles["section"]),
        comparison_table(
            comparison["headers"],
            comparison["rows"],
            comparison["widths"],
            styles,
        ),
        PageBreak(),
    ]

    for section_title, items in sections:
        story.extend([section_block(section_title, items, styles), Spacer(1, 4)])

    story.extend([
        Spacer(1, 7),
        Table(
            [[Paragraph(
                "Planning reference only. Final construction, color, dimensions, performance documents, test reports, MOQ, price, production timing, packing, installation method, and delivery terms must be confirmed for the exact product in the formal quotation.",
                styles["callout"],
            )]],
            colWidths=[165 * mm],
            style=TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
                ("BOX", (0, 0), (-1, -1), 0.7, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]),
        ),
        Spacer(1, 10),
        Paragraph("Official Source Pages", styles["section"]),
    ])

    for label, url in source_urls:
        story.append(Paragraph(
            f'<b>{label}:</b> <link href="{url}" color="#C8752A">{url}</link>',
            styles["body"],
        ))

    story.extend([
        Spacer(1, 8),
        Paragraph(
            'For a project-specific review, email <link href="mailto:sales@vishomecarpet.com" color="#C8752A">sales@vishomecarpet.com</link> '
            'or use <link href="https://www.vishomecarpet.com/contact" color="#C8752A">www.vishomecarpet.com/contact</link>.',
            styles["footer"],
        ),
    ])

    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    print(f"Generated {path.name}: {path.stat().st_size} bytes")


def main():
    build_guide(
        "commercial-carpet-tile-buying-specification-guide.pdf",
        "Commercial Carpet Tile Buying & Specification Guide",
        "A practical B2B reference for comparing modular carpet tile constructions, preparing an RFQ, approving samples, and planning delivery.",
        [
            ("Product scope", "50x50cm commercial carpet tiles for offices, hotels, schools, corridors, airports, and other modular flooring projects."),
            ("Indicative MOQ", "Commonly 200-500 SQM across listed products; project-based constructions may vary."),
            ("Indicative production", "Approximately 7-25 days, depending on fiber, backing, color, quantity, and approval requirements."),
            ("Sample review", "Confirm surface texture, color, backing, tile size, technical data, and installation method before bulk approval."),
            ("Trade terms", "FOB, CIF, and available DAP options are calculated from destination, order volume, packing, and current freight conditions."),
        ],
        {
            "title": "Construction Decision Matrix",
            "headers": ["Decision Area", "What to Compare", "Why It Matters"],
            "widths": [38 * mm, 69 * mm, 58 * mm],
            "rows": [
                ("Fiber and pile", "Nylon or polypropylene option, yarn system, pile weight, texture, and color method.", "Influences appearance retention, cleaning response, budget, and application fit."),
                ("Backing", "PVC cushion, bitumen, PE, or another quoted system.", "Affects dimensional stability, acoustic comfort, raised-floor access, and installation method."),
                ("Traffic", "Office, hotel, corridor, public-area, rolling-chair, or other stated use.", "The construction should match actual traffic and maintenance conditions."),
                ("Tile format", "50x50cm size, directional or random layout, pattern alignment, and attic stock.", "Controls waste planning, visual result, replacement, and future matching."),
                ("Evidence", "Technical data and available test documents for the exact quoted construction.", "Reports from a different construction should not be treated as equivalent."),
            ],
        },
        [
            ("1. Project Information to Include", [
                "Company, buyer contact, project type, destination country and city or port.",
                "Total floor area, room or zone breakdown, floor plan, waste allowance, and target installation date.",
                "Application and traffic: open office, meeting room, hotel, corridor, school, airport, retail, or another area.",
                "New construction or renovation, subfloor type, raised-floor access, and installation constraints.",
            ]),
            ("2. Product and Performance Requirements", [
                "Required fiber, backing, tile size, pile weight, thickness, color, texture, and installation direction.",
                "Required fire-performance, antistatic, acoustic, indoor-air-quality, or sustainability documents.",
                "Preferred attachment method and written installation instructions for the exact backing and site condition.",
                "Cleaning method, expected maintenance frequency, replacement strategy, and attic-stock quantity.",
            ]),
            ("3. Sample and Order Approval", [
                "Request a physical sample or sample box and identify the exact product code and construction.",
                "Record approved color, backing, dimensions, pile direction, lot control, packing, and labeling.",
                "Confirm MOQ, unit basis, Incoterm, production timing, inspection, packing, and shipment date in writing.",
                "Retain approved samples and attic stock from the production lot for future replacement reference.",
            ]),
            ("4. Installation Readiness Check", [
                "Confirm substrate condition, moisture testing, surface preparation, HVAC operation, and acclimation requirements.",
                "Use the adhesive, tabs, or restraint system approved for the exact carpet tile and substrate.",
                "Coordinate arrows, quarter-turn, monolithic, ashlar, brick, or random layout before installation begins.",
                "Keep installation and maintenance instructions with the project handover record.",
            ]),
        ],
        [
            ("Commercial carpet tiles", "https://www.vishomecarpet.com/products/carpet-tiles"),
            ("Carpet tiles over concrete guide", "https://www.vishomecarpet.com/blog/carpet-tiles-over-concrete-installation-guide"),
            ("Manufacturer profile", "https://www.vishomecarpet.com/commercial-carpet-manufacturer"),
            ("Factory and production", "https://www.vishomecarpet.com/factory"),
        ],
    )

    build_guide(
        "hotel-broadloom-procurement-guide.pdf",
        "Hotel Broadloom Procurement Guide",
        "A B2B planning reference for selecting hotel wall-to-wall carpet, controlling custom design approvals, and preparing a comparable project quotation.",
        [
            ("Product scope", "Printed, tufted, and woven broadloom options for guestrooms, corridors, lobbies, ballrooms, banquet halls, restaurants, and casinos."),
            ("Indicative MOQ", "Commonly 100-500 SQM across listed wall-to-wall products; final MOQ varies by construction and customization."),
            ("Indicative production", "Approximately 15-35 days after construction, artwork, color, sample or strike-off, and order details are approved."),
            ("Design approval", "Confirm pattern repeat, scale, colors, roll width, seam direction, pile, backing, and approved sample or strike-off."),
            ("Trade terms", "FOB, CIF, and available DAP options depend on destination, roll plan, packing, volume, and current freight conditions."),
        ],
        {
            "title": "Application and Construction Matrix",
            "headers": ["Hotel Area", "Common Planning Direction", "Items to Confirm"],
            "widths": [39 * mm, 68 * mm, 58 * mm],
            "rows": [
                ("Guestrooms and suites", "Custom cut-pile or printed broadloom with comfort and design flexibility.", "Fiber, pile, underlay, fire requirement, room transitions, and cleaning plan."),
                ("Corridors and lift lobbies", "Patterned high-traffic broadloom designed for appearance retention and directional flow.", "Pattern repeat, roll direction, seams, traffic, luggage wheels, replacement, and acoustics."),
                ("Ballrooms and banquet halls", "Dense custom printed contract carpet with a coordinated layout and pattern scale.", "Floor plan, pattern placement, border plan, heavy use, carts, sample approval, and installation sequence."),
                ("Luxury hotels and casinos", "Woven wool-nylon Axminster is a commonly specified premium option.", "Blend, pitch, rows, pile weight, pattern engineering, reports, and final budget."),
                ("Renovation phases", "Construction and roll planning should account for occupied areas and staged delivery.", "Lot control, access times, packing by floor, removal sequence, storage, and target dates."),
            ],
        },
        [
            ("1. Project Brief", [
                "Company, hotel or project type, destination, total SQM, area schedule, floor plans, and target installation date.",
                "Identify each zone: guestrooms, corridors, lobby, ballroom, restaurant, casino, conference room, or other area.",
                "State new build or renovation, occupancy constraints, floor access, storage limits, and phased delivery needs.",
                "Provide preferred Incoterm, city or port, tender deadline, sample deadline, and on-site required date.",
            ]),
            ("2. Construction and Performance", [
                "Specify printed, tufted, woven Axminster, wool blend, nylon, or another required construction.",
                "Confirm pile weight, total thickness, backing, roll width, underlay, seam plan, and transition details.",
                "State required fire-performance, acoustic, antistatic, indoor-air-quality, and local project documents.",
                "Match the cleaning and maintenance plan to fiber, color, pattern, traffic, and expected service life.",
            ]),
            ("3. Artwork and Sample Approval", [
                "Provide artwork, reference image, color standards, pattern scale, pattern repeat, and floor-plan placement.",
                "Review digital artwork and physical sample or strike-off as required by the project.",
                "Record approved colors, construction, pile, backing, pattern repeat, roll width, and acceptance criteria.",
                "Do not approve only from a screen image when physical color, texture, and pattern scale are project-critical.",
            ]),
            ("4. Production and Delivery Control", [
                "Confirm sample approval date, production window, inspection method, roll plan, packing labels, and shipment basis.",
                "Coordinate roll numbering, room or floor labels, cutting plan, loading sequence, and installation priority.",
                "Allow time for artwork revisions, sample or strike-off approval, production, inspection, export handling, and transit.",
                "Keep the approved sample, quotation, technical documents, roll list, and installation instructions in one project record.",
            ]),
        ],
        [
            ("Hotel broadloom products", "https://www.vishomecarpet.com/products/wall-to-wall"),
            ("Hotel carpet pattern guide", "https://www.vishomecarpet.com/blog/why-hotel-carpet-patterns-look-busy"),
            ("Hotel acoustic carpet guide", "https://www.vishomecarpet.com/blog/hotel-noise-acoustic-carpet-specification-guide"),
            ("Manufacturer profile", "https://www.vishomecarpet.com/commercial-carpet-manufacturer"),
        ],
    )

    build_guide(
        "public-area-carpet-specification-guide.pdf",
        "Public Area Carpet Specification Guide",
        "A project-planning reference for matching carpet construction, traffic, maintenance, replacement, documents, and delivery to demanding public spaces.",
        [
            ("Product scope", "Heavy-duty public-area carpet, natural sisal carpet, custom sculpted wool lobby rugs, and specialized gold-recovery matting."),
            ("Application first", "The public-area category contains different constructions; select by the exact application rather than category name alone."),
            ("Commercial terms", "MOQ, lead time, pricing unit, availability, customization, and packing vary by product and must be confirmed by quotation."),
            ("Document review", "State required fire-performance, traffic, antistatic, acoustic, indoor-air-quality, or other project standards in the RFQ."),
            ("Maintenance planning", "Cleaning access, replacement strategy, traffic routing, site conditions, and expected service life belong in the original specification."),
        ],
        {
            "title": "Application Screening Matrix",
            "headers": ["Application", "Initial Product Direction", "Critical Questions"],
            "widths": [38 * mm, 69 * mm, 58 * mm],
            "rows": [
                ("Airport, terminal, corridor", "Heavy-duty commercial carpet selected for traffic and replacement planning.", "Traffic pattern, luggage or carts, zoning, tile or broadloom format, fire requirement, and access."),
                ("Lobby and reception", "Heavy-duty carpet or a custom sculpted wool rug depending on coverage and design intent.", "Dimensions, edge treatment, pile, color, logo or pattern, cleaning, placement, and delivery."),
                ("Retail and exhibition", "Construction should match permanent or temporary use, traffic, installation, and removal.", "Service life, attachment, fire standard, packing, re-use, and floor protection."),
                ("Natural-fiber interior", "Natural sisal can support selected design-led commercial applications.", "Moisture exposure, cleaning, backing, edge finish, dimensions, traffic, and maintenance expectations."),
                ("Mining recovery equipment", "Specialized miners moss or sluice matting, not an architectural flooring substitute.", "Equipment dimensions, profile, thickness, water and material flow, cleaning, and packing."),
            ],
        },
        [
            ("1. Define the Application", [
                "Identify the exact area, users, traffic volume, rolling loads, entrances, circulation routes, and service hours.",
                "State whether the installation is permanent, temporary, phased, loose-laid, adhered, inset, or used in equipment.",
                "Provide total area, dimensions, floor plan or equipment drawing, destination, and required date.",
                "Describe cleaning access, maintenance frequency, wet or dry exposure, replacement access, and storage constraints.",
            ]),
            ("2. Match Construction to Use", [
                "Confirm product format, fiber or material, pile or surface profile, backing, dimensions, thickness, and color.",
                "For architectural flooring, review traffic class, fire requirement, antistatic, acoustic, edge, and transition needs.",
                "For custom rugs, confirm shape, dimensions, pile carving, edge finish, placement, artwork, and physical sample needs.",
                "For mining matting, provide equipment type, channel dimensions, water flow, target material, profile, thickness, and cleaning method.",
            ]),
            ("3. Evidence and Approval", [
                "Request technical data and available test documents for the exact construction included in the quotation.",
                "Do not transfer a report, claim, or installation instruction from one construction to a different product.",
                "Approve physical color, texture, dimensions, backing, edge or profile, packing, and labeling as applicable.",
                "Document the selected product code, approval sample, quantity, unit basis, and intended application.",
            ]),
            ("4. Procurement and Delivery", [
                "Confirm MOQ, quotation unit, Incoterm, production timing, inspection, packing, labels, and shipment date.",
                "Coordinate delivery sequence with access restrictions, installation phases, storage, and replacement stock.",
                "Retain approved samples and extra material where future spot replacement or color matching is expected.",
                "Reconfirm site conditions and written installation or operating instructions before use.",
            ]),
        ],
        [
            ("Public-area carpet products", "https://www.vishomecarpet.com/products/public-area"),
            ("Application planning guides", "https://www.vishomecarpet.com/projects"),
            ("Manufacturer profile", "https://www.vishomecarpet.com/commercial-carpet-manufacturer"),
            ("Request a project review", "https://www.vishomecarpet.com/contact"),
        ],
    )


if __name__ == "__main__":
    main()
