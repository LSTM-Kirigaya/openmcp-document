const fs = require('fs');
const path = require('path');

// 要排除的文件夹
const excludedDirs = ['node_modules', '.vitepress', '.openmcp', 'scripts'];

// 递归搜索图片文件夹
function findImageDirs(rootDir, currentDir = '', results = []) {
  const fullPath = path.join(rootDir, currentDir);
  const items = fs.readdirSync(fullPath);

  for (const item of items) {
    const itemPath = path.join(currentDir, item);
    const fullItemPath = path.join(rootDir, itemPath);
    const stat = fs.statSync(fullItemPath);

    if (stat.isDirectory()) {
      if (item === 'image' || item === 'images') {
        results.push(itemPath);
      } else if (!excludedDirs.includes(item)) {
        findImageDirs(rootDir, itemPath, results);
      }
    }
  }

  return results;
}

// 复制文件夹
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 主函数
function main() {
  const workspaceDir = path.join(__dirname, '..');
  const distDir = path.join(workspaceDir, '.vitepress', 'dist');
  
  // 查找所有图片文件夹
  const imageDirs = findImageDirs(workspaceDir);
  
  // 复制到目标目录
  for (const dir of imageDirs) {
    const src = path.join(workspaceDir, dir);
    const dest = path.join(distDir, dir);
    console.log(`Copying ${dir} to ${dest}`);
    copyDir(src, dest);
  }
  
  console.log('Done!');
}

main();