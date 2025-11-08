# 高度な制御

## エンドポイントの設定

ほとんどのエージェントシナリオでは、自律型エージェントサービスには常にエンドポイントが存在します。エージェントが「エンドポイントツール」の実行を完了すると、現在のエージェントループは直ちに停止する必要があります。これにより、一方でエージェントシステムがより規範的で制御可能になり、他方で業務目的が達成された時点で即座に停止することで、大規模言語モデルが後続で要約的な冗談を発し、トークンが浪費されるのを防ぐことができます。

例を挙げると、ニュースレポート要約MCPを開発した場合、MCPが「ニュースレポートをエクスポート」というステップに到達したとき、現在のループを停止し結果を返すべきです。

openmcp-sdkはエンドポイントを設定するためのuntilフィールドを提供しています。以下は例です：

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

このMCPはWord文書を生成するためのもので、エージェントが`word_save_document`ツール関数を呼び出すと、タスクは終了します。