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

/* 只隐藏导航栏和footer */
.VPNav {
  display: none !important;
}

.VPFooter {
  display: none !important;
}

/* 隐藏文档侧边栏 - 只在首页 */
.VPDoc .VPDocAside,
.VPDoc .VPDocOutlineDropdown {
  display: none !important;
}

/* 调整内容区域的内边距 */
.VPDoc .VPDocMain {
  padding-top: 0 !important;
}

/* 确保 VPDoc 背景一致 */
.VPDoc {
  background: #0a0a0f !important;
}

.VPDoc .container {
  background: #0a0a0f !important;
}

.VPDoc .content {
  background: #0a0a0f !important;
}
</style>
