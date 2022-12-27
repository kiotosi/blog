<template>
  <div class="container topics">
    <ul class="topics__list topics-list">
      <li v-for="(topic, index) in topicList" :key="index" class="topics-list__item">
        <TopicItem v-bind="topic" />
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
.topics-list {
  display: flex;
  gap: 125px;
  justify-content: center;
}

@media screen and (max-width: $tablet) {
  .topics {
    margin: 120px auto;
  }

  .topics-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>
