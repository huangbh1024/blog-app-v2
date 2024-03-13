<script lang="ts" setup>
import { NuxtImg } from '#components'
import type { BlogItem } from '@/types/blog'

const props = defineProps<Partial<BlogItem>>()
const path = computed(() => (props.id ? `/blogs/${props.id}` : '/'))
const notFoundImg
  = 'data:image/jpeg;base64,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'
const imgSrc = computed(() => (props.image ? props.image : notFoundImg))
const imgRef = ref<InstanceType<typeof NuxtImg>>()
const imgComplete = computed(() => imgRef.value?.$el.complete)
const naturalWidth = computed(() => imgRef.value?.$el.naturalWidth)
const imgIsLoading = computed(() => !imgComplete.value)
const imgIsError = computed(() => imgComplete.value && !naturalWidth.value)
</script>

<template>
  <article
    class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <NuxtLink :to="path">
      <div
        class="lg:h-48 md:h-36 w-full rounded-t-2xl shadow-lg overflow-hidden"
      >
        <CommonLoading v-if="imgIsLoading" />
        <NuxtImg
          v-show="!imgIsLoading"
          ref="imgRef"
          width="300"
          :src="imgIsError ? notFoundImg : imgSrc"
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
