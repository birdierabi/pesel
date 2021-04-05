<template lang="pug">
  button.up-button-component.flex.j-center.a-center
    vArrow
</template>

<script>

import vArrow from '@/components/icons/arrow'

export default {
  name: 'up-button-component',
  components: {
    vArrow
  }
}
</script>

<style lang="scss" scoped>
  .up-button-component {
    width: 55px;
    height: 55px;

    background-color: transparent;
    border: 1px solid $color-white;
    border-radius: 50%;

    cursor: pointer;
    outline: none;

    svg {
      width: 12.25px;
      height: auto;

      color: $color-white;
    }
  }
</style>
