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
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/2255de241860497.6960f64b881c9.jpg", "Koroshi menswear garment overview", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/3583a2241860497.6960f64b7c822.jpg", "Koroshi seasonal product detail", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/3c8643241860497.6960f64b897f4.jpg", "Koroshi graphic application on garment", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/a2ad78241860497.6960f64b85e85.jpg", "Koroshi print and silhouette study", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/c7d634241860497.6960f64b9db97.png", "Koroshi seasonal artwork detail", "portrait"),
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
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/30b1ae212354207.696a0eed6b94e.jpg", "Desigual menswear print placement", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/37b0e3212354207.696a0eed70b47.jpg", "Desigual menswear garment graphic", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/3d525b212354207.696a0eed71168.jpg", "Desigual menswear product artwork", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/8e70f7212354207.696a0eed742a6.jpg", "Desigual menswear colour and graphic", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/f60802212354207.696a0eed72b19.jpg", "Desigual menswear typography detail", "portrait"),
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
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/6c512f212364163.697b33b9bbfd1.jpg", "Desigual womenswear product visual", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/713d93212364163.697b33b9bdd26.jpg", "Desigual womenswear print placement", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/7236b4212364163.697b33b9bed37.jpg", "Desigual womenswear garment detail", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/9db2d5212364163.697b33b9bb81d.jpg", "Desigual womenswear styling and print", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/a8f9e1212364163.697b33b9bd7e2.jpg", "Desigual womenswear textile graphic", "portrait"),
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
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/0b4660110926415.697b37353c553.png", "Fashion print pattern application", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/0fe82e110926415.697b37353899e.png", "Fashion print colour composition", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/14b831110926415.697b373535fae.png", "Fashion print motif detail", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/hd/451aa3110926415.697b37353664d.png", "Fashion print graphic rhythm", "landscape"),
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
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/264898110930891.5ff836a8ef1cf.png", "Rapport fashion print surface", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2bb9a4110930891.5ff836a900323.png", "Rapport fashion print repeat detail", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/494954110930891.5ff836a905611.png", "Rapport fashion print colourway", "landscape"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/75df3b110930891.5ff836a8f0292.png", "Rapport fashion print motif study", "portrait"),
      behance("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9ab11c110930891.5ff836a904420.png", "Rapport fashion print application", "landscape"),
    ],
  },
  {
    slug: "flasheros",
    title: "Flasheros the Brand",
    discipline: "Photography / Personal Project",
    year: "2026",
    role: "Photography · Personal art direction · Visual concept",
    summary: "A personal photography and visual-concept project exploring image, body, attitude and contemporary visual culture.",
    introduction: "Developed as an independent creative space, Flasheros brings together Francesc Serrat’s interest in photography, art direction and identity outside his commercial fashion-design work. It is an early, intentionally abstract exploration of a possible future clothing brand—not a launched commercial company.",
    process: "The project gives photographic language, casting, styling and graphic identity room to develop freely. It is a long-term personal interest: a space to test image-making, visual culture and attitude before any formal commercial direction is defined.",
    capabilities: ["Photography", "Personal art direction", "Visual experimentation", "Casting and styling", "Typography and identity"],
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
