import type { Image, ObjectImage } from './common.types';

export interface GitItem {
  image: ObjectImage;
  url: string;
}

export interface TopicItem {
  image: Image;
  title: string;
  description: string;
}
