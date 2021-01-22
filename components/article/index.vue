<template lang="pug">
  nuxt-link.article-component(:to="url")
    .date {{ formatDate(data.publishedAt) }}
    .title(v-html="data.title")
    .subtitle(v-html="data.subtitle")
</template>

<script>
import formatDate from '@/plugins/format-date'

export default {
  name: 'article-component',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    path: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      formatDate
    }
  },
  computed: {
    url () {
      return this.path
        ? `/${this.path}/${this.data.alias}`
        : `/${this.data.alias}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .article-component {
    //
  }
</style>
