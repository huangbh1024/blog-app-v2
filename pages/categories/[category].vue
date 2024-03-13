<script lang="ts" setup>
import type { BlogItem } from '@/types/blog'

const route = useRoute()
const category = computed(() => {
  const name = route.params.category || '未知分类'
  let strName = ''
  if (Array.isArray(name))
    strName = name.at(0) || '未知分类'
  else strName = name
  return strName
})

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
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic :category="category" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-if="blogs.length">
        <BlogCard v-for="item in blogs" :key="item.id" v-bind="item" />
      </template>
      <BlogEmpty v-else />
    </div>
  </main>
</template>
