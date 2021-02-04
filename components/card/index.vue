<template lang="pug">
  nuxt-link(:to="`/${getBreedLink}`").card-component.flex.j-between
    img(:src="image")
    div(@click.prevent="(!isActive) ? getLike() : getDislike()").inner
      iconHeart(:class="{'active': !isActive}" tabindex="0")
      iconFullHeart(:class="{'active': isActive}" tabindex="0")
    span.flex.j-end {{ getDogBreed }}
</template>

<script>
import iconHeart from '@/components/icons/heart'
import iconFullHeart from '@/components/icons/heart-full'

export default {
  name: 'card-component',
  components: {
    iconHeart,
    iconFullHeart
  },
  data () {
    return {
      isActive: false
    }
  },
  props: {
    image: {
      type: String
    }
  },
  mounted () {
    if (localStorage.getItem(this.image)) {
      this.isActive = true
      const localStorageList = document.querySelectorAll('.list-item')
      for (let i = 0; i < localStorageList.length; i++) {
        localStorageList[i].onclick = function () {
          localStorageList[i].remove()
        }
      }
    }
  },
  computed: {
    getDogBreed () {
      return this.image.split('/')[4].split('-').reverse().join(' ')
    },
    getBreedLink () {
      return this.image.split('/')[4]
    }
  },
  methods: {
    getLike () {
      localStorage.setItem(this.image, this.image)
      this.isActive = true
    },
    getDislike () {
      this.isActive = false
      localStorage.removeItem(this.image)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-component {
    position: relative;
    flex-direction: column;
    height: 100%;

    background: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    border-radius: 8px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;

      border-radius: 8px;
    }

    svg {
      position: absolute;
      top: 25px;
      left: 25px;

      display: none;
      width: 29px;
      height: auto;

      color: $color-white;

      cursor: pointer;

      @include hovers {
        &:hover {
          transition: 1s;
          opacity: 0.7;
        }
      }
    }

    span {
      position: absolute;
      bottom: 25px;
      right: 25px;

      font-family: $font-family-default;
      font-weight: $font-weight-semi-bold;
      font-size: 25px;
      line-height: $line-height-default;
      letter-spacing: $letter-spacing-default;
      text-transform: capitalize;
    }

    .active {
      display: flex;
    }
  }
</style>
