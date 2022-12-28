<template>
  <div class="stack-item" :class="{'stack-item_favorite': isFavorite}">
    <img :src="image.src" :alt="image.alt" class="stack-item__image">
    <div class="stack-item__title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';

interface StackItem {
  title: string;
  isFavorite: boolean;
  image: Image;
}
defineProps<StackItem>();
</script>

<style scoped lang="scss">
.stack-item {
  width: 250px;
  height: 250px;
  padding: 12px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    display: block;
    margin-top: auto;
    width: 128px;
    height: 128px;
  }

  &__title {
    width: 100%;
    margin-top: auto;
  }

  &_favorite {
  }
}
</style>
