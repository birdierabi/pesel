<template lang="pug">
  .page.index.wrapper
    div.top.flex.a-start
      vFilter
      vSorting
    div.list
      vCard.big
      vCard
      vCard
      vCard
      vCard
</template>

<script>

import vFilter from '@/components/filter'
import vSorting from '@/components/sorting'
import vCard from '@/components/card'

export default {
  name: 'index-page',
  components: {
    vFilter,
    vSorting,
    vCard
  }
}
</script>

<style lang="scss" scoped>
  .index {
    padding-top: 50px;
    padding-bottom: 50px;

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
  }

  .top {
    position: relative;

    padding-bottom: 25px;
  }
</style>
