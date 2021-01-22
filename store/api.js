import API from '@/api'

export const actions = {
  getCommerceCategory (context, payload) {
    return API.getCommerceCategory(payload)
  },
  getCommerceCategories (context, payload) {
    return API.getCommerceCategories(payload)
  },
  getProducts (context, payload) {
    return API.getProducts(payload)
  },
  getProduct (context, payload) {
    return API.getProduct(payload)
  },
  getContentCategory (context, payload) {
    return API.getContentCategory(payload)
  },
  getArticles (context, payload) {
    return API.getArticles(payload)
  },
  getArticle (context, payload) {
    return API.getArticle(payload)
  },
  sendForm (context, payload) {
    return API.sendForm(payload)
  },
  getFeedbackTypes (context, payload) {
    return API.getFeedbackTypes(payload)
  },
  uploadFile (context, payload) {
    return API.uploadFile(payload)
  },
  getAddresses (context, payload) {
    return API.getAddresses(payload)
  },
  getVariable (context, payload) {
    return API.getVariable(payload)
  }
}

export default {
  actions
}
