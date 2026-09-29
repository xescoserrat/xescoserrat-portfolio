import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { SiteHeader } from "../../../components/site-header";
import { VisualArchive } from "../../../components/visual-archive";
import { printVisualArchiveItems } from "../../../content/visual-archives";

const title = "Prints | Francesc Serrat";
const description = "A visual archive of textile prints, fashion graphics and repeat studies across independent work, Koroshi and Desigual.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/prints/" },
  openGraph: { title, description, url: "/work/prints/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function PrintsPage() {
  return (
    <>
      <a className="skip-link" href="#prints-content">Skip to prints</a>
      <SiteHeader />
      <main id="main-content" className="archive-page">
        <header className="archive-page-header" id="prints-content" tabIndex={-1}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Archive", href: "/archive" }, { label: "Prints" }]} />
          <p className="eyebrow">Francesc Serrat / Surface archive</p>
          <h1>Prints</h1>
          <p>Textile prints, fashion graphics and repeat studies—mixed across independent, Koroshi and Desigual work.</p>
        </header>
        <VisualArchive title="Prints archive" items={printVisualArchiveItems} />
      </main>
    </>
  );
}
