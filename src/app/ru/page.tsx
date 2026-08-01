import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import RuLeadCaptureForm from "@/components/RuLeadCaptureForm";
import { ruB2BPages } from "@/lib/ru-b2b-pages";

const ruPages = [
  ...ruB2BPages.slice(0, 4).map((page) => ({
    href: `/ru/${page.slug}`,
    title: page.title,
    description: page.description,
    productId: page.primaryProductId,
  })),
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
  {
    href: "/ru/hotelnyy-kovrolin",
    title: "Гостиничный ковролин",
    description: "Axminster и печатный ковролин на заказ для номеров, коридоров, лобби и банкетных залов.",
    productId: "luxury-hotel-broadloom",
  },
];

export const metadata: Metadata = {
  title: "Коммерческие и гостиничные ковровые покрытия из Китая | VISHOME",
  description:
    "Ковровая плитка, гостиничный и коммерческий ковролин, а также коврики для золотодобычи от фабрики Vishomecarpet. Поставки в Казахстан, Узбекистан и страны СНГ.",
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
    description: "Ковровая плитка, гостиничный ковролин и коврики для золотодобычи с поставкой в страны СНГ.",
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
          <h1 className="mb-6 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            Коммерческие ковровые покрытия для гостиниц, офисов и общественных помещений
          </h1>
          <p className="max-w-2xl text-white/80 leading-relaxed">
            Производство ковролина и ковровой плитки на заказ для коммерческих проектов. Поставка напрямую с фабрики в Китае, образцы и проектный расчет для российских закупщиков.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/ru/kovrolin-dlya-gostinits#ru-quote-form" className="btn-fox-orange text-center">Получить расчет стоимости</Link>
            <Link href="/request-sample-box" className="btn-fox-outline border-white/45 text-center text-white hover:border-accent">Запросить образцы</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-accent">Для закупщиков</p>
            <h2 className="text-3xl font-black text-primary md:text-4xl">Кому помогает русскоязычная команда</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">Импортеры, дизайнеры, гостиничные проекты и строительные компании могут отправить одну заявку с площадью, назначением, сроком и городом поставки.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ruB2BPages.slice(4).map((page) => (
              <Link key={page.slug} href={`/ru/${page.slug}`} className="border border-border bg-white p-5 font-black text-primary transition-colors hover:border-accent hover:text-accent">
                {page.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="ru-quote-form" className="section-padding" data-funnel-section="ru_home_quote">
        <div className="container-fox max-w-5xl">
          <div className="mb-9 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-accent">Запрос проекта</p>
            <h2 className="text-3xl font-black text-primary md:text-4xl">Получить расчет стоимости</h2>
          </div>
          <RuLeadCaptureForm
            formName="ru_russia_home_quote"
            productDefault="Коммерческий ковролин / ковровая плитка"
            submitLabel="Отправить запрос"
            market="russia"
            introText="Укажите тип объекта, площадь и город доставки. После проверки спецификации команда подтвердит доступные варианты и следующий шаг."
          />
        </div>
      </section>
    </div>
  );
}
