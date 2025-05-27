---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "OpenMCP"
  text: "面向开发者的优雅 MCP 调试器和 SDK"
  tagline: 缩短从大语言模型到智能体的最后一公里
  image:
    src: /images/openmcp.png
    alt: VitePress

  actions:
    - theme: brand
      text: OpenMCP 插件
      link: /markdown-examples
    - theme: alt
      text: openmcp-sdk
      link: /sdk-tutorial
    - theme: alt
      text: GitHub
      link: https://github.com/LSTM-Kirigaya/openmcp-client
features:
  - icon:
      src: /images/icons/vscode.svg
      height: 48px
      alt: 集成调试环境
    title: 集成调试环境
    details: 将检查器与 MCP 客户端功能相结合，实现无缝开发和测试
  - icon:
      src: /images/openmcp.png
      height: 48px
      alt: 提供完整的项目级控制面板
    title: 全面的项目管理
    details: 提供完整的项目级控制面板，实现高效的 MCP 项目监督
  - icon:
      src: /images/icons/openmcp-sdk.svg
      height: 48px
      alt: 提供完整的项目级控制面板
    title: 完整的部署方案
    details: 将测试完成的 agent 通过 openmcp-sdk 部署到您的应用或者服务器上
---

<br><br>

<BiliPlayer
  url="//player.bilibili.com/player.html?isOutside=true&aid=114445745397200&bvid=BV1zYGozgEHcautoplay=false"
  cover="https://picx.zhimg.com/80/v2-8c1f5d99066ed272554146ed8caf7cc3_1440w.png"
/>

<br>

## OpenMCP 为谁准备？

<br>

<KTab>
<TwoSideLayout
  label="专业软件工程师"
  :texts="[
    '测试左移，让你的开发与测试一体化，无需打开第三方软件。提供极其丰富的功能和特性。',
    '在左侧面板自由而优雅地管理、调试和测试你的智能体。',
    '大模型调用工具的每一个细节一览无余，不满意的调用结果直接一键复现。',
    '每一次对话都会显示各项性能指标，方便进行成本管理。',
    '系统提示词管理面板，让您轻松用 mcp 服务器和系统提示词构建您的智能体应用。',
  ]"
  image="/images/openmcp.chatbot.png"
/>
<TwoSideLayout
  label="开源社区爱好者"
  :texts="[
    '测试左移，让你的开发与测试一体化，无需打开第三方软件。提供极其丰富的功能和特性。',
    'OpenMCP 完全开源，您不仅可以免费试用此产品，也可以一起加入我们，实现你的关于 Agent 的奇思妙想',
    '完全公开技术细节，您不必担心，您的创意和token会遭到剽窃',
    '可持久化的系统提示词管理面板，让您可以将实际的 mcp 服务器的系统提示词进行测试，以便于在社区内进行分享',
    '每一次测试的细节都会 100% 跟随 git 进行版本控制，方便你分享你的每一次试验结果，也方便你零成本复现别人的 mcp 项目。'
  ]"
  image="/images/opensource.png"
/>
<TwoSideLayout
  label="AI研发科学家"
  :texts="[
    '测试左移，让你的开发与测试一体化，无需打开第三方软件。提供极其丰富的功能和特性。',
    '只需几行代码，就能快速将您的科研成果以做成 mcp 服务器，从而接入任意大模型，以实现用户友好型的交互界面。',
    '所有实验数据与配置参数均自动纳入Git版本管理系统，确保研究成果可追溯、可复现，便于学术交流与论文复现。',
    '基于 OpenMCP 快速完成您的 demo，缩短创新到落地的距离',
  ]"
  image="/images/openmcp.chatbot.png"
/>
</KTab>

