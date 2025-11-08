# Advanced Control

## Setting Endpoints

In most agent scenarios, an autonomous agent service always has an endpoint. When the agent completes the "endpoint tool", the current agent loop should immediately stop. This approach makes our agent system more standardized and controllable. On the other hand, stopping immediately upon achieving the business goal prevents the large model from generating unnecessary summary content, thereby avoiding token wastage.

For example, if we develop a news report summarization MCP, when the MCP reaches the "export news report" step, it should stop the current loop and return the result.

The openmcp-sdk provides an "until" field for setting endpoints. Here is an example:

```typescript
const agent = new OmAgent();
agent.loadMcpConfig(useMcpConfig('word-mcp'));
const prompt = await agent.getPrompt('word_operations_prompt', {});
const query = prompt + '\n' + userInput;

const result = await agent.ainvoke({
    messages: query,
    until: { toolName: 'word_save_document' }
});

console.log('test result: ', result);
```

This MCP is used to generate Word documents. When the agent calls the `word_save_document` tool function, the task will end.