<template>
  <div class="pricing-page-wrapper">
    <!-- 定价内容 -->
    <div>
      <Pricing />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pricing from './Pricing.vue';
</script>

<style scoped>
.pricing-page-wrapper {
  min-height: 100vh;
  background: #0a0a0f;
  color: #fff;
}

</style>
