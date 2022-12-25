<template>
  <div class="container topics">
    <ul class="topics__list topics-list">
      <li v-for="(topic, index) in topicList" :key="index" class="topics-list__item topic">
        <img :src="topic.image.src" :alt="topic.image.alt" class="topic__image">
        <div class="topic__title">
          {{ topic.title }}
        </div>
        <div class="topic__description">
          {{ topic.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { TopicItem } from '@/types/home.types';

interface TopicsProps {
  topicList: TopicItem[];
}
defineProps<TopicsProps>();
</script>

<style scoped lang="scss">
.topics {
  margin: 140px auto;
}

.topics-list {
  display: flex;
  gap: 125px;
  justify-content: center;
}

.topic {
  max-width: 300px;
  text-align: center;
  user-select: none;
  pointer-events: none;

  &__image {
    width: 250px;
  }

  &__title {
    margin-top: 32px;
    font-size: 27px;
    line-height: 1.56;
    font-weight: 700;
  }

  &__description {
    white-space: pre-wrap;
    margin-top: 16px;
    font-size: 17px;
    line-height: 1.59;
  }
}

@media screen and (max-width: $tablet) {
  .topics-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>
