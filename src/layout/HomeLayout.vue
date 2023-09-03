<template>
    <div id="app" class="relative flex flex-col overflow-hidden h-screen">
        <div class="flex gap-[clamp(60px,4vw,130px)] basis-auto grow-0 shrink-0 h-screen pb-[100px]">
            <SidebarLeft />
            <router-view />
        </div>
        <TrackPlayer />
    </div>
</template>

<script>
import SidebarLeft from '@/components/SidebarLeft.vue'
import TrackPlayer from '@/components/TrackPlayer.vue'

export default {
    name: "HomeLayout",
    components: {
        SidebarLeft, TrackPlayer
    }
}
</script>
