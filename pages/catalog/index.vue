<template lang="pug">
  .page.catalog
    h1(v-html="data ? data.title : 'Catalog'")
    .text(v-if="data.subtitle" v-html="data.subtitle")
    .categories-list
      .item(v-for="cat in categories" :key="cat.id")
        nuxt-link(:to="`/catalog/${cat.alias}`" v-html="cat.title")
</template>

<script>
import mixinPage from '@/mixins/page'
export default {
  name: 'page-catalog',
  mixins: [mixinPage],
  data () {
    return {
      categories: []
    }
  },
  async asyncData ({ store }) {
    // get article
    const { article } = await store.dispatch('api/getArticle', {
      data: 'catalog'
    }).catch(() => ({}))

    // get categories
    const { categories } = await store.dispatch('api/getCommerceCategories', {
      filters: {
        active: true,
        parent: null
      },
      order: {
        weight: 'asc'
      }
    }).catch(() => ({}))

    return {
      categories,
      data: article || {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.catalog {
    //
  }
</style>
