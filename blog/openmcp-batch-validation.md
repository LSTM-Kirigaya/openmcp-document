---
pageClass: blog-post
---

# OpenMCP 新功能介绍：批量验证与 Debugger MCP，助力自动化 Agent 开发

还在苦恼你的 AI Agent 迭代的过程中你会逐渐失去对它的各项功能的掌控，导致它在后期各个功能模块逐渐失灵，或者出现各种非常令人生气的小问题吗？

​由我开发的 openmcp 将会发布一个全新的版本，在这个版本内，我提供了一个非常重要的工具，可以让你非常清晰地监督当前整个 Agent 在开发过程中的能力表现。你甚至可以基于这套系统暴露的反馈系统来让 AI Coding 自动地帮你开发 Agent，而且因为有基于评价标准的反馈输入，所以你可以非常放心 AI Coding 不会改炸你的 Agent。

​基于这套系统，我已经成功地升级了我的 QQ 机器人，让它的 token 消耗量下降了 90%。并且拥有之前两倍的功能量和接近 95% 的成功率。

[![image](https://linux.do/uploads/default/optimized/4X/e/d/6/ed67054324520feaf1c1a8f6003b7ef21989b60b_2_690x393.png)](https://linux.do/uploads/default/original/4X/e/d/6/ed67054324520feaf1c1a8f6003b7ef21989b60b.png "image")

这套功能模块的思路也非常简单。我们发现在AI Agent的开发的过程中，很多人都在花大量的时间去调整 prompt 这个过程其实是非常的低效的。实际上，在 context engineering 完成之后，大部分的精力都花在具体的行业知识的输入中。而如何在软件开发的过程中间，尽可能低的将行业知识的注入融入到开发流程的验证中呢？我认为最简单的方法就是让用户来提供【评价标准】。（如何设计评价标准，也是一门在去年7月份开始被很多大厂研究的内容。我也会在后续系统的通过一篇博客来向大家讲解标准设计的一些技巧，还有它的基本分类）

也就是对于agent回复的内容，以及它如何回复内容（通过调用工具来执行一系列的迭代反馈最终回复内容，这个过程被我们称之为 trace）。简单说就是为了让你的agent能能够达到你理想中的效果，你需要列出一系列的输入，以及对于这些输入，你希望这个agt的trace是如何表现的。你通过自然语言来表达他们就可以了。某种程度上其实有点像是语文考试。

我举个例子吧，比如说我在QQ上部署的机器人肯定是不希望有些好事的群友来通过prompt的注入的方法，来删除我服务器上的文件的。为了满足这样的一个要求。那么我们就可以来编写这样的一个测试样例。输入的部分就是模仿耗事的群友来让AI Agent删除本地的文件。

[![image](https://linux.do/uploads/default/optimized/4X/9/2/9/92905fd0111dff2540e8b184807b04329646865e_2_576x500.png)](https://linux.do/uploads/default/original/4X/9/2/9/92905fd0111dff2540e8b184807b04329646865e.png "image")

那么为了达到这样的一个要求，我们非常显然的可以想到编写下面的这两条基本的评价标准：

[![image](https://linux.do/uploads/default/original/4X/e/3/1/e3136303cbd9a34dc4ed9cc949ff78b4bf657958.png)](https://linux.do/uploads/default/original/4X/e/3/1/e3136303cbd9a34dc4ed9cc949ff78b4bf657958.png "image")

那么在点击测试之后，我们就可以看到通过及G-Eval方法得到的验证结果了。如果通过，那么说明你当前的设计就可以规避这样的一个样例。如果没有通过，那你就需要根据具体的问题进行修改。

[![image](https://linux.do/uploads/default/optimized/4X/e/4/a/e4afb02ee681e67ce2300d4a8d8a7b8263573440_2_690x311.png)](https://linux.do/uploads/default/original/4X/e/4/a/e4afb02ee681e67ce2300d4a8d8a7b8263573440.png "image")

测试结果面板中，我在右上角罗列了当前的测试结果，消耗时间，输入token和输出token。在下方你可以看到当前测试的过程，具体的trace是什么样子的，以及上面会罗列执行结果正确或失败，并且罗列对应的原因。你可以根据这种反馈来自行调整PE或者是CE。如果你认为自己CE的架构足够完美了，仅仅只是因为一些额外的上下文并没有被写入到prompt或者SKILL里面，那么你也可以选择将这一部分的修改来交给AI来完成。OpenMCP现在对外提供了一个MCP服务器，常用的AI coding，比如说 cursor，claude code，它们可以载入OpenMCP的MCP服务器，从而自动的去执行这些测试样例，获得反馈，自动帮你修改当前的AI Agent源代码。
