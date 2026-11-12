import type { ComponentProps } from "react";
import ImageRenderer from "./ImageRenderer";
import { getResponsiveImage } from "@/lib/responsive-images";

export default function ProductImage(props: Omit<ComponentProps<typeof ImageRenderer>, "responsive">) {
  return <ImageRenderer {...props} responsive={getResponsiveImage(props.src)} />;
}
