import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastPlayed: {
      thumb: "https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210",
      title: "Back to Her Men",
      artist: "Demien Rice",
      isFavorite: false,
    },
    isLoggedIn: false
  },
  mutations: {
    lastPlayedUpdated(state, newSong) {
      state.lastPlayed = newSong
    }, 
    hasLogin(state) {
      state.isLoggedIn = true
    }
  },
  actions: {
    setLoggedIn({ commit }) {
      commit('hasLogin')
    },
    setLastPlayed({ commit }, newSong) {
      commit("lastPlayedUpdated", newSong)
    }
  }
})
