<template>
    <div class="flex gap-4 xl:gap-10 items-center justify-center">
        <img id="track-thumbnail" :alt="alt" class="w-[30px] md:w-[80px]" :src="image" />
        <div class="overflow-hidden">
            <span id="track-title" class="w-max block text-[13px,3vw,20px] font-bold text-main">
                {{ title }}
            </span>
            <span id="track-artist" class="w-max block text-[11px,3vw,18px] text-secondary">
                {{ artist }}
            </span>
        </div>
        <img :src="isFavorite ? favFilled : favOutline" alt="" :title="isFavorite ? 'Remove Favorite' : 'Set Favorite'"
            class="nonDraggableImage cursor-pointer" />
    </div>
</template>

<script>
import favFilled from '@/assets/icons/fav-filled.svg'
import favOutline from '@/assets/icons/fav-outline.svg'

export default {
    name: 'TrackInfo',
    data() {
        return {
            lastPlayed: this.$store.state.lastPlayed,
            favFilled,
            favOutline
        }
    },
    computed: {
        currentTrack() {
            return this.$store.state.currentTrack
        },
        image() {
            return this.currentTrack.album.images[0].url
        }, 
        title() {
            return this.currentTrack.name
        },
        artist() {
            return this.currentTrack.artists[0].name
        },
        alt() {
            return this.title + " - " + this.artist
        },
        isFavorite() {
            return false
        }
    },

}
</script>