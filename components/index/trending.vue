<script lang="ts" setup>
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
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon
        name="mdi:star-three-points-outline"
        size="2em"
        class="text-black dark:text-zinc-300"
      />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
        热门
      </h2>
    </div>
    <div class="grid grid-cols-1">
      <template v-if="blogs.length">
        <BlogItem v-for="item in blogs" :key="item.id" v-bind="item" />
      </template>
      <BlogEmpty v-else />
    </div>
  </div>
</template>
