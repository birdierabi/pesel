<template lang="pug">
.load-component.flex.a-center
  .bounce1
  .bounce2
  .bounce3.big
</template>

<script>
export default {
  name: 'load-component',
  components: {}
}
</script>

<style lang="scss" scoped>
  .load-component {
    gap: 15px;
    width: 70px;
    text-align: center;

    .bounce1 {
      -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    }

    .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }

    .big {
      width: 16px;
      height: 16px;
    }
  }

  .load-component > div {
    width: 12px;
    height: 12px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background-color: inherit;
    display: flex;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(1.0);
    }
    40% {
      -webkit-transform: scale(1.2);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
    40% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
</style>
