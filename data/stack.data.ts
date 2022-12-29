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
      url: 'https://vuejs.org',
    },
    {
      title: 'Lit',
      image: {
        alt: 'Lit logo',
        src: '/logos/lit-logo.svg',
      },
      isFavorite: false,
      url: 'https://lit.dev',
    },
    {
      title: 'Typescript',
      image: {
        alt: 'Typescript logo',
        src: '/logos/typescript-logo.svg',
      },
      isFavorite: true,
      url: 'https://www.typescriptlang.org',
    },
    {
      title: 'Svelte',
      image: {
        alt: 'Svelte logo',
        src: '/logos/svelte-logo.svg',
      },
      isFavorite: true,
      url: 'https://svelte.dev',
    },
    {
      title: 'Bootstrap',
      image: {
        alt: 'Bootstrap logo',
        src: '/logos/bootstrap-logo.svg',
      },
      isFavorite: false,
      url: 'https://getbootstrap.com',
    },
    {
      title: 'Javascript',
      image: {
        alt: 'JS logo',
        src: '/logos/javascript-logo.svg',
      },
      isFavorite: false,
      url: 'https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
    },
    {
      title: 'HTML 5',
      image: {
        alt: 'HTML logo',
        src: '/logos/html5-logo.svg',
      },
      isFavorite: false,
      url: 'https://en.wikipedia.org/wiki/HTML5',
    },
    {
      title: 'CSS 3',
      image: {
        alt: 'CSS logo',
        src: '/logos/css3-logo.svg',
      },
      isFavorite: false,
      url: 'https://ru.wikipedia.org/wiki/CSS',
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
      url: 'https://router.vuejs.org',
    },
    {
      title: 'Pinia',
      image: {
        alt: 'Pinia logo',
        src: '/logos/pinia-logo.svg',
      },
      isFavorite: true,
      url: 'https://pinia.vuejs.org',
    },
    {
      title: 'Three.js',
      image: {
        alt: 'Three JS logo',
        src: '/logos/threejs-logo.svg',
      },
      isFavorite: false,
      url: 'https://threejs.org',
    },
    {
      title: 'JQuery',
      image: {
        alt: 'JQuery logo',
        src: '/logos/jquery-logo.svg',
      },
      isFavorite: false,
      url: 'https://jquery.com',
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
      url: 'https://sass-lang.com',
    },
    {
      title: 'ESLint',
      image: {
        alt: 'ESLint logo',
        src: '/logos/eslint-logo.svg',
      },
      isFavorite: false,
      url: 'https://eslint.org',
    },
    {
      title: 'Gulp',
      image: {
        alt: 'Gulp logo',
        src: '/logos/gulp-logo.svg',
      },
      isFavorite: false,
      url: 'https://gulpjs.com',
    },
    {
      title: 'Hugo',
      image: {
        alt: 'Hugo logo',
        src: '/logos/hugo-logo.svg',
      },
      isFavorite: false,
      url: 'https://gohugo.io',
    },
    {
      title: 'Less',
      image: {
        alt: 'Less logo',
        src: '/logos/less-logo.svg',
      },
      isFavorite: false,
      url: 'https://lesscss.org',
    },
    {
      title: 'Stylus',
      image: {
        alt: 'Stylus logo',
        src: '/logos/stylus-logo.svg',
      },
      isFavorite: false,
      url: 'https://stylus-lang.com',
    },
    {
      title: 'Vite',
      image: {
        alt: 'Vite logo',
        src: '/logos/vite-logo.svg',
      },
      isFavorite: true,
      url: 'https://vitejs.dev',
    },
    {
      title: 'Webpack',
      image: {
        alt: 'Webpack logo',
        src: '/logos/webpack-logo.svg',
      },
      isFavorite: false,
      url: 'https://webpack.js.org',
    },
  ],
};

const backend: TechBranch = {
  frameworkList: [
    {
      title: 'Express.js',
      image: {
        alt: 'express logo',
        src: '/logos/express-logo.svg',
      },
      isFavorite: true,
      url: 'https://expressjs.com',
    },
    {
      title: 'Firebase',
      image: {
        alt: 'Firebase logo',
        src: '/logos/firebase-logo.svg',
      },
      isFavorite: true,
      url: 'https://firebase.google.com',
    },
    {
      title: 'MongoDB',
      image: {
        alt: 'MongoDB logo',
        src: '/logos/mongodb-logo.svg',
      },
      isFavorite: false,
      url: 'https://www.mongodb.com',
    },
    {
      title: 'Node.js',
      image: {
        alt: 'nodejs logo',
        src: '/logos/nodejs-logo.svg',
      },
      isFavorite: true,
      url: 'https://nodejs.org',
    },
    {
      title: 'Nuxt.js',
      image: {
        alt: 'nuxt logo',
        src: '/logos/nuxtjs-logo.svg',
      },
      isFavorite: true,
      url: 'https://nuxt.com',
    },
    {
      title: 'Redis',
      image: {
        alt: 'Redis logo',
        src: '/logos/redis-logo.svg',
      },
      isFavorite: false,
      url: 'https://redis.io',
    },
    {
      title: 'Rust',
      image: {
        alt: 'Rust logo',
        src: '/logos/rust-logo.svg',
      },
      isFavorite: true,
      url: 'https://www.rust-lang.org',
    },
  ],
  libraryList: [
    {
      title: 'Socket.io',
      image: {
        alt: 'socketio logo',
        src: '/logos/socketio-logo.svg',
      },
      isFavorite: true,
      url: 'https://socket.io',
    },
  ],
  utilityList: [
    {
      title: 'Electron',
      image: {
        alt: 'express logo',
        src: '/logos/electron-logo.svg',
      },
      isFavorite: false,
      url: 'https://www.electronjs.org',
    },
    {
      title: 'Tauri',
      image: {
        alt: 'Tauri logo',
        src: '/logos/tauri-logo.svg',
      },
      isFavorite: true,
      url: 'https://tauri.app',
    },
    {
      title: 'Heroku',
      image: {
        alt: 'Heroku logo',
        src: '/logos/heroku-logo.svg',
      },
      isFavorite: true,
      url: 'https://www.heroku.com',
    },
  ],
};

const testing: StackItem[] = [
  {
    title: 'Jest',
    image: {
      alt: 'Jest logo',
      src: '/logos/jest-logo.svg',
    },
    isFavorite: true,
    url: 'https://jestjs.io',
  },
  {
    title: 'Mocha',
    image: {
      alt: 'Mocha logo',
      src: '/logos/mocha-logo.svg',
    },
    isFavorite: false,
    url: 'https://mochajs.org',
  },
  {
    title: 'Webdriver.io',
    image: {
      alt: 'Webdriverio logo',
      src: '/logos/webdriverio-logo.svg',
    },
    isFavorite: false,
    url: 'https://webdriver.io',
  },
  {
    title: 'Spectron',
    image: {
      alt: 'Spectron logo',
      src: '/logos/spectron-logo.png',
    },
    isFavorite: true,
    url: 'https://github.com/electron-userland/spectron',
  },
];

const other: StackItem[] = [
  {
    title: 'Bash',
    image: {
      alt: 'Bash logo',
      src: '/logos/bash-logo.svg',
    },
    isFavorite: false,
    url: 'https://www.gnu.org/software/bash/',
  },
  {
    title: 'Docker',
    image: {
      alt: 'Docker logo',
      src: '/logos/docker-logo.svg',
    },
    isFavorite: true,
    url: 'https://www.docker.com',
  },
  {
    title: 'Figma',
    image: {
      alt: 'Figma logo',
      src: '/logos/figma-logo.svg',
    },
    isFavorite: true,
    url: 'http://figma.com',
  },
  {
    title: 'VSCode',
    image: {
      alt: 'vscode logo',
      src: '/logos/vscode-logo.svg',
    },
    isFavorite: false,
    url: 'https://code.visualstudio.com',
  },
  {
    title: 'Vim',
    image: {
      alt: 'Vim logo',
      src: '/logos/vim-logo.svg',
    },
    isFavorite: true,
    url: 'https://www.vim.org',
  },
  {
    title: 'Linux',
    image: {
      alt: 'Linux logo',
      src: '/logos/linux-logo.svg',
    },
    isFavorite: true,
    url: 'https://ru.wikipedia.org/wiki/Linux',
  },
  {
    title: 'Git',
    image: {
      alt: 'Git logo',
      src: '/logos/git-logo.svg',
    },
    isFavorite: true,
    url: 'https://git-scm.com',
  },
];

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
