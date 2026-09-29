import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { SiteHeader } from "../../../components/site-header";
import { VisualArchive } from "../../../components/visual-archive";
import { desigualVisualArchiveItems } from "../../../content/visual-archives";

const title = "Desigual Archive | Francesc Serrat";
const description = "A mixed visual archive of Francesc Serrat’s menswear and womenswear fashion-graphics, typography and textile-print work for Desigual.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/desigual/" },
  openGraph: { title, description, url: "/work/desigual/", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function DesigualPage() {
  return (
    <>
      <a className="skip-link" href="#desigual-content">Skip to Desigual archive</a>
      <SiteHeader />
      <main id="main-content" className="archive-page brand-archive-page">
        <header className="archive-page-header" id="desigual-content" tabIndex={-1}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Desigual" }]} />
          <p className="eyebrow">Desigual / Man + Woman</p>
          <h1>Desigual</h1>
          <p>Menswear and womenswear fashion graphics, print, typography and product application, presented together as one image archive.</p>
        </header>
        <VisualArchive title="Desigual image archive" items={desigualVisualArchiveItems} priorityCount={8} />
      </main>
    </>
  );
}
