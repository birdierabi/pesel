<template lang="pug">
  .textarea-component(:class="{ 'textarea-component-error': error, filled : value }")
    textarea-autosize(
      ref="field"
      :id="localId"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :rows="rows"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      @input="$emit('input', $event)")
    label(v-if="$slots.default" :for="localId")
      slot
    .error.light(v-if="error") {{ errorText }}
</template>

<script>
import Vue from 'vue'
import TextareaAutosize from 'vue-textarea-autosize'

Vue.use(TextareaAutosize)

export default {
  name: 'textarea-component',
  props: {
    id: String,

    // Значение атрибута "name" у поля
    name: String,

    // Реактивное значение поля
    value: [String, Number],

    // Текст или флаг с ошибкой
    error: [String, Boolean],

    // Количество строк, высота textarea
    rows: {
      type: Number,
      default: 1
    },

    // Текст-подсказка в поле
    placeholder: String,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      localId: this.id
    }
  },
  computed: {
    errorText () {
      return typeof this.error === 'string' ? this.error : 'Error'
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
  }
}
</script>

<style lang="scss" scoped>
@import "./_index.scss";
.textarea-component {
  // Your custom styles here
}
</style>
