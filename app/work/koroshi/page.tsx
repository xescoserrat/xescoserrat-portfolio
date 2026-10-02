import { SiteHeader } from '../../../components/site-header';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { MediaGallery } from '../../../components/media-gallery';
import { allKoroshiPhotoMedia } from '../../../content/koroshi-photos';

export const metadata = {
  title: 'Koroshi — Menswear & Fashion Graphics | Francesc Serrat',
  description: 'A continuous menswear archive spanning Koroshi SS26 and AW26–27, with official product and model photography.',
};

export default function KoroshiPage() {
  return <><SiteHeader /><main id="main-content" className="collection-page"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Koroshi' }]} /><header className="collection-heading"><p className="eyebrow">Menswear / Fashion design &amp; graphics</p><h1>Koroshi</h1><p>SS26 and AW26–27 together as one continuous menswear archive. Every image is an exact official product or model photograph; sketches, technical sheets and cropped source files are excluded.</p></header><MediaGallery className="archive-gallery" media={allKoroshiPhotoMedia} title="Koroshi" priority /></main></>;
}
