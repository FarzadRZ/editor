import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  mutations: {
    SET_CONTENT(state, payload) {
      Vue.set(state, 'content', payload)
    },

    SET_TEMPLATES(state, payload) {
      Vue.set(state, 'templates', payload)
    },

    SELECTED_TEMPLATE(state, payload) {
      Vue.set(state, 'selectedTemplate', payload)
    },

    SET_MINIMIZATION(state, payload) {
      Vue.set(state, 'minimization', payload)
    }
  },

  actions: {
    runEditor({commit}, payload) {
      commit('SET_CONTENT', payload)
    },

    getTemplates({commit}) {
      let templates = localStorage.getItem('templates')
      commit('SET_TEMPLATES', JSON.parse(templates))
    },

    selectedTemplate({commit}, payload) {
      commit('SELECTED_TEMPLATE', payload)
    },

    minimize({commit}, payload) {
      commit('SET_MINIMIZATION', payload)
    }
  }
})
