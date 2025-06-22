# 会話パラメータの設定

ainvokeの第2引数settingを使用して、会話パラメータを設定できます：

```typescript
const messages = [
    UserMessage('私は今日とても美味しい鶏の鳴き声スープ入り包子を食べました'),
    AssistantMessage('はい、覚えました'),
    UserMessage('今日私は何を食べたか教えてください')
]

const result = await agent.ainvoke({
    messages: messages,
    settings: {
        systemPrompt: 'あなたはとても親切なアシスタントです',
        temperature: 0.7,
        // ...
    }
});
console.log(result);
```

その他のパラメータはMCP関連の高度な使用方法に関わり、今後のドキュメントで説明されます。