import API from '@/api'

export const actions = {
  getBreeds () {
    return API({
      url: 'breeds/list/all'
    })
  }
}

export default {
  actions
}
