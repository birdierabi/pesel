<template lang="pug">
  details.filter-component
    summary.flex.a-center
      div
        span Породы
        iconDownDir
    .filter-inner
      itemComponent.all(breedElement="All")
      .filter-list.flex.wrap(v-for="breedList in breeds" :key="breedList")
        span {{ breedList.letter }}
        .filter-item.flex.a-center(v-for="breedElement in breedList.list" :key="breedElement")
          itemComponent(:breedElement="breedElement")
</template>

<script>
import iconDownDir from '@/components/icons/down-dir'
import itemComponent from '@/components/filter-item'

export default {
  name: 'filter-component',
  components: {
    iconDownDir,
    itemComponent
  },
  data () {
    return {
      isActive: false
    }
  },
  props: {
    breeds: {
      type: Array
    },
    breedList: {
      type: Array
    }
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

    .filter-inner {
      padding-top: 30px;
      padding-bottom: 25px;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    .all {
      border: 1px solid $color-active-link;
      color: $color-active-link;
    }

    .filter-list {
      display: flex;
      align-items: center;
      gap: 15px;
      padding-top: 15px;

      span {
        display: block;

        font-size: 20px;
        color: $color-text-shadow;
      }

      span:not(:first-child) {
        margin-left: 40px;
      }
    }

    .filter-item {
      text-transform: capitalize;
    }
  }
</style>
