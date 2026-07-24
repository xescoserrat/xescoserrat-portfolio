import type { MediaAsset, MediaSource, Project } from "./projects";
import { projects } from "./projects";
import { koroshiSs26ReferenceInventory } from "./koroshi-ss26";

export type MediaConfidence = "confirmed" | "high" | "review-required";
export type PublicationStatus = "published" | "legacy-only" | "internal-review";

export type MediaInventoryItem = {
  id: string;
  media: MediaAsset;
  sourceReference: string;
  brand: "Koroshi" | "Desigual" | "Independent" | "Flasheros";
  division: "Menswear" | "Man" | "Woman" | "Independent" | "Personal";
  garmentType: string;
  creativeDiscipline: string;
  category: string;
  season: string;
  sourceType: MediaSource;
  confidence: MediaConfidence;
  currentRoute: string;
  proposedRoute: string;
  publicationStatus: PublicationStatus;
};

type Classification = Pick<MediaInventoryItem, "garmentType" | "creativeDiscipline" | "category" | "season" | "confidence" | "proposedRoute" | "publicationStatus">;

function requiredProject(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project data for ${slug}`);
  return project;
}

function projectMedia(
  projectSlug: string,
  prefix: string,
  base: Pick<MediaInventoryItem, "brand" | "division">,
  classifications: Classification[],
): MediaInventoryItem[] {
  const project = requiredProject(projectSlug);
  if (classifications.length !== project.media.length) {
    throw new Error(`${projectSlug} media inventory is incomplete`);
  }

  return project.media.map((media, index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    media,
    sourceReference: media.provenance?.sourcePath ?? media.provenance?.imageUrl ?? media.src,
    ...base,
    ...classifications[index],
    sourceType: media.source,
    currentRoute: `/work/${project.slug}`,
  }));
}

const koroshiClassification: Classification[] = [
  { garmentType: "Textile artwork", creativeDiscipline: "Textile print", category: "Fashion Graphics & Textile Prints", season: "SS26–27 / AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/fashion-graphics", publicationStatus: "published" },
  { garmentType: "Sleeveless jersey graphic", creativeDiscipline: "Fashion graphics", category: "Fashion Graphics & Textile Prints", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/fashion-graphics", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Textile artwork", creativeDiscipline: "Textile print", category: "Fashion Graphics & Textile Prints", season: "SS26–27 / AW26–27", confidence: "high", proposedRoute: "/work/koroshi/fashion-graphics", publicationStatus: "published" },
  { garmentType: "T-shirt", creativeDiscipline: "Product presentation", category: "T-Shirts & Sleeveless", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "T-shirt", creativeDiscipline: "Product presentation", category: "T-Shirts & Sleeveless", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Fashion graphics", category: "T-Shirts & Sleeveless", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/t-shirts-sleeveless", publicationStatus: "published" },
  { garmentType: "Sleeveless T-shirt", creativeDiscipline: "Artwork and print specification", category: "Fashion Graphics & Textile Prints", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/fashion-graphics", publicationStatus: "published" },
  { garmentType: "T-shirt", creativeDiscipline: "Technical development", category: "Design Process / Product Development", season: "SS26", confidence: "confirmed", proposedRoute: "/work/koroshi/product-development", publicationStatus: "published" },
  { garmentType: "Knitwear", creativeDiscipline: "Technical development", category: "Design Process / Product Development", season: "AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/product-development", publicationStatus: "published" },
  { garmentType: "Knitwear", creativeDiscipline: "Knitwear design", category: "Knitwear", season: "AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/knitwear", publicationStatus: "published" },
  { garmentType: "Knitwear", creativeDiscipline: "Knitwear design and label detail", category: "Knitwear", season: "AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/knitwear", publicationStatus: "published" },
  { garmentType: "Knitwear", creativeDiscipline: "Knitwear embroidery detail", category: "Knitwear", season: "AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/knitwear", publicationStatus: "published" },
  { garmentType: "Outerwear", creativeDiscipline: "Technical development", category: "Design Process / Product Development", season: "AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/product-development", publicationStatus: "published" },
  { garmentType: "Outerwear", creativeDiscipline: "Fabric and colour development", category: "Design Process / Product Development", season: "AW26–27", confidence: "confirmed", proposedRoute: "/work/koroshi/product-development", publicationStatus: "published" },
];

const desigualManClassification: Classification[] = [
  { garmentType: "Sweatshirt", creativeDiscipline: "Fashion graphics and print", category: "Sweatshirts & Knitwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/sweatshirts-knitwear", publicationStatus: "published" },
  { garmentType: "Knitwear", creativeDiscipline: "Fashion graphics and typography", category: "Sweatshirts & Knitwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/sweatshirts-knitwear", publicationStatus: "published" },
  { garmentType: "Outerwear", creativeDiscipline: "Textile print", category: "Shirts & Outerwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/shirts-outerwear", publicationStatus: "published" },
  { garmentType: "Shirt", creativeDiscipline: "Textile print", category: "Shirts & Outerwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/shirts-outerwear", publicationStatus: "published" },
  { garmentType: "Trousers", creativeDiscipline: "Product application", category: "Source case study only", season: "Desigual archive", confidence: "high", proposedRoute: "/work/man-designs-desigual", publicationStatus: "legacy-only" },
  { garmentType: "Outerwear", creativeDiscipline: "Fashion graphics and product application", category: "Shirts & Outerwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/shirts-outerwear", publicationStatus: "published" },
  { garmentType: "Knitwear", creativeDiscipline: "Fashion graphics and typography", category: "Sweatshirts & Knitwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/sweatshirts-knitwear", publicationStatus: "published" },
  { garmentType: "Shirt", creativeDiscipline: "Typography and product application", category: "Shirts & Outerwear", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/man/shirts-outerwear", publicationStatus: "published" },
];

const desigualWomanClassification: Classification[] = [
  { garmentType: "Dress", creativeDiscipline: "Fashion graphics and textile print", category: "Dresses", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/dresses", publicationStatus: "published" },
  { garmentType: "Blouse", creativeDiscipline: "Textile print", category: "Blouses & Tops", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/blouses-tops", publicationStatus: "published" },
  { garmentType: "Dress", creativeDiscipline: "Fashion graphics and textile print", category: "Dresses", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/dresses", publicationStatus: "published" },
  { garmentType: "Dress", creativeDiscipline: "Fashion graphics and textile print", category: "Dresses", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/dresses", publicationStatus: "published" },
  { garmentType: "Top", creativeDiscipline: "Textile print and product application", category: "Blouses & Tops", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/blouses-tops", publicationStatus: "published" },
  { garmentType: "Dress", creativeDiscipline: "Fashion graphics and textile print", category: "Dresses", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/dresses", publicationStatus: "published" },
  { garmentType: "Top", creativeDiscipline: "Textile print and product application", category: "Blouses & Tops", season: "Desigual archive", confidence: "high", proposedRoute: "/work/desigual/woman/blouses-tops", publicationStatus: "published" },
  { garmentType: "Trousers", creativeDiscipline: "Product application", category: "Source case study only", season: "Desigual archive", confidence: "high", proposedRoute: "/work/woman-designs-desigual", publicationStatus: "legacy-only" },
];

const independentPrintClassification = (category: string, route: string): Classification[] => Array.from({ length: 7 }, () => ({
  garmentType: "Independent textile print",
  creativeDiscipline: "Textile print and repeat",
  category,
  season: "Independent archive",
  confidence: "review-required",
  proposedRoute: route,
  publicationStatus: "published",
}));

export const mediaInventory: MediaInventoryItem[] = [
  ...projectMedia("koroshi-ss-aw", "K", { brand: "Koroshi", division: "Menswear" }, koroshiClassification),
  ...projectMedia("man-designs-desigual", "DM", { brand: "Desigual", division: "Man" }, desigualManClassification),
  ...projectMedia("woman-designs-desigual", "DW", { brand: "Desigual", division: "Woman" }, desigualWomanClassification),
  ...projectMedia("fashion-prints", "FP", { brand: "Independent", division: "Independent" }, independentPrintClassification("Independent Print Archive / Fashion Prints", "/work/independent-print-archive")),
  ...projectMedia("rapport-fashion-prints", "RP", { brand: "Independent", division: "Independent" }, independentPrintClassification("Independent Print Archive / Rapport Prints", "/work/independent-print-archive")),
  ...projectMedia("flasheros", "FL", { brand: "Flasheros", division: "Personal" }, [{
    garmentType: "Photography",
    creativeDiscipline: "Photography, visual identity and art direction",
    category: "Photography / Personal Project",
    season: "Ongoing",
    confidence: "confirmed",
    proposedRoute: "/work/flasheros",
    publicationStatus: "legacy-only",
  }]),
];

// The SS26 catalogue has a product-level provenance model because one style may
// have several colour references and image views. It intentionally remains
// separate from the older case-study image inventory above.
export const koroshiSs26Inventory = koroshiSs26ReferenceInventory;

export function mediaByIds(ids: string[]) {
  return ids.map((id) => {
    const item = mediaInventory.find((record) => record.id === id);
    if (!item) throw new Error(`Missing media inventory record for ${id}`);
    return item.media;
  });
}

export function inventoryByCategory(brand: MediaInventoryItem["brand"], division: MediaInventoryItem["division"], category: string) {
  return mediaInventory.filter((item) => item.brand === brand && item.division === division && item.category === category);
}

export const independentPrintMedia = mediaInventory
  .filter((item) => item.brand === "Independent" && item.publicationStatus === "published")
  .map((item) => item.media);
