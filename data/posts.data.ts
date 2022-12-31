import type { PostItem, TagItem } from '@/types/blog.types';
import type { StackItem } from '~~/types/stack.types';

const tagList: TagItem[] = [
  {
    id: 0,
    name: 'vue',
    color: 'green',
  },
  {
    id: 1,
    name: 'javascript',
    color: 'blue',
  },
];

const postList: PostItem[] = [
  {
    title: 'О кастомных v-model',
    description: 'Как v-model',
    id: '0',
    tagList: [
      {
        id: 0,
        name: 'vue',
        color: 'green',
      },
    ],
  },
];

const sortList = [
  {
    text: 'Самые новые',
    id: 0,
  },
  {
    text: 'Старьё',
    id: 1,
  },
];

const tutorialList: StackItem[] = [
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
  {
    title: 'Lit',
    image: {
      src: '/logos/lit-logo.svg',
      alt: 'Lit tutorial',
    },
    isFavorite: false,
    url: '/tutorial/lit',
  },
];

export default {
  tagList,
  postList,
  sortList,
  tutorialList,
};
