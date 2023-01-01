---
title: "Kiotosi's Blog: Vue Router tutorial"
description: 'Туториал по Vue Router в формате рассказа на одной странице'
navigation:
  title: 'Vue Router'
  image:
    src: '/logos/vue-router-logo.svg'
    alt: 'Vue Router logo'
  isFavorite: false
---

# Vue Router

**Vue Router** - библиотека для Vue, которая является *роутером* для Vue.js.

> Роутер - это инстанс, который руководит путями. В Express это инстанс, который содержит в себе пути, которые можно модульно заменить, в Vue.js это инстанс, который будет перенаправлять пользователя к нужным ему компонентам при переходе по ссылке
> 

В Vue Router есть два компонента:

- `router-link` - Это ссылка на какой-либо компонент
- `router-view` - Это служебный компонент, который будет показывать компонент в зависимости от ссылки

Если наш интерфейс до Vue Router выглядел следующим образом:

```vue
<template>
  <header>
	<a href="/">Main</a>
	<a href="/about">About</a>
	<a href="/companies">Companies</a>
  </header>

<!-- Контент -->
</template>
```

То теперь он будет выглядеть следующим образом:

```vue
<template>
  <header>
	<router-link to="/">Main</router-link>
	<router-link to="/about">About</router-link>
	<router-link to="/companies">Companies</router-link>
  </header>

<!-- Контент -->
  <router-view/>
</template>
```

# Инициализация роутера

Для начала мы должны передать объект роутера в `main.js`, для того чтобы мы могли его использовать. Для начала создадим файл `router.js`, в котором и создадим роутер:

```typescript
// router.js
import VueRouter from 'vue-router';
import Main from './src/components/Main'
import About from './src/components/About'

// Создадим пути, по которым роутер будет переводить нас
const routes = [
  {
	path: '/',
	component: Main
  },
  {
	path: '/about',
	component: About
  }
];

// Создадим сам роутер
const router = VueRouter.createRouter({

  // Создадим объект истории, для того чтобы пользователь мог прыгать по ссылкам и к примеру те же позиции скролла сохранялись
  history: VueRouter.createWebHashHistory(),
  routes
});

export router;
```

Далее нам нужно в уже созданное приложение в `main.js` подключить роутер, делается это следующим образом:

```typescript
// main.js
import * as Vue from 'vue';
import router from './router.js';
const app = Vue.createApp(App);

// Вот тут говорим Vue, чтобы мы использовали роутер
app.use(router);

app.mount('#app');
```

# Именование путей

Вместо указания относительного пути с помощью `path`, мы можем просто указать поле `name`.

## Указания пути в роутере

Для того чтобы указать путь в роутере нам достаточно просто указать свойство `name`:

```typescript
const routes = [
  {
    path: '/user/:username',

	// Вот тут мы даем имя для пути
    name: 'user',
    component: User
  }
];
```

## Использование имен

В служебном компоненте `router-link` мы вместо ссылки можем указать `name`:

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

Имя пути работает и с `useRouter`:

```typescript
router.push({ name: 'user', params: { username: 'erina' } })
```

Оба случая будут вести пользователя на страницу: `/user/erina`.

# Передрессация с помощью логики

Мы можем переадресовывать пользователя с помощью логики. Для этого нам достаточно просто импортировать `useRouter`:

```ts
import {useRouter} from 'vue-router';
const router = useRouter();

// literal string path
router.push('/users/eduardo')

// object with path
router.push({ path: '/users/eduardo' })

// named route with params to let the router build the url
router.push({ name: 'user', params: { username: 'eduardo' } })

// with query, resulting in /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// with hash, resulting in /about#team
router.push({ path: '/about', hash: '#team' })
```

Кроме метода `push`, есть также метод `replace`, который заменяет текущий инстанс в истории без пуша нового:

```ts
import {useRouter} from 'vue-router';
const router = useRouter();

router.push({ path: '/home', replace: true })
// equivalent to
router.replace({ path: '/home' })
```

Это будет полезно, если например пользователь разлогинился и попытался нажать "Назад". В результате его перекинет на страницу, которая была ДО того как он залогинился, потому что мы заменили страницу, где он был залогинен на страницу `/home`.

## Быстрый переход по истории

В браузере есть объект history. Через него можно манипулировать с историей:

- Добавлять в историю новые пункты
- Удалять из истории пункты
- Быстро переходить назад и вперед по истории

У Vue Router есть такая же история, однако она виртуальная. То есть она ==не основывается на истории браузера==. У нее точно такие же методы, как и у window.history:

```ts
import {useRouter} from 'vue-router';
const router = useRouter();

// go forward by one record, the same as router.forward()
router.go(1)

// go back by one record, the same as router.back()
router.go(-1)

// go forward by 3 records
router.go(3)

// fails silently if there aren't that many records
router.go(-100)
router.go(100)
```

# Вложенные пути

Для того чтобы вложить пути в роутер есть свойство `children`:

```typescript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
];
```

# Передача идентификатора

В библиотеке есть возможность передачи идентификаторов через путь:

```ts
const User = {
  template: '<div>User</div>',
}

// these are passed to `createRouter`
const routes = [
  { path: '/users/:id', component: User },
];
```

Тут мы передали ID в свойстве `path` в виде `:id`. Если мы перейдем по ссылке `/users/finally0202`, то у нас отрисуется шаблон User.

Внутри данного шаблона мы сможем взять ID, который был передан в ссылке следующим образом:

```html
<script>

import { useRoute } from 'vue-router'
const route = useRoute();
const id = route.params.id;

</script>
```