import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { MediaGallery } from "../../../components/media-gallery";
import { SiteHeader } from "../../../components/site-header";
import { independentPrintMedia } from "../../../content/media-inventory";

const title = "Independent Print Archive | Francesc Serrat";
const description = "Independent fashion-print and rapport studies, preserved as a secondary archive while their original brand and division remain unverified.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/independent-print-archive/" },
  openGraph: { title, description, url: "/work/independent-print-archive/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function IndependentPrintArchivePage() {
  const [cover, ...remainingMedia] = independentPrintMedia;
  if (!cover) throw new Error("Independent Print Archive needs a verified project cover");

  return (
    <>
      <a className="skip-link" href="#archive-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="category-hero" id="archive-content" tabIndex={-1} aria-labelledby="archive-title">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Archive", href: "/#archive" }, { label: "Independent Print Archive" }]} />
          <p className="eyebrow">Independent studies / Secondary archive</p>
          <h1 id="archive-title">Independent Print Archive</h1>
          <p className="world-summary">Fashion Prints and Rapport Fashion Prints are preserved here as independent studies. Their original brand and division have not been verified, so they are not assigned to Koroshi or Desigual.</p>
          <MediaGallery className="world-hero-media" media={[cover]} title="Independent Print Archive" priority />
        </section>
        <section className="world-context layout-grid" aria-labelledby="archive-context-title">
          <p className="section-index">( Context )</p>
          <div>
            <p className="eyebrow">Surface / repeat / colour</p>
            <h2 id="archive-context-title">Work kept visible without a false attribution.</h2>
            <p className="lede">These studies remain part of the practice, but sit after the principal professional worlds until an exact original-brand relationship can be documented.</p>
          </div>
        </section>
        <MediaGallery className="category-gallery" media={remainingMedia} title="Independent Print Archive" />
        <nav className="category-return" aria-label="Independent Print Archive navigation">
          <Link href="/">← Home</Link>
          <Link href="/#archive">← Archive</Link>
          <Link href="/work/fashion-prints">View Fashion Prints case study ↗</Link>
          <Link href="/work/rapport-fashion-prints">View Rapport Fashion Prints case study ↗</Link>
        </nav>
      </main>
    </>
  );
}
