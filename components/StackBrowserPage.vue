<template>
  <ul class="browser-page">
    <li v-for="(techItem, index) in techList" :key="index" class="browser-page__item">
      <StackItem v-bind="techItem" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { StackItem } from '@/types/stack.types';

interface PageProps {
  techList: StackItem[];
}
defineProps<PageProps>();
</script>

<style scoped lang="scss">
.browser-page {
  display: flex;
  justify-content: space-between;
}
</style>
