<template lang="pug">
  .page.articles
    h1(v-html="data ? data.title : 'Articles'")
    .text(v-if="data.subtitle" v-html="data.subtitle")
    vArticle(v-for="item in articles" :key="item.id" :data="item" path="articles")
    vLoader(v-if="isLoading")
</template>

<script>
import mixinPage from '@/mixins/page'
import mixinLoadMore from '@/mixins/load-more-on-scroll'
import vArticle from '@/components/article'

const limit = 10

export default {
  name: 'page-articles',
  mixins: [mixinPage, mixinLoadMore],
  components: {
    vArticle
  },
  async asyncData ({ store }) {
    // get category
    const { category } = await store.dispatch('api/getContentCategory', {
      data: 'articles'
    }).catch(() => ({}))
    // get articles
    let articles = []
    if (category) {
      articles = await store.dispatch('api/getArticles', {
        filters: {
          category: category.id,
          limit,
          offset: 0,
          active: true
        },
        order: {
          publishedAt: 'desc',
          title: 'asc'
        }
      }).then(res => { return res.articles }).catch(() => ({}))
    }
    return {
      data: category || {},
      articles,
      hasMore: articles.length >= limit
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.articles {
    //
  }
</style>
