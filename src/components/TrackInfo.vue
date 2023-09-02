<template>
    <div class="flex gap-10 items-center justify-center">
        <img id="track-thumbnail" :alt="alt" class="w-[80]" :src="thumbUrl" />
        <div class="">
            <span id="track-title" class="block text-xl font-bold text-main">
                {{ title }}
            </span>
            <span id="track-artist" class="block text-lg text-secondary">
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