import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastPlayed: {
      thumb: "https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210",
      title: "Back to Her Men",
      artist: "Demien Rice",
      isFavorite: false,
    },
    isLoggedIn: false,
    code: '',
    accesToken: '',
    refreshToken: '',
    expiresInToken: '',
    recentlyPlayed: [],
    recommendation: [],
    trendingIndonesia: [],
    developerChoice: '',
    playlistByArtist: [],
    player: {},
    currentTrack: {},
  },
  mutations: {
    lastPlayedUpdated(state, newSong) {
      state.lastPlayed = newSong
    },
    hasLogin(state) {
      state.isLoggedIn = true
    },
    codeAdded(state, code) {
      state.code = code
    },
    accesTokenUpdated(state, accesToken) {
      state.accesToken = accesToken
    },
    refreshTokenUpdated(state, refreshToken) {
      state.refreshToken = refreshToken
    },
    expiresInTokenUpdated(state, expiresInToken) {
      state.expiresInToken = expiresInToken
    },
    recommendationListAdded(state, tracks) {
      state.recommendation = tracks
    },
    trendingIndonesiaAdded(state, detail) {
      state.trendingIndonesia = detail
    },
    developerChoiceAdded(state, tracks) {
      state.developerChoice = ''
      state.developerChoice = tracks
    },
    artistAdded(state, artist) {
      state.playlistByArtist = artist
    },
    currentTrackUpdated(state, track) {
      state.currentTrack = track
    }
  },
  actions: {
    setLoggedIn({ commit }) {
      commit('hasLogin')
    },
    setLastPlayed({ commit }, newSong) {
      commit("lastPlayedUpdated", newSong)
    },
    setCode({ commit }, code) {
      commit('codeAdded', code)
    },
    updateAccesToken({ commit }, accesToken) {
      commit('accesTokenUpdated', accesToken)
    },
    updateRefreshToken({ commit }, refreshToken) {
      commit('refreshTokenUpdated', refreshToken)
    },
    updateExpiresInToken({ commit }, expiresInToken) {
      commit('expiresInTokenUpdated', expiresInToken)
    },
    updateRecommendationList({ commit }, tracks) {
      commit('recommendationListAdded', tracks)
    },
    updateTrendingIndonesia({ commit }, detail) {
      commit('trendingIndonesiaAdded', detail)
    },
    updateDeveloperChoice({ commit }, tracks) {
      commit('developerChoiceAdded', tracks)
    },
    addNewArtist({ commit }, artist) {
      commit('artistAdded', artist)
    },
    updateCurrentTrack({ commit }, track) {
      commit('currentTrackUpdated', track)
    }
  },
  plugins: [createPersistedState()]
})
