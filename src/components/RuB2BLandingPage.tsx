import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import RuLeadCaptureForm from "@/components/RuLeadCaptureForm";
import { brandInfo, products } from "@/lib/data";
import type { RuB2BPage } from "@/lib/ru-b2b-pages";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

const processSteps = [
  "Получение требований и плана",
  "Подбор конструкции и дизайна",
  "Согласование образца",
  "Подтверждение количества",
  "Производство и контроль",
  "Упаковка и отгрузка",
];

export default function RuB2BLandingPage({ page }: { page: RuB2BPage }) {
  const selectedProducts = page.productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const primary = products.find((product) => product.id === page.primaryProductId) ?? selectedProducts[0];
  if (!primary) return null;

  const pagePath = `/ru/${page.slug}`;
  const emailHref = `mailto:${brandInfo.email}?subject=${encodeURIComponent(`Запрос по проекту: ${page.title}`)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(pagePath)}#webpage`,
        url: absoluteUrl(pagePath),
        name: page.title,
        description: page.description,
        inLanguage: "ru-RU",
        isPartOf: { "@id": `${brandInfo.url}/#website` },
        about: selectedProducts.map((product) => ({ "@type": "Product", name: product.name, url: absoluteUrl(productPath(product.id)) })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: absoluteUrl("/ru") },
          { "@type": "ListItem", position: 2, name: page.title, item: absoluteUrl(pagePath) },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />

      <section className="border-b border-border bg-primary py-12 text-white md:py-20">
        <div className="container-fox grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">{page.eyebrow}</p>
            <h1 className="text-3xl font-black leading-tight md:text-5xl">{page.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{page.intro}</p>
            <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-white/70">{page.buyerFocus}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#ru-quote-form" data-track-event="ru_quote_cta_click" className="btn-fox-orange text-center">
                Получить расчет стоимости
              </Link>
              <Link href="/request-sample-box" data-track-event="ru_sample_request" className="btn-fox-outline border-white/45 text-center text-white hover:border-accent">
                Запросить образцы
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden border border-white/15 bg-white/5 shadow-2xl">
            <ProductImage src={primary.image} alt={page.title} className="h-full w-full" priority sizes="(max-width: 1024px) 100vw, 52vw" />
          </div>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="ru_product">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-accent">Продукция</p>
            <h2 className="text-3xl font-black text-primary md:text-4xl">Решения для проекта</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {selectedProducts.map((product) => (
              <article key={product.id} className="border border-border bg-white">
                <Link href={productPath(product.id)} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-surface">
                    <ProductImage src={product.image} alt={product.imageAlt || product.name} className="h-full w-full transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-black leading-snug text-primary">{product.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-accent">Технические данные →</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-accent">Спецификация</p>
            <h2 className="text-3xl font-black text-primary md:text-4xl">Базовые параметры</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">Параметры ниже относятся к основному продукту страницы. Финальная спецификация подтверждается после выбора конструкции и образца.</p>
          </div>
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              ["Материал", primary.spec.material],
              ["Размер / формат", primary.spec.size],
              ["Основа", primary.technicalSpecs.backing],
              ["Вес ворса", primary.technicalSpecs.pileWeight],
              ["Общая толщина", primary.technicalSpecs.totalThickness],
              ["Класс нагрузки", primary.technicalSpecs.trafficClass],
              ["Sample", primary.moqTiers.sample],
              ["Trial Order", primary.moqTiers.trialOrder],
              ["Project MOQ", primary.moqTiers.project],
              ["Срок производства", primary.leadTime],
            ].map(([label, value]) => (
              <div key={label} className="bg-white p-5">
                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">{label}</dt>
                <dd className="mt-2 text-sm font-bold leading-relaxed text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-primary">Для каких помещений</h2>
            <div className="mt-7 grid grid-cols-2 gap-px border border-border bg-border">
              {page.applications.map((item) => <p key={item} className="bg-white p-4 text-sm font-bold text-primary">{item}</p>)}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-primary">Почему VISHOME</h2>
            <div className="mt-7 space-y-5">
              {page.benefits.map((benefit) => (
                <div key={benefit.title} className="border-l-2 border-accent pl-5">
                  <h3 className="font-black text-primary">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox">
          <h2 className="text-3xl font-black md:text-4xl">От требования до поставки</h2>
          <ol className="mt-10 grid gap-px bg-white/15 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <li key={step} className="bg-primary-light p-5">
                <span className="text-xs font-black text-accent">0{index + 1}</span>
                <p className="mt-3 text-sm font-bold leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="ru_faq">
        <div className="container-fox max-w-5xl">
          <h2 className="text-center text-3xl font-black text-primary md:text-4xl">Частые вопросы закупщиков</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {page.faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-black text-primary">{item.question}</summary>
                <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="ru-quote-form" className="section-padding border-t border-border bg-surface" data-funnel-section="ru_quote">
        <div className="container-fox max-w-5xl scroll-mt-28">
          <div className="mb-9 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-accent">Проектный запрос</p>
            <h2 className="text-3xl font-black text-primary md:text-4xl">Получить расчет стоимости</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">Укажите компанию, тип объекта, площадь, город и желаемую дату поставки. Чем точнее данные, тем полезнее будет первичный ответ.</p>
          </div>
          <RuLeadCaptureForm
            formName={`ru_russia_${page.slug}`}
            productDefault={page.title}
            submitLabel="Отправить запрос"
            market="russia"
          />
          <div className="mt-7 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row">
            <span className="text-muted">Или отправьте материалы проекта:</span>
            <a href={emailHref} data-track-event="ru_email_click" className="font-black text-primary underline underline-offset-4">{brandInfo.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
