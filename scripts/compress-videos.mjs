import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import { readdirSync, mkdirSync, statSync } from "fs";
import path from "path";
import os from "os";

ffmpeg.setFfmpegPath(ffmpegPath);

const inputDir = "./public";
const outputDir = "./public/optimized";
mkdirSync(outputDir, { recursive: true });

const videoFiles = readdirSync(inputDir).filter((f) => /\.mp4$/i.test(f));
console.log(`Found ${videoFiles.length} video(s): ${videoFiles.join(", ")}\n`);

function compressOne(file) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const originalSize = statSync(inputPath).size;

    ffmpeg(inputPath)
      .videoCodec("libx265")
      .outputOptions([
        "-crf 32",
        "-preset medium",
        "-tag:v hvc1",
        "-vf scale=960:-2",
        "-r 24",
        "-movflags +faststart",
      ])
      .noAudio()
      .on("end", () => {
        const newSize = statSync(outputPath).size;
        const savedPct = (((originalSize - newSize) / originalSize) * 100).toFixed(0);
        console.log(
          `OK  ${file}  (${(originalSize / 1024 / 1024).toFixed(1)}MB -> ${(newSize / 1024 / 1024).toFixed(1)}MB, -${savedPct}%)`
        );
        resolve();
      })
      .on("error", (err) => {
        console.error(`FAIL ${file}:`, err.message);
        reject(err);
      })
      .save(outputPath);
  });
}

async function runWithConcurrency(items, limit, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]).catch((e) => e);
    }
  }
  const workers = Array(Math.min(limit, items.length)).fill(0).map(worker);
  await Promise.all(workers);
  return results;
}

const concurrency = Math.max(1, os.cpus().length - 1);
await runWithConcurrency(videoFiles, concurrency, compressOne);

console.log("\nDone. Compressed videos are in ./public/optimized/");