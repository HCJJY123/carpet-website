import Image from "next/image";

interface PageHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  description,
  eyebrow,
  image,
  imageAlt,
  objectPosition = "center",
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[280px] overflow-hidden bg-[#102A43] py-16 text-center text-white sm:min-h-[320px] sm:py-20 md:min-h-[360px] md:py-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        loading="eager"
        quality={82}
        sizes="100vw"
        className="-z-20 object-cover scale-105"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 -z-10 bg-[#102A43]/78 md:bg-[#102A43]/72" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_35%,rgba(200,150,62,0.26),transparent_30%),linear-gradient(90deg,rgba(15,43,74,0.95),rgba(15,43,74,0.72)_45%,rgba(15,43,74,0.58))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#102A43]/55 to-transparent" />
      <div className="container-fox relative z-10 flex min-h-[150px] flex-col items-center justify-center md:min-h-[190px]">
        {eyebrow ? (
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.16em] text-accent md:mb-5 md:tracking-[0.18em]">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-5xl text-3xl font-extrabold leading-tight tracking-[-0.015em] text-white drop-shadow-xl sm:text-4xl md:text-[52px]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-white/76 sm:mt-6 md:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
