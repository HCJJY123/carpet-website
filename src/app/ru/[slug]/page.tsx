import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RuB2BLandingPage from "@/components/RuB2BLandingPage";
import { absoluteUrl } from "@/lib/seo";
import { ruB2BPageMap, ruB2BPages } from "@/lib/ru-b2b-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ruB2BPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = ruB2BPageMap[slug];
  if (!page) return { title: "Страница не найдена" };
  const path = `/ru/${page.slug}`;

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        ru: absoluteUrl(path),
        en: absoluteUrl(page.englishPath),
        "x-default": absoluteUrl(page.englishPath),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(path),
      type: "website",
      locale: "ru_RU",
    },
  };
}

export default async function RuMarketLanding({ params }: Props) {
  const { slug } = await params;
  const page = ruB2BPageMap[slug];
  if (!page) notFound();
  return <RuB2BLandingPage page={page} />;
}
