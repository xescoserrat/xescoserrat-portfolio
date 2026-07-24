import type { MediaAsset, Project } from "./projects";
import { projects } from "./projects";
import { mediaByIds } from "./media-inventory";
import { koroshiSs26Categories, koroshiSs26Paths } from "./koroshi-ss26";

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
  slug: "koroshi" | "desigual";
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

function category(
  slug: string,
  title: string,
  description: string,
  sourceProject: Project,
  mediaIds: string[],
): PortfolioCategory {
  const media = mediaByIds(mediaIds);
  const cover = media[0];
  if (!cover) throw new Error(`${title} needs at least one published image`);
  return { slug, title, description, cover, media, sourceProject };
}

const koroshiProject = project("koroshi-ss-aw");
const desigualManProject = project("man-designs-desigual");
const desigualWomanProject = project("woman-designs-desigual");

export const koroshiCategories: PortfolioCategory[] = [
  category(
    "t-shirts-sleeveless",
    "T-Shirts & Sleeveless",
    "Menswear T-shirts and sleeveless jersey developed through garment proportion, graphic placement and all-over print.",
    koroshiProject,
    ["K-09", "K-10", "K-11", "K-12", "K-13", "K-03", "K-04", "K-05", "K-06", "K-07"],
  ),
  category(
    "knitwear",
    "Knitwear",
    "A focused AW26–27 knitwear study, from technical development to sample, label and embroidery detail.",
    koroshiProject,
    ["K-17", "K-16", "K-18", "K-19"],
  ),
  category(
    "fashion-graphics",
    "Fashion Graphics & Textile Prints",
    "Repeat, placement and artwork developed as a garment’s visual language rather than an afterthought.",
    koroshiProject,
    ["K-01", "K-02", "K-08", "K-14"],
  ),
  category(
    "product-development",
    "Design Process / Product Development",
    "Technical specification, fabric and colour review, construction thinking and production-facing development.",
    koroshiProject,
    ["K-15", "K-16", "K-20", "K-21", "K-14"],
  ),
];

const desigualManDivision: PortfolioDivision = {
  slug: "man",
  title: "Man",
  description: "Menswear fashion graphics, typography, textile print and product application, kept in their original product context.",
  cover: mediaByIds(["DM-01"])[0],
  categories: [
    category(
      "sweatshirts-knitwear",
      "Sweatshirts & Knitwear",
      "Graphic systems, print and typography developed for men’s sweatshirts and knitwear.",
      desigualManProject,
      ["DM-01", "DM-02", "DM-07"],
    ),
    category(
      "shirts-outerwear",
      "Shirts & Outerwear",
      "Print placement, graphic language and product application across men’s shirts and outerwear.",
      desigualManProject,
      ["DM-03", "DM-04", "DM-06", "DM-08"],
    ),
  ],
};

const desigualWomanDivision: PortfolioDivision = {
  slug: "woman",
  title: "Woman",
  description: "Womenswear fashion graphics, colour and print direction responsive to movement, silhouette and the body.",
  cover: mediaByIds(["DW-01"])[0],
  categories: [
    category(
      "dresses",
      "Dresses",
      "Womenswear print, colour and graphic direction considered across the dress as a complete moving surface.",
      desigualWomanProject,
      ["DW-01", "DW-03", "DW-04", "DW-06"],
    ),
    category(
      "blouses-tops",
      "Blouses & Tops",
      "Textile print, placement and product application developed for womenswear blouses and tops.",
      desigualWomanProject,
      ["DW-02", "DW-05", "DW-07"],
    ),
  ],
};

export const desigualDivisions = [desigualManDivision, desigualWomanDivision];

export const portfolioWorlds: PortfolioWorld[] = [
  {
    slug: "koroshi",
    title: "Koroshi",
    description: "Current menswear work for Spring–Summer 2026 across Fashion Design, Fashion Graphic Design, garment development, prints, accessories and production follow-up.",
    cover: koroshiSs26Categories[0].cover,
    href: "/work/koroshi",
    categories: koroshiCategories,
  },
  {
    slug: "desigual",
    title: "Desigual",
    description: "More than 14 years of Fashion Graphic Design across menswear and womenswear: graphics, textile prints, typography, product application and visual identity.",
    cover: desigualManDivision.cover,
    href: "/work/desigual",
    divisions: desigualDivisions,
  },
];

export const portfolioWorldPaths = [
  "/work/koroshi",
  ...koroshiSs26Paths,
  "/work/desigual",
  ...desigualDivisions.flatMap((division) => [
    `/work/desigual/${division.slug}`,
    ...division.categories.map((item) => `/work/desigual/${division.slug}/${item.slug}`),
  ]),
  "/work/independent-print-archive",
];

export function getWorld(slug: string) {
  return portfolioWorlds.find((world) => world.slug === slug);
}

export function getKoroshiCategory(slug: string) {
  return koroshiCategories.find((item) => item.slug === slug);
}

export function getDesigualDivision(slug: string) {
  return desigualDivisions.find((item) => item.slug === slug);
}

export function getDesigualCategory(divisionSlug: string, categorySlug: string) {
  return getDesigualDivision(divisionSlug)?.categories.find((item) => item.slug === categorySlug);
}
