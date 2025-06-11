# python 实现天气信息 mcp 服务器

[本期教程视频](https://www.bilibili.com/video/BV1zYGozgEHc)

## hook

等等，开始前，先让我们看一个小例子，假设我下周要去明日方舟锈影新生的漫展，所以我想要知道周六杭州的天气，于是我问大模型周六的天气，结果大模型给了我如下的回复：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-4c623ac6897e12093535b0d9ed9cf242_1440w.png" style="width: 100%;"/>
</div>

这可不行，相信朋友们也经常遇到过这样的情况，大模型总是会“授人以渔”，但是有的时候，我们往往就是想要直接知道最终结果，特别是一些无聊的生活琐事。

其实实现天气预报的程序也很多啦，那么有什么方法可以把写好的天气预报的程序接入大模型，让大模型告诉我们真实的天气情况，从而选择明天漫展的穿搭选择呢？

如果直接写函数用 function calling 显得有点麻烦，这里面涉及到很多麻烦的技术细节需要我们商榷，比如大模型提供商的API调用呀，任务循环的搭建呀，文本渲染等等，从而浪费我们宝贵的时间。而 MCP 给了我们救赎之道，今天这期教程，就教大家写一个简单的 MCP 服务器，可以让大模型拥有得知天气预报的能力。



## 前言

👉 [上篇导航](https://zhuanlan.zhihu.com/p/32593727614)

在上篇，我们简单讲解了 MCP 的基础，在这一篇，我们将正式开始着手开发我们自己的 MCP 服务器，从而将现成的应用，服务，硬件等等接入大模型。从而走完大模型到赋能终端应用的最后一公里。

工欲善其事，必先利其器。为了更加优雅快乐地开发 MCP 服务器，我们需要一个比较好的测试工具，允许我们在开发的过程看到程序的变化，并且可以直接接入大模型验证工具的有效性。

于是，我在前不久开源了一款一体化的 MCP 测试开发工具 —— OpenMCP，[全网第一个 MCP 服务器一体化开发测试软件 OpenMCP 发布！](https://zhuanlan.zhihu.com/p/1894785817186121106)

> OpenMCP QQ 群 782833642

OpenMCP 开源链接：https://github.com/LSTM-Kirigaya/openmcp-client

求个 star :D

### 第一个 MCP 项目

事已至此，先 coding 吧 :D

在打开 vscode 或者 trae 之前，先安装基本的 uv 工具，uv 是一款社区流行的版本管理工具，你只需要把它理解为性能更好的 conda 就行了。

我们先安装 uv，如果您正在使用 anaconda，一定要切换到 base 环境，再安装：

```bash
pip install uv
```

安装完成后，运行 uv

```bash
uv
```

没有报错就说明成功。uv 只会将不可以复用的依赖安装在本地，所以使用 anaconda 的朋友不用担心，uv 安装的依赖库会污染你的 base，我们接下来使用 uv 来创建一个基础的 python 项目

```bash
mkdir simple-mcp && cd simple-mcp
uv init
uv add mcp "mcp[cli]"
```

然后我们打开 vscode 或者 trae，在插件商城找到并下载 OpenMCP 插件

<div align=center>
<img src="https://picx.zhimg.com/80/v2-525c4576398078547fdd6eeef26532aa_1440w.png" style="width: 100%;"/>
</div>

先制作一个 MCP 的最小程序：

文件名：simple_mcp.py

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
    # 访问处理 greeting://{name} 资源访问协议，然后返回
    # 此处方便起见，直接返回一个 Hello，balabala 了
    return f"Hello, {name}!"

@mcp.prompt(
    name='translate',
    description='进行翻译的prompt'
)
def translate(message: str) -> str:
    return f'请将下面的话语翻译成中文：\n\n{message}'

@mcp.tool(
    name='weather',
    description='获取指定城市的天气信息'
)
def get_weather(city: str) -> str:
    """模拟天气查询协议，返回格式化字符串"""
    return f"Weather in {city}: Sunny, 25°C"

@mcp.resource(
    uri="user://{user_id}",
    name='user_profile',
    description='获取用户基本信息'
)
def get_user_profile(user_id: str) -> dict:
    """模拟用户协议，返回字典数据"""
    return {
        "id": user_id,
        "name": "张三",
        "role": "developer"
    }

@mcp.resource(
    uri="book://{isbn}",
    name='book_info',
    description='通过ISBN查询书籍信息'
)
def get_book_info(isbn: str) -> dict:
    """模拟书籍协议，返回结构化数据"""
    return {
        "isbn": isbn,
        "title": "Python编程：从入门到实践",
        "author": "Eric Matthes"
    }

@mcp.prompt(
    name='summarize',
    description='生成文本摘要的提示词模板'
)
def summarize(text: str) -> str:
    """返回摘要生成提示词"""
    return f"请用一句话总结以下内容：\n\n{text}"
```

我们试着运行它：


```bash
uv run mcp run simple_mcp.py
```

如果没有报错，但是卡住了，那么说明我们的依赖安装没有问题，按下 ctrl c 或者 ctrl z 退出即可。

在阁下看起来，这些函数都简单到毫无意义，但是请相信我，我们总需要一些简单的例子来通往最终的系统。

### Link, Start!

如果你下载了 OpenMCP 插件，那么此时你就能在打开的 python 编辑器的右上角看到 OpenMCP 的紫色图标，点击它就能启动 OpenMCP，调试当前的 MCP 了。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-f67e000371095a755d2f0d613706d61c_1440w.png" style="width: 100%;"/>
</div>

默认是以 STDIO 的方式启动，默认运行如下的命令：

```bash
uv run mcp run <当前打开的 python 文件的相对路径>
```

所以你需要保证已经安装了 mcp 脚手架，也就是 `uv add mcp "mcp[cli]"`。

打开后第一件事就是先看左下角连接状态，确保是绿色的，代表当前 OpenMCP 和你的 MCP 服务器已经握手成功。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-c4ebbbfe98d51e8b6e7de6c6d1bceb2e_1440w.png" style="width: 100%;"/>
</div>

如果连接成功，此时连接上方还会显示你当前的 MCP 服务器的名字，光标移动上去还能看到版本号。这些信息由我们如下的代码定义：

```python
mcp = FastMCP('锦恢的 MCP Server', version="11.45.14")
```

这在我们进行版本管理的时候会非常有用。请善用这套系统。


如果连接失败，可以点击左侧工具栏的第二个按钮，进入连接控制台，查看错误信息，或是手动调整连接命令：

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-684190b98dbbb9a7bf0e8c8048bd1277_1440w.png" style="width: 100%;"/>
</div>

### 初识 OpenMCP

接下来，我来简单介绍一下 OpenMCP 的基本功能模块，如果一开始，你的屏幕里什么也没有，先点击上面的加号创建一个新的标签页，此处页面中会出现下图屏幕中的四个按钮

<div align=center>
<img src="https://picx.zhimg.com/80/v2-3a4e8aa1ddaac632601532bb757a15ad_1440w.png?source=d16d100b" style="width: 100%;"/>
</div>

放大一点

<div align=center>
<img src="https://picx.zhimg.com/80/v2-ecc0705ed534e2cf0bc748ecd95f5f22_1440w.png" style="width: 100%;"/>
</div>

前三个，资源、提词和工具，分别用于调试 MCP 中的三个对应项目，也就是 Resources，Prompts 和 Tools，这三个部分的使用，基本和 MCP 官方的 Inspector 工具是一样的，那是自然，我就照着这几个抄的，诶嘿。

<div align=center>
<img src="https://pica.zhimg.com/80/v2-d767e782f667161442ea183f55ca49b1_1440w.png" style="width: 100%;"/>
</div>

然后第四个按钮「交互测试」，它是一个我开发的 MCP 客户端，其实就是一个对话窗口，你可以无缝衔接地直接在大模型中测试你当前的 MCP 服务器的功能函数。

<div align=center>
<img src="https://picx.zhimg.com/80/v2-b59ee2d290e096343fb4659baf34cf57_1440w.png" style="width: 100%;"/>
</div>


目前我暂时只支持 tools 的支持，因为 prompts 和 resources 的我还没有想好，（resource 感觉就是可以当成一个 tool），欢迎大家进群和我一起讨论：QQ群 782833642



## 开始调试天气函数

### 工具调试

还记得我们一开始给的 mcp 的例子吗？我们可以通过 OpenMCP 来快速调试这里面写的函数，比如我们本期的目标，写一个天气预报的 MCP，那么假设我们已经写好了一个天气预报的函数了，我们把它封装成一个 tool：

```python
@mcp.tool(
    name='weather',
    description='获取指定城市的天气信息'
)
def get_weather(city: str) -> str:
    """模拟天气查询协议，返回格式化字符串"""
    return f"Weather in {city}: Sunny, 25°C"
```

当然，它现在是没有意义的，因为就算把黑龙江的城市ID输入，它也返回 25 度，但是这些都不重要，我想要带阁下先走完整套流程。建立自上而下的感性认知比死抠细节更加容易让用户学懂。

那么我们现在需要调试这个函数，打开 OpenMCP，新建一个「工具」调试项目

<div align=center>
<img src="https://picx.zhimg.com/80/v2-1c67ab54d67023e408413484768377cf_1440w.png" style="width: 100%;"/>
</div>

然后此时，你在左侧的列表可以看到 weather 这个工具，选择它，然后在右侧的输入框中随便输入一些东西，按下回车（或者点击「运行」），你能看到如下的响应：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-d32a9c0d9fcab497dc03152a72c4c62b_1440w.png" style="width: 100%;"/>
</div>

看到我们函数 return 的字符串传过来了，说明没问题，链路通了。

### 交互测试

诶？我知道你编程很厉害，但是，在噼里啪啦快速写完天气预报爬虫前，我们现在看看我们要如何把已经写好的工具注入大模型对话中。为了使用大模型，我们需要先选择大模型和对应的 API，点击左侧工具栏的第三个按钮，进入 API 模块，选择你想要使用的大模型运营商、模型，填写 API token，然后点击下面的「保存」

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-367780b204d2aa50354585272b71af20_1440w.png" style="width: 100%;"/>
</div>

再新建一个标签页，选择「交互测试」，此时，我们就可以直接和大模型对话了，我们先看看没有任何工具注入的大模型会如何回应天气预报的问题，点击最下侧工具栏从左往右第三个按钮，进入工具选择界面，选择「禁用所有工具」

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-977a53ea14eae5e1a646fc73d379a422_1440w.png" style="width: 100%;"/>
</div>

点击「关闭」后，我们问大模型一个问题：

```
请问杭州的温度是多少？
```

<div align=center>
<img src="https://pic1.zhimg.com/80/v2-d3aa56602f574a6968295f9a5c93438f_1440w.png" style="width: 100%;"/>
</div>

可以看到，大模型给出了和文章开头一样的回答。非常敷衍，因为它确实无法知道。

此处，我们再单独打开「weather」工具：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-2ed66eaff604d11d52f60201fca215d4_1440w.png" style="width: 100%;"/>
</div>

问出相同的问题：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-e934d386e20b1de43fb5e0dd426de86e_1440w.png" style="width: 100%;"/>
</div>

可以看到，大模型给出了回答是 25 度，还有一些额外的推导信息。

我们不妨关注一些细节，首先，大模型并不会直接回答问题，而是会先去调用 weather 这个工具，调用参数为：

```json
{
  "city": "杭州"
}
```

然后，我们的 MCP 服务器给出了响应：

```
Weather in 杭州: Sunny, 25°C
```

从而，最终大模型才根据这些信息给出了最终的回答。也就是，这个过程我们实际调用了两次大模型的服务。而且可以看到两次调用的输入 token 数量都非常大，这是因为 OpenMCP 会将函数调用以 JSON Schema 的形式注入到请求参数中，weather 这个工具的 JSON Schema 如下图的右侧的 json 所示：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-2ed66eaff604d11d52f60201fca215d4_1440w.png" style="width: 100%;"/>
</div>

然后支持 openai 协议的大模型厂商都会针对这样的信息进行 function calling，所以使用了工具的大模型请求的输入 token 数量都会比较大。但是不需要担心，大部分厂商都实现了 KV Cache，对相同前缀的输入存在缓存，缓存命中部分的费用开销是显著低于普通的 输入输出 token 价格的。OpenMCP 在每个回答的下面都表明了当次请求的 输入 token，输出 token，总 token 和 缓存命中率。

其中

- 「总 token」 = 「输入 token」 + 「输出 token」

- 「缓存命中率」 = 「缓存命令的 token」 / 「输入 token」

> 没错，缓存命中率 是对于输入 token 的概念，输出 token 是没有 缓存命中率这个说法的。

在后续的开发中，你可以根据这些信息来针对性地对你的服务或者 prompt 进行调优。

### 完成一个真正的天气预报吧！

当然，这些代码也非常简单，直接让大模型生成就行了（其实大模型是无法生成免 API 的 python 获取天气的代码的，我是直接让大模型把我个人网站上天气预报的 go 函数翻译了一下）

我直接把函数贴上来了：

```python
import requests
import json
from typing import NamedTuple, Optional

class CityWeather(NamedTuple):
    city_name_en: str
    city_name_cn: str
    city_code: str
    temp: str
    wd: str
    ws: str
    sd: str
    aqi: str
    weather: str

def get_city_weather_by_city_name(city_code: str) -> Optional[CityWeather]:
    """根据城市名获取天气信息"""
    
    if not city_code:
        print(f"找不到{city_code}对应的城市")
        return None
    
    try:
        # 构造请求URL
        url = f"http://d1.weather.com.cn/sk_2d/{city_code}.html"
        
        # 设置请求头
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.0.0",
            "Host": "d1.weather.com.cn",
            "Referer": "http://www.weather.com.cn/"
        }
        
        # 发送HTTP请求
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # 解析JSON数据
        # 解析JSON数据前先处理编码问题
        content = response.text.encode('latin1').decode('unicode_escape')
        json_start = content.find("{")
        json_str = content[json_start:]
        
        weather_data = json.loads(json_str)
        
        # 构造返回对象
        return CityWeather(
            city_name_en=weather_data.get("nameen", ""),
            city_name_cn=weather_data.get("cityname", "").encode('latin1').decode('utf-8'),
            city_code=weather_data.get("city", ""),
            temp=weather_data.get("temp", ""),
            wd=weather_data.get("wd", "").encode('latin1').decode('utf-8'),
            ws=weather_data.get("ws", "").encode('latin1').decode('utf-8'),
            sd=weather_data.get("sd", ""),
            aqi=weather_data.get("aqi", ""),
            weather=weather_data.get("weather", "").encode('latin1').decode('utf-8')
        )
        
    except Exception as e:
        print(f"获取天气信息失败: {str(e)}")
        return None

from mcp.server.fastmcp import FastMCP

mcp = FastMCP('weather', version="0.0.1")

@mcp.tool(
    name='get_weather_by_city_code',
    description='根据城市天气预报的城市编码 (int)，获取指定城市的天气信息'
)
def get_weather_by_code(city_code: int) -> str:
    """模拟天气查询协议，返回格式化字符串"""
    city_weather = get_city_weather_by_city_name(city_code)
    return str(city_weather)
```


这里有几个点一定要注意：

1. 如果你的输入参数是数字，就算是城市编码这种比较长的数字，请一定定义成 int，因为 mcp 底层的是要走 JSON 正反序列化的，而 "114514" 这样的字符串会被 JSON 反序列化成 114514，而不是 "114514" 这个字符串。你实在要用 str 来表示一个很长的数字，那么就在前面加一个前缀，比如 "code-114514"，避免被反序列化成数字，从而触发 mcp 内部的 type check error
2. tool 的 name 请按照 python 的变量命名要求进行命名，否则部分大模型厂商会给你报错。

好，我们先测试一下：

<div align=center>
<img src="https://picx.zhimg.com/80/v2-d2dbe925010b676482ee57258c14fca7_1440w.png" style="width: 100%;"/>
</div>

可以看到，我们的天气查询工具已经可以正常工作了。

那么接下来，我们就可以把这个工具注入到大模型中了。点击 「交互测试」，只激活当前这个工具，然后询问大模型：
```
请问杭州的天气是多少？
```

<div align=center>
<img src="https://picx.zhimg.com/80/v2-e581c6461190b358adda50ce83633520_1440w.png" style="width: 100%;"/>
</div>

完美！

如此，我们便完成了一个天气查询工具的开发。并且轻松地注入到了我们的大模型中。在实际提供商业级部署方案的时候，虽然 mcp 目前的 stdio 冷启动速度足够快，但是考虑到拓展性等多方面因素，SSE 还是我们首选的连接方案，关于 SSE 的使用，我们下期再聊。

OpenMCP 开源链接：https://github.com/LSTM-Kirigaya/openmcp-client