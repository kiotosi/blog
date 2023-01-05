<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import 'normalize.css';
import '@/styles/index.scss';

useHead({
  meta: [
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      property: 'og:image',
      content: 'https://i.pinimg.com/originals/0c/22/b5/0c22b50a6869fb56d7e67a7086b5307e.jpg',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico',
    },
  ],
});
</script>
