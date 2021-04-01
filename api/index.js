import axios from 'axios'

const baseURL = process.env.NUXT_ENV_API_URL

const headers = {}

const API = axios.create({
  baseURL,
  headers: {
    ...headers
  }
})

export default API
