<template>
    <div class="sticky bottom-0 flex justify-between items-center grow-0 h-max max-h-[130px] shrink-0 basis-[max-content] w-full py-4 px-[clamp(36px,5vw,56px)] bg-[var(--body-bg)] " >
        <TrackInfo />
        <TrackControler />
        <TrackRightControl class="hidden md:flex"/>
        <img :src="neonLight" alt="" class="absolute left-0 -z-10 rotate-90" />
    </div>
</template>
<script>
import TrackInfo from "@/components/TrackInfo.vue"
import TrackControler from "@/components/TrackControler.vue"
import TrackRightControl from "@/components/TrackRightControl.vue"
import neonLight from '@/assets/neon-light.svg'

export default {
    name: 'TrackPlayer',
    data() {
        return {
            neonLight
        }
    },
    components: {
        TrackInfo,
        TrackControler,
        TrackRightControl
    }
}
</script>