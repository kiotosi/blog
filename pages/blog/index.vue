<template>
  <div class="blog">
    <div class="blog__header header">
      <div class="header__row">
        <h1 class="header__title">
          Блог
        </h1>
        <AppSearch class="header__search" />
      </div>
      <div class="header__row">
        <ul class="header__taglist taglist">
          <li v-for="tag in postsData.tagList" :key="tag.id" class="taglist__item">
            <!-- TODO: Change color implementation -->
            <TagItem
              :id="tag.id"
              :name="tag.name"
              :is-red="tag.color === 'red'"
              :is-blue="tag.color === 'blue'"
              :is-green="tag.color === 'green'"
              :is-yellow="tag.color === 'yellow'"
            />
          </li>
        </ul>
        <AppSelect :select-list="postsData.sortList" class="header__sort" />
      </div>
    </div>
    <div class="blog__postlist postlist">
      <PostItem v-for="post in postsData.postList" :key="post.id" class="post__item" v-bind="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import postsData from '@/data/posts.data';
</script>

<style scoped lang="scss">
.blog {
  display: block;
  margin-top: 32px;

  &__postlist {
    margin-top: 16px;
  }
}

.header {
  padding-bottom: 32px;
  border-bottom: #d8d8d8 1px solid;

    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      font-weight: 600;
    }

    &__search {
      width: 100%;
    }

    &__sort {
      width: 200px;
    }
}

.taglist {
  display: flex;
  gap: 8px;
  margin-top: 8px;

  &__item {
    width: fit-content;
  }
}

.postlist {
  &__item:not(:first-child) {
    margin-top: 12px;
  }
}
</style>
