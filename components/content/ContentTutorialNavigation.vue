<template>
  <div class="tutorial-navigation">
    <ul class="tutorial-navigation__list">
      <li v-for="(navigationItem, index) of navigationList" :key="index" class="tutorial-navigation__item">
        <a :href="route.path + '#' + navigationItem?.props?.id" class="tutorial-navigation__link">
          {{ navigationItem?.children?.at(0)?.value || '' }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { MarkdownNode } from '@nuxt/content/dist/runtime/types';

interface NavigationProps {
  navigationList: MarkdownNode[];
}
const props = defineProps<NavigationProps>();
const route = useRoute();
</script>

<style scoped lang="scss">
.tutorial-navigation {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;
  width: 200px;

  &__list {
    list-style: none;
    padding-left: 0;
  }

  &__item {
    line-height: 1.2;

    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &__link {
    color: var(--black);
    font-weight: 500;
  }
}

@media screen and (max-width: 1170px) {
  .tutorial-navigation {
    display: none;
  }
}
</style>
