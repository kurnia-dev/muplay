<template>
    <div>
        <div ref="progress" class="hidden md:flex gap-8 items-center">
            <span>{{ playPostion }}</span>
            <input class="w-[300px]" type="range" min="0" v-model="playPostion" value="0" :max="duration" />
            <span>{{ duration }}</span>
        </div>
        <div ref="controls" class="flex gap-11 items-center justify-center py-4 px-3">
            <audio :src="src"></audio>
            <img ref="shuffle" alt="" :src="icons.shuffle" class="hidden md:block" />
            <img ref="prev-song" alt="" :src="icons.prevSong" class="hidden md:block" />
            <img ref="play-pause" @click="togglePlay" alt="" :src="isPlaying ? icons.pause : icons.play"
                class="neon-shadow rounded-full bg-[#9B6CF1] w-8 xl:w-auto" />
            <img ref="next-song" alt="" :src="icons.nextSong" class="hidden md:block" />
            <img ref="repeat" alt="" :src="icons.repeat" class="hidden md:block" />
        </div>
    </div>
</template>
<script>
import shuffle from '@/assets/icons/shuffle.svg'
import prevSong from '@/assets/icons/prev-song.svg'
import nextSong from '@/assets/icons/next-song.svg'
import play from '@/assets/icons/play.svg'
import pause from '@/assets/icons/pause.svg'
import repeat from '@/assets/icons/repeat.svg'

import axios from 'axios'

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
                play, pause,
                repeat
            },
            player: null,
            isPlaying: false
        }
    },
    beforeCreate() {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);
        window.onSpotifyWebPlaybackSDKReady = () => {
            this.player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(this.$store.state.accesToken); },
                volume: 0.5
            });

            this.player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);

                axios.put(
                    'https://api.spotify.com/v1/me/player',
                    {
                        device_ids: [device_id],
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${this.$store.state.accesToken}`,
                            'Content-Type': 'application/json',
                        },
                    }
                ).then(response => {
                    console.log('Playback transferred successfully', response.data);
                    this.player.getCurrentState().then(state => {
                        if (state) {
                            const current_track = state.track_window.current_track;
                            console.log(current_track);
                            this.$store.dispatch('updateCurrentTrack', current_track)
                        }
                    }).catch(err => {
                        console.error(err)
                    })
                })
            });

            this.player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            this.player.addListener('player_state_changed', ({
                position,
                duration,
                track_window: { current_track }
            }) => {
                this.$store.dispatch('updateCurrentTrack', current_track)
                console.log('Currently Playing', current_track);
                console.log('Position in Song', position);
                console.log('Duration of Song', duration);
            });


            this.player.getVolume().then(volume => {
                const volume_percentage = volume * 100;
                this.$store.dispatch('adjustVolume', volume_percentage)

            });

            this.player.connect();
            this.$store.commit('playerCreated', this.player)
        }
    },
    methods: {
        togglePlay() {
            this.player.togglePlay()
            this.isPlaying = !this.isPlaying
        },
    }
}
</script>