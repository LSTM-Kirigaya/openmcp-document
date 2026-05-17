#!/bin/bash

set -e

echo "🚀 开始部署 openmcp-document..."

# 进入脚本所在目录
cd "$(dirname "$0")"

# 1. 本地压缩 dist 目录
echo "📦 打包 .vitepress/dist 目录..."
COPYFILE_DISABLE=1 tar -czf dist.tar.gz -C .vitepress/dist .

# 2. scp 上传到服务器临时目录
echo "📤 上传压缩包到服务器..."
scp dist.tar.gz ubuntu@kirigaya.cn:/tmp/openmcp-document-dist.tar.gz

# 3. 在服务器上解压、替换、清理
echo "🛠️  服务器端解压部署..."
ssh ubuntu@kirigaya.cn '
    set -e
    TARGET_DIR=~/website/openmcp
    
    # 清空目标目录
    echo "🧹 清理旧文件..."
    rm -rf "$TARGET_DIR"/*
    
    # 解压到目标目录
    echo "📂 解压新文件..."
    tar -xzf /tmp/openmcp-document-dist.tar.gz -C "$TARGET_DIR"
    
    # 清理 macOS 资源分叉文件
    echo "🧹 清理 macOS 资源分叉文件..."
    find "$TARGET_DIR" -name "._*" -delete
    
    # 删除服务器上的临时压缩包
    echo "🗑️  删除服务器临时文件..."
    rm -f /tmp/openmcp-document-dist.tar.gz
    
    echo "✅ 服务器端部署完成！"
'

# 4. 清理本地临时压缩包
echo "🧹 清理本地临时文件..."
rm -f dist.tar.gz

echo "🎉 openmcp-document 部署成功！"
