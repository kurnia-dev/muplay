<template>
    <div class="flex gap-5">
        <img :src="trackListIcon" alt="" title="View all track" />
        <img :src="volumeIcon" alt="" title="Adjust Volume"/>
    </div>
</template>

<script>
import trackListIcon from "@/assets/icons/playlist.svg"
import volumeIcon from '@/assets/icons/volume.svg'

export default {
    name: "TrackRightControl",
    data() {
        return {
            trackListIcon,
            volumeIcon
        }
    }
}
</script>