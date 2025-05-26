<template>
    <div class="two-side-layout">
        <div :class="['content-container', { 'reverse': imagePlacement === 'left' }]">
            <div class="text-content">
                <div v-for="(item, index) in texts" :key="index" class="text-item">
                    <span class="prefix">{{ index + 1 }}.</span> {{ item }}
                </div>
            </div>
            <div class="image-container">
                <img :src="image" alt="双栏布局图片" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imagePlacement: {
        type: String,
        default: 'left',
        validator: (value) => ['left', 'right'].includes(value)
    },
    texts: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false
    },
    labelClass: {
        type: String,
        required: false
    },
});
</script>

<style>
.two-side-layout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-container {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
}

.content-container.reverse {
    flex-direction: row-reverse;
}

.text-content {
    flex: 1;
    font-size: 1.1rem;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.text-item {
    width: 100%;
    border-bottom: 1px solid var(--vp-c-default-3);
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
}

.prefix {
    color: var(--vp-c-brand-1);
    margin-right: 0.5rem;
}

.image-container {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .content-container {
        flex-direction: column;
    }

    .content-container.reverse {
        flex-direction: column-reverse;
    }
}
</style>