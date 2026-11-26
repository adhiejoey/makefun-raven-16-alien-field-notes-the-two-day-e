// Alien Field Notes: The Two Day Earth Review
// Writes a single original one-line alien tourist review of Earth to entry.txt.
// Node 22+ stdlib only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: an alien tourist's two-day verdict on Earth.
// Angle: humans read personalities from birth months (astrology) while never
// asking where the visitor is actually from. One joke, punch at the end.
const ENTRY =
  "Two days in: nobody asked which galaxy I'm from, but three strangers read my personality off the month I was born. 4/5 stars, would abduct again.";

// The gate allows 1 to 200 characters; refuse to write an entry that fails it.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`Entry is ${[...ENTRY].length} chars; must be 1-200.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${[...ENTRY].length} chars) to ${outDir}`);
