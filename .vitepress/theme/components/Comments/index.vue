<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div :key="title" class="giscus comment-block">
    <component
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="LSTM-Kirigaya/openmcp-document"
        data-repo-id="R_kgDOOuuE1g"
        data-category="General"
        data-category-id="DIC_kwDOOuuE1s4Crh0z"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async
    />
  </div>
</template>

<style>
.comment-block {
    margin-top: 100px;
}

.comment-block iframe {
    box-shadow: none !important;
}

</style>