# `web` Command

`web` manages the OpenMCP Web UI process.

## Important Rules

- `openmcp-cli web` without subcommand only shows help.
- Valid subcommands: `run`, `start`, `status`, `stop`.
- `web` no longer auto-starts or auto-stops `gateway`.
- Before starting, CLI checks Gateway reachability by WebSocket handshake (`ws://localhost:<gateway-port>`).
- If Gateway is unreachable, command exits with an error and asks you to start Gateway first.

## Modes

- Default mode: **production static hosting**.
- Dev mode (Vite) is enabled only when environment variable `OPENMCP_WEB_DEV=1`.

## Commands

```bash
# foreground
openmcp-cli web run -p 8283 -g 8282

# background
openmcp-cli web start -p 8283 -g 8282

# status
openmcp-cli web status -p 8283 -g 8282

# stop
openmcp-cli web stop -p 8283
```

Options:

- `-p, --port <port>`: Web UI port (default `8283`).
- `-g, --gateway-port <port>`: Gateway WebSocket port (default `8282`).
- `-b, --browser <browser>`: optional browser name for opening UI.

## Health Check

Web UI provides `GET /__openmcp_web_health`:

- static mode: `{ "app": "openmcp-web-ui", "mode": "static" }`
- vite mode: `{ "app": "openmcp-web-ui", "mode": "vite" }`

## Windows Note

`web start` background launch includes hidden-window handling on Windows to avoid an extra black console window.
