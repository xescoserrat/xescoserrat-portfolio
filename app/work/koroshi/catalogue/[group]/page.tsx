import {notFound} from 'next/navigation';
import {SiteHeader} from '../../../../../components/site-header';
import {Breadcrumbs} from '../../../../../components/breadcrumbs';
import {MediaGallery} from '../../../../../components/media-gallery';
import {photoGroups,photoMedia} from '../../../../../content/koroshi-photos';
export function generateStaticParams(){return photoGroups.map(g=>({group:g.slug}));}
export async function generateMetadata({params}:{params:Promise<{group:string}>}){const {group}=await params;return {title:`Koroshi ${photoGroups.find(g=>g.slug===group)?.title} — Francesc Serrat`};}
export default async function Gallery({params}:{params:Promise<{group:string}>}){const {group}=await params;const g=photoGroups.find(g=>g.slug===group);if(!g)notFound();return <><SiteHeader/><main id="main-content"><header className="collection-page collection-heading"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Koroshi',href:'/work/koroshi'},{label:g.title}]}/><p className="eyebrow">Koroshi / Menswear</p><h1>{g.title}</h1><p>{g.description}</p></header><MediaGallery className="brand-gallery" media={photoMedia(group)} title={`Koroshi ${g.title}`}/></main></>;}
