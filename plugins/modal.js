import Vue from 'vue'

const modalMixin = {
  methods: {
    disableBodyScroll () {
      const initPosition = document.body.getBoundingClientRect().top
      document.body.style.top = `${initPosition}px`
      document.body.classList.add('fixed')
    },
    enableBodyScroll () {
      if (!this.$store.state.modals.length) {
        const initPosition = document.body.getBoundingClientRect().top
        document.body.classList.remove('fixed')
        document.body.style.top = null
        window.scroll(0, -initPosition)
      }
    },
    openModal (id) {
      if (!id) {
        return
      }
      this.$store.dispatch('openModal', id)
      this.disableBodyScroll()
    },
    closeModal (id) {
      if (!id) {
        return
      }
      this.$store.dispatch('closeModal', id)
      this.enableBodyScroll()
    },
    closeAllModals () {
      this.$store.dispatch('closeAllModals')
      this.enableBodyScroll()
    }
  }
}

Vue.mixin(modalMixin)
