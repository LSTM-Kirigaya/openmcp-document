# `mcp` Command

`mcp` is used for MCP connection and protocol operations through Gateway.

## Prerequisite

Start Gateway first:

```bash
omc gateway start -p 8282
```

## Typical Flow

```bash
# 1) connect (get clientId from response)
omc mcp connect --config ./mcp-options.json

# 2) list tools
omc mcp tools-list --client-id <clientId>

# 3) call a tool
omc mcp tools-call --client-id <clientId> --name <toolName> -a '{"key":"value"}'

# 4) disconnect
omc mcp disconnect --client-id <clientId>
```

## Common Subcommands

- Session: `connect`, `disconnect`, `ping`
- Metadata: `server-version`, `lookup-env`
- Prompts: `prompts-list`, `prompts-get`
- Resources: `resources-list`, `resource-templates-list`, `resources-read`
- Tools: `tools-list`, `tools-call`

Most subcommands accept:

- `-g, --gateway <url>` (default Gateway URL)
- `--client-id <id>` when operating on an active MCP session
