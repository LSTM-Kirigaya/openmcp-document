# 连接多个 MCP 服务器

openmcp 支持连接多个 MCP 服务器。

假设你现在想要实现一个可以自动查阅资料并且整理成 word 文档的 agent，你可以这样做：

1. 找到能进行网络搜索的 mcp：[crawl4ai mcp](https://github.com/LSTM-Kirigaya/openmcp-tutorial/tree/main/crawl4ai-mcp)
2. 找到能进行 word 操作的 mcp：[Office-Word-MCP-Server](https://github.com/GongRzhe/Office-Word-MCP-Server)
3. 在 openmcp 中把它们组合起来。
4. 自动完成你的任务！

假设，我们已经连接了第一个 mcp，也就是 crawl4ai mcp，我们可以添加额外的 mcp 服务器：

![](./images/add-new-mcp.png)