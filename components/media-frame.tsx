import type { MediaAsset } from "../content/projects";

type Props = { media: MediaAsset; title: string; priority?: boolean };

export function MediaFrame({ media, title, priority = false }: Props) {
  return (
    <img
      className={`media-frame ${media.aspect}`}
      src={media.src}
      alt={media.alt || title}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
