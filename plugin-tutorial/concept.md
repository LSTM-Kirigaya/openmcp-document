# MCP 基础概念

## 前言



在 [[what-is-mcp|之前的文章]] 中，我们简单介绍了 MCP 的定义和它的基本组织结构。作为开发者，我们最需要关注的其实是如何根据我们自己的业务和场景定制化地开发我们需要的 MCP 服务器，这样直接接入任何一个 MCP 客户端后，我们都可以给大模型以我们定制出的交互能力。

在正式开始教大家如何开发自己的 MCP 服务器之前，我想，或许有必要讲清楚几个基本概念。

## Resources, Prompts 和 Tools

在 [MCP 客户端协议](https://modelcontextprotocol.io/clients) 中，讲到了 MCP 协议中三个非常重要的能力类别：

- Resouces ：定制化地请求和访问本地的资源，可以是文件系统、数据库、当前代码编辑器中的文件等等原本网页端的app 无法访问到的 **静态资源**。额外的 resources 会丰富发送给大模型的上下文，使得 AI 给我们更加精准的回答。
- Prompts ：定制化一些场景下可供 AI 进行采纳的 prompt，比如如果需要 AI 定制化地返回某些格式化内容时，可以提供自定义的 prompts。
- Tools ：可供 AI 使用的工具，它必须是一个函数，比如预定酒店、打开网页、关闭台灯这些封装好的函数就可以是一个 tool，大模型会通过 function calling 的方式来使用这些 tools。 Tools 将会允许 AI 直接操作我们的电脑，甚至和现实世界发生交互。

各位拥有前后端开发经验的朋友们，可以将 Resouces 看成是「额外给予大模型的只读权限」，把 Tools 看成是「额外给予大模型的读写权限」。

MCP 客户端（比如 Claude Desktop，5ire 等）已经实现好了上述的前端部分逻辑。而具体提供什么资源，具体提供什么工具，则需要各位玩家充分想象了，也就是我们需要开发丰富多彩的 MCP Server 来允许大模型做出更多有意思的工作。

不过需要说明的一点是，目前几乎所有大模型采用了 openai 协议作为我们访问大模型的接入点。什么叫 openai 协议呢？

## openai 协议

当我们使用 python 或者 typescript 开发 app 时，往往会安装一个名为 openai 的库，里面填入你需要使用的模型厂商、模型的基础 url、使用的模型类别来直接访问大模型。而各个大模型提供商也必须支持这个库，这套协议。

比如我们在 python 中访问 deepseek 的服务就可以这么做：

```python
from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```

如果你点进这个 create 函数去看，你会发现 openai 协议需要大模型厂家支持的 feature 是非常非常多的：

```python
    @overload
    def create(
        self,
        *,
        messages: Iterable[ChatCompletionMessageParam],
        model: Union[str, ChatModel],
        audio: Optional[ChatCompletionAudioParam] | NotGiven = NOT_GIVEN,
        frequency_penalty: Optional[float] | NotGiven = NOT_GIVEN,
        function_call: completion_create_params.FunctionCall | NotGiven = NOT_GIVEN,
        functions: Iterable[completion_create_params.Function] | NotGiven = NOT_GIVEN,
        logit_bias: Optional[Dict[str, int]] | NotGiven = NOT_GIVEN,
        logprobs: Optional[bool] | NotGiven = NOT_GIVEN,
        max_completion_tokens: Optional[int] | NotGiven = NOT_GIVEN,
        max_tokens: Optional[int] | NotGiven = NOT_GIVEN,
        metadata: Optional[Metadata] | NotGiven = NOT_GIVEN,
        modalities: Optional[List[Literal["text", "audio"]]] | NotGiven = NOT_GIVEN,
        n: Optional[int] | NotGiven = NOT_GIVEN,
        parallel_tool_calls: bool | NotGiven = NOT_GIVEN,
        prediction: Optional[ChatCompletionPredictionContentParam] | NotGiven = NOT_GIVEN,
        presence_penalty: Optional[float] | NotGiven = NOT_GIVEN,
        reasoning_effort: Optional[ReasoningEffort] | NotGiven = NOT_GIVEN,
        response_format: completion_create_params.ResponseFormat | NotGiven = NOT_GIVEN,
        seed: Optional[int] | NotGiven = NOT_GIVEN,
        service_tier: Optional[Literal["auto", "default"]] | NotGiven = NOT_GIVEN,
        stop: Union[Optional[str], List[str], None] | NotGiven = NOT_GIVEN,
        store: Optional[bool] | NotGiven = NOT_GIVEN,
        stream: Optional[Literal[False]] | NotGiven = NOT_GIVEN,
        stream_options: Optional[ChatCompletionStreamOptionsParam] | NotGiven = NOT_GIVEN,
        temperature: Optional[float] | NotGiven = NOT_GIVEN,
        tool_choice: ChatCompletionToolChoiceOptionParam | NotGiven = NOT_GIVEN,
        tools: Iterable[ChatCompletionToolParam] | NotGiven = NOT_GIVEN,
        top_logprobs: Optional[int] | NotGiven = NOT_GIVEN,
        top_p: Optional[float] | NotGiven = NOT_GIVEN,
        user: str | NotGiven = NOT_GIVEN,
        web_search_options: completion_create_params.WebSearchOptions | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> ChatCompletion:
```

从上面的签名中，你应该可以看到几个很熟悉的参数，比如 `temperature`, `top_p`，很多的大模型使用软件中，有的会给你暴露这个参数进行调节。比如在 5ire 中，内容随机度就是 `temperature` 这个参数的图形化显示。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-9f8544aa917e8c128fc194adeb7161cd_1440w.png" style="width: 100%;"/>
</div>

其实如你所见，一次普普通通调用涉及到的可调控参数是非常之多的。而在所有参数中，你可以注意到一个参数叫做 `tools`:

```python
    @overload
    def create(
        self,
        *,
        messages: Iterable[ChatCompletionMessageParam],
        model: Union[str, ChatModel],
        audio: Optional[ChatCompletionAudioParam] | NotGiven = NOT_GIVEN,

		# 看这里
        tools: Iterable[ChatCompletionToolParam] | NotGiven = NOT_GIVEN,
    ) -> ChatCompletion:
```

## tool_calls 字段

在上面的 openai 协议中，有一个名为 tools 的参数。 tools 就是要求大模型厂商必须支持 function calling 这个特性，也就是我们提供一部分工具的描述（和 MCP 协议完全兼容的），在 tools 不为空的情况下，chat 函数返回的值中会包含一个特殊的字段 `tool_calls`，我们可以运行下面的我写好的让大模型调用可以查询天气的代码：

```python
from openai import OpenAI

client = OpenAI(
	api_key="Deepseek API",
	base_url="https://api.deepseek.com"
)

# 定义 tools（函数/工具列表）
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "获取给定地点的天气",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "城市，比如杭州，北京，上海",
                    }
                },
                "required": ["location"],
            },
        },
    }
]

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "你是一个很有用的 AI"},
        {"role": "user", "content": "今天杭州的天气是什么？"},
    ],
    tools=tools,  # 传入 tools 参数
    tool_choice="auto",  # 可选：控制是否强制调用某个工具
    stream=False,
)

print(response.choices[0].message)
```

运行上述代码，它的返回如下：

```python
ChatCompletionMessage(
	content='',
	refusal=None,
	role='assistant',
	annotations=None,
	audio=None,
	function_call=None,
	tool_calls=[
		ChatCompletionMessageToolCall(
			id='call_0_baeaba2b-739d-40c2-aa6c-1e61c6d7e855',
			function=Function(
				arguments='{"location":"杭州"}',
				name='get_current_weather'
			),
			type='function',
			index=0
		)
	]
)
```

可以看到上面的 `tool_calls` 给出了大模型想要如何去使用我们给出的工具。需要说明的一点是，收到上下文的限制，目前一个问题能够让大模型调取的工具上限一般不会超过 100 个，这个和大模型厂商的上下文大小有关系。奥，对了，友情提示，当你使用 MCP 客户端在使用大模型解决问题时，同一时间激活的 MCP Server 越多，消耗的 token 越多哦 :D

而目前 openai 的协议中，tools 是只支持函数类的调用。而函数类的调用往往是可以模拟出 Resources 的效果的。比如取资源，你可以描述为一个 tool。因此在正常情况下，如果大家要开发 MCP Server，最好只开发 Tools，另外两个 feature 还暂时没有得到广泛支持。



## 开始你的第一个 mcp 服务器

接下里就要让我们大显身手了！MCP 官方提供了几个封装好的 mcp sdk 来让我们快速开发一个 MCP 服务器。我看了一下，目前使用最爽，最简单的是 python 的 sdk，所以我就用 python 来简单演示一下了。

当然，如果想要使用 typescript 开发也是没问题的，typescript 的优势就是打包和部署更加简单。可以看我自用的一个模板库：[mcp-server-template](https://github.com/LSTM-Kirigaya/mcp-server-template)

### 安装基本环境

首先让我们打开一个项目，安装基本的库：

```bash
pip install uv
```

然后进入一个目录后初始化 uv 项目并安装对应的依赖：

```bash
mkdir -p ~/code/mcp-server
cd ~/code/mcp-server
uv init --no-workspace
uv add mcp "mcp[cli]"
```

创建 `server.py`

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP('锦恢的 MCP Server', version="11.45.14")

@mcp.tool('add', '对两个数字进行实数域的加法')
def add(a: int, b: int) -> int:
    return a + b

@mcp.resource("greeting://{name}", 'greeting', '用于演示的一个资源协议')
def get_greeting(name: str) -> str:
    # 访问处理 greeting://{name} 资源访问协议，然后返回
    # 此处方便起见，直接返回一个 Hello，balabala 了
    return f"Hello, {name}!"

@mcp.prompt('translate', '进行翻译的prompt')
def translate(message: str) -> str:
    return f'请将下面的话语翻译成中文：\n\n{message}'
```

上面的代码在装饰器的作用下非常容易读懂，`@mcp.tool`, `@mcp.resource` 和 `@mcp.prompt` 分别实现了

- 一个名为 add 的 tool
- 一个 greeting 协议的 resource
- 一个名为 translate 的 prompt

> 不明白装饰器是什么小白可以看看我之前的文章[Python进阶笔记（一）装饰器实现函数/类的注册](https://zhuanlan.zhihu.com/p/350821621)
> 虽然注册器里面的第二个参数 description 不是必要的，但是仍然建议写一下，要不然大模型怎么知道你这个工具是干啥的。

### 使用 Inspector 进行调试

我们可以使用 MCP 官方提供的 Inspector 工具对上面的 server 进行调试：

```bash
mcp dev server.py
```

这会启动一个前端服务器并，打开 `http://localhost:5173/` 后我们可以看到 inspector 的调试界面，先点击左侧的 `Connect` 来运行我们的 server.py 并通过 stdio 为通信管道和 web 建立通信。

Fine，可以开始愉快地进行调试了，Inspector 主要给了我们三个板块，分别对应 Resources，Prompts 和 Tools。

先来看 Resources，点击「Resource Templates」可以罗列所有注册的 Resource，比如我们上文定义的 `get_greeting`，你可以通过输入参数运行来查看这个函数是否正常工作。（因为一般情况下的这个资源协议是会访问远程数据库或者微服务的）

<div align=center>
<img src="https://picx.zhimg.com/80/v2-71fc1ad813cdbf7ecec24d878c343b96_1440w.png" style="width: 100%;"/>
</div>

Prompts 端就比较简单了，直接输入预定义参数就能获取正常的返回结果。

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-4f42899ba1163922ac2347f7cebe5362_1440w.png" style="width: 100%;"/>
</div>

Tools 端将会是我们后面调试的核心。在之前的章节我们讲过了，MCP 协议中的 Prompts 和 Resources 目前还没有被 openai 协议和各大 MCP 客户端广泛支持，因此，我们主要的服务端业务都应该是在写 tools。

我们此处提供的 tool 是实现一个简单的加法，它非常简单，我们输入 1 和 2 就可以直接看到结果是 3。我们后续会开发一个可以访问天气预报的 tool，那么到时候就非常需要一个这样的窗口来调试我们的天气信息获取是否正常了。

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-4164a900198a70a158ae441f9e441d07_1440w.png" style="width: 100%;"/>
</div>



## 结语

这篇文章，我们简单了解了 MCP 内部的一些基本概念，我认为这些概念对于诸位开发一个 MCP 服务器是大有裨益的，所以我认为有必要先讲一讲。

下面的文章中，我将带领大家探索 MCP 的奇境，一个属于 AI Agent 的时代快要到来了。
