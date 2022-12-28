import type { StackItem, StackNavigationItem, TechBranch, Branch, SubBranch } from '@/types/stack.types';

const frontend: TechBranch = {
  frameworkList: [
    {
      title: 'Vue',
      image: {
        alt: 'Vue logo',
        src: '/logos/vue-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Lit',
      image: {
        alt: 'Lit logo',
        src: '/logos/lit-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Typescript',
      image: {
        alt: 'Typescript logo',
        src: '/logos/typescript-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Svelte',
      image: {
        alt: 'Svelte logo',
        src: '/logos/svelte-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Bootstrap',
      image: {
        alt: 'Bootstrap logo',
        src: '/logos/bootstrap-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Javascript',
      image: {
        alt: 'JS logo',
        src: '/logos/javascript-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'HTML 5',
      image: {
        alt: 'HTML logo',
        src: '/logos/html5-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'CSS 3',
      image: {
        alt: 'CSS logo',
        src: '/logos/css3-logo.svg',
      },
      isFavorite: false,
    },
  ],
  libraryList: [
    {
      title: 'Vue Router',
      image: {
        alt: 'Vue Router logo',
        src: '/logos/vue-router-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Pinia',
      image: {
        alt: 'Pinia logo',
        src: '/logos/pinia-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Three.js',
      image: {
        alt: 'Three JS logo',
        src: '/logos/threejs-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'JQuery',
      image: {
        alt: 'JQuery logo',
        src: '/logos/jquery-logo.svg',
      },
      isFavorite: false,
    },
  ],
  utilityList: [
    {
      title: 'Sass',
      image: {
        alt: 'Sass logo',
        src: '/logos/sass-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'ESLint',
      image: {
        alt: 'ESLint logo',
        src: '/logos/eslint-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Gulp',
      image: {
        alt: 'Gulp logo',
        src: '/logos/gulp-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Hugo',
      image: {
        alt: 'Hugo logo',
        src: '/logos/hugo-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Less',
      image: {
        alt: 'Less logo',
        src: '/logos/less-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Stylus',
      image: {
        alt: 'Stylus logo',
        src: '/logos/stylus-logo.svg',
      },
      isFavorite: false,
    },
    {
      title: 'Vite',
      image: {
        alt: 'Vite logo',
        src: '/logos/vite-logo.svg',
      },
      isFavorite: true,
    },
    {
      title: 'Webpack',
      image: {
        alt: 'Webpack logo',
        src: '/logos/webpack-logo.svg',
      },
      isFavorite: false,
    },
  ],
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

const other: StackItem[] = [];

const navigation: StackNavigationItem[] = [
  {
    title: 'stack.navigation.frontend',
    id: getNavigationId('frontend'),
    child: [
      {
        title: 'stack.navigation.sublist.framework',
        id: getNavigationId('frontend', 'framework'),
      },
      {
        title: 'stack.navigation.sublist.library',
        id: getNavigationId('frontend', 'library'),
      },
      {
        title: 'stack.navigation.sublist.additional',
        id: getNavigationId('frontend', 'additional'),
      },
    ],
  },
  {
    title: 'stack.navigation.backend',
    id: getNavigationId('backend'),
    child: [
      {
        title: 'stack.navigation.sublist.framework',
        id: getNavigationId('frontend', 'framework'),
      },
      {
        title: 'stack.navigation.sublist.library',
        id: getNavigationId('backend', 'library'),
      },
      {
        title: 'stack.navigation.sublist.additional',
        id: getNavigationId('backend', 'additional'),
      },
    ],
  },
  {
    title: 'stack.navigation.testing',
    id: getNavigationId('testing'),
    child: [
      {
        title: 'stack.navigation.sublist.framework',
        id: getNavigationId('testing', 'framework'),
      },
      {
        title: 'stack.navigation.sublist.library',
        id: getNavigationId('testing', 'library'),
      },
      {
        title: 'stack.navigation.sublist.additional',
        id: getNavigationId('testing', 'additional'),
      },
    ],
  },
  {
    title: 'stack.navigation.other',
    id: getNavigationId('other'),
  },
];

export function getNavigationId (branch: Branch, subbranch?: SubBranch) {
  let selector = branch;

  if (subbranch) {
    selector += `-${subbranch}`;
  }

  return selector;
}

export default {
  frontend,
  backend,
  testing,
  other,
  navigation,
};
