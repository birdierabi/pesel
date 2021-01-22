<template lang="pug">
  .page.catalog
    h1(v-html="data ? data.title : 'Catalog'")
    .text(v-if="data.subtitle" v-html="data.subtitle")
    .products-list.flex.wrap.j-between
      vProduct(v-for="item in products" :key="item.id" :data="item")
    vLoader(v-if="isLoading")
</template>

<script>
import mixinPage from '@/mixins/page'
import mixinLoadMore from '@/mixins/load-more-on-scroll'
import vProduct from '@/components/product'

const limit = 10

export default {
  name: 'page-catalog',
  mixins: [mixinPage, mixinLoadMore],
  components: {
    vProduct
  },
  data () {
    return {
      isArticlesPage: false,
      products: []
    }
  },
  async asyncData ({ store }) {
    // get category
    const { category } = await store.dispatch('api/getCommerceCategory', {
      data: 'catalog'
    }).catch(() => ({}))

    // get products
    let products = []
    if (category) {
      products = await store.dispatch('api/getProducts', {
        filters: {
          active: true,
          parent: category.id,
          offset: 0,
          limit
        },
        with: ['image'],
        order: {
          weight: 'asc'
        }
      }).then(res => { return res.products }).catch(() => ({}))
    }

    return {
      products,
      data: category || {}
    }
  }
}
</script>

<style lang="scss" scoped>
.page.catalog {
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
