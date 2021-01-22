<template lang="pug">
  .image-component(v-if="data && data.path && data.name")
    picture(v-if="data.preview")
      template(v-for="size in sizes")
        source(
          v-if="data.preview.compressed && data.preview.compressed.previews && data.preview.compressed.previews[size.imageSize]"
          :srcset="`${imagePath}${data.preview.compressed.previews[size.imageSize]}`" :media="`(${getMediaDirection(size)}: ${size.windowSize}px)`" type="image/webp")
        source(
          v-if="data.preview.origin && data.preview.origin.previews && data.preview.origin.previews[size.imageSize]"
          :srcset="`${imagePath}${data.preview.origin.previews[size.imageSize]}`" :media="`(${getMediaDirection(size)}: ${size.windowSize}px)`" :type="data.mime")

      img(
        v-if="data.preview.origin && data.preview.origin.previews && data.preview.origin.previews[getLastSize()]"
        :src="`${imagePath}${data.preview.origin.previews[getLastSize()]}`")
    img(v-else :src="`${imagePath}${data.name}`")
</template>

<script>
export default {
  name: 'image-component',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    sizes: {
      type: Array,
      default: () => ([
        {
          // направление для css-медиа. true - min-width, false - max-width
          upward: true,
          // размер окна в пикселях для css-медиа
          windowSize: '1200',
          // размер изображения. Из апи
          imageSize: '1800'
        },
        {
          upward: true,
          windowSize: '800',
          imageSize: '1200'
        },
        {
          upward: true,
          windowSize: '401',
          imageSize: '600'
        },
        {
          upward: false,
          windowSize: '400',
          imageSize: '500'
        }
      ])
    }
  },
  computed: {
    imagePath () {
      return `${process.env.NUXT_ENV_API_URL}${this.data.path}`
    }
  },
  methods: {
    getLastSize () {
      return [...this.sizes].pop().imageSize
    },
    getMediaDirection (item) {
      return item.upward ? 'min-width' : 'max-width'
    }
  }
}
</script>

<style lang="scss" scoped>
.image-component {
  position: relative;
  picture {
    height: 100%;
    width: 100%;
  }
}
</style>
