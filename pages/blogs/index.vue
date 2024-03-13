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

const page = ref(1)
const size = ref(5)
const total = ref(10)
const totalPage = computed(() => Math.ceil(total.value / size.value))
function onPrevPageClick() {
  if (page.value > 1)
    page.value -= 1
}
function onNextPageClick() {
  if (page.value < totalPage.value)
    page.value += 1
}

const searchKeyword = ref('')
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <BlogHero />
    <div class="px-6">
      <input
        v-model="searchKeyword"
        placeholder="Search"
        type="text"
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
    </div>
    <div class="space-y-5 my-5 px-4">
      <template v-if="blogs.length">
        <BlogItem v-for="item in blogs" :key="item.id" v-bind="item" />
      </template>
      <BlogEmpty v-else />
    </div>
    <div class="flex justify-center items-center space-x-6">
      <button :disabled="page <= 1" @click="onPrevPageClick">
        <Icon
          name="mdi:code-less-than"
          size="30"
          :class="{
            'text-sky-700 dark:text-sky-400': page > 1,
          }"
        />
      </button>
      <p>{{ page }}/{{ totalPage }}</p>
      <button :disabled="page >= totalPage" @click="onNextPageClick">
        <Icon
          name="mdi:code-greater-than"
          size="30"
          :class="{ 'text-sky-700 dark:text-sky-400': page < totalPage }"
        />
      </button>
    </div>
  </main>
</template>
