# Internal media map

`content/media-inventory.ts` is the structured source of truth for every public and retained legacy asset. It records source, brand, division, garment type, creative discipline, category, season, provenance type, confidence, current route, proposed route and publication status. Do not assign an asset to a brand or division in a route without first updating that file.

## Audit result

| Group | Inventory IDs | Count | Public treatment | Source status |
| --- | --- | ---: | --- | --- |
| Koroshi menswear | `K-01`–`K-21` | 21 | Four verified category galleries | 9 local-original, 5 official-brand-source, 7 Behance-temporary |
| Desigual Man | `DM-01`–`DM-08` | 8 | Sweatshirts & Knitwear; Shirts & Outerwear | Behance-temporary; `DM-05` remains legacy-only |
| Desigual Woman | `DW-01`–`DW-08` | 8 | Dresses; Blouses & Tops | Behance-temporary; `DW-08` remains legacy-only |
| Fashion Prints | `FP-01`–`FP-07` | 7 | Independent Print Archive and preserved legacy route | Behance-temporary; brand attribution under review |
| Rapport Fashion Prints | `RP-01`–`RP-07` | 7 | Independent Print Archive and preserved legacy route | Behance-temporary; brand attribution under review |
| Flasheros | `FL-01` | 1 | Final photography / personal-project chapter | Cached Behance-temporary cover |

**Total:** 52 images, up from the previous 39-image project record. No image is duplicated merely to increase page length; an asset can appear in more than one relevant Koroshi category where it documents both product and process.

## Confirmed Koroshi sources

The following exact source relationships were visually verified before exporting local web assets:

- `K-09`–`K-10`: model `2611MC00`; original technical source: `/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/2611MC00/2611MC00 SKETCH.pdf`; public product images are stored as optimized WebP copies and marked `official-brand-source`.
- `K-11`–`K-14`: model `2611MS47`; original artwork source: `/Volumes/TRABAJO HD/MUESTRARIO XESCO SS26/2611MS47/2611MS47 ARTWORKS.pdf`; `K-11`–`K-13` are optimized official product images and `K-14` is an optimized local artwork specification.
- `K-15`: `2611MC00` technical development sheet, exported from the same original SS26 source PDF.
- `K-16`–`K-19`: `2621TR35` AW26–27 knitwear technical source and sample photographs from `/Volumes/TRABAJO HD/MUESTRARIO AW 26-27/2621TR35/`.
- `K-20`–`K-21`: `2621JA53` AW26–27 outerwear technical source and lab-dip photograph from `/Volumes/TRABAJO HD/MUESTRARIO AW 26-27/2621JA53/`.

Raw page URLs, image URLs and source paths are held in the provenance object on the corresponding `content/projects.ts` media item. Masters are not copied into the repository; local exports are WebP, resized within 1800 × 2400 pixels and quality-optimized for the static site.

## Public route map

- **Koroshi / Menswear:** `/work/koroshi/t-shirts-sleeveless`, `/work/koroshi/knitwear`, `/work/koroshi/fashion-graphics`, `/work/koroshi/product-development`.
- **Desigual / Man:** `/work/desigual/man/sweatshirts-knitwear`, `/work/desigual/man/shirts-outerwear`.
- **Desigual / Woman:** `/work/desigual/woman/dresses`, `/work/desigual/woman/blouses-tops`.
- **Secondary only:** `/work/independent-print-archive` keeps Fashion Prints and Rapport Fashion Prints visible without assigning either one to Koroshi or Desigual.
- **Photography / Personal Project:** `/work/flasheros` remains the final top-level chapter.

The six original `/work/<slug>/` pages are retained as complete, indexable compatibility case studies. Their contextual navigation returns to their parent brand, division or secondary archive instead of treating them as equal top-level worlds.

## Deferred categories and unresolved attribution

The audit did not support public Koroshi categories for sweatshirts, trousers, shirts or accessories, nor a separate Desigual Man/Woman T-shirt, typography, labels or textile-print category. These remain absent rather than inferred from filenames or visually similar work.

`ALL PRINTS XESCO` was audited recursively, but its candidates did not provide a reliable Koroshi or Desigual / Man / Woman correspondence for the existing Fashion Prints and Rapport media. They therefore remain a clearly labelled **Independent Print Archive** rather than being attributed to a professional brand.

No exact official Desigual replacement was adopted: public search candidates were similar, not the same garment or artwork. Existing Desigual media is therefore intentionally retained as Behance-temporary.

## Flasheros recovery status

`FL-01` is the existing locally cached, non-explicit Behance cover. A recursive search of `TRABAJO HD` returned no file named or reliably associated with Flasheros. A normal public Behance page request returned a platform error, so no additional asset was downloaded or inferred.

To expand the gallery safely, provide approved original Flasheros JPG, PNG or TIFF exports (at least 2000 pixels on the long edge), their intended order and captions, plus a note identifying any image appropriate for the public home-page preview. The data model and the case-study layout can accept them without redesigning the site.
