import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products
    .filter((p) => p.category === "carpet-tiles")
    .map((p) => ({ slug: p.id }));
}

export default function CarpetTileDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.id === params.slug && p.category === "carpet-tiles");
  if (!product) notFound();

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link href="/products/carpet-tiles" className="text-sm text-accent hover:text-accent-light mb-4 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Carpet Tiles
          </Link>
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div>
                <div className="flex justify-center gap-2 mb-4 flex-wrap">
                  {product.spec.colors.slice(0, 8).map((c) => (
                    <span key={c.hex} className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm" style={{ backgroundColor: c.hex }} title={c.name} />
                  ))}
                </div>
                {product.spec.colors.length > 8 && (
                  <p className="text-center text-xs text-muted">+{product.spec.colors.length - 8} more colors</p>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary mb-3">{product.name}</h1>
              <p className="text-muted mb-6">{product.description}</p>
              <Link
                href={`/contact?product=${product.id}`}
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors text-sm"
              >
                Inquire About This Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-primary mb-6">Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: "Material", value: product.spec.material },
                  { label: "Gauge", value: product.spec.gauge },
                  { label: "Tile Size", value: product.spec.size },
                  { label: "Weight", value: product.spec.weight },
                  { label: "Pile Height", value: product.spec.pileHeight },
                ].filter((s) => s.value).map((s) => (
                  <div key={s.label} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted">{s.label}</span>
                    <span className="text-sm font-medium text-primary">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-6">Features & Benefits</h2>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-xl font-bold text-primary mb-6">Available Colors</h2>
            <div className="flex flex-wrap gap-3">
              {product.spec.colors.map((c) => (
                <div key={c.hex} className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2 border border-border">
                  <span className="w-6 h-6 rounded-full border border-gray-200" style={{ backgroundColor: c.hex }} />
                  <span className="text-sm text-muted">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
