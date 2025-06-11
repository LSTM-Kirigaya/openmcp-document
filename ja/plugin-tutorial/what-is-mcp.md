# MCPとは？

![](https://picx.zhimg.com/70/v2-1a2df8a081a76f4e90431d8a2445f495_1440w.avis)

MCP（Model Context Protocol）は、アプリケーションが大規模言語モデル（LLMs）にコンテキストを提供する方法を標準化するためのオープンプロトコルです。MCPをAIアプリケーションのType-Cインターフェースと想像してください。Type-Cがデバイスを様々な周辺機器やアクセサリに接続する標準化された方法を提供するように、MCPはAIモデルを異なるデータソースやツールに接続する標準化された方法を提供します。

MCPプロトコルはAnthropicによって2024年11月末にリリースされました：

- 公式ドキュメント：[Introduction](https://modelcontextprotocol.io/introduction)
- GitHubリポジトリ：[github.com/modelcontextprotocol](https://github.com/modelcontextprotocol)


## なぜMCPが必要なのか？

私たちは皆、最初のchatgptから、後のcursor、copilot chatroom、そして現在よく知られているagentまで、実際にはユーザーインタラクションの観点から観察すると、現在の大規模モデル製品は以下のような変化を経てきたことがわかります：

``` mermaid
graph LR

a(chatbot > deepseek, chatgpt) --> b(composer > cursor, copilot) --> c(agent > AutoGPT, Manus, Open Manus) 
```

- chatbot
    - ただチャットするだけのプログラム。
    - ワークフロー：あなたが質問を入力し、それがその質問の解決策を提供しますが、具体的な実行は自分で行う必要があります。
    - 代表的な仕事：deepseek、chatgpt
- composer
    - 少し手伝ってくれるインターン、コードを書くことに限られます。
    - ワークフロー：あなたが質問を入力し、それが問題を解決するコードを生成し、自動的にコードエディタのコンパイル領域に入力します、あなたは確認するだけです。
    - 代表的な仕事：cursor、copilot
- agent
    - プライベート秘書。
    - ワークフロー：あなたが質問を入力し、それがその問題の解決策を生成し、あなたの同意を得た後、完全に自動的に実行します。
    - 代表的な仕事：AutoGPT、Manus、Open Manus