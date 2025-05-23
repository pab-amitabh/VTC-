#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️  Optimizing images...\n');

  const publicDir = path.join(process.cwd(), 'public');
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  
  if (!fs.existsSync(publicDir)) {
    console.log('❌ Public directory not found');
    return;
  }

  const images = [];
  
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.lstatSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        const size = stat.size;
        if (size > 300 * 1024) { // > 300KB
          images.push({ filePath, size, name: file });
        }
      }
    });
  }
  
  findImages(publicDir);
  
  console.log(`Found ${images.length} large images to optimize:\n`);
  
  for (const image of images) {
    try {
      const originalSize = (image.size / 1024 / 1024).toFixed(2);
      console.log(`Optimizing ${image.name} (${originalSize}MB)...`);
      
      const inputPath = image.filePath;
      const parsedPath = path.parse(inputPath);
      const outputPath = path.join(parsedPath.dir, `${parsedPath.name}-optimized${parsedPath.ext}`);
      const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
      
      // Create optimized version
      await sharp(inputPath)
        .resize(1920, 1920, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ quality: 80, progressive: true })
        .png({ quality: 80, compressionLevel: 8 })
        .toFile(outputPath);
      
      // Create WebP version
      await sharp(inputPath)
        .resize(1920, 1920, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      const optimizedSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
      const webpSize = (fs.statSync(webpPath).size / 1024 / 1024).toFixed(2);
      const savings = ((1 - fs.statSync(outputPath).size / image.size) * 100).toFixed(1);
      
      console.log(`  ✅ Original: ${originalSize}MB → Optimized: ${optimizedSize}MB → WebP: ${webpSize}MB (${savings}% savings)\n`);
      
    } catch (error) {
      console.log(`  ❌ Failed to optimize ${image.name}: ${error.message}\n`);
    }
  }
  
  console.log('🎉 Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Replace original images with optimized versions');
  console.log('2. Update Next.js Image components to use WebP format');
  console.log('3. Consider using next/image with automatic optimization');
}

if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages }; 