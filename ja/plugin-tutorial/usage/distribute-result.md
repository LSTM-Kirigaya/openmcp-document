# 実験結果の配布

## タブの復元

openmcpはデフォルトで実験結果をリアルタイムに保存します。ワークスペースで開かれた各サーバーは、結果を`.openmcp/tabs.{server-name}.json`に保存します。ここで`{server-name}`はmcpサーバー接続が成功したサーバー名です。

.gitignoreファイルに.openmcpフォルダに一致するルールが含まれていないことを確認してください。これにより、gitでコードをコミットしたり、agentのコードを管理したりする際に、他のコンピュータでcloneしたり、他の人があなたのプロジェクトをcloneした場合に、前回の実験内容を迅速に復元し、実験や開発デバッグを継続できます。

## 接続の復元

各mcpサーバーの接続情報は`.openmcp/connection.json`に保存されます。以下は例です：

```json
{
  "items": [
    [
      {
        "connectionType": "STDIO",
        "command": "mcp",
        "args": [
          "run",
          "main.py"
        ],
        "url": "",
        "cwd": "{workspace}/simple-mcp",
        "oauth": "",
        "clientName": "openmcp.connect.STDIO",
        "clientVersion": "0.0.1",
        "env": {},
        "serverInfo": {
          "name": "錦恢の MCP Server",
          "version": "1.9.2"
        },
        "filePath": "{workspace}/simple-mcp/main.py",
        "name": "錦恢の MCP Server",
        "version": "1.9.2"
      }
    ]
  ]
}
```

左側のコントロールパネルを開くか、過去に開いたmcpサーバーを開くと、mcpはデフォルトで上記の情報に基づいてワークスペースのサーバーリストを取得したり、自動接続を試みたりします。openmcpがmcpに接続する際に初期化エラーや保存エラーが発生した場合、openmcp公式に助けを求める以外に、`.openmcp/connection.json`ファイルを手動で管理することもできます。