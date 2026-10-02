import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://xescoserrat-portfolio.xescoserrat.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    ...["/about", "/contact", "/work/desigual", "/work/koroshi", "/work/prints", "/work/prints/desigual", "/work/prints/koroshi"].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
  ];
}
