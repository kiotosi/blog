<template>
  <div class="post">
    <ContentDoc>
      <template #not-found>
        <ContentArticleError
          v-bind="blogData.notFoundArticle"
        />
      </template>
      <template #empty>
        <ContentArticleError
          v-bind="blogData.emptyArticle"
        />
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
import blogData from '@/data/blog.data';
definePageMeta({
  layout: 'article',
});
</script>
