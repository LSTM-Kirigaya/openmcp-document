# CLI Migration Notes

- `web` now requires subcommands.
- `web` no longer auto-starts/stops `gateway`.
- `web` defaults to static production mode.
- `OPENMCP_WEB_DEV=1` enables Vite development mode.
- `status` and `stop` are improved with PID + port probing + health checks.
- Legacy top-level command `rpc` was removed.
