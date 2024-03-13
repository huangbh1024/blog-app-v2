<script lang="ts" setup>
defineProps<{ category: string }>()
</script>

<template>
  <div class="container mx-auto">
    <div class="p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900">
      <h1
        class="text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl"
      >
        #{{ category }}
      </h1>
    </div>
  </div>
</template>
