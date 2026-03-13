---
layout: doc
title: OpenMCP - The Ultimate MCP Development Environment
head:
  - - meta
    - name: description
      content: Build, debug, and deploy MCP servers with ease. Open source MCP client for developers and AI researchers. Features real-time debugging, multi-server support, and LLM integration.
  - - meta
    - property: og:title
      content: OpenMCP - The Ultimate MCP Development Environment
  - - meta
    - property: og:description
      content: Build, debug, and deploy MCP servers with ease. Open source MCP client for developers and AI researchers.
  - - meta
    - property: og:url
      content: https://openmcp.kirigaya.cn/
  - - meta
    - property: og:locale
      content: en_US
---

<NewHomeHero />

<div class="home-wrapper">

<!-- Feature Showcase Section -->
<FeatureShowcase />

<!-- Audience Section - Target Users -->
<AudienceSection />

<!-- Templates Section - Template Showcase -->
<TemplatesSection />

<!-- Pricing Section -->
<Pricing />

<!-- FAQ Section -->
<ChatFAQ />

<!-- Footer -->
<HomeFooter />

</div>

<script setup>
// No script needed
</script>

<style>
/* Force content container full width */
.VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.VPDoc .content {
  max-width: 100% !important;
}

.VPDoc.has-aside .aside {
  display: none !important;
}

/* Home wrapper - dark background */
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
