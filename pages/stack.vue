<template>
  <div class="stack">
    <Title>
      Kiotosi's Blog - Stack
    </Title>
    <StackBrowser class="stack__browser" />
    <StackMovement class="stack__movement" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-without-container',
});
</script>

<style scoped lang="scss">
.stack {
  &__movement {
    margin-bottom: 0.5px;
  }
}
</style>
