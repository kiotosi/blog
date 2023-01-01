import type { ParsedContent, NavItem } from '@nuxt/content/dist/runtime/types';
import type { TagItem } from './blog.types';
import type { StackItem } from './stack.types';

export interface TagsContent extends ParsedContent {
  tags: TagItem[];
}

export type TutorialContent = NavItem & StackItem;

export interface PostContent extends NavItem {
  url: string;
  tagList: number[]
  description: string,
}

export interface FullPostContent extends Omit<PostContent, 'tagList'> {
  tagList: TagItem[];
}
