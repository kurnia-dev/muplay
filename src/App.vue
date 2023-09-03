<template>
  <router-view />
</template>
<script>
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: "9a18f40f9c7a4e659e079864b76f5838"
})

export default {
  beforeCreate() {
    if (!this.$store.state.code) {
      console.log("true");
      const code = new URLSearchParams(window.location.search).get('code')
      if (code) {
        this.$store.dispatch('setLoggedIn')
        this.$store.dispatch('setCode', code)
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  },
  methods: {
    authenticate(code) {
      // console.log(code); // success
      axios.post('http://localhost:8081/login', {
        code
      }).then(res => {
        console.log(res.data);
        this.$store.dispatch('updateAccesToken', res.data.accesToken)
        this.$store.dispatch('updateRefreshToken', res.data.refreshToken)
        this.$store.dispatch('updateExpiresInToken', res.data.expiresIn)
        window.history.pushState({}, null, '/')
      }).catch(() => {
        // this.$store.dispatch('setCode', '')
        // window.location = '/login'
      })
    },
    refreshAccesToken() {
      console.log("refreshToken");
      setInterval(() => {
        const refreshToken = this.$store.state.refreshToken
        axios.post('http://localhost:8081/refresh', {
          refreshToken
        }).then(res => {
          spotifyApi.setAccessToken(res.data.accesToken)
          this.$store.dispatch('updateAccesToken', res.data.accesToken)
        }).catch(err => {
          console.log(err);
          throw (err)
        })
      }, 1000)
    },

    setNewAccessToken(accesToken) {
      console.log('new token set');
      if (accesToken) spotifyApi.setAccessToken(accesToken)
    },

    loadRecentlyPlayed() {
      spotifyApi.setAccessToken(this.$store.state.accesToken)
      spotifyApi.getMyRecentlyPlayedTracks({
        limit: 10
      })
        .then(res => {
          console.log(res.data);
        })
    },
    loadRecommendation() {
      spotifyApi.setAccessToken(this.$store.state.accesToken)
      spotifyApi.getRecommendations({
        min_energy: 0.4,
        seed_genres: "classical,country",
        min_popularity: 50,
        limit: 10,
      }).then(res => {
        console.log(res.body.tracks);
        this.$store.dispatch('updateRecommendationList', res.body.tracks)
      })
    },
    loadTrendingIndonesia() {
      spotifyApi.getPlaylist('37i9dQZF1DXa2EiKmMLhFD').then(res => {
        const details = {
          name: res.body.name,
          description: res.body.description,
          href: res.body.href,
          id: res.body.id,
          images: res.body.images[0].url,
          type: res.body.type,
          tracks: res.body.tracks.items
        }
        this.$store.dispatch('updateTrendingIndonesia', details)
      })
    },
    addToDeveloperChoice(id) {
      spotifyApi.getPlaylist(id).then(res => {
        const tracks = res.body.tracks.items.map(item => item.track)
        const popularTracks = tracks.filter(track => track.popularity >= 20)
        this.$store.dispatch('updateDeveloperChoice', popularTracks)
      })
    },
    addToPlaylistByArtist(id) {
      spotifyApi.getArtistTopTracks(id, 'ID').then(res => {
        const tracks = res.body.tracks
        this.$store.dispatch('addNewArtist', tracks)
      })
    },
    play() {
      spotifyApi.play()
    }
  },

  created() {
    const code = this.$store.state.code
    const refreshToken = this.$store.state.refreshToken

    if (code) {
      if (refreshToken) {
        this.refreshAccesToken()
      } else {
        this.authenticate(code)
      }
    }
  },

  mounted() {
    this.loadRecommendation()
    this.loadTrendingIndonesia()
    this.addToDeveloperChoice('0nwz7qFOG52c3EHkSynigJ')
    this.addToPlaylistByArtist('61AtfSRoC4K8iyxUmoyz4N')
  }
}

</script>
