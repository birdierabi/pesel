import axios from 'axios'
import methods from './methods'

const API_URL = process.env.NUXT_ENV_API_URL

export const API = {
  /**
   * General API wrapper
   * @param method {string}
   * @param url {string}
   * @param data {object}
   * @param headers {object}
   */
  do (method = 'GET', url = '', data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      const options = {
        method,
        url: `${API_URL}${url}`,
        headers: {
          'Cache-Control': 'no-cache',
          Locale: 'ru',
          ...headers
        },
        data
      }
      method === 'GET' ? options.params = data : options.data = data

      axios(options).then(res => {
        if (res.data.status === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }).catch(err => {
        reject(err.message)
      })
    })
  },

  ...methods
}

export default API
