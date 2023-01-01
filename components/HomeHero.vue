<template>
  <div class="hero">
    <div class="hero__info">
      <h1 class="hero__title">
        {{ $t(title) }}
      </h1>
      <div class="hero__text">
        {{ $t(text) }}
      </div>
    </div>
    <img :src="image.src" :alt="image.alt" class="hero__image">
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';

interface HeroProps {
  title: string;
  text: string;
  image: Image;
}

defineProps<HeroProps>();
</script>

<style lang="scss" scoped>
.hero {
  padding: 80px 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  pointer-events: none;

  &__info {
    max-width: 600px;
  }

  &__title {
    font-size: 64px;
    line-height: 1.4;
    font-weight: 700;
    margin: 0;
    white-space: pre-wrap;
    background: #f2709c;
    background-image: linear-gradient(120deg, #858e96, #34073d);
    background-clip: text;
    color: transparent;
  }

  &__text {
    margin: 40px 0 0;
    font-weight: 500;
    line-height: 1.69;
    color: #737373;
  }

  &__image {
    display: block;
    max-width: 500px;
    width: 100%;
  }
}

@media screen and (max-width: $desktop) {
  .hero {
    &__title {
      font-size: 52px;
    }

    &__image {
      max-width: 350px;
      margin-left: 32px;
    }
  }
}

@media screen and (max-width: $tablet) {
  .hero {
    display: block;

    &__info {
      max-width: initial;
    }

    &__title {
      font-size: 48px;
    }

    &__image {
      max-width: initial;
      margin: 60px auto 0;
    }
  }
}

@media screen and (max-width: $mobile) {
  .hero {
    padding: 0 0 100px;
  }
}
</style>
