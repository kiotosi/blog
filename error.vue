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
      {{ $t(layoutData.a404.fuGoBack) }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import layoutData from './data/layout.data';
const props = defineProps({
  error: Object,
});

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
  }

  &__button {
    margin-top: 16px;
    cursor: pointer;
    padding: 8px 16px;
    background-color: #f7f7f7;
    border: #d8d8d8 1px solid;
    border-radius: 4px;

    &:hover {
      background-color: #f4f4f4;
    }

    &:active {
      background-color: #f0f0f0;
    }
  }
}

@keyframes ride {
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: 100%;
  }
}
</style>
