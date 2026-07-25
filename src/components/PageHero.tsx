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
          <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.35em] text-accent md:mb-5">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-5xl text-3xl font-black uppercase leading-tight tracking-[0.06em] text-white drop-shadow-xl sm:text-4xl sm:tracking-[0.1em] md:text-6xl md:tracking-[0.12em]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-white/76 sm:mt-6 md:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
