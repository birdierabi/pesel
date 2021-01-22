<template lang="pug">
  button.filter-component.flex.j-center.a-center
      span Породы
      iconDownArrow
</template>

<script>
import iconDownArrow from '@/components/icons/down-arrow'

export default {
  name: 'filter-component',
  components: {
    iconDownArrow
  }
}
</script>

<style lang="scss" scoped>
  .filter-component {
    padding-bottom: 1px;

    font-family: $font-family-default;
    font-size: $font-size-default;
    font-weight: $font-weight-normal;
    line-height: 20px;

    color: $color-text-regular;

    border-bottom: 0.5px dashed $color-text-regular;
    background-color: inherit;

    cursor: pointer;

    span {
      margin-right: 10px;
    }

    svg {
      width: 5px;
      height: auto;

      color: $color-text-regular;
    }
  }
</style>
