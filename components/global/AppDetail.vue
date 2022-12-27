<template>
  <details class="detail">
    <summary class="detail__summary">
      {{ isi18n ? $t(title) : title }}
    </summary>
    <div class="detail__text">
      {{ isi18n ? $t(text) : text }}
    </div>
  </details>
</template>

<script setup lang="ts">

interface DetailsListProps {
  title: string;
  text: string;
  isi18n?: boolean
}
defineProps<DetailsListProps>();
</script>

<style scoped lang="scss">
.detail {
  cursor: pointer;
  user-select: none;

  &__summary {
    font-weight: 500;
  }

  &__text {
    margin: 0;
    padding: 0.5rem 1rem;
    white-space: pre-wrap;
  }
}
</style>
