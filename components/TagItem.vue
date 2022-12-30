<template>
  <div
    class="tag"
    :class="{
      'tag_red': isRed,
      'tag_yellow': isYellow,
      'tag_green': isGreen,
      'tag_blue': isBlue
    }"
  >
    {{ tagName }}
  </div>
</template>

<script setup lang="ts">
interface TagProps {
  name: string;
  id: number;
  isRed?: boolean;
  isBlue?: boolean;
  isGreen?: boolean;
  isYellow?: boolean;
}
const props = defineProps<TagProps>();

const tagName = computed(() => {
  return `#${props.name}`;
});
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  line-height: 1;
  padding: 8px 12px;
  background-color: #f7f7f7;
  border: #d8d8d8 1px solid;
  border-radius: 4px;

  &:hover {
    background-color: #f4f4f4;
  }

  &:active {
    background-color: #f0f0f0;
  }

  &_blue {
    background-color: var(--blue);
  }
  &_red {
    background-color: var(--red);
  }
  &_yellow{
    background-color: var(--yellow);
  }
  &_green {
    background-color: var(--green);
  }
}
</style>
