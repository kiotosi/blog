<template>
  <div>
    <AppHeader />
    <NuxtLoadingIndicator />
    <div class="container">
      <slot />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
