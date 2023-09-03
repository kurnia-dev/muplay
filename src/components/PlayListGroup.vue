<template>
    <div :class="direction === 'vertical' ? 'py-8 px-10' : ''">
      <div class="flex items-center justify-between mb-10 sm:mb-12">
        <h2 class="uppercase font-bold text-xl">{{ groupTitle }}</h2>
        <router-link to="" class="text-secondary text-base">See All</router-link>
      </div>
      <div class="max-w-[100%] max-y-[100%] overflow-auto">
        <ul class="flex" :class="direction === 'vertical' ? 'flex-col gap-1' : 'gap-[clamp(26px,2vw,32px)]'">
          <li v-for="track in tracks" :key="track.href"
              class="flex gap-8 cursor-pointer group-hover rounded-xl"
              :class="direction === 'vertical' ? 'flex-row py-[clamp(8px,3vw,16px)] items-center' : 'flex-col'">
            <img :src="track.album.images[0].url" :title="track.name" alt="" class="rounded-[10%]"
                 :style="direction === 'vertical' ? 'width: clamp(60px,5vw,80px);' : 'min-width: clamp(160px,5vw,200px)'" />
            <div>
              <a class="font-bold text-[clamp(16px,4vw,20px)]" :href="track.href">{{ track.name }}</a>
              <div class="text-[clamp(14px,4vw,18px)] text-secondary">{{ track.artists[0].name }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'PlayListGroup',
    props: ['groupTitle', 'link', 'direction', 'tracks']
  }
  </script>