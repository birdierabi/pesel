<template lang="pug">
  #app.flex.column.j-between
    vHeader
    main.grow
      nuxt
</template>

<script>
import vHeader from '@/components/header'

export default {
  components: {
    vHeader
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
}
</style>
