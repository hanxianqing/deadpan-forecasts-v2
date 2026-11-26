import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan Forecasts for Cities That Do Not Exist: one line, at most 160 characters.
// Fresh angle: the forecast is delivered straight, but the weather itself
// behaves like a commuter — rain falls the wrong way up, and the morning fog
// is a late train that never apologises. Drowsford is invented; the numbers
// (6 mm, high of 12, 7 a.m., 40 minutes late) make it sound like a real bulletin.
const LINE =
  "In Drowsford, expect 6 mm of rain falling strictly upwards, a high of 12, and the 7 a.m. fog, running 40 minutes late with no apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–160 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} characters)`);
