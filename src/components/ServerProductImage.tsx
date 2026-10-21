import type { ComponentProps } from "react";
import ImageRenderer from "./ImageRenderer";
import { responsiveImageManifest } from "@/lib/responsive-image-manifest";

// Resolve only this image on the server, rather than shipping the full site manifest.
export default function ServerProductImage(props: Omit<ComponentProps<typeof ImageRenderer>, "responsive">) {
  return <ImageRenderer {...props} responsive={responsiveImageManifest[props.src]} />;
}
