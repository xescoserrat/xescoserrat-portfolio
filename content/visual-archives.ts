import { publishedKoroshiSs26Products } from "./koroshi-ss26";
import {
  desigualManBehanceMedia,
  desigualWomanBehanceMedia,
  fashionPrintsBehanceMedia,
  rapportPrintsBehanceMedia,
} from "./behance-archive-media";
import { koroshiLocalArtworkMedia } from "./koroshi-artwork-media";
import type { MediaAsset } from "./projects";

export type VisualArchiveItem = {
  id: string;
  media: MediaAsset;
  label: string;
  title: string;
  description?: string;
  href?: string;
};

function uniqueByMedia(items: VisualArchiveItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.media.src)) return false;
    seen.add(item.media.src);
    return true;
  });
}

function interleave(...groups: VisualArchiveItem[][]) {
  const result: VisualArchiveItem[] = [];
  const longestGroup = Math.max(...groups.map((group) => group.length));
  for (let index = 0; index < longestGroup; index += 1) {
    groups.forEach((group) => {
      const item = group[index];
      if (item) result.push(item);
    });
  }
  return result;
}

const koroshiProductItems: VisualArchiveItem[] = publishedKoroshiSs26Products.flatMap((product) => product.media.map((media, index) => ({
  id: `koroshi-ss26-${product.styleCode.toLowerCase()}-${index + 1}`,
  media,
  label: `Koroshi / Menswear / ${product.season}`,
  title: product.productName ?? `${product.productKind} ${product.styleCode}`,
  description: `${product.styleCode} — ${product.productKind}. A verified Koroshi menswear SS26 product record, retained from the local development archive.`,
  href: `/work/koroshi/menswear/ss26/product/${product.styleCode.toLowerCase()}`,
})));

// The brand archive deliberately keeps to complete product and garment views.
export const koroshiVisualArchiveItems = uniqueByMedia(koroshiProductItems);

const desigualManItems = desigualManBehanceMedia.map((media, index) => ({
  id: `desigual-man-${index + 1}`,
  media,
  label: "Desigual / Menswear",
  title: "Desigual menswear fashion graphics",
} satisfies VisualArchiveItem));

const desigualWomanItems = desigualWomanBehanceMedia.map((media, index) => ({
  id: `desigual-woman-${index + 1}`,
  media,
  label: "Desigual / Womenswear",
  title: "Desigual womenswear fashion graphics",
} satisfies VisualArchiveItem));

export const desigualVisualArchiveItems = uniqueByMedia(interleave(desigualManItems, desigualWomanItems));

const koroshiArtworkItems = koroshiLocalArtworkMedia.map((media, index) => ({
  id: `koroshi-artwork-${index + 1}`,
  media,
  label: "Koroshi / Original artwork",
  title: media.alt.replace(/^Koroshi \/ /, ""),
  description: "Production artwork retained from the original local collection files.",
} satisfies VisualArchiveItem));

const fashionPrintItems = fashionPrintsBehanceMedia.map((media, index) => ({
  id: `fashion-print-${index + 1}`,
  media,
  label: "Artworks / Fashion prints",
  title: "Fashion print study",
  description: "Print, colour and surface developed for fashion application.",
} satisfies VisualArchiveItem));

const rapportPrintItems = rapportPrintsBehanceMedia.map((media, index) => ({
  id: `rapport-print-${index + 1}`,
  media,
  label: "Artworks / Rapport prints",
  title: "Rapport fashion print",
  description: "A repeat study built for rhythm, scale and garment movement.",
} satisfies VisualArchiveItem));

export const artworkVisualArchiveItems = uniqueByMedia(interleave(
  koroshiArtworkItems,
  fashionPrintItems,
  rapportPrintItems,
));

// Retained export for the former /work/prints route.
export const printVisualArchiveItems = artworkVisualArchiveItems;

export const allVisualArchiveItems = uniqueByMedia(interleave(
  koroshiVisualArchiveItems,
  desigualVisualArchiveItems,
  artworkVisualArchiveItems,
));
