<template>
  <NuxtLink :target="target ?? null" class="link" :class="{ link_animation: hasAnimation }" :href="href">
    {{ text }}
  </NuxtLink>
</template>

<script setup lang="ts">
interface LinkProps {
  text: string;
  href: string;
  target?: string;
  hasAnimation?: boolean;
}
defineProps<LinkProps>();
</script>

<style scoped lang="scss">
.link {
  color: currentColor;

  &_animation {
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
</style>
