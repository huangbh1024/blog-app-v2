<script lang="ts" setup>
import type { BlogItem } from '@/types/blog'

const props = defineProps<Partial<BlogItem>>()
const path = computed(() => (props.id ? `/blogs/${props.id}` : '/'))
</script>

<template>
  <article
    class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <NuxtLink :to="path">
      <div
        class="lg:h-48 md:h-36 w-full rounded-t-2xl shadow-lg overflow-hidden"
      >
        <CommonImage
          width="300"
          :src="image"
          class="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>

      <div class="px-3 pb-4">
        <div class="text-black dark:text-zinc-300 pt-3 pb-2">
          <div class="flex items-center">
            <LogoDate />
            {{ createAt }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <span v-for="(item, index) in tags" :key="index">{{ item }}</span>
          </div>
        </div>
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
        <div
          class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2"
        >
          <p>阅读更多</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
