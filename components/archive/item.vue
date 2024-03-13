<script lang="ts" setup>
import type { ArchiveItem } from '@/types/archive'

defineProps<ArchiveItem>()
</script>

<template>
  <li>
    <div class="select-none relative h-20 pointer-events-none">
      <span
        class="text-[8em] text-transparent absolute -left-12 -top-8 font-bold text-stroke-2 text-stroke-hex-aaa opacity-10"
      >{{ date }}</span>
    </div>
    <div>
      <NuxtLink
        v-for="item in list"
        :key="item.id"
        class="block font-normal mb-6 mt-2 no-underline cursor-pointer hover:underline"
      >
        <div
          class="no-underline flex flex-col md:flex-row gap-2 md:items-center"
        >
          <div class="text-lg leading-[1.2em] flex gap-2 flex-wrap">
            <span class="align-middle dark:text-zinc-400">{{
              item.title
            }}</span>
          </div>
          <div class="flex gap-2 items-center">
            <span
              class="text-sm opacity-50 whitespace-nowrap dark:opacity-100"
            >{{ item.createAt }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </li>
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
