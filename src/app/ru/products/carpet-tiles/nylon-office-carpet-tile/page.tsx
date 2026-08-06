import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import { getContactBridgeUrl } from "@/lib/whatsapp";
import ProductImage from "@/components/ProductImage";
import RuLeadCaptureForm from "@/components/RuLeadCaptureForm";

const productId = "nylon-office-carpet-tile";
const product = products.find((prod) => prod.id === productId);

const ruPath = "/ru/products/carpet-tiles/nylon-office-carpet-tile";
const enPath = "/products/carpet-tiles/nylon-office-carpet-tile";

const specRows = product
  ? [
      { label: "Материал", value: product.spec.material === "100% Nylon" ? "100% нейлон" : product.spec.material },
      { label: "Формат плитки", value: "50 × 50 см" },
      { label: "Класс огнестойкости", value: "ASTM E648 Class I" },
      { label: "Класс проходимости", value: `${product.technicalSpecs.trafficClass} (тяжёлая коммерческая нагрузка)` },
      { label: "Ворсовая система", value: "Петлевой ворс (tufted loop pile)" },
      { label: "Подложка", value: "Битумная (доступны PVC и cushion-подложка)" },
      { label: "Вес ворса", value: "24 унции (680 г/м²)" },
      { label: "Общая толщина", value: "6,5 мм" },
      { label: "Антистатичность", value: "< 2,0 кВ" },
      { label: "МОЗ (мин. заказ)", value: product.moq === "300 SQM" ? "300 м²" : product.moq },
      { label: "Срок производства", value: product.leadTime === "25 Days" ? "25 дней" : product.leadTime },
      { label: "Цена FOB", value: product.fobPrice ? `${product.fobPrice.lowPrice}–${product.fobPrice.highPrice} USD / м²` : "по запросу" },
    ]
  : [];

const faqs = [
  {
    q: "Какая минимальная партия заказа (МОЗ)?",
    a: "Минимальный заказ по данной серии — 300 м². Возможны индивидуальные условия для пробной поставки — уточните у менеджера при заявке."
  },
  {
    q: "Какой срок производства?",
    a: "Стандартный срок производства — около 25 дней с момента подтверждения заказа и получения предоплаты. Точный срок зависит от выбранного цвета и объёма партии."
  },
  {
    q: "Можно ли получить образец перед заказом?",
    a: "Да, мы можем выслать образцы плитки для оценки качества и цвета. Стоимость доставки образцов оплачивает покупатель — сообщите нам город доставки, и мы подскажем ориентировочную стоимость курьерской службы."
  },
  {
    q: "Как рассчитывается доставка в Казахстан и Узбекистан?",
    a: "Мы можем организовать поставку на условиях DAP до Алматы или Ташкента. Точные сроки и стоимость зависят от объёма партии и текущих тарифов перевозчика — оставьте заявку, и наш менеджер пришлёт индивидуальный расчёт."
  },
  {
    q: "Можно ли получить документы для сертификации ASTM E648?",
    a: "Да, по запросу мы предоставляем протоколы испытаний ASTM E648 Class I. Если для вашего проекта требуется иной региональный сертификат, сообщите точное название стандарта — мы честно ответим, располагаем ли им уже, или можем организовать дополнительное тестирование."
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: absoluteUrl("/ru") },
    { "@type": "ListItem", position: 2, name: "Ковровая плитка", item: absoluteUrl(ruPath) },
  ],
};

export const metadata: Metadata = product
  ? {
      title: "Ковровая плитка 50×50 для офисов | VISHOME",
      description:
        "Коммерческая ковровая плитка 50×50 см из 100% нейлона для офисов, коридоров и мест с высокой проходимостью. Класс огнестойкости ASTM E648 Class I. Поставка DAP Алматы и Ташкент, оплата на объект.",
      alternates: {
        canonical: absoluteUrl(ruPath),
        languages: {
          en: absoluteUrl(enPath),
          ru: absoluteUrl(ruPath),
          "x-default": absoluteUrl(enPath),
        },
      },
      openGraph: {
        title: "Ковровая плитка 50×50 см для офисов | VISHOME",
        description:
          "Коммерческая ковровая плитка из 100% нейлона, класс огнестойкости ASTM E648 Class I. Поставка DAP Алматы и Ташкент.",
        url: absoluteUrl(ruPath),
        type: "website",
        locale: "ru_RU",
        images: [{ url: absoluteUrl(product.image), alt: "Коммерческая ковровая плитка 50х50 см Vishomecarpet" }],
      },
    }
  : { title: "Ковровая плитка | VISHOME" };

export default function CarpetTilesRuPage() {
  if (!product) return <div>Product not found</div>;

  const whatsappUrl = getContactBridgeUrl(
    "Здравствуйте! Меня интересует ковровая плитка для коммерческого объекта. Прошу выслать цену FOB, условия DAP до Алматы/Ташкента, МОЗ и срок производства.",
    { placement: "ru_carpet_tiles_hero", product: "Nylon 50x50 Commercial Office Carpet Tile", intent: "ru_project_quote", pagePath: ruPath }
  );

  return (
    <div className="bg-white min-h-screen" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />

      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/ru" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            ← Все решения на русском
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="lg:w-3/5">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border shadow-xl md:aspect-square">
                <ProductImage src={product.image} alt="Коммерческая ковровая плитка 50х50 см для офисов" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:w-2/5">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-accent">Прямые поставки с фабрики</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Ковровая плитка для офисов 50×50 см
              </h1>
              <p className="mb-6 text-muted leading-relaxed">
                Коммерческая ковровая плитка из 100% нейлона для офисов, коридоров и помещений с высокой проходимостью. Плотный петлевой ворс устойчив к истиранию и продавливанию ножками мебели и роликами кресел.
              </p>
              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:mb-10 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>МОЗ</span>
                  <span className="text-right font-bold">300 м²</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Срок производства</span>
                  <span className="text-right font-bold">25 дней</span>
                </div>
                {product.fobPrice && (
                  <div className="flex justify-between gap-6 text-xs uppercase">
                    <span>Цена FOB</span>
                    <span className="text-right font-bold">{product.fobPrice.lowPrice}–{product.fobPrice.highPrice} USD / м²</span>
                  </div>
                )}
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Наличие</span>
                  <span className="text-right font-bold">На складе / под заказ</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappUrl}
                  data-whatsapp-placement="ru_carpet_tiles_hero"
                  data-whatsapp-intent="ru_project_quote"
                  className="flex min-h-12 items-center justify-center rounded-sm bg-[#25D366] px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  Написать в WhatsApp
                </a>
                <a
                  href="#ru-inquiry-form"
                  className="flex min-h-12 items-center justify-center rounded-sm bg-primary px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:bg-black"
                >
                  Оставить заявку
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="mb-12 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:text-3xl md:tracking-widest">
            Технические характеристики
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {specRows.map((row) => (
              <div key={row.label} className="group bg-white p-5 transition-all hover:bg-primary md:p-8">
                <p className="mb-3 text-[10px] font-bold uppercase text-muted group-hover:text-white/50">{row.label}</p>
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-4xl">
          <h2 className="mb-8 text-3xl font-black uppercase tracking-widest text-primary">
            Доставка DAP до Алматы и Ташкента
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Мы поддерживаем поставку на условиях DAP (Delivered at Place) до Алматы (Казахстан) и Ташкента (Узбекистан) — товар доставляется до согласованного пункта назначения, вам остаётся только выполнить таможенную очистку на своей стороне.
            </p>
            <p>
              Точный срок транспортировки и итоговая стоимость доставки зависят от объёма партии, текущих тарифов перевозчика и загруженности погранперехода. Мы не публикуем фиксированные цифры на сайте, чтобы не вводить клиентов в заблуждение устаревшими данными — оставьте заявку, и менеджер пришлёт актуальный расчёт по вашему объёму в течение рабочего дня.
            </p>
            <p>
              При необходимости также доступны условия FOB и CIF для клиентов, которые организуют перевозку самостоятельно или через собственного экспедитора.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:text-3xl md:tracking-widest">
            Частые вопросы
          </h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="border border-border bg-white p-6">
                <h3 className="mb-3 text-base font-black uppercase tracking-wide text-primary">{item.q}</h3>
                <p className="leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ru-inquiry-form" className="section-padding scroll-mt-24">
        <div className="container-fox max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:text-3xl md:tracking-widest">
            Заявка на расчёт
          </h2>
          <p className="mb-10 text-center text-muted">
            Укажите площадь объекта, город доставки и сроки — менеджер пришлёт цену FOB, вариант DAP до Алматы/Ташкента и срок производства.
          </p>
          <RuLeadCaptureForm
            formName="ru_carpet_tiles_quote"
            productDefault="Ковровая плитка 50x50 (нейлон)"
            submitLabel="ОТПРАВИТЬ ЗАЯВКУ"
          />
        </div>
      </section>
    </div>
  );
}
