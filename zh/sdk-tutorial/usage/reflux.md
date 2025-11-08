# 数据回流系统

近年来，越来越多的工程经验表明，构建符合业务场景的数据飞轮是提升 agent 性能与背后大模型性能的，最关键的要素，而数据回流系统则是用于实现这一点的强大工具。

在此，openmcp 项目组也在尝试构建一套开源的数据回流系统，作为 openmcp 的附属模块。关于回流系统的细节，欢迎查看我过去的博客：[为什么我需要设计回流系统？openmcp reflux 用量化指标帮你让你更加了解你的 Agent 系统与 MCP](https://kirigaya.cn/blog/article?seq=357).

## 开启数据回流

在 openmcp 中，你可以通过 reflux 选项开启数据回流：

```typescript
const agent = new OmAgent();
agent.loadMcpConfig(useMcpConfig('word-mcp'));
const prompt = await agent.getPrompt('word_operations_prompt', {});
const query = prompt + '\n' + userInput;

const result = await agent.ainvoke({
    messages: query,
    reflux: {
        enabled: true,
        saveDir: './dataset'
    }
});
```

这样，openmcp 就会将当前 MCP 的每一次交互信息保存在 `./dataset` 文件夹下，文件名为 `{MCP服务器名称}.omdb`.

你可以利用最新版本的 openmcp 插件来查看这份文件，并进行性能分析和数据导出。

## 验证器系统

to be continue