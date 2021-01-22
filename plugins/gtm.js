import Vue from 'vue'
import VueGtm from 'vue-gtm'

if (process.env.NUXT_ENV_GTM_ID) {
  Vue.use(VueGtm, {
    id: process.env.NUXT_ENV_GTM_ID,
    enabled: true,
    debug: true,
    loadScript: true
  })
}
