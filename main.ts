// A working news-image-20261120 entry (Node 22, standard library only): the image
// is the entry.png beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied.
//
// After copying, the program reads the written file back and compares its bytes
// with entry.png, so a truncated or corrupted copy fails loudly (non-zero exit)
// instead of silently reaching the judge. The error reports both byte counts
// (expected vs actually written) so a mismatch is diagnosable at a glance.
// The entry image itself is a whole PNG, 1024 by 1024 pixels and 277 KB, inside
// the gate's limits of at most 1 MiB and at most 1024 by 1024 pixels.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The entry is the image beside this file; the judge sees exactly these bytes.
// It was drawn in code for Friday 20 November 2026 (see README for the stories).
const source = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);

// Verify the copy byte-for-byte: the judge must see exactly the entry bytes.
const expected = readFileSync(source);
const actual = readFileSync(dest);
if (!expected.equals(actual)) {
  throw new Error(
    `entry.png copy mismatch: expected ${expected.length} bytes, wrote ${actual.length} bytes`,
  );
}
