import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { CategoryCard } from "../../../components/category-card";
import { MediaGallery } from "../../../components/media-gallery";
import { SiteHeader } from "../../../components/site-header";
import { getWorld } from "../../../content/portfolio-worlds";

function requiredWorld(slug: "koroshi" | "desigual" | "flasheros") {
  const current = getWorld(slug);
  if (!current) throw new Error(`${slug} portfolio world is incomplete`);
  return current;
}

const world = requiredWorld("desigual");
if (!world.divisions) throw new Error("Desigual divisions are incomplete");
const divisions = world.divisions;

export const metadata: Metadata = {
  title: "Desigual — Fashion Graphics & Textile Prints | Francesc Serrat",
  description: world.description,
  alternates: { canonical: "/work/desigual/" },
  openGraph: { title: "Desigual — Fashion Graphics & Textile Prints | Francesc Serrat", description: world.description, url: "/work/desigual/", type: "website" },
  twitter: { card: "summary", title: "Desigual — Fashion Graphics & Textile Prints | Francesc Serrat", description: world.description },
};

export default function DesigualPage() {
  return (
    <>
      <a className="skip-link" href="#world-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="world-hero" id="world-content" tabIndex={-1} aria-labelledby="desigual-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Desigual" }]} />
          <p className="eyebrow">Fashion Graphic Design experience</p>
          <h1 id="desigual-title">Desigual</h1>
          <p className="world-summary">{world.description}</p>
          <MediaGallery className="world-hero-media" media={[world.cover]} title="Desigual" priority />
        </section>
        <section className="world-context layout-grid" aria-labelledby="desigual-context-title">
          <p className="section-index">( Divisions )</p>
          <div>
            <p className="eyebrow">Man / Woman</p>
            <h2 id="desigual-context-title">Graphic identity developed for the garment.</h2>
            <p className="lede">After more than 14 years as a Fashion Graphic Designer at Desigual, the work is kept in its original menswear and womenswear context—where typography, textile print, colour and product application were developed.</p>
          </div>
        </section>
        <section className="category-overview" aria-labelledby="desigual-divisions-title">
          <div className="category-heading">
            <p className="eyebrow">Desigual / Browse by division</p>
            <h2 id="desigual-divisions-title">Man and Woman.</h2>
          </div>
          <div className="category-grid">
            {divisions.map((division) => (
              <CategoryCard key={division.slug} href={`/work/desigual/${division.slug}`} title={division.title} description={division.description} cover={division.cover} count={division.categories.reduce((total, category) => total + category.media.length, 0)} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
