<template>
    <div id="app" class="relative flex flex-col overflow-hidden h-[100vh]">
        <div class="flex gap-[10%] basis-auto grow-0 shrink-0 h-[calc(100vh-130px)]">
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
    components: {
        SidebarLeft, TrackPlayer
    }
}
</script>
