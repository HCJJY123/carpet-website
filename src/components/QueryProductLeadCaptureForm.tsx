"use client";

import { Suspense, type ComponentProps } from "react";
import { useSearchParams } from "next/navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

type QueryProductLeadCaptureFormProps = Omit<ComponentProps<typeof LeadCaptureForm>, "productDefault"> & {
  fallbackProduct?: string;
};

function QueryProductLeadCaptureFormContent({
  fallbackProduct = "",
  ...formProps
}: QueryProductLeadCaptureFormProps) {
  const searchParams = useSearchParams();
  const product = searchParams.get("product")?.trim() || fallbackProduct;

  return <LeadCaptureForm {...formProps} key={product} productDefault={product} />;
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
