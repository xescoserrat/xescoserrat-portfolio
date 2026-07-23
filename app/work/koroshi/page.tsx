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

const world = requiredWorld("koroshi");
if (!world.categories) throw new Error("Koroshi categories are incomplete");
const categories = world.categories;

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
          <p className="world-summary">{world.description}</p>
          <MediaGallery className="world-hero-media" media={[world.cover]} title="Koroshi" priority />
        </section>
        <section className="world-context layout-grid" aria-labelledby="koroshi-context-title">
          <p className="section-index">( Focus )</p>
          <div>
            <p className="eyebrow">Fashion Designer &amp; Senior Fashion Graphic Designer</p>
            <h2 id="koroshi-context-title">A collection is resolved as one connected system.</h2>
            <p className="lede">Menswear is developed from initial concept through graphics, fabric, colour, garment construction, fittings and final production. Explore the work through its two verified visual entry points.</p>
          </div>
        </section>
        <section className="category-overview" aria-labelledby="koroshi-categories-title">
          <div className="category-heading">
            <p className="eyebrow">Koroshi / Browse by discipline</p>
            <h2 id="koroshi-categories-title">Collection and surface.</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard key={category.slug} href={`/work/koroshi/${category.slug}`} title={category.title} description={category.description} cover={category.cover} count={category.media.length} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
