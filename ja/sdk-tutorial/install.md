# インストール

openmcp-sdkは現在ESMビルドのみをサポートしています。そのため、インストール前にESM開発環境を準備してください:

```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

package.jsonで`"type": "module"`を設定することを忘れないでください。

その後、以下のコマンドでopenmcp-sdkをインストールできます:

```bash
npm install openmcp-sdk
```

agentの実行とデプロイにはtsxツールの使用を強く推奨します:

```bash
npx tsx /path/to/agent.ts
```