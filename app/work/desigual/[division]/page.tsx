import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../../components/breadcrumbs";
import { CategoryCard } from "../../../../components/category-card";
import { MediaGallery } from "../../../../components/media-gallery";
import { SiteHeader } from "../../../../components/site-header";
import { desigualDivisions, getDesigualDivision } from "../../../../content/portfolio-worlds";

type Props = { params: Promise<{ division: string }> };

export function generateStaticParams() {
  return desigualDivisions.map((division) => ({ division: division.slug }));
}

export function generateMetadata({ params }: Props) {
  return params.then(({ division: slug }): Metadata => {
    const division = getDesigualDivision(slug);
    if (!division) return {};
    const title = `Desigual ${division.title} — Fashion Graphics | Francesc Serrat`;
    return { title, description: division.description, alternates: { canonical: `/work/desigual/${division.slug}/` }, openGraph: { title, description: division.description, url: `/work/desigual/${division.slug}/`, type: "website" }, twitter: { card: "summary", title, description: division.description } };
  });
}

export default async function DesigualDivisionPage({ params }: Props) {
  const { division: slug } = await params;
  const division = getDesigualDivision(slug);
  if (!division) notFound();

  return (
    <>
      <a className="skip-link" href="#division-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="world-hero" id="division-content" tabIndex={-1} aria-labelledby="division-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Desigual", href: "/work/desigual" }, { label: division.title }]} />
          <p className="eyebrow">Desigual / {division.title}</p>
          <h1 id="division-title">{division.title}</h1>
          <p className="world-summary">{division.description}</p>
          <MediaGallery className="world-hero-media" media={[division.cover]} title={`Desigual ${division.title}`} priority />
        </section>
        <section className="category-overview division-category-overview" aria-labelledby="division-categories-title">
          <div className="category-heading">
            <p className="eyebrow">Browse by discipline</p>
            <h2 id="division-categories-title">Graphics in context.</h2>
          </div>
          <div className="category-grid category-grid--single">
            {division.categories.map((category) => (
              <CategoryCard key={category.slug} href={`/work/desigual/${division.slug}/${category.slug}`} title={category.title} description={category.description} cover={category.cover} count={category.media.length} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
