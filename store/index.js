import api from './api'

export const modules = {
  api
}

export const state = () => ({
  modals: [],
  defaultContact: {},
  mapApiKey: null
})

export const actions = {
  openModal ({ commit }, id) {
    commit('MODAL_ADD', id)
  },
  closeModal ({ commit }, id) {
    commit('MODAL_REMOVE', id)
  },
  closeAllModals ({ commit }) {
    commit('MODAL_CLEAR')
  },
  setDefaultContact ({ commit }, value) {
    commit('SET_DEFAULT_CONTACT', value)
  },
  setMapApiKey ({ commit }, value) {
    commit('SET_MAP_API_KEY', value)
  }
}

export const mutations = {
  MODAL_ADD (state, id) {
    state.modals.push(id)
  },
  MODAL_REMOVE (state, id) {
    state.modals = state.modals.filter(i => i !== id)
  },
  MODAL_CLEAR (state) {
    state.modals = []
  },
  SET_DEFAULT_CONTACT (state, value) {
    state.defaultContact = value
  },
  SET_MAP_API_KEY (state, value) {
    state.mapApiKey = value
  }
}

export const getters = {
  //
}

export default {
  state,
  actions,
  mutations,
  getters
}
