<template lang="pug">
  details.filter-component
    summary.flex.a-center
      span Породы
      iconDownArrow
    div
      itemComponent.all
      div.filter-list.flex.wrap
        span A
        itemComponent
        itemComponent
        itemComponent
        span B
        itemComponent
        itemComponent
        itemComponent
</template>

<script>
import iconDownArrow from '@/components/icons/down-dir'
import itemComponent from '@/components/filter-item'

export default {
  name: 'filter-component',
  components: {
    iconDownArrow,
    itemComponent
  }
}
</script>

<style lang="scss" scoped>
  .filter-component {
    &[open] summary svg {
      transform: rotate(180deg);
    }

    cursor: pointer;

    summary {
      max-width: 81px;
      padding-bottom: 2px;

      span {
        line-height: 20px;
        border-bottom: 0.5px dashed $color-white;
        margin-right: 10px;
      }

      svg {
        width: 9px;
        height: auto;

        color: $color-white;
      }
    }

    summary::-webkit-details-marker {
      display: none;
    }

    div {
      padding-top: 30px;
    }

    .all {
      border: 1px solid $color-blue;
      color: $color-blue;
    }

    .filter-list {
      display: flex;
      align-items: center;
      gap: 15px;
      padding-top: 15px;
      padding-bottom: 15px;

      span {
        display: block;

        font-size: 20px;
        color: $color-text-shadow;
      }

      span:not(:first-child) {
        margin-left: 40px;
      }
    }
  }
</style>
