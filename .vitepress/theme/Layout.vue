

<template>
    <DefaultTheme.Layout id="k-layout" />
</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, provide } from 'vue';
import mediumZoom from "medium-zoom";
import { animateIn, animateOut } from './hook/animate';

const data = useData()
const router = useRouter()
const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

const isDark = data.isDark;

const setupMediumZoom = () => {
    mediumZoom("[data-zoomable]", {
        background: "transparent",
    });
};

// 移除原有的 transition 相关逻辑
provide('toggle-appearance', async () => {
    if (!enableTransitions()) {
        data.isDark.value = !data.isDark.value
        return
    }
    await document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
    }).ready;

    document.documentElement.animate(
        {
            duration: 300,
            easing: 'ease-in',
            pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
        }
    )
});

const sameSource = (from: string, to: string) => {
    return from.split('/').slice(0, 3).join('/') === to.split('/').slice(0, 3).join('/');
}

const handleRouteChangeStart = async (to: string) => {
    const from = router.route.path;

    if (sameSource(from, to)) {
        await animateIn('VPContent', { name: 'fade' });
    } else {
        await animateIn('k-layout', { name: 'fade' });
    }
};


const handleRouteChangeComplete = async (to: string) => {
    await animateOut({ name: 'fade' });
    setupMediumZoom();
};


router.onBeforeRouteChange = handleRouteChangeStart;
router.onAfterRouteChange = handleRouteChangeComplete;

onMounted(() => {
    setupMediumZoom();
});
</script>

<style>
/* 添加全局过渡效果 */
:root {
    transition: background-color 0.15s ease, color 0.3s ease;
}

.medium-zoom-overlay {
    backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
    z-index: 999;
}

/* 淡入淡出动画 */
.fade-in {
    opacity: 1;
    transition: opacity 0.15s ease-out;
}

.fade-out {
    opacity: 0;
}

/* 过渡状态 */
.fade-in-out.transitioning {
    pointer-events: none;
    /* 过渡期间禁用交互 */
}

/* 自定义淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>