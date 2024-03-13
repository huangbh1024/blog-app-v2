<script lang="ts" setup>
import type { ArchiveItem } from '@/types/archive'
import type { BlogItem } from '@/types/blog'

const blogs: BlogItem[] = [
  {
    title: '标题1',
    description: '描述1',
    id: 1,
    createAt: '2024-01-01',
    image: '',
    tags: ['前端'],
  },
  {
    title: '标题2',
    description: '描述2',
    id: 2,
    createAt: '2024-01-01',
    image: 'https://cdn.huangbh.cn/images/2.jpg',
    tags: ['前端'],
  },
  {
    title: '标题3',
    description: '描述3',
    id: 3,
    createAt: '2024-01-01',
    image: 'https://cdn.huangbh.cn/images/99.jpg',
    tags: ['前端', 'JavaScript'],
  },
]

const archivies: ArchiveItem[] = [
  { id: 1, date: '2024', list: blogs },
  { id: 2, date: '2023', list: blogs },
  { id: 3, date: '2022', list: blogs },
]
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />
    <ul class="px-12">
      <ArchiveItem v-for="item in archivies" :key="item.id" v-bind="item" />
    </ul>
  </main>
</template>

<style scoped>
.text-stroke-2 {
  -webkit-text-stroke-width: 2px;
}
.text-stroke-hex-aaa {
  --un-text-stroke-opacity: 1;
  -webkit-text-stroke-color: rgb(100 100 100 / var(--un-text-stroke-opacity));
}
:is(.dark .text-stroke-hex-aaa) {
  --un-text-stroke-opacity: 1;
  -webkit-text-stroke-color: rgb(255 255 255 / var(--un-text-stroke-opacity));
}
</style>
