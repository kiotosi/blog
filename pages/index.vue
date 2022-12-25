<template>
  <div class="home">
    <Title>Kioblog</Title>
    <HomeHero
      v-bind="homeData.hero"
    />
    <HomeGit :git-list="homeData.gitList" />
    <HomeTopics :topic-list="homeData.topicList" />
    <HomeProjects :project-list="homeData.projectList" />
  </div>
</template>

<script setup lang="ts">
import homeData from '@/data/home.data';
</script>
