# 任务循环

openmcp-sdk 是以任务循环的机制构建 agent 并允许用户与之交互的。如果用户需要实时控制这个任务循环，可以通过 openmcp-sdk 提供的事件来注册对应的钩子函数来完成这件事。

以 [极速部署](./fast-deploy.md) 中的为例，通过下面的代码，你可以获取到控制任务循环的对象：

```typescript
import { OmAgent } from '../openmcp-sdk/service/sdk';

const agent = new OmAgent();
agent.loadMcpConfig('./mcpconfig.json');

const loop = await agent.getLoop();
```

:::warning
注册钩子和获取 loop 必须在 `agent.ainvoke` 之前完成！
:::

通过这个 `loop` 对象，我们可以注册如下的钩子：

- `registerOnChunk`：在模型返回 chunk 时触发
- `registerOnDone`：在任务完成时触发
- `registerOnError`：在任务出错时触发
- `registerOnEpoch`：在每个任务轮次开始时触发
- `registerOnToolCall`：在调用工具函数前触发
- `registerOnToolCalled`：在调用工具函数后触发

这些钩子函数接收一个回调函数，回调函数会在对应事件触发时被调用。

```typescript
loop.registerOnChunk((chunk) => {
    console.log('⚙️ Agent Chunk', chunk);
});

loop.registerOnDone(() => {
    console.log('⚙️ Agent Done');
});

loop.registerOnError((err) => {
    console.log('⚙️ Agent Error', err);
});

loop.registerOnEpoch(() => {
    console.log('⚙️ Agent Epoch');
});

loop.registerOnToolCall((toolCall) => {
    console.log('⚙️ Agent Tool Call', toolCall);
    return toolCall;
});

loop.registerOnToolCalled((toolCalled) => {
    console.log('⚙️ Agent Tool Called', toolCalled);
    return toolCalled;
});
```