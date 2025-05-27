

# 介绍 & 安装

## 什么是 openmcp-sdk.js

OpenMCP Client 提供了一体化的 MCP 调试解决方案，这很好，但是，还是不够有趣。

因为，我们总是希望可以把做好的 mcp 搞一个可以直接分发的 app 或者扔到服务器上做成一个函数服务或者微服务。而 OpenMCP Client 把和大模型交互，使用工具的这套逻辑全部放到了前端，导致我们如果想要把 mcp 做成一个和大模型绑定的独立应用或者服务，困难重重。

这个时候，openmcp-sdk.js 就提供了一种轻量级解决方案。它是一个 nodejs 的库，可以让您通过 nodejs 将写好的 mcp 和调试好的流程无缝部署成一个 agent。


## 安装

::: code-group
```[npm]
npm install openmcp-sdk
```

```[yarn]
yarn add openmcp-sdk
```

```[pnpm]
pnpm add openmcp-sdk
```
:::


## 使用

下面是一个最小例程：

文件名：main.ts

```typescript
import { TaskLoop } from 'openmcp-sdk/task-loop';
import { TaskLoopAdapter } from 'openmcp-sdk/service';

async function main() {
    // 创建适配器，负责通信和 mcp 连接
    const adapter = new TaskLoopAdapter();

    // 连接 mcp 服务器
    await adapter.connectMcpServer({
        connectionType: 'STDIO',
        command: 'node',
        args: [
            '~/projects/mcp/servers/src/puppeteer/dist/index.js'
        ]
    });

    // 获取工具列表
    const tools = await adapter.listTools();

    // 创建事件循环驱动器
    const taskLoop = new TaskLoop({ adapter });

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
            enableTools: tools,
            systemPrompt: 'you are a clever bot',
            contextLength: 20
        }
    };

    // 本次发出的问题
    const message = 'hello world';

    // 事件循环结束的句柄
    taskLoop.registerOnDone(() => {
        console.log('taskLoop done');
    });

    // 事件循环每一次 epoch 开始的句柄
    taskLoop.registerOnError((error) => {
        console.log('taskLoop error', error);
    });

    // 事件循环出现 error 时的句柄（出现 error 不一定会停止事件循环）
    taskLoop.registerOnEpoch(() => {
        console.log('taskLoop epoch');
    });

    // 开启事件循环
    await taskLoop.start(storage, message);

    // 打印上下文，最终的回答在 messages.at(-1) 中
    console.log(storage.messages);
}

main();
```

star 我们的项目：https://github.com/LSTM-Kirigaya/openmcp-client