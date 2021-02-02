<template lang="pug">
  nuxt-link(:to="`/${getLink}`").filter-item-component
    span {{ getBreed }}
    iconClose
</template>

<script>
import iconClose from '@/components/icons/close'

export default {
  name: 'filter-item-component',
  components: {
    iconClose
  },
  props: {
    breedElement: {
      type: String
    }
  },
  computed: {
    getLink () {
      if (this.breedElement === undefined) {
        return ''
      }
      return this.breedElement
    },
    getBreed () {
      if (this.breedElement === undefined) {
        return this.$route.params.breed
      }
      return this.breedElement
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-item-component {
    padding: 4px 12px;

    font-size: 12px;
    line-height: 16px;
    color: $color-text-shadow;

    background-color: inherit;
    border: 1px solid $color-shadow;
    border-radius: 20px;

    @include hovers {
      &:hover {
        transition: 1s;
        opacity: 0.7;
      }
    }

    svg {
      display: none;
      width: 5.7px;
      height: auto;
      margin-left: 7.35px;
    }

    span {
      text-transform: capitalize;
    }
  }

  .close {
      svg {
        display: inline;
      }
    }
</style>
