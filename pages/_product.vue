<template lang="pug">
  .page.product
    h1(v-html="data.pageMeta && data.pageMeta.h1 ? data.pageMeta.h1 : data.title")
    .text(v-html="data.subtitle")
    .price {{ formatNumber(data.price) }} рублей
    vImage(:data="data.image")
    .text(v-if="data.description" v-html="generateDomFromJson(data.description)")
    .text(v-if="data.content" v-html="generateDomFromJson(data.content)")
</template>

<script>
import { generateDomFromJson } from '@/plugins/wysiwyg'
import formatNumber from '@/plugins/format-number'
import mixinPage from '@/mixins/page'
import vImage from '@/components/image'

export default {
  name: 'page-product',
  mixins: [mixinPage],
  components: {
    vImage
  },
  data () {
    return {
      generateDomFromJson,
      formatNumber
    }
  },
  asyncData ({ store, route, error }) {
    return store.dispatch('api/getProduct', {
      data: route.params.product,
      with: ['image']
    }).then(res => {
      return {
        data: res.product
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
  .page.product {
    //
  }
</style>
