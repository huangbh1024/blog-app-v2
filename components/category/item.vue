<script lang="ts" setup>
defineProps<{ title: string, count: number }>()
const colors = [
  '#dc2626',
  '#d97706',
  '#65a30d',
  '#059669',
  '#0891b2',
  '#0284c7',
  '#4f46e5',
  '#7c3aed',
  '#c026d3',
  '#db2777',
]
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const picAColor = ref(`${colors.at(getRandomInt(0, colors.length - 1))}`)
</script>

<template>
  <div
    class="text-[#F1F2F4] px-5 py-3 rounded hover:underline rand-bg-color hover:scale-[1.05] transition-all duration-500"
  >
    <NuxtLink class="text-lg font-extrabold">
      <h1>#{{ title }}({{ count }})</h1>
    </NuxtLink>
  </div>
</template>

<style scoped>
.rand-bg-color {
  background-color: v-bind(picAColor);
}
</style>
