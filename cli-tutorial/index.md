# OpenMCP CLI Overview

OpenMCP CLI is focused on three top-level command groups:

- `gateway`: start/stop/check the Gateway service.
- `webui`: start/stop/check the Web UI service.
- `mcp`: connect to MCP servers and invoke MCP protocol operations.

## Quick Start

```bash
# 1) Start Gateway first
openmcp-cli gateway start -p 8282

# 2) Start Web UI (default static hosting mode)
openmcp-cli webui start -p 8283 -g 8282

# 3) Check status
openmcp-cli gateway status -p 8282
openmcp-cli webui status -p 8283 -g 8282
```

## Key Behavior Changes

- `webui` now requires subcommands (`run | start | status | stop`).
- `webui` and `gateway` are decoupled. `webui` will not auto-start/stop `gateway`.
- `webui` defaults to production static hosting. Use `OPENMCP_WEB_DEV=1` to enable Vite dev mode.
- `status`/`stop` are robust with PID + port probing + health checks.
- Removed legacy top-level commands (especially `rpc`).

## Next

- [gateway command](/cli-tutorial/gateway)
- [webui command](/cli-tutorial/webui)
- [mcp command](/cli-tutorial/mcp)
- [migration notes](/cli-tutorial/migration)
