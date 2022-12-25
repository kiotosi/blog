<template>
  <header class="header">
    <img :src="layoutData.logo.src" :alt="layoutData.logo.alt" class="header__logo">
    <HeaderNavigation :navigation-list="layoutData.navigationList" class="header__navigation" />
  </header>
</template>

<script lang="ts" setup>
import layoutData from '@/data/layout.data';

</script>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 50px;
}

@media screen and (max-width: $mobile) {
  .header {
    background: white;
    justify-content: center;
    width: 100%;
    top: 0;
    position: fixed;
    padding: 24px;

    &__navigation {
      margin-left: auto;
    }
  }
}
</style>
