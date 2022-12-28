<template>
  <div class="browser">
    <div class="browser__container container">
      <StackNavigation :active-id="activeId" :navigation-list="stackData.navigation" @select="handleNavigationSelect" />
      <div class="browser__wrapper">
        <StackBrowserPage :tech-list="activeStackList" />
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
  case 'utility':
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

  &__container {
    position: relative;
    display: flex;
    gap: 100px;
    align-items: center;
    min-height: calc(100vh - 80px);
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    padding: 8px;
    overflow: hidden;
  }
}
</style>
