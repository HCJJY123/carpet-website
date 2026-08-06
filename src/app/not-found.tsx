import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background">
      <section className="section-padding min-h-[70vh]">
        <div className="container-fox max-w-3xl rounded-md border border-border bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">404</p>
          <h1 className="mt-4 text-3xl font-black text-primary md:text-5xl">Page not found</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted">
            The page may have moved or the address may be incomplete. Use the product catalog, resource center or contact form to continue the project search.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/products" className="btn-fox-orange text-center">View Products</Link>
            <Link href="/resources" className="btn-fox-outline text-center">Resource Center</Link>
            <Link href="/contact#quote-form" className="btn-fox-outline text-center">Contact Sales</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
