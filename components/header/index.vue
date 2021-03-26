<template lang="pug">
  header.header-component
    div.flex.j-between.a-center.wrapper
      nuxt-link(to="/").flex
        iconLogo
      nuxt-link(to="/favourites" :class="{'active': isActive}").favourite.flex.a-center
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
  },
  data () {
    return {
      isActive: false
    }
  },
  watch: {
    '$route' () {
      (this.$route.path === '/favourites') ? this.isActive = true : this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    padding-top: 35px;
    padding-bottom: 38px;
    width: 100%;

    background-color: $background-color-header;

    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);

    svg {
      width: 118px;
      height: auto;

      color: $color-logo;
    }

    .favourite {
      transition: 1s;

      @include hovers {
        &:hover {
          opacity: 0.7;
        }
      }

      svg {
        width: 16px;
        height: auto;

        color: $color-shadow;
      }

      span {
        margin-right: 10px;

        color: $color-text-shadow;
      }
    }

    .active {
      svg {
        color: $color-white;
      }

      span {
        color: $color-text-regular;
      }
    }

    @include xs {
      svg {
        width: 100px;
      }
    }
  }
</style>
