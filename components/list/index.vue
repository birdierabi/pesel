<template lang="pug">
  .list-component
    .list-item(v-for="dog in dogs" :key="dog")
      vCard(:image="dog" :breed="dog")
</template>

<script>
import vCard from '@/components/card'

export default {
  name: 'list-component',
  components: {
    vCard
  },
  props: {
    dogs: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-component {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding-top: 25px;
  }

  .list-item {
    height: 290px;

    overflow: hidden;

    border-radius: 8px;
  }

  .list-item:first-child {
    grid-column-start: 1;
    grid-column-end: 4;
    height: 513px;
  }

  @include md {
    .list-component {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;

      padding-top: 25px;

      .list-item:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
        height: 350px;
      }
    }
  }

  @include xs {
    .list-component {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 0;
      grid-row-gap: 15px;

      padding-top: 25px;

      .list-item:first-child {
        grid-column-start: 1;
        grid-column-end: 2;
        height: 290px;
      }
    }
  }
</style>
