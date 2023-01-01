<template>
  <div class="search">
    <input
      v-model="inputText"
      type="text"
      name="search"
      :placeholder="$t('general.placeholder', 'Поиск')"
      class="search__input"
      @keydown.stop.enter="$emit('search', inputText)"
    >
  </div>
</template>

<script setup lang="ts">
// Props
interface SearchProps {
  placeholder?: string;
}
defineProps<SearchProps>();

// Emits
interface SearchEmits {
  (e: 'search', text: string): void
}
defineEmits<SearchEmits>();

// Refs
const inputText = ref('');
</script>

<style scoped lang="scss">
.search {
  position: relative;
  background-color: #f9f9f9;
  border: #d8d8d8 1px solid;
  border-radius: 4px;
  color: var(--black);
  max-width: 300px;
  padding: 4px 16px;
  padding-right: 24px;

  &:active, &__input:active {
    background-color: #f4f4f4;
  }

  &::after {
    position: absolute;
    right: 8px;
    top: 50%;
    content: '';
    display: block;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background-image: url('/icons/search.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__input {
    outline: none;
    border: none;
    font-size: 14px;
    background-color: #f9f9f9;
    padding-right: 8px;
    width: 100%;
  }
}
</style>
