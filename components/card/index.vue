<template lang="pug">
  div.card-component.flex.j-between
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
  }
}
</script>

<style lang="scss" scoped>
  .card-component {
    flex-direction: column;
    min-height: 290px;
    padding: 25px;

    background: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 8px;
    background-image: url('http://dugward.ru/foto/Kosha1.jpg');

    svg {
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
