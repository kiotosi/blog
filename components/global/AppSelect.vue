<template>
  <div class="select" :class="{'select_active': isSelectActive}" @click="isSelectActive = !isSelectActive">
    <div class="select__title">
      {{ activeOption.text }}
    </div>
    <ul v-show="isSelectActive" class="select__list option-list">
      <li v-for="selectOption in selectList" :key="selectOption.id" class="option-list__item" @click="handleSelect(selectOption.id)">
        {{ selectOption.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface SelectOption {
  text: string;
  id: number
}

interface SelectProps {
  selectList: SelectOption[];
  defaultOption?: SelectOption;
  hasClearButton?: boolean;
}

const props = defineProps<SelectProps>();

// Emits
interface SelectEmits {
  (e: 'select', id: number): void
}
const emit = defineEmits<SelectEmits>();

// Refs
const isSelectActive = ref(false);
const activeIndex = ref<number | null>(null);

// Computed
const activeOption = computed(() => {
  if (activeIndex.value !== null && props.selectList[activeIndex.value]) {
    return props.selectList[activeIndex.value];
  }

  if (props.defaultOption) {
    return props.defaultOption;
  }

  return props.selectList[0];
});

// Handlers
const handleSelect = (id: number) => {
  activeIndex.value = id;
  emit('select', id);
};

</script>

<style scoped lang="scss">
.select {
  @include default-ui;
  padding-right: 12px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &::after {
    content: '';
    background-image: url('/icons/chevron-down.svg');
    width: 18px;
    height: 18px;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    background-color: #f4f4f4;
  }

  &:active {
    background-color: #f0f0f0;
  }

  &_active {
    &::after {
      transform: rotate(180deg);
      transform-origin: center
    }
  }
}

.option-list {
  @include default-ui;
  padding: 0;
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;

  &__item {
    padding: 4px 8px;
    &:hover {
      background-color: #eaeaea;
    }

    &:active {
      background-color: #d6d6d6;
    }
  }
}
</style>
