import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../../../components/breadcrumbs";
import { MediaGallery } from "../../../../components/media-gallery";
import { SiteHeader } from "../../../../components/site-header";
import { koroshiSs26Categories } from "../../../../content/koroshi-ss26";

const cover = koroshiSs26Categories[1].cover;

export const metadata: Metadata = {
  title: "Koroshi Menswear — SS26 | Francesc Serrat",
  description: "Koroshi menswear work for Spring–Summer 2026: Fashion Design, Fashion Graphic Design, garment development, prints and accessories.",
  alternates: { canonical: "/work/koroshi/menswear/" },
  openGraph: { title: "Koroshi Menswear — SS26 | Francesc Serrat", description: "A verified product-level portfolio of Koroshi Spring–Summer 2026 menswear work.", url: "/work/koroshi/menswear/", type: "website" },
  twitter: { card: "summary", title: "Koroshi Menswear — SS26 | Francesc Serrat", description: "A verified product-level portfolio of Koroshi Spring–Summer 2026 menswear work." },
};

export default function KoroshiMenswearPage() {
  return (
    <>
      <a className="skip-link" href="#menswear-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="world-hero" id="menswear-content" tabIndex={-1} aria-labelledby="menswear-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi", href: "/work/koroshi" }, { label: "Menswear" }]} />
          <p className="eyebrow">Koroshi / Current professional work</p>
          <h1 id="menswear-title">Menswear</h1>
          <p className="world-summary">A product-led view of current Koroshi work, from graphic and print language to garment development, construction and production-facing detail.</p>
          <MediaGallery className="world-hero-media" media={[cover]} title="Koroshi menswear" priority />
        </section>
        <section className="world-context layout-grid" aria-labelledby="menswear-season-title">
          <p className="section-index">( Season )</p>
          <div>
            <p className="eyebrow">Verified collection entry</p>
            <h2 id="menswear-season-title">Spring–Summer 2026.</h2>
            <p className="lede">Browse the verified SS26 selection by garment category, then open each individual style for its available product views and source record.</p>
            <Link className="catalogue-entry-link" href="/work/koroshi/menswear/ss26">Explore SS26 <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
