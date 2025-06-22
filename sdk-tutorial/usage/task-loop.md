# Task Loop

openmcp-sdk builds agents using a task loop mechanism and allows users to interact with them. If users need real-time control over this task loop, they can register corresponding hook functions through the events provided by openmcp-sdk.

Taking the example from [Quick Deployment](./fast-deploy.md), you can obtain the object controlling the task loop with the following code:

```typescript
import { OmAgent } from '../openmcp-sdk/service/sdk';

const agent = new OmAgent();
agent.loadMcpConfig('./mcpconfig.json');

const loop = await agent.getLoop();
```

:::warning
Registering hooks and obtaining the loop must be completed before `agent.ainvoke`!
:::

With this `loop` object, we can register the following hooks:

- `registerOnChunk`: Triggered when the model returns a chunk
- `registerOnDone`: Triggered when the task is completed
- `registerOnError`: Triggered when the task encounters an error
- `registerOnEpoch`: Triggered at the start of each task epoch
- `registerOnToolCall`: Triggered before calling a tool function
- `registerOnToolCalled`: Triggered after calling a tool function

These hook functions accept a callback function, which will be called when the corresponding event is triggered.

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