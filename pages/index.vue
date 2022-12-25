<template>
  <div class="home">
    <Title>Kioblog</Title>
    <BlockHero
      v-bind="homeData.hero"
    />
    <BlockGit :git-list="homeData.gitList" />
    <BlockTopics :topic-list="homeData.topicList" />
  </div>
</template>

<script setup lang="ts">
import homeData from '@/data/home.data';
</script>
