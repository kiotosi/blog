<template>
  <div class="navigation">
    <ul class="navigation__list">
      <li v-for="navigationItem in navigationList" :key="navigationItem.id" class="navigation__item">
        <div class="navigation__title" :class="{navigation__title_active: activeId.item === navigationItem.id}" @click="$emit('select', navigationItem.id)">
          {{ $t(navigationItem.title) }}
        </div>
        <ul v-show="navigationItem?.child && activeId.item === navigationItem.id" class="navigation__sublist">
          <li v-for="navigationInnerItem in navigationItem.child" :key="navigationInnerItem.id" class="navigation__subitem">
            <div class="navigation__subtitle" @click="$emit('select', activeId.item, navigationInnerItem.id)">
              {{ $t(navigationInnerItem.title) }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { StackNavigationItem } from '@/types/stack.types';

// Props
interface NavigationProps {
  navigationList: StackNavigationItem[];
  activeId: {
    item: string;
    innerItem: string;
  }
}
defineProps<NavigationProps>();

// Emits
defineEmits<{(e: 'select', item: string, innerItem: string): void}>();
</script>

<style scoped lang="scss">
$menu-spacing: 32px;
.navigation {

  &__sublist {
    margin-top: 8px;
    padding-left: 8px;
  }

  &__item {
    &:not(:first-child) {
      margin-top: $menu-spacing;
    }
  }

  &__subitem {
    position: relative;
    font-size: 14px;
    margin-left: 0.8em;

    &::before {
      content: '—';
      position: absolute;
      left: -16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__title, &__subtitle {
    cursor: pointer;
    user-select: none;
    color: var(--black);

    &:hover {
      color: #5a5a5a;
    }
  }

  &__title {
    position: relative;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    width: fit-content;

    &_active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1.5px;
      background-image: linear-gradient(76.3deg, rgba(44, 62, 78, 1) 12.6%, rgba(69, 103, 131, 1) 82.8%);
    }
  }
}

@media screen and (max-width: $mobile) {
  .navigation {
    width: 100%;

    &__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      justify-items: center;
    }

    &__title {
      font-size: 1.2rem;
    }

    &__sublist {
      display: none !important;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 0;
      }
  }
  }
}
</style>
