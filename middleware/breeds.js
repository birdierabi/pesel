export default async function ({ store }) {
  if (!Object.keys(store.state.allBreeds).length) {
    await store.dispatch('api/getBreeds').then(({ data }) => {
      store.commit('SET_BREEDS', data.message)
    }).catch(() => ({}))
  }
}
