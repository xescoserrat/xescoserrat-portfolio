import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../../components/breadcrumbs";
import { SiteHeader } from "../../../../components/site-header";
import { getKoroshiCategory, koroshiCategories } from "../../../../content/portfolio-worlds";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return koroshiCategories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ category: slug }): Metadata => {
    const category = getKoroshiCategory(slug);
    if (!category) return {};
    const title = `${category.title} — Koroshi | Francesc Serrat`;
    return { title, description: category.description, alternates: { canonical: `/work/koroshi/${category.slug}/` }, openGraph: { title, description: category.description, url: `/work/koroshi/${category.slug}/`, type: "website" }, twitter: { card: "summary", title, description: category.description } };
  });
}

export default async function KoroshiCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getKoroshiCategory(slug);
  if (!category) notFound();
  const destination = category.slug === "t-shirts-sleeveless"
    ? "/work/koroshi/menswear/ss26/t-shirts"
    : "/work/koroshi/menswear/ss26";

  return (
    <>
      <a className="skip-link" href="#category-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="category-hero" id="category-content" tabIndex={-1} aria-labelledby="category-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: category.title }]} />
          <p className="eyebrow">Koroshi / Preserved bookmark</p>
          <h1 id="category-title">Koroshi SS26<br />has moved.</h1>
          <p className="world-summary">This previous Koroshi link remains available for compatibility. The current public catalogue is now organized through the verified Menswear / Spring–Summer 2026 product hierarchy.</p>
        </section>
        <nav className="category-return" aria-label="Koroshi category navigation">
          <Link href="/">← Home</Link>
          <Link href="/work/koroshi">← All Koroshi disciplines</Link>
          <Link href={destination}>Open the SS26 catalogue →</Link>
        </nav>
      </main>
    </>
  );
}
