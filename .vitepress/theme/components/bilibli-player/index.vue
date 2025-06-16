<template>
    <div class="wrapper">
        <div class="bilibili-player-container" @mouseenter="onHover" @mouseleave="onHoverEnd">
            <iframe v-if="isPlaying" :src="playerUrl" frameborder="0" allowfullscreen></iframe>

            <div v-else class="cover-container" @click="playVideo">
                <img :src="props.cover" class="cover-image" ref="coverImage" />
                <button class="play-button" ref="playButton">
                    <svg viewBox="0 0 24 24" width="48" height="48">
                        <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                </button>
                <div class="hover-overlay"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
    url: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    }
})

const isPlaying = ref(false);
const playerUrl = ref(props.url);
const coverImage = ref(null);
const playButton = ref(null);

function playVideo() {
    isPlaying.value = true
}

function onHover() {
    if (!isPlaying.value) {
        gsap.to(coverImage.value, {
            filter: 'brightness(0.7) saturate(1.2)',
            duration: 0.3,
            ease: 'power2.out'
        });
        gsap.to(playButton.value, {
            scale: 1.15,
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)'
        });
        gsap.to('.hover-overlay', {
            opacity: 1,
            duration: 0.3
        });
    }
}

function onHoverEnd() {
    if (!isPlaying.value) {
        gsap.to(coverImage.value, {
            filter: 'brightness(1) saturate(1)',
            duration: 0.3,
            ease: 'power2.out'
        });
        gsap.to(playButton.value, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        gsap.to('.hover-overlay', {
            opacity: 0,
            duration: 0.3
        });
    }
}

onMounted(() => {
    // 初始状态设置
    gsap.set(coverImage.value, { filter: 'brightness(1) saturate(1)' });
    gsap.set('.hover-overlay', { opacity: 0 });
});
</script>

<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bilibili-player-container {
    position: relative;
    min-width: 377px;
    min-height: 225px;
    width: 52.36vw;
    height: 28.26vw;
    border: 2px solid var(--vp-c-brand-3);
    border-radius: 8px;
    aspect-ratio: 16/9;
    border-radius: .5em;
    overflow: hidden;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


@media (max-width: 2700px) {
    .bilibili-player-container {
        width: 88%;
        height: 100%;
    }
}

@media (max-width: 1200px) {
    .bilibili-player-container {
        width: 95%;
        height: 100%;
    }
}

@media screen and (max-width: 741px) {
    .bilibili-player-container iframe {
        width: 95%;
        height: 230px !important;
    }
}

.bilibili-player-container:hover {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.cover-container {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
    will-change: filter;
}

.hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(var(--vp-c-brand-2-rgb), 0.2) 0%, rgba(var(--vp-c-brand-1-rgb), 0.1) 100%);
    pointer-events: none;
    will-change: opacity;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--vp-c-brand-2);
    border: none;
    color: var(--vp-c-bg);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, background-color 0.3s ease;
    will-change: transform;
    z-index: 2;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.play-button:hover {
    background-color: var(--vp-c-brand-1);
    transform: translate(-50%, -50%) scale(1.2);
}

.play-button svg {
    margin-left: 4px;
    transition: transform 0.2s ease;
}

.play-button:hover svg {
    transform: scale(1.1);
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .bilibili-player-container {
        min-width: 90vw;
        min-height: calc(90vw * 9 / 16);
        width: 90vw;
        height: calc(90vw * 9 / 16);
    }
    
    .play-button {
        width: 48px;
        height: 48px;
    }
    
    .play-button svg {
        width: 36px;
        height: 36px;
    }
}
</style>