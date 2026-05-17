# `gateway` Command

Use `gateway` to manage the OpenMCP Gateway service.

## Subcommands

```bash
omc gateway run     # foreground
omc gateway start   # background
omc gateway stop    # stop service
omc gateway restart # restart service
omc gateway status  # check status
```

Common option:

- `-p, --port <port>`: Gateway WebSocket port (default `8282`).

## Examples

```bash
omc gateway start -p 8282
omc gateway status -p 8282
omc gateway stop -p 8282
```

## Status & Stop Robustness

`status` and `stop` do not rely only on local PID files:

- Port reachability and WebSocket handshake are used.
- `status` can still show `Running` when PID is external/unknown.
- `stop` can resolve PID by port and then terminate it when needed.
