<template lang="pug">
  .page.policy
    h1(v-html="data && data.pageMeta && data.pageMeta.h1 ? data.pageMeta.h1 : data ? data.title : 'Политика обработки данных'")
    .text(v-html="data ? data.subtitle : ''")
    .text(v-if="data.description" v-html="generateDomFromJson(data.description)")
    .text(v-if="data.content" v-html="generateDomFromJson(data.content)")
</template>

<script>
import { generateDomFromJson } from '@/plugins/wysiwyg'
import mixinPage from '@/mixins/page'

export default {
  name: 'page-policy',
  mixins: [mixinPage],
  data () {
    return {
      generateDomFromJson
    }
  },
  asyncData ({ store }) {
    return store.dispatch('api/getArticle', {
      data: 'policy'
    }).then(res => {
      return {
        data: res.article
      }
    }).catch(() => ({}))
  }
}
</script>

<style lang="scss" scoped>
  .page.policy {
    //
  }
</style>
