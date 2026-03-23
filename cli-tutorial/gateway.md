# `gateway` Command

Use `gateway` to manage the OpenMCP Gateway service.

## Subcommands

```bash
openmcp-cli gateway run     # foreground
openmcp-cli gateway start   # background
openmcp-cli gateway stop    # stop service
openmcp-cli gateway restart # restart service
openmcp-cli gateway status  # check status
```

Common option:

- `-p, --port <port>`: Gateway WebSocket port (default `8282`).

## Examples

```bash
openmcp-cli gateway start -p 8282
openmcp-cli gateway status -p 8282
openmcp-cli gateway stop -p 8282
```

## Status & Stop Robustness

`status` and `stop` do not rely only on local PID files:

- Port reachability and WebSocket handshake are used.
- `status` can still show `Running` when PID is external/unknown.
- `stop` can resolve PID by port and then terminate it when needed.
