import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../../components/breadcrumbs";
import { MediaGallery } from "../../../../components/media-gallery";
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
  const remainingMedia = category.media.filter((media) => media.src !== category.cover.src);
  const categoryIndex = koroshiCategories.findIndex((item) => item.slug === category.slug);
  const previousCategory = koroshiCategories[(categoryIndex - 1 + koroshiCategories.length) % koroshiCategories.length];
  const nextCategory = koroshiCategories[(categoryIndex + 1) % koroshiCategories.length];

  return (
    <>
      <a className="skip-link" href="#category-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="category-hero" id="category-content" tabIndex={-1} aria-labelledby="category-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: category.title }]} />
          <p className="eyebrow">Koroshi / Curated gallery</p>
          <h1 id="category-title">{category.title}</h1>
          <p className="world-summary">{category.description}</p>
          <MediaGallery className="world-hero-media" media={[category.cover]} title={category.title} priority />
        </section>
        {remainingMedia.length ? <MediaGallery className="category-gallery" media={remainingMedia} title={category.title} /> : null}
        <nav className="category-return" aria-label="Koroshi category navigation">
          <Link href="/">← Home</Link>
          <Link href="/work/koroshi">← All Koroshi disciplines</Link>
          <Link href={`/work/koroshi/${previousCategory.slug}`}>Previous: {previousCategory.title}</Link>
          <Link href={`/work/koroshi/${nextCategory.slug}`}>Next: {nextCategory.title} →</Link>
          <Link href={`/work/${category.sourceProject.slug}`}>View full original case study ↗</Link>
        </nav>
      </main>
    </>
  );
}
