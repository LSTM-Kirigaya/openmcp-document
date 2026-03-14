# OpenMCP Document

## 📚 项目简介

本仓库是 **OpenMCP** 的官方文档网站，基于 VitePress 构建。OpenMCP 是由开发者 **LSTM-Kirigaya** 创建的开源 MCP（Model Context Protocol）客户端工具，既可以以CLI形式直接运行，也可作为 VSCode、Cursor、Trae 等编辑器的插件使用，帮助开发者快速构建、调试和部署 MCP 服务器。

## 🌟 核心特性

### 1. **一站式 MCP 开发环境**
   - **可视化调试**：无需配置复杂环境即可调试 MCP 服务器
   - **多协议支持**：支持 STDIO、SSE、Streamable HTTP 等连接方式
   - **实时交互测试**：在对话中直接测试 MCP 工具效果

### 2. **多模型集成**
   - 支持 OpenAI API 兼容的所有大模型
   - 可切换不同模型进行对比测试
   - 显示 Token 消耗和缓存命中率

### 3. **导出与部署**
   - 一键导出调试配置到生产环境
   - 提供 Node.js SDK 支持服务器部署

## 🚀 快速开始

### 1. 安装文档依赖

```bash
# 克隆仓库
git clone https://github.com/LSTM-Kirigaya/openmcp-document.git
cd openmcp-document

# 安装依赖
npm install
```

### 2. 运行文档网站

```bash
# 开发模式（热重载）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 3. 安装 OpenMCP 插件

在 VSCode、Cursor 或 Trae 的插件市场中搜索 `OpenMCP` 并安装即可开始使用。具体内容详见[openmcp-client](https://github.com/LSTM-Kirigaya/openmcp-client)。

## 📂 项目结构

```
openmcp-document/
├── .vitepress/           # VitePress 配置和主题
│   ├── config.*          # 站点配置文件
│   ├── i18n/             # 多语言配置 (en, zh, ja)
│   └── theme/            # 自定义主题组件
├── plugin-tutorial/      # MCP 插件开发教程 (英文)
├── sdk-tutorial/         # SDK 使用教程 (英文)
├── zh/                   # 中文文档
├── ja/                   # 日文文档
└── index.md              # 首页配置
```

## 📞 交流社区

- **GitHub**：https://github.com/LSTM-Kirigaya/openmcp-client
- **QQ 群**：782833642（OpenMCP 技术交流）
- **邮箱**：zhelonghuang@qq.com

## 📄 许可证

本项目采用 **Apache 2.0** 许可证，允许自由使用、修改及商业发布（需保留版权声明）。

## 🙏 致谢

- 感谢 VitePress 团队提供的优秀文档框架
- 感谢所有贡献者及社区用户的反馈与支持！

---

**相关链接**  
👉 [OpenMCP Client GitHub](https://github.com/LSTM-Kirigaya/openmcp-client) | [在线文档](https://openmcp.kirigaya.cn)
