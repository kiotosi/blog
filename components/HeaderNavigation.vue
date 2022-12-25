<template>
  <nav class="navigation">
    <ul class="navigation__list navigation-list" :class="{ 'navigation-list_mobile-active': hasOpenedMenu }">
      <li v-for="(item, index) in navigationList" :key="index" class="navigation-list__item">
        <a :href="item.url" class="navigation-list__link" @click="hasOpenedMenu = false">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div class="navigation__hamburger" @click="hasOpenedMenu = !hasOpenedMenu">
      <img src="/icons/menu.svg" alt="Menu button">
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { HeaderNavigationItem } from '~~/types/header.type';

interface NavigationProps {
  navigationList: HeaderNavigationItem[];
}
defineProps<NavigationProps>();

// Refs
const hasOpenedMenu = ref(false);
</script>

<style scoped lang="scss">
.navigation {
  &__hamburger {
    display: none;
  }
}

.navigation-list {
  display: flex;
  gap: 50px;

  &__link {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      background-color: var(--link-color);
      height: 2px;
      transition: all .25s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .navigation {
    &__hamburger {
      display: block;
      transition: all 1s ease-in-out;
    }

    .navigation-list_mobile-active + &__hamburger {
      transform: rotate(180deg);
    }
  }

  .navigation-list {
    padding: 24px;
    background: white;
    height: 100vh;
    width: 100%;
    top: 72px;
    position: fixed;
    left: 0;
    transform: translateX(-100%);
    flex-direction: column;
    transition: transform .5s ease-in-out;

    &_mobile-active {
      transform: translateX(0);
    }

    &__link {
      font-size: 24px;
      font-weight: 500;
    }

  }
}
</style>
