# `mcp` Command

Use `mcp` for MCP connection and protocol operations.

```bash
openmcp-cli gateway start -p 8282
openmcp-cli mcp connect --config ./mcp-options.json
openmcp-cli mcp tools-list --client-id <clientId>
openmcp-cli mcp tools-call --client-id <clientId> --name <toolName> -a '{"key":"value"}'
openmcp-cli mcp disconnect --client-id <clientId>
```
