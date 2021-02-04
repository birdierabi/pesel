<template lang="pug">
  .page.favourites-page.wrapper
    vList(:dogs="favourites")
</template>

<script>

import vList from '@/components/list'

export default {
  name: 'favourites-page',
  components: {
    vList
  },
  data () {
    return {
      dogs: []
    }
  },
  computed: {
    favourites () {
      let arr = []
      if (process.browser) {
        arr = Object.values(localStorage)
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
  .favourites-page {
    padding-top: 122px;
    padding-bottom: 150px;
  }
</style>
