
# 你的第一个 MCP

实现 MCP 的编程语言很多，常见的几户所有编程语言都有官方和民间的支持，以 编程语言 + MCP 就能搜到对应的库，在 [[mcp-examples|MCP 服务器开发案例]] 中，我们也提供了不同编程语言的不同例子。

在所有编程语言中，Python 的 MCP 的开发无疑是最为简单，最容易让新手上手的，所以第一个 MCP我们先用 python 来实现。其他的编程语言实现效果也大同小异。

## 安装 uv

Python 写 mcp 服务器强烈推荐使用 uv 作为包管理器，关于 uv，你只需要知道它是一个高性能包管理器，拥有 pip 和 conda 的所有优点。没有的朋友请先通过 pip 安装 uv：

```bash
pip install uv
```

:::warning 使用 anaconda 或者 miniconda 的朋友注意了！
请不要在非 base 环境下安装 uv，请在 base 环境下安装 uv，uv 本身会做好环境隔离的工作，请不要担心 uv 会污染你的 base 环境。你不安装在 base 下或者使用全局默认的 pip 安装，我们根本不知道你安装的 uv 在哪里！base 环境下使用 pip 安装的脚本会安装在 `~/anaconda/bin/uv` 中，也请确保 `~/anaconda/bin/` 在你的 `$PATH` 中。
:::


查看 uv 的版本：

```bash
uv version
```

我的输出是：
```
uv 0.6.9 (3d9460278 2025-03-20)
```

实操时，请保证版本不要低于我的。

## 创建一个最简单的 mcp 服务器

我们进入工程目录，准备创建一个最简单的 mcp 服务器。

```bash
mkdir -p ~/codes/my-first-mcp
cd ~/codes/my-first-mcp
uv init --no-workspace
```

此时，你的项目里面应该有这三个文件：

```
README.md      main.py        pyproject.toml
```

然后，我们在当前文件夹打开 vscode 或者 trae，我们创建一个最简单的 mcp 服务器，它的功能是：
- 提供一个名为 add 的工具，用于对两个数字进行加法
- 提供一个名为 greeting 的资源，用于返回一个 greeting 消息

先安装 mcp 相关的库：

```bash
uv add mcp "mcp[cli]"
```

修改 `main.py` 内容如下：

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
