import axios from 'axios'

const baseURL = 'https://dog.ceo/api'

const headers = {}

const API = axios.create({
  baseURL,
  headers: {
    ...headers
  }
})

export default API
