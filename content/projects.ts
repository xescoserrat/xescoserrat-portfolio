export type MediaSource = "behance-temporary" | "local-original" | "official-brand-source";

export type MediaProvenance = {
  pageUrl: string;
  imageUrl: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square";
  source: MediaSource;
  provenance?: MediaProvenance;
};

export type Project = {
  slug: string;
  title: string;
  discipline: string;
  year: string;
  role: string;
  summary: string;
  introduction: string;
  process: string;
  capabilities: string[];
  behanceUrl: string;
  media: MediaAsset[];
};

// Behance media remains temporary until an exact local source-file match is verified.
// Replace a `behance` call with a `localOriginal` call without changing page structure.
const behance = (src: string, alt: string, aspect: MediaAsset["aspect"]): MediaAsset => ({
  src,
  alt,
  aspect,
  source: "behance-temporary",
});

const cachedBehance = (src: string, alt: string, aspect: MediaAsset["aspect"], provenance: MediaProvenance): MediaAsset => ({
  src,
  alt,
  aspect,
  source: "behance-temporary",
  provenance,
});

export const localOriginal = (src: string, alt: string, aspect: MediaAsset["aspect"]): MediaAsset => ({
  src,
  alt,
  aspect,
  source: "local-original",
});

export const projects: Project[] = [
  {
    slug: "koroshi-ss-aw",
    title: "Koroshi SS26–27 + AW26–27",
    discipline: "Fashion Design / Menswear",
    year: "2026",
    role: "Fashion Designer · Menswear · Fashion graphics",
    summary: "Menswear collection development that moves from concept, graphics and fabric through construction and production.",
    introduction: "At Koroshi, the collection is developed as one connected system: silhouette, fabric, colour, placement and graphic language are resolved together so every garment holds its character in wear.",
    process: "The work moves from concept and seasonal research through graphics, fabrics, colour, garment construction, fittings, measurements and production follow-up.",
    capabilities: ["Fashion design", "Menswear design", "Collection development", "Garment development", "Fashion graphics", "Fittings and production follow-up"],
    behanceUrl: "https://www.behance.net/gallery/241860497/Koroshi-SS26-27-AW26-27",
    media: [
      // Exported from the verified jungle_repeat_seamless_fullcolor_master.png source artwork.
      localOriginal("/images/projects/koroshi-jungle-repeat-master-01.jpg", "Koroshi jungle animal repeat master artwork", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ea1c85241860497.6960f64b87283.jpg", "Koroshi SS26–27 and AW26–27 graphic detail", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/cbf828241860497.6960f64b856d4.jpg", "Koroshi menswear visual direction", "landscape"),
    ],
  },
  {
    slug: "man-designs-desigual",
    title: "Man Designs Desigual",
    discipline: "Fashion Graphics / Menswear",
    year: "2024",
    role: "Fashion Graphic Designer · Menswear · Textile print",
    summary: "Menswear graphics and textile prints developed for product, placement and a strong read in wear.",
    introduction: "At Desigual, graphic development is considered as part of the garment: a balance of print, typography, placement and colour that supports the silhouette rather than sitting separately from it.",
    process: "Each proposition considers the garment as a frame—how the eye lands, how colour carries energy and how labels, patches, typography and graphic detail behave in movement.",
    capabilities: ["Menswear", "Fashion graphics", "Textile prints", "Typography", "Labels, patches and branding"],
    behanceUrl: "https://www.behance.net/gallery/212354207/Man-Designs-Desigual",
    media: [
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5af428212354207.696a0eed750d8.jpg", "Desigual menswear fashion graphic", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f3eea6212354207.696a0eed7333d.jpg", "Desigual menswear print design", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6bdf57212354207.696a0eed7572f.jpg", "Desigual menswear graphic detail", "portrait"),
    ],
  },
  {
    slug: "woman-designs-desigual",
    title: "Woman Designs Desigual",
    discipline: "Fashion Graphics / Womenswear",
    year: "2024",
    role: "Fashion Graphic Designer · Womenswear · Colour",
    summary: "Womenswear graphics and print direction balancing movement, colour and a distinctive visual pulse.",
    introduction: "For womenswear at Desigual, graphic language amplifies mood through colour, line and composition while remaining responsive to the garment, the body and the collection.",
    process: "The work moves between full looks and close detail, testing how print, placement and colour behave across the body and through a collection.",
    capabilities: ["Womenswear", "Fashion graphics", "Textile prints", "Colour systems", "Collection development"],
    behanceUrl: "https://www.behance.net/gallery/212364163/Woman-Designs-Desigual",
    media: [
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/f14245212364163.697b33b9bb01a.jpg", "Desigual womenswear fashion graphic", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/86a057212364163.697b33b9bc5bf.jpg", "Desigual womenswear graphic detail", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/b41404212364163.697b33b9c3ca2.jpg", "Desigual womenswear colour and print", "portrait"),
    ],
  },
  {
    slug: "fashion-prints",
    title: "Fashion Prints",
    discipline: "Surface",
    year: "2021",
    role: "Textile prints · All-over patterns · Colour systems",
    summary: "Print as atmosphere: visual worlds designed for garment scale, repeat and movement.",
    introduction: "Fashion Prints is a study in surface and feeling. Each composition treats colour, motif and density as tools for creating a distinct emotional register.",
    process: "The image is resolved in two dimensions first, then considered for rhythm, wearability and the way it comes alive on a moving body.",
    capabilities: ["Textile prints", "All-over patterns", "Illustration", "Colour systems"],
    behanceUrl: "https://www.behance.net/gallery/110926415/Fashion-Prints",
    media: [
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5b26c5110926415.697b373536e5f.png", "Fashion print illustration", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6edc2c110926415.697b3735481f6.png", "Fashion print visual composition", "square"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1c9f07110926415.697b37353f6ed.png", "Fashion print colour study", "landscape"),
    ],
  },
  {
    slug: "rapport-fashion-prints",
    title: "Rapport Fashion Prints",
    discipline: "Surface",
    year: "2021",
    role: "Repeat · Textile prints · All-over patterns",
    summary: "Repeat patterns that work as a complete image from afar and a considered construction up close.",
    introduction: "Rapport Fashion Prints investigates repetition as a creative device. The work looks for the point where a motif can multiply without losing its personality.",
    process: "Pattern, scale and rhythm are balanced to make a print feel continuous, intentional and adaptable across fashion applications.",
    capabilities: ["Repeat", "Textile prints", "All-over patterns", "Pattern"],
    behanceUrl: "https://www.behance.net/gallery/110930891/Rapport-fashion-prints",
    media: [
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/af0d68110930891.5ff836a900f4f.png", "Rapport fashion print pattern", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/26216b110930891.5ff836a8efd59.png", "Rapport fashion print motif", "portrait"),
    ],
  },
  {
    slug: "flasheros",
    title: "Flasheros the Brand",
    discipline: "Direction",
    year: "2026",
    role: "Brand identity · Typography · Art direction",
    summary: "A brand-world exercise where identity becomes tone, typography and a way of taking up space.",
    introduction: "Flasheros the Brand expands the practice beyond the garment into identity. It considers how a visual voice can introduce a brand before a single product is explained.",
    process: "The project is framed around recognition: making a system with enough contrast, attitude and typographic clarity to feel immediate and ownable.",
    capabilities: ["Brand identity", "Typography", "Labels and branding", "Art direction and visual identity"],
    behanceUrl: "https://www.behance.net/gallery/241866335/Flasheros-the-brand",
    media: [
      cachedBehance("/images/projects/flasheros-behance-cover-01.jpg", "Flasheros the Brand Behance cover", "landscape", {
        pageUrl: "https://www.behance.net/gallery/241866335/Flasheros-the-brand",
        imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/ab1732241866335.Y3JvcCwyMTM1LDE2NzAsMzYsMA.jpg",
      }),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
