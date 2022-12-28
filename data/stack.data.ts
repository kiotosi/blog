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
      title: 'Bootstrap',
      image: {
        alt: 'Bootstrap logo',
        src: '/logos/bootstrap-logo.svg',
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
