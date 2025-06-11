# Connecting Multiple MCP Servers

OpenMCP supports connecting to multiple MCP servers simultaneously. 

For example, if you want to create an agent that can automatically research topics and compile Word documents, you could:

1. Find an MCP for web searching: [crawl4ai MCP](https://github.com/LSTM-Kirigaya/openmcp-tutorial/tree/main/crawl4ai-mcp)
2. Find an MCP for Word operations: [Office-Word-MCP-Server](https://github.com/GongRzhe/Office-Word-MCP-Server) 
3. Combine them in OpenMCP
4. Automate your task!

Assuming we've already connected the first MCP (crawl4ai), here's how to add additional servers:

![](./images/add-new-mcp.png)

## Method 1: Drag and Drop

Simply shift-click and drag the MCP server file into the OpenMCP interface to auto-fill connection parameters:

![](./images/drag-to-fill.png)

:::warning
Auto-filled commands may not always be accurate. As mentioned in [STDIO Connection Setup](http://localhost:5173/openmcp/plugin-tutorial/usage/connect-mcp.html#stdio-%E8%BF%9E%E6%8E%A5%E7%9A%84%E5%90%AF%E5%8A%A8), please review [Appendix: What You Must Know About UV MCP Startup](http://localhost:5173/openmcp/plugin-tutorial/quick-start/first-mcp.html#%E9%99%84%E5%BD%95-%E5%85%B3%E4%BA%8E-uv-%E5%90%AF%E5%8A%A8-mcp-%E4%BD%A0%E5%BF%85%E9%A1%BB%E7%9F%A5%E9%81%93%E7%9A%84) to verify connection methods.
:::

## Method 2: Manual Parameter Entry

Manually enter connection parameters (self-explanatory).

## Using Multiple Servers

Using multiple servers works similarly to single-server operation - OpenMCP automatically handles tool routing and selection. The key requirement is that tool names must be unique across servers to prevent conflicts.

If you have a use case requiring duplicate tool names, please describe your scenario via [GitHub issue](https://github.com/LSTM-Kirigaya/openmcp-client/issues). We'll evaluate supporting this based on community discussion.