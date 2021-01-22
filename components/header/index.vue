<template lang="pug">
  header.header-component.flex.j-between.a-center.wrapper
    nuxt-link(:to="'/'").flex
      iconLogo
    a.button-component.favourite.flex.a-center(href="/favourites" target="_self" rel="noreferrer")
      span Избранные пёсели
      iconHeart
</template>

<script>
import iconLogo from '@/components/icons/logo'
import iconHeart from '@/components/icons/heart'

export default {
  name: 'header-component',
  components: {
    iconLogo,
    iconHeart
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    padding-top: 35px;
    padding-bottom: 38px;

    color: $color-text-shadow;

    background-color: #151419;

    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);

    .favourite {
      svg {
        width: 16px;
        height: 14px;

        fill: $color-text-shadow;
      }

      span {
        margin-right: 10px;
      }
    }
  }
</style>
