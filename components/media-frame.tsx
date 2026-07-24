import type { MediaAsset } from "../content/projects";

type Props = { media: MediaAsset; title: string; priority?: boolean };

export function MediaFrame({ media, title, priority = false }: Props) {
  return (
    <img
      className={`media-frame ${media.aspect}${media.fit === "contain" ? " media-frame--contain" : ""}`}
      src={media.src}
      alt={media.alt || title}
      width={media.width}
      height={media.height}
      style={media.width && media.height ? { aspectRatio: `${media.width} / ${media.height}` } : undefined}
      data-media-source={media.source}
      data-media-page-url={media.provenance?.pageUrl}
      data-media-image-url={media.provenance?.imageUrl}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
