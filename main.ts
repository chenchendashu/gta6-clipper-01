// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a public YouTube Short: a GTA VI trailer moment cut
// vertical, ending with an on-screen pitch for make.fun. This program has
// exactly one job for the grader: place this repository's VIDEO.json — the
// file naming the video's YouTube address — into the output directory.
//
// Locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for the grader's
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');

// Fail loudly rather than hand the grader an empty output: VIDEO.json must
// exist and carry a "url" string before it is copied anywhere.
let video: unknown;
try {
  video = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof (video as { url?: unknown }).url !== 'string') {
  console.error(`${source} does not carry a "url" string`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'VIDEO.json'));
