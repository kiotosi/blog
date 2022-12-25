import type { HeaderNavigationItem } from '@/types/header.type';
import type { Image } from '@/types/common.types';
import type { FooterInfo } from '~~/types/footer.types';

const logo: Image = {
  src: '/img/logo.svg',
  alt: 'Logo',
};

const navigationList: HeaderNavigationItem[] = [
  {
    name: 'Об авторе',
    url: '/about',
  },
  {
    name: 'Блог',
    url: '/blog',
  },
  {
    name: 'Связаться',
    url: '/contact',
  },
];

const footerInfo: FooterInfo = {
  title: 'Вы можете мне написать!',
  text: [
    'Справа предоставлена форма обратной связи, которая поможет вам связаться со мной.',
    'Также внизу можно найти ссылки на различные сети.\nВы можете спокойно написать мне в телеграм и я постараюсь ответить вам в течение дня.',
  ],
  image: {
    src: '/img/footer.png',
    alt: 'Footer image',
  },
};

export default {
  navigationList,
  logo,
  footerInfo,
};
