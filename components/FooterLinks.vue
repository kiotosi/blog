<template>
  <ul class="footer-links">
    <li v-for="(link, index) in linkList" :key="index" class="footer-links__item">
      <NuxtLink :to="link.url" class="footer-links__link">
        <img class="footer-links__logo" :src="link.image.src" :alt="link.image.alt">
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { FooterLink } from '@/types/footer.types';

interface FooterLinksProps {
  linkList: FooterLink[];
}

defineProps<FooterLinksProps>();
</script>

<style lang="scss" scoped>
.footer-links {
  display: flex;
  gap: 14px;

  &__item {
    transition: filter .5s ease-in-out;
    &:hover {
      filter: brightness(175%);
    }
  }

  &__link {

  }

  &__logo {
    width: 32px;
  }
}
</style>
