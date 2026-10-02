import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://xescoserrat-portfolio.xescoserrat.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    ...["/work/desigual", "/work/koroshi", "/work/prints"].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
  ];
}
