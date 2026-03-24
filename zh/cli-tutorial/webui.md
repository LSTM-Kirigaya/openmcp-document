# `webui` 命令

`webui` 用于管理 OpenMCP Web UI 进程。

## 重要规则

- `openmcp-cli webui` 不带子命令时只显示帮助。
- 有效子命令：`run`、`start`、`status`、`stop`。
- `webui` 不再自动启动/停止 `gateway`。
- 启动前会先做 Gateway WebSocket 握手检查（`ws://localhost:<gateway-port>`）。
- 若 Gateway 不可达，会直接报错退出并提示先启动 Gateway。

## 运行模式

- 默认模式：**生产静态托管**。
- 仅当设置环境变量 `OPENMCP_WEB_DEV=1` 时才启用 Vite 开发模式。

## 命令示例

```bash
# 前台运行
openmcp-cli webui run -p 8283 -g 8282

# 后台运行
openmcp-cli webui start -p 8283 -g 8282

# 查看状态
openmcp-cli webui status -p 8283 -g 8282

# 停止
openmcp-cli webui stop -p 8283
```

参数说明：

- `-p, --port <port>`：Web UI 端口，默认 `8283`。
- `-g, --gateway-port <port>`：Gateway WebSocket 端口，默认 `8282`。
- `-b, --browser <browser>`：指定打开浏览器（如 `chrome`、`msedge`）。

## 健康检查

Web UI 提供 `GET /__openmcp_web_health`：

- 静态模式：`{ "app": "openmcp-web-ui", "mode": "static" }`
- Vite 模式：`{ "app": "openmcp-web-ui", "mode": "vite" }`

## Windows 说明

`webui start` 在 Windows 下已做后台隐藏窗口处理，尽量避免多余黑窗弹出。
