# OpenMCP Icon Generator

自动将 SVG 图标转换为带圆角的 PNG 格式，并同步到项目中的所有相关位置。

## 功能

- 将 SVG 转换为 PNG（带圆角效果）
- 自动生成多种尺寸的 favicon
- 自动复制到所有项目位置

## 支持的图标

| 源文件 | 输出位置 |
|--------|----------|
| `images/icons/openmcp.svg` | `images/openmcp.png`, `ja/images/openmcp.png`, `zh/images/openmcp.png`, `../openmcp-client/*/openmcp.png` |
| `images/favicon.svg` | `../openmcp-client/*/favicon.png` |
| `images/icons/openmcp-sdk.svg` | 临时生成（供手动复制） |
| `images/icons/openmcp-edge.svg` | 临时生成（供手动复制） |

## 使用方法

### 安装依赖

```bash
cd openmcp-document
npm install
```

### 生成图标

```bash
npm run generate-icons
# 或简写
npm run icons
```

### 手动运行脚本

```bash
node scripts/generate-icons.mjs
```

## 配置

编辑 `scripts/generate-icons.mjs` 中的 `CONFIG` 对象：

```javascript
const CONFIG = {
  // 圆角半径（图片尺寸的百分比）
  cornerRadius: 0.15,  // 15%
  
  // 输出尺寸
  sizes: {
    favicon: [16, 32, 64, 128, 180, 192, 512],
    icon: [32, 64, 128, 256, 512, 1024]
  }
};
```

## 颜色主题

确保 SVG 源文件使用正确的蓝色主题色：
- 主色：`#6366f1` (靛蓝)
- 浅色：`#818cf8` (浅靛蓝)
