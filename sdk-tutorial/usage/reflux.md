# Data Reflux System

In recent years, increasing engineering experience has shown that building a data flywheel aligned with business scenarios is the most critical factor in enhancing agent performance and the underlying large model performance. The data reflux system serves as a powerful tool to achieve this.

Here, the openmcp project team is also attempting to build an open-source data reflux system as an auxiliary module of openmcp. For details about the reflux system, please refer to my previous blog: [Why Do I Need to Design a Reflux System? openmcp Reflux Uses Quantitative Metrics to Help You Better Understand Your Agent System and MCP](https://kirigaya.cn/blog/article?seq=357).

## Enabling Data Reflux

In openmcp, you can enable data reflux through the reflux option:

```typescript
const agent = new OmAgent();
agent.loadMcpConfig(useMcpConfig('word-mcp'));
const prompt = await agent.getPrompt('word_operations_prompt', {});
const query = prompt + '\n' + userInput;

const result = await agent.ainvoke({
    messages: query,
    reflux: {
        enabled: true,
        saveDir: './dataset'
    }
});
```

This way, openmcp will save each interaction of the current MCP in the `./dataset` folder, with the filename `{MCP server name}.omdb`.

You can use the latest version of the openmcp plugin to view this file and perform performance analysis and data export.

## Validator System

to be continue