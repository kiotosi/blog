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
