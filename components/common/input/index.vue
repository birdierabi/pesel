<template lang="pug">
  .input-component(:class="{ 'input-component-error': error, filled : value }")
    input(
      ref="input"
      :id="localId"
      :name="name"
      :type="type"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :autofocus="autofocus"
      v-mask="mask"
      @input="input($event.target.value)"
      @change="change($event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @keyup="$emit('keyup', $event)"
      @paste="paste")
    label(v-if="$slots.default" :for="localId")
      slot
    transition(name="fade")
      .error.light(v-if="error") {{ errorText }}
</template>

<script>
import AwesomeMask from 'awesome-mask'

export default {
  name: 'input-component',
  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    error: [String, Boolean],
    placeholder: String,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean
  },
  directives: {
    mask: AwesomeMask
  },
  data () {
    return {
      localId: this.id,
      mask: ''
    }
  },
  computed: {
    errorText () {
      return typeof this.error === 'string' ? this.error : 'Error'
    }
  },
  methods: {
    input (value) {
      if (this.type === 'phone') {
        // Удаляем все символы, кроме цифр
        const phone = value.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
        value = phone.input
        this.mask = '+9 (999)-999-99-99'
        if (value === '+') {
          value = ''
        }
      }
      this.$emit('input', value)
    },
    change (value) {
      this.$emit('change', value)
    },
    focus () {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    paste (e) {
      e.preventDefault()
      let value
      if (!e.clipboardData && window.clipboardData) {
        value = window.clipboardData.getData('Text')
      } else if (e.clipboardData) {
        value = e.clipboardData.getData('Text')
      }
      this.$emit('input', value)
      this.$emit('paste', value)
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    if (this.autofocus) {
      this.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./_index.scss";
.input-component {
  // Your custom styles here
}
</style>
