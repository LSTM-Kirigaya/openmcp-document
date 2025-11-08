# データリフローシステム

近年、多くのエンジニアリング経験が示すように、ビジネスシーンに適合したデータフライホイールを構築することは、エージェントの性能と背後にある大規模モデルの性能を向上させる最も重要な要素であり、データリフローシステムはこれを実現するための強力なツールです。

ここで、openmcpプロジェクトチームも、openmcpの付属モジュールとして、オープンソースのデータリフローシステムを構築しようと試みています。リフローシステムの詳細については、過去のブログをご覧ください：[なぜリフローシステムを設計する必要があるのか？openmcp refluxが定量指標であなたのAgentシステムとMCPをより理解する手助けをします](https://kirigaya.cn/blog/article?seq=357)。

## データリフローの開始

openmcpでは、refluxオプションを使用してデータリフローを開始できます：

```typescript
const agent = new OmAgent();
agent.loadMcpConfig(useMcpConfig('word-mcp'));
const prompt = await agent.getPrompt('word_operations_prompt', {});
const query = prompt + '\n' + userInput;

const result = await agent.ainvoke({
    messages: query,
    reflux: {
        enabled: true,
        saveDir: './dataset'
    }
});
```

これにより、openmcpは現在のMCPの各インタラクション情報を`./dataset`フォルダに保存します。ファイル名は`{MCPサーバー名}.omdb`です。

最新バージョンのopenmcpプラグインを使用してこのファイルを表示し、パフォーマンス分析とデータエクスポートを行うことができます。

## バリデータシステム

続く