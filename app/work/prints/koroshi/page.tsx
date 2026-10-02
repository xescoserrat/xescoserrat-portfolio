import { SiteHeader } from "../../../../components/site-header";
import { Breadcrumbs } from "../../../../components/breadcrumbs";

export const metadata = {
  title: "Prints Koroshi — Francesc Serrat",
  description: "Koroshi print artworks by Francesc Serrat.",
};

export default function KoroshiPrintsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="collection-page">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Prints", href: "/work/prints" },
          { label: "Koroshi" },
        ]} />
        <header className="collection-heading collection-heading--reserved">
          <p className="eyebrow">Prints / Koroshi / Original artworks</p>
          <h1>Prints Koroshi</h1>
          <p>This dedicated archive is ready for the verified original Koroshi print files.</p>
        </header>
      </main>
    </>
  );
}
