# Xesco Serrat Portfolio

A static, editorial Next.js portfolio for Xesco Serrat.

## Media replacement workflow

Every retained case-study project is represented in `content/projects.ts`. Each media item is explicitly marked `behance-temporary`, `local-original`, or `official-brand-source`, with source-page and source-image provenance where applicable. The product-level Koroshi SS26 catalogue is held separately in `content/koroshi-ss26.ts`, so its reference inventory, source paths, output paths and static routes stay reusable for later seasons.

Place approved original files in `public/images/projects/`, then replace the relevant `behance(...)` entry with `localOriginal(...)`, for example:

```ts
localOriginal("/images/projects/koroshi-seasonal-01.webp", "Koroshi seasonal graphic", "landscape")
```

The art direction, crop ratio, lazy loading and layout remain unchanged. Export originals to modern web formats before publishing; do not use Behance thumbnails as final production assets.

## Deployment

This is a static export for Cloudflare Pages. Configure a Git-integrated Pages project as follows:

1. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
2. Select `xescoserrat/xescoserrat-portfolio` and choose **Begin setup**.
3. Select **Next.js (Static HTML Export)**. Confirm these values:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: leave blank (the portfolio is at the repository root)
4. Add the environment variable `NODE_VERSION` with value `24`.
5. Select **Save and Deploy**. Cloudflare installs dependencies, creates the `out/` static export, and publishes it to the project’s `*.pages.dev` URL.
6. After deployment, verify `/`, `/work/koroshi/`, `/work/koroshi/menswear/ss26/`, a category and product route, the existing Desigual hierarchy, `/sitemap.xml`, and `/robots.txt`. Flasheros is intentionally preserved but temporarily excluded from the public sitemap. Connect a custom domain in the Pages project only after this check passes. If a custom domain is connected, update the production URL consistently in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` before the next deploy so canonical and indexing URLs remain correct.

Cloudflare Pages will produce preview deployments for pull requests and deploy updates from `main` automatically. The [Cloudflare static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) confirms `out` as the static-export output directory.

The site also includes static `sitemap.xml` and `robots.txt` routes for production indexing, plus Cloudflare Pages security and cache headers in `public/_headers`.
