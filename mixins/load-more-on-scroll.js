import vLoader from '@/components/loader'

const limit = 10

export default {
  components: {
    vLoader
  },
  data () {
    return {
      isArticlesPage: true,
      articles: [],
      hasMore: true,
      isLoading: false,
      offset: limit
    }
  },
  methods: {
    async getMoreProducts () {
      this.isLoading = true
      const products = await this.$store.dispatch('api/getProducts', {
        filters: {
          category: this.data.id,
          limit,
          offset: this.offset,
          active: true
        },
        order: {
          weight: 'asc'
        }
      }).then(res => { return res.products }).catch(err => {
        console.warn(err)
        return {}
      })
      this.offset += limit
      if (products.length < limit) {
        this.hasMore = false
      }
      this.products = [...this.products, ...products]
      this.isLoading = false
    },
    async getMoreArticles () {
      this.isLoading = true
      const articles = await this.$store.dispatch('api/getArticles', {
        filters: {
          category: this.data.id,
          limit,
          offset: this.offset,
          active: true
        },
        order: {
          publishedAt: 'desc',
          title: 'asc'
        }
      }).then(res => { return res.articles }).catch(err => {
        console.warn(err)
        return {}
      })
      this.offset += limit
      if (articles.length < limit) {
        this.hasMore = false
      }
      this.articles = [...this.articles, ...articles]
      this.isLoading = false
    },
    handleOnScroll () {
      // доскроллили до низа страницы c запасом в 100px
      // и еще есть что запрашивать
      const scrollHeight = document.body.scrollHeight
      const totalHeight = document.documentElement.scrollTop + window.innerHeight + 100 + document.getElementById('footer').offsetHeight
      if (this.hasMore && totalHeight >= scrollHeight) {
        if (!this.isLoading) {
          this.isArticlesPage ? this.getMoreArticles() : this.getMoreProducts()
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleOnScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleOnScroll)
  }
}
