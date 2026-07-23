import type { MetadataRoute } from "next";
import { projects } from "../content/projects";

export const dynamic = "force-static";

const siteUrl = "https://xescoserrat-portfolio.xescoserrat.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
