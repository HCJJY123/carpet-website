"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ProductFormat = "tiles" | "broadloom";

const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

function parseNumber(value: string, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function formatSquareMeters(value: number) {
  return `${formatter.format(value)} sqm`;
}

export default function CommercialCarpetRfqCalculator() {
  const [format, setFormat] = useState<ProductFormat>("tiles");
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("12");
  const [repeatAreas, setRepeatAreas] = useState("1");
  const [waste, setWaste] = useState("8");
  const [spareStock, setSpareStock] = useState("5");
  const [cartonCoverage, setCartonCoverage] = useState("5");
  const [rollWidth, setRollWidth] = useState("4");

  const result = useMemo(() => {
    const roomLength = parseNumber(length, 20);
    const roomWidth = parseNumber(width, 12);
    const areaCount = parseNumber(repeatAreas, 1);
    const wasteRate = parseNumber(waste, 8) / 100;
    const spareRate = parseNumber(spareStock, 5) / 100;
    const baseArea = roomLength * roomWidth * areaCount;
    const orderArea = baseArea * (1 + wasteRate + spareRate);
    const coverage = parseNumber(cartonCoverage, 5);
    const tileCount = Math.ceil(orderArea / 0.25);
    const cartonCount = Math.ceil(orderArea / coverage);
    const carpetRollWidth = parseNumber(rollWidth, 4);
    const rollLinearMeters = Math.ceil((orderArea / carpetRollWidth) * 10) / 10;

    return {
      baseArea,
      orderArea,
      tileCount,
      cartonCount,
      rollLinearMeters,
      wasteArea: baseArea * wasteRate,
      spareArea: baseArea * spareRate,
    };
  }, [cartonCoverage, length, repeatAreas, rollWidth, spareStock, waste, width]);

  const quoteMessage = `Project area: ${formatSquareMeters(result.baseArea)}; suggested RFQ area: ${formatSquareMeters(result.orderArea)}; format: ${format === "tiles" ? "carpet tiles" : "broadloom carpet"}.`;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-md border border-border bg-white p-6 shadow-sm md:p-8" aria-labelledby="rfq-calculator-inputs">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Live RFQ Tool</p>
        <h2 id="rfq-calculator-inputs" className="mt-3 text-2xl font-black text-primary">Enter project dimensions</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Use this calculator to prepare quantity, spare-stock and packing inputs before asking for a formal carpet quotation.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-bold text-primary">
            Product format
            <select name="calculator_product_format" value={format} onChange={(event) => setFormat(event.target.value as ProductFormat)} className="mt-2 w-full rounded-sm border border-border bg-white px-3 py-3 text-sm text-primary">
              <option value="tiles">Carpet tiles</option>
              <option value="broadloom">Broadloom roll carpet</option>
            </select>
          </label>
          <label className="text-sm font-bold text-primary">
            Number of similar areas
            <input name="calculator_area_count" type="number" min="1" value={repeatAreas} onChange={(event) => setRepeatAreas(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
          </label>
          <label className="text-sm font-bold text-primary">
            Area length, meters
            <input name="calculator_length_m" type="number" min="0.1" step="0.1" value={length} onChange={(event) => setLength(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
          </label>
          <label className="text-sm font-bold text-primary">
            Area width, meters
            <input name="calculator_width_m" type="number" min="0.1" step="0.1" value={width} onChange={(event) => setWidth(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
          </label>
          <label className="text-sm font-bold text-primary">
            Installation waste, %
            <input name="calculator_waste_percent" type="number" min="0" max="30" value={waste} onChange={(event) => setWaste(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
          </label>
          <label className="text-sm font-bold text-primary">
            Spare stock, %
            <input name="calculator_spare_percent" type="number" min="0" max="30" value={spareStock} onChange={(event) => setSpareStock(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
          </label>
          {format === "tiles" ? (
            <label className="text-sm font-bold text-primary sm:col-span-2">
              Carton coverage, sqm per carton
              <input name="calculator_carton_coverage_sqm" type="number" min="1" step="0.1" value={cartonCoverage} onChange={(event) => setCartonCoverage(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
            </label>
          ) : (
            <label className="text-sm font-bold text-primary sm:col-span-2">
              Roll width, meters
              <input name="calculator_roll_width_m" type="number" min="1" step="0.1" value={rollWidth} onChange={(event) => setRollWidth(event.target.value)} className="mt-2 w-full rounded-sm border border-border px-3 py-3 text-sm text-primary" />
            </label>
          )}
        </div>
      </section>

      <section className="rounded-md border border-border bg-primary p-6 text-white shadow-sm md:p-8" aria-labelledby="rfq-calculator-result">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Calculated RFQ Inputs</p>
        <h2 id="rfq-calculator-result" className="mt-3 text-2xl font-black">Quantity summary</h2>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2">
          <div className="bg-primary px-4 py-4">
            <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Measured area</dt>
            <dd className="mt-2 text-xl font-black">{formatSquareMeters(result.baseArea)}</dd>
          </div>
          <div className="bg-primary px-4 py-4">
            <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Suggested RFQ area</dt>
            <dd className="mt-2 text-xl font-black">{formatSquareMeters(result.orderArea)}</dd>
          </div>
          <div className="bg-primary px-4 py-4">
            <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Waste allowance</dt>
            <dd className="mt-2 text-xl font-black">{formatSquareMeters(result.wasteArea)}</dd>
          </div>
          <div className="bg-primary px-4 py-4">
            <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Spare stock</dt>
            <dd className="mt-2 text-xl font-black">{formatSquareMeters(result.spareArea)}</dd>
          </div>
          {format === "tiles" ? (
            <>
              <div className="bg-primary px-4 py-4">
                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Approx. 50x50 cm tiles</dt>
                <dd className="mt-2 text-xl font-black">{result.tileCount.toLocaleString()} pcs</dd>
              </div>
              <div className="bg-primary px-4 py-4">
                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Approx. cartons</dt>
                <dd className="mt-2 text-xl font-black">{result.cartonCount.toLocaleString()} cartons</dd>
              </div>
            </>
          ) : (
            <div className="bg-primary px-4 py-4 sm:col-span-2">
              <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Approx. roll length at selected width</dt>
              <dd className="mt-2 text-xl font-black">{formatter.format(result.rollLinearMeters)} linear meters</dd>
            </div>
          )}
        </dl>
        <p className="mt-5 text-sm leading-7 text-white/75">
          This is a planning estimate, not a final quotation. Final MOQ, carton coverage, roll plan, price and lead time depend on product construction, color, backing, packing and destination.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={`/contact?product=${encodeURIComponent(quoteMessage)}#quote-form`} className="rounded-sm bg-accent px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-accent-light">
            Send These Inputs
          </Link>
          <Link href="/resources/downloads/commercial-carpet-procurement-checklist" className="rounded-sm border border-white/25 px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10">
            RFQ Checklist
          </Link>
        </div>
        <p className="mt-5 text-xs leading-6 text-white/55">
          Last updated: 2026-08-21. Source: standard area calculation rules and VISHOME RFQ preparation workflow; no guaranteed local installation yield or price is implied.
        </p>
      </section>
    </div>
  );
}
