<template>
  <div class="article-error">
    <div class="article-error__title">
      {{ title }}
    </div>
    <div class="article-error__description">
      {{ text }}
    </div>
    <img v-bind="image" class="article-error__image">
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';

interface ArticleErrorProps {
  title: string;
  text: string;
  image: Image;
}
defineProps<ArticleErrorProps>();
</script>

<style scoped lang="scss">
.article-error {
  height: calc(100vh - 80px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 24px;
    line-height: 1.4;
    font-weight: 700;
  }

  &__description {
    margin-top: 12px;
    white-space: pre-wrap;
  }

  &__image {
    display: block;
    margin-top: 32px;
    width: 55%;
  }
}
</style>
