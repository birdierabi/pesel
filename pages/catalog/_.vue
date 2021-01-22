<template lang="pug">
  .page.catalog-category
    h1(v-html="data.pageMeta && data.pageMeta.h1 ? data.pageMeta.h1 : data ? data.title : 'Catalog'")
    .text(v-if="data.subtitle" v-html="data.subtitle")
    .text(v-if="data.description" v-html="generateDomFromJson(data.description)")
    .text(v-if="data.content" v-html="generateDomFromJson(data.content)")
    .categories-list
      .item(v-for="cat in categories" :key="cat.id")
        nuxt-link(:to="`${subCatPath}/${cat.alias}`" v-html="cat.title")
    .products-list.flex.wrap.j-between
      vProduct(v-for="item in products" :key="item.id" :data="item")
</template>

<script>
import { generateDomFromJson } from '@/plugins/wysiwyg'
import mixinPage from '@/mixins/page'
import mixinLoadMore from '@/mixins/load-more-on-scroll'
import vProduct from '@/components/product'

const limit = 10

export default {
  name: 'page-catalog-category',
  mixins: [mixinPage, mixinLoadMore],
  components: {
    vProduct
  },
  data () {
    return {
      generateDomFromJson,
      isArticlesPage: false,
      categories: [],
      products: []
    }
  },
  computed: {
    subCatPath () {
      return this.$route.path
    }
  },
  async asyncData ({ route, store, error }) {
    // get category
    const path = route.params.pathMatch.split('/')
    const { category } = await store.dispatch('api/getCommerceCategory', {
      data: path[path.length - 1]
    }).catch(err => {
      console.warn(err)
      error({ statusCode: 404, message: err.message })
      return {}
    })

    let categories = []
    let products = []
    if (!category) {
      return {}
    } else {
      // get subcategories
      categories = await store.dispatch('api/getCommerceCategories', {
        filters: {
          parent: category.id,
          active: true
        },
        order: {
          weight: 'asc'
        }
      }).then(res => { return res.categories }).catch(() => ({}))
      // get products
      products = await store.dispatch('api/getProducts', {
        with: ['image'],
        filters: {
          category: category.id,
          active: true,
          limit,
          offset: 0
        },
        order: {
          weight: 'asc'
        }
      }).then(res => { return res.products }).catch(() => ({}))
    }

    return {
      data: category || {},
      categories,
      products,
      hasMore: products.length >= limit
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.catalog-category {
    .products-list {
      position: relative;
      &:after {
        content: '';
        flex: 0 0 calc(30%);
      }
    }
    .product-component {
      width: 30%;
    }
  }
</style>
