<template lang="pug">
  .load-component.flex.a-center
    span
    span
    span.big
</template>

<script>

export default {
  name: 'load-component',
  components: {
  },
  props: {
    isLoading: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  .load-component {
    gap: 15px;

    span {
      width: 12px;
      height: 12px;
      border: 1px solid #FFFFFF;
      border-radius: 50%;
      background-color: inherit;
      display: flex;

      &.big {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
