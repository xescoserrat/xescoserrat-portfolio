import type { MetadataRoute } from "next";
import { portfolioWorldPaths } from "../content/portfolio-worlds";
import { projects } from "../content/projects";

export const dynamic = "force-static";

const siteUrl = "https://xescoserrat-portfolio.xescoserrat.workers.dev";
const primaryPaths = ["/archive", "/about", "/contact", "/work/artworks"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    ...[...new Set([...primaryPaths, ...portfolioWorldPaths])].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
    ...projects.filter((project) => project.slug !== "flasheros").map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
