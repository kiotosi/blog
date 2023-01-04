<template>
  <div ref="thumbnailNode" class="thumbnail-background" />
  <div class="thumbnail">
    <div class="thumbnail__info">
      <h1 class="thumbnail__title">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p class="thumbnail__description">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ThumbnailProps {
  imagePath: string;
  title: string;
  description: string;
}
const props = defineProps<ThumbnailProps>();

// Constants
const LINEAR_GRADIENT_CSS = 'linear-gradient(0deg, #2d2d2dFF 0%, #00000000 50%)';

// Refs
const thumbnailNode = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!thumbnailNode.value) {
    return;
  }

  // Set background to thumbnail
  thumbnailNode.value.style.backgroundImage = LINEAR_GRADIENT_CSS + `, url(${props.imagePath})`;
});
</script>

<style scoped lang="scss">
$thumbnail-height: 380px;
.thumbnail {
  // position: relative;
  height: $thumbnail-height;

  &__info {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px 0 64px;
  }

  &__title, &__description {
    z-index: 1;
    margin: 0;
    color: var(--white);
    line-height: 1.8;
  }

  &__title {
    line-height: 1.4;

    &::before {
      content: '';
    }
  }

  &__description {
    margin-top: 12px;
  }
}

.thumbnail-background {
    z-index: 0;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    height: $thumbnail-height;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
