<template>
  <div class="container error">
    <div class="background" />
    <h1 class="error__title">
      {{ $t(layoutData.a404.titleList.at(Math.floor(Math.random() * layoutData.a404.titleList.length)) || 'developer.hmm' ) }}
    </h1>
    <div class="error__description">
      {{ $t(layoutData.a404.description) }}
    </div>
    <img :src="layoutData.a404.image.src" :alt="layoutData.a404.image.alt" class="error__image">
    <NuxtLink to="/" class="error__button">
      <AppButton :text="$t(layoutData.a404.fuGoBack)" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import layoutData from './data/layout.data';
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

// eslint-disable-next-line no-console
console.error(props.error);
</script>

<style scoped lang="scss">
$background-color: #f7f7f7;

.background {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: radial-gradient(#d8d8d8 2px, transparent 2px);
  background-size: 200% 100%;
  background-size: 36px 36px;
  background-color: $background-color;
  animation: ride 60s linear infinite;
}

.error {
  display: flex;
  overflow-y: hidden;
  user-select: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--black);

  &__description {
    margin-top: 16px;
    background-color: $background-color;
  }

  &__image {
    width: 20%;
    margin-top: 32px;
  }

  &__title {
    margin-top: 0;
    background-color: $background-color;
    line-height: 1.4;
  }

  &__button {
    margin-top: 16px;
  }
}

@media screen and (max-width: $tablet) {
  .error {
    text-align: center;

    &__title {
      line-height: 1.2;
    }

    &__image {
      width: 40%;
    }
  }
}

@media screen and (max-width: $mobile) {
  .error {
    &__description {
      text-align: center;
    }

    &__image {
      width: 38%;
    }
  }
}
</style>
