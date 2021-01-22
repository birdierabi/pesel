<template lang="pug">
  .slider-component
    client-only
      Swiper(ref="mySwiper")
        SwiperSlide(v-for="item in data.galleryFiles" :key="item.id")
          vImage(:data="item")
        //.swiper-pagination(slot="pagination")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

export default {
  name: 'slider-component',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    console.log('Swiper', Swiper, this.data)
  }
}
</script>

<style lang="scss" scoped>
.slider-component {
  .swiper-slide {
    height: 400px;
    .image-component {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 50px;
  }
}
</style>

<style lang="scss">
.slider-component {
  .swiper-pagination-bullet {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: transparent!important;
    border: 2px solid $color-primary;
    opacity: 1;
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform-origin: 50% 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 50%;
      background-color: $color-primary;
      opacity: 0;
      transition: opacity .3s ease;
    }
    &-active::before {
      opacity: 1;
    }
  }
}
</style>
