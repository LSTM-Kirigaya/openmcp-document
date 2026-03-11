<template>
  <DefaultTheme.Layout />
</template>

<script setup>
import { useData } from 'vitepress';
import { watchEffect } from 'vue';
import DefaultTheme from 'vitepress/theme';

const { page } = useData();

// 监听路由变化，为首页添加特定 class
watchEffect(() => {
  if (typeof document !== 'undefined') {
    const isHome = page.value?.relativePath === 'index.md' || 
                   page.value?.relativePath === 'zh/index.md' || 
                   page.value?.relativePath === 'ja/index.md';
    document.body.classList.toggle('is-home', isHome);
  }
});
</script>

<style>
/* 重置 body 默认样式 */
html, body {
  margin: 0 !important;
  padding: 0 !important;
}

/* 全局背景色 */
html, body, #app, .Layout {
  background: #0a0a0f !important;
}

/* 首页隐藏导航栏和本地导航 */
body.is-home .VPNav,
body.is-home .VPFooter,
body.is-home .VPLocalNav,
body.is-home .VPLocalNavOutlineDropdown {
  display: none !important;
}

body.is-home .VPContent {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

body.is-home .VPDoc {
  padding-top: 0 !important;
}

@media (min-width: 960px) {
  body.is-home .VPContent {
    padding-top: 0 !important;
  }
}

/* 确保文档页面的背景正确 */
.VPDoc {
  background: var(--vp-c-bg) !important;
}
</style>
