import { SiteHeader } from "../../../../components/site-header";
import { Breadcrumbs } from "../../../../components/breadcrumbs";
import { MediaGallery } from "../../../../components/media-gallery";
import { koroshiPrintsArchiveMedia } from "../../../../content/koroshi-print-media";

export const metadata = {
  title: "Prints Koroshi — Francesc Serrat",
  description: "Original Koroshi print artworks, labels and graphic studies by Francesc Serrat.",
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
        <header className="collection-heading">
          <p className="eyebrow">Prints / Koroshi / Original artworks</p>
          <h1>Prints Koroshi</h1>
          <p>Original Koroshi print artworks, labels and graphic studies presented as one complete archive.</p>
        </header>
        <MediaGallery className="archive-gallery" media={koroshiPrintsArchiveMedia} title="Prints Koroshi" priority />
      </main>
    </>
  );
}
