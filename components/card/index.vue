<template lang="pug">
  nuxt-link(to="/breed").card-component.flex.j-between
    img(:src="image")
    iconHeart(tabindex="0").visible
    iconFullHeart(tabindex="0")
    span.flex.j-end Spaniel
</template>

<script>
import iconHeart from '@/components/icons/heart'
import iconFullHeart from '@/components/icons/heart-full'

export default {
  name: 'card-component',
  components: {
    iconHeart,
    iconFullHeart
  },
  props: {
    image: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-component {
    position: relative;
    flex-direction: column;
    height: inherit;

    background: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    border-radius: 8px;

    img {
      object-fit: cover;
      height: inherit;
      border-radius: 8px;
    }

    svg {
      position: absolute;
      top: 25px;
      left: 25px;
      display: none;

      width: 29px;
      height: auto;

      color: $color-white;

      cursor: pointer;

      @include hovers {
        &:hover {
          opacity: 0.7;
        }
      }
    }

    span {
      position: absolute;
      bottom: 25px;
      right: 25px;

      font-family: $font-family-default;
      font-weight: $font-weight-semi-bold;
      font-size: 25px;
      line-height: $line-height-default;
      letter-spacing: $letter-spacing-default;
    }

    .visible {
      display: flex;
    }
  }
</style>
