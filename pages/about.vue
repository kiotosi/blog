<template>
  <div class="about">
    <Title>Kioblog - About</Title>
    <AboutHero
      class="about__hero"
      v-bind="aboutData.hero"
    />
    <div class="container container_article">
      <AboutBio v-bind="aboutData.bio" class="about__bio" />
    </div>
  </div>
</template>

<script setup lang="ts">
import aboutData from '@/data/about.data';

definePageMeta({
  layout: 'default-without-container',
});
</script>

<style scoped lang="scss">
.about {
  &__hero {

  }

  &__bio {
    margin-top: 120px;
    margin-bottom: 80px;
  }
}
</style>
