import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryApplicationLandingPage, { countryApplicationMetadata } from "@/components/CountryApplicationLandingPage";
import { countryApplicationPageMap, countryApplicationPages } from "@/lib/country-application-pages";

type Props = { params: Promise<{ market: string; slug: string }> };

export function generateStaticParams() {
  return countryApplicationPages.map((page) => ({ market: page.market, slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { market, slug } = await params;
  const page = countryApplicationPageMap[`${market}/${slug}`];
  if (!page) return { title: "Market application page not found" };
  return countryApplicationMetadata(page);
}

export default async function CountryApplicationPageRoute({ params }: Props) {
  const { market, slug } = await params;
  const page = countryApplicationPageMap[`${market}/${slug}`];
  if (!page) notFound();
  return <CountryApplicationLandingPage page={page} />;
}

