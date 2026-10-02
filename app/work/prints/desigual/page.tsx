import { SiteHeader } from "../../../../components/site-header";
import { Breadcrumbs } from "../../../../components/breadcrumbs";
import { MediaGallery } from "../../../../components/media-gallery";
import { desigualPrintsArchiveMedia } from "../../../../content/public-archives";

export const metadata = {
  title: "Prints Desigual — Francesc Serrat",
  description: "Fashion Prints and Rapport Fashion Prints by Francesc Serrat for Desigual.",
};

export default function DesigualPrintsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="collection-page">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Prints", href: "/work/prints" },
          { label: "Desigual" },
        ]} />
        <header className="collection-heading">
          <p className="eyebrow">Prints / Desigual / Repeat / Surface</p>
          <h1>Prints Desigual</h1>
          <p>Fashion Prints and Rapport Fashion Prints presented together as one complete surface archive.</p>
        </header>
        <MediaGallery className="archive-gallery" media={desigualPrintsArchiveMedia} title="Prints Desigual" priority />
      </main>
    </>
  );
}
