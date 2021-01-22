<template lang="pug">
  .counter-component.flex.a-center.j-between
    label(:for="localId")
      slot
    .flex.a-center.j-between
      a.button.minus(href="#" @click.prevent="minus") -

      input.grow(
        ref="input"
        :id="localId"
        type="number"
        :value.number="value"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        @input="input"
        @change="change"
        :min.prop="min ? min : !negative ? 0 : false"
        :max.prop="max ? max : false"
        @focus="$emit('focus', $event.target.value)"
        @blur="blur")

      a.button.plus(href="#" @click.prevent="plus") +
</template>

<script>
export default {
  name: 'counter-component',
  props: {
    // ID поля
    id: String,

    // Значение поля (реактивно)
    value: [String, Number],

    // Шаг, с которым изменяется значение при нажатии на + и -
    step: {
      type: Number,
      default: 1
    },

    // Задержка в мс до срабатывания "change" (при вводе значения в поле руками)
    inputDelay: {
      type: [String, Number],
      default: 300
    },

    // Минимальный допустимый предел значения
    min: [Number, String],

    // Максимальный допустимый предел значения
    max: [Number, String],

    // Текст-подсказка в поле
    placeholder: String,

    // Автофокусировка в поле
    autofocus: Boolean,

    // Может ли значение быть отрицательным
    negative: Boolean,

    // Только для чтения
    readonly: Boolean,

    // Состояние неактивности
    disabled: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      localId: this.id,
      timeout: null,
      localMin: this.min
    }
  },
  methods: {
    validate (value) {
      value = parseInt(value)
      if (isNaN(value) || typeof value !== 'number') {
        value = 0
      }
      if (!this.negative) {
        value = value > 0 ? value : 0
      }
      if (this.min) {
        value = value > +this.min ? value : +this.min
      }
      if (this.max) {
        value = value < +this.max ? value : +this.max
      }
      return value
    },
    paste (e) {
      e.preventDefault()
      const val = Number(e.clipboardData.getData('Text'))
      this.$emit('change', this.validate(val))
    },
    input (e) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('change', this.validate(e.target.value))
      }, +this.inputDelay)
    },
    change (e) {
      this.$emit('change', this.validate(e.target.value))
      e.target.value = this.validate(e.target.value)
    },
    blur (e) {
      clearTimeout(this.timeout)
      this.$emit('blur', e.target.value)
    },
    minus () {
      this.$emit('change', this.validate(+this.value - this.step))
    },
    plus () {
      this.$emit('change', this.validate(+this.value + this.step))
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    this.$refs.input.addEventListener('paste', this.paste)
  },
  beforeDestroy () {
    this.$refs.input.removeEventListener('paste', this.paste)
  }
}
</script>

<style lang="scss" scoped>
@import "./_index.scss";
.counter-component {
  // Your custom styles here
}
</style>
