# The Simplest Conversation

Like all other Agent frameworks, you can use the openmcp-sdk to complete the simplest text interaction with a large model. This can be easily achieved with just a few lines of code.

## Creating an Agent

The openmcp-sdk allows you to quickly create an agent instance with the following statement:

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

const agent = new OmAgent();
```

It is the foundation for all our subsequent work.

## Setting Up the Large Model

You can set the default large model using `setDefaultLLM`. Here, we use deepseek as an example:

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: 'sk-xxxxxxxxxxxxxxxx',
    model: 'deepseek-chat',
});
```

:::tip
To prevent the API key from being exposed in the code, we recommend inputting it via environment variables:

Add the following content to your bashrc or zshrc file:

```bash
export OPENMCP_API_TOKEN=sk-xxxxxxxxxxxxxxxx
```

Then modify the above code:

```typescript
agent.setDefaultLLM({
    baseURL: 'https://api.deepseek.com',
    apiToken: process.env['OPENMCP_API_TOKEN'],
    model: 'deepseek-chat',
});
```
:::

For other large model integration parameters, please refer to the documentation of each large model provider.

## Sending a Conversation

Using the `ainvoke` method, we can directly send text to the large model to complete an interaction and conversation:

```typescript
const result = await agent.ainvoke({ messages: 'Hello, I am LSTM-Kirigaya, and my other name is Jin Hui' });
console.log(result)
```

Running the above code, you will receive the following reply:

```
Hello, LSTM-Kirigaya (Jin Hui)! Nice to meet you～  

Your name combines technology (LSTM, Long Short-Term Memory network) and anime elements (Kirigaya might remind people of Kirito from "Sword Art Online"), and the Chinese name "Jin Hui" is very poetic, sounding like a partner who is passionate about both AI and the otaku culture!  

Is there anything you'd like to chat about? Whether it's technology, ACG, or the story behind your name, I'm all ears～ ✨
```

## Displaying Call Costs

You can also set the call cost for the large model using the following code. This way, the openmcp-sdk will output the token cost of the current call after the agent loop execution ends.

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

Executing the code will produce output similar to the following:

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