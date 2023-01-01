<template>
  <div class="projects">
    <div class="projects__title">
      Проекты
    </div>
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
  &__title {
    font-size: 38px;
    font-weight: 700;
    line-height: 1.2;
  }

  &__list {
    margin-top: 48px;
  }

}

.project-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  align-content: center;

  &__item {
    height: 100%;
  }
}

@media screen and (max-width: $tablet) {
  .projects {
    &__title {
      font-size: 36px;
      margin-left: 16px;
    }
  }

  .project-list {
    grid-template-columns: initial;
    &__item + &__item {
      margin-top: 32px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .projects {
    margin: 64px auto;
  }
}
</style>
