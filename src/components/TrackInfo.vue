<template>
    <div class="flex gap-4 xl:gap-10 items-center justify-center">
        <img id="track-thumbnail" :alt="alt" class="w-[30px] md:w-[80px]" :src="thumbUrl" />
        <div class="">
            <span id="track-title" class="block text-[13px,3vw,20px] font-bold text-main">
                {{ title }}
            </span>
            <span id="track-artist" class="block text-[11px,3vw,18px] text-secondary">
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
        thumbUrl() {
            return this.lastPlayed.thumb
        },
        title() {
            return this.lastPlayed.title
        },
        artist() {
            return this.lastPlayed.artist
        },
        alt() {
            return this.title + " - " + this.artist
        },
        isFavorite() {
            return this.lastPlayed.isFavorite
        }
    }
}
</script>