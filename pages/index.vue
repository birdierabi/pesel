<template lang="pug">
  .page.index.wrapper
    .top.flex.a-start
      vFilter(:breeds="breeds" :isAllActive="isAllActive")
      div
        itemComponent.active(breedElement="All")
    vList(:dogs="dogs")
    .bottom.flex.j-center.a-center.wrapper
      vLoad(v-show="isLoading")
      .container(@click="backToTop()")
        vTopButton(v-show="isVisible")
</template>

<script>
import mixinBreeds from '@/mixins/breeds'

import vFilter from '@/components/filter'
import itemComponent from '@/components/filter-item'
import vList from '@/components/list'
import vTopButton from '@/components/top-button'
import vLoad from '@/components/load'

export default {
  name: 'index-page',
  mixins: [mixinBreeds],
  components: {
    vFilter,
    itemComponent,
    vList,
    vTopButton,
    vLoad
  },
  data () {
    return {
      dogs: [],
      isLoading: false,
      isVisible: false,
      isAllActive: false
    }
  },
  async fetch () {
    this.dogs = await fetch('https://dog.ceo/api/breeds/image/random/19').then(res => res.json()).then(data => data.message)
  },
  methods: {
    async getNewDogs () {
      this.isLoading = true
      const newDogs = await fetch('https://dog.ceo/api/breeds/image/random/18').then(res => res.json()).then(data => data.message)
      this.dogs = Array.from(new Set([...this.dogs, ...newDogs]))
      this.isLoading = false
    },
    handleOnScroll () {
      const bottomOfWindow = document.documentElement.scrollTop + 100 + window.innerHeight
      if (bottomOfWindow >= document.body.scrollHeight) {
        if (!this.isLoading) {
          this.getNewDogs()
        }
      }
    },
    scrollDown () {
      const scrollOfWindow = 2 * window.innerHeight
      if (document.documentElement.scrollTop > scrollOfWindow) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    },
    backToTop () {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleOnScroll)
    window.addEventListener('scroll', this.scrollDown)
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

      .active {
        position: absolute;
        left: 105px;

        border: 1px solid $color-active-link;
        color: $color-active-link;
        pointer-events: none;
      }
    }

    .bottom {
      padding-top: 83px;
      padding-bottom: 163px;

      .container {
        position: fixed;
        bottom: 60px;
        right: 2px;
        z-index: 2;

        transition: all 1s ease-in-out;
      }
    }
  }
</style>
