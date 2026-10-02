import Link from 'next/link';
import { seasons, collection } from '../content/seasons';

export function SeasonCards() {
  return <div className="season-cards">{seasons.map(season => {
    const products = collection(season.slug);
    const cover = products.find(p => p.slug === season.cover) || products[0];
    return <Link className="season-card" key={season.slug} href={`/work/koroshi/collections/${season.slug}`}>
      <div className="season-cover"><img src={cover.thumbnail} alt={`Koroshi ${season.title} — ${cover.code}`} width={cover.width} height={cover.height}/></div>
      <h2>{season.title} <span aria-hidden="true">↗</span></h2>
      <p>{season.name}</p><p className="eyebrow">{products.length} designs</p>
    </Link>;
  })}</div>;
}
