<template>
  <div class="layout">
    <!-- 全局导航栏 -->
    <NavBar />
    
    <!-- 页面内容 -->
    <div class="page-wrapper">
      <!-- 首页不使用默认布局，直接使用 markdown 内容 -->
      <Content v-if="isHome || isPricing || isBlog" class="custom-page" />
      
      <!-- 其他页面使用 VitePress 默认布局 -->
      <Layout v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import NavBar from './components/NavBar.vue';

const { Layout } = DefaultTheme;
const { page } = useData();
const route = useRoute();

// 判断是否是首页
const isHome = computed(() => {
  const path = route.path;
  return path === '/' || path === '/zh/' || path === '/ja/' || path === '/index.html' || path === '/zh/index.html' || path === '/ja/index.html';
});

// 判断是否是定价页
const isPricing = computed(() => {
  const path = route.path;
  return path === '/pricing' || path === '/pricing.html' || 
         path === '/zh/pricing' || path === '/zh/pricing.html' ||
         path === '/ja/pricing' || path === '/ja/pricing.html';
});

// 判断是否是博客页
const isBlog = computed(() => {
  const path = route.path;
  return path === '/blog' || path === '/blog.html' || 
         path === '/zh/blog' || path === '/zh/blog.html' ||
         path === '/ja/blog' || path === '/ja/blog.html';
});
</script>

<style>
/* 隐藏 VitePress 默认导航栏 */
.VPNav {
  display: none !important;
}

/* 为自定义导航栏留出空间 */
.page-wrapper {
  padding-top: 64px;
}

/* 首页内容调整 */
.custom-page {
  padding: 0 !important;
}

.custom-page .VPDoc {
  padding: 0 !important;
}

.custom-page .VPDoc .container {
  max-width: 100% !important;
  padding: 0 !important;
}

.custom-page .VPDoc .content {
  max-width: 100% !important;
  padding: 0 !important;
}

.custom-page .vp-doc {
  padding: 0 !important;
}

/* 确保 VitePress 默认布局有正确的边距 */
.VPDoc {
  padding-top: 0 !important;
}

.VPLocalNav {
  top: 64px !important;
}
</style>
