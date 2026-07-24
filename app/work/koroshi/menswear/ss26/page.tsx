import type { Metadata } from "next";
import { Breadcrumbs } from "../../../../../components/breadcrumbs";
import { CategoryCard } from "../../../../../components/category-card";
import { SiteHeader } from "../../../../../components/site-header";
import { koroshiSs26Categories } from "../../../../../content/koroshi-ss26";

export const metadata: Metadata = {
  title: "Koroshi SS26 Menswear Catalogue | Francesc Serrat",
  description: "A verified portfolio catalogue of Koroshi Spring–Summer 2026 menswear styles, arranged by garment category.",
  alternates: { canonical: "/work/koroshi/menswear/ss26/" },
  openGraph: { title: "Koroshi SS26 Menswear Catalogue | Francesc Serrat", description: "Verified Koroshi SS26 menswear, arranged by garment category.", url: "/work/koroshi/menswear/ss26/", type: "website" },
  twitter: { card: "summary", title: "Koroshi SS26 Menswear Catalogue | Francesc Serrat", description: "Verified Koroshi SS26 menswear, arranged by garment category." },
};

export default function KoroshiSs26Page() {
  return (
    <>
      <a className="skip-link" href="#ss26-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="category-hero" id="ss26-content" tabIndex={-1} aria-labelledby="ss26-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: "Menswear", href: "/work/koroshi/menswear" }, { label: "SS26" }]} />
          <p className="eyebrow">Koroshi Menswear / Season</p>
          <h1 id="ss26-title">Spring–Summer<br />2026</h1>
          <p className="world-summary">A verified, product-level selection from the SS26 local development archive. The categories below are based on the available garment evidence; incomplete or ambiguous records remain unpublished.</p>
        </section>
        <section className="category-overview catalogue-category-overview" aria-labelledby="category-title">
          <div className="category-heading">
            <p className="eyebrow">Browse the season</p>
            <h2 id="category-title">Garment categories.</h2>
          </div>
          <div className="category-grid">
            {koroshiSs26Categories.map((category) => (
              <CategoryCard key={category.slug} href={`/work/koroshi/menswear/ss26/${category.slug}`} title={category.title} description={category.description} cover={category.cover} count={category.products.length} countLabel="verified styles" />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
