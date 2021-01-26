<template lang="pug">
  .page.index.wrapper
    div.top.flex.a-start
      vFilter
      div.container
        vSorting
    div.list
      vCard.big
      vCard
      vCard
      vCard
      vCard
    div.bottom.flex.j-center.a-center.wrapper
      vLoad
      div.container
        vTopButton
</template>

<script>

import vFilter from '@/components/filter'
import vSorting from '@/components/sorting'
import vCard from '@/components/card'
import vTopButton from '@/components/top-button'
import vLoad from '@/components/load'

export default {
  name: 'index-page',
  components: {
    vFilter,
    vSorting,
    vCard,
    vTopButton,
    vLoad
  }
}
</script>

<style lang="scss" scoped>
  .index {
    padding-top: 50px;

    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 30px;
      grid-row-gap: 30px;

      padding-top: 25px;

      .big {
        grid-column-start: 1;
        grid-column-end: 4;
      }
    }

    .top {
      position: relative;

      padding-bottom: 25px;

      .container {
        position: absolute;
        right: 0;
      }
    }

    .bottom {
      position: relative;

      padding-top: 83px;
      padding-bottom: 163px;

      .container {
        position: absolute;
        right: 0;
        bottom: 55%;
      }
    }
  }
</style>
