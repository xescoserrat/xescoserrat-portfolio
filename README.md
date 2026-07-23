# Xesco Serrat Portfolio

A static, editorial Next.js portfolio for Xesco Serrat.

## Media replacement workflow

Every project is represented in `content/projects.ts`. Place approved original files in `public/images/projects/`, then replace the relevant Behance source URL with its local path, for example:

```ts
src: "/images/projects/koroshi-seasonal-01.webp"
```

The art direction, crop ratio, lazy loading and layout remain unchanged. Export originals to modern web formats before publishing; do not use Behance thumbnails as final production assets.

## Deployment

This is a static export for Cloudflare Pages:

- Node version: `24`
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

Cloudflare Pages will produce preview deployments for pull requests.

The site also includes static `sitemap.xml` and `robots.txt` routes for production indexing, plus Cloudflare Pages security and cache headers in `public/_headers`.
