# OpenMCP CLI Overview

OpenMCP CLI is focused on three top-level command groups:

- `gateway`: start/stop/check the Gateway service.
- `web`: start/stop/check the Web UI service.
- `mcp`: connect to MCP servers and invoke MCP protocol operations.

## Quick Start

```bash
# 1) Start Gateway first
openmcp-cli gateway start -p 8282

# 2) Start Web UI (default static hosting mode)
openmcp-cli web start -p 8283 -g 8282

# 3) Check status
openmcp-cli gateway status -p 8282
openmcp-cli web status -p 8283 -g 8282
```

## Key Behavior Changes

- `web` now requires subcommands (`run | start | status | stop`).
- `web` and `gateway` are decoupled. `web` will not auto-start/stop `gateway`.
- `web` defaults to production static hosting. Use `OPENMCP_WEB_DEV=1` to enable Vite dev mode.
- `status`/`stop` are robust with PID + port probing + health checks.
- Removed legacy top-level commands (especially `rpc`).

## Next

- [gateway command](/cli-tutorial/gateway)
- [web command](/cli-tutorial/web)
- [mcp command](/cli-tutorial/mcp)
- [migration notes](/cli-tutorial/migration)
