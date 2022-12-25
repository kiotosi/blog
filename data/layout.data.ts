import type { HeaderNavigationItem } from '@/types/header.type';
import type { Image } from '@/types/common.types';
import type { FooterInfo, FooterLink } from '~~/types/footer.types';

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

const logoList: FooterLink[] = [
  {
    image: {
      alt: 'hh.ru Logo',
      src: '/icons/hh.svg',
    },
    url: 'https://hh.ru/resume/dbf8a5e8ff0950409e0039ed1f6d644b525736',
  },
  {
    image: {
      alt: 'Instagram Logo',
      src: '/icons/instagram.svg',
    },
    url: 'https://www.instagram.com/crackidocky/',
  },
  {
    image: {
      alt: 'Twitter Logo',
      src: '/icons/twitter.svg',
    },
    url: 'https://twitter.com/beebezzhoney',
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
  logoList,
};

export default {
  navigationList,
  logo,
  footerInfo,
};
