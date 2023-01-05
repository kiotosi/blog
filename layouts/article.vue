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
  margin-bottom: 100px;
}
</style>
