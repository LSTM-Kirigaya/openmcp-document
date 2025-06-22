# 複数のMCPサーババーに接続

openmcp-sdkでは、1つのエージェントで複数のmcpサーバーに同時接続するための2つの方法を提供しています。

## 方法1: mcpconfig.json (推奨)

openmcpプラグインでは、以下のパネルから複数のmcpサーバーに接続してテストできます

![](./images/openmcp-multi-server.png)

その後、[高速デプロイ](./fast-deploy.md)の手順に従ってエクスポートすると、SDKが自動的にこれらの複数サーバーに接続します。

## 方法2: addMcpServer

以下のコードを使用して、エージェントに複数のmcpサーバーを追加することもできます:

```typescript
agent.addMcpServer({
    connectionType: 'STDIO',
    commandString: 'uv run main.py',
    cwd: '/path/to/workspace',
});

agent.addMcpServer({
    connectionType: 'STREAMABLE_HTTP',
    url: 'go run /path/to/main.go',
});
```