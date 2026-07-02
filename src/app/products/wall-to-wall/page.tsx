import Link from "next/link";
import ProductImage from "@/components/ProductImage";

const category = {
  name: "Wall-to-Wall Carpets",
  description: "Seamless broadloom carpets for hotel guestrooms, corridors, lobbies, and custom hospitality projects."
};

const categoryProducts = [
  {
    id: "glitter-hotel-corridor-broadloom-carpet",
    name: "Glitter Hotel Corridor Broadloom Carpet",
    image: "/images/products/hotel-glitter-broadloom/1.jpg",
    imageAlt: "Blue and gold glitter hotel corridor broadloom carpet installed in a luxury hotel by Vishomecarpet"
  },
  {
    id: "3d-printed-hotel-carpet",
    name: "3D HD Printed Nylon Hotel Carpet",
    image: "/images/3d-printed-hotel-carpet.jpg",
    imageAlt: "3D HD printed nylon hotel carpet swatch with elegant gold and burgundy pattern by Vishomecarpet"
  }
];

export default function CategoryPage() {
  const categoryId = "wall-to-wall";

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="bg-[#102A43] py-24 text-center">
        <div className="container-fox">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest">{category.name}</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm font-bold uppercase tracking-widest">{category.description}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryProducts.map((p) => (
              <Link key={p.id} href={`/products/${categoryId}/${p.id}`} className="group block bg-white border border-border p-8 hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div className="aspect-square overflow-hidden mb-8 shadow-md border border-border">
                   <ProductImage src={p.image} alt={p.imageAlt || p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-xl text-primary uppercase mb-6 h-14 leading-tight group-hover:text-accent transition-colors">{p.name}</h3>
                <div className="flex justify-between items-center text-[10px] font-black text-accent uppercase tracking-widest border-t border-border pt-6">
                   <span>Technical Details</span>
                   <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
