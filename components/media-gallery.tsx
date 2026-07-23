"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaAsset } from "../content/projects";
import { MediaFrame } from "./media-frame";

type Props = {
  className: string;
  media: MediaAsset[];
  title: string;
  priority?: boolean;
};

export function MediaGallery({ className, media, title, priority = false }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const activeMedia = activeIndex === null ? null : media[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => index === null ? index : (index + 1) % media.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => index === null ? index : (index - 1 + media.length) % media.length);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    closeButton.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, media.length]);

  return (
    <>
      <div className={className} role="group" aria-label={`${title} project imagery`}>
        {media.map((asset, index) => (
          <button
            className="media-trigger"
            key={asset.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Expand ${asset.alt || `${title}, image ${index + 1}`}`}
          >
            <MediaFrame media={asset} title={`${title}, image ${index + 1}`} priority={priority && index === 0} />
            <span aria-hidden="true">Expand</span>
          </button>
        ))}
      </div>
      {activeMedia && activeIndex !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} image viewer`}>
          <button className="lightbox-close" ref={closeButton} type="button" onClick={() => setActiveIndex(null)}>
            Close <span aria-hidden="true">×</span>
          </button>
          {media.length > 1 ? (
            <button
              className="lightbox-control lightbox-previous"
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + media.length) % media.length)}
              aria-label="Previous image"
            >
              <span aria-hidden="true">←</span>
            </button>
          ) : null}
          <img className={`lightbox-image ${activeMedia.aspect}`} src={activeMedia.src} alt={activeMedia.alt || title} />
          {media.length > 1 ? (
            <button
              className="lightbox-control lightbox-next"
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % media.length)}
              aria-label="Next image"
            >
              <span aria-hidden="true">→</span>
            </button>
          ) : null}
          <p className="lightbox-count" aria-live="polite">{activeIndex + 1} / {media.length}</p>
        </div>
      ) : null}
    </>
  );
}
