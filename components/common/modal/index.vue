<template lang="pug">
  transition(name="modal")
    .modal-component(v-if="show" @click.self="close")
      dialog(:open="show")
        .close.flex.center(@click="close")
          iconClose

        .title(v-if="$slots.title")
          slot(name="title")

        .content(ref="content")
          div(ref="contentWrap")
            slot

        .actions.buttons(v-if="$slots.actions")
          slot(name="actions")
</template>

<script>
import { mapState } from 'vuex'
import iconClose from './close'

export default {
  name: 'modal-component',
  components: {
    iconClose
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      modals: state => state.modals
    }),
    show () {
      return this.modals.includes(this.id)
    }
  },
  watch: {
    show () {
      this.show
        ? this.$emit('open')
        : this.$emit('close')
      this.$nextTick(() => {
        this.handleOnResize()
      })
    }
  },
  methods: {
    close () {
      this.$store.dispatch('closeModal', this.id)
      this.enableBodyScroll()
    },
    handleOnResize () {
      if (this.$refs.content && this.$refs.contentWrap) {
        if (this.$refs.contentWrap.offsetHeight + 80 >= window.innerHeight) {
          this.$refs.content.classList.add('scrollable')
        } else {
          this.$refs.content.classList.remove('scrollable')
        }
      }
    },
    handleOnKeyUp (e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleOnResize)
    window.addEventListener('keyup', this.handleOnKeyUp)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleOnResize)
    window.removeEventListener('keyup', this.handleOnKeyUp)
  }
}
</script>

<style lang="scss" scoped>
@import "./_index.scss";
.modal-component {
  // Your custom styles here
}
</style>
