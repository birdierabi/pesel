<template lang="pug">
  .filter-component
    .inner.flex.a-center(@click="isVisible = !isVisible")
      span Породы
      iconDownDir(:class="{'rotate': isVisible}")
    vDropdown(:isVisible="isVisible")
      .filter-inner
        itemComponent.all(v-show="isAllActive" breedElement="/")
        .filter-list(v-for="breedList in breeds" :key="breedList.letter")
          span {{ breedList.letter }}
          .filter-item(v-for="breedElement in breedList.list" :key="breedElement")
            itemComponent(:breedElement="breedElement")
</template>

<script>
import iconDownDir from '@/components/icons/down-dir'
import vDropdown from '@/components/dropdown'
import itemComponent from '@/components/filter-item'

export default {
  name: 'filter-component',
  components: {
    iconDownDir,
    vDropdown,
    itemComponent
  },
  data () {
    return {
      isVisible: false
    }
  },
  props: {
    breeds: {
      type: Array
    },
    isAllActive: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-component {
    .rotate {
      transform: rotate(180deg);
    }

    cursor: pointer;

    .inner {
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
      padding-bottom: 10px;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    .all {
      border: 1px solid $color-active-link;
      color: $color-active-link;
      display: flex;
      max-width: 40px;
      margin-bottom: 15px;
    }

    .filter-list {
      display: inline;

      span {
        display: inline-block;
        vertical-align: middle;
        margin-right: 15px;

        font-size: 20px;
        color: $color-text-shadow;
      }
    }

    .filter-list:not(:first-of-type) span {
      margin-left: 25px;
    }

    .filter-item {
      display: inline-block;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
</style>
