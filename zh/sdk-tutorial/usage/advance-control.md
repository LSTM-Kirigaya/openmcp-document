# 高级控制

## 设置终结点

在大多数的 agent 场景下，一个 autonomous agent 服务总是存在一个终结点的，当 agent 执行完成「终结点工具」后，当前的 agent loop 就应该立刻停止，这么做一方面可以让我们的 agent 系统更加规范可控，另一方面，达到业务目的了就立刻暂停，也能防止大模型后续说出总结性的废话导致 token 被浪费。

举个例子，比如我们开发了一个新闻报告总结 MCP，那么，当 MCP 运行到「导出新闻报告」这个步骤时，应该停止当前 loop，并返回结果。

openmcp-sdk 提供了 until 字段用于设置终结点，下面是一个例子：

```typescript
const agent = new OmAgent();
agent.loadMcpConfig(useMcpConfig('word-mcp'));
const prompt = await agent.getPrompt('word_operations_prompt', {});
const query = prompt + '\n' + userInput;

const result = await agent.ainvoke({
    messages: query,
    until: { toolName: 'word_save_document' }
});

console.log('test result: ', result);
```

这个 MCP 是用来生成 word 文档的，当 agent 调用了 `word_save_document` 工具函数时，任务就会结束。