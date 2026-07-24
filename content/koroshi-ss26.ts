import type { MediaAsset, MediaSource } from "./projects";

export type KoroshiSs26PublicationStatus = "published" | "internal-review";
export type KoroshiSs26Confidence = "confirmed" | "high" | "review-required";

export type KoroshiSs26Product = {
  styleCode: string;
  colourReferences: string[];
  productName: string | null;
  productKind: string;
  officialCategory: string | null;
  proposedCategory: string;
  categorySlug: string;
  season: "SS26";
  description: string;
  contribution: string;
  sourceUrl: string | null;
  sourceImageUrls: string[];
  localSourcePath: string;
  optimizedWebPaths: string[];
  availableViews: string[];
  thumbnail?: MediaAsset;
  media: MediaAsset[];
  confidence: KoroshiSs26Confidence;
  publicationStatus: KoroshiSs26PublicationStatus;
  reviewNote?: string;
};

export type KoroshiSs26Category = {
  slug: string;
  title: string;
  description: string;
  products: KoroshiSs26Product[];
  cover: MediaAsset;
};

const sourceRoot = "/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26";
const publicAssetRoot = "/images/koroshi/ss26";

const suppliedColourReferences = `
2611CC06_000001 2611CC32_000006 2611CC39_000003 2611CC39_000006 2611CC39_000014 2611CC39_000139 2611CC40_000003 2611CC40_000323 2611CC47_000003 2611CC48_000122 2611CC60_000006 2611CC60_000014 2611CC60_000017 2611CC67_000006
2611MC00_000001 2611MC00_000003 2611MC04_000027 2611MC09_000123 2611MC10_000005 2611MC11_000001 2611MC11_000014 2611MC12_000003 2611MC13_000001 2611MC14_000006 2611MC15_000003 2611MC19_000014 2611MC25_000012 2611MC30_000001 2611MC37_000005 2611MC43_000001 2611MC44_000003 2611MC49_000014 2611MC49_000070 2611MC50_000016 2611MC51_000030 2611MC52_000003 2611MC53_00001 2611MC60_000030 2611MC62_000014 2611MC63_000030 2611MC64_000030 2611MC66_000123 2611MC68_000123 2611MC72_000003 2611MC73_000030 2611MC74_000003 2611MC75_000123 2611MC76_000030 2611MC79_000003 2611MC80_000003 2611MC81_000030 2611MC82_000014 2611MC83_000003 2611MC86_000030
2611MS02_000015 2611MS02_000147 2611MS03_000123 2611MS05_000005 2611MS08_000016 2611MS08_000039 2611MS10_000003 2611MS19_000001 2611MS19_000013 2611MS26_000039 2611MS30_000001 2611MS30_000014 2611MS35_000001 2611MS35_000039 2611MS38_000003 2611MS40_000014 2611MS42_000001 2611MS46_000003 2611MS47_000001 2611MS47_000027 2611MS50_000147 2611MS51_000323 2611MS52_000003 2611MS57_000001 2611MS57_000014 2611MS59_000084 2611MS59_000147 2611MS70_000030 2611MS71_000030
2611PC23_000039 2611PC28_000039 2611PC29_000039 2611PC32_000015 2611PS12_000061
2611SU01_000030 2611SU06_000015 2611SU07_000027 2611SU09_000039 2611SU10_000014 2611SU10_000070 2611SU14_000015 2611SU14_000139 2611SU15_000027 2611SU17_000147 2611SU19_000084 2611SU20_000014 2611SU22_000030 2611SU23_000003 2611SU26_000039 2611SU27_000039 2611SU30_000039
2611UN03_000003 2611UN03_000014 2611UN03_000039 2611UN03_000073 2611UN05_000003 2611UN05_000014 2611UN05_000070 2611UN10_000323
2611WA01_000005 2611WA02_000323 2611WA06_000015 2611WA06_000147 2611WA07_000003 2611WA09_000039 2611WA10_000005 2611WA10_000084 2611WA11_000005 2611WA11_000015 2611WA13_000039 2611WA13_000323 2611WA15_000013 2611WA15_000323 2611WA18_00002 2611WA18_000005 2611WA18_000014 2611WA19_000084 2611WA20_000003 2611WA21_000006 2611WA21_000021 2611WA22_000039 2611WA23_000039
2611ZA01_000003 2611ZT01_000001 2611ZT01_000005 2611ZT01_000147 2611ZT03_000323 2611ZT04_000323 2611ZT05_000323 2611ZT06_000001 2611ZT06_000005 2611ZT06_000030 2611ZT07_000001 2611ZT07_000005 2611ZT07_000030
2613HA02_000039 2613HA03_000003 2613HA04_000039 2613HA05_000030 2613HA06_000014 2613HA07_000039
`.trim().split(/\s+/);

const catalogueGroups = [
  { slug: "shirts", title: "Shirts", kind: "Short-sleeve shirt", styles: "2611CC06 2611CC32 2611CC39 2611CC40 2611CC47 2611CC48 2611CC60 2611CC67" },
  { slug: "t-shirts", title: "T-Shirts", kind: "T-shirt", styles: "2611MC00 2611MC04 2611MC09 2611MC10 2611MC11 2611MC12 2611MC13 2611MC14 2611MC15 2611MC19 2611MC25 2611MC30 2611MC37 2611MC43 2611MC44 2611MC49 2611MC50 2611MC51 2611MC52 2611MC53 2611MC60 2611MC62 2611MC63 2611MC64 2611MC66 2611MC68 2611MC72 2611MC73 2611MC74 2611MC75 2611MC76 2611MC79 2611MC80 2611MC81 2611MC82 2611MC83 2611MC86" },
  { slug: "sleeveless", title: "Sleeveless T-Shirts", kind: "Sleeveless T-shirt", styles: "2611MS02 2611MS03 2611MS05 2611MS08 2611MS10 2611MS19 2611MS26 2611MS30 2611MS35 2611MS38 2611MS40 2611MS42 2611MS46 2611MS47 2611MS50 2611MS51 2611MS52 2611MS57 2611MS59 2611MS70 2611MS71" },
  { slug: "polos", title: "Polo Shirts", kind: "Polo shirt", styles: "2611PC23 2611PC28 2611PC28-2 2611PC29 2611PC32" },
  { slug: "trousers", title: "Trousers", kind: "Cargo trousers", styles: "2611PS12" },
  { slug: "sweatshirts", title: "Sweatshirts", kind: "Sweatshirt", styles: "2611SU01 2611SU06 2611SU07 2611SU09 2611SU10 2611SU14 2611SU15 2611SU17 2611SU19 2611SU20 2611SU22 2611SU23 2611SU26 2611SU27 2611SU30" },
  { slug: "underwear", title: "Underwear", kind: "Boxer brief", styles: "2611UN03 2611UN05 2611UN10" },
  { slug: "swimwear", title: "Swimwear", kind: "Swim short", styles: "2611WA01 2611WA02 2611WA06 2611WA07 2611WA09 2611WA10 2611WA11 2611WA13 2611WA15 2611WA18 2611WA19 2611WA20 2611WA21 2611WA22 2611WA23" },
  { slug: "accessories", title: "Accessories", kind: "Accessory", styles: "2611ZA01 2611ZT01 2611ZT03 2611ZT04 2611ZT05 2611ZT06 2611ZT07 2613HA02 2613HA03 2613HA04 2613HA05 2613HA06 2613HA07" },
] as const;

const reviewRequired: Record<string, string> = {
  "2611PC28-2": "The retained folder shares an export name with 2611PC28; the distinct style identity cannot be confirmed from the available materials.",
  "2611PS12": "Verified trousers reference. It remains internal because trousers are intentionally outside this supplied portfolio selection.",
  "2611UN05": "The exact source folder is present, but no clean direct product export was found for a public catalogue image.",
  "2611WA11": "The exact source folder is present, but no clean direct product export was found for a public catalogue image.",
  "2611WA23": "The exact source folder is present, but no clean direct product export was found for a public catalogue image.",
  "2611ZT03": "The exact source folder is present; available export quality is too limited for publication.",
  "2611ZT05": "The exact source folder is present; available export quality is too limited for publication.",
  "2611ZT06": "The exact source folder is present; available export quality is too limited for publication.",
  "2611ZT07": "The exact source folder is present; available export quality is too limited for publication.",
};

function colourReferencesFor(styleCode: string) {
  const normalized = styleCode.replace("-2", "");
  return suppliedColourReferences.filter((reference) => reference.startsWith(`${normalized}_`));
}

function accessoryKind(styleCode: string) {
  if (styleCode.startsWith("2613HA")) return "Cap";
  if (styleCode.startsWith("2611ZT")) return "Sock";
  return "Backpack";
}

function mediaFor(styleCode: string, kind: string, category: string, source: MediaSource): MediaAsset[] {
  if (styleCode === "2611MC00") {
    return [
      {
        src: "/images/projects/koroshi-2611mc00-front.webp",
        alt: "Koroshi SS26 2611MC00 front product view",
        aspect: "square",
        source: "official-brand-source",
        provenance: {
          pageUrl: "https://koroshishop.com/",
          sourcePath: "/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/2611MC00",
          note: "Previously verified exact local official product export retained for the SS26 catalogue.",
        },
      },
      {
        src: "/images/projects/koroshi-2611mc00-profile.webp",
        alt: "Koroshi SS26 2611MC00 alternate product view",
        aspect: "square",
        source: "official-brand-source",
        provenance: {
          pageUrl: "https://koroshishop.com/",
          sourcePath: "/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/2611MC00",
          note: "Previously verified exact local official product export retained for the SS26 catalogue.",
        },
      },
    ];
  }

  if (reviewRequired[styleCode]) return [];
  const src = `${publicAssetRoot}/${styleCode.toLowerCase()}.webp`;
  return [{
    src,
    alt: `Koroshi SS26 ${styleCode} ${kind.toLowerCase()} product view`,
    aspect: "portrait",
    source,
    provenance: {
      sourcePath: `${sourceRoot}/${styleCode}`,
      note: "Exact SS26 local product export, optimized from the retained project source. Public official product title and URL were not available during this audit.",
    },
  }];
}

function productFor(styleCode: string, group: typeof catalogueGroups[number]): KoroshiSs26Product {
  const kind = group.slug === "accessories" ? accessoryKind(styleCode) : group.kind;
  const isReview = Boolean(reviewRequired[styleCode]);
  const sourceType: MediaSource = styleCode === "2611MC00" ? "official-brand-source" : "local-original";
  const media = mediaFor(styleCode, kind, group.title, sourceType);
  const publicationStatus: KoroshiSs26PublicationStatus = media.length && !isReview ? "published" : "internal-review";

  return {
    styleCode,
    colourReferences: colourReferencesFor(styleCode),
    productName: null,
    productKind: kind,
    officialCategory: null,
    proposedCategory: group.title,
    categorySlug: group.slug,
    season: "SS26",
    description: `A verified Koroshi menswear SS26 ${kind.toLowerCase()} retained in the local development archive.`,
    contribution: "The source set confirms this style as part of the selected SS26 work. Individual responsibility is not assigned beyond the retained project material.",
    sourceUrl: null,
    sourceImageUrls: [],
    localSourcePath: `${sourceRoot}/${styleCode}`,
    optimizedWebPaths: media.map((asset) => asset.src),
    availableViews: media.map((_, index) => index === 0 ? "Product view" : "Alternate product view"),
    thumbnail: media[0],
    media,
    confidence: publicationStatus === "published" ? "confirmed" : "review-required",
    publicationStatus,
    reviewNote: reviewRequired[styleCode],
  };
}

export const koroshiSs26ReferenceInventory = catalogueGroups.flatMap((group) =>
  group.styles.split(" ").map((styleCode) => productFor(styleCode, group)),
);

export const publishedKoroshiSs26Products = koroshiSs26ReferenceInventory.filter(
  (product) => product.publicationStatus === "published",
);

const categoryDescriptions: Record<string, string> = {
  shirts: "Short-sleeve shirts and all-over surfaces preserved from the SS26 menswear development archive.",
  "t-shirts": "A broad SS26 T-shirt set, spanning graphic placement, labels, colour and product detail.",
  sleeveless: "Sleeveless jersey styles developed as a distinct part of the SS26 menswear offer.",
  polos: "Polo constructions and graphic applications selected from the SS26 source archive.",
  sweatshirts: "Sweatshirt development across construction, colour, surface and graphic systems.",
  underwear: "Selected underwear styles retained as part of the SS26 menswear product universe.",
  swimwear: "Swim shorts and summer product development, including all-over print and colour application.",
  accessories: "Caps, socks and a backpack that extend the SS26 menswear visual language beyond garments.",
};

export const koroshiSs26Categories: KoroshiSs26Category[] = catalogueGroups
  .filter((group) => group.slug !== "trousers")
  .map((group) => {
    const products = publishedKoroshiSs26Products.filter((product) => product.categorySlug === group.slug);
    const cover = products[0]?.thumbnail;
    if (!cover) throw new Error(`Koroshi SS26 category ${group.slug} needs a verified cover`);
    return { slug: group.slug, title: group.title, description: categoryDescriptions[group.slug], products, cover };
  });

export function getKoroshiSs26Category(slug: string) {
  return koroshiSs26Categories.find((category) => category.slug === slug);
}

export function getKoroshiSs26Product(styleCode: string) {
  return publishedKoroshiSs26Products.find((product) => product.styleCode.toLowerCase() === styleCode.toLowerCase());
}

export const koroshiSs26Paths = [
  "/work/koroshi/menswear",
  "/work/koroshi/menswear/ss26",
  ...koroshiSs26Categories.map((category) => `/work/koroshi/menswear/ss26/${category.slug}`),
  ...publishedKoroshiSs26Products.map((product) => `/work/koroshi/menswear/ss26/product/${product.styleCode.toLowerCase()}`),
];
