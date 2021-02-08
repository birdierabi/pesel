<template lang="pug">
  .page.breed-page.wrapper
    .top.flex.a-start
      vFilter(:breeds="breeds" :isAllActive="isAllActive")
      div(@click="isActive = !isActive")
        itemComponent.active(v-show="isActive")
    vList(:dogs="dogs")
    .bottom.flex.j-center.a-center.wrapper
      vLoad(v-show="isLoading")
</template>
<script>

import vFilter from '@/components/filter'
import itemComponent from '@/components/filter-item'
import vList from '@/components/list'
import vLoad from '@/components/load'

export default {
  name: 'breed-page',
  components: {
    vFilter,
    itemComponent,
    vList,
    vLoad
  },
  data () {
    return {
      dogs: [],
      breeds: [],
      isLoading: false,
      isActive: true,
      isAllActive: true
    }
  },
  async fetch () {
    this.dogs = await fetch('https://dog.ceo/api/breed/' + this.$route.params.breed.replace('-', '/') + '/images/random/19').then(res => res.json()).then(data => data.message).catch(() => ({}))
    const allBreeds = await fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(element => element.message)
    const breeds = []
    for (const item in allBreeds) {
      if (allBreeds[item].length === 0) {
        breeds.push(item)
      } else if (allBreeds[item].length === 1) {
        breeds.push(item + ' ' + allBreeds[item])
      } else {
        for (let i = 0; i < allBreeds[item].length; i++) {
          breeds.push(item + ' ' + allBreeds[item][i])
        }
      }
    }
    this.breeds = this.getSections(breeds)
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
    },
    getSections (breeds) {
      return Object.values(
        breeds.reduce((acc, word) => {
          const firstLetter = word[0].toLocaleUpperCase()
          if (!acc[firstLetter]) {
            acc[firstLetter] = { letter: firstLetter, list: [word] }
          } else {
            acc[firstLetter].list.push(word.replace(' ', '-'))
          }
          return acc
        }, {})
      )
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
