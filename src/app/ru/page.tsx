import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";

const ruPages = [
  {
    href: "/ru/products/carpet-tiles/nylon-office-carpet-tile",
    title: "Ковровая плитка 50×50 см",
    description: "Коммерческая ковровая плитка из 100% нейлона для офисов и помещений с высокой проходимостью.",
    productId: "nylon-office-carpet-tile",
  },
  {
    href: "/ru/products/public-area/public-area-heavy-duty",
    title: "Ковролин в рулонах",
    description: "Коммерческий ковролин шириной 4 м для торговых центров, офисов и складов.",
    productId: "public-area-heavy-duty",
  },
  {
    href: "/ru/products/public-area/gold-mining-carpet-mat",
    title: "Коврик для золотодобычи",
    description: "ПВХ-коврик miners moss для шлюзовых лотков и промывки золотоносного песка.",
    productId: "gold-mining-carpet-mat",
  },
];

export const metadata: Metadata = {
  title: "Коммерческие ковровые покрытия из Китая | Поставка DAP Алматы/Ташкент | VISHOME",
  description:
    "Ковровая плитка, коммерческий ковролин и коврики для золотодобычи от фабрики Vishomecarpet. Прямые поставки на условиях DAP в Алматы (Казахстан) и Ташкент (Узбекистан).",
  alternates: {
    canonical: absoluteUrl("/ru"),
    languages: {
      en: absoluteUrl("/products"),
      ru: absoluteUrl("/ru"),
      "x-default": absoluteUrl("/products"),
    },
  },
  openGraph: {
    title: "Коммерческие ковровые покрытия из Китая | VISHOME",
    description: "Ковровая плитка, ковролин и коврики для золотодобычи. Поставка DAP Алматы/Ташкент.",
    url: absoluteUrl("/ru"),
    type: "website",
    locale: "ru_RU",
  },
};

export default function RuHubPage() {
  return (
    <div className="bg-white min-h-screen" lang="ru">
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container-fox">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-accent">Прямые поставки с фабрики</p>
          <h1 className="mb-6 max-w-3xl text-3xl font-black uppercase leading-tight md:text-5xl">
            Коммерческие ковровые покрытия для Казахстана и Узбекистана
          </h1>
          <p className="max-w-2xl text-white/80 leading-relaxed">
            Фабрика Vishomecarpet поставляет ковровую плитку, коммерческий ковролин в рулонах и коврики для золотодобычи. Поддерживаем поставку на условиях DAP до Алматы и Ташкента.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-8 md:grid-cols-3">
          {ruPages.map((page) => {
            const product = products.find((p) => p.id === page.productId);
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group block overflow-hidden rounded-sm border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {product ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <ProductImage src={product.image} alt={page.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                ) : null}
                <div className="p-6">
                  <h2 className="mb-3 text-lg font-black uppercase tracking-wide text-primary group-hover:text-accent">{page.title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{page.description}</p>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-accent">Подробнее →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
