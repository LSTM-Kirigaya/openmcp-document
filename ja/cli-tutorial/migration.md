# CLI Migration Notes

- `webui` now requires subcommands.
- `webui` no longer auto-starts/stops `gateway`.
- `webui` defaults to static production mode.
- `OPENMCP_WEB_DEV=1` enables Vite development mode.
- `status` and `stop` are improved with PID + port probing + health checks.
- Legacy top-level command `rpc` was removed.
