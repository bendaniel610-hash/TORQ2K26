import { Jimp } from 'jimp';
import path from 'path';

async function processImage(filename) {
  const inputPath = path.join('src', 'assets', filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);
  const outputPath = path.join('src', 'assets', `${baseName.toLowerCase()}.png`);

  console.log(`Processing ${inputPath} -> ${outputPath}...`);
  const image = await Jimp.read(inputPath);
  
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const data = image.bitmap.data; // Buffer of RGBA values

  // Flood fill algorithm to convert white background to transparent.
  // We will start queue with pixels along the borders:
  // - Top & bottom edges (y = 0, y = height - 1)
  // - Left & right edges (x = 0, x = width - 1)
  const queue = [];
  const visited = new Set();

  function getIndex(x, y) {
    return (y * width + x) * 4;
  }

  function getPixelKey(x, y) {
    return `${x},${y}`;
  }

  // Push border pixels
  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
    visited.add(getPixelKey(x, 0));
    visited.add(getPixelKey(x, height - 1));
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
    visited.add(getPixelKey(0, y));
    visited.add(getPixelKey(width - 1, y));
  }

  // White threshold (RGB all > 220)
  // Let's make it a bit generous to capture near-white artifacts/shadows
  const threshold = 220;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const idx = getIndex(x, y);
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // If it's near-white, make it transparent and enqueue its neighbors
    if (r > threshold && g > threshold && b > threshold) {
      data[idx + 3] = 0; // Set Alpha to transparent

      // Check 4-way neighbors
      const neighbors = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const key = getPixelKey(nx, ny);
          if (!visited.has(key)) {
            visited.add(key);
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // For sp6, convert dark text to white so it's visible on a dark background
  if (baseName.toLowerCase() === 'sp6') {
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] === 0) continue; // Skip transparent background
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r < 100 && g < 100 && b < 100) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      }
    }
  }

  // Save as PNG
  await image.write(outputPath);
  console.log(`Saved ${outputPath}`);
}

async function main() {
  const logos = [
    'sp1.jpeg',
    'sp2.PNG',
    'sp3.jpeg',
    'sp4.PNG',
    'sp5.jpeg',
    'sp6.jpeg'
  ];
  for (const logo of logos) {
    try {
      await processImage(logo);
    } catch (err) {
      console.error(`Error processing ${logo}:`, err);
    }
  }
}

main();
