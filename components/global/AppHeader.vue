<template>
  <header class="header">
    <NuxtLink to="/">
      KIOTOSI
    </NuxtLink>
    <HeaderNavigation :navigation-list="layoutData.navigationList" class="header__navigation" />
  </header>
</template>

<script lang="ts" setup>
import layoutData from '@/data/layout.data';

</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 50px;
}

@media screen and (max-width: $mobile) {
  .header {
    position: fixed;
    background: white;
    justify-content: center;
    padding: 24px;
    z-index: 10;

    &__navigation {
      margin-left: auto;
    }
  }
}
</style>
