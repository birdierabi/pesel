<template lang="pug">
  label.sorting-component.flex.a-center(tabindex="0")
    span Сортировка по алфавиту
    input.flex.a-center(type="checkbox", name="alphabet-sort")
</template>

<script>
export default {
  name: 'sorting-component',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.sorting-component {
  cursor: pointer;

  span {
    margin-right: 15px;

    font-family: $font-family-default;
    font-size: $font-size-default;
    line-height: $line-height-default;
    letter-spacing: $letter-spacing-default;
    font-weight: $font-weight-normal;
    color: $color-text-shadow;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;

    position: relative;

    width: 29px;
    height: 14.5px;

    border-radius: 9px;
    border: 1px solid $color-shadow;
    transition: all 0.2s ease;

    &:after {
      content: "";

      position: absolute;
      left: 2px;

      width: 9.67px;
      height: 9.67px;

      border-radius: 9px;
      background-color: $color-shadow;
      transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }
  }

  input:checked {
    &:after {
      transform: translatex(13px);
    }
  }
}
</style>
