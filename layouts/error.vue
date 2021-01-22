<template lang="pug">
  .page.error
    h1(v-html="message")
</template>

<script>
export default {
  name: 'page-error',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    message () {
      const defaultMessage = 'Здесь нет того, что вы&nbsp;искали. Попробуйте снова'
      return this.error.statusCode === 404 ? defaultMessage : this.error.message || defaultMessage
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.error {
    //
  }
</style>
