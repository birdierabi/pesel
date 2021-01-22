import { generateOptions } from './helpers'

/**
 * Options example object
 */
// const exampleOptions = {
//   data: {
//     id: 1
//   },
//   with: ['image'],
//   filters: {
//     limit: 10
//   }
// }

export default {
  /**
   * GET Commerce Category
   * @method GET
   * @param payload {object}
   */
  getCommerceCategory (payload) {
    return this.do('GET', `/commerce/categories/alias/${payload.data}${generateOptions(payload)}`)
  },
  /**
   * GET Commerce Categories
   * @method GET
   * @param payload {object}
   */
  getCommerceCategories (payload) {
    return this.do('GET', `/commerce/categories${generateOptions(payload)}`)
  },

  /**
   * GET Products
   * @method GET
   * @param payload {object}
   */
  getProducts (payload) {
    return this.do('GET', `/commerce/products${generateOptions(payload)}`)
  },

  /**
   * GET Product
   * @method GET
   * @param payload {object}
   */
  getProduct (payload) {
    return this.do('GET', `/commerce/products/alias/${payload.data}${generateOptions(payload)}`)
  },

  /**
   * GET Content Category
   * @method GET
   * @param payload {object}
   */
  getContentCategory (payload) {
    return this.do('GET', `/content/categories/alias/${payload.data}${generateOptions(payload)}`)
  },

  /**
   * GET Content Articles
   * @method GET
   * @param payload {object}
   */
  getArticles (payload) {
    return this.do('GET', `/content/articles${generateOptions(payload)}`)
  },

  /**
   * GET Content Article
   * @method GET
   * @param payload {object}
   */
  getArticle (payload) {
    return this.do('GET', `/content/articles/alias/${payload.data}${generateOptions(payload)}`)
  },

  /**
   * POST Form
   * @method POST
   * @param payload {object}
   */
  sendForm (payload) {
    return this.do('POST', '/company/feedback', payload)
  },

  /**
   * GET Feedback Types
   * @method GET
   * @param payload {object}
   */
  getFeedbackTypes (payload) {
    return this.do('GET', `/company/feedback/types${generateOptions(payload)}`)
  },

  /**
   * POST File
   * @method POST
   * @param payload {object}
   */
  uploadFile (payload) {
    return this.do('POST', '/media/files', payload)
  },

  /**
   * GET Addresses
   * @method GET
   * @param payload {object}
   */
  getAddresses (payload) {
    return this.do('GET', `/company/addresses${generateOptions(payload)}`)
  },

  /**
   * GET Variable
   * @method GET
   * @param payload {object}
   */
  getVariable (payload) {
    return this.do('GET', `/core/variables/key/${payload.key}${generateOptions(payload)}`)
  }

}
