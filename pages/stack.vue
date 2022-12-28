<template>
  <div class="stack">
    <StackBrowser />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-without-container',
});
</script>

<style scoped lang="scss">
.stack {
  min-height: calc(100vh - 80px);
}
</style>
