# 连接 mcp 服务器

不同于 Claude Desktop 和其他的 MCP 客户端类产品，OpenMCP 进行 MCP 服务器连接的步骤是相当丝滑的。

:::info MCP客户端
MCP 客户端是指能够通过 MCP 协议进行通信的大模型对话客户端，通常是一个运行在本地的应用程序（因为网页没有文件IO的权限）。它的产品形式目前几乎都是聊天机器人的形式，类似于你在网页使用的 chat.deepseek.com 或者 chat.openai.com
:::

首先，打开你的 VLE，在 [[../quick-start/acquire-openmcp|获取 OpenMCP]] 中完成 OpenMCP 的安装后，我们先用 python 创建一个最简单的 mcp 服务器，来测试 mcp 客户端的连接。


## 使用 OpenMCP 一键连接

如上，我们申明了三个函数，用作 mcp 的 tool，resource 和 prompt。在 OpenMCP 中启动它们非常简单，点击右上角的 OpenMCP 图标即可连接：

![](./images/connect-simple.png)

初次使用 OpenMCP，会出现引导界面，还希望阁下可以耐心看完。

![](./images/guide.png)

如果登录完成后，如图显示连接成功，则代表当前已经成功启动并连接 mcp 服务器。

![](./images/connect-success.png)

恭喜您，万事开头难，您已经完成了最难的 mcp 连接！

## 附录：关于 uv 启动 mcp 你必须知道的

OpenMCP 已经帮你做好了很多事情，但是使用 uv 启动 mcp 服务器其实是不只一种方法的，了解更加底层的原理有助于您以不变应万变。因为 OpenMCP 对于 python 项目默认运行 `uv run mcp run main.py` 来启动 mcp 服务器，但是 GitHub 上的部分项目无法这么启动。

先了解一下正常的如下的代码应该如何通过命令行启动 mcp 吧！


```python
from mcp.server.fastmcp import FastMCP
mcp = FastMCP('锦恢的 MCP Server', version="11.45.14")

@mcp.tool(
    name='add',
    description='对两个数字进行实数域的加法'
)
def add(a: int, b: int) -> int:
    return a + b

@mcp.resource(
    uri="greeting://{name}",
    name='greeting',
    description='用于演示的一个资源协议'
)
def get_greeting(name: str) -> str:
    return f"Hello, {name}!"

@mcp.prompt(
    name='translate',
    description='进行翻译的prompt'
)
def translate(message: str) -> str:
    return f'请将下面的话语翻译成中文：\n\n{message}'
```

### 方法一：使用 mcp-cli

mcp 本身提供了脚手架，可以直接启动一段被申明的 python 代码，作为一个 mcp 服务器。使用如下代码运行它：

```bash
uv run mcp run main.py
```

### 方法二：在代码中显式启动

你也可以在代码中显式启动 mcp 服务器，在 `main.py` 的结尾添加：

```python
if __name__ == '__main__':
    mcp.run()
```

然后运行如下代码即可启动 mcp 服务器：

```bash
uv run main.py
```

:::warning
请不要运行 python main.py，因为 uv run 会使用当前虚拟环境的库，这些库在外部 python 看来是不可见的。也不要在没有使用 `mcp.run()` 启动代码的情况下就直接使用 mcp run main.py，我们之前的代码只是申明了函数，并没有实际上执行任何功能。
:::

