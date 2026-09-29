import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { SiteHeader } from "../../../components/site-header";
import { VisualArchive } from "../../../components/visual-archive";
import { koroshiVisualArchiveItems } from "../../../content/visual-archives";

const title = "Koroshi Menswear Archive | Francesc Serrat";
const description = "A visual archive of Koroshi menswear, combining fashion design, garment development, fashion graphics, prints and product records.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/koroshi/" },
  openGraph: { title, description, url: "/work/koroshi/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function KoroshiPage() {
  return (
    <>
      <a className="skip-link" href="#koroshi-content">Skip to Koroshi archive</a>
      <SiteHeader />
      <main id="main-content" className="archive-page brand-archive-page">
        <header className="archive-page-header" id="koroshi-content" tabIndex={-1}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Koroshi" }]} />
          <p className="eyebrow">Koroshi / Menswear</p>
          <h1>Koroshi</h1>
          <p>Fashion design, garment development, graphics, print and product detail—kept together as a visual menswear archive.</p>
          <Link className="archive-context-link" href="/work/koroshi/menswear/ss26">Browse SS26 by product category <span aria-hidden="true">↗</span></Link>
        </header>
        <VisualArchive title="Koroshi menswear archive" items={koroshiVisualArchiveItems} priorityCount={8} />
      </main>
    </>
  );
}
