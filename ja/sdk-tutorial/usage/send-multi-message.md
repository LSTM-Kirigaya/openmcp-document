# マルチターン会話の送信

より細かく会話のコンテキストを制御したい場合、`ainvoke`メソッドに配列を渡すことができます：

```typescript
import { AssistantMessage, UserMessage } from 'openmcp-sdk/service/sdk';

const messages = [
    UserMessage('私は今日とても美味しい鶏鳴湯包を食べました'),
    AssistantMessage('はい、覚えました'),
    UserMessage('今日私は何を食べたか覚えていますか？')
]

const result = await agent.ainvoke({ messages });
console.log(result);
```

上記のコードを実行すると、次のような返答が得られます：

```
これまでの会話記録によると、あなたは今日 **鶏鳴湯包** を食べたと述べており、「とても美味しい」と表現されていましたね！😊

他の類似した美食を推薦したり、この湯包の特別な点について話したりしましょうか？
```