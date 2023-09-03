<template>
    <div class="flex wrap flex-col sm:flex-row items-start gap-14">
        <img class="thumbnail w-full sm:w-[clamp(200px,15vw,260px)] rounded-[20px] shadow-[0px_38px_67px_-29px_#9b6cf166]" :src="details.images" />
        <div class="flex flex-col gap-[clamp(1.2rem,3vw,1.7rem)]">
            <span class="bg-secondary text-base py-2 px-6 rounded-[30px] tracking-wider w-max capitalize">{{details.type}}</span>
            <h1 class="uppercase font-extrabold text-[clamp(28px,3vw,48px)]">{{details.name}}</h1>
            <p class="text-secondary leading-tight text-[clamp(16px,3vw,20px)]">
                {{details.description}}
            </p>
            <a :href="details.href" class="bg-main neon-shadow py-[clamp(8px,3vw,16px)] px-[clamp(36px,3vw,48px)] text-[clamp(16px,3vw,20px)] font-medium rounded-[60px] w-max ">Play</a>
        </div>
        <img :src="neonLight" class="absolute -top-[40%] right-0"/>
    </div>
</template>
<script>
import neonLight from '@/assets/neon-light.svg'

export default {
    name: "TrendingPlaylist",
    data() {
        return {
            neonLight, 
            details: this.$store.state.trendingIndonesia
        }
    }
}
</script>