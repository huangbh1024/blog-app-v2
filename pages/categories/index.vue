<script lang="ts" setup>
import type { CategoryItem } from '@/types/category'

const categories: CategoryItem[] = [
  { id: 1, title: '前端', count: 2 },
  { id: 2, title: 'JavaScript', count: 1 },
]
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryItem v-for="item in categories" :key="item.id" v-bind="item" />
    </div>
  </main>
</template>
