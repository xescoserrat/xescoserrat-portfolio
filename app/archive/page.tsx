import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";
import { VisualArchive } from "../../components/visual-archive";
import { allVisualArchiveItems } from "../../content/visual-archives";

const title = "Archive | Francesc Serrat";
const description = "A mixed visual archive of Koroshi menswear, Desigual fashion graphics and independent textile-print studies by Francesc Serrat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/archive/" },
  openGraph: { title, description, url: "/archive/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function ArchivePage() {
  return (
    <>
      <a className="skip-link" href="#archive-content">Skip to archive</a>
      <SiteHeader />
      <main id="main-content" className="archive-page">
        <header className="archive-page-header" id="archive-content" tabIndex={-1}>
          <p className="eyebrow">Francesc Serrat / Visual archive</p>
          <h1>Archive</h1>
          <p>Koroshi menswear, Desigual fashion graphics and independent print studies, mixed as one visual practice.</p>
          <Link className="archive-context-link" href="/work/prints">Open Prints <span aria-hidden="true">↗</span></Link>
        </header>
        <VisualArchive title="Francesc Serrat archive" items={allVisualArchiveItems} priorityCount={8} />
      </main>
    </>
  );
}
