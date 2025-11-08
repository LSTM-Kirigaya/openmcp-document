<div align="center" style="margin-bottom: 30px; border-radius: .5em; border: 1px solid var(--vp-c-brand-2); background-color: var(--vp-bg-brand-2); padding: 30px 10px;">

<img src="/images/icons/openmcp-sdk.svg" width="200px"/>

<h3>openmcp-sdk : openmcp 向けデプロイメントフレームワーク</h3>
<h4>実験環境から本番環境へ、エージェントを瞬時にデプロイ</h4>

</div>

# 紹介 & インストール

## openmcp-sdk.jsとは

OpenMCP Clientは統合的なMCPデバッグソリューションを提供していますが、それだけではまだ十分に面白くありません。

なぜなら、作成したmcpを直接配布可能なアプリにしたり、サーバー上に関数サービスやマイクロサービスとしてデプロイしたりしたいからです。OpenMCP Clientは大規模言語モデルとの対話やツール使用のロジックをすべてフロントエンドに置いているため、mcpを大規模言語モデルと連携する独立したアプリケーションやサービスにするのは困難です。

そこで、openmcp-sdk.jsは軽量なソリューションを提供します。これはnodejsのライブラリで、作成したmcpとデバッグ済みのワークフローをnodejsを通じてシームレスにエージェントとしてデプロイできます。

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
現在、openmcp-sdkはESMモードでのインポートのみサポートしています
:::

## 使用方法

まず新しいTSプロジェクトを作成します：

```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

> openmcp-sdkはESMのみサポートしています。package.jsonで`"type": "module"`を設定することを忘れずに

次にopenmcp-sdkをインストールします：

```bash
npm install openmcp-sdk
```

その後、main.tsファイルを作成し、わずか数行のコードで設定をエージェントとしてデプロイできます：

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();

// 設定を読み込み。この設定はopenmcp clientでデバッグ完了後に自動生成可能
agent.loadMcpConfig('./mcpconfig.json');

// デバッグ済みのプロンプトを読み込み
const prompt = await agent.getPrompt('hacknews', { topn: '5' });    

// タスクを実行
const res = await agent.ainvoke({ messages: prompt });

console.log('⚙️ Agent Response', res);
```

`mcpconfig.json`は[openmcp client](https://github.com/LSTM-Kirigaya/openmcp-client)から直接エクスポート可能で、手動で記述する必要はありません。以下は例です：

```json
{
    "version": "1.0.0",
    "namespace": "openmcp",
    "mcpServers": {
        "my-browser": {
            "command": "mcp",
            "args": [
                "run",
                "~/projects/openmcp-tutorial/crawl4ai-mcp/main.py"
            ],
            "description": "A MCP for long-term memory support",
            "prompts": [
                "hacknews"
            ]
        }
    },
    "defaultLLM": {
        "baseURL": "https://api.deepseek.com",
        "apiToken": "sk-xxxxxxxxxxxxxx",
        "model": "deepseek-chat"
    }
}
```

`npx tsx main.ts`で実行すると、以下の結果が得られます：

```
2025/6/20 - 20:47:31 | 🚀 [crawl4ai-mcp] 1.9.1 connected, type STDIO
2025/6/20 - 20:47:35 | 🤖 Agent wants to use these tools get_web_markdown
2025/6/20 - 20:47:39 | ✅  get_web_markdown success
2025/6/20 - 20:47:46 | 🤖 Agent wants to use tools(3) get_web_markdown, get_web_markdown, get_web_markdown
2025/6/20 - 20:47:48 | ✅  get_web_markdown success
2025/6/20 - 20:47:54 | ✅  get_web_markdown success
2025/6/20 - 20:47:57 | ✅  get_web_markdown success
                        └─ ⬇️145434 ⬆️1554 🎯96.1% 💰0.0439 rmb

⚙️ Agent Response
⌨️ 本日の技術記事シェア

📌 重力波の通過をどのように感知または観測するか？
要約：重力波が通過する際の物理現象について探求し、重力波が時空間に与える影響と、人類がこの宇宙現象をどのように感知または観測できるかを説明しています。
著者：ynoxinul
投稿時間：2時間前
リンク：https://physics.stackexchange.com/questions/338912/how-would-a-passing-gravitational-wave-look-or-feel

📌 Makefileチュートリアルを学ぶ
要約：初心者から上級ユーザーまで対応する詳細なMakefileチュートリアルで、Makefileの基本構文、変数、自動ルール、高度な機能を網羅し、開発者がプロジェクトのビルドプロセスを効率的に管理するのに役立ちます。
著者：dsego
投稿時間：4時間前
リンク：https://makefiletutorial.com/

📌 Hurl：プレーンテキストでHTTPリクエストを実行・テスト
要約：Hurlはコマンドラインツールで、プレーンテキスト形式でHTTPリクエストを定義・実行でき、データ取得やHTTPセッションテストに適しています。チェーンリクエスト、値キャプチャ、レスポンスクエリをサポートし、REST、SOAP、GraphQL APIのテストに最適です。
著者：flykespice
投稿時間：8時間前
リンク：https://github.com/Orange-OpenSource/hurl
```