<template>
  <div class="tutorial">
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

  table {
    color: #333;
    background: white;
    border: 1px solid grey;
    font-size: 12pt;
    border-collapse: collapse;
    margin: 1em 0;
    width: 100%;
  }

  table thead th,
  table tfoot th {
    word-wrap: none;
    color: rgb(32, 32, 32);
    background: rgba(162, 162, 162, 0.1);
  }

  table caption {
    padding:.5em;
  }

  table th,
  table td {
    padding: .5em;
    border: 1px solid lightgrey;
  }

  h1, h2, h3, h4 {
    margin: 1.5em 0 0.67em;
    position: relative;
    padding-left: 0;

    a {
      color: inherit;
      cursor: initial;

      &:hover {
        text-decoration: none;
      }
    }
  }

  h3 {
    color: #505050;
    font-style: italic;
  }

  h1::before, h2::before, h3::before {
    font-size: 16px;
    position: absolute;
    left: -32px;
    bottom: -4px;
    color: #a1a1a1;
    text-transform: uppercase;
  }

  h1::before {
    content: 'h1';
  }

  h2::before {
    content: 'h2';
  }

  h3::before {
    content: 'h3';
    bottom: -1px;
    font-style: initial;
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

  a {
    color: var(--article-link);

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
