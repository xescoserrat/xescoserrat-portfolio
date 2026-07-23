import type { MediaAsset, Project } from "./projects";
import { projects } from "./projects";

export type PortfolioCategory = {
  slug: string;
  title: string;
  description: string;
  cover: MediaAsset;
  media: MediaAsset[];
  sourceProject: Project;
};

export type PortfolioDivision = {
  slug: string;
  title: string;
  description: string;
  cover: MediaAsset;
  categories: PortfolioCategory[];
};

export type PortfolioWorld = {
  slug: "koroshi" | "desigual" | "flasheros";
  title: string;
  description: string;
  cover: MediaAsset;
  href: string;
  divisions?: PortfolioDivision[];
  categories?: PortfolioCategory[];
};

function project(slug: string) {
  const current = projects.find((item) => item.slug === slug);
  if (!current) throw new Error(`Missing project data for ${slug}`);
  return current;
}

const koroshiProject = project("koroshi-ss-aw");
const desigualManProject = project("man-designs-desigual");
const desigualWomanProject = project("woman-designs-desigual");
const flasherosProject = project("flasheros");

const koroshiCategories: PortfolioCategory[] = [
  {
    slug: "menswear-collection",
    title: "Menswear Collection",
    description: "Seasonal menswear considered through silhouette, colour, garment graphics and product development.",
    cover: koroshiProject.media[2],
    media: [koroshiProject.media[2], koroshiProject.media[3], koroshiProject.media[4], koroshiProject.media[5], koroshiProject.media[6]],
    sourceProject: koroshiProject,
  },
  {
    slug: "textile-prints",
    title: "Textile Prints & Fashion Graphics",
    description: "Repeat, placement and artwork developed as part of the garment’s visual language.",
    cover: koroshiProject.media[0],
    media: [koroshiProject.media[0], koroshiProject.media[1], koroshiProject.media[5], koroshiProject.media[7]],
    sourceProject: koroshiProject,
  },
];

const desigualManDivision: PortfolioDivision = {
  slug: "man",
  title: "Man",
  description: "Menswear graphic systems, textile prints, typography and product applications.",
  cover: desigualManProject.media[0],
  categories: [{
    slug: "fashion-graphics",
    title: "Fashion Graphics & Textile Prints",
    description: "Graphic languages, placement, typography and textile print developed for menswear product.",
    cover: desigualManProject.media[0],
    media: desigualManProject.media,
    sourceProject: desigualManProject,
  }],
};

const desigualWomanDivision: PortfolioDivision = {
  slug: "woman",
  title: "Woman",
  description: "Womenswear graphics, colour and print direction responsive to movement and the body.",
  cover: desigualWomanProject.media[0],
  categories: [{
    slug: "fashion-graphics",
    title: "Fashion Graphics & Textile Prints",
    description: "Colour, composition, print placement and graphic identity for womenswear product.",
    cover: desigualWomanProject.media[0],
    media: desigualWomanProject.media,
    sourceProject: desigualWomanProject,
  }],
};

export const portfolioWorlds: PortfolioWorld[] = [
  {
    slug: "koroshi",
    title: "Koroshi",
    description: "Current work connecting menswear design, garment development, fashion graphics, textile prints, branding and production.",
    cover: koroshiProject.media[2],
    href: "/work/koroshi",
    categories: koroshiCategories,
  },
  {
    slug: "desigual",
    title: "Desigual",
    description: "Fashion Graphic Design across menswear and womenswear: graphics, textile prints, typography, product application and visual identity.",
    cover: desigualManProject.media[0],
    href: "/work/desigual",
    divisions: [desigualManDivision, desigualWomanDivision],
  },
  {
    slug: "flasheros",
    title: "Flasheros",
    description: "A personal photography and visual-concept project: an abstract, early exploration of a possible future clothing brand.",
    cover: flasherosProject.media[0],
    href: "/work/flasheros",
  },
];

export const portfolioWorldPaths = [
  "/work/koroshi",
  ...koroshiCategories.map((category) => `/work/koroshi/${category.slug}`),
  "/work/desigual",
  ...[desigualManDivision, desigualWomanDivision].flatMap((division) => [
    `/work/desigual/${division.slug}`,
    ...division.categories.map((category) => `/work/desigual/${division.slug}/${category.slug}`),
  ]),
];

export function getWorld(slug: string) {
  return portfolioWorlds.find((world) => world.slug === slug);
}

export function getKoroshiCategory(slug: string) {
  return koroshiCategories.find((category) => category.slug === slug);
}

export function getDesigualDivision(slug: string) {
  return [desigualManDivision, desigualWomanDivision].find((division) => division.slug === slug);
}

export function getDesigualCategory(divisionSlug: string, categorySlug: string) {
  return getDesigualDivision(divisionSlug)?.categories.find((category) => category.slug === categorySlug);
}
