<div align="center" style="margin-bottom: 30px; border-radius: .5em; border: 1px solid var(--vp-c-brand-2); background-color: var(--vp-bg-brand-2); padding: 30px 10px;">

<img src="/images/icons/openmcp-sdk.svg" width="200px"/>

<h3>openmcp-sdk: The Deployment Framework for OpenMCP</h3>
<h4>Deploy your agent from lab to production at lightning speed</h4>

</div>

# Introduction & Installation

## What is openmcp-sdk.js

The OpenMCP Client provides an all-in-one MCP debugging solution, which is great - but not quite exciting enough.

Why? Because we always want to turn our completed MCPs into distributable apps or deploy them to servers as function services or microservices. However, the OpenMCP Client implements all the logic for interacting with large models and using tools on the frontend, making it extremely challenging to transform MCPs into standalone applications or services tied to large models.

This is where openmcp-sdk.js comes in as a lightweight solution. It's a Node.js library that enables you to seamlessly deploy your developed MCPs and debugged workflows as agents through Node.js.


## Install

::: code-group
```bash [npm]
npm install openmcp-sdk
```

```bash [yarn]
yarn add openmcp-sdk
```

```bash [pnpm]
pnpm add openmcp-sdk
```
:::

:::warning
Currently, openmcp-sdk only supports ESM-style imports.
:::

## Usage

Here's the English translation with proper technical formatting:

```markdown
First, let's create a new TypeScript project:

```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

> Note: openmcp-sdk now only supports ESM imports. Remember to set `"type": "module"` in your package.json

Then install openmcp-sdk:

```bash
npm install openmcp-sdk
```

Now let's create a main.ts file - with just a few lines of code, we can deploy the above configuration as a working agent:

```typescript
import { OmAgent } from 'openmcp-sdk/service/sdk';

// create Agent
const agent = new OmAgent();
    
// Load configuration, which can be automatically generated after debugging with openmcp client
agent.loadMcpConfig('./mcpconfig.json');

// Read the debugged prompt
const prompt = await agent.getPrompt('hacknews', { topn: '5' });    

// Execute the task
const res = await agent.ainvoke({ messages: prompt });

console.log('⚙️ Agent Response', res);
```

`mcpconfig.json` can be generated from [openmcp client](https://github.com/LSTM-Kirigaya/openmcp-client) directly, you don't have to write it by yourself. Here is the example:

```json
{
    "version": "1.0.0",
    "namespace": "openmcp",
    "mcpServers": {
        "my-browser": {
            "command": "mcp",
            "args": [
                "run",
                "~/projects/openmcp-tutorial/crawl4ai-mcp/main.py"
            ],
            "description": "A MCP for long-term memory support",
            "prompts": [
                "hacknews"
            ]
        }
    },
    "defaultLLM": {
        "baseURL": "https://api.deepseek.com",
        "apiToken": "sk-xxxxxxxxxxxxxx",
        "model": "deepseek-chat"
    }
}
```

Run your agent with `npx tsx main.ts` and get example output:

```
[2025/6/20 20:47:31] 🚀 [crawl4ai-mcp] 1.9.1 connected
[2025/6/20 20:47:35] 🤖 Agent wants to use these tools get_web_markdown
[2025/6/20 20:47:35] 🔧 using tool get_web_markdown
[2025/6/20 20:47:39] ✓  use tools success
[2025/6/20 20:47:46] 🤖 Agent wants to use these tools get_web_markdown, get_web_markdown, get_web_markdown
[2025/6/20 20:47:46] 🔧 using tool get_web_markdown
[2025/6/20 20:47:48] ✓  use tools success
[2025/6/20 20:47:48] 🔧 using tool get_web_markdown
[2025/6/20 20:47:54] ✓  use tools success
[2025/6/20 20:47:54] 🔧 using tool get_web_markdown
[2025/6/20 20:47:57] ✓  use tools success

⚙️ Agent Response
⌨️ Today's Tech Article Roundup

📌 How to Detect or Observe Passing Gravitational Waves?
Summary: This article explores the physics of gravitational waves, explaining their effects on space-time and how humans might perceive or observe this cosmic phenomenon.
Author: ynoxinul
Posted: 2 hours ago
Link: https://physics.stackexchange.com/questions/338912/how-would-a-passing-gravitational-wave-look-or-feel

📌 Learn Makefile Tutorial
Summary: A comprehensive Makefile tutorial for beginners and advanced users, covering basic syntax, variables, automatic rules, and advanced features to help developers manage project builds efficiently.
Author: dsego
Posted: 4 hours ago
Link: https://makefiletutorial.com/

📌 Hurl: Run and Test HTTP Requests in Plain Text
Summary: Hurl is a command-line tool that allows defining and executing HTTP requests in plain text format, ideal for data fetching and HTTP session testing. It supports chained requests, value capture, and response queries, making it perfect for testing REST, SOAP, and GraphQL APIs.
Author: flykespice
Posted: 8 hours ago
Link: https://github.com/Orange-OpenSource/hurl
```
