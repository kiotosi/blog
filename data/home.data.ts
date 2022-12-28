import type { GitItem, TopicItem } from '@/types/home.types';
import type { ProjectItem } from '@/types/common.types';

const hero = {
  title: 'home.hero.title',
  text: 'home.hero.text',
  image: {
    alt: 'Hero image',
    src: '/img/hero_img.png',
  },
};

const gitList: GitItem[] = [
  {
    image: {
      type: 'image/svg+xml',
      alt: 'Github Logo',
      src: '/icons/github.svg',
    },
    url: 'https://github.com/kiotosi',
  },
  {
    image: {
      type: 'image/svg+xml',
      alt: 'GitLab Logo',
      src: '/icons/gitlab.svg',
    },
    url: 'https://gitlab.com/kiotosi',
  },
];

const topicList: TopicItem[] = [
  {
    title: 'home.topics.architecture.title',
    description: 'home.topics.architecture.description',
    image: {
      src: '/img/skill_architecturing.png',
      alt: 'Architecture',
    },
  },
  {
    title: 'home.topics.development.title',
    description: 'home.topics.development.description',
    image: {
      src: '/img/skill_developing.png',
      alt: 'Development',
    },
  },
  {
    title: 'home.topics.support.title',
    description: 'home.topics.support.description',
    image: {
      src: '/img/skill_supporting.png',
      alt: 'Support',
    },
  },
];

const projectList: ProjectItem[] = [
  {
    type: 'github',
    info: {
      name: 'home.projects.researcher.name',
      description: 'home.projects.researcher.description',
      url: 'https://github.com/kiotosi/researcher',
    },
    stack: ['Rust', 'Tauri', 'Vue', 'Typescript'],
  },
  {
    type: 'github',
    info: {
      name: 'home.projects.blog.name',
      description: 'home.projects.blog.description',
      url: 'https://github.com/kiotosi/blog',
    },
    stack: ['Nuxt', 'Vue', 'Typescript'],
  },
  {
    type: 'gitlab',
    info: {
      name: 'home.projects.promisifyMedia.name',
      description: 'home.projects.promisifyMedia.description',
      url: 'https://gitlab.com/kiotosi/promisify-media',
    },
    stack: ['Typescript'],
  },
  {
    type: 'gitlab',
    info: {
      name: 'home.projects.metaparser.name',
      description: 'home.projects.metaparser.description',
      url: 'https://gitlab.com/kiotosi/meta-scrapper',
    },
    stack: ['Javascript', 'Typescript'],
  },
  {
    type: 'gitlab',
    info: {
      name: 'home.projects.kaomoji.name',
      description: 'home.projects.kaomoji.description',
      url: 'https://gitlab.com/kiotosi/vue-kaomoji',
    },
    stack: ['Javascript', 'Vue'],
  },
];

export default {
  hero,
  gitList,
  topicList,
  projectList,
};
