"use client";

import { useMemo, useState } from "react";

export default function BroadloomCarpetWasteCalculator() {
  const [area, setArea] = useState("1000");
  const [waste, setWaste] = useState("8");
  const [rollWidth, setRollWidth] = useState("4");
  const [rollLength, setRollLength] = useState("30");

  const result = useMemo(() => {
    const projectArea = Math.max(0, Number(area) || 0);
    const wasteRate = Math.min(50, Math.max(0, Number(waste) || 0));
    const width = Math.max(0.1, Number(rollWidth) || 0);
    const length = Math.max(0.1, Number(rollLength) || 0);
    const netArea = projectArea * (1 + wasteRate / 100);
    const linearMetres = netArea / width;
    const rolls = Math.ceil(linearMetres / length);
    return { netArea, linearMetres, rolls, coveredArea: rolls * width * length };
  }, [area, waste, rollWidth, rollLength]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-md border border-border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-primary">Project inputs</h2>
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm font-bold text-primary">Measured area (m²)<input className="input-fox" type="number" min="0" step="1" value={area} onChange={(event) => setArea(event.target.value)} /></label>
          <label className="grid gap-2 text-sm font-bold text-primary">Planning waste (%)<input className="input-fox" type="number" min="0" max="50" step="0.5" value={waste} onChange={(event) => setWaste(event.target.value)} /></label>
          <label className="grid gap-2 text-sm font-bold text-primary">Roll width (m)<input className="input-fox" type="number" min="0.1" step="0.01" value={rollWidth} onChange={(event) => setRollWidth(event.target.value)} /></label>
          <label className="grid gap-2 text-sm font-bold text-primary">Nominal roll length (m)<input className="input-fox" type="number" min="0.1" step="0.1" value={rollLength} onChange={(event) => setRollLength(event.target.value)} /></label>
        </div>
      </div>
      <div className="rounded-md border border-border bg-surface p-6 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Planning estimate</p>
        <h2 className="mt-3 text-2xl font-black text-primary">Use the result to prepare an RFQ</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Area including waste", `${result.netArea.toFixed(1)} m²`],
            ["Estimated linear metres", `${result.linearMetres.toFixed(1)} m`],
            ["Estimated rolls", `${result.rolls}`],
            ["Nominal covered area", `${result.coveredArea.toFixed(1)} m²`],
          ].map(([label, value]) => <div key={label} className="rounded-md border border-border bg-white p-4"><dt className="text-xs font-black uppercase tracking-[0.12em] text-muted">{label}</dt><dd className="mt-2 text-2xl font-black text-primary">{value}</dd></div>)}
        </dl>
        <p className="mt-6 text-sm leading-7 text-muted">This is an estimating aid. Final roll width, usable length, pattern repeat, seam direction, installation waste, packing and quotation quantity must be confirmed for the nominated construction and project layout.</p>
      </div>
    </div>
  );
}
