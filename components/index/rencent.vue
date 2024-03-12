<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon
        name="mdi:star-three-points-outline"
        size="2em"
        class="text-black dark:text-zinc-300"
      />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
        近况
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="item in 3" :key="item">
        <article
          class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300"
        >
          <NuxtLink to="/">
            <NuxtImg
              class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
              width="300"
              src="https://cdn.huangbh.cn/images/1.jpg"
            />
            <div class="px-3 pb-4">
              <div class="text-black dark:text-zinc-300 pt-3 pb-2">
                <div class="flex items-center">
                  <LogoDate />
                  2024-01-01
                </div>
                <div class="flex items-center gap-1 flex-wrap">
                  <LogoTag />
                  <span>前端</span>
                </div>
              </div>
              <h2
                class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
              >
                测试文章
              </h2>
              <p class="text-ellipsis line-clamp-2 text-base">
                测试描述
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
    </div>
  </div>
</template>
