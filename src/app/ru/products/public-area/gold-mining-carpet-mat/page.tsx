import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import { getContactBridgeUrl } from "@/lib/whatsapp";
import ProductImage from "@/components/ProductImage";
import RuLeadCaptureForm from "@/components/RuLeadCaptureForm";

const productId = "gold-mining-carpet-mat";
const product = products.find((prod) => prod.id === productId);

const ruPath = "/ru/products/public-area/gold-mining-carpet-mat";
const enPath = "/products/public-area/gold-mining-carpet-mat";

const specRows = product
  ? [
      { label: "Материал", value: "ПВХ / винил (miners moss)" },
      { label: "Размер рулона", value: "1 м × 15 м" },
      { label: "Толщина", value: "10 / 15 / 20 мм на выбор" },
      { label: "Ширина рулона", value: "1 м (стандарт)" },
      { label: "Ворсовая структура", value: "Рифлёный ПВХ-ворс (miners moss)" },
      { label: "Подложка", value: "Без подложки / опция резиновой подложки" },
      { label: "Цвет", value: "Золотой, чёрный, зелёный" },
      { label: "МОЗ (мин. заказ)", value: product.moq === "100 Rolls" ? "100 рулонов" : product.moq },
      { label: "Срок производства", value: product.leadTime === "15-25 Days" ? "15–25 дней" : product.leadTime },
      { label: "Цена FOB", value: product.fobPrice ? `${product.fobPrice.lowPrice}–${product.fobPrice.highPrice} USD / рулон` : "по запросу" },
    ]
  : [];

const faqs = [
  {
    q: "Для каких задач подходит этот коврик?",
    a: "Коврик используется в шлюзовых лотках (sluice box) для промывки золотоносного песка: рифлёная ПВХ-структура (miners moss) задерживает мелкие частицы золота, пропуская песок, гравий и воду."
  },
  {
    q: "Какая толщина лучше для моего шлюза?",
    a: "10 мм подходит для лёгкой ручной промывки и переносных шлюзов; 15 мм — универсальный вариант для большинства промывочных установок; 20 мм рекомендуется при высоком расходе воды и крупнообломочном материале, где важна повышенная удерживающая способность. Сообщите тип вашей установки — поможем подобрать толщину."
  },
  {
    q: "Можно ли заказать нестандартную ширину или длину рулона?",
    a: "Да, помимо стандартного размера 1 × 15 м доступны индивидуальные размеры, цвет и упаковка под OEM/ODM — уточните параметры вашего шлюза при заявке."
  },
  {
    q: "Какая минимальная партия заказа?",
    a: "Минимальный заказ — 100 рулонов. Срок производства — 15–25 дней в зависимости от толщины и объёма партии."
  },
  {
    q: "Поддерживаете ли поставку DAP до Алматы?",
    a: "Да, мы можем организовать доставку на условиях DAP до Алматы (Казахстан) — с учётом развитой золотодобывающей отрасли региона. Точный срок и стоимость зависят от объёма партии — оставьте заявку, и мы пришлём индивидуальный расчёт."
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
    { "@type": "ListItem", position: 2, name: "Коврик для золотодобычи", item: absoluteUrl(ruPath) },
  ],
};

const productJsonLd = product
  ? {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Коврик miners moss для золотодобычи",
      description: "ПВХ-коврик miners moss для шлюзовых лотков, промывки россыпного золота и старательских установок.",
      image: [absoluteUrl(product.image)],
      sku: product.id,
      brand: { "@type": "Brand", name: "VISHOME" },
      manufacturer: { "@type": "Organization", name: "VISHOME" },
      material: "ПВХ / винил",
      size: "1 м × 15 м; толщина 10 / 15 / 20 мм",
      audience: { "@type": "BusinessAudience", audienceType: "Золотодобывающие компании, дистрибьюторы и поставщики оборудования" },
      offers: product.fobPrice
        ? {
            "@type": "AggregateOffer",
            url: absoluteUrl(ruPath),
            priceCurrency: product.fobPrice.currency,
            lowPrice: product.fobPrice.lowPrice,
            highPrice: product.fobPrice.highPrice,
            offerCount: 1,
            availability: "https://schema.org/PreOrder",
          }
        : undefined,
      additionalProperty: [
        { "@type": "PropertyValue", name: "Availability", value: "Quotation required / made to order" },
        { "@type": "PropertyValue", name: "Sales Unit", value: product.fobPrice?.unit ?? "Roll" },
        { "@type": "PropertyValue", name: "Price Basis", value: "Reference FOB range; final price and validity require a written quotation" },
      ],
    }
  : null;

export const metadata: Metadata = product
  ? {
      title: "Коврик для золотодобычи miners moss | VISHOME",
      description:
        "ПВХ-коврик miners moss для шлюзовых лотков, промывки золотоносного песка и старательской добычи. Толщина 10/15/20 мм, рулон 1×15 м. Поставка DAP Алматы, Казахстан.",
      alternates: {
        canonical: absoluteUrl(ruPath),
        languages: {
          en: absoluteUrl(enPath),
          ru: absoluteUrl(ruPath),
          "x-default": absoluteUrl(enPath),
        },
      },
      openGraph: {
        title: "Коврик для золотодобычи (miners moss) | VISHOME",
        description: "ПВХ-коврик для шлюзовых лотков и промывки золотоносного песка. Поставка DAP Алматы.",
        url: absoluteUrl(ruPath),
        type: "website",
        locale: "ru_RU",
        images: [{ url: absoluteUrl(product.image), alt: "Коврик miners moss для золотодобычи Vishomecarpet" }],
      },
    }
  : { title: "Коврик для золотодобычи | VISHOME" };

export default function GoldMiningRuPage() {
  if (!product) return <div>Product not found</div>;

  const whatsappUrl = getContactBridgeUrl(
    "Здравствуйте! Меня интересует коврик для золотодобычи (miners moss) для шлюзового лотка. Прошу выслать цену FOB, условия DAP до Алматы, МОЗ и срок производства.",
    { placement: "ru_gold_mining_hero", product: "Gold Mining Carpet Mat for Sluice Box", intent: "ru_project_quote", pagePath: ruPath }
  );

  return (
    <div className="bg-white min-h-screen" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      {productJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />}

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
                <ProductImage src={product.image} alt="Коврик miners moss для золотодобычи и шлюзовых лотков" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:w-2/5">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-accent">Прямые поставки с фабрики</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Коврик для золотодобычи (miners moss)
              </h1>
              <p className="mb-6 text-muted leading-relaxed">
                ПВХ-коврик с рифлёной структурой для шлюзовых лотков, промывки золотоносного песка, старательской добычи и оборудования для промывки россыпного золота. Задерживает мелкие частицы золота, пропуская песок и воду.
              </p>
              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:mb-10 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>МОЗ</span>
                  <span className="text-right font-bold">100 рулонов</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Срок производства</span>
                  <span className="text-right font-bold">15–25 дней</span>
                </div>
                {product.fobPrice && (
                  <div className="flex justify-between gap-6 text-xs uppercase">
                    <span>Цена FOB</span>
                    <span className="text-right font-bold">{product.fobPrice.lowPrice}–{product.fobPrice.highPrice} USD / рулон</span>
                  </div>
                )}
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Толщина</span>
                  <span className="text-right font-bold">10 / 15 / 20 мм</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappUrl}
                  data-whatsapp-placement="ru_gold_mining_hero"
                  data-whatsapp-intent="ru_project_quote"
                  className="flex min-h-12 items-center justify-center rounded-sm bg-[#25D366] px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  Написать в WhatsApp
                </a>
                <a
                  href="#ru-inquiry-form"
                  data-track-event="quote_cta_click"
                  data-item-name="Коврик miners moss для золотодобычи"
                  data-item-category="gold_mining_mat"
                  className="flex min-h-12 items-center justify-center rounded-sm bg-primary px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:bg-black"
                >
                  Получить цену и доставку
                </a>
              </div>
              <p className="mt-4 text-center text-xs font-bold leading-relaxed text-primary sm:text-left">
                Ответ специалиста в течение 24 часов. Рассчитаем FOB, DAP до Казахстана и поставку в другие страны Центральной Азии.
              </p>
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
            Доставка DAP до Алматы
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Мы поддерживаем поставку на условиях DAP (Delivered at Place) до Алматы (Казахстан) — товар доставляется до согласованного пункта назначения, вам остаётся только выполнить таможенную очистку на своей стороне. Это особенно актуально для клиентов, связанных с золотодобывающей отраслью Казахстана.
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
            Укажите тип шлюза, необходимую толщину и город доставки — менеджер пришлёт цену FOB, вариант DAP до Алматы и срок производства.
          </p>
          <RuLeadCaptureForm
            formName="ru_gold_mining_quote"
            productDefault="Коврик miners moss для золотодобычи"
            submitLabel="ОТПРАВИТЬ ЗАЯВКУ"
          />
        </div>
      </section>
    </div>
  );
}
