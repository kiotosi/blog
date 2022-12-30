// https://nuxt.com/docs/api/configuration/nuxt-config
import enLocale from './locale/en.locale';
import ruLocale from './locale/ru.locale';

const additionalSCSSPathList = [
  '+breakpoints',
  '+mixins',
];

export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/i18n',
      {
        detectBrowserLanguage: {
          useCookie: false,
        },
        defaultLocale: 'ru',
        vueI18n: {
          legacy: false,
          fallbackLocale: 'en',
          messages: {
            en: enLocale,
            ru: ruLocale,
          },
        },
      },
    ],
    '@nuxt/content',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: additionalSCSSPathList.map((path) => {
            return `@use "@/styles/${path}.scss" as *;`;
          }).join(''),
        },
      },
    },
  },
});
