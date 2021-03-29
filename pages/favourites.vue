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
      return JSON.parse(localStorage.getItem('array')) ? JSON.parse(localStorage.getItem('array')) : []
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
