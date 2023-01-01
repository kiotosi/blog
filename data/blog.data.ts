import type { ArticleErrorInfo } from '@/types/blog.types';

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

const notFoundArticle: ArticleErrorInfo = {
  title: 'Статья не найдена, но вы можете посмотреть на милую птичку',
  text: 'Мы долго думали и искали данную статью, но не нашли её :(\nПопробуйте перейти по ссылке чуть позже',
  image: {
    src: '/img/bird.png',
    alt: 'Птичка!',
  },
};

const emptyArticle: ArticleErrorInfo = {
  title: 'Знаете что хорошего в арбузах? Их можно есть вместо того чтобы писать статьи.',
  text: 'Как только разработчик закончит есть арбуз - он напишет данную статью.\nПерейдите по ссылке чуть позже :)',
  image: {
    src: '/img/abstraction.png',
    alt: 'Арбуз!',
  },
};

export default {
  sortList,
  notFoundArticle,
  emptyArticle,
};
