import {SiteHeader} from '../../../components/site-header';
import {Breadcrumbs} from '../../../components/breadcrumbs';
import { MediaGallery } from '../../../components/media-gallery';
import { desigualArchiveMedia } from '../../../content/public-archives';

export const metadata = {
  title: 'Desigual — Fashion Graphics | Francesc Serrat',
  description: 'A complete public image archive of Francesc Serrat’s Desigual menswear and womenswear fashion graphics work.',
};

export default function DesigualPage() {
  return <><SiteHeader /><main id="main-content" className="collection-page"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Desigual' }]} /><header className="collection-heading"><p className="eyebrow">Fashion graphics / Textile prints</p><h1>Desigual</h1><p>Menswear and womenswear together as one complete public image archive, from graphic applications and lettering to print, garment and collection details.</p></header><MediaGallery className="archive-gallery" media={desigualArchiveMedia} title="Desigual" priority /></main></>;
}
