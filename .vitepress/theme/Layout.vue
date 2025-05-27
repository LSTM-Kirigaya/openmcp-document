<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const data = useData()
const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

const isDark = data.isDark;

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
})
</script>

<template>
    <DefaultTheme.Layout />
</template>

<style>
/* 添加全局过渡效果 */
:root {
    transition: background-color 0.3s ease, color 0.3s ease;
}
</style>