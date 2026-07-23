export type MediaSource = "behance-temporary" | "local-original";

export type MediaAsset = {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square";
  source: MediaSource;
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
    discipline: "Language / Form",
    year: "2026",
    role: "Fashion graphics · Menswear · Seasonal direction",
    summary: "A graphic language made to travel across a season, from the first mark to the final garment.",
    introduction: "Koroshi brings together seasonal development and graphic decision-making at product level. The work is treated as a living system: direct, wearable and consistent across changing silhouettes.",
    process: "The visual direction starts with energy and placement, then tests how each graphic can hold its character through different garments, scales and materials.",
    capabilities: ["Menswear", "Fashion graphics", "Art direction"],
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
    discipline: "Language / Form",
    year: "2024",
    role: "Fashion graphics · Menswear · Print",
    summary: "Menswear graphics with character—built around attitude, placement and a strong read from distance.",
    introduction: "This body of work explores how a graphic can become part of a menswear silhouette rather than simply sit on it. The emphasis is on immediacy, graphic confidence and product relevance.",
    process: "Each proposition considers the garment as a frame: where the eye lands first, how colour carries energy, and how the image changes in movement.",
    capabilities: ["Menswear", "Print", "Graphic design"],
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
    discipline: "Language / Form",
    year: "2024",
    role: "Fashion graphics · Womenswear · Colour",
    summary: "A womenswear graphic vocabulary that balances movement, colour and a distinctive visual pulse.",
    introduction: "For womenswear, the graphic system becomes a way to amplify mood. Colour, line and composition work together to make every garment feel energetic without losing clarity.",
    process: "The work moves between full looks and close detail, testing how visual language behaves across the body and through a collection.",
    capabilities: ["Womenswear", "Fashion graphics", "Colour"],
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
    role: "Textile print · Illustration · Colour systems",
    summary: "Print as atmosphere: a set of visual worlds designed to be read at garment scale.",
    introduction: "Fashion Prints is a study in surface and feeling. Each composition treats colour, motif and density as tools for creating a distinct emotional register.",
    process: "The image is resolved in two dimensions first, then considered for rhythm, wearability and the way it comes alive on a moving body.",
    capabilities: ["Textile print", "Illustration", "Colour systems"],
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
    role: "Repeat · Textile print · Pattern",
    summary: "Repeat patterns that work as a complete image from afar and a considered construction up close.",
    introduction: "Rapport Fashion Prints investigates repetition as a creative device. The work looks for the point where a motif can multiply without losing its personality.",
    process: "Pattern, scale and rhythm are balanced to make a print feel continuous, intentional and adaptable across fashion applications.",
    capabilities: ["Repeat", "Textile print", "Pattern"],
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
    role: "Brand identity · Typography · Creative thinking",
    summary: "A brand-world exercise where identity becomes tone, typography and a way of taking up space.",
    introduction: "Flasheros the Brand expands the practice beyond the garment into identity. It considers how a visual voice can introduce a brand before a single product is explained.",
    process: "The project is framed around recognition: making a system with enough contrast, attitude and typographic clarity to feel immediate and ownable.",
    capabilities: ["Brand identity", "Typography", "Creative thinking"],
    behanceUrl: "https://www.behance.net/gallery/241866335/Flasheros-the-brand",
    media: [
      behance("https://a5.behance.net/82385ac841c8486d1cbd6dc7e522c2f906828477/img/covers/max_808_webp-blocked.png", "Flasheros the Brand project cover", "landscape"),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
