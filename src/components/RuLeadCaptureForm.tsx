"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { trackLeadConversion } from "@/lib/tracking";

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

    try {
      const response = await fetch("https://formspree.io/f/xlgkpkza", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      trackLeadConversion({
        formName,
        product: String(formData.get("product") || ""),
        quantity: String(formData.get("quantity") || ""),
        country: String(formData.get("country") || ""),
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-surface p-5 shadow-sm md:space-y-8 md:p-12">
      {introText ? <p className="text-sm leading-relaxed text-muted">{introText}</p> : null}
      {state.error ? <p className="text-red-600 font-bold text-center text-sm">{state.error}</p> : null}

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Имя *</label>
          <input name="name" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Ваше имя" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Email *</label>
          <input name="email" type="email" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="ivan@company.com" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">WhatsApp</label>
          <input name="whatsapp" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="+7 000 000 00 00" />
        </div>
        <div>
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
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Количество / Площадь</label>
          <input name="quantity" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="например, 500 м²" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Срок поставки</label>
          <input name="delivery_time" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Желаемая дата отгрузки" />
        </div>
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
    </form>
  );
}
