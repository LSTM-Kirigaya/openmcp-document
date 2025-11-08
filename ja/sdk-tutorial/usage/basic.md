# 最もシンプルな対話

他のすべてのAgentフレームワークと同様に、openmcp-sdkを使用して大規模言語モデルとの最も基本的なテキスト対話を実現できます。これはわずか数行のコードで簡単に完了します。

## Agentの作成

openmcp-sdkでは以下の文で素早くagentインスタンスを作成できます：

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();
```

これは私たちの以降のすべての作業の基礎となります。

## 大規模言語モデルの設定

`setDefaultLLM`を使用してデフォルトの大規模言語モデルを設定できます。ここではdeepseekを例にします：

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: 'sk-xxxxxxxxxxxxxxxx',
    model: 'deepseek-chat',
});
```

:::tip
APIキーがコード内に存在することによる漏洩を防ぐため、環境変数からの入力を推奨します：

bashrcまたはzshrcファイルに以下を追加：

```bash
export OPENMCP_API_TOKEN=sk-xxxxxxxxxxxxxxxx
```

その後、上記コードを修正：

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: process.env['OPENMCP_API_TOKEN'],
    model: 'deepseek-chat',
});
```
:::

その他の大規模言語モデルの接続パラメータについては、各モデルプロバイダーのドキュメントを参照してください。

## 対話の送信

`ainvoke`メソッドを使用して、テキストを直接大規模言語モデルに送信し、1回の対話を完了できます：

```typescript
const result = await agent.ainvoke({ messages: '你好，我是 LSTM-Kirigaya，我的另一个名字是锦恢' });
console.log(result)
```

上記のコードを実行すると、以下のような応答が得られます：

```
你好，LSTM-Kirigaya（锦恢）！很高兴认识你～  

你的名字结合了技术（LSTM，长短期记忆网络）和动漫元素（Kirigaya可能让人联想到《刀剑神域》的桐谷和人/桐人），而“锦恢”这个中文名又很有诗意，听起来像是一位对AI和二次元都充满热情的伙伴呢！  

有什么想聊的吗？无论是技术、ACG，还是名字背后的故事，我都乐意倾听～ ✨
```

## 利用料金の表示

以下のコードで大規模言語モデルの利用料金を設定できます。これにより、openmcp-sdkはagentループの実行終了後に現在の呼び出しのtoken料金を出力します。

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: process.env['OPENMCP_API_TOKEN'],
    model: 'deepseek-chat',
    pricing: {
        inputPerMilleHitCache: 0.2,
        inputPerMille: 2,
        outputPerMille: 3,
        unit: 'rmb'
    }
});
```

コードを実行すると、以下のような出力が得られます：

```
2025/6/20 - 20:47:31 | 🚀 [crawl4ai-mcp] 1.9.1 connected, type STDIO
2025/6/20 - 20:47:35 | 🤖 Agent wants to use these tools get_web_markdown
2025/6/20 - 20:47:39 | ✅  get_web_markdown success
2025/6/20 - 20:47:46 | 🤖 Agent wants to use tools(3) get_web_markdown, get_web_markdown, get_web_markdown
2025/6/20 - 20:47:48 | ✅  get_web_markdown success
2025/6/20 - 20:47:54 | ✅  get_web_markdown success
2025/6/20 - 20:47:57 | ✅  get_web_markdown success
                        └─ ⬇️145434 ⬆️1554 🎯96.1% 💰0.0439 rmb
```