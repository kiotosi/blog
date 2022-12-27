<template>
  <div class="hero">
    <div class="hero__container container container_article">
      <div class="hero__portrait">
        <img src="/img/profile.jpg" alt="Profile image" class="hero__image">
        <div class="hero__name">
          {{ $t(name) }}
        </div>
        <AppLink target="_blank" :href="layoutData.footerInfo.socialLinks.hh.url" has-animation class="hero__profession" :text="$t(profession)" />
      </div>
      <div class="hero__info info">
        <div class="info__title">
          Bio:
        </div>
        <div class="info__text">
          {{ $t(description) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/types/common.types';
import layoutData from '@/data/layout.data';

interface HeroProps {
    name: string;
    profession: string;
    description: string;
    image: Image;
}
defineProps<HeroProps>();
</script>

<style scoped lang="scss">
.hero {
  background: var(--pink);
  &__container {
    display: flex;
    gap: 70px;
    justify-content: center;
    padding: 120px 100px;
  }

  &__name {
    margin-top: 20px;
    font-weight: 600;
    text-decoration: underline;
  }

  &__image {
    display: block;
    border: 1.5px solid var(--black);
  }

  &__info {
    margin-top: 80px;
  }

  &__profession {
    cursor: pointer;
    color: #707070;
  }
}

.info {
  &__title {
    font-weight: 600;
  }
  &__text {
    white-space: pre-wrap;
  }
}

@media screen and (max-width: $tablet) {
  .hero {
    &__container {
      display: block;
    }

    &__portrait {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__image {
      display: block;
      width: 75%;
      border: 1.5px solid var(--black);
    }

    &__info {
      margin-top: 32px;
    }
  }
}
</style>
