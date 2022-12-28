<template>
  <div class="navigation">
    <ul class="navigation__list">
      <li v-for="(navigationItem, index) in navigationList" :key="index" class="navigation__item">
        <div class="navigation__item" />
        <ul v-show="navigationItem?.sublist" class="navigation__sublist">
          <li class="navigation__subitem">
            <div class="navigation__subtitle" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const navigationList = [];
</script>

<style scoped lang="scss">
</style>
