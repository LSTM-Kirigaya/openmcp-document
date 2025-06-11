<div align="center" style="margin-bottom: 30px; border-radius: .5em; border: 1px solid var(--vp-c-brand-2); background-color: var(--vp-bg-brand-2); padding: 30px 10px;">

<img src="/images/icons/openmcp-sdk.svg" width="200px"/>

<h3>openmcp-sdk : openmcp 向けデプロイメントフレームワーク</h3>
<h4>実験室から本番環境まで、エージェントを瞬時に展開</h4>

</div>

# 導入 & インストール

## openmcp-sdk.jsとは

OpenMCP Clientは統合されたMCPデバッグソリューションを提供しますが、それだけでは物足りません。

作成したmcpを配布可能なアプリにしたり、サーバー上で関数サービスやマイクロサービスとして展開したい場合、OpenMCP Clientがフロントエンドに大規模モデルとの連携やツール使用ロジックを実装しているため、困難が生じます。

openmcp-sdk.jsはこの問題に対する軽量ソリューションです。Node.jsライブラリとして、完成したmcpをシームレスにエージェントとして展開可能にします。

## インストール

::: code-group
```bash [npm]
npm install openmcp-sdk
```

```bash [yarn]
yarn add openmcp-sdk
```

```bash [pnpm]
pnpm add openmcp-sdk
```
:::

:::warning
現在openmcp-sdkはesmモードのインポートのみサポートしています
:::

## 使用方法

ファイル名：main.ts

```typescript
import { TaskLoop } from 'openmcp-sdk/task-loop';
import { TaskLoopAdapter } from 'openmcp-sdk/service';
async function main() {
    // 通信とmcp接続を担当するアダプター作成
    const adapter = new TaskLoopAdapter();

    // mcpサーバー追加
    adapter.addMcp({
        connectionType: 'STDIO',
        commandString: 'node index.js',
        cwd: '~/projects/openmcp-tutorial/my-browser/dist'
    });

    // イベントループドライバー作成（verbose値が高いほど詳細なログを出力）
    const taskLoop = new TaskLoop({ adapter, verbose: 1 });

    // 全ツール取得
    const tools = await taskLoop.getTools();

    // 使用する大規模モデル設定
    taskLoop.setLlmConfig({
        id: 'deepseek',
        baseUrl: 'https://api.deepseek.com/v1',
        userToken: process.env['DEEPSEEK_API_TOKEN'],
        userModel: 'deepseek-chat'
    });

    // コンテキスト作成と設定
    const storage = {
        messages: [],
        settings: {
            temperature: 0.7,
            // 全てのツールを有効化
            enableTools: tools,
            // システムプロンプト
            systemPrompt: 'you are a clever bot',
            // 会話コンテキストのターン数
            contextLength: 20
        }
    };

    // 質問内容
    const message = 'hello world';

    // イベントループ開始
    await taskLoop.start(storage, message);

    // 最終回答を表示（messages.at(-1)に格納）
    const content = storage.messages.at(-1).content;
    console.log('最終回答：', content);
} 

main();
```

esmモードで実行するには、まずTypeScriptのesmランチャーをインストール：

```bash
npm install tsx --save-dev
```

ファイルを実行：

```bash
npx tsx main.ts
```

出力例：

```
[6/5/2025, 8:16:15 PM] 🚀 [my-browser] 0.1.0 接続済み
[6/5/2025, 8:16:15 PM] タスクループが新規エポックを開始
[6/5/2025, 8:16:23 PM] タスクループがエポックを終了
[6/5/2025, 8:16:23 PM] 🤖 LLMがこれらのツールを呼び出し要求: k_navigate
[6/5/2025, 8:16:23 PM] 🔧 ツールk_navigateを呼び出し中
[6/5/2025, 8:16:34 PM] × ツール呼び出し失敗 McpError: MCP error -32603: net::ERR_CONNECTION_RESET at https://towardsdatascience.com/tag/editors-pick/
[6/5/2025, 8:16:34 PM] タスクループが新規エポックを開始
[6/5/2025, 8:16:40 PM] タスクループがエポックを終了
[6/5/2025, 8:16:40 PM] 🤖 LLMがこれらのツールを呼び出し要求: k_navigate
[6/5/2025, 8:16:40 PM] 🔧 ツールk_navigateを呼び出し中
[6/5/2025, 8:16:44 PM] ✓ ツール呼び出し成功
[6/5/2025, 8:16:44 PM] タスクループが新規エポックを開始
[6/5/2025, 8:16:57 PM] タスクループがエポックを終了
[6/5/2025, 8:16:57 PM] 🤖 LLMがこれらのツールを呼び出し要求: k_evaluate
[6/5/2025, 8:16:57 PM] 🔧 ツールk_evaluateを呼び出し中
[6/5/2025, 8:16:57 PM] ✓ ツール呼び出し成功
[6/5/2025, 8:16:57 PM] タスクループが新規エポックを開始
[6/5/2025, 8:17:06 PM] タスクループがエポックを終了
[6/5/2025, 8:17:06 PM] 🤖 LLMがこれらのツールを呼び出し要求: k_navigate, k_navigate
[6/5/2025, 8:17:06 PM] 🔧 ツールk_navigateを呼び出し中
[6/5/2025, 8:17:09 PM] ✓ ツール呼び出し成功
[6/5/2025, 8:17:09 PM] 🔧 ツールk_navigateを呼び出し中
[6/5/2025, 8:17:12 PM] ✓ ツール呼び出し成功
[6/5/2025, 8:17:12 PM] タスクループが新規エポックを開始
[6/5/2025, 8:17:19 PM] タスクループがエポックを終了
[6/5/2025, 8:17:19 PM] 🤖 LLMがこれらのツールを呼び出し要求: k_evaluate, k_evaluate
[6/5/2025, 8:17:19 PM] 🔧 ツールk_evaluateを呼び出し中
[6/5/2025, 8:17:19 PM] ✓ ツール呼び出し成功
[6/5/2025, 8:17:19 PM] 🔧 ツールk_evaluateを呼び出し中
[6/5/2025, 8:17:19 PM] ✓ ツール呼び出し成功
[6/5/2025, 8:17:19 PM] タスクループが新規エポックを開始
[6/5/2025, 8:17:45 PM] タスクループがエポックを終了
"以下は人気記事の整理済み情報（簡体中文訳）:\n\n---\n\n### K1 タイトル\n**『データドリフトは真の問題ではない：監視戦略こそが鍵』**\n\n**概要**\n機械学習分野でデータドリフトはモデル性能低下の原因とされますが、本記事はこの常識を覆します。監視戦略の不備こそが核心的問題だと指摘。eコマース推薦システムや金融リスクモデルなどの実例を通じ、従来の統計的監視の限界を明らかにし、3層監視フレームワークを提案:\n1. **統計監視**: データ分布変化を迅速検知（初期信号として）\n2. **コンテキスト監視**: ビジネスロジックと連動、重要指標への影響を判定\n3. **行動監視**: モデル予測の実効果を追跡、「無音ドリフト」を防止\n\n技術指標依存ではなく、ビジネス目標と密接に連携した監視システムの重要性を強調。\n\n**原文リンク**\n[記事を読む](https://towardsdatascience.com/data-drift-is-not-the-actual-problem-your-monitoring-strategy-is/)\n\n---\n\n### K2 タイトル\n**『Jupyterからプログラマーへの速習ガイド』**\n\n**概要**\nデータサイエンティストや初心者向けに、Jupyter Notebookから専門的プログラミングへ移行する道筋を提示。VS Code、Git、Dockerなどのツール推奨と実践コード例で、Notebookの限界を超え、コードの保守性と拡張性を向上させる方法を解説。\n\n主なハイライト:\n- Notebookコードを再利用可能なPythonスクリプトへモジュール化\n- バージョン管理とコンテナ技術で開発フローを最適化\n- 実験的コードから本番級アプリケーションへの変換実例\n\n**原文リンク**\n[記事を読む](https://towardsdatascience.com/the-journey-from-jupyter-to-programmer-a-quick-start-guide/)\n\n---\n\n追加調整やコンテンツ補充が必要な場合はお知らせください！"