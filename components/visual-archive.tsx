"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { VisualArchiveItem } from "../content/visual-archives";
import { MediaFrame } from "./media-frame";

type Props = {
  items: VisualArchiveItem[];
  title: string;
  priorityCount?: number;
};

export function VisualArchive({ items, title, priorityCount = 4 }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => index === null ? index : (index + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => index === null ? index : (index - 1 + items.length) % items.length);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    closeButton.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="visual-archive" role="group" aria-label={`${title} visual archive`}>
        {items.map((item, index) => (
          <button
            className="visual-archive-item"
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.label}: ${item.title}`}
          >
            <MediaFrame media={item.media} title={item.title} priority={index < priorityCount} />
            <span className="visual-archive-hint" aria-hidden="true">View</span>
          </button>
        ))}
      </div>

      {activeItem && activeIndex !== null ? (
        <div className="lightbox visual-archive-lightbox" role="dialog" aria-modal="true" aria-label={`${activeItem.title} image viewer`}>
          <button className="lightbox-close" ref={closeButton} type="button" onClick={() => setActiveIndex(null)}>
            Close <span aria-hidden="true">×</span>
          </button>
          {items.length > 1 ? (
            <button
              className="lightbox-control lightbox-previous"
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
              aria-label="Previous image"
            >
              <span aria-hidden="true">←</span>
            </button>
          ) : null}
          <div className="visual-archive-lightbox-content">
            <img className="lightbox-image" src={activeItem.media.src} alt={activeItem.media.alt || activeItem.title} />
            <div className="visual-archive-lightbox-copy">
              <p className="eyebrow">{activeItem.label}</p>
              <h2>{activeItem.title}</h2>
              {activeItem.description ? <p>{activeItem.description}</p> : null}
              {activeItem.href ? <Link href={activeItem.href}>Open record <span aria-hidden="true">↗</span></Link> : null}
            </div>
          </div>
          {items.length > 1 ? (
            <button
              className="lightbox-control lightbox-next"
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
              aria-label="Next image"
            >
              <span aria-hidden="true">→</span>
            </button>
          ) : null}
          <p className="lightbox-count" aria-live="polite">{activeIndex + 1} / {items.length}</p>
        </div>
      ) : null}
    </>
  );
}
