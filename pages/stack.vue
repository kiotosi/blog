<template>
  <div class="stack">
    <Title>
      Kiotosi's Blog - Stack
    </Title>
    <StackBrowser class="stack__browser" />
    <div class="container" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-without-container',
});
</script>

<style scoped lang="scss">
.stack {
  &__git {

  }
}
</style>
