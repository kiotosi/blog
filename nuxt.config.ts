// https://nuxt.com/docs/api/configuration/nuxt-config
import enLocale from './locale/en.locale';
import ruLocale from './locale/ru.locale';

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
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/+breakpoints.scss" as *;',
        },
      },
    },
  },
});
