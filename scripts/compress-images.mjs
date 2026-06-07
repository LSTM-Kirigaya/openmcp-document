#!/usr/bin/env node
/**
 * Image Compression & WebP Converter
 *
 * Scans specified image directories, compresses images to WebP format,
 * optionally updates file references in source files, and reports size savings.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default configuration
const CONFIG = {
  // Target directories (relative to openmcp-document root)
  targetDirs: ['images/blog-poster'],
  // Supported input formats
  formats: ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp'],
  // WebP quality (1-100)
  quality: 85,
  // Maximum width in pixels (0 = no limit)
  maxWidth: 1200,
  // Maximum height in pixels (0 = no limit)
  maxHeight: 0,
  // Whether to delete original files after conversion
  deleteOriginal: false,
  // Whether to auto-update references in source files
  updateReferences: true,
  // Directories/files to scan for references to update
  refScanDirs: ['.vitepress', 'blog', 'zh', 'ja', 'en'],
  // File extensions to scan for references
  refScanExts: ['.vue', '.md', '.ts', '.tsx', '.js', '.jsx', '.html', '.css', '.scss'],
};

// Parse CLI arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--quality':
      case '-q':
        options.quality = parseInt(args[++i], 10);
        break;
      case '--max-width':
      case '-w':
        options.maxWidth = parseInt(args[++i], 10);
        break;
      case '--max-height':
      case '-h':
        options.maxHeight = parseInt(args[++i], 10);
        break;
      case '--delete-original':
      case '-d':
        options.deleteOriginal = true;
        break;
      case '--no-update-refs':
        options.updateReferences = false;
        break;
      case '--dir':
        options.targetDirs = [args[++i]];
        break;
      case '--help':
      case '-H':
        showHelp();
        process.exit(0);
        break;
    }
  }
  
  return { ...CONFIG, ...options };
}

function showHelp() {
  console.log(chalk.bold.cyan('Image Compression & WebP Converter\n'));
  console.log('Usage: node compress-images.mjs [options]\n');
  console.log('Options:');
  console.log('  --dir <path>         Target directory (default: images/blog-poster)');
  console.log('  --quality, -q <n>    WebP quality 1-100 (default: 85)');
  console.log('  --max-width, -w <n>  Max width in pixels (default: 1200)');
  console.log('  --max-height, -h <n> Max height in pixels (default: 0 = no limit)');
  console.log('  --delete-original, -d  Delete original files after conversion');
  console.log('  --no-update-refs     Skip updating file references in source files');
  console.log('  --help, -H           Show this help message\n');
  console.log('Examples:');
  console.log('  node compress-images.mjs');
  console.log('  node compress-images.mjs -q 80 -w 1000 --delete-original');
  console.log('  node compress-images.mjs --dir images/screenshots -q 90');
}

// Check and install sharp if needed
async function getSharp() {
  try {
    const { default: sharp } = await import('sharp');
    return sharp;
  } catch (e) {
    console.log(chalk.yellow('sharp not found. Installing...'));
    try {
      execSync('npm install sharp --save-dev', {
        cwd: path.dirname(__dirname),
        stdio: 'inherit'
      });
      const { default: sharp } = await import('sharp');
      return sharp;
    } catch (error) {
      console.error(chalk.red('Failed to install sharp. Please run: npm install sharp --save-dev'));
      process.exit(1);
    }
  }
}

// Format bytes to human readable
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Get all image files in a directory
function getImageFiles(dirPath, formats) {
  const files = [];
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (formats.includes(ext) && ext !== '.webp') {
        files.push({
          name: item,
          path: fullPath,
          ext,
          size: stat.size
        });
      }
    }
  }
  
  return files;
}

// Process a single image
async function processImage(sharp, imageFile, config, baseDir) {
  const { quality, maxWidth, maxHeight } = config;
  const outputName = path.basename(imageFile.name, imageFile.ext) + '.webp';
  const outputPath = path.join(path.dirname(imageFile.path), outputName);
  
  // Skip if WebP already exists and is newer
  if (fs.existsSync(outputPath)) {
    const webpStat = fs.statSync(outputPath);
    const origStat = fs.statSync(imageFile.path);
    if (webpStat.mtime > origStat.mtime) {
      console.log(chalk.yellow(`  ⏭  Skipped (up-to-date): ${outputName}`));
      return null;
    }
  }
  
  let pipeline = sharp(imageFile.path);
  
  // Get metadata to check dimensions
  const metadata = await pipeline.metadata();
  
  // Resize if needed
  const resizeOptions = {};
  if (maxWidth > 0) resizeOptions.width = maxWidth;
  if (maxHeight > 0) resizeOptions.height = maxHeight;
  
  if (maxWidth > 0 || maxHeight > 0) {
    resizeOptions.fit = 'inside';
    resizeOptions.withoutEnlargement = true;
    pipeline = pipeline.resize(resizeOptions);
  }
  
  // Convert to WebP
  await pipeline.webp({ quality, effort: 6 }).toFile(outputPath);
  
  const newSize = fs.statSync(outputPath).size;
  const savings = imageFile.size - newSize;
  const savingsPercent = ((savings / imageFile.size) * 100).toFixed(1);
  
  const dimensions = maxWidth > 0 && metadata.width > maxWidth
    ? ` (resized from ${metadata.width}x${metadata.height})`
    : ` (${metadata.width}x${metadata.height})`;
  
  console.log(
    chalk.green(`  ✓ ${outputName}`) +
    chalk.gray(`${dimensions}`) +
    chalk.cyan(`  ${formatBytes(imageFile.size)} → ${formatBytes(newSize)}`) +
    chalk.green(`  (-${savingsPercent}%)`)
  );
  
  return {
    original: imageFile,
    webp: { path: outputPath, size: newSize },
    savings,
    savingsPercent: parseFloat(savingsPercent)
  };
}

// Update references in source files
function updateReferences(config, conversions, baseDir) {
  if (!config.updateReferences || conversions.length === 0) return;
  
  console.log(chalk.yellow('\nUpdating file references...'));
  
  const updatedFiles = new Set();
  
  for (const conv of conversions) {
    const origName = conv.original.name;
    const webpName = path.basename(conv.webp.path);
    
    // Build search patterns
    const patterns = [
      origName,                          // exact filename
      encodeURIComponent(origName),      // URL encoded
    ];
    
    for (const scanDir of config.refScanDirs) {
      const fullScanDir = path.join(baseDir, scanDir);
      if (!fs.existsSync(fullScanDir)) continue;
      
      scanDirectory(fullScanDir, config.refScanExts, (filePath, content) => {
        let newContent = content;
        let changed = false;
        
        for (const pattern of patterns) {
          if (newContent.includes(pattern)) {
            // Replace only the filename part, preserving path
            const regex = new RegExp(
              pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
              'g'
            );
            newContent = newContent.replace(regex, webpName);
            changed = true;
          }
        }
        
        if (changed) {
          fs.writeFileSync(filePath, newContent, 'utf8');
          updatedFiles.add(filePath);
        }
      });
    }
  }
  
  if (updatedFiles.size > 0) {
    console.log(chalk.green(`  ✓ Updated ${updatedFiles.size} file(s)`));
    for (const file of updatedFiles) {
      console.log(chalk.gray(`    - ${path.relative(baseDir, file)}`));
    }
  } else {
    console.log(chalk.gray('  No references needed updating'));
  }
}

// Recursively scan directory for files with specific extensions
function scanDirectory(dir, exts, callback) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip common ignore dirs
      if (['node_modules', '.git', '.vitepress/dist', '.vitepress/cache', 'scripts'].includes(item)) {
        continue;
      }
      scanDirectory(fullPath, exts, callback);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (exts.includes(ext)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        callback(fullPath, content);
      }
    }
  }
}

// Main execution
async function main() {
  const config = parseArgs();
  const baseDir = path.dirname(__dirname);
  
  console.log(chalk.bold.cyan('\n🖼️  Image Compression & WebP Converter\n'));
  console.log(chalk.gray(`Quality: ${config.quality}% | Max Width: ${config.maxWidth || 'unlimited'} | Delete Original: ${config.deleteOriginal} | Update Refs: ${config.updateReferences}\n`));
  
  const sharp = await getSharp();
  const allConversions = [];
  let totalOriginal = 0;
  let totalNew = 0;
  let processedCount = 0;
  let skippedCount = 0;
  
  for (const targetDir of config.targetDirs) {
    const fullDir = path.join(baseDir, targetDir);
    
    if (!fs.existsSync(fullDir)) {
      console.log(chalk.yellow(`⚠️  Directory not found: ${targetDir}`));
      continue;
    }
    
    console.log(chalk.bold.blue(`\n📁 ${targetDir}`));
    console.log(chalk.gray('─'.repeat(60)));
    
    const imageFiles = getImageFiles(fullDir, config.formats);
    
    if (imageFiles.length === 0) {
      console.log(chalk.gray('  No images found'));
      continue;
    }
    
    console.log(chalk.gray(`  Found ${imageFiles.length} image(s)\n`));
    
    for (const imageFile of imageFiles) {
      const result = await processImage(sharp, imageFile, config, baseDir);
      if (result) {
        allConversions.push(result);
        totalOriginal += result.original.size;
        totalNew += result.webp.size;
        processedCount++;
        
        // Delete original if requested
        if (config.deleteOriginal) {
          fs.unlinkSync(result.original.path);
          console.log(chalk.red(`    🗑  Deleted original: ${result.original.name}`));
        }
      } else {
        skippedCount++;
      }
    }
  }
  
  // Update references
  if (config.updateReferences) {
    updateReferences(config, allConversions, baseDir);
  }
  
  // Summary
  console.log(chalk.bold.cyan('\n\n📊 Summary'));
  console.log(chalk.gray('═'.repeat(60)));
  console.log(`  Processed:     ${chalk.green(processedCount)} image(s)`);
  if (skippedCount > 0) {
    console.log(`  Skipped:       ${chalk.yellow(skippedCount)} image(s) (up-to-date)`);
  }
  
  if (totalOriginal > 0) {
    const totalSavings = totalOriginal - totalNew;
    const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);
    console.log(`\n  Total Size:`);
    console.log(`    Before:      ${chalk.yellow(formatBytes(totalOriginal))}`);
    console.log(`    After:       ${chalk.green(formatBytes(totalNew))}`);
    console.log(`    Savings:     ${chalk.bold.green(formatBytes(totalSavings))} (${totalSavingsPercent}%)`);
  }
  
  console.log(chalk.gray('═'.repeat(60)));
  console.log(chalk.bold.green('\n✅ Done!\n'));
}

// Error handling
process.on('unhandledRejection', (error) => {
  console.error(chalk.red(`\n❌ Error: ${error.message}`));
  console.error(error.stack);
  process.exit(1);
});

main();
