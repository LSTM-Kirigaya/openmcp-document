<template>
    <a class="nav-item" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
        :href="link"
    >
        <div class="nav-item-content">
            <div class="nav-item-icon" v-if="icon">
                <component :is="typeof icon === 'string' ? 'img' : 'div'" :src="typeof icon === 'string' ? icon : null"
                    v-html="typeof icon === 'object' && icon.svg ? icon.svg : ''">
                </component>
            </div>
            <div class="nav-item-text">
                <h3 class="nav-item-title">{{ title }}</h3>
                <p class="nav-item-description">{{ description }}</p>
            </div>
        </div>
    </a>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: [String, Object], required: true },
    link: { type: String, required: true },
});

const isHovered = ref(false);
</script>

<style scoped>
.nav-item {
    display: flex;
    min-width: 300px;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: .5em;
    overflow: hidden;
    color: var(--vp-c-text-1);
}

.nav-item-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nav-item-icon {
    flex-shrink: 0;
    max-width: 20px;
    max-height: 20px;
}

.nav-item-title {
    font-size: 14px;
    margin: 0;
}

.nav-item-description {
    font-size: 12px;
    opacity: .7;
    margin: 0;
    word-wrap: break-word; /* 确保长单词也能换行 */
    white-space: normal; /* 允许文本换行 */
}

.nav-item:hover {
    background-color: var(--vp-c-default-soft);
    color: var(--vp-c-brand-1);
}

</style>