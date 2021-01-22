<template lang="pug">
  .page.article
    h1(v-html="data.pageMeta && data.pageMeta.h1 ? data.pageMeta.h1 : data.title")
    .text(v-html="data.subtitle")
    .date {{ formatDate(data.publishedAt) }}
    vImage(:data="data.image")
    .text(v-if="data.description" v-html="generateDomFromJson(data.description)")
    .text(v-if="data.content" v-html="generateDomFromJson(data.content)")
</template>

<script>
import { generateDomFromJson } from '@/plugins/wysiwyg'
import formatDate from '@/plugins/format-date'
import mixinPage from '@/mixins/page'
import vImage from '@/components/image'

export default {
  name: 'page-article',
  mixins: [mixinPage],
  components: {
    vImage
  },
  data () {
    return {
      generateDomFromJson,
      formatDate
    }
  },
  asyncData ({ store, route, error }) {
    return store.dispatch('api/getArticle', {
      data: route.params.item,
      with: ['image']
    }).then(res => {
      return {
        data: res.article
      }
    }).catch(err => {
      console.warn(err)
      error({
        statusCode: err.status,
        message: err.message
      })
      return {}
    })
  }
}
</script>

<style lang="scss" scoped>
  .page.article {
    //
  }
</style>
