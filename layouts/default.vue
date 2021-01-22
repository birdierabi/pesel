<template lang="pug">
  #app.flex.column.j-between
    vHeader
    main.grow
      nuxt
    vFooter#footer
</template>

<script>
import vHeader from '@/components/header'
import vFooter from '@/components/footer'

export default {
  components: {
    vHeader,
    vFooter
  },
  watch: {
    $route () {
      this.closeAllModals()
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
}
</style>
