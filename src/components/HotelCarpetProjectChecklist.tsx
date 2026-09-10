"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const checklist = [
  ["Project scope", "Hotel type, location, new build or refurbishment, zones and total area"],
  ["Zone schedule", "Guestrooms, corridors, lift lobbies, lobby, ballroom, meeting rooms and service areas"],
  ["Design approval", "Pattern, repeat, colour, scale, pile direction, strike-off and physical sample"],
  ["Technical review", "Fiber, pile, backing, thickness, fire or VOC documents and maintenance route"],
  ["Installation", "Subfloor, moisture, adhesive, seams, tile direction, access and phased handover"],
  ["Commercial terms", "MOQ, waste, spare stock, packing, destination, lead time and quotation validity"],
];

export default function HotelCarpetProjectChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const complete = useMemo(() => Math.round((checked.length / checklist.length) * 100), [checked.length]);
  const toggle = (item: string) => setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-md border border-border bg-white p-6 shadow-sm">
        <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Project readiness</p><h2 className="mt-2 text-2xl font-black text-primary">Check each item before quotation approval</h2></div><span className="text-2xl font-black text-primary">{complete}%</span></div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-border"><div className="h-full bg-accent transition-all" style={{ width: `${complete}%` }} /></div>
        <div className="mt-6 grid gap-3">{checklist.map(([label, detail]) => <label key={label} className="flex cursor-pointer gap-4 rounded-md border border-border p-4"><input type="checkbox" className="mt-1 h-4 w-4 accent-orange-500" checked={checked.includes(label)} onChange={() => toggle(label)} /><span><strong className="font-black text-primary">{label}</strong><span className="mt-1 block text-sm leading-6 text-muted">{detail}</span></span></label>)}</div>
      </div>
      <aside className="rounded-md border border-border bg-surface p-6"><h2 className="text-2xl font-black text-primary">What to send with the checklist</h2><ul className="mt-5 ml-5 list-disc space-y-3 text-sm leading-7 text-muted"><li>Area schedule by hotel zone and destination city.</li><li>Pattern references, drawings, sample deadline and approval owner.</li><li>Required fire, VOC, maintenance and installation documents.</li><li>Target delivery date, spare stock, packing and site receiving conditions.</li></ul><Link href="/contact?product=Hotel%20carpet%20project%20checklist#quote-form" className="btn-fox-orange mt-7 block text-center">Send project details</Link></aside>
    </div>
  );
}
