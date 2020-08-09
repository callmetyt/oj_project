import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const qfilter = {
  namespaced: true,
  state: {
    words: []
  },
  mutations: {
    add(state, word) {
      if (state.words.indexOf(word) === -1) {
        state.words.push(word)
      }
    },
    del(state, word) {
      let num = state.words.indexOf(word)
      if (num !== -1) {
        state.words.splice(num, 1)
      }
    }
  },
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    qfilter: qfilter
  },
})