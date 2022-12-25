<template>
  <div class="topic">
    <img :src="image.src" :alt="image.alt" class="topic__image">
    <div class="topic__title">
      {{ title }}
    </div>
    <div class="topic__description">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';

interface TopicProps {
  image: Image;
  title: string;
  description: string;
}
defineProps<TopicProps>();
</script>

<style scoped lang="scss">
.topic {
  max-width: 300px;
  text-align: center;
  user-select: none;
  pointer-events: none;

  &__image {
    width: 250px;
  }

  &__title {
    margin-top: 32px;
    font-size: 27px;
    line-height: 1.56;
    font-weight: 700;
  }

  &__description {
    white-space: pre-wrap;
    margin-top: 16px;
    font-size: 17px;
    line-height: 1.59;
  }
}
</style>
