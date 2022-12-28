import type { StackItem, TechBranch } from '@/types/stack.types';

const frontend: TechBranch = {
  frameworkList: [
    {
      title: 'Vue',
      image: {
        alt: 'Vue logo',
        src: '/icons/vue-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Lit',
      image: {
        alt: 'Lit logo',
        src: '/icons/lit-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Bootstrap',
      image: {
        alt: 'Bootstrap logo',
        src: '/icons/bootstrap-logo.svg',
      },
      isFavorite: false,
    },
  ],
  libraryList: [],
  utilityList: [],
};

const backend: TechBranch = {
  frameworkList: [],
  libraryList: [],
  utilityList: [],
};

const testing: TechBranch = {
  frameworkList: [],
  libraryList: [],
  utilityList: [],
};

const additional: StackItem[] = [];

export default {
  frontend,
  backend,
  testing,
  additional,
};
