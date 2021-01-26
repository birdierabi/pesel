<template lang="pug">
  nuxt-link(to="/breed").filter-item-component Australian
    iconClose
</template>

<script>
import iconClose from '@/components/icons/close'

export default {
  name: 'filter-item-component',
  components: {
    iconClose
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
        opacity: 0.7;
      }
    }

    svg {
      display: none;
      width: 5.7px;
      height: auto;
      margin-left: 7.35px;
    }
  }

  .close {
      svg {
        display: inline;
      }
    }
</style>
