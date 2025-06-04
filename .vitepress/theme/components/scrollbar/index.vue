<template>
    <div
        class="k-scrollerbar"
        :style="scrollbarStyle"
        :ref="el => scrollbarController.element = el"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { scrollbarController } from './controller';
import { navigationBarController } from './controller';

const scrollbarStyle = computed(() => ({
    height: scrollbarController.height + 'px',
    width: scrollbarController.width + 'px',
    opacity: scrollbarController.opacity
}));

let disappearHandler: undefined | number = undefined;

function clearDisappearHandler() {
    if (disappearHandler) {
        clearTimeout(disappearHandler);
    }
}

function hideDisappearHandler(timeout=500) {
    disappearHandler = setTimeout(() => {
        scrollbarController.opacity = 0;
    }, timeout);
}

function onMouseEnter() {
    clearDisappearHandler();
    scrollbarController.opacity = 1;
    scrollbarController.width = 8;
}

function onMouseLeave() {
    scrollbarController.width = 5;
    hideDisappearHandler(1000);
}

function onScroll(event) {    
    clearDisappearHandler();
    scrollbarController.opacity = 1;
    // 总高度
    const totalHeight = document.documentElement.scrollHeight;
    // 视窗高度
    const viewportHeight = window.innerHeight;
    
    // 如果视窗高度都大于总高度，不需要显示
    if (viewportHeight >= totalHeight) {
        scrollbarController.opacity = 0;
        return;
    }

    // 当前的滚动距离 [0, totalHeight - viewportHeight]
    const scrollPosition = window.scrollY;

    // 计算滚动条的大小和位置
    const ratio = viewportHeight / totalHeight;
    const scrollbarHeight = Math.max(20, viewportHeight * ratio);

    // top 取值为 [0, viewportHeight - scrollbarHeight]
    const percentage = scrollPosition / (totalHeight - viewportHeight);
    const scrollbarTop = percentage * (viewportHeight);
    
    scrollbarController.height = scrollbarTop;
    // scrollbarController.top = scrollbarTop;
    scrollbarController.percentage = percentage;
}

function onScrollEnd() {
    hideDisappearHandler();
}

function onWheel(event) {
    if (event.deltaY > 0) {
        navigationBarController.show = false;        
    } else {
        navigationBarController.show = true;
    }
}

document.addEventListener('scroll', onScroll);
document.addEventListener('scrollend', onScrollEnd);
document.addEventListener('resize', onScroll);
document.addEventListener('wheel', onWheel);

</script>

<style>
.k-scrollerbar {
    left: 0;
    top: 0;
    background-color: var(--vp-c-brand-2);
    border-radius: .3em;
    position: fixed;
    z-index: 200;
    transition-property: width, opacity;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
}


</style>