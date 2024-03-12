<script lang="ts" setup>
const route = useRoute()
const path = computed(() => route.path)

const routes = [
  { path: '/blogs', name: 'Blogs' },
  { path: '/categories', name: 'Categories' },
  { path: '/about', name: 'About Me' },
]
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800 font-semibold">
    <div
      class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline"
    >
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-2xl font-bold">
          <NuxtLink to="/" :class="{ underline: path === '/' }">
            XXXX
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li v-for="item in routes" :key="item.path">
          <NuxtLink :to="item.path" :class="{ underline: path === item.path }">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
