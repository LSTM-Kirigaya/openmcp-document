# `webui` Command

- `omc webui` without subcommand only shows help.
- Subcommands: `run`, `start`, `status`, `stop`.
- `webui` and `gateway` are decoupled.
- Default mode is static hosting.
- Set `OPENMCP_WEB_DEV=1` to use Vite dev mode.

```bash
omc webui run -p 8283 -g 8282
omc webui start -p 8283 -g 8282
omc webui status -p 8283 -g 8282
omc webui stop -p 8283
```
