<template>
    <div class="flex gap-5">
        <img :src="trackListIcon" alt="" title="View all track" />
        <img :src="volumeIcon" alt="" title="Adjust Volume" @click="toggleVolumeAdjustment"/>
        <VolumeAdjust :class="isVolumeAdjust ? 'absolute top-[-50%] right-[-10px] -rotate-90' : 'hidden'"  />
    </div>
</template>

<script>
import trackListIcon from "@/assets/icons/playlist.svg"
import volumeIcon from '@/assets/icons/volume.svg'
import VolumeAdjust from "./VolumeAdjust.vue"

export default {
    name: "TrackRightControl",
    data() {
        return {
            trackListIcon,
            volumeIcon, 
            isVolumeAdjust: false
        }
    }, 
    methods: {
        toggleVolumeAdjustment() {
            this.isVolumeAdjust = !this.isVolumeAdjust
        }
    }, 
    components: {
        VolumeAdjust
    }

}
</script>