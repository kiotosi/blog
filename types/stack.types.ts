import type { Image } from './common.types';

export interface StackItem {
  title: string;
  isFavorite: boolean;
  image: Image;
}

export interface TechBranch {
  frameworkList: StackItem[];
  libraryList: StackItem[];
  utilityList: StackItem[];
}
