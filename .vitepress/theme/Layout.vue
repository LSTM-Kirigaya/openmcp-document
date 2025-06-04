<template>
    <DefaultTheme.Layout id="k-layout">
    </DefaultTheme.Layout>
    <ScrollBar />

</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, provide } from 'vue';
import mediumZoom from "medium-zoom";
import { animateIn, animateOut } from './hook/animate';
import ScrollBar from './components/scrollbar/index.vue';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册插件
gsap.registerPlugin(ScrollTrigger);

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
        await animateIn('VPContent', { name: 'fade', durationMs: 200 });
    } else {
        await animateIn('k-layout', { name: 'fade' });
    }
};


const handleRouteChangeComplete = async (to: string) => {
    await animateOut();
    setupMediumZoom();

    makeHomeAnimation();
};


router.onBeforeRouteChange = handleRouteChangeStart;
router.onAfterRouteChange = handleRouteChangeComplete;

function makeHomeAnimation() {
    if (router.route.path !== '/openmcp/') {
        return;
    }

    gsap.from(".main", {
        opacity: 0,      // 初始透明度
        x: -100,          // 初始位置（向下偏移100px）
        duration: 1.2,     // 动画时长
        ease: "power2.out", // 缓动函数（平滑结束）
    });

    gsap.from(".VPHero .VPImage", {
        opacity: 0,      // 初始透明度
        x: 100,          // 初始位置（向下偏移100px）
        duration: 1.2,     // 动画时长
        ease: "power2.out", // 缓动函数（平滑结束）
    });

    gsap.from(".VPFeatures.VPHomeFeatures", {
        opacity: 0,      // 初始透明度
        y: 100,          // 初始位置（向下偏移100px）
        duration: 1.2,     // 动画时长
        ease: "power2.out", // 缓动函数（平滑结束）
    });


    const elements = [
        { selector: ".bilibili-player-container", start: "top 65%", end: "top 65%" },
        { selector: "#openmcp-为谁准备", trigger: '#openmcp-为谁准备', start: "top 65%", end: "top 65%" },
        { selector: ".k-tabs", trigger: '#openmcp-为谁准备', start: "top 65%", end: "top 65%" },
        { selector: "#问题解答-faq", trigger: '#问题解答-faq', start: "top 65%", end: "top 65%" },
        { selector: ".el-collapse", trigger: '#问题解答-faq', start: "top 65%", end: "top 65%" },
    ];

    elements.forEach(element => {
        gsap.fromTo(element.selector, 
            {
                opacity: 0,
                y: 100,
                duration: 1.2,
                ease: "power2.out",
            },
            { 
                opacity: 1,
                y: 0,
                duration: 1.2, // 延长动画时间
                ease: "power2.out", // 添加缓动效果
                scrollTrigger: {
                    trigger: element.trigger || element.selector,
                    start: "top 70%",
                    end: "top 70%",
                    scrub: false,
                    toggleActions: "play none reverse none",
                }
            }
        );
    });
}

onMounted(() => {
    setupMediumZoom();

    makeHomeAnimation();
});
</script>

<style>
/* 添加全局过渡效果 */
:root {
    transition: background-color 0.15s ease, color 0.3s ease;
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

/* 淡入淡出动画 */
.fade-in {
    opacity: 1;
}

.fade-out {
    opacity: 0;
}

.slide-in {
    transform: translateY(0);
    opacity: 1;
}

.slide-out {
    transform: translateY(100px);
    opacity: 0;
}
</style>