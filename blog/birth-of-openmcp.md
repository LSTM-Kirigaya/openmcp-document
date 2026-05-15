---
pageClass: blog-post
---

# 全网第一个 MCP 服务器一体化开发测试软件 OpenMCP 发布！

朋友们，我宣布一件事，我的 OpenMCP 的第一个测试版本终于发布了。你们目前可以在 Vscode 或者 Trae 的插件商城下载到了：（一个月前挖的坑终于填上了 www，最近真的好忙）

![](https://picx.zhimg.com/v2-1d4d70f800f87e96a2573aa7992cfb45_r.jpg)

> Trae 的商店可能存在一定的延时，所以最新版本的

让我简单给大家介绍一下这个几乎完全由我独立开发的软件。先安装插件，然后，当你使用 python 或者别的什么东西开发 MCP 服务器的时候，可以点击右上角的 openmcp 图标，然后就可以调试当前代码的 mcp 服务了。

![](https://picx.zhimg.com/v2-d20c410d3972d7381e8e2d944b898e19_r.jpg) 刚进入页面，新建标签页，你会看到四个选项：

![](https://pic2.zhimg.com/v2-4c97c3b9f47210ddb8047d697c6926cb_r.jpg)

资源、题词、工具分别对应 MCP Inspector 里面的 resources，prompts 和 tools。

![](https://pic3.zhimg.com/v2-feb5d508100bb4dab57c099e85db7974_r.jpg)

最后一个交互测试允许你直接在真实的大模型交互环境中测试你的 MCP 服务。比如我写了一个提供天气信息的 MCP 服务，就可以通过「交互测试」进行测试

![](https://picx.zhimg.com/v2-10d1ba087c5a6e58baeec0155bb794ed_r.jpg)

效果还不错嘛！不过测试之前，你需要先选择你的大模型并填入必要的配置信息：

![](https://pica.zhimg.com/v2-f557d2ef415fbb8e54b34802584e5fb4_r.jpg)

当前插件自动支持 9 国语言（归功于我的另一个基于大模型的国际化插件 i18n haru）。因为时间有限，完全自动化进行连接的语言我只支持 python，而且只支持了 uv 包管理器的 mcp 启动。寻求更多技术支持、想要和我们一起开发的朋友可以进入我们的 QQ 群交流：782833642

（当然，你直接点 readme 里面的那个加入QQ群也是一样的）

项目目前完全开源，求个 Star

[https://github.com/LSTM-Kirigaya/openmcp-client](https://github.com/LSTM-Kirigaya/openmcp-client)

![](https://pic4.zhimg.com/v2-20a4dbf8e0e7d6a14442f3902f223835_1440w.jpg)

什么，你不知道你能为这个项目贡献什么？可以看看 readme 里面的 TODO，如果想要开的人非常多，我不介意免费给你们开一次相关的技术沙龙。当前，前提是我的开题答辩平稳度过。

不了解 MCP 的朋友可以移步我之前的文章：

*   [https://zhuanlan.zhihu.com/p/28859732955](https://zhuanlan.zhihu.com/p/28859732955)
*   [https://zhuanlan.zhihu.com/p/32593727614](https://zhuanlan.zhihu.com/p/32593727614)

当然，我很快会以 OpenMCP 为媒介，写下《优雅地开发 MCP 服务器（二） xxxxxxx》 这篇文章，来引导更多的朋友来参加这场有趣的游戏，把越来越多的软件和硬件接入大模型。

你问我为啥今天才发布？因为昨天参加漫展了，还拿了一个中杯的，难道是因为我买的通行证是 隐德来希 的？这下真挑战失败了。
