<template>
    <div class="overflow-hidden overflow-y-auto relative">
        <div class="w-full sticky top-0 py-4 px-[clamp(36px,5vw,56px)] bg-[var(--body-bg)]">
            <SidebarNavButton class="sm:hidden bg-secondary text-[clamp(16px,3vw,20px)]"
                :iconSrc="icons.search" title="Search" text="Search a song" href="/search" />
        </div>
        <div class="py-8 px-[clamp(36px,5vw,56px)] flex flex-col gap-16">
            <PlayListGroup groupTitle="Recently Played" class="sm:hidden" />
            <TrendingPlaylist />
            <PlayListGroup groupTitle="Recommended" direction="vertical" class="sm:hidden px-0" :tracks="recommendationTracks"/>
            <PlayListGroup groupTitle="Recommended" :tracks="recommendationTracks"/>
            <PlayListGroup groupTitle="Ngaji Gus Baha" :tracks="ngajiGusBaha"/>
        </div>
    </div>
</template>

<script>
import PlayListGroup from '@/components/PlayListGroup.vue'
import TrendingPlaylist from '@/components/TrendingPlaylist.vue'
import SidebarNavButton from '@/components/SidebarNavButton.vue'
import search from '@/assets/icons/search.svg'

export default {
    props: ['code'],
    components: {
        TrendingPlaylist,
        PlayListGroup,
        SidebarNavButton
    },
    data() {
        return {
            icons: {
                search
            }, 
            recommendationTracks: this.$store.state.recommendation, 
            ngajiGusBaha: this.$store.state.playlistByArtist
        };
    },
}
</script>