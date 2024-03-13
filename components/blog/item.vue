<script lang="ts" setup>
import type { BlogItem } from '@/types/blog'

const props = defineProps<Partial<BlogItem>>()
const path = computed(() => (props.id ? `/blogs/${props.id}` : '/'))
</script>

<template>
  <article
    class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <div
          class="h-full w-full ounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg overflow-hidden"
        >
          <CommonImage
            width="300"
            :src="image"
            class="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-500"
          />
        </div>
      </div>
      <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div
          class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"
        >
          <div class="flex items-center">
            <LogoDate />
            <p>{{ createAt }}</p>
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <span v-for="(item, index) in tags" :key="index">
              {{ item }}
            </span>
          </div>
        </div>
        <div
          class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"
        >
          <p>阅读更多</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
