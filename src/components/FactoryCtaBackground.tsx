import type { ReactNode } from "react";

type FactoryCtaBackgroundProps = {
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
};

export default function FactoryCtaBackground({
  children,
  className = "",
  overlayClassName = "bg-primary/72",
}: FactoryCtaBackgroundProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-primary text-white ${className}`}>
      <picture className="absolute inset-0 -z-20 block h-full w-full" aria-hidden="true">
        <source
          srcSet="/images/home/factory-production-scroll/factory-carpet-production-640.webp 640w, /images/home/factory-production-scroll/factory-carpet-production-960.webp 960w, /images/home/factory-production-scroll/factory-carpet-production-1440.webp 1440w, /images/home/factory-production-scroll/factory-carpet-production-1600.webp 1600w"
          sizes="116vw"
          type="image/webp"
        />
        <img
          src="/images/home/factory-production-scroll/factory-carpet-production-1440.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="factory-cta-pan h-full w-[116%] max-w-none object-cover opacity-75"
        />
      </picture>
      <div className={`absolute inset-0 -z-10 ${overlayClassName}`} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-primary to-transparent" />
      {children}
    </section>
  );
}
