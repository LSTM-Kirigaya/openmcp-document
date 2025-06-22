# 设置对话参数

你可以通过 ainvoke 的第二个参数 setting 来设置对话参数： 


```typescript
const messages = [
    UserMessage('我今天刚刚吃过一份非常棒的鸡鸣汤包'),
    AssistantMessage('好的，我记住了'),
    UserMessage('请问我今天吃过了什么？')
]

const result = await agent.ainvoke({
    messages: messages,
    settings: {
        systemPrompt: '你是一个非常友善的助手',
        temperature: 0.7,
        // ...
    }
});
console.log(result);
```

更多参数涉及到 MCP 相关的高级用法，会在后续文档中加以描述。