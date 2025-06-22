# Set Conversation Parameters

You can configure conversation parameters through the `setting` parameter, the second argument of `ainvoke`: 

```typescript
const messages = [
    UserMessage('I just had an amazing bowl of Jirim Tangbao today'),
    AssistantMessage('Got it, I’ve memorized that'),
    UserMessage('Can you tell me what I ate today?')
]

const result = await agent.ainvoke({
    messages: messages,
    settings: {
        systemPrompt: 'You are a very friendly assistant',
        temperature: 0.7,
        // ...
    }
});
console.log(result);
```

Additional parameters related to advanced MCP usage will be described in subsequent documentation.