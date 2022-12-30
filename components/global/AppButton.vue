<template>
  <div class="button">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  user-select: none;
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
</style>
