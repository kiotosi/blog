<template>
  <div class="home">
    <Title>Kioblog</Title>
    <HomeHero
      v-bind="homeData.hero"
      class="home__hero"
    />
    <HomeGit class="home__git" :git-list="homeData.gitList" />
    <HomeTopics class="home__topics" :topic-list="homeData.topicList" />
    <HomeProjects class="home__projects" :project-list="homeData.projectList" />
  </div>
</template>

<script setup lang="ts">
import homeData from '@/data/home.data';
</script>

<style scoped lang="scss">
.home {
  &__topics {
    margin-top: 120px;
  }

  &__projects {
    margin-top: 120px;
    margin-bottom: 80px;
  }
}
</style>
