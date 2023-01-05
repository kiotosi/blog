<template>
  <figure @click="zoom" class="figure">
    <img class="figure__image" v-bind="image">
    <figcaption class="figure__caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';

interface ImageProps {
  image: Image;
  caption: string;
  hasZoom?: boolean;
}
const props = defineProps<ImageProps>();

// Handlers
function zoom() {
  if (!props.hasZoom) {
    return;
  }

  // TODO: Сделать zoom
  console.log('zoomed!');
}
</script>

<style scoped lang="scss">
.figure {
  &__image {
    display: block;
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
  }

  &__caption {
    font-size: 12px;
    text-align: center;
  }
}
</style>
