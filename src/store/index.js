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
    }
  },
  mutations: {
    lastPlayedUpdated(state, newSong) {
      state.lastPlayed = newSong
    }
  },
  actions: {
    setLastPlayed({ commit }, newSong) {
      commit("lastPlayedUpdated", newSong)
    }
  },
  modules: {
  }
})
