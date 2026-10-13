"use client";

import { Suspense, type ComponentProps } from "react";
import { useSearchParams } from "next/navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { applicationPages } from "@/lib/application-data";

type QueryProductLeadCaptureFormProps = Omit<ComponentProps<typeof LeadCaptureForm>, "productDefault"> & {
  fallbackProduct?: string;
};

function QueryProductLeadCaptureFormContent({
  fallbackProduct = "",
  ...formProps
}: QueryProductLeadCaptureFormProps) {
  const searchParams = useSearchParams();
  const isContactQuote = formProps.formName === "contact_project_quote";
  const application = isContactQuote
    ? applicationPages.find((page) => page.title === searchParams.get("application")?.trim())
    : undefined;
  const product = searchParams.get("product")?.trim() || application?.title || fallbackProduct;
  const sourcePage = searchParams.get("source")?.trim() || (application ? `/applications/${application.slug}` : "");

  return <LeadCaptureForm {...formProps} key={isContactQuote ? formProps.formName : `${product}-${sourcePage}`} productDefault={product} sourcePageDefault={sourcePage} />;
}

export default function QueryProductLeadCaptureForm({
  fallbackProduct = "",
  ...formProps
}: QueryProductLeadCaptureFormProps) {
  return (
    <Suspense fallback={<LeadCaptureForm {...formProps} productDefault={fallbackProduct} />}>
      <QueryProductLeadCaptureFormContent {...formProps} fallbackProduct={fallbackProduct} />
    </Suspense>
  );
}
