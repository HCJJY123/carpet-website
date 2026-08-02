import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryMarketLandingPage, { countryMarketMetadata } from "@/components/CountryMarketLandingPage";
import { countryMarketPageMap, countryMarketPages } from "@/lib/country-market-pages";

type Props = { params: Promise<{ market: string; slug: string }> };

export function generateStaticParams() {
  return countryMarketPages.map((page) => ({ market: page.market, slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { market, slug } = await params;
  const page = countryMarketPageMap[`${market}/${slug}`];
  if (!page) return { title: "Market page not found" };
  return countryMarketMetadata(page);
}

export default async function CountryMarketPageRoute({ params }: Props) {
  const { market, slug } = await params;
  const page = countryMarketPageMap[`${market}/${slug}`];
  if (!page) notFound();
  return <CountryMarketLandingPage page={page} />;
}
