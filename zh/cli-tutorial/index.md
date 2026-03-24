# OpenMCP CLI 概览

OpenMCP CLI 当前聚焦三个顶层命令：

- `gateway`：管理 Gateway 服务的启动、停止与状态。
- `webui`：管理 Web UI 服务的启动、停止与状态。
- `mcp`：连接 MCP Server 并执行协议操作。

## 快速开始

```bash
# 1) 先启动 Gateway
openmcp-cli gateway start -p 8282

# 2) 启动 Web UI（默认静态托管模式）
openmcp-cli webui start -p 8283 -g 8282

# 3) 查看状态
openmcp-cli gateway status -p 8282
openmcp-cli webui status -p 8283 -g 8282
```

## 关键变更

- `webui` 现在必须带子命令（`run | start | status | stop`）。
- `webui` 与 `gateway` 解耦，不再自动启动/停止 gateway。
- `webui` 默认生产静态托管；设置 `OPENMCP_WEB_DEV=1` 才使用 Vite 开发模式。
- `status/stop` 使用 PID + 端口探测 + 健康检查，健壮性更高。
- 旧顶层命令已收敛，`rpc` 等已移除。

## 下一步

- [gateway 命令](/zh/cli-tutorial/gateway)
- [webui 命令](/zh/cli-tutorial/webui)
- [mcp 命令](/zh/cli-tutorial/mcp)
- [迁移说明](/zh/cli-tutorial/migration)
