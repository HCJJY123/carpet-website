"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getAttributionForEvent } from "@/lib/attribution";
import { getFunnelSessionSignals, scoreLead } from "@/lib/funnel";
import { trackAnalyticsEvent, trackLeadConversion } from "@/lib/tracking";

type RuLeadCaptureFormProps = {
  formName: string;
  productDefault?: string;
  submitLabel: string;
  introText?: string;
};

export default function RuLeadCaptureForm({
  formName,
  productDefault = "",
  submitLabel,
  introText,
}: RuLeadCaptureFormProps) {
  const router = useRouter();
  const formStarted = useRef(false);
  const [state, setState] = useState({
    submitting: false,
    error: null as string | null,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ submitting: true, error: null });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form_name", formName);
    formData.set("language", "ru");
    formData.set("page_url", window.location.href);
    formData.set("page_path", window.location.pathname);
    formData.set("submitted_at", new Date().toISOString());
    formData.set("privacy_policy", "Acknowledged at submission");

    Object.entries(getAttributionForEvent()).forEach(([key, value]) => {
      if (value) formData.set(key, value);
    });

    const signals = getFunnelSessionSignals();
    const qualification = scoreLead({
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      quantity: String(formData.get("quantity") || ""),
      projectStage: String(formData.get("project_stage") || ""),
      purchaseTimeframe: String(formData.get("purchase_timeframe") || ""),
      needSamples: String(formData.get("need_samples") || ""),
    }, signals);
    formData.set("lead_score", String(qualification.score));
    formData.set("lead_grade", qualification.grade);
    formData.set("lead_score_reasons", qualification.reasons.join("; "));
    formData.set("session_product_views", String(signals.productViewCount));
    formData.set("session_max_engaged_seconds", String(signals.maxEngagedSeconds));
    formData.set("session_section_views", String(signals.sectionViewCount));

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      trackLeadConversion({
        formName,
        product: String(formData.get("product") || ""),
        quantity: String(formData.get("quantity") || ""),
        country: String(formData.get("country") || ""),
        company: String(formData.get("company") || ""),
        projectStage: String(formData.get("project_stage") || ""),
        purchaseTimeframe: String(formData.get("purchase_timeframe") || ""),
        needSamples: String(formData.get("need_samples") || ""),
        leadScore: qualification.score,
        leadGrade: qualification.grade,
        productViewCount: signals.productViewCount,
        maxEngagedSeconds: signals.maxEngagedSeconds,
      });

      sessionStorage.setItem(
        "vishome_form_success",
        JSON.stringify({
          token: Date.now(),
          formName,
          name: String(formData.get("name") || ""),
          product: String(formData.get("product") || ""),
          quantity: String(formData.get("quantity") || ""),
          country: String(formData.get("country") || ""),
        })
      );

      router.push("/thank-you");
    } catch {
      setState({
        submitting: false,
        error: "Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.",
      });
    }
  }

  function handleFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackAnalyticsEvent("form_start", {
      form_name: formName,
      product: productDefault,
      page_path: window.location.pathname,
      language: "ru",
    });
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFormStart} className="space-y-6 rounded-2xl border border-border bg-surface p-5 shadow-sm md:space-y-8 md:p-12">
      <input name="_gotcha" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {introText ? <p className="text-sm leading-relaxed text-muted">{introText}</p> : null}
      {state.error ? <p className="text-red-600 font-bold text-center text-sm" role="alert" aria-live="polite">{state.error}</p> : null}

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Имя *</label>
          <input name="name" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Ваше имя" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Компания</label>
          <input name="company" type="text" autoComplete="organization" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Название компании" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Email *</label>
          <input name="email" type="email" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="ivan@company.com" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">WhatsApp</label>
          <input name="whatsapp" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="+7 000 000 00 00" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Страна / Город доставки *</label>
          <input name="country" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Казахстан, Узбекистан и т.д." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Объект / Назначение *</label>
          <input name="project_type" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Офис, склад, объект, прииск..." />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Продукт *</label>
          <input name="product" type="text" required defaultValue={productDefault} className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Ковровая плитка, ковролин, коврик..." />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Этап закупки *</label>
          <select name="project_stage" required defaultValue="" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
            <option value="" disabled>Выберите этап</option>
            <option value="Ready to order">Готовы заказать</option>
            <option value="Requesting quotation">Запрашиваем предложение</option>
            <option value="Sample evaluation">Оцениваем образцы</option>
            <option value="Tender / specification">Тендер / спецификация</option>
            <option value="Comparing suppliers">Сравниваем поставщиков</option>
            <option value="General research">Изучаем рынок</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Срок закупки *</label>
          <select name="purchase_timeframe" required defaultValue="" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
            <option value="" disabled>Выберите срок</option>
            <option value="Within 30 days">В течение 30 дней</option>
            <option value="1-3 months">1-3 месяца</option>
            <option value="3-6 months">3-6 месяцев</option>
            <option value="More than 6 months">Более 6 месяцев</option>
            <option value="Not decided">Пока не решили</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Количество / Площадь</label>
          <input name="quantity" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="например, 500 м²" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Срок поставки</label>
          <input name="delivery_time" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Желаемая дата отгрузки" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Нужны образцы?</label>
        <select name="need_samples" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
          <option value="Not specified">Не указано</option>
          <option value="Yes">Да</option>
          <option value="No">Нет</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Пункт доставки (DAP)</label>
        <select name="dap_destination" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all">
          <option value="Almaty">Алматы (Казахстан)</option>
          <option value="Tashkent">Ташкент (Узбекистан)</option>
          <option value="Other">Другой город / уточню в сообщении</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Сообщение *</label>
        <textarea name="message" rows={6} required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all resize-none" placeholder="Опишите площадь объекта, сроки, требования к рисунку/цвету, нужен ли образец..." />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-fox-orange w-full py-5 text-sm tracking-[0.16em] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 md:py-6 md:text-base md:tracking-[0.4em]"
      >
        {state.submitting ? "ОТПРАВКА..." : submitLabel}
      </button>
      <p className="text-center text-xs leading-relaxed text-muted">
        Отправляя форму, вы подтверждаете ознакомление с нашей{" "}
        <Link href="/privacy-policy" className="font-bold text-primary underline underline-offset-2">
          Политикой конфиденциальности
        </Link>{" "}
        и соглашаетесь на связь по вашему запросу.
      </p>
    </form>
  );
}
