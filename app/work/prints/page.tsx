import { SiteHeader } from "../../../components/site-header";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { MediaGallery } from "../../../components/media-gallery";
import { printsArchiveMedia } from "../../../content/public-archives";

export const metadata = {
  title: "Prints — Francesc Serrat",
  description: "The complete public Behance image archive for Fashion Prints and Rapport Fashion Prints.",
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
          <p>Fashion Prints and Rapport Fashion Prints presented together as one complete surface archive.</p>
        </header>
        <MediaGallery className="archive-gallery" media={printsArchiveMedia} title="Prints" priority />
      </main>
    </>
  );
}
