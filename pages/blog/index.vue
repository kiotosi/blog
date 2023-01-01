<template>
  <div class="blog">
    <Title>
      Kiotosi's Blog - Learn more!
    </Title>
    <div class="blog__header header">
      <div class="header__row">
        <h1 class="header__title">
          Блог
        </h1>
        <AppSearch class="header__search" />
      </div>
      <div class="header__row">
        <ul class="header__taglist taglist">
          <li v-for="tag in tagList.tags" :key="tag.id" class="taglist__item">
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
    <TutorialGallery class="blog__tutorial-list" :tutorial-list="tutorialData ?? []" title="Туториалы" />
    <div class="blog__postlist postlist">
      <PostItem
        v-for="post in postData"
        :id="post._path"
        :key="post._path"
        class="post__item"
        :title="post.title ?? ''"
        :description="post.description ?? ''"
        :tag-list="post.tagList"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavItem, ParsedContent, QueryBuilder } from '@nuxt/content/dist/runtime/types';
import type { TagsContent, TutorialContent, PostContent, FullPostContent } from '@/types/content.types';
import type { TagItem } from '@/types/blog.types';
import postsData from '@/data/posts.data';
import queryData from '@/data/query.data';

const tagList = (await queryContent('tags').findOne()) as TagsContent;

const { data: tutorialData } = useAsyncData(() => {
  const query = queryContent(queryData.tutorial);
  return fetchNavigation<TutorialContent>(query);
});

const { data: postData } = useAsyncData(async () => {
  const query = queryContent(queryData.post);
  const postList = await fetchNavigation<PostContent>(query);
  const fullPostList: FullPostContent[] = [];

  // Searching for tags in loop
  for (const post of postList) {
    const foundTagList: TagItem[] = [];

    // Looping through the each tag and searching for it in tagContent
    post.tagList.forEach((tag) => {
      const foundTag = tagList.tags.find(t => t.id === tag);
      foundTag && foundTagList.push(foundTag);
    });

    fullPostList.push({ ...post, tagList: foundTagList });
  }

  return fullPostList;
});

/**
 * Fetch content from any folder with typings
 * @param query Query for fetch
 */
async function fetchNavigation<T> (query: QueryBuilder<ParsedContent>): Promise<T[]> {
  const directoryNavigation = await fetchContentNavigation(query);

  if (directoryNavigation[0]?.children) {
    const contentList = directoryNavigation[0].children.map((nav: NavItem) => {
      return { ...nav, url: nav._path };
    });

    return contentList as T[] || [];
  }

  return [];
}

</script>

<style scoped lang="scss">
.blog {
  display: block;
  margin-top: 32px;

  &__postlist {
    margin: 32px 0;
  }

  &__tutorial-list {
    margin-top: 36px;
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
