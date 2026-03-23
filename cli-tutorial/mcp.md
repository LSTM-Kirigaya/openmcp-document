# `mcp` Command

`mcp` is used for MCP connection and protocol operations through Gateway.

## Prerequisite

Start Gateway first:

```bash
openmcp-cli gateway start -p 8282
```

## Typical Flow

```bash
# 1) connect (get clientId from response)
openmcp-cli mcp connect --config ./mcp-options.json

# 2) list tools
openmcp-cli mcp tools-list --client-id <clientId>

# 3) call a tool
openmcp-cli mcp tools-call --client-id <clientId> --name <toolName> -a '{"key":"value"}'

# 4) disconnect
openmcp-cli mcp disconnect --client-id <clientId>
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
