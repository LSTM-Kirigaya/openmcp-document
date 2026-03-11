<template>
  <DefaultTheme.Layout />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme';
</script>

<style>
/* 全局背景色 */
html, body, #app, .Layout {
  background: #0a0a0f !important;
}

/* 隐藏导航栏和footer */
.VPNav,
.VPFooter {
  display: none !important;
}

/* 隐藏本地导航栏 */
.VPLocalNav {
  display: none !important;
}

/* 移除 VPContent 的顶部 padding */
.VPContent {
  padding-top: 0 !important;
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: 0 !important;
  }
}

/* 隐藏文档侧边栏 */
.VPDoc .VPDocAside,
.VPDoc .VPDocOutlineDropdown {
  display: none !important;
}

/* 调整内容区域的内边距 */
.VPDoc .VPDocMain {
  padding-top: 0 !important;
}

/* 确保 VPDoc 背景一致 */
.VPDoc,
.VPDoc .container,
.VPDoc .content {
  background: #0a0a0f !important;
}
</style>
