# Internal media map

`content/media-inventory.ts` remains the source of truth for the retained case-study media. `content/koroshi-ss26.ts` is the SS26 product-level extension: every supplied style reference has one record with its colour references, source location, web export path, available views, confidence and publication status.

## Koroshi SS26 audit

| Status | Count | Treatment |
| --- | ---: | --- |
| Supplied style references | 118 | All retained in `koroshiSs26ReferenceInventory` |
| Public verified styles | 109 | Static product routes with a locally stored, optimized representative product export |
| Internal review | 9 | Preserved in inventory; not publicly categorized or routed |
| New optimized local product exports | 108 | WebP, capped at 1600 × 2000px, generated from exact `TRABAJO HD` product exports |
| Previously verified official Koroshi product exports | 2 views of `2611MC00` | Retained as local `official-brand-source` media |

All new SS26 product exports come from exact folders and direct product-export files under:

`/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/<style-code>/`

The current official Koroshi catalogue was searched normally using its public product endpoints. The historic SS26 style codes were not available as current public product records, so no product name, official category or product URL is invented in the public catalogue. Where title/category evidence is unavailable, the UI uses a descriptive garment kind and labels the classification as verified local product evidence.

## Public SS26 categories

| Category | Verified styles |
| --- | ---: |
| Shirts | 8 |
| T-Shirts | 37 |
| Sleeveless T-Shirts | 21 |
| Polo Shirts | 4 |
| Sweatshirts | 15 |
| Underwear | 2 |
| Swimwear | 13 |
| Accessories (caps, socks, backpack) | 9 |

The available product evidence confirms that the `2613HA` group contains caps and `2611ZT` contains socks. No belts category is published. `2611PS12` is a trousers reference and stays internal by instruction.

## Internal-review SS26 references

- `2611PC28-2`: retained source folder shares an export name with `2611PC28`; the distinct product identity is unresolved.
- `2611PS12`: exact trousers reference, deliberately excluded from this personal selection.
- `2611UN05`, `2611WA11`, `2611WA23`: exact folders exist but no clean direct product export was available for a public image.
- `2611ZT03`, `2611ZT05`, `2611ZT06`, `2611ZT07`: exact folders exist but available direct exports are too limited in quality for public publication.

To publish any of these later, provide a clean, exact product image (preferably a 1600px+ JPG/PNG/TIFF export) and, where relevant, confirmation of the correct distinct style identity.

## Current public route map

- **Koroshi:** `/work/koroshi` → `/work/koroshi/menswear` → `/work/koroshi/menswear/ss26` → category → product.
- **Desigual:** existing Man and Woman hierarchy remains unchanged pending a dedicated later milestone.
- **Legacy Koroshi category URLs:** static compatibility pages link into the SS26 catalogue; they no longer surface AW work.
- **Flasheros:** route, data, cached cover and content are preserved but temporarily unpublished. It is absent from the home hierarchy, selected work, archive and sitemap.

The two home-brand logos are locally stored authentic assets from the official Koroshi and Desigual sites. Product media is not permanently hotlinked. Raw masters remain outside the repository.
