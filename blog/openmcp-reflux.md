---
pageClass: blog-post
---

# 为什么我需要设计回流系统？openmcp reflux 用量化指标帮你让你更加了解你的 Agent 系统与 MCP

## 为什么我需要设计回流系统？

如果不考虑架构特性和拓展性，需求和设计边界明确的情况下 agent 的开发本身难度并不是很高，难就难在验证上。而保持对线上 agent 数据的采集，我想，是一个很好的习惯。在和 coze 和 蚂蚁 的工程师交流下后，我发现他们也有和我一样的想法，我们把这样一套采集 agent 部署后 trace 的模块称为 agent 的数据回流模块。

> trace 这个概念取自编程语言的编译原理中的 traceback，编程器中，将抛出错误的函数的调用所在的函数栈打印出来的 debug 做法叫做 traceback，而打印出的函数栈可以看成系统执行到当前动作的“轨迹”，称为 trace。在 agent 开发中，也是类似，在一次 Agent Loop 中，哪些工具被调用，它们顺着时间串起来的序列数据，就是独属 agent 的 trace。

## OpenMCP Reflux Preview

下面是功能预览，这套 reflux 系统可同时运行在 openmcp 的插件端和 sdk 端，这意味着无论是开发时的测试验证，还是上线的 agent 服务，你都可以利用 openmcp reflux 来自动完成数据的回流，以便后续的全自动 PE 并为模型后训练构建 RLVR 训练集。

在 openmcp 中查看数据回流模块的方法：新建空白页面 → 选择「查看回流数据」，此处就会打开一个查看器，你能在此查看当前 MCP 服务器回流的数据。

![](https://pic1.zhimg.com/v2-6612704640553a5f34dcff0ff1552705_r.jpg?source=d16d100b)

预览

![](https://picx.zhimg.com/v2-546972754d3978ace658518acb1ebb33_r.jpg?source=d16d100b)

![](https://pic1.zhimg.com/v2-053c000c640eaadaefb3307c5270790e_r.jpg?source=d16d100b)

后续工作的重点在于两部分：Agent 指标与 Evaluator 系统。

## Agent 指标

我将我比较关心的指标罗列如下，如何设计出可让 reflux 自动或者半自动记录这些指标会是我后续的工作：

*   Success Rate: 任务执行成功率。
    
*   LLM Sensitivity：不同大模型下的执行结果如何。
    
*   Prompt Sensitivity：同义词替换后，系统的调用结果会如何。
    
*   Hallucination：告知系统某些信息你不知道后，执行结果中是否会无视上下文对执行器的参数瞎猜。
    
*   Scalability：随着工具数量的增长，相同任务的执行结果会如何。
    
*   Autonomy ：大模型对于流程会不会自己去主动调用工具。
    

## Evaluator 系统

在系统迭代的后期，并非所有数据都需要回流，且我们希望获取某个版本的具体指标，这个时候，一套成熟的验证器系统就至关重要了。如何设计一套可拓展的验证器设置框架，也是后续的重点工作。

很多人可能会质疑，这个 Evaluator 不就是传统软件测试的 test suite 吗？非也非也，因为 LaaJ 的存在，目前最前沿的 Agent 的 Evaluator 的设计也是 agentic 的，换句话说，Agent 的 Evaluator 本身也是一个 Agent。这是和传统软件测试的 test suite 最大的区别。

![](https://picx.zhimg.com/v2-c93cfe71e3002a3260eb6c6c1241c487_r.jpg?source=d16d100b)

* * *

目前基础的组件都做完了，显然数据不断积累起来吧！第一个阶段的工作完成后（不包括 Agent 指标和 Evaluator 系统），我就要继续更新 AI Agent 系统博客了。

如果你觉得我的工作有意思的话，请不要忘记帮 openmcp 点一个免费的 star，谢谢！[https://github.com/LSTM-Kirigaya/openmcp-client/](https://github.com/LSTM-Kirigaya/openmcp-client/)
