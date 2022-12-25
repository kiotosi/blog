<template>
  <div class="container projects">
    <div class="projects__title">Проекты</div>
    <ul class="projects__list project-list">
      <li v-for="(project, index) in projectList" :key="index" class="project-list__item project">
        <ProjectItem v-bind="project" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '@/types/common.types';

interface ProjectsProps {
  projectList: ProjectItem[];
}
defineProps<ProjectsProps>();
</script>

<style scoped lang="scss">
.projects {
  margin: 120px auto;

  &__title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
  }

  &__list {
    margin-top: 48px;
  }
}

@media screen and (max-width: $mobile) {
  .projects {
    margin: 64px auto;
    padding: 0 24px;
  }
}
</style>
