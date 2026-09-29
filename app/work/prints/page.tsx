import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { SiteHeader } from "../../../components/site-header";
import { VisualArchive } from "../../../components/visual-archive";
import { artworkVisualArchiveItems } from "../../../content/visual-archives";

const title = "Artworks | Francesc Serrat";
const description = "A visual archive of textile prints, fashion graphics and repeat studies across Koroshi and Desigual.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/artworks/" },
  openGraph: { title, description, url: "/work/artworks/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function PrintsPage() {
  return (
    <>
      <a className="skip-link" href="#prints-content">Skip to artworks</a>
      <SiteHeader />
      <main id="main-content" className="archive-page">
        <header className="archive-page-header" id="prints-content" tabIndex={-1}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Archive", href: "/archive" }, { label: "Artworks" }]} />
          <p className="eyebrow">Francesc Serrat / Artworks archive</p>
          <h1>Artworks</h1>
          <p>Textile prints, repeats and fashion-graphic studies across Koroshi and Desigual work.</p>
        </header>
        <VisualArchive title="Artworks archive" items={artworkVisualArchiveItems} />
      </main>
    </>
  );
}
