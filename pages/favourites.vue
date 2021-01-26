<template lang="pug">
  .page.favourites-page.wrapper
    div.list
      vCard
      vCard
      vCard
</template>

<script>

import vCard from '@/components/card'

export default {
  name: 'favourites-page',
  components: {
    vCard
  }
}
</script>

<style lang="scss" scoped>
  .favourites-page {
    padding-top: 122px;

    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
  }
</style>
