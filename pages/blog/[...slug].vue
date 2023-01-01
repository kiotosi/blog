<template>
  <div class="post">
    <ContentDoc>
      <template #not-found>
        <ArticleError
          v-bind="blogData.notFoundArticle"
        />
      </template>
      <template #empty>
        <ArticleError
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
