<template lang="pug">
  .product-component.flex.column(v-if="data && data.alias")
    nuxt-link(:to="`/${data.alias}`")
      .title(v-html="data.title")
      .image
        vImage(:data="data.image")
    .price {{ formatNumber(data.price) }} рублей
</template>

<script>
import formatNumber from '@/plugins/format-number'
import vImage from '@/components/image'

export default {
  name: 'product-component',
  components: {
    vImage
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      formatNumber
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-component {
    .price {
      margin-top: auto;
    }
  }
</style>
