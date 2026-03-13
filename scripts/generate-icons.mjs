#!/usr/bin/env node
/**
 * SVG to PNG Converter with Rounded Corners
 * 
 * This script converts SVG files to PNG with rounded corners,
 * then copies them to all relevant locations in the project.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Source SVG files (relative to openmcp-document)
  sources: {
    openmcp: 'images/icons/openmcp.svg',
    favicon: 'images/favicon.svg',
    'openmcp-sdk': 'images/icons/openmcp-sdk.svg',
    'openmcp-edge': 'images/icons/openmcp-edge.svg'
  },
  
  // Output sizes for different use cases
  sizes: {
    favicon: [16, 32, 64, 128, 180, 192, 512],
    icon: [32, 64, 128, 256, 512, 1024],
    logo: [128, 256, 512, 1024]
  },
  
  // Rounded corner radius (percentage of image size)
  cornerRadius: 0.15, // 15% for circular/rounded icons
  
  // Target locations to copy generated PNGs
  targets: {
    openmcp: [
      '../openmcp-client/renderer/public/images/openmcp.png',
      '../openmcp-client/resources/openmcp-sdk-release/icons/openmcp.png',
      '../openmcp-client/software/openmcp-sdk/renderer/images/openmcp.png',
      '../openmcp-client/openmcp-sdk/renderer/images/openmcp.png',
      '../openmcp-client/openmcp-sdk/icons/openmcp.png',
      '../openmcp-client/icons/openmcp.png',
      'images/openmcp.png',
      'ja/images/openmcp.png',
      'zh/images/openmcp.png'
    ],
    favicon: [
      '../openmcp-client/renderer/public/favicon.png',
      '../openmcp-client/software/openmcp-sdk/renderer/favicon.png',
      '../openmcp-client/openmcp-sdk/renderer/favicon.png'
    ],
    'openmcp-sdk': [
      // SDK icons are typically the same as openmcp
    ],
    'openmcp-edge': [
      // Edge specific locations
    ]
  }
};

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Check if sharp is installed
async function checkSharp() {
  try {
    const sharp = await import('sharp');
    return sharp.default;
  } catch (e) {
    return null;
  }
}

// Install sharp if needed
async function installSharp() {
  log('Sharp not found. Installing...', 'yellow');
  try {
    execSync('npm install sharp --save-dev', { 
      cwd: path.dirname(__dirname),
      stdio: 'inherit'
    });
    log('Sharp installed successfully!', 'green');
    const sharp = await import('sharp');
    return sharp.default;
  } catch (error) {
    log('Failed to install sharp. Please run: npm install sharp --save-dev', 'red');
    process.exit(1);
  }
}

// Convert SVG to PNG with rounded corners
async function convertSvgToPng(sharp, svgPath, outputPath, size, radius) {
  // Calculate corner radius in pixels
  const cornerRadius = Math.round(size * radius);
  
  // Create a rounded rectangle mask
  const mask = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect x="0" y="0" width="${size}" height="${size}" 
            rx="${cornerRadius}" ry="${cornerRadius}" fill="white"/>
    </svg>
  `);

  await sharp(svgPath)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .composite([{
      input: mask,
      blend: 'dest-in'
    }])
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      force: true
    })
    .toFile(outputPath);
}

// Copy file to multiple destinations
async function copyToDestinations(sourcePath, destinations) {
  const baseDir = path.dirname(__dirname);
  
  for (const dest of destinations) {
    const destPath = path.join(baseDir, dest);
    const destDir = path.dirname(destPath);
    
    // Ensure directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Copy file
    fs.copyFileSync(sourcePath, destPath);
    log(`  Copied to: ${dest}`, 'cyan');
  }
}

// Generate icons for a specific source
async function generateIconSet(sharp, name, sourcePath, targets) {
  log(`\n${'='.repeat(50)}`, 'blue');
  log(`Processing: ${name}`, 'blue');
  log(`${'='.repeat(50)}`, 'blue');
  
  const baseDir = path.dirname(__dirname);
  const fullSourcePath = path.join(baseDir, sourcePath);
  
  if (!fs.existsSync(fullSourcePath)) {
    log(`Source not found: ${sourcePath}`, 'red');
    return;
  }
  
  // Create temp output directory
  const tempDir = path.join(baseDir, '.temp-icons');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  // Determine sizes based on icon type
  let sizes = CONFIG.sizes.icon;
  if (name === 'favicon') sizes = CONFIG.sizes.favicon;
  
  // Generate PNGs at different sizes
  const generatedFiles = [];
  const mainSize = 512; // Primary size for most use cases
  
  log(`Converting SVG to PNG (${mainSize}x${mainSize}) with rounded corners...`, 'yellow');
  
  const outputPath = path.join(tempDir, `${name}-${mainSize}.png`);
  await convertSvgToPng(sharp, fullSourcePath, outputPath, mainSize, CONFIG.cornerRadius);
  generatedFiles.push(outputPath);
  
  log(`Generated: ${outputPath}`, 'green');
  
  // Copy to all target locations
  if (targets && targets.length > 0) {
    log(`Copying to ${targets.length} location(s)...`, 'yellow');
    await copyToDestinations(outputPath, targets);
  }
  
  // Generate favicon sizes if this is a favicon
  if (name === 'favicon') {
    log('Generating favicon sizes...', 'yellow');
    for (const size of CONFIG.sizes.favicon) {
      if (size === mainSize) continue;
      const sizePath = path.join(tempDir, `favicon-${size}.png`);
      await convertSvgToPng(sharp, fullSourcePath, sizePath, size, CONFIG.cornerRadius);
      generatedFiles.push(sizePath);
    }
  }
  
  // Clean up temp files after successful generation
  fs.rmSync(tempDir, { recursive: true, force: true });
  
  log(`✓ ${name} generation complete!`, 'green');
}

// Main execution
async function main() {
  log(`${'='.repeat(60)}`, 'green');
  log('  OpenMCP Icon Generator', 'green');
  log('  Converts SVG to PNG with rounded corners', 'green');
  log(`${'='.repeat(60)}`, 'green');
  
  const sharp = await checkSharp() || await installSharp();
  
  // Process each source
  for (const [name, sourcePath] of Object.entries(CONFIG.sources)) {
    const targets = CONFIG.targets[name] || [];
    await generateIconSet(sharp, name, sourcePath, targets);
  }
  
  log(`\n${'='.repeat(60)}`, 'green');
  log('  All icons generated successfully!', 'green');
  log(`${'='.repeat(60)}`, 'green');
}

// Handle errors
process.on('unhandledRejection', (error) => {
  log(`\nError: ${error.message}`, 'red');
  process.exit(1);
});

// Run
main();
