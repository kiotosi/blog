<template>
  <footer class="container footer">
    <div class="footer__info">
      <div class="footer__title">
        {{ $t(layoutData.footerInfo.title) }}
      </div>
      <div v-for="(t, index) in layoutData.footerInfo.text" :key="index" class="footer__text">
        {{ $t(t) }}
      </div>
      <FooterLinks :link-list="linkList" class="footer__links" />
    </div>
    <img class="footer__image" :src="layoutData.footerInfo.image.src" :alt="layoutData.footerInfo.image.alt">
  </footer>
</template>

<script setup lang="ts">
import layoutData from '@/data/layout.data';

// Ссылки на социальные сети в виде массива
const linkList = computed(() => {
  return Object.values(layoutData.footerInfo.socialLinks);
});
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  gap: 180px;
  border-top: 1px solid var(--border-color);
  padding: 70px 0;
  justify-content: center;

  &__image {
    max-width: 350px;
    width: 100%;
  }

  &__info {
    width: 440px;
  }

  &__title {
    font-size: 32px;
    line-height: 130%;
    font-weight: 700;
  }

  &__text {
    margin-top: 40px;
    white-space: pre-wrap;
  }

  &__links {
    margin-top: 60px;
  }
}

@media screen and (max-width: $tablet) {
  .footer {
    padding: 50px;
    flex-direction: column;
    gap: 60px;

    &__info {
      width: initial;
    }

    &__image {
      width: initial;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
