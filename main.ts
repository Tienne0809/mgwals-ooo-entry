import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Out of office until Monday. A printed flowchart is covering for me — please type slowly and lower your expectations. I'll be back once my fans stop spinning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
