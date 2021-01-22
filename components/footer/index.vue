<template lang="pug">
  footer.footer-component.flex.j-between.a-center
    template(v-if="defaultContact")
      a(v-if="defaultContact.phone" :href="`tel:${defaultContact.phone}`" target="_blank") {{ formattedPhone }}
      a(v-if="defaultContact.email" :href="`mailto:${defaultContact.email}`" target="_blank") {{ defaultContact.email }}
      .copyright &copy; {{ year }}
      a.developer.flex.a-center(href="https://pitch-it.ru/" target="_blank" rel="noreferrer")
        span Разработка сайта
        | &nbsp;&mdash;&nbsp;
        iconDeveloper
</template>

<script>
import mixinDefaultContact from '@/mixins/default-contact'
import iconDeveloper from '@/components/icons/developer'

export default {
  name: 'footer-component',
  mixins: [mixinDefaultContact],
  components: {
    iconDeveloper
  },
  data () {
    return {
      year: 2020
    }
  },
  mounted () {
    this.year = new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
.footer-component {
  position: relative;
  .developer {
    svg {
      height: 16px;
      width: auto;
    }
    span {
      display: inline-block;
      border-bottom: 1px solid $color-text-regular;
    }
  }
}
</style>
