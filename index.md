---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "OpenMCP"
  text: "面向开发者的优雅 MCP 调试器和 SDK"
  tagline: 缩短从大语言模型到智能体的最后一公里

  actions:
    - theme: brand
      text: OpenMCP 客户端
      link: /markdown-examples
    - theme: alt
      text: openmcp-sdk
      link: /api-examples
    - theme: alt
      text: GitHub
      link: https://github.com/LSTM-Kirigaya/openmcp-client

features:
  - title: 集成调试环境
    details: 将检查器与 MCP 客户端功能相结合，实现无缝开发和测试
  - title: 全面的项目管理
    details: 提供完整的项目级控制面板，实现高效的 MCP 项目监督
  - title: 多模型支持
    details: 支持多种大语言模型，具备灵活的集成能力
---

<br>
<br>
<br>

# OpenMCP 为谁准备？

<a href="https://qm.qq.com/cgi-bin/qm/qr?k=C6ZUTZvfqWoI12lWe7L93cWa1hUsuVT0&jump_from=webapi&authKey=McW6B1ogTPjPDrCyGttS890tMZGQ1KB3QLuG4aqVNRaYp4vlTSgf2c6dMcNjMuBD" target="_blank" style="display: inline-block; padding: 2px 8px; font-size: 0.8rem; background-color: var(--vp-c-brand-3); color: white; border-radius: .5em; text-decoration: none; margin-right: 10px;">开源社区爱好者</a><a href="https://qm.qq.com/cgi-bin/qm/qr?k=C6ZUTZvfqWoI12lWe7L93cWa1hUsuVT0&jump_from=webapi&authKey=McW6B1ogTPjPDrCyGttS890tMZGQ1KB3QLuG4aqVNRaYp4vlTSgf2c6dMcNjMuBD" target="_blank" style="display: inline-block; padding: 2px 8px; font-size: 0.8rem; background-color: var(--vp-button-alt-bg); color: white; border-radius: .5em; text-decoration: none; margin-right: 10px;">专业软件工程师</a><a href="https://qm.qq.com/cgi-bin/qm/qr?k=C6ZUTZvfqWoI12lWe7L93cWa1hUsuVT0&jump_from=webapi&authKey=McW6B1ogTPjPDrCyGttS890tMZGQ1KB3QLuG4aqVNRaYp4vlTSgf2c6dMcNjMuBD" target="_blank" style="display: inline-block; padding: 2px 8px; font-size: 0.8rem; background-color: var(--vp-button-alt-bg); color: white; border-radius: .5em; text-decoration: none; margin-right: 10px;">AI研发科学家</a>

<TwoSideLayout
  :texts="[
    '在编辑器中写完代码直接测试，无需打开第三方软件。提供极其丰富的功能和特性。',
    '在左侧面板自由而优雅地管理、调试和测试你的智能体。',
    '大模型调用工具的每一个细节一览无余，不满意的调用结果直接一键复现。',
    '每一次对话都会显示各项性能指标，方便进行成本管理。',
    '系统提示词管理面板，让您轻松用 mcp 服务器和系统提示词构建您的智能体应用。',
    '每一次测试的细节都会 100% 跟随 git 进行版本控制，方便你分享你的每一次试验结果，也方便你零成本复现别人的 mcp 项目。'
  ]"
  image="/images/openmcp.chatbot.png"
/>
