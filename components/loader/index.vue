<template lang="pug">
  .loader-component
</template>

<script>
export default {
  name: 'loader-component'
}
</script>

<style lang="scss" scoped>
.loader-component {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-top: 5px solid rgba($color-primary, 0.2);
  border-right: 5px solid rgba($color-primary, 0.2);
  border-bottom: 5px solid rgba($color-primary, 0.2);
  border-left: 5px solid $color-primary;
  animation: loader 1.1s infinite linear;
  @-webkit-keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
