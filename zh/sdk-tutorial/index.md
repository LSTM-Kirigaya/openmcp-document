

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

文件名：main.ts

```typescript
import { TaskLoop } from 'openmcp-sdk/task-loop';
import { TaskLoopAdapter } from 'openmcp-sdk/service';
async function main() {
    // 创建适配器，负责通信和 mcp 连接
    const adapter = new TaskLoopAdapter();

    // 添加 mcp 服务器
    adapter.addMcp({
        connectionType: 'STDIO',
        commandString: 'node index.js',
        cwd: '~/projects/openmcp-tutorial/my-browser/dist'
    });

    // 创建事件循环驱动器, verbose 数值越高，输出的日志越详细
    const taskLoop = new TaskLoop({ adapter, verbose: 1 });

    // 获取所有工具
    const tools = await taskLoop.getTools();

    // 配置改次事件循环使用的大模型
    taskLoop.setLlmConfig({
        id: 'deepseek',
        baseUrl: 'https://api.deepseek.com/v1',
        userToken: process.env['DEEPSEEK_API_TOKEN'],
        userModel: 'deepseek-chat'
    });

    // 创建当前事件循环对应的上下文，并且配置当前上下文的设置
    const storage = {
        messages: [],
        settings: {
            temperature: 0.7,
            // 在本次对话使用所有工具
            enableTools: tools,
            // 系统提示词
            systemPrompt: 'you are a clever bot',
            // 对话上下文的轮数
            contextLength: 20
        }
    };

    // 本次发出的问题
    const message = 'hello world';

    // 开启事件循环
    await taskLoop.start(storage, message);

    // 打印上下文，最终的回答在 messages.at(-1) 中
    const content = storage.messages.at(-1).content;
    console.log('最终回答：', content);
} 

main();
```

以 esm 模块来运行它，先安装 typescript 的 esm 启动器：

```bash
npm install tsx --save-dev
```

运行上面的文件

```bash
npx tsx main.ts
```


下面是可能的输出：

```
[6/5/2025, 8:16:15 PM] 🚀 [my-browser] 0.1.0 connected
[6/5/2025, 8:16:15 PM] task loop enters a new epoch
[6/5/2025, 8:16:23 PM] task loop finish a epoch
[6/5/2025, 8:16:23 PM] 🤖 llm wants to call these tools k_navigate
[6/5/2025, 8:16:23 PM] 🔧 calling tool k_navigate
[6/5/2025, 8:16:34 PM] × fail to call tools McpError: MCP error -32603: net::ERR_CONNECTION_RESET at https://towardsdatascience.com/tag/editors-pick/
[6/5/2025, 8:16:34 PM] task loop enters a new epoch
[6/5/2025, 8:16:40 PM] task loop finish a epoch
[6/5/2025, 8:16:40 PM] 🤖 llm wants to call these tools k_navigate
[6/5/2025, 8:16:40 PM] 🔧 calling tool k_navigate
[6/5/2025, 8:16:44 PM] ✓ call tools okey dockey success
[6/5/2025, 8:16:44 PM] task loop enters a new epoch
[6/5/2025, 8:16:57 PM] task loop finish a epoch
[6/5/2025, 8:16:57 PM] 🤖 llm wants to call these tools k_evaluate
[6/5/2025, 8:16:57 PM] 🔧 calling tool k_evaluate
[6/5/2025, 8:16:57 PM] ✓ call tools okey dockey success
[6/5/2025, 8:16:57 PM] task loop enters a new epoch
[6/5/2025, 8:17:06 PM] task loop finish a epoch
[6/5/2025, 8:17:06 PM] 🤖 llm wants to call these tools k_navigate, k_navigate
[6/5/2025, 8:17:06 PM] 🔧 calling tool k_navigate
[6/5/2025, 8:17:09 PM] ✓ call tools okey dockey success
[6/5/2025, 8:17:09 PM] 🔧 calling tool k_navigate
[6/5/2025, 8:17:12 PM] ✓ call tools okey dockey success
[6/5/2025, 8:17:12 PM] task loop enters a new epoch
[6/5/2025, 8:17:19 PM] task loop finish a epoch
[6/5/2025, 8:17:19 PM] 🤖 llm wants to call these tools k_evaluate, k_evaluate
[6/5/2025, 8:17:19 PM] 🔧 calling tool k_evaluate
[6/5/2025, 8:17:19 PM] ✓ call tools okey dockey success
[6/5/2025, 8:17:19 PM] 🔧 calling tool k_evaluate
[6/5/2025, 8:17:19 PM] ✓ call tools okey dockey success
[6/5/2025, 8:17:19 PM] task loop enters a new epoch
[6/5/2025, 8:17:45 PM] task loop finish a epoch
"以下是整理好的热门文章信息，并已翻译为简体中文：\n\n---\n\n### K1 标题  \n**《数据漂移并非真正问题：你的监控策略才是》**  \n\n**简介**  \n在机器学习领域，数据漂移常被视为模型性能下降的罪魁祸首，但本文作者提出了一种颠覆性的观点：数据漂移只是一个信号，真正的核心问题在于监控策略的不足。文章通过实际案例（如电商推荐系统和金融风控模型）揭示了传统统计监控的局限性，并提出了一个三层监控框架：  \n1. **统计监控**：快速检测数据分布变化，但仅作为初步信号。  \n2. **上下文监控**：结合业务逻辑，判断漂移是否对关键指标产生影响。  \n3. **行为监控**：追踪模型预测的实际效果，避免“无声漂移”。  \n\n亮点在于作者强调了监控系统需要与业务目标紧密结合，而非单纯依赖技术指标。  \n\n**原文链接**  \n[点击阅读原文](https://towardsdatascience.com/data-drift-is-not-the-actual-problem-your-monitoring-strategy-is/)  \n\n---\n\n### K2 标题  \n**《从 Jupyter 到程序员的快速入门指南》**  \n\n**简介**  \n本文为数据科学家和初学者提供了一条从 Jupyter Notebook 过渡到专业编程的清晰路径。作者通过实际代码示例和工具推荐（如 VS Code、Git 和 Docker），帮助读者摆脱 Notebook 的局限性，提升代码的可维护性和可扩展性。  \n\n亮点包括：  \n- 如何将 Notebook 代码模块化为可复用的 Python 脚本。  \n- 使用版本控制和容器化技术优化开发流程。  \n- 实战案例展示如何将实验性代码转化为生产级应用。  \n\n**原文链接**  \n[点击阅读原文](https://towardsdatascience.com/the-journey-from-jupyter-to-programmer-a-quick-start-guide/)  \n\n---\n\n如果需要进一步优化或补充其他内容，请随时告诉我！"
```
