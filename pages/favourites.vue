<template lang="pug">
  .page.favourites-page.wrapper
    vList
</template>

<script>

import vList from '@/components/list'

export default {
  name: 'favourites-page',
  components: {
    vList
  }
}
</script>

<style lang="scss" scoped>
  .favourites-page {
    padding-top: 122px;
  }
</style>
