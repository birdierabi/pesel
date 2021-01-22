export default async function ({ store }) {
  if (!Object.keys(store.state.defaultContact).length) {
    await store.dispatch('api/getAddresses', {
      filters: {
        slug: 'default'
      }
    }).then(res => {
      store.commit('SET_DEFAULT_CONTACT', res.addresses && res.addresses.length ? res.addresses[0] : {})
    }).catch(() => ({}))
  }
}
