<template lang="pug">
  .page.index.wrapper
    div.flex.j-between.a-center
      vFilter
</template>

<script>

import vFilter from '@/components/filter'

export default {
  name: 'index-page',
  components: {
    vFilter
  }
}
</script>

<style lang="scss" scoped>
  .index {
    padding-top: 50px;
  }
</style>
