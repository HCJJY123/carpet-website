"use client";

import type { ComponentProps } from "react";
import ImageRenderer from "./ImageRenderer";
import { responsiveImageManifest } from "@/lib/responsive-image-manifest";

export default function ProductImage(props: Omit<ComponentProps<typeof ImageRenderer>, "responsive">) {
  return <ImageRenderer {...props} responsive={responsiveImageManifest[props.src]} />;
}
