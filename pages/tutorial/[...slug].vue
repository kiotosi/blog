<template>
  <div class="tutorial">
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
import ArticleError from '@/components/ArticleError.vue';
definePageMeta({
  layout: 'article',
});
</script>

<style lang="scss">
.tutorial {
  h1:first-child {
    margin-top: 0;
  }

  blockquote {
    margin-left: 0;
    padding-left: 36px;
    border-left: 3px solid var(--black);
  }

  h1, h2, h3, h4 {
    margin: 1.5em 0 0.67em;
  }

  code {
    display: inline-block;
    background-color: #e8e8e8;
    color: #d35959;
    padding: 2px 4px;
    line-height: 1;
    border-radius: 4px;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.6rem;
  }

  li:not(:first-child) {
    margin-top: 4px;
  }

  pre code {
    padding: 12px;
    font-size: 12px;
    line-height: 1.1;
    width: 100%;
    background-color: #1f1f1f;
    overflow-x: auto;
  }

  // Scroll
  pre code::-webkit-scrollbar-track {
    background-color: transparent;
    position: absolute;
  }

  pre code::-webkit-scrollbar {
    height: 4px;
    background-color: transparent;
    position: absolute;
  }

  pre code::-webkit-scrollbar-thumb {
    background-color: #717171;
    position: absolute;
  }
}
</style>
