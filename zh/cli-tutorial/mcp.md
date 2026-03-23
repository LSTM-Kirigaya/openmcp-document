# `mcp` 命令

`mcp` 用于通过 Gateway 建立 MCP 连接并执行协议操作。

## 前置条件

先启动 Gateway：

```bash
openmcp-cli gateway start -p 8282
```

## 典型流程

```bash
# 1) 连接（返回 clientId）
openmcp-cli mcp connect --config ./mcp-options.json

# 2) 列工具
openmcp-cli mcp tools-list --client-id <clientId>

# 3) 调工具
openmcp-cli mcp tools-call --client-id <clientId> --name <toolName> -a '{"key":"value"}'

# 4) 断开连接
openmcp-cli mcp disconnect --client-id <clientId>
```

## 常见子命令

- 会话类：`connect`、`disconnect`、`ping`
- 元数据类：`server-version`、`lookup-env`
- Prompt 类：`prompts-list`、`prompts-get`
- Resource 类：`resources-list`、`resource-templates-list`、`resources-read`
- Tool 类：`tools-list`、`tools-call`

多数子命令会使用：

- `-g, --gateway <url>`：Gateway 地址（默认本地地址）
- `--client-id <id>`：对已连接会话执行操作时必填
