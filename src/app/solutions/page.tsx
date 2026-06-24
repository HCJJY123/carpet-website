import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Carpet Solutions | VISHOME",
  description:
    "Explore Vishome commercial flooring solution pages for hospitality, office, and project-based carpet applications.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <section className="section-padding bg-white min-h-[60vh]">
      <div className="container-fox max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-primary tracking-wider mb-6">
          Solutions
        </h1>
        <p className="text-muted text-lg mb-10">
          Practical commercial carpet systems for project-based procurement and installation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/solutions/hotel-hospitality" className="btn-fox-orange !px-10">
            Hotel & Hospitality
          </Link>
          <Link href="/contact" className="btn-fox-outline !px-10">
            Contact Technical Team
          </Link>
        </div>
      </div>
    </section>
  );
}
