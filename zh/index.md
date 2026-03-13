---
layout: doc
title: OpenMCP - 终极 MCP 开发环境
head:
  - - meta
    - name: description
      content: 轻松构建、调试和部署 MCP 服务器。面向开发者和 AI 研究人员的开源 MCP 客户端。支持实时调试、多服务器管理和 LLM 集成。
  - - meta
    - property: og:title
      content: OpenMCP - 终极 MCP 开发环境
  - - meta
    - property: og:description
      content: 轻松构建、调试和部署 MCP 服务器。面向开发者和 AI 研究人员的开源 MCP 客户端。
  - - meta
    - property: og:url
      content: https://openmcp.kirigaya.cn/zh/
  - - meta
    - property: og:locale
      content: zh_CN
---

<NewHomeHero />

<div class="home-wrapper">

<!-- Feature Showcase Section - 功能特性展示 -->
<FeatureShowcase />

<!-- Audience Section - 目标用户 -->
<AudienceSection />

<!-- Templates Section - 模板展示 -->
<TemplatesSection />

<!-- Pricing Section - 定价 -->
<Pricing />

<!-- FAQ Section - 对话式问答 -->
<ChatFAQ />

<!-- Footer -->
<HomeFooter />

</div>

<script setup>
// No script needed
</script>

<style>
/* 强制内容容器全宽 */
.VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.VPDoc .content {
  max-width: 100% !important;
}

.VPDoc.has-aside .aside {
  display: none !important;
}

/* 首页包装器 - 深色背景 */
.home-wrapper {
  position: relative;
  z-index: 1;
  background: #0a0a0f;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 0;
}
</style>
