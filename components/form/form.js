import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

import commonInput from '@/components/common/input'
import commonTextarea from '@/components/common/textarea'
import commonFile from '@/components/common/file'
import commonButton from '@/components/common/button'
import vLoader from '@/components/loader'

Vue.use(Vuelidate)

export default {
  components: {
    commonInput,
    commonTextarea,
    commonFile,
    commonButton,
    vLoader
  },
  props: {
    metricGoal: {
      type: String,
      default: 'default'
    },
    typePath: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      isLoading: false,
      status: 0,
      type: null,
      file: null,
      form: {
        caller: '',
        phone: '',
        email: '',
        content: '',
        attaches: [],
        type: this.type
      },
      invalidCallerMessage: '',
      invalidPhoneMessage: '',
      invalidCommentMessage: '',
      invalidEmailMessage: '',
      readyToSent: false
    }
  },
  validations: {
    form: {
      caller: {
        required
      },
      phone: {
        minLength: minLength(12),
        required
      },
      email: {
        required,
        email
      },
      content: {
        required
      }
    }
  },
  methods: {
    closeMsg () {
      this.$emit('close')
      this.retry()
      if (this.typePath === 'landing-modal' || this.typePath === 'landing') {
        this.$router.push({ path: '/' })
      }
    },
    checkFieldValidity (field, msg, msgText = 'Это поле обязательно для заполнения') {
      field.required ? this[msg] = '' : this[msg] = msgText
    },
    checkEmailValidity () {
      this.invalidEmailMessage = ''
      if (!this.$v.form.email.email) {
        this.invalidEmailMessage = 'Проверьте вашу почту'
      }
      if (!this.$v.form.email.required) {
        this.invalidEmailMessage = 'На какую почту нам написать?'
      }
    },
    checkPhoneValidity () {
      this.invalidPhoneMessage = ''
      this.form.phone = this.form.phone.replace(/[(, ,),-]/g, '')
      if (!this.$v.form.phone.minLength) {
        this.invalidPhoneMessage = 'Проверьте ваш телефон'
      }
      if (!this.$v.form.phone.required) {
        this.invalidPhoneMessage = 'По какому номеру нам перезвонить?'
      }
    },
    retry () {
      if (this.status === 200) {
        this.file = null
        this.form = {
          caller: '',
          phone: '',
          attaches: [],
          email: '',
          content: '',
          type: this.type
        }
      }
      this.status = 0
    },
    preparation () {
      this.checkFieldValidity(this.$v.form.caller, 'invalidCallerMessage', 'Как к вам обращаться?')
      this.checkFieldValidity(this.$v.form.content, 'invalidCommentMessage', 'Хотя бы два слова')
      this.checkPhoneValidity()
      if (this.$v.form.email) {
        this.checkEmailValidity()
      }
      if (this.$v.form.phone.minLength &&
        this.$v.form.phone.required &&
        this.$v.form.email.required &&
        this.$v.form.email.email &&
        this.$v.form.caller.required &&
        this.$v.form.content.required) {
        this.readyToSent = true
      }
    },
    async send () {
      this.preparation()
      if (this.readyToSent) {
        this.isLoading = true
        this.form.type = this.type
        this.form.content = this.form.content || ' '

        // Upload files at first if exist
        if (this.file && Array.from(this.file).length) {
          const filesArray = Array.from(this.file)
          for (let i = 0; i < filesArray.length; i++) {
            const fileData = new FormData()
            fileData.append('file', filesArray[i])
            fileData.append('title', filesArray[i].name)
            const { file } = await this.$store.dispatch('api/uploadFile', fileData).catch(() => ({}))
            if (file) {
              this.form.attaches.push(file.id)
            }
          }
        }

        // Send feedback
        await this.$store.dispatch('api/sendForm', this.form).then(() => {
          this.isLoading = false
          this.status = 200
          this.$emit('success')
          if (this.$metrika) {
            this.$metrika.reachGoal(this.metricGoal)
          }
          setTimeout(() => {
            this.retry()
          }, 5000)
        }).catch(err => {
          this.isLoading = false
          this.status = err.status
          this.$emit('error')
        })
      }
    }
  },
  mounted () {
    this.$store.dispatch('api/getFeedbackTypes', {
      filters: {
        slug: this.typePath
      },
      locale: false
    }).then(res => {
      this.type = res.feedbackTypes.length ? res.feedbackTypes[0].id : null
    })
  }
}
