import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { MediaGallery } from "../../../components/media-gallery";
import { SiteHeader } from "../../../components/site-header";
import { getWorld } from "../../../content/portfolio-worlds";

function requiredWorld(slug: "koroshi" | "desigual") {
  const current = getWorld(slug);
  if (!current) throw new Error(`${slug} portfolio world is incomplete`);
  return current;
}

const world = requiredWorld("koroshi");

export const metadata: Metadata = {
  title: "Koroshi — Fashion Design & Menswear | Francesc Serrat",
  description: world.description,
  alternates: { canonical: "/work/koroshi/" },
  openGraph: { title: "Koroshi — Fashion Design & Menswear | Francesc Serrat", description: world.description, url: "/work/koroshi/", type: "website" },
  twitter: { card: "summary", title: "Koroshi — Fashion Design & Menswear | Francesc Serrat", description: world.description },
};

export default function KoroshiPage() {
  return (
    <>
      <a className="skip-link" href="#world-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="world-hero" id="world-content" tabIndex={-1} aria-labelledby="koroshi-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi" }]} />
          <p className="eyebrow">Current professional work</p>
          <h1 id="koroshi-title">Koroshi</h1>
          <p className="world-summary">Current menswear work developed across Fashion Design, Fashion Graphic Design, garment development, prints, accessories and production follow-up.</p>
          <MediaGallery className="world-hero-media" media={[world.cover]} title="Koroshi" priority />
        </section>
        <section className="world-context layout-grid" aria-labelledby="koroshi-context-title">
          <p className="section-index">( Focus )</p>
          <div>
            <p className="eyebrow">Fashion Designer &amp; Senior Fashion Graphic Designer</p>
            <h2 id="koroshi-context-title">A collection is resolved as one connected system.</h2>
            <p className="lede">This public catalogue begins with the verified Spring–Summer 2026 selection. It preserves product context while keeping the work legible as a portfolio rather than a shop.</p>
          </div>
        </section>
        <section className="category-overview" aria-labelledby="koroshi-categories-title">
          <div className="category-heading">
            <p className="eyebrow">Koroshi / Division</p>
            <h2 id="koroshi-categories-title">Menswear.<br />Spring–Summer 2026.</h2>
          </div>
          <div className="koroshi-season-entry">
            <p>Browse the collection through garment categories, then move into the verified product records and their available views.</p>
            <Link href="/work/koroshi/menswear">Enter Menswear <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
