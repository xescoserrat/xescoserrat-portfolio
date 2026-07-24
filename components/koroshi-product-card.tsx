import Link from "next/link";
import { MediaFrame } from "./media-frame";
import type { KoroshiSs26Product } from "../content/koroshi-ss26";

export function KoroshiProductCard({ product }: { product: KoroshiSs26Product }) {
  if (!product.thumbnail) return null;
  const href = `/work/koroshi/menswear/ss26/product/${product.styleCode.toLowerCase()}`;

  return (
    <article className="catalogue-product-card">
      <Link className="catalogue-product-image" href={href} aria-label={`View ${product.productKind}, ${product.styleCode}`}>
        <MediaFrame media={product.thumbnail} title={`${product.productKind} ${product.styleCode}`} />
        <span className="catalogue-product-open" aria-hidden="true">View garment ↗</span>
      </Link>
      <div className="catalogue-product-copy">
        <p>{product.styleCode}</p>
        <h2><Link href={href}>{product.productName ?? product.productKind}</Link></h2>
        <span>{product.proposedCategory} · {product.season}{product.colourReferences[0] ? ` · ${product.colourReferences[0].split("_")[1]}` : ""}</span>
      </div>
    </article>
  );
}
