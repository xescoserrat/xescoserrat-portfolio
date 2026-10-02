import { SiteHeader } from "../../../components/site-header";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import Link from "next/link";
import { desigualPrintsArchiveMedia } from "../../../content/public-archives";
import { koroshiPrintsArchiveMedia } from "../../../content/koroshi-print-media";

export const metadata = {
  title: "Prints — Francesc Serrat",
  description: "Fashion print archives for Desigual and Koroshi by Francesc Serrat.",
};

export default function PrintsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="collection-page">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Prints" }]} />
        <header className="collection-heading">
          <p className="eyebrow">Prints / Repeat / Surface</p>
          <h1>Prints</h1>
          <p>Two independent print archives: Desigual surface work and Koroshi artworks.</p>
        </header>
        <nav className="prints-division-list" aria-label="Print archives">
          <Link className="prints-division" href="/work/prints/desigual">
            <span className="prints-division-index">01</span>
            <span className="prints-division-title">Prints Desigual</span>
            <span className="prints-division-description">
              Fashion Prints and Rapport Fashion Prints — {desigualPrintsArchiveMedia.length} artworks.
            </span>
            <span className="prints-division-arrow" aria-hidden="true">↗</span>
          </Link>
          <Link className="prints-division" href="/work/prints/koroshi">
            <span className="prints-division-index">02</span>
            <span className="prints-division-title">Prints Koroshi</span>
            <span className="prints-division-description">
              Original Koroshi print artworks, labels and graphic studies — {koroshiPrintsArchiveMedia.length} pieces.
            </span>
            <span className="prints-division-arrow" aria-hidden="true">↗</span>
          </Link>
        </nav>
      </main>
    </>
  );
}
