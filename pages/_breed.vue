<template lang="pug">
  .page.breed-page.wrapper
    p(v-if="$fetchState.error") Здесь нет того, что вы&nbsp;искали. Попробуйте снова
    .inner(v-else)
      .top.flex.a-start
        vFilter(:breeds="breeds" :isAllActive="isAllActive")
        div(@click="isActive = !isActive")
          itemComponent.active(v-show="isActive")
      vList(:dogs="dogs")
      .bottom.flex.j-center.a-center.wrapper
        vLoad(v-show="isLoading")
</template>

<script>
import mixinBreeds from '@/mixins/breeds'

import vFilter from '@/components/filter'
import itemComponent from '@/components/filter-item'
import vList from '@/components/list'
import vLoad from '@/components/load'

export default {
  name: 'breed-page',
  mixins: [mixinBreeds],
  components: {
    vFilter,
    itemComponent,
    vList,
    vLoad
  },
  data () {
    return {
      dogs: [],
      isLoading: false,
      isActive: true,
      isAllActive: true
    }
  },
  async fetch () {
    const dogs = await fetch('https://dog.ceo/api/breed/' + this.$route.params.breed.replace('-', '/') + '/images/random/19').then(res => res.json()).then(data => data.message)
    if (dogs !== 'Breed not found (master breed does not exist)') {
      this.dogs = dogs
    } else {
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      throw new Error('Breed not found')
    }
  },
  methods: {
    async getNewDogs () {
      this.isLoading = true
      const newDogs = await fetch('https://dog.ceo/api/breed/' + this.$route.params.breed.replace('-', '/') + '/images/random/18').then(res => res.json()).then(data => data.message)
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
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleOnScroll)
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
        pointer-events: none;
      }
    }

    .bottom {
      padding-top: 44px;
      padding-bottom: 87px;
    }
  }
</style>
