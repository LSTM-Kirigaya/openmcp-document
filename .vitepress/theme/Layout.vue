<template>
    <DefaultTheme.Layout id="k-layout" />
    <ClientOnly>
        <ScrollBar v-if="mounted" />
    </ClientOnly>
</template>

<script setup lang="ts">
import { useData, useRouter, inBrowser } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, provide, ref } from 'vue';
import mediumZoom from "medium-zoom";
import ScrollBar from './components/scrollbar/index.vue';

const data = useData();
const router = useRouter();
const mounted = ref(false);

const setupMediumZoom = () => {
    mediumZoom("#VPContent img", {
        background: "transparent",
    });
};

onMounted(() => {
    mounted.value = true;
    setupMediumZoom();
});
</script>

<style>
/* 添加全局过渡效果 */
:root {
    transition: background-color 0.15s ease, color 0.3s ease;
}

/* 首页模式下隐藏 VitePress 原生导航栏 */
.VPNav {
    display: none !important;
}

/* 调整页面顶部padding，因为隐藏了导航栏 */
.VPLocalNav {
    display: none !important;
}

.VPContent {
    padding-top: 0 !important;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
    width: 0px;
}

.medium-zoom-overlay {
    backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
    z-index: 999;
}
</style>
