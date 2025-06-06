---
layout: doc
---

# 常见问题解答

## 错误代码说明

### 32000 - MCP 连接失败

MCP 连接失败可能有多种原因，以下是一些常见情况：

• **虚拟环境路径不匹配**

虚拟环境（venv）与入口文件路径不匹配是导致连接失败的常见原因之一。

详细的解决方案请参考：[配置说明](./venv-not-same-path/venv-not-same-path.md)

---

• **其他可能的原因**

- 端口被占用
- 环境变量配置错误
- 依赖库未正确安装

> 如果您遇到以上问题，请先查看错误日志获取详细信息。如果问题仍然存在，可以在 [GitHub Issues](https://github.com/LSTM-Kirigaya/openmcp-client/issues) 中寻求帮助。
