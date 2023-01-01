import type { Image } from './common.types';

export type TagColor = 'blue' | 'green' | 'yellow' | 'red';
export interface TagItem {
  name: string;
  id: number;
  color?: TagColor;
}

export interface PostItem {
  title: string;
  description: string;
  tagList: TagItem[];
  id: string;
}

export interface ArticleErrorInfo {
  title: string;
  text: string;
  image: Image;
}
