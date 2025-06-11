# Your First MCP

There are many programming languages that can implement MCP. The major ones have both official and community support, and you can easily find corresponding libraries by searching for "programming language + MCP". In the [[mcp-examples|MCP Server Development Examples]] section, we also provide examples in different programming languages.

Among all the programming languages, Python is undoubtedly the easiest and simplest for developing MCP, especially for beginners. So for our first MCP, we will use Python. The results in other programming languages are quite similar.

## Installing `uv`

When writing an MCP server in Python, it's highly recommended to use `uv` as the package manager. All you need to know about `uv` is that it is a high-performance package manager, combining the best features of pip and conda. If you don't have it, please install `uv` using pip:

```bash
pip install uv
```

\:::warning Attention Anaconda or Miniconda users!
Please do not install `uv` in any environment other than the base environment. Install it in the base environment, as `uv` will handle environment isolation. Do not worry about it contaminating your base environment. If you don't install it in the base environment or use the global pip, we won't know where you installed `uv`. When installed via pip in the base environment, the script will be installed in `~/anaconda/bin/uv`. Please make sure that `~/anaconda/bin/` is included in your `$PATH`.
\:::

Check the version of `uv`:

```bash
uv version
```

My output is:

```
uv 0.6.9 (3d9460278 2025-03-20)
```

Make sure your version is not lower than mine when operating.

## Creating the Simplest MCP Server

Let's enter the project directory and create the simplest MCP server.

```bash
mkdir -p ~/codes/my-first-mcp
cd ~/codes/my-first-mcp
uv init --no-workspace
```

At this point, your project should have the following three files:

```
README.md      main.py        pyproject.toml
```

Then, open the current folder in vscode or trae. We’ll create the simplest MCP server, which will:

* Provide a tool named `add` for adding two numbers.
* Provide a resource named `greeting` to return a greeting message.

First, install the necessary MCP libraries:

```bash
uv add mcp "mcp[cli]"
```

Edit the content of `main.py` as follows:

```python
from mcp.server.fastmcp import FastMCP
mcp = FastMCP('JinHui’s MCP Server', version="11.45.14")

@mcp.tool(
    name='add',
    description='Addition of two numbers in the real domain'
)
def add(a: int, b: int) -> int:
    return a + b

@mcp.resource(
    uri="greeting://{name}",
    name='greeting',
    description='A resource protocol for demonstration purposes'
)
def get_greeting(name: str) -> str:
    return f"Hello, {name}!"

@mcp.prompt(
    name='translate',
    description='A prompt for translation'
)
def translate(message: str) -> str:
    return f'Please translate the following sentence into Chinese:\n\n{message}'
```

## One-Click Connection Using OpenMCP

As mentioned above, we declared three functions as MCP tools, resources, and prompts. It’s very easy to start them in OpenMCP. Simply click the OpenMCP icon at the top right to connect:

![](./images/connect-simple.png)

The first time you use OpenMCP, a guide will appear. We hope you can take a moment to read it carefully.

![](./images/guide.png)

Once you log in and see the "Connection Successful" message as shown in the image, this indicates that the MCP server has been successfully started and connected.

![](./images/connect-success.png)

Congratulations, the hardest part is over — you've successfully made the MCP connection!

For more information about connecting to an MCP server using OpenMCP, you can refer to the chapter [[connect-mcp|Connecting to an MCP Server]] in the manual.

## Appendix: What You Need to Know About Starting MCP with `uv`

OpenMCP has already done a lot of work for you, but there are actually multiple ways to start an MCP server with `uv`. Understanding the underlying principles will help you adapt to various situations. While OpenMCP uses `uv run mcp run main.py` to start the MCP server for Python projects, some GitHub projects may not work in this way.

Let’s first learn how to start the MCP server from the command line using the Python code in the above example!

### Method 1: Using `mcp-cli`

MCP itself provides a scaffolding tool that can directly start the declared Python code as an MCP server. Use the following command to run it:

```bash
uv run mcp run main.py
```

### Method 2: Explicitly Start in the Code

You can also explicitly start the MCP server within the code by adding the following to the end of `main.py`:

```python
if __name__ == '__main__':
    mcp.run()
```

Then run the following command to start the MCP server:

```bash
uv run main.py
```
