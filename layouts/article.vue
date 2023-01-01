<template>
  <div class="article">
    <AppHeader />
    <NuxtLoadingIndicator />
    <div class="container article__container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.article__container {
  max-width: 875px;
}
.article code {
  font-family: 'Overpass Mono';
  font-size: 8px;
}
</style>
