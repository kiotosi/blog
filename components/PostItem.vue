<template>
  <div class="post">
    <NuxtLink class="post__link" :to="url">
      <div class="post__title">
        {{ title }}
      </div>
      <div class="post__description">
        {{ description }}
      </div>
      <ul class="post__taglist taglist">
        <li class="taglist__item">
          <TagItem v-for="tag in tagList" :key="tag.id" v-bind="tag" />
        </li>
      </ul>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { TagItem } from '@/types/blog.types';

interface PostProps {
  title: string;
  description: string;
  tagList: TagItem[];
  url: string;
}
defineProps<PostProps>();
</script>

<style scoped lang="scss">
.post {
  border-radius: 8px;
  cursor: pointer;

  &__link {
    display: block;
    padding: 12px 16px;
  }

  &:hover {
    background-color: #f1f1f1;
  }

  &__title {
    font-size: 22px;
    font-weight: 700;
  }

  &__description {
    font-size: 14px;
    margin-top: 8px;
    line-height: 1.2;
  }

  &__taglist {
    margin-top: 8px;
  }
}

.taglist {
  display: flex;
  gap: 8px;
}
</style>
