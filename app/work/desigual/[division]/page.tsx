import {notFound} from 'next/navigation';
import {SiteHeader} from '../../../../components/site-header';
import {Breadcrumbs} from '../../../../components/breadcrumbs';
import {MediaGallery} from '../../../../components/media-gallery';
import {desigualDivisions,getDesigualDivision} from '../../../../content/portfolio-worlds';
import {mediaInventory} from '../../../../content/media-inventory';
export function generateStaticParams(){return desigualDivisions.map(d=>({division:d.slug}));}
export async function generateMetadata({params}:{params:Promise<{division:string}>}){const {division}=await params;return {title:`Desigual ${division} — Francesc Serrat`};}
export default async function Division({params}:{params:Promise<{division:string}>}){const {division}=await params;const d=getDesigualDivision(division);if(!d)notFound();const media=mediaInventory.filter(p=>p.brand==='Desigual'&&p.division===d.title).map(p=>p.media);return <><SiteHeader/><main id="main-content"><header className="collection-page collection-heading"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Desigual',href:'/work/desigual'},{label:d.title}]}/><p className="eyebrow">Desigual / Fashion graphics &amp; textile prints</p><h1>{d.title}</h1><p>{d.description}</p></header><MediaGallery className="brand-gallery" media={media} title={`Desigual ${d.title}`}/></main></>;}
