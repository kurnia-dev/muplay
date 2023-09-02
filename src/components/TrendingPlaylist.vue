<template>
    <div class="flex flex-col sm:flex-row items-start gap-14">
        <img class="thumbnail w-full sm:w-[260px] rounded-[20px] shadow-[0px_38px_67px_-29px_#9b6cf166]" :src="trendImage" />
        <div class="flex flex-col gap-[clamp(1.2rem,3vw,1.7rem)]">
            <span class="bg-secondary text-base py-2 px-6 rounded-[30px] tracking-wider w-max">Playlist</span>
            <h1 class="uppercase font-extrabold text-[clamp(28px,3vw,48px)]">Most trending in Indonesia</h1>
            <p class="text-secondary leading-tight text-[clamp(16px,3vw,20px)]">
                Boost your mood with Indonesia's trendiest playlist! Immerse yourself in the perfect blend of traditional
                and modern beats that are sweeping the nation.
            </p>
            <button class="bg-main neon-shadow py-[clamp(8px,3vw,16px)] px-[clamp(36px,3vw,48px)] text-[clamp(16px,3vw,20px)] font-medium rounded-[60px] w-max ">Play</button>
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