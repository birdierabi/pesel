import api from './api'

export const modules = {
  api
}

export const state = () => ({
  allBreeds: []
})

export const actions = {
  //
}

export const mutations = {
  SET_BREEDS (state, value) {
    state.allBreeds = value
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
