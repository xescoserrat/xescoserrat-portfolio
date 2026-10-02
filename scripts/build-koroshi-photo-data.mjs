import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

const records = JSON.parse(await readFile("content/koroshi-archive.json", "utf8"));

function groupFor(record) {
  const title = record.official.title.toLowerCase();
  const kind = record.code.slice(4, 6);
  if (/chaqueta|cazadora|abrigo|chaleco|sobrecamisa|jacket|coat|vest|overshirt/.test(title) || kind === "JA") return "outerwear";
  if (/camiseta|camisa|sudadera|jersey|polo|shirt|sweat|knit|pullover/.test(title) || /^(MC|ML|MS|SU|TR|CC|CL|PC)$/.test(kind)) return "tops";
  return "accessories-swimwear";
}

const photos = records
  .filter((record) => record.season === "ss26" || record.season === "aw26-27")
  .filter((record) => record.official && existsSync(`public${record.official.image}`))
  .map((record) => ({
    code: record.code,
    season: record.season,
    group: groupFor(record),
    ...record.official,
  }));

await writeFile("content/koroshi-photos.json", `${JSON.stringify(photos, null, 2)}\n`);
console.log(`Wrote ${photos.length} official Koroshi photo records.`);
