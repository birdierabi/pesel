<template lang="pug">
  nuxt-link(:to="`/${getBreedLink}`").card-component.flex.j-between
    img(:src="image")
    iconHeart(tabindex="0").visible
    iconFullHeart(tabindex="0")
    span.flex.j-end {{ getDogBreed }}
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
  },
  computed: {
    getDogBreed () {
      return this.image.split('/')[4].split('-').reverse().join(' ')
    },
    getBreedLink () {
      return this.image.split('/')[4]
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-component {
    position: relative;
    flex-direction: column;
    height: 100%;

    background: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    border-radius: 8px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;

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
          transition: 1s;
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
      text-transform: capitalize;
    }

    .visible {
      display: flex;
    }
  }
</style>
