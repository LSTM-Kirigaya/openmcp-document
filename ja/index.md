---
layout: doc
title: OpenMCP - 究極の MCP 開発環境
head:
  - - meta
    - name: description
      content: MCP サーバーの構築、デバッグ、デプロイを簡単に。開発者と AI 研究者向けのオープンソース MCP クライアント。リアルタイムデバッグ、マルチサーバー対応、LLM 統合機能を搭載。
  - - meta
    - property: og:title
      content: OpenMCP - 究極の MCP 開発環境
  - - meta
    - property: og:description
      content: MCP サーバーの構築、デバッグ、デプロイを簡単に。開発者と AI 研究者向けのオープンソース MCP クライアント。
  - - meta
    - property: og:url
      content: https://openmcp.kirigaya.cn/ja/
  - - meta
    - property: og:locale
      content: ja_JP
---

<NewHomeHero />

<div class="home-wrapper">

<!-- Feature Showcase Section - 機能紹介 -->
<FeatureShowcase />

<!-- Audience Section - 対象ユーザー -->
<AudienceSection />

<!-- Templates Section - テンプレート紹介 -->
<TemplatesSection />

<!-- Pricing Section - 価格 -->
<Pricing />

<!-- FAQ Section - 対話式Q&A -->
<ChatFAQ />

<!-- Footer -->
<HomeFooter />

</div>

<script setup>
// No script needed
</script>

<style>
/* 強制コンテンツコンテナ全幅 */
.VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.VPDoc .content {
  max-width: 100% !important;
}

.VPDoc.has-aside .aside {
  display: none !important;
}

/* ホームラッパー - 暗色背景 */
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
