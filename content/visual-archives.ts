import { publishedKoroshiSs26Products } from "./koroshi-ss26";
import { mediaInventory } from "./media-inventory";
import type { MediaAsset } from "./projects";
import { projects } from "./projects";

export type VisualArchiveItem = {
  id: string;
  media: MediaAsset;
  label: string;
  title: string;
  description?: string;
  href?: string;
};

function requiredProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project data for ${slug}`);
  return project;
}

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

const koroshiProject = requiredProject("koroshi-ss-aw");
const koroshiCollectionItems: VisualArchiveItem[] = koroshiProject.media.map((media, index) => ({
  id: `koroshi-collection-${index + 1}`,
  media,
  label: "Koroshi / Collection record",
  title: "Koroshi Menswear",
  description: "Fashion design, garment development, graphics and textile direction considered as one menswear system.",
  href: `/work/${koroshiProject.slug}`,
}));

export const koroshiVisualArchiveItems = uniqueByMedia([
  ...koroshiCollectionItems,
  ...koroshiProductItems,
]);

const desigualItems = mediaInventory
  .filter((item) => item.brand === "Desigual")
  .map((item) => ({
    id: `desigual-${item.id.toLowerCase()}`,
    media: item.media,
    label: `Desigual / ${item.division}`,
    title: item.garmentType,
  } satisfies VisualArchiveItem));

const desigualManItems = desigualItems.filter((item) => item.label.endsWith("/ Man"));
const desigualWomanItems = desigualItems.filter((item) => item.label.endsWith("/ Woman"));

export const desigualVisualArchiveItems = uniqueByMedia(interleave(desigualManItems, desigualWomanItems));

const independentPrintItems = mediaInventory
  .filter((item) => item.brand === "Independent")
  .map((item) => ({
    id: `print-${item.id.toLowerCase()}`,
    media: item.media,
    label: "Prints / Independent studies",
    title: item.garmentType,
    description: "An independent study in repeat, colour, surface and garment-scale image making.",
    href: "/work/independent-print-archive",
  } satisfies VisualArchiveItem));

const brandPrintItems = mediaInventory
  .filter((item) => item.brand !== "Independent" && (
    item.creativeDiscipline.toLowerCase().includes("textile print")
    || item.category.includes("Fashion Graphics")
  ))
  .map((item) => ({
    id: `brand-print-${item.id.toLowerCase()}`,
    media: item.media,
    label: `${item.brand} / ${item.division}`,
    title: item.garmentType,
    description: item.brand === "Koroshi"
      ? "A Koroshi record where graphic, print and garment context are developed together."
      : undefined,
  } satisfies VisualArchiveItem));

export const printVisualArchiveItems = uniqueByMedia(interleave(independentPrintItems, brandPrintItems));

export const allVisualArchiveItems = uniqueByMedia(interleave(
  koroshiVisualArchiveItems,
  desigualVisualArchiveItems,
  printVisualArchiveItems,
));
