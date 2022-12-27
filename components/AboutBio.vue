<template>
  <div class="bio">
    <div class="bio__title">
      {{ $t(title) }}
    </div>
    <div class="bio__details details">
      <AppDetail
        v-for="(detail, index) in detailsList"
        :key="index"
        class="details__item"
        :title="detail.title"
        :text="detail.text"
        isi18n
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DetailItem } from '@/types/common.types';

interface BioProps {
  title: string;
  detailsList: DetailItem[];
}
defineProps<BioProps>();
</script>

<style scoped lang="scss">
.bio {
  padding: 0 50px;

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
  }

  &__details {
    margin-top: 60px;
  }
}

.details {
  &__item:not(:first-child) {
    margin-top: 16px;
  }
}
</style>
