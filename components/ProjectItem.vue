<template>
  <a class="project" :href="info.url" target="_blank">
    <img :src="icon.src" :alt="icon.alt" class="project__logo">
    <div class="project__info">
      <div class="project__name">
        {{ $t(info.name) }}
      </div>
      <div class="project__description">
        {{ $t(info.description) }}
      </div>
      <div v-show="stack && stack?.length > 0" class="project__stack">
        {{ stack?.join(', ') }}
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { ProjectType, Image } from '@/types/common.types';

interface ProjectProps {
  type: ProjectType;
  info: {
    name: string;
    description: string;
    url: string;
  }
  stack?: string[];
}

const props = defineProps<ProjectProps>();
const icon = computed<Image>(() => {
  switch (props.type) {
  case 'bitbucket':
    return {
      alt: 'Bitbucket Logo',
      src: '/icons/bitbucket.svg',
    };
  case 'gitlab':
    return {
      alt: 'Gitlab Logo',
      src: '/icons/gitlab.svg',
    };
  default:
    return {
      alt: 'Github Logo',
      src: '/icons/github.svg',
    };
  }
});
</script>

<style scoped lang="scss">
.project {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 16px;
  border-radius: 8px;
  height: 100%;

  &:hover {
    background-color: #e7e7e7;

    .project__logo {
      filter: none;
    }
  }

  &__logo {
    transition: all .25s ease-in-out;
    width: 48px;
    filter: grayscale(100%) contrast(50%);
  }

  &__name {
    font-weight: 500;
  }

  &__description {
    white-space: pre-wrap;
    margin-top: 4px;
  }

  &__stack {
    font-size: 12px;
  }
}

@media screen and (max-width: $tablet) {
  .project {
    &__description {
      white-space: initial;
    }
  }
}

@media screen and (max-width: $mobile) {
  .project {
    &__description {
      font-size: 14px;
    }
  }
}
</style>
