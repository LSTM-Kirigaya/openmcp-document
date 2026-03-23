# `web` Command

- `openmcp-cli web` without subcommand only shows help.
- Subcommands: `run`, `start`, `status`, `stop`.
- `web` and `gateway` are decoupled.
- Default mode is static hosting.
- Set `OPENMCP_WEB_DEV=1` to use Vite dev mode.

```bash
openmcp-cli web run -p 8283 -g 8282
openmcp-cli web start -p 8283 -g 8282
openmcp-cli web status -p 8283 -g 8282
openmcp-cli web stop -p 8283
```
