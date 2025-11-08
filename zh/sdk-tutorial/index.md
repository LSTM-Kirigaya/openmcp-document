

<div align="center" style="margin-bottom: 30px; border-radius: .5em; border: 1px solid var(--vp-c-brand-2); background-color: var(--vp-bg-brand-2); padding: 30px 10px;">

<img src="/images/icons/openmcp-sdk.svg" width="200px"/>

<h3>openmcp-sdk : 适用于 openmcp 的部署框架</h3>
<h4>闪电般将您的 agent 从实验室部署到生产环境</h4>

</div>

# 介绍 & 安装

## 什么是 openmcp-sdk.js

OpenMCP Client 提供了一体化的 MCP 调试解决方案，这很好，但是，还是不够有趣。

因为，我们总是希望可以把做好的 mcp 搞一个可以直接分发的 app 或者扔到服务器上做成一个函数服务或者微服务。而 OpenMCP Client 把和大模型交互，使用工具的这套逻辑全部放到了前端，导致我们如果想要把 mcp 做成一个和大模型绑定的独立应用或者服务，困难重重。

这个时候，openmcp-sdk.js 就提供了一种轻量级解决方案。它是一个 nodejs 的库，可以让您通过 nodejs 将写好的 mcp 和调试好的流程无缝部署成一个 agent。


## 安装

::: code-group
```bash [npm]
npm install openmcp-sdk
```

```bash [yarn]
yarn add openmcp-sdk
```

```bash [pnpm]
pnpm add openmcp-sdk
```
:::

:::warning
目前 openmcp-sdk 只支持 esm 模式的导入
:::


## 使用

首先我们创建一个新的 TS 项目：

```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

> openmcp-sdk 只支持 esm 了，记得在 package.json 中设置 `"type": "module"`

然后我们安装一下 openmcp-sdk

```bash
npm install openmcp-sdk
```

然后我们创建文件 main.ts，直接简单几行代码就能把配置部署成一个 agent：

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();

// 加载配置，该配置可由 openmcp client 调试完成后自动生成
agent.loadMcpConfig('./mcpconfig.json');

// 读取调试好的 prompt
const prompt = await agent.getPrompt('hacknews', { topn: '5' });    

// 执行任务
const res = await agent.ainvoke({ messages: prompt });

console.log('⚙️ Agent Response', res);
```

`mcpconfig.json` 可以直接从 [openmcp client](https://github.com/LSTM-Kirigaya/openmcp-client) 导出，不需要自己手动写。下面是例子：


```json
{
    "version": "1.0.0",
    "namespace": "openmcp",
    "mcpServers": {
        "my-browser": {
            "command": "mcp",
            "args": [
                "run",
                "~/projects/openmcp-tutorial/crawl4ai-mcp/main.py"
            ],
            "description": "A MCP for long-term memory support",
            "prompts": [
                "hacknews"
            ]
        }
    },
    "defaultLLM": {
        "baseURL": "https://api.deepseek.com",
        "apiToken": "sk-xxxxxxxxxxxxxx",
        "model": "deepseek-chat"
    }
}
```


使用 `npx tsx main.ts` 运行一下，得到如下结果：

```
2025/6/20 - 20:47:31 | 🚀 [crawl4ai-mcp] 1.9.1 connected, type STDIO
2025/6/20 - 20:47:35 | 🤖 Agent wants to use these tools get_web_markdown
2025/6/20 - 20:47:39 | ✅  get_web_markdown success
2025/6/20 - 20:47:46 | 🤖 Agent wants to use tools(3) get_web_markdown, get_web_markdown, get_web_markdown
2025/6/20 - 20:47:48 | ✅  get_web_markdown success
2025/6/20 - 20:47:54 | ✅  get_web_markdown success
2025/6/20 - 20:47:57 | ✅  get_web_markdown success
                        └─ ⬇️145434 ⬆️1554 🎯96.1% 💰0.0439 rmb

⚙️ Agent Response
⌨️ 今日份技术文章分享

📌 如何感知或看到经过的引力波？
摘要：文章探讨了引力波通过时的物理现象，解释了引力波对空间和时间的影响，以及人类如何可能感知或观察到这种宇宙现象。
作者：ynoxinul
发布时间：2小时前
链接：https://physics.stackexchange.com/questions/338912/how-would-a-passing-gravitational-wave-look-or-feel

📌 学习Makefile教程
摘要：这是一个详细的Makefile教程，适合初学者和进阶用户，涵盖了Makefile的基本语法、变量、自动规则和高级功能，帮助开发者高效管理项目构建过程。
作者：dsego
发布时间：4小时前
链接：https://makefiletutorial.com/

📌 Hurl：用纯文本运行和测试HTTP请求
摘要：Hurl是一个命令行工具，支持通过纯文本格式定义和运行HTTP请求，适用于数据获取和HTTP会话测试。它支持链式请求、值捕获和响应查询，非常适合REST、SOAP和GraphQL API测试。
作者：flykespice
发布时间：8小时前
链接：https://github.com/Orange-OpenSource/hurl
```
