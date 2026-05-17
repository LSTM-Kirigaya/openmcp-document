# `gateway` 命令

`gateway` 用于管理 OpenMCP Gateway 服务。

## 子命令

```bash
omc gateway run     # 前台运行
omc gateway start   # 后台启动
omc gateway stop    # 停止服务
omc gateway restart # 重启服务
omc gateway status  # 查看状态
```

常用参数：

- `-p, --port <port>`：Gateway WebSocket 端口，默认 `8282`。

## 示例

```bash
omc gateway start -p 8282
omc gateway status -p 8282
omc gateway stop -p 8282
```

## 状态/停止健壮性

`status` 与 `stop` 不再只依赖本地 PID 文件：

- 会结合端口可达性与 WebSocket 握手判断。
- `status` 在 PID 缺失（external/unknown）时也可显示 Running。
- `stop` 在无 PID 时可通过端口反查 PID 并尝试结束进程。
