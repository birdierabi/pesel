<template lang="pug">
  .page.index.wrapper
    .top.flex.a-start
      vFilter
      div.container
        vSorting
    vList(:dogs="dogs")
    .bottom.flex.j-center.a-center.wrapper
      vLoad(v-show="isLoading")
      .container
        vTopButton
</template>

<script>

import vFilter from '@/components/filter'
import vSorting from '@/components/sorting'
import vList from '@/components/list'
import vTopButton from '@/components/top-button'
import vLoad from '@/components/load'

export default {
  name: 'index-page',
  components: {
    vFilter,
    vSorting,
    vList,
    vTopButton,
    vLoad
  },
  data () {
    return {
      dogs: [],
      isLoading: false
    }
  },
  async fetch () {
    this.dogs = await fetch('https://dog.ceo/api/breeds/image/random/19').then(res => res.json()).then(data => data.message)
  },
  methods: {
    async getNewDogs () {
      this.isLoading = true
      const newDogs = await fetch('https://dog.ceo/api/breeds/image/random/18').then(res => res.json()).then(data => data.message)
      this.dogs = [...this.dogs, ...newDogs]
      this.isLoading = false
    },
    handleOnScroll () {
      const bottomOfWindow = window.pageYOffset + window.innerHeight === document.documentElement.offsetHeight
      if (bottomOfWindow) {
        this.getNewDogs()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleOnScroll)
  }
}
</script>

<style lang="scss" scoped>
  .index {
    padding-top: 50px;

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
