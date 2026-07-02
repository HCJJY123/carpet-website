import Link from "next/link";
import { products } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function ProductDetailPage() {
  const productId = "public-area-heavy-duty";
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-surface py-4 border-b border-border"><div className="container-fox"><Link href="/products" className="text-[10px] font-bold text-muted uppercase tracking-widest hover:text-primary">← Back to Products</Link></div></nav>
      <section className="py-20"><div className="container-fox"><div className="flex flex-col lg:flex-row gap-20"><div className="lg:w-3/5"><div className="aspect-square rounded-sm overflow-hidden border border-border shadow-xl"><ProductImage src={p.image} alt={p.name} className="w-full h-full object-cover" /></div></div><div className="lg:w-2/5 flex flex-col justify-center"><h1 className="text-3xl md:text-5xl font-black text-primary mb-8 uppercase leading-tight">{p.name}</h1><div className="bg-surface p-8 border border-border space-y-4 mb-10"><div className="flex justify-between uppercase text-xs"><span>MOQ</span><span className="font-bold">{p.moq}</span></div><div className="flex justify-between uppercase text-xs"><span>LEAD TIME</span><span className="font-bold">{p.leadTime}</span></div></div><Link href="/contact" className="btn-fox-orange w-full py-5 text-center text-sm uppercase tracking-widest shadow-lg">Request Technical Quote</Link></div></div></div></section>
      <section className="section-padding bg-surface border-y border-border"><div className="container-fox"><h2 className="text-3xl font-bold text-primary mb-12 uppercase text-center tracking-widest">Technical Data Sheet (TDS)</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">{Object.entries(p.technicalSpecs).map(([k, v]) => (<div key={k} className="bg-white p-8 group hover:bg-primary transition-all"><p className="text-[10px] font-bold text-muted uppercase mb-3 group-hover:text-white/50">{k.replace(/([A-Z])/g, " $1").toUpperCase()}</p><p className="text-sm font-black text-primary group-hover:text-white uppercase leading-relaxed">{v}</p></div>))}</div></div></section>
    </div>
  );
}
