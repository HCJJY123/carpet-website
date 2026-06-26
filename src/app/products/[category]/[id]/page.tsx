import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

interface Props { params: Promise<{ category: string; id: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found" };
  return { title: `${product.name} | Specs | VISHOME` };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-surface py-4 border-b border-border"><div className="container-fox"><div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase"><Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/products" className="hover:text-primary">Products</Link><span>/</span><span className="text-primary">{product.name}</span></div></div></nav>
      <section className="py-20"><div className="container-fox"><div className="flex flex-col lg:flex-row gap-20"><div className="lg:w-3/5"><div className="aspect-square bg-surface rounded-sm overflow-hidden border border-border shadow-xl"><ProductImage src={product.image} alt={product.name} className="w-full h-full object-cover" /></div></div><div className="lg:w-2/5 flex flex-col justify-center"><h1 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase tracking-tight">{product.name}</h1><div className="bg-surface p-8 border border-border space-y-4 mb-10"><div className="flex justify-between"><span>MOQ</span><span className="font-bold">{product.moq}</span></div><div className="flex justify-between"><span>LEAD TIME</span><span className="font-bold">{product.leadTime}</span></div></div><Link href="/contact" className="btn-fox-orange w-full py-5 text-center text-sm uppercase tracking-widest">Get Project Quote</Link></div></div></div></section>
      <section className="section-padding bg-surface border-y border-border"><div className="container-fox"><h2 className="text-3xl font-bold text-primary mb-12 uppercase text-center tracking-widest">Technical Data Sheet</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">{Object.entries(product.technicalSpecs).map(([k, v]) => (<div key={k} className="bg-white p-8 group hover:bg-primary transition-all"><p className="text-[10px] font-bold text-muted uppercase mb-3 group-hover:text-white/50">{k.replace(/([A-Z])/g, " $1").toUpperCase()}</p><p className="text-sm font-black text-primary group-hover:text-white uppercase leading-relaxed">{v}</p></div>))}</div></div></section>
    </div>
  );
}
