import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../../../components/breadcrumbs";
import { MediaGallery } from "../../../../../components/media-gallery";
import { SiteHeader } from "../../../../../components/site-header";
import { getDesigualCategory, getDesigualDivision } from "../../../../../content/portfolio-worlds";

type Props = { params: Promise<{ division: string; category: string }> };

export function generateStaticParams() {
  return ["man", "woman"].map((division) => ({ division, category: "fashion-graphics" }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ division: divisionSlug, category: categorySlug }): Metadata => {
    const division = getDesigualDivision(divisionSlug);
    const category = getDesigualCategory(divisionSlug, categorySlug);
    if (!division || !category) return {};
    const title = `Desigual ${division.title}: ${category.title} | Francesc Serrat`;
    return { title, description: category.description, alternates: { canonical: `/work/desigual/${division.slug}/${category.slug}/` }, openGraph: { title, description: category.description, url: `/work/desigual/${division.slug}/${category.slug}/`, type: "website" }, twitter: { card: "summary", title, description: category.description } };
  });
}

export default async function DesigualCategoryPage({ params }: Props) {
  const { division: divisionSlug, category: categorySlug } = await params;
  const division = getDesigualDivision(divisionSlug);
  const category = getDesigualCategory(divisionSlug, categorySlug);
  if (!division || !category) notFound();
  const remainingMedia = category.media.filter((media) => media.src !== category.cover.src);

  return (
    <>
      <a className="skip-link" href="#category-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="category-hero" id="category-content" tabIndex={-1} aria-labelledby="category-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Desigual", href: "/work/desigual" }, { label: division.title, href: `/work/desigual/${division.slug}` }, { label: category.title }]} />
          <p className="eyebrow">Desigual {division.title} / Curated gallery</p>
          <h1 id="category-title">{category.title}</h1>
          <p className="world-summary">{category.description}</p>
          <MediaGallery className="world-hero-media" media={[category.cover]} title={`Desigual ${division.title}: ${category.title}`} priority />
        </section>
        {remainingMedia.length ? <MediaGallery className="category-gallery" media={remainingMedia} title={`Desigual ${division.title}: ${category.title}`} /> : null}
        <section className="category-return">
          <Link href={`/work/desigual/${division.slug}`}>← All Desigual {division.title} work</Link>
          <Link href={`/work/${category.sourceProject.slug}`}>View full original case study ↗</Link>
        </section>
      </main>
    </>
  );
}
