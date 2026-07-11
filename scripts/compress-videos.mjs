import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import { readdirSync, mkdirSync, statSync } from "fs";
import path from "path";

ffmpeg.setFfmpegPath(ffmpegPath);

const inputDir = "./public";
const outputDir = "./public/optimized";

mkdirSync(outputDir, { recursive: true });

const videoFiles = readdirSync(inputDir).filter((file) => /\.mp4$/i.test(file));

console.log(`Found ${videoFiles.length} video(s): ${videoFiles.join(", ")}\n`);

function compressOne(file) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const originalSize = statSync(inputPath).size;

    ffmpeg(inputPath)
      .videoCodec("libx264")
      .outputOptions([
        "-crf 33",              // pushed up from 28 — smaller file, still fine for a background/muted video
        "-preset veryslow",     // squeezes more compression out at the same quality (slower encode, one-time cost)
        "-vf scale=1280:-2",    // downscale width to 1280px, height auto (kept even for h264 compatibility)
        "-r 24",                // cap frame rate at 24fps
        "-movflags +faststart",
      ])
      .noAudio()
      .on("end", () => {
        const newSize = statSync(outputPath).size;
        const savedPct = (((originalSize - newSize) / originalSize) * 100).toFixed(0);
        console.log(`OK  ${file}  (${(originalSize / 1024 / 1024).toFixed(1)}MB -> ${(newSize / 1024 / 1024).toFixed(1)}MB, -${savedPct}%)`);
        resolve();
      })
      .on("error", (err) => {
        console.error(`FAIL ${file}:`, err.message);
        reject(err);
      })
      .save(outputPath);
  });
}

for (const file of videoFiles) {
  await compressOne(file);
}

console.log("\nDone. Compressed videos are in ./public/optimized/");