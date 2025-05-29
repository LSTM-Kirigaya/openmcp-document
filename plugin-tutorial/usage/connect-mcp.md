# 连接 mcp 服务器

不同于 Claude Desktop 和其他的 MCP 客户端类产品，OpenMCP 进行 MCP 服务器连接的步骤是相当丝滑的。

:::info MCP客户端
MCP 客户端是指能够通过 MCP 协议进行通信的大模型对话客户端，通常是一个运行在本地的应用程序（因为网页没有文件IO的权限）。它的产品形式目前几乎都是聊天机器人的形式，类似于你在网页使用的 chat.deepseek.com 或者 chat.openai.com
:::

首先，打开你的 VLE，在 [获取 OpenMCP](https://kirigaya.cn/openmcp/plugin-tutorial/acquire-openmcp.html) 中完成 OpenMCP 的安装后，我们先用 python 创建一个最简单的 mcp 服务器，来测试 mcp 客户端的连接。

:::tip 提示
Python 写 mcp 服务器强烈推荐使用 uv 作为包管理器
:::


<mark>awdwadwa</mark>