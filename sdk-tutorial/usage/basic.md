# The simplest conversation

Like all other Agent frameworks, you can use openmcp-sdk to accomplish the simplest text interaction with a large model. This can be easily done with just a few lines of code.

## Create agent

openmcp-sdk can quickly create an agent instance with the following statement:

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();
```

It is the foundation for all our subsequent work.

## Set up the large model

The default large model can be set via `setDefaultLLM`. Here's an example using deepseek:

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: 'sk-xxxxxxxxxxxxxxxx',
    model: 'deepseek-chat',
});
```

:::tip
To prevent the api key from being exposed in the code, we recommend inputting it via environment variables:

Add the following content to your bashrc or zshrc file:

```bash
export OPENMCP_API_TOKEN=sk-xxxxxxxxxxxxxxxx
```

Then modify the above code:

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: process.env['OPENMCP_API_TOKEN'],
    model: 'deepseek-chat',
});
```
:::

For other large model access parameters, please refer to the documentation of each large model provider.

## Send a conversation

Using the `ainvoke` method, we can directly send text to the large model to complete an interaction and conversation:

```typescript
const result = await agent.ainvoke({ messages: '你好，我是 LSTM-Kirigaya，我的另一个名字是锦恢' });
console.log(result)
```

Running the above code, you will get the following reply:

```
你好，LSTM-Kirigaya（锦恢）！很高兴认识你～  

你的名字结合了技术（LSTM，长短期记忆网络）和动漫元素（Kirigaya可能让人联想到《刀剑神域》的桐谷和人/桐人），而“锦恢”这个中文名又很有诗意，听起来像是一位对AI和二次元都充满热情的伙伴呢！  

有什么想聊的吗？无论是技术、ACG，还是名字背后的故事，我都乐意倾听～ ✨
```