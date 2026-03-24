# CLI Migration Notes

This page summarizes behavior changes from old CLI behavior to current behavior.

## Web Command Changes

- `openmcp-cli webui` now requires a subcommand and only shows help without one.
- Available subcommands: `run`, `start`, `status`, `stop`.
- `webui` is decoupled from `gateway` (no auto start/stop).
- Startup checks Gateway via WebSocket handshake first.
- Default runtime is static production hosting (not Vite dev).
- Enable Vite dev mode only with `OPENMCP_WEB_DEV=1`.

## Status / Stop Improvements

- Use PID + port probing together for better reliability.
- Added Web UI health endpoint `/__openmcp_web_health`.
- `webui status -p` and `webui stop -p` support explicit Web UI port.
- When PID file is missing, `stop` can still resolve PID by port and terminate it.

## Gateway Improvements

- `gateway start/status/stop` no longer depend only on local PID file.
- Added port reachability (WebSocket handshake) checks.
- `status` can show Running even when PID is external/unknown.
- `status -p` and `stop -p` support explicit port.

## Removed Top-level Commands

Current top-level command set is focused on:

- `gateway`
- `webui`
- `mcp`

Legacy entries such as `rpc` were removed from entry, export, command files, and related help examples.
