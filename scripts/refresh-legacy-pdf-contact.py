#!/usr/bin/env python3

from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
PDFS = (
    ROOT / "public/downloads/hotel-corridor-carpet-stain-hiding-checklist.pdf",
    ROOT / "public/downloads/office-carpet-tiles-renovation-rfq-template.pdf",
)


def replace_text(page: fitz.Page, old: str, new: str, font_size: float) -> None:
    for rect in page.search_for(old):
        page.add_redact_annot(rect, fill=(1, 1, 1))
    page.apply_redactions()
    matches = page.search_for(old)
    if matches:
        raise RuntimeError(f"Unable to redact all instances of {old!r}")
    if old == "www.vishomecarpet.com | info@vishomecarpet.com":
        page.insert_text(
            fitz.Point(50, 36),
            new,
            fontsize=font_size,
            fontname="helv",
            color=(0, 0, 0),
        )


def main() -> None:
    for path in PDFS:
        document = fitz.open(path)
        page = document[0]
        replace_text(
            page,
            "www.vishomecarpet.com | info@vishomecarpet.com",
            "www.vcarpets.com | sales@vcarpets.com",
            8,
        )
        for old, new in (
            ("https://www.vishomecarpet.com", "https://www.vcarpets.com"),
            ("sales@vishomecarpet.com", "sales@vcarpets.com"),
            ("info@vishomecarpet.com", "sales@vcarpets.com"),
        ):
            for rect in page.search_for(old):
                page.add_redact_annot(rect, fill=(1, 1, 1))
            page.apply_redactions()
            if old in ("https://www.vishomecarpet.com", "sales@vishomecarpet.com", "info@vishomecarpet.com"):
                for rect in page.search_for(new):
                    page.insert_textbox(rect, new, fontsize=8, fontname="helv", color=(0, 0, 0))
        document.save(path.with_suffix(".migrated.pdf"))
        document.close()
        path.with_suffix(".migrated.pdf").replace(path)
        print(f"Updated {path}")


if __name__ == "__main__":
    main()
