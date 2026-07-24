import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../../../../components/breadcrumbs";
import { KoroshiProductCard } from "../../../../../../components/koroshi-product-card";
import { SiteHeader } from "../../../../../../components/site-header";
import { getKoroshiSs26Category, koroshiSs26Categories } from "../../../../../../content/koroshi-ss26";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return koroshiSs26Categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ category: slug }): Metadata => {
    const category = getKoroshiSs26Category(slug);
    if (!category) return {};
    const title = `${category.title} — Koroshi SS26 | Francesc Serrat`;
    return {
      title,
      description: category.description,
      alternates: { canonical: `/work/koroshi/menswear/ss26/${category.slug}/` },
      openGraph: { title, description: category.description, url: `/work/koroshi/menswear/ss26/${category.slug}/`, type: "website" },
      twitter: { card: "summary", title, description: category.description },
    };
  });
}

export default async function KoroshiSs26CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getKoroshiSs26Category(slug);
  if (!category) notFound();

  return (
    <>
      <a className="skip-link" href="#category-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="catalogue-category-hero" id="category-content" tabIndex={-1} aria-labelledby="category-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: "Menswear", href: "/work/koroshi/menswear" }, { label: "SS26", href: "/work/koroshi/menswear/ss26" }, { label: category.title }]} />
          <p className="eyebrow">Koroshi Menswear / SS26 / {category.title}</p>
          <h1 id="category-title">{category.title}</h1>
          <p className="world-summary">{category.description}</p>
          <p className="catalogue-count">{category.products.length} verified styles</p>
        </section>
        <section className="catalogue-grid" aria-label={`${category.title} products`}>
          {category.products.map((product) => <KoroshiProductCard key={product.styleCode} product={product} />)}
        </section>
        <nav className="category-return" aria-label="Koroshi SS26 navigation">
          <Link href="/">← Home</Link>
          <Link href="/work/koroshi">← Koroshi</Link>
          <Link href="/work/koroshi/menswear">← Menswear</Link>
          <Link href="/work/koroshi/menswear/ss26">← All SS26 categories</Link>
        </nav>
      </main>
    </>
  );
}
