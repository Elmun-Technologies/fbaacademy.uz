#!/usr/bin/env node
/**
 * Generates `.webp` next to each `.jpg` under `client/public/media/**`
 * (resize + compress). Run after adding or changing certificate/teacher photos:
 *   npm run optimize:media
 */
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "client", "public", "media");

const maxWidth = { certificates: 1400, teachers: 560 };

for (const sub of ["certificates", "teachers"]) {
  const dir = path.join(root, sub);
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.warn("skip (missing):", dir);
    continue;
  }

  for (const file of files) {
    if (!/\.jpe?g$/i.test(file) || file.startsWith(".")) continue;
    const full = path.join(dir, file);
    const webpPath = full.replace(/\.jpe?g$/i, ".webp");
    await sharp(full)
      .rotate()
      .resize({ width: maxWidth[sub], withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(webpPath);
    console.log("ok", path.relative(path.join(__dirname, ".."), webpPath));
  }
}

console.log("optimize:media done");
