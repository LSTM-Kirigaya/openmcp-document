<template>
    <div class="wrapper">
        <div class="bilibili-player-container">
            <iframe v-if="isPlaying" :src="playerUrl" frameborder="0" allowfullscreen></iframe>

            <div v-else class="cover-container" @click="playVideo">
                <img :src="props.cover" class="cover-image" />
                <button class="play-button">
                    <svg viewBox="0 0 24 24" width="48" height="48">
                        <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

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

function playVideo() {
    isPlaying.value = true
}
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
    width: 72.36vw;
    height: 38.26vw;
    aspect-ratio: 16/9;
    border-radius: .5em;
    overflow: hidden;
    border: 2px solid var(--vp-c-brand-3);
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
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--vp-c-brand-3);
    border: none;
    color: var(--vp-c-bg);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.play-button:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: var(--vp-c-brand-2);
}

.play-button svg {
    margin-left: 4px;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>