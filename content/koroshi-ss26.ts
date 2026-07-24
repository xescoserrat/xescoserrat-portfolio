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

export type KoroshiSs26EditorialSection = {
  slug: string;
  title: string;
  description: string;
  recordLabel: string;
  cover: MediaAsset;
  media: MediaAsset[];
};

const sourceRoot = "/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26";
const publicAssetRoot = "/images/koroshi/ss26";

// Exact dimensions reserve each image's natural space before lazy loading. This
// keeps the product grid stable without coercing unlike product exports into a
// shared crop.
const ss26ImageDimensions = Object.fromEntries(
  `
2611CC06:627x786 2611CC32:571x713 2611CC39:1126x1220 2611CC40:1594x1770
2611CC47:1470x1710 2611CC48:1392x1700 2611CC60:546x657 2611CC67:538x658
2611MC04:1600x1669 2611MC09:912x905 2611MC10:1458x1434 2611MC11:855x848
2611MC12:687x516 2611MC13:1542x1524 2611MC14:788x785 2611MC15:894x931
2611MC19:1570x1562 2611MC25:822x823 2611MC30:865x854 2611MC37:1456x1466
2611MC43:349x346 2611MC44:816x810 2611MC49:645x636 2611MC50:798x807
2611MC51:1600x1581 2611MC52:1600x1579 2611MC53:595x588 2611MC60:1338x1296
2611MC62:359x414 2611MC63:893x885 2611MC64:854x862 2611MC66:1600x1596
2611MC68:1044x1021 2611MC72:875x586 2611MC73:1600x1563 2611MC74:857x868
2611MC75:824x828 2611MC76:1600x1602 2611MC79:1176x1184 2611MC80:1600x1589
2611MC81:424x424 2611MC82:323x323 2611MC83:702x694 2611MC86:584x580
2611MS02:1174x1792 2611MS03:1014x1644 2611MS05:780x1218 2611MS08:890x1438
2611MS10:864x1352 2611MS19:714x1150 2611MS26:615x742 2611MS30:556x791
2611MS35:1436x2000 2611MS38:1278x1704 2611MS40:676x1010 2611MS42:665x940
2611MS46:1274x1806 2611MS47:1250x1778 2611MS50:418x592 2611MS51:1323x2000
2611MS52:408x588 2611MS57:447x660 2611MS59:1286x1820 2611MS70:291x413
2611MS71:521x715 2611PC23:928x1200 2611PC28:918x1180 2611PC29:574x741
2611PC32:554x714 2611SU01:525x631 2611SU06:919x767 2611SU07:754x615
2611SU09:514x679 2611SU10:488x600 2611SU14:455x399 2611SU15:692x598
2611SU17:674x600 2611SU19:221x293 2611SU20:217x298 2611SU22:868x533
2611SU23:640x846 2611SU26:527x607 2611SU27:612x763 2611SU30:917x790
2611UN03:1600x889 2611UN05:1600x1131 2611UN10:603x475 2611WA01:484x490
2611WA02:534x528 2611WA06:624x639 2611WA07:527x540 2611WA09:1600x1470
2611WA10:1600x1461 2611WA11:1600x1131 2611WA13:1600x1482 2611WA15:1448x1322
2611WA18:538x484 2611WA19:617x569 2611WA20:552x491 2611WA21:1190x512
2611WA22:583x591 2611WA23:1600x1131 2611ZA01:1164x1658 2611ZT01:641x835
2611ZT03:1600x1131 2611ZT04:1556x794 2611ZT06:1600x1131 2611ZT07:1600x1131
2613HA02:1570x1754 2613HA03:660x705 2613HA04:1600x1464 2613HA05:1600x1383
2613HA06:1488x1662 2613HA07:1600x1464
`.trim().split(/\s+/).map((entry) => {
    const [styleCode, dimensions] = entry.split(":");
    const [width, height] = dimensions.split("x").map((value) => Number(value));
    return [styleCode, [width, height]] as const;
  }),
) as Record<string, readonly [number, number]>;

function dimensionsFor(styleCode: string) {
  const dimensions = ss26ImageDimensions[styleCode];
  if (!dimensions) throw new Error(`Koroshi SS26 ${styleCode} needs exact local image dimensions`);
  return { width: dimensions[0], height: dimensions[1] };
}

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
  { slug: "sweatshirts", title: "Sweatshirts", kind: "Sweatshirt", styles: "2611SU01 2611SU06 2611SU07 2611SU09 2611SU10 2611SU14 2611SU15 2611SU17 2611SU19 2611SU20 2611SU22 2611SU23 2611SU26 2611SU27 2611SU30" },
  { slug: "underwear", title: "Underwear", kind: "Boxer brief", styles: "2611UN03 2611UN05 2611UN10" },
  { slug: "swimwear", title: "Swimwear", kind: "Swim short", styles: "2611WA01 2611WA02 2611WA06 2611WA07 2611WA09 2611WA10 2611WA11 2611WA13 2611WA15 2611WA18 2611WA19 2611WA20 2611WA21 2611WA22 2611WA23" },
  { slug: "accessories", title: "Accessories", kind: "Accessory", styles: "2611ZA01 2611ZT01 2611ZT03 2611ZT04 2611ZT05 2611ZT06 2611ZT07" },
  { slug: "hats", title: "Caps & Hats", kind: "Cap", styles: "2613HA02 2613HA03 2613HA04 2613HA05 2613HA06 2613HA07" },
] as const;

const internalOnlyGroups = [
  { slug: "internal-review", title: "Internal review", kind: "Bermuda cargo short", styles: "2611PS12" },
] as const;

const reviewRequired: Record<string, string> = {
  "2611PC28-2": "The retained folder shares an export name with 2611PC28; the distinct style identity cannot be confirmed from the available materials.",
  "2611PS12": "Verified trousers reference. It remains internal because trousers are intentionally outside this supplied portfolio selection.",
  "2611ZT05": "The only full technical source is marked FW24–25, which conflicts with the supplied SS26 reference. It remains internal until its SS26 identity is confirmed.",
};

const technicalProductExports: Record<string, { src: string; sourcePath: string; alt: string }> = {
  "2611UN05": {
    src: "/images/koroshi/ss26/2611un05-tech-pack.webp",
    sourcePath: `${sourceRoot}/2611UN05/2611UN05.pdf`,
    alt: "Koroshi SS26 2611UN05 boxer brief technical product sheet",
  },
  "2611WA11": {
    src: "/images/koroshi/ss26/2611wa11-tech-pack.webp",
    sourcePath: `${sourceRoot}/2611WA11/2611WA11 MODIF 9-9-25.pdf`,
    alt: "Koroshi SS26 2611WA11 swim short technical product sheet",
  },
  "2611WA23": {
    src: "/images/koroshi/ss26/2611wa23-tech-pack.webp",
    sourcePath: `${sourceRoot}/2611WA23/2611WA23 SKETCH.pdf`,
    alt: "Koroshi SS26 2611WA23 swim short technical product sheet",
  },
  "2611ZT03": {
    src: "/images/koroshi/ss26/2611zt03-tech-pack.webp",
    sourcePath: `${sourceRoot}/2611ZT03/2611ZT03 SKETCH.pdf`,
    alt: "Koroshi SS26 2611ZT03 sock technical product sheet",
  },
  "2611ZT06": {
    src: "/images/koroshi/ss26/2611zt06-tech-pack.webp",
    sourcePath: `${sourceRoot}/2611ZT06/2611ZT06.pdf`,
    alt: "Koroshi SS26 2611ZT06 sock technical product sheet",
  },
  "2611ZT07": {
    src: "/images/koroshi/ss26/2611zt07-tech-pack.webp",
    sourcePath: `${sourceRoot}/2611ZT07/2611ZT07.pdf`,
    alt: "Koroshi SS26 2611ZT07 sock technical product sheet",
  },
};

const officialProductRecords: Partial<Record<string, { productName: string; officialCategory: string; sourceUrl: string }>> = {
  "2611CC32": { productName: "Camisa Hombre Manga Corta Popelín Algodón Bolsillo", officialCategory: "Short-sleeve shirts", sourceUrl: "https://koroshishop.com/products/camisa-popelin-bolsillo-algodon-manga-corta-hombre-2611cc32" },
  "2611MC00": { productName: "Men's 2-pack basic cotton short-sleeve T-shirts", officialCategory: "T-shirts", sourceUrl: "https://koroshishop.com/en/products/mens-2-pack-basic-cotton-short-sleeve-t-shirts-2611mc00" },
  "2611MC63": { productName: "Camiseta Hombre Manga Corta Estampado Japan Neon", officialCategory: "T-shirts", sourceUrl: "https://koroshishop.com/products/camiseta-estampado-japan-neon-manga-corta-hombre-blanca" },
  "2611MC74": { productName: "Camiseta Hombre Manga Corta Estampado Osaka Japan", officialCategory: "T-shirts", sourceUrl: "https://koroshishop.com/products/camiseta-estampado-osaka-japan-manga-corta-hombre" },
  "2611MC75": { productName: "Camiseta Hombre Manga Corta Lavada Estampado Sunset", officialCategory: "T-shirts", sourceUrl: "https://koroshishop.com/products/camiseta-lavada-estampado-sunset-manga-corta-hombre-indigo" },
  "2611MS03": { productName: "Camiseta Tirantes Hombre Estampado Surf", officialCategory: "Sleeveless T-shirts", sourceUrl: "https://koroshishop.com/products/camiseta-tirantes-estampado-surf-hombre-navy" },
  "2611MS47": { productName: "Men's boxing all-over print T-shirt", officialCategory: "Sleeveless T-shirts", sourceUrl: "https://koroshishop.com/en/products/mens-boxing-all-over-print-t-shirt-2611ms47" },
  "2611PC28": { productName: "Polo Hombre Manga Corta Algodón Micro Estampado", officialCategory: "Polo shirts", sourceUrl: "https://koroshishop.com/products/polo-algodon-micro-estampado-manga-corta-hombre-2611pc28" },
  "2611UN10": { productName: "Pack 7 Calzoncillos Slip Hombre Multicolor", officialCategory: "Underwear", sourceUrl: "https://koroshishop.com/products/pack-7-calzoncillos-slip-hombre-multicolor-koroshi" },
  "2611WA01": { productName: "Bañador Hombre Surfero Estampado", officialCategory: "Swimwear", sourceUrl: "https://koroshishop.com/products/banador-surfero-estampado-hombre-gris" },
  "2611WA13": { productName: "Bañador Hombre Corto Estampado Pixelado", officialCategory: "Swimwear", sourceUrl: "https://koroshishop.com/products/banador-corto-pixelado-hombre-2611wa13" },
  "2611WA15": { productName: "Bañador Hombre Corto Degradado", officialCategory: "Swimwear", sourceUrl: "https://koroshishop.com/products/banador-corto-degradado-hombre-2611wa15" },
  "2611ZT06": { productName: "Pack 3 Calcetines Tobilleros Hombre Algodón", officialCategory: "Accessories", sourceUrl: "https://koroshishop.com/products/pack-3-calcetines-tobilleros-hombre-2611zt06" },
};

function colourReferencesFor(styleCode: string) {
  const normalized = styleCode.replace("-2", "");
  return suppliedColourReferences.filter((reference) => reference.startsWith(`${normalized}_`));
}

function mediaFor(styleCode: string, kind: string, source: MediaSource): MediaAsset[] {
  if (styleCode === "2611MC00") {
    return [
      {
        src: "/images/projects/koroshi-2611mc00-front.webp",
        alt: "Koroshi SS26 2611MC00 front product view",
        aspect: "square",
        width: 1662,
        height: 2400,
        fit: "contain",
        source: "official-brand-source",
        provenance: {
          pageUrl: "https://koroshishop.com/en/products/mens-2-pack-basic-cotton-short-sleeve-t-shirts-2611mc00",
          imageUrl: "https://koroshishop.com/cdn/shop/files/2611MC00_0000001_10.jpg?v=1772637794",
          sourcePath: "/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/2611MC00",
          note: "Previously verified exact local official product export retained for the SS26 catalogue.",
        },
      },
      {
        src: "/images/projects/koroshi-2611mc00-profile.webp",
        alt: "Koroshi SS26 2611MC00 alternate product view",
        aspect: "square",
        width: 1662,
        height: 2400,
        fit: "contain",
        source: "official-brand-source",
        provenance: {
          pageUrl: "https://koroshishop.com/en/products/mens-2-pack-basic-cotton-short-sleeve-t-shirts-2611mc00",
          imageUrl: "https://koroshishop.com/cdn/shop/files/2611MC00_0000001_2.jpg?v=1772637794",
          sourcePath: "/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/2611MC00",
          note: "Previously verified exact local official product export retained for the SS26 catalogue.",
        },
      },
    ];
  }

  const technicalExport = technicalProductExports[styleCode];
  if (technicalExport) {
    return [{
      src: technicalExport.src,
      alt: technicalExport.alt,
      aspect: "landscape",
      ...dimensionsFor(styleCode),
      fit: "contain",
      source: "local-original",
      provenance: {
        sourcePath: technicalExport.sourcePath,
        note: "Optimized from the exact original SS26 technical product PDF; the complete garment remains visible in the catalogue.",
      },
    }];
  }

  if (reviewRequired[styleCode]) return [];
  const src = `${publicAssetRoot}/${styleCode.toLowerCase()}.webp`;
  return [{
    src,
    alt: `Koroshi SS26 ${styleCode} ${kind.toLowerCase()} product view`,
    aspect: "portrait",
    ...dimensionsFor(styleCode),
    fit: "contain",
    source,
    provenance: {
      sourcePath: `${sourceRoot}/${styleCode}`,
      note: "Exact SS26 local product export, optimized from the retained project source. Public official product title and URL were not available during this audit.",
    },
  }];
}

function productFor(styleCode: string, group: typeof catalogueGroups[number] | typeof internalOnlyGroups[number]): KoroshiSs26Product {
  const kind = group.slug === "accessories" ? (styleCode.startsWith("2611ZT") ? "Sock" : "Backpack") : group.kind;
  const isReview = Boolean(reviewRequired[styleCode]);
  const sourceType: MediaSource = styleCode === "2611MC00" ? "official-brand-source" : "local-original";
  const media = mediaFor(styleCode, kind, sourceType);
  const publicationStatus: KoroshiSs26PublicationStatus = media.length && !isReview ? "published" : "internal-review";
  const official = officialProductRecords[styleCode];
  const technicalExport = technicalProductExports[styleCode];

  return {
    styleCode,
    colourReferences: colourReferencesFor(styleCode),
    productName: official?.productName ?? null,
    productKind: kind,
    officialCategory: official?.officialCategory ?? null,
    proposedCategory: group.title,
    categorySlug: group.slug,
    season: "SS26",
    description: `A verified Koroshi menswear SS26 ${kind.toLowerCase()} retained in the local development archive.`,
    contribution: "The source set confirms this style as part of the selected SS26 work. Individual responsibility is not assigned beyond the retained project material.",
    sourceUrl: official?.sourceUrl ?? null,
    sourceImageUrls: media.flatMap((asset) => asset.provenance?.imageUrl ? [asset.provenance.imageUrl] : []),
    localSourcePath: technicalExport?.sourcePath ?? `${sourceRoot}/${styleCode}`,
    optimizedWebPaths: media.map((asset) => asset.src),
    availableViews: media.map((asset, index) => asset.provenance?.note?.includes("technical product PDF") ? "Technical product sheet" : index === 0 ? "Product view" : "Alternate product view"),
    thumbnail: media[0],
    media,
    confidence: publicationStatus === "published" ? "confirmed" : "review-required",
    publicationStatus,
    reviewNote: reviewRequired[styleCode],
  };
}

export const koroshiSs26ReferenceInventory = catalogueGroups.flatMap((group) =>
  group.styles.split(" ").map((styleCode) => productFor(styleCode, group)),
).concat(internalOnlyGroups.flatMap((group) => group.styles.split(" ").map((styleCode) => productFor(styleCode, group))));

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
  accessories: "Socks and a backpack that extend the SS26 menswear visual language beyond garments.",
  hats: "Caps and headwear confirmed from the SS26 local product evidence.",
};

export const koroshiSs26Categories: KoroshiSs26Category[] = catalogueGroups
  .map((group) => {
    const products = publishedKoroshiSs26Products.filter((product) => product.categorySlug === group.slug);
    const cover = products[0]?.thumbnail;
    if (!cover) throw new Error(`Koroshi SS26 category ${group.slug} needs a verified cover`);
    return { slug: group.slug, title: group.title, description: categoryDescriptions[group.slug], products, cover };
  });

export function getKoroshiSs26Category(slug: string) {
  return koroshiSs26Categories.find((category) => category.slug === slug);
}

const ss26GraphicsMedia: MediaAsset[] = [
  {
    src: "/images/projects/koroshi-2611ms47-white-front.webp",
    alt: "Koroshi SS26 2611MS47 all-over print sleeveless T-shirt, white colourway",
    aspect: "portrait",
    width: 1662,
    height: 2400,
    fit: "contain",
    source: "official-brand-source",
    provenance: {
      pageUrl: "https://koroshishop.com/en/products/mens-boxing-all-over-print-t-shirt-2611ms47",
      imageUrl: "https://koroshishop.com/cdn/shop/files/2611MS47_000001_8.jpg?v=1772722336",
      sourcePath: `${sourceRoot}/2611MS47/2611MS47 ARTWORKS.pdf`,
      note: "Exact SS26 product image, locally stored after verification against the original artwork file.",
    },
  },
  {
    src: "/images/projects/koroshi-2611ms47-white-profile.webp",
    alt: "Koroshi SS26 2611MS47 all-over print sleeveless T-shirt, profile view",
    aspect: "portrait",
    width: 1662,
    height: 2400,
    fit: "contain",
    source: "official-brand-source",
    provenance: {
      pageUrl: "https://koroshishop.com/en/products/mens-boxing-all-over-print-t-shirt-2611ms47",
      imageUrl: "https://koroshishop.com/cdn/shop/files/2611MS47_000001_2.jpg?v=1772722336",
      sourcePath: `${sourceRoot}/2611MS47/2611MS47 ARTWORKS.pdf`,
      note: "Exact SS26 product image, locally stored after verification against the original artwork file.",
    },
  },
  {
    src: "/images/projects/koroshi-2611ms47-yellow-front.webp",
    alt: "Koroshi SS26 2611MS47 all-over print sleeveless T-shirt, yellow colourway",
    aspect: "portrait",
    width: 1662,
    height: 2400,
    fit: "contain",
    source: "official-brand-source",
    provenance: {
      pageUrl: "https://koroshishop.com/en/products/mens-boxing-all-over-print-t-shirt-2611ms47",
      imageUrl: "https://koroshishop.com/cdn/shop/files/2611MS47_000027_8.jpg?v=1772722336",
      sourcePath: `${sourceRoot}/2611MS47/2611MS47 ARTWORKS.pdf`,
      note: "Exact SS26 product image, locally stored after verification against the original artwork file.",
    },
  },
  {
    src: "/images/projects/koroshi-2611ms47-artwork-spec.webp",
    alt: "Koroshi SS26 2611MS47 artwork and print placement specification",
    aspect: "portrait",
    width: 1800,
    height: 2046,
    fit: "contain",
    source: "local-original",
    provenance: {
      sourcePath: `${sourceRoot}/2611MS47/2611MS47 ARTWORKS.pdf`,
      note: "Optimized export from the exact original SS26 artwork and print-placement PDF.",
    },
  },
];

export const koroshiSs26EditorialSections: KoroshiSs26EditorialSection[] = [
  {
    slug: "fashion-graphics",
    title: "Fashion Graphics & Textile Prints",
    description: "An exact SS26 artwork record showing all-over print, colourway and placement resolved in the garment context.",
    recordLabel: "verified SS26 records",
    cover: ss26GraphicsMedia[0],
    media: ss26GraphicsMedia,
  },
  {
    slug: "design-process",
    title: "Design Process / Product Development",
    description: "A verified SS26 technical development record, retained to show the garment as a product system rather than an isolated image.",
    recordLabel: "verified SS26 record",
    cover: {
      src: "/images/projects/koroshi-2611mc00-tech-sheet.webp",
      alt: "Koroshi SS26 2611MC00 technical T-shirt development sheet",
      aspect: "landscape",
      width: 842,
      height: 595,
      fit: "contain",
      source: "local-original",
      provenance: {
        sourcePath: `${sourceRoot}/2611MC00/2611MC00 SKETCH.pdf`,
        note: "Optimized export from the exact original SS26 technical development PDF.",
      },
    },
    media: [{
      src: "/images/projects/koroshi-2611mc00-tech-sheet.webp",
      alt: "Koroshi SS26 2611MC00 technical T-shirt development sheet",
      aspect: "landscape",
      width: 842,
      height: 595,
      fit: "contain",
      source: "local-original",
      provenance: {
        sourcePath: `${sourceRoot}/2611MC00/2611MC00 SKETCH.pdf`,
        note: "Optimized export from the exact original SS26 technical development PDF.",
      },
    }],
  },
];

export function getKoroshiSs26EditorialSection(slug: string) {
  return koroshiSs26EditorialSections.find((section) => section.slug === slug);
}

export function getKoroshiSs26Product(styleCode: string) {
  return publishedKoroshiSs26Products.find((product) => product.styleCode.toLowerCase() === styleCode.toLowerCase());
}

export const koroshiSs26Paths = [
  "/work/koroshi/menswear",
  "/work/koroshi/menswear/ss26",
  ...koroshiSs26Categories.map((category) => `/work/koroshi/menswear/ss26/${category.slug}`),
  ...koroshiSs26EditorialSections.map((section) => `/work/koroshi/menswear/ss26/${section.slug}`),
  ...publishedKoroshiSs26Products.map((product) => `/work/koroshi/menswear/ss26/product/${product.styleCode.toLowerCase()}`),
];
