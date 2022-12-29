<template>
  <div class="movement">
    <div class="background" />
    <div class="container movement__container">
      <div class="movement__title">
        {{ title }}
      </div>
      <div class="movement__text">
        {{ description }}
      </div>
      <ul class="movement__list">
        <li v-for="(step, index) in stepList" :key="index" class="movement__item step">
          <div class="step__title">
            {{ step.title }}
          </div>
          <div class="step__text">
            {{ step.text }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Каким образом происходит выбор технологий?';
const description = 'Зачастую выбор стека для разработки сильно зависит от цели конечного продукта. Вряд ли кто-то будет писать лендинг используя тонну утилит и фреймворков, если только не стоит цели сделать гибкий к изменениям продукт.\nОбычно я разделяю выбор стека на 3 шага:';
const stepList = [
  {
    title: 'Техническое задание',
    text: 'Зачастую от ТЗ зависит очень многое. Если требуется написать кроссплатформенное приложение - то выбор падает на сторону Electron или Tauri, если же нужно сделать веб-приложение, то выбор падает на Svelte или Vue. Список можно продолжать до бесконечности, однако именно от ТЗ зависит то, какие технологии будут использоваться',
  },
  {
    title: 'Дедлайны',
    text: 'Данный пункт вытекает из предыдущего. Можно сделать качественное приложение на основе Lit, однако если требуется что-то, что ускорит разработку - то выбор падает на сторону Vue или Svelte.',
  },
  {
    title: 'Удобство',
    text: 'Заключающий, но не менее важный пункт - удобство. От удобства зависит то, насколько команде будет удобно работать с продуктомм. Обычно когда я сам веду разработку - то беру любимый стек (Vue, Nuxt, Express, Firebase), однако если в команде много людей и сервис должен масштабироваться, то стек естественно будет усложняться.',
  },
];
</script>

<style scoped lang="scss">
$background-color: #f4f4ff;
@mixin splash-background {
  background-color: #f4f4ff;
}

.background {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: radial-gradient(#bec1ff 0.8px, #f4f4ff 0.8px);
  background-size: 16px 16px;
  animation: ride 60s linear infinite;
  @include splash-background;
}

.movement {
  position: relative;
  padding: 100px 0;

  &__title {
    @include splash-background;
    width: fit-content;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 24px;
  }

  &__text {
    @include splash-background;
    width: fit-content;
    line-height: 1.8;
    white-space: pre-wrap;
  }

  &__list {
    margin-top: 64px;
    display: flex;
    justify-content: space-around;
  }
}

.step {
  counter-increment: step;
  max-width: calc(33% - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: counter(step);
    border: 1px solid #cbcbcb;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    font-size: 18px;
    @include splash-background;
  }

  &__title {
    @include splash-background;
    font-size: 22px;
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 12px;
    text-align: center;
  }

  &__text {
    @include splash-background;
    display: inline;
    text-align: center;
    white-space: pre-wrap;
  }
}

@media screen and (max-width: $tablet) {
.movement {
  &__list {
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
}

.step {
  max-width: initial;
  display: block;
  position: relative;

  &::before {
    position: absolute;
    top: 5px;
  }

  &__title, &__text {
    text-align: left;
    margin-left: 80px;
    display: block;
  }

  &__title {
    margin-bottom: 24px;
  }
}
}
</style>
