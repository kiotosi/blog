<template>
  <div class="container git">
    <div class="git__info">
      <div class="git__text">
        {{ $t('home.git.seeMore') }}
      </div>
      <img src="/img/see_arrow.svg" alt="Arrow">
    </div>
    <ul class="git__list">
      <li v-for="(item, index) in gitList" :key="index" class="git__item" @click="navigateTo(item.url)">
        <object class="git__image" :data="item.image.src" :type="item.image.type">
          <img :src="item.image.src" :alt="item.image.alt">
        </object>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { GitItem } from '@/types/home.types';

interface GitListProps {
  gitList: GitItem[];
}

defineProps<GitListProps>();
</script>

<style scoped lang="scss">
.git {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-left: none;
  border-right: none;

  &__list {
    padding: 60px 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 150px;
  }

  &__item {
    user-select: none;
    cursor: initial;
  }

  &__info {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      color: #A0A0A0;
  }

  &__image {
    cursor: pointer;
    display: block;

    &:hover {
      filter: drop-shadow(0px 0px 3px rgb(0 0 0 / 0.4));
      transition: all .25s ease-in-out;
    }
  }
}

@media screen and (max-width: $tablet) {
  .git {
    &__info {
      display: none;
    }

    &__list {
      gap: initial;
      justify-content: space-around;
      margin: initial;
      width: 100%;
    }
  }
}
</style>
