# `webui` Command

- `openmcp-cli webui` without subcommand only shows help.
- Subcommands: `run`, `start`, `status`, `stop`.
- `webui` and `gateway` are decoupled.
- Default mode is static hosting.
- Set `OPENMCP_WEB_DEV=1` to use Vite dev mode.

```bash
openmcp-cli webui run -p 8283 -g 8282
openmcp-cli webui start -p 8283 -g 8282
openmcp-cli webui status -p 8283 -g 8282
openmcp-cli webui stop -p 8283
```
