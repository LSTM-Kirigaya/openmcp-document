# Send Multi-turn Conversation

If you want more granular control over the conversation context, you can pass an array to the `ainvoke` method:

```typescript
import { AssistantMessage, UserMessage } from 'openmcp-sdk/service/sdk';

const messages = [
    UserMessage('I just had an amazing bowl of Jiming soup dumplings today'),
    AssistantMessage('Got it, I’ve made a note'),
    UserMessage('Can you recall what I ate today?')
]

const result = await agent.ainvoke({ messages });
console.log(result);
```

Running the above code will give you the following response:

```
Based on our previous conversation, you mentioned having **Jiming soup dumplings** today and described them as "amazing"! 😊  

Would you like recommendations for similar dishes or to chat more about what made these dumplings special?
```