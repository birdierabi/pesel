<template lang="pug">
  nuxt-link(to="").filter-item-component Australian
</template>

<script>

export default {
  name: 'filter-item-component',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .filter-item-component {
    padding: 4px 12px;

    font-size: 12px;
    line-height: 16px;
    color: $color-text-shadow;

    background-color: inherit;
    border: 1px solid #626262;
    border-radius: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
</style>
