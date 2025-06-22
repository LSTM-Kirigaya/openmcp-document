# 发送多轮对话

如果想要更加精细地控制对话的上下文，可以传递一个数组给 `ainvoke` 方法：

```typescript
import { AssistantMessage, UserMessage } from 'openmcp-sdk/service/sdk';

const messages = [
    UserMessage('我今天刚刚吃过一份非常棒的鸡鸣汤包'),
    AssistantMessage('好的，我记住了'),
    UserMessage('请问我今天吃过了什么？')
]

const result = await agent.ainvoke({ messages });
console.log(result);
```

运行上面的代码，你会得到如下的回复：

```
根据之前的对话记录，你今天提到过吃了一份 **鸡鸣汤包**，并形容它“非常棒”！ 😊  

需要帮你推荐其他类似的美食，或者聊聊这道汤包的特别之处吗？
```

