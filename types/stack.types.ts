import type { Image } from './common.types';

export interface StackItem {
  title: string;
  isFavorite: boolean;
  image: Image;
  url: string;
}

export interface TechBranch {
  frameworkList: StackItem[];
  libraryList: StackItem[];
  utilityList: StackItem[];
}

interface NavigationItem {
  title: string;
  id: string;
}

export interface StackNavigationItem extends NavigationItem {
  child?: NavigationItem[];
}

export type Branch = 'frontend' | 'backend' | 'testing' | 'other';
export type SubBranch = 'framework' | 'library' | 'additional';
