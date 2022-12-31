<template>
  <div class="gallery" @mousedown.prevent="startMouseMovement">
    <div v-show="title" class="gallery__title">
      {{ title }}
    </div>
    <ul ref="galleryNode" class="gallery__tutorial-list tutorial-list">
      <li v-for="tutorial in tutorialList" :key="tutorial.url" class="tutorial-list__item">
        <StackCard mode="tutorial" v-bind="tutorial" @click="handleMouseClick" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { StackItem } from '@/types/stack.types';

interface TutorialListProps {
  title?: string;
  tutorialList: StackItem[];
}
defineProps<TutorialListProps>();

// Refs
const galleryNode = ref<HTMLUListElement | null>(null);

// Variables
// X coordinate when user start move slider
let startMousePositionX = 0;

// Position of scroll, when user start drag list
let initialScrollPosition = 0;

// If mouse scrolling - state is true
let hasMouseMovementEvent = false;

// Handlers
/**
 * Handle start of dragging with mouse
 * @param ev mousedown event
 */
function startMouseMovement (ev: MouseEvent) {
  ev.preventDefault();

  if (!galleryNode.value) {
    return;
  }

  startMousePositionX = ev.clientX;
  initialScrollPosition = galleryNode.value.scrollLeft;
  document.addEventListener('mousemove', handleMouseMovement);
  document.addEventListener('mouseup', endMouseMovement);
}

/**
 * Handle end of dragging with mouse
 * @param ev mousedown event
 */
function endMouseMovement () {
  setTimeout(() => { hasMouseMovementEvent = false; }, 0);
  document.removeEventListener('mousemove', handleMouseMovement);
  document.removeEventListener('mouseup', endMouseMovement);
}

/**
 * Handle mousemove event, change scroll position (x) in gallery
 * @param ev mousedown event
 */
function handleMouseMovement (ev: MouseEvent) {
  ev.preventDefault();
  ev.stopImmediatePropagation();
  hasMouseMovementEvent = true;
  const deltaX = startMousePositionX - ev.clientX;
  const sliderNode = ev.target as HTMLUListElement;
  sliderNode.scrollLeft = initialScrollPosition + deltaX;
}

/**
 * Prevent click on tutorial, when we're scrolling
 * @param ev click event
 */
function handleMouseClick (ev: MouseEvent) {
  if (hasMouseMovementEvent) {
    ev.preventDefault();
    ev.stopPropagation();
  }
}
</script>

<style scoped lang="scss">
.gallery {
  max-width: 100%;
  overflow-x: hidden;

  &__title {
    font-size: 24px;
    line-height: 1.4;
    font-weight: 500;
  }
}

.tutorial-list {
  margin-top: 24px;
  padding-bottom: 16px;
  min-width: 100%;
  gap: 16px;
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;

  &__item {
    scroll-snap-align: start;
  }
}

// Scroll
.tutorial-list::-webkit-scrollbar-track {
  background-color: transparent;
  position: absolute;
}

.tutorial-list::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: transparent;
  position: absolute;
}

.tutorial-list::-webkit-scrollbar-thumb {
  background-color: #d2e3f2;
  position: absolute;
}
</style>
