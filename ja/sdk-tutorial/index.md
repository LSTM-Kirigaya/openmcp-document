<div align="center" style="margin-bottom: 30px; border-radius: .5em; border: 1px solid var(--vp-c-brand-2); background-color: var(--vp-bg-brand-2); padding: 30px 10px;">

<img src="/images/icons/openmcp-sdk.svg" width="200px"/>

<h3>openmcp-sdk : openmcp向けデプロイメントフレームワーク</h3>
<h4>実験環境から本番環境へエージェントを瞬時にデプロイ</h4>

</div>

# 導入 & インストール

## openmcp-sdk.jsとは

OpenMCP Clientは統合型MCPデバッグソリューションを提供していますが、それだけでは十分ではありません。

完成したMCPを配布可能なアプリにしたり、サーバー上で関数サービスやマイクロサービスとして運用したい場合があります。しかしOpenMCP Clientは大規模モデルとの連携やツール使用のロジックを全てフロントエンドに実装しているため、MCPを大規模モデル連携型のスタンドアロンアプリケーションやサービスとして構築するのは困難です。

この問題を解決するのがopenmcp-sdk.jsです。Node.jsライブラリとして、開発済みのMCPとデバッグ済みワークフローをシームレスにエージェントとしてデプロイできます。

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
現在openmcp-sdkはESMモードのインポートのみサポートしています
:::

## 使用方法

まず新しいTypeScriptプロジェクトを作成します：

```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

> openmcp-sdkはESMのみ対応しています。package.jsonで`"type": "module"`を設定してください

次にopenmcp-sdkをインストールします：

```bash
npm install openmcp-sdk
```

main.tsファイルを作成し、数行のコードで設定をエージェントとしてデプロイできます：

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();

// openmcp clientでデバッグ後に自動生成される設定を読み込み
agent.loadMcpConfig('./mcpconfig.json');

// デバッグ済みプロンプトを取得
const prompt = await agent.getPrompt('hacknews', { topn: '5' });    

// タスク実行
const res = await agent.ainvoke({ messages: prompt });

console.log('⚙️ エージェントレスポンス', res);
```

`mcpconfig.json`は[openmcp client](https://github.com/LSTM-Kirigaya/openmcp-client)から直接エクスポート可能で、手動作成不要です。例：

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
            "description": "長期記憶サポート用MCP",
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

`npx tsx main.ts`で実行すると以下の結果が得られます：

```
[2025/6/20 20:47:31] 🚀 [crawl4ai-mcp] 1.9.1 接続完了
[2025/6/20 20:47:35] 🤖 エージェントが以下のツール使用を要求: get_web_markdown
[2025/6/20 20:47:35] 🔧 ツール使用中: get_web_markdown
[2025/6/20 20:47:39] ✓ ツール使用成功
[2025/6/20 20:47:46] 🤖 エージェントが以下のツール使用を要求: get_web_markdown, get_web_markdown, get_web_markdown
[2025/6/20 20:47:46] 🔧 ツール使用中: get_web_markdown
[2025/6/20 20:47:48] ✓ ツール使用成功
[2025/6/20 20:47:48] 🔧 ツール使用中: get_web_markdown
[2025/6/20 20:47:54] ✓ ツール使用成功
[2025/6/20 20:47:54] 🔧 ツール使用中: get_web_markdown
[2025/6/20 20:47:57] ✓ ツール使用成功

⚙️ エージェントレスポンス
⌨️ 本日の技術記事シェア

📌 重力波を検知・観測する方法は？
要約：重力波通過時の物理現象について解説。時空間への影響と、この宇宙現象を人間が感知・観測する可能性について
著者：ynoxinul
投稿時間：2時間前
リンク：https://physics.stackexchange.com/...

📌 Makefileチュートリアル
要約：初心者から上級者向けの詳細なMakefileガイド。基本構文、変数、自動ルールから高度な機能まで、効率的なプロジェクトビルド管理を支援
著者：dsego
投稿時間：4時間前
リンク：https://makefiletutorial.com/

📌 Hurl：プレーンテキストでHTTPリクエストを実行・テスト
要約：プレーンテキスト形式でHTTPリクエストを定義・実行するCLIツール。データ取得やHTTPセッションテストに最適で、REST/SOAP/GraphQL APIテストにも対応
著者：flykespice
投稿時間：8時間前
リンク：https://github.com/Orange-OpenSource/hurl
```