# What is MCP?

![](https://picx.zhimg.com/70/v2-1a2df8a081a76f4e90431d8a2445f495_1440w.avis)

MCP (Model Context Protocol) is an open protocol designed to standardize how applications provide context to large language models (LLMs). You can think of MCP as a Type-C interface for AI applications. Just as Type-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

The MCP protocol was introduced by Anthropic in late November 2024:

- Official documentation: [Introduction](https://modelcontextprotocol.io/introduction)
- GitHub repository: [github.com/modelcontextprotocol](https://github.com/modelcontextprotocol)

## Why do we need MCP?

We all know that from the initial ChatGPT, to later Cursor, Copilot Chatroom, and now the well-known agents, if we observe from the user interaction perspective, we can see the following evolution in current LLM products:

``` mermaid
graph LR

a(chatbot > deepseek, chatgpt) --> b(composer > cursor, copilot) --> c(agent > AutoGPT, Manus, Open Manus) 
```

- chatbot
    - Programs that only chat.
    - Workflow: You input a question, it provides a solution, but you need to execute it yourself.
    - Representative works: deepseek, chatgpt
- composer
    - Interns that can help with work, but limited to coding.
    - Workflow: You input a question, it generates code to solve the problem and automatically fills it in the editor's compilation area, you just need to review and confirm.
    - Representative works: cursor, copilot
- agent
    - Personal assistants.
    - Workflow: You input a question, it generates a solution, and after obtaining your consent, executes it automatically.
    - Representative works: AutoGPT, Manus, Open Manus

To implement agents, we need to enable LLMs to flexibly operate all software and even physical world robots, which requires defining a unified context protocol and workflow. MCP (Model Context Protocol) is the fundamental protocol born to solve this problem. An intuitive understanding is as follows:

```mermaid
graph TB

user(User)
ai(AI Software)
llm(Large Language Model)
computer(Local Environment)

user --Help me organize AI-related consultations
from the Two Sessions report into a Word file--> agent

subgraph agent

ai <--MCP--> llm
computer <--MCP--> ai

end

agent --> word(D:/Meeting Summary/Two Sessions Report AI Topic.docx)
```

:::info

Anthropic's explanation for the necessity of MCP: MCP helps you build agents and complex workflows on top of LLMs. LLMs often need to integrate with data and tools, and MCP provides the following support:

- A growing collection of pre-built integrations that your LLM can directly connect to.
- Flexibility to switch between LLM providers and vendors.
- Best practices for protecting data within infrastructure.

:::

## Overall Architecture

The core of MCP adopts a client-server architecture where a host can connect to multiple servers:

```mermaid
graph LR

host[Host MCP Client
 Browser, Code Editor, Other Tools]

server_a[MCP Server A]
server_b[MCP Server B]
server_c[MCP Server C]

db_a[(Local
Data Source A)]
db_b[(Local
Data Source B)]

remote[(Remote Service C)]

subgraph Your Computer
direction LR
host <--MCP Protocol--> server_a
host <--MCP Protocol--> server_b
host <--MCP Protocol--> server_c
server_a <--> db_a
server_b <--> db_b
end


subgraph Internet
server_c <--Web APIs--> remote
end
```

- MCP Hosts: Programs that want to access data through MCP, such as Claude Desktop, Integrated Development Environments (IDEs), or other AI tools.
- MCP Clients: Protocol clients that maintain a 1:1 connection with servers, responsible for communicating with MCP servers.
- MCP Servers: Lightweight programs, each exposing specific functionality through the standardized Model Context Protocol.
- Local Data Sources: Computer files, databases, and services that MCP servers can securely access.
- Remote Services: External systems that MCP servers can connect to via the internet (e.g., services accessed through APIs).

## MCP Workflow

In terms of workflow, MCP is very similar to LSP. In fact, like LSP, current MCP also transmits data based on [JSON-RPC 2.0](https://link.zhihu.com/?target=https%3A//www.jsonrpc.org/specification) (via Stdio or SSE). Those who have developed LSP should find MCP very intuitive. I'll use several simple and clear sequence diagrams to help everyone understand how this works.

### Initialization

Assuming our software already supports MCP clients, when the software starts, it goes through the following steps:

```mermaid
graph TB
    subgraph MCP Client
        A1[Initialization]
        A2[Get tool collection provided by MCP server 
1. Create file -> createFile
2. Delete file -> deleteFile
3. Use search engine -> useBrowser
 4. ...]
    end

    subgraph MCP Server
        B1[Initialization]
    end
    
A1 --startMCPServer--> B1
B1 --ListToolsRequestSchema--> A2
```

### Workflow

Suppose you are a C language engineer and want an agent to automatically compile a project. The execution process would be as follows:

```mermaid
graph TB
    subgraph MCP Client
        A1[User asks: Please help me delete all intermediate compilation results under build] --> A2[Send user query, resources, and MCP server tool collection to LLM]

        A3[LLM returns operation flow
1. deleteFile build/a.o
2. deleteFile build/b.o]
        A4[Organize operation results for LLM]
        A5[Display final response to user]
    end

    subgraph MCP Server
        B1[Parse LLM operation flow] --Request user consent--> B2[Execute operation flow]
    end
    
    subgraph LLM
        C1[LLM generates operation plan based on context]
        
        C2[LLM generates natural language response
based on all information]
    end
   
A3 --> B1
B2 --> A4
A2 --> C1
C1 --> A3
A4 --> C2
C2 --> A5
```

## Open Source Ecosystem

Like LSP, which has many client and server frameworks in the open source community, MCP is the same. Currently, Anthropic has open-sourced an MCP server framework: https://github.com/modelcontextprotocol/servers. Friends who want to explore LLM applications can freely use this framework. This repository also includes many officially recognized MCP servers that can serve as learning references.

In addition, there are many MCP clients and servers developed by the open source community on pulsemcp: https://www.pulsemcp.com/clients