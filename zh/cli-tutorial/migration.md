# CLI 迁移说明

本文档总结旧行为到当前行为的主要变化。

## Web 命令变更

- `openmcp-cli web` 必须带子命令；不带时仅显示帮助。
- 子命令固定为：`run`、`start`、`status`、`stop`。
- `web` 与 `gateway` 解耦，不再自动启动/停止 gateway。
- 启动前会先做 Gateway WebSocket 握手可达性检查。
- 默认运行模式改为静态生产托管（非 Vite dev）。
- 仅 `OPENMCP_WEB_DEV=1` 时启用 Vite 开发模式。

## Status / Stop 增强

- 结合 PID 与端口探测，不再单点依赖 PID 文件。
- 新增 Web UI 健康检查端点：`/__openmcp_web_health`。
- `web status -p`、`web stop -p` 支持显式指定 Web UI 端口。
- 无 PID 时可通过端口反查 PID 并尝试结束进程。

## Gateway 命令增强

- `gateway start/status/stop` 不再只依赖本地 PID 文件。
- 增加端口可达性（WebSocket 握手）判断。
- `status` 即使无 PID 也可显示 Running（external/unknown）。
- `status -p` 与 `stop -p` 支持指定端口。

## 顶层命令收敛

当前文档聚焦三类顶层命令：

- `gateway`
- `web`
- `mcp`

旧命令（尤其 `rpc`）已从入口、导出、命令文件和帮助示例中移除。
