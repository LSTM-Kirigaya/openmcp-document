# 分发您的实验结果

## 标签页恢复

openmcp 默认会实时保存您的实验结果，每一个在工作区开启的服务器默认会将结果存储在 `.openmcp/tabs.{server-name}.json` 中，其中 `{server-name}` 就是 mcp 服务器连接成功的服务器名称。

请确保您的 `.gitignore` 文件中没有包含匹配到 .openmcp 文件夹的规则。这样，当您通过 git 提交你的代码，对 agent 的代码进行管理时，当你在别的电脑上 clone 或者他人 clone 你的项目时，就能快速恢复你上一次的实验内容，继续进行实验或者开发调试。

## 连接恢复

每一个 mcp 服务器的连接信息会被保存在 `.openmcp/connection.json` 中，下面是一个例子：

```json
{
  "items": [
    [
      {
        "connectionType": "STDIO",
        "command": "mcp",
        "args": [
          "run",
          "main.py"
        ],
        "url": "",
        "cwd": "{workspace}/simple-mcp",
        "oauth": "",
        "clientName": "openmcp.connect.STDIO",
        "clientVersion": "0.0.1",
        "env": {},
        "serverInfo": {
          "name": "锦恢的 MCP Server",
          "version": "1.9.2"
        },
        "filePath": "{workspace}/simple-mcp/main.py",
        "name": "锦恢的 MCP Server",
        "version": "1.9.2"
      }
    ]
  ]
}
```


当您打开左侧的控制面板或者打开一个过去打开过的 mcp 服务器时， mcp 默认会根据上面的信息来获取工作区的服务器列表或者尝试进行自动连接。如果 openmcp 在连接 mcp 时发生了初始化错误或者保存错误，除了向 openmcp 官方求助外，您还可以尝试手动管理 `.openmcp/connection.json` 文件。