import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../../../../../components/breadcrumbs";
import { MediaGallery } from "../../../../../../../components/media-gallery";
import { SiteHeader } from "../../../../../../../components/site-header";
import { getKoroshiSs26Category, getKoroshiSs26Product, publishedKoroshiSs26Products } from "../../../../../../../content/koroshi-ss26";

type Props = { params: Promise<{ reference: string }> };

export function generateStaticParams() {
  return publishedKoroshiSs26Products.map((product) => ({ reference: product.styleCode.toLowerCase() }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ reference }): Metadata => {
    const product = getKoroshiSs26Product(reference);
    if (!product) return {};
    const title = `${product.styleCode} — Koroshi SS26 ${product.productKind} | Francesc Serrat`;
    const description = `${product.productKind}, style ${product.styleCode}, from the verified Koroshi SS26 menswear portfolio.`;
    const pathname = `/work/koroshi/menswear/ss26/product/${product.styleCode.toLowerCase()}/`;
    return { title, description, alternates: { canonical: pathname }, openGraph: { title, description, url: pathname, type: "website" }, twitter: { card: "summary", title, description } };
  });
}

export default async function KoroshiProductPage({ params }: Props) {
  const { reference } = await params;
  const product = getKoroshiSs26Product(reference);
  if (!product) notFound();
  const category = getKoroshiSs26Category(product.categorySlug);
  if (!category) notFound();
  const index = category.products.findIndex((item) => item.styleCode === product.styleCode);
  const previous = category.products[(index - 1 + category.products.length) % category.products.length];
  const next = category.products[(index + 1) % category.products.length];

  return (
    <>
      <a className="skip-link" href="#product-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="product-hero" id="product-content" tabIndex={-1} aria-labelledby="product-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: "Menswear", href: "/work/koroshi/menswear" }, { label: "SS26", href: "/work/koroshi/menswear/ss26" }, { label: category.title, href: `/work/koroshi/menswear/ss26/${category.slug}` }, { label: product.styleCode }]} />
          <div className="product-heading">
            <div>
              <p className="eyebrow">Koroshi Menswear / SS26</p>
              <h1 id="product-title">{product.productName ?? product.productKind}</h1>
            </div>
            <p>{product.styleCode}</p>
          </div>
          <MediaGallery className="product-gallery" media={product.media} title={`${product.productKind} ${product.styleCode}`} priority />
        </section>
        <section className="product-details layout-grid" aria-labelledby="product-details-title">
          <p className="section-index">( Record )</p>
          <div>
            <p className="eyebrow">Verified product archive</p>
            <h2 id="product-details-title">{product.proposedCategory}.<br />Spring–Summer 2026.</h2>
            <p className="lede">{product.description}</p>
            <dl className="product-specification">
              <div><dt>Style</dt><dd>{product.styleCode}</dd></div>
              <div><dt>Category</dt><dd>{product.officialCategory ?? `${product.proposedCategory} (verified from local product evidence)`}</dd></div>
              <div><dt>Colour references</dt><dd>{product.colourReferences.length ? product.colourReferences.join(", ") : "No colour suffix retained"}</dd></div>
              <div><dt>Available views</dt><dd>{product.availableViews.join(", ")}</dd></div>
              <div><dt>Media provenance</dt><dd>{product.media[0]?.source === "official-brand-source" ? "Verified official Koroshi product export, stored locally" : "Exact local SS26 product export, optimized for web"}</dd></div>
            </dl>
            <p className="product-contribution">{product.contribution}</p>
          </div>
        </section>
        <nav className="product-navigation" aria-label="Product navigation">
          <Link href={`/work/koroshi/menswear/ss26/${category.slug}`}>← Back to {category.title}</Link>
          <Link href={`/work/koroshi/menswear/ss26/product/${previous.styleCode.toLowerCase()}`}>Previous: {previous.styleCode}</Link>
          <Link href={`/work/koroshi/menswear/ss26/product/${next.styleCode.toLowerCase()}`}>Next: {next.styleCode} →</Link>
          <Link href="/work/koroshi/menswear/ss26">All SS26 categories</Link>
        </nav>
      </main>
    </>
  );
}
