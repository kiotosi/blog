<template>
  <div class="browser">
    <div class="browser__container container">
      <StackNavigation :active-id="activeId" :navigation-list="stackData.navigation" @select="handleNavigationSelect" />
      <div class="browser__stack-list stack-list">
        <StackItem v-for="(stack, index) in activeStackList" :key="index" class="stack-list__item" v-bind="stack" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechBranch, StackItem } from '@/types/stack.types';
import stackData from '@/data/stack.data';

// Refs
const activeId = ref({
  item: stackData.navigation.at(0)?.id || '',
  innerItem: '',
});

// Computed
const activeStackList = computed<StackItem[]>(() => {
  let branchTechnologyList: TechBranch;

  // Switching main branch of tech stacks
  switch (activeId.value.item) {
  case 'frontend':
    branchTechnologyList = stackData.frontend;
    break;

  case 'backend':
    branchTechnologyList = stackData.backend;
    break;

  case 'testing':
    branchTechnologyList = stackData.testing;
    break;

  case 'other':
    return stackData.other;
  default:
    return [];
  }

  // Switching sublist
  switch (activeId.value.innerItem.split('-')[1]) {
  case 'framework':
    return branchTechnologyList.frameworkList;
  case 'library':
    return branchTechnologyList.libraryList;
  case 'additional':
    return branchTechnologyList.utilityList;
  default:
    return [
      ...branchTechnologyList.frameworkList,
      ...branchTechnologyList.libraryList,
      ...branchTechnologyList.utilityList,
    ];
  }
});

// Handlers
function handleNavigationSelect (itemId: string, innerItemId?: string): void {
  activeId.value.item = itemId ?? '';
  activeId.value.innerItem = innerItemId ?? '';
}

</script>

<style scoped lang="scss">
.browser {
  background-color: var(--blue);
  padding: 100px 0;
  // height: calc(100vh - 80px);

  &__container {
    display: flex;
    gap: 100px;
    align-items: center;
  }
}

.stack-list {
  overflow-y: auto;
  padding: 4px;
  height: 300px;

  // Items positioning
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;

  // Scroll behaviour
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;

  &__item {
    scroll-snap-align: center;
  }
}

// Scroll
.stack-list::-webkit-scrollbar-track {
  background-color: transparent;
  position: absolute;
}

.stack-list::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
  position: absolute;
}

.stack-list::-webkit-scrollbar-thumb {
  background-color: #d2e3f2;
  position: absolute;
}

@media screen and (max-width: $mobile) {
  .browser {
    padding: 180px 0 100px;
  }
}
</style>
