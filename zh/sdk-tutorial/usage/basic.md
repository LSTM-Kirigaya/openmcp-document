# 最简单的对话

和其他所有的 Agent 框架一样，你可以利用 openmcp-sdk 完成一个和大模型最简单的文本交互。这只需要几行代码就能轻松完成。

## 创建 agent

openmcp-sdk 通过如下语句可以快速创建一个 agent 实例：

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();
```

它是我们后续一切工作的基础。

## 设置大模型

通过 `setDefaultLLM` 可以设置默认的大模型。此处以 deepseek 为例：

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: 'sk-xxxxxxxxxxxxxxxx',
    model: 'deepseek-chat',
});
```

:::tip
为了防止 api key 在代码中，从而泄漏，我们建议通过环境变量来输入：

在您的 bashrc 或者 zshrc 文件中添加如下内容：

```bash
export OPENMCP_API_TOKEN=sk-xxxxxxxxxxxxxxxx
```

然后修改上述代码：

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: process.env['OPENMCP_API_TOKEN'],
    model: 'deepseek-chat',
});
```
:::

其他的大模型接入参数请参考各个大模型厂家自己的文档说明。


## 发送对话

通过 `ainvoke` 方法，我们可以直接把文本发送给大模型完成一次交互和对话：

```typescript
const result = await agent.ainvoke({ messages: '你好，我是 LSTM-Kirigaya，我的另一个名字是锦恢' });
console.log(result)
```

运行上面的代码，你会得到如下的回复：

```
你好，LSTM-Kirigaya（锦恢）！很高兴认识你～  

你的名字结合了技术（LSTM，长短期记忆网络）和动漫元素（Kirigaya可能让人联想到《刀剑神域》的桐谷和人/桐人），而“锦恢”这个中文名又很有诗意，听起来像是一位对AI和二次元都充满热情的伙伴呢！  

有什么想聊的吗？无论是技术、ACG，还是名字背后的故事，我都乐意倾听～ ✨
```

