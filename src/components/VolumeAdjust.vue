<template>
    <div class="py-4 px-3 bg-secondary rounded-lg flex items-center justify-center">
        <input type="range" min="0" max="100" v-model="volume" />
    </div>
</template>
<script>
export default {
    name: 'VolumeAdjust',
    data() {
        return {
            volume: this.$store.state.volume, 
        }
    }, 
    computed: {
        player() {
            return this.$store.state.player
        }
    },
    watch: {
        volume(newVolume) {
            this.player.setVolume(newVolume / 100).then(() => {
                this.$store.dispatch('adjustVolume', newVolume)
            })
        }
    }
}
</script>