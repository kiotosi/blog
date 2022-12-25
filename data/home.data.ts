import type { GitItem, TopicItem } from '@/types/home.types';
import type { ProjectItem } from '@/types/common.types';

const hero = {
  titleList: ['О Разработке\nвеб-приложений', 'Архитектура. Разработка. Тестирование.', 'Обсуждаем важные темы, учимся сложным вещам', 'Разработчик о разработке софта', 'Вся сложная логика основана на простых правилах', 'О Nuxt, Vue, TypeScript и о много другом'],
  text: 'Привет! Меня зовут Даня, я работаю Фронтэнд-разработчиком уже 3 года. На данном сайте я делюсь опытом, технологиями, которые использую и просто рассказываю интересные вещи о разработке.',
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
    title: 'Архитектура.',
    description: 'Для каждого разработчка жизненно необходимо уметь принимать решения, от которых зависит успех разработки',
    image: {
      src: '/img/skill_architecturing.png',
      alt: 'Architecture',
    },
  },
  {
    title: 'Разработка.',
    description: 'Уметь писать код - непросто.\nВ разработке зачастую больше думаешь, нежели пишешь.',
    image: {
      src: '/img/skill_developing.png',
      alt: 'Development',
    },
  },
  {
    title: 'Сопровождение.',
    description: 'Сопровождение кода занимает большую часть времени.\nЯ с радостью расскажу о рефакторинге, тестировании, а также устранении легаси.',
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
      name: 'Researcher',
      description: 'App for storing links, videos, books and other information for researches',
      url: 'https://github.com/kiotosi/researcher',
    },
  },
  {
    type: 'github',
    info: {
      name: 'Blog',
      description: 'Данный блог. Блог сделан на Nuxt 3, Vue, Typescript.',
      url: 'https://github.com/kiotosi/researcher',
    },
  },
];

export default {
  hero,
  gitList,
  topicList,
  projectList,
};
