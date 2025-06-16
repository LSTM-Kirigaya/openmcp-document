export default {
    nav: [
        { text: 'ホーム', link: '/ja/' },
        {
            text: 'チュートリアル',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: '概要',
                        description: 'MCPとOpenMCPについて知っておくべきこと...',
                        icon: 'openmcp',
                        link: '/ja/plugin-tutorial/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'クイックスタート',
                        description: '例を通してOpenMCPの基本概念を素早く理解しましょう',
                        icon: 'quick-fill',
                        link: '/ja/plugin-tutorial/quick-start/'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCPユーザーガイド',
                        description: 'OpenMCPクライアントの基本的な使い方',
                        icon: 'shiyongshouce',
                        link: '/ja/plugin-tutorial/usage/connect-mcp'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'MCPサーバー開発例',
                        description: 'さまざまな言語と方式で開発されたMCPサーバーの例',
                        icon: 'yibangonggongyusuan',
                        link: '/ja/plugin-tutorial/examples/mcp-examples'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'FAQ（よくある質問）',
                        description: '質問への回答と問題の解決策をご提供します',
                        icon: 'yijianchuli',
                        link: '/ja/plugin-tutorial/faq/help'
                    }
                },
            ]
        },
        { text: 'SDK', link: '/ja/sdk-tutorial/' },
        {
            text: 'もっと見る',
            items: [
                {
                    component: 'KNavItem',
                    props: {
                        title: '更新履歴',
                        description: 'プロジェクトの更新履歴を見る',
                        icon: 'a-yusuan2',
                        link: '/ja/preview/changelog'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP に参加',
                        description: 'OpenMCP プロジェクトの開発と保守への参加方法を知る',
                        icon: 'shujuzhongxin',
                        link: '/ja/preview/join'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'OpenMCP 貢献者リスト',
                        description: 'OpenMCP に貢献したメンバーについて',
                        icon: 'heike',
                        link: '/ja/preview/contributors'
                    }
                },
                {
                    component: 'KNavItem',
                    props: {
                        title: 'リソースチャンネル',
                        description: 'プロジェクトに関連するリソースや情報を取得する',
                        icon: 'xinxiang',
                        link: '/ja/preview/channel'
                    }
                }
            ]
        }
    ],
    sidebar: {
        '/ja/plugin-tutorial/': [
            {
                text: '概要',
                items: [
                    { text: 'OpenMCP の概要', link: '/ja/plugin-tutorial/index' },
                    { text: 'MCP とは？', link: '/ja/plugin-tutorial/what-is-mcp' },
                    { text: 'MCP の基本概念', link: '/ja/plugin-tutorial/concept' }
                ]
            },
            {
                text: 'クイックスタート',
                items: [
                    { text: 'クイックスタート', link: '/ja/plugin-tutorial/quick-start' },
                    { text: 'OpenMCP のインストール', link: '/ja/plugin-tutorial/quick-start/acquire-openmcp' },
                    { text: '最初の MCP', link: '/ja/plugin-tutorial/quick-start/first-mcp' },
                    { text: 'MCP のクイックデバッグ', link: '/ja/plugin-tutorial/quick-start/quick-debug' },
                    { text: '大規模言語モデルで試してみよう！', link: '/ja/plugin-tutorial/quick-start/put-into-llm' }
                ]
            },
            {
                text: '使用ガイド',
                items: [
                    { text: 'UI カラー設定', link: '/ja/plugin-tutorial/usage/ui-color' },
                    { text: 'MCP サーバーへの接続', link: '/ja/plugin-tutorial/usage/connect-mcp' },
                    { text: 'tools・resources・prompts のデバッグ', link: '/ja/plugin-tutorial/usage/debug' },
                    { text: '大規模言語モデルへの接続', link: '/ja/plugin-tutorial/usage/connect-llm' },
                    { text: '大規模言語モデルで MCP をテストする', link: '/ja/plugin-tutorial/usage/test-with-llm' },
                    { text: '複数 MCP サーバーの接続', link: '/ja/plugin-tutorial/usage/multi-server' },
                    { text: '実験結果の配布', link: '/ja/plugin-tutorial/usage/distribute-result' },
                    { text: 'SSE 認証の実装', link: '/ja/plugin-tutorial/usage/sse-oauth2' }
                ]
            },
            {
                text: '開発事例',
                items: [
                    { text: 'MCP サーバー開発事例', link: '/ja/plugin-tutorial/examples/mcp-examples' },
                    { text: '例 1. Python による天気情報 MCP サーバー (STDIO)', link: '/ja/plugin-tutorial/examples/python-simple-stdio' },
                    { text: '例 2. Go による neo4j 読み取り専用 MCP サーバー (SSE)', link: '/ja/plugin-tutorial/examples/go-neo4j-sse' },
                    { text: '例 3. Java によるドキュメントデータベース MCP (HTTP)', link: '/ja/plugin-tutorial/examples/java-es-http' },
                    { text: '例 4. TypeScript による crawl4ai ベースのスーパーウェブクローラー MCP (STDIO)', link: '/ja/plugin-tutorial/examples/typescript-crawl4ai-stdio' },
                    { text: '例 5. Python による汎用フォーム入力 MCP (STDIO)', link: '/ja/plugin-tutorial/examples/python-form-stdio' },
                    { text: '例 6. Python による Blender ベース MCP (STDIO)', link: '/ja/plugin-tutorial/examples/python-blender-stdio' },
                    { text: '例 7. Python による Cadence EDA MCP (STDIO)', link: '/ja/plugin-tutorial/examples/python-cadence-stdio' }
                ]
            },
            {
                text: 'よくある質問',
                items: [
                    { text: 'ヘルプ', link: '/ja/plugin-tutorial/faq/help' }
                ]
            }
        ],
        '/ja/sdk-tutorial/': [
            {
                text: '概要',
                items: [
                    { text: 'openmcp‑sdk.js', link: '/ja/sdk-tutorial/' }
                ]
            },
            {
                text: '基本的な使い方',
                items: [
                    { text: '最もシンプルな会話', link: '/ja/sdk-tutorial/usage/greet' },
                    { text: 'タスクループ', link: '/ja/sdk-tutorial/usage/task-loop' },
                    { text: '複数サーバー接続', link: '/ja/sdk-tutorial/usage/multi-server' }
                ]
            }
        ]
    }
}
