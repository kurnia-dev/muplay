<template>
    <div class="flex items-start gap-14 ">
        <img class="thumbnail w-[260px] rounded-[20px] shadow-[0px_38px_67px_-29px_#9b6cf166]" :src="trendImage" />
        <div class="flex flex-col gap-7">
            <span class="bg-secondary text-base py-2 px-6 rounded-[30px] tracking-wider w-max">Playlist</span>
            <h1 class="uppercase font-extrabold text-[48px]">Most trending in Indonesia</h1>
            <p class="text-secondary leading-tight text-2xl">
                Boost your mood with Indonesia's trendiest playlist! Immerse yourself in the perfect blend of traditional
                and modern beats that are sweeping the nation.
            </p>
            <button class="bg-main neon-shadow py-4 px-12 text-2xl font-medium rounded-[60px] w-max ">Play</button>
        </div>
        <!-- <img :src="neonLight" class="absolute top-0 right-2/4"/> -->
    </div>
</template>
<script>
import trendImage from '@/assets/thumbs/trending.png'
import neonLight from '@/assets/neon-light.svg'

export default {
    name: "TrendingPlaylist",
    data() {
        return {
            trendImage, neonLight
        }
    }
}
</script>