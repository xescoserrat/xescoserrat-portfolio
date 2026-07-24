import Link from "next/link";
import type { MediaAsset } from "../content/projects";
import { MediaFrame } from "./media-frame";

type Props = {
  href: string;
  title: string;
  description: string;
  cover: MediaAsset;
  count: number;
  countLabel?: string;
};

export function CategoryCard({ href, title, description, cover, count, countLabel = "selected images" }: Props) {
  return (
    <article className="category-card">
      <Link className="category-card-image" href={href} aria-label={`Explore ${title}`}>
        <MediaFrame media={cover} title={title} />
        <span className="category-card-open" aria-hidden="true">Explore ↗</span>
      </Link>
      <div className="category-card-copy">
        <p className="eyebrow">{String(count).padStart(2, "0")} {countLabel}</p>
        <h2><Link href={href}>{title}</Link></h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
