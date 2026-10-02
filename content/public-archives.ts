import type { MediaAsset } from "./projects";
import {
  desigualManBehanceMedia,
  desigualWomanBehanceMedia,
  fashionPrintsBehanceMedia,
  rapportPrintsBehanceMedia,
} from "./behance-archive-media";

function interleave(...groups: MediaAsset[][]) {
  const output: MediaAsset[] = [];
  const largestGroup = Math.max(...groups.map((group) => group.length));
  for (let index = 0; index < largestGroup; index += 1) {
    for (const group of groups) {
      if (group[index]) output.push(group[index]);
    }
  }
  return output;
}

// Full public Behance image sets, cached locally and kept as temporary sources.
export const desigualArchiveMedia = interleave(desigualManBehanceMedia, desigualWomanBehanceMedia);
// Every print currently in the portfolio originates from the Desigual Behance
// projects. Keeping this name explicit makes the parallel Koroshi archive safe
// to populate later without moving or relabelling existing work.
export const desigualPrintsArchiveMedia = interleave(fashionPrintsBehanceMedia, rapportPrintsBehanceMedia);
