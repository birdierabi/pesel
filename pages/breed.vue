<template lang="pug">
  .page.breed-page.wrapper
    div.top.flex.a-start
      vFilter
      itemComponent.active
      div.container
        vSorting
    div
      vList
    div.bottom.flex.j-center.a-center.wrapper
      vLoad
</template>

<script>

import vFilter from '@/components/filter'
import itemComponent from '@/components/filter-item'
import vSorting from '@/components/sorting'
import vList from '@/components/list'
import vLoad from '@/components/load'

export default {
  name: 'breed-page',
  components: {
    vFilter,
    itemComponent,
    vSorting,
    vList,
    vLoad
  }
}
</script>

<style lang="scss" scoped>
  .breed-page {
    padding-top: 50px;

    .top {
      position: relative;

      padding-bottom: 25px;

      .container {
        position: absolute;
        right: 0;
      }

      .active {
        position: absolute;
        left: 105px;

        border: 1px solid $color-active-link;
        color: $color-active-link;
      }
    }

    .bottom {
      padding-top: 44px;
      padding-bottom: 87px;
    }
  }
</style>
