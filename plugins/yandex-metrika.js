import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(VueYandexMetrika, {
  id: 'XXXXXXXX',
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
  },
  env: process.env.NUXT_ENV_ENV === 'prod' ? 'production' : process.env.NUXT_ENV_ENV
})
