import records from "./koroshi-photos.json";
import type { MediaAsset } from "./projects";

export const photoGroups = [
  { slug: "outerwear", title: "Outerwear", description: "Jackets, coats and outer layers." },
  { slug: "tops", title: "Tops", description: "T-shirts, sweatshirts, knitwear, shirts and polos." },
  { slug: "accessories-swimwear", title: "Accessories & Swimwear", description: "Swimwear, caps, bags and accessories." },
];

export const photos = records;

function asMedia(items: typeof photos): MediaAsset[] {
  return items.map((photo) => ({
    src: photo.image,
    alt: `Koroshi ${photo.code} — ${photo.title}`,
    caption: `${photo.code} — ${photo.title}`,
    aspect: "portrait",
    fit: "contain",
    source: "official-brand-source",
    provenance: { pageUrl: photo.sourceUrl, imageUrl: photo.imageUrl },
  }));
}

export function groupPhotos(slug: string) {
  return photos.filter((photo) => photo.group === slug);
}

export function photoMedia(slug: string): MediaAsset[] {
  return asMedia(groupPhotos(slug));
}

// One exact official image per available style code. Technical PDFs, sketches and
// cropped source exports are intentionally excluded from this public archive.
export const allKoroshiPhotoMedia = asMedia(photos);
