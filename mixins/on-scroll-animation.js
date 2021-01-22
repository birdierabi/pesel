import { gsap } from 'gsap'

export default {
  data () {
    return {
      animations: [],
      targetElements: [],
      observer: null,
      observerOptions: {
        root: null,
        rootMargin: '0px',
        threshold: 0.35
      }
    }
  },
  methods: {
    animationHandler (targets, observer) {
      targets.forEach(entry => {
        if (entry.isIntersecting) {
          const i = this.targetElements.indexOf(entry.target)
          this.animations[i].play()
          if (entry.target.attributes['data-animate']) {
            entry.target.classList.add('animated')
          }
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver(this.animationHandler, this.observerOptions)
      const targets = document.querySelectorAll('[data-animate-up], [data-animate-left], [data-animate-right], [data-animate]')
      this.targetElements = [...[].slice.call(targets)]

      this.targetElements.forEach((target, i) => {
        this.animations[i] = gsap.timeline({ paused: true })
        this.observer.observe(target)
        if (target.attributes['data-animate-left']) {
          gsap.set(target, { x: -50, opacity: 0 })
          this.animations[i].to(target, 0.5, {
            x: 0,
            opacity: 1,
            ease: 'Power1.easeInOut',
            delay: target.attributes['data-delay'] ? target.getAttribute('data-delay') : 0
          })
        } else if (target.attributes['data-animate-right']) {
          gsap.set(target, { x: 50, opacity: 0 })
          this.animations[i].to(target, 0.5, {
            x: 0,
            opacity: 1,
            ease: 'Power1.easeInOut',
            delay: target.attributes['data-delay'] ? target.getAttribute('data-delay') : 0
          })
        } else if (target.attributes['data-animate-up']) {
          gsap.set(target, { y: 50, opacity: 0 })
          this.animations[i].to(target, 0.5, {
            y: 0,
            opacity: 1,
            ease: 'Power1.easeInOut',
            delay: target.attributes['data-delay'] ? target.getAttribute('data-delay') : 0
          })
        }
      })
    })
  },
  beforeDestroy () {
    this.targetElements.forEach(target => {
      this.observer.unobserve(target)
    })
  }
}
