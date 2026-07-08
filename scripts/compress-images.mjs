import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "fs";
import path from "path";

const inputDir = "./public/images";
const outputDir = "./public/images/optimized";

mkdirSync(outputDir, { recursive: true });

function walk(dir) {
  readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      if (fullPath.includes("optimized")) return;
      walk(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const relPath = path.relative(inputDir, fullPath);
      const outPath = path.join(outputDir, relPath).replace(/\.(jpe?g|png)$/i, ".webp");
      mkdirSync(path.dirname(outPath), { recursive: true });

      sharp(fullPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outPath)
        .then(() => console.log(`OK ${relPath} -> ${outPath}`))
        .catch((err) => console.error(`FAIL ${relPath}`, err));
    }
  });
}

walk(inputDir);
