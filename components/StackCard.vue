<template>
  <NuxtLink :to="url" target="_blank" class="stack-item" :class="{'stack-item_favorite': isFavorite, 'stack-item_tutorial': mode === 'tutorial'}">
    <img :src="image.src" :alt="image.alt" class="stack-item__image">
    <div class="stack-item__title">
      {{ title }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';

interface StackItem {
  title: string;
  isFavorite: boolean;
  image: Image;
  url: string;
  mode: 'stack' | 'tutorial';
}
defineProps<StackItem>();
</script>

<style scoped lang="scss">
.stack-item {
  position: relative;
  width: 125px;
  height: 125px;
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
    width: 52px;
  }

  &__title {
    width: 100%;
    font-size: 14px;
    margin-top: auto;
    color: #A3A3A3;
    text-align: right;
  }

  &_favorite::after {
    position: absolute;
    right: 8px;
    top: 8px;
    content: '✨';
    font-size: 12px;
    line-height: 100%;
  }

  &_tutorial {
    border: #d8d8d8 1px solid;
    box-shadow: none;

    &:hover {
      background-color: #f9f9f9;
    }
  }
}
</style>
