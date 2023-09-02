<template>
    <div>
        <div ref="progress" class="flex gap-8 items-center">
            <span>{{ playPostion }}</span>
            <input class="w-[300px]" type="range" min="0" v-model="playPostion" value="0" :max="duration" />
            <span>{{ duration }}</span>
        </div>
        <div ref="controls" class="flex gap-11 items-center justify-center py-4 px-3">
            <audio :src="src"></audio>
            <img ref="shuffle" @click="play" alt="" :src="icons.shuffle" />
            <img ref="prev-song" @click="play" alt="" :src="icons.prevSong"/>
            <img ref="play-pause" @click="play" alt="" :src="icons.playPause" class="neon-shadow rounded-full bg-[#9B6CF1]"/>
            <img ref="next-song" @click="play" alt="" :src="icons.nextSong"/>
            <img ref="repeat" @click="play" alt="" :src="icons.repeat"/>
        </div>
    </div>
</template>
<script>
import shuffle from '@/assets/icons/shuffle.svg'
import prevSong from '@/assets/icons/prev-song.svg'
import nextSong from '@/assets/icons/next-song.svg'
import playPause from '@/assets/icons/play.svg'
import repeat from '@/assets/icons/repeat.svg'

export default {
    name: 'TrackControler',
    data() {
        return {
            src: "",
            duration: "3:29",
            playPostion: "0:00",
            icons: {
                shuffle,
                prevSong,
                nextSong,
                playPause,
                repeat
            }
        }
    }
}
</script>