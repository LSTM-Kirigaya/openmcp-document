# タスクループ

openmcp-sdkはタスクループのメカニズムでagentを構築し、ユーザーがそれと対話できるようにしています。ユーザーがこのタスクループをリアルタイムで制御する必要がある場合、openmcp-sdkが提供するイベントを通じて対応するフック関数を登録することで実現できます。

[クイックデプロイ](./fast-deploy.md)の例を挙げると、以下のコードでタスクループを制御するオブジェクトを取得できます:

```typescript
import { OmAgent } from '../openmcp-sdk/service/sdk';

const agent = new OmAgent();
agent.loadMcpConfig('./mcpconfig.json');

const loop = await agent.getLoop();
```

:::warning
フックの登録とloopの取得は`agent.ainvoke`を実行する前に完了させる必要があります！
:::

この`loop`オブジェクトを通じて、以下のフックを登録できます:

- `registerOnChunk`: モデルがchunkを返した時にトリガー
- `registerOnDone`: タスク完了時にトリガー
- `registerOnError`: タスクエラー時にトリガー
- `registerOnEpoch`: 各タスクエポック開始時にトリガー
- `registerOnToolCall`: ツール関数呼び出し前にトリガー
- `registerOnToolCalled`: ツール関数呼び出し後にトリガー

これらのフック関数はコールバック関数を受け取り、対応するイベント発生時に呼び出されます。

```typescript
loop.registerOnChunk((chunk) => {
    console.log('⚙️ Agent Chunk', chunk);
});

loop.registerOnDone(() => {
    console.log('⚙️ Agent Done');
});

loop.registerOnError((err) => {
    console.log('⚙️ Agent Error', err);
});

loop.registerOnEpoch(() => {
    console.log('⚙️ Agent Epoch');
});

loop.registerOnToolCall((toolCall) => {
    console.log('⚙️ Agent Tool Call', toolCall);
    return toolCall;
});

loop.registerOnToolCalled((toolCalled) => {
    console.log('⚙️ Agent Tool Called', toolCalled);
    return toolCalled;
});
```