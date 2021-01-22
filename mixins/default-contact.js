import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      defaultContact: state => state.defaultContact
    }),
    formattedPhone () {
      if (this.defaultContact && this.defaultContact.phone) {
        const cleanPhone = ('' + this.defaultContact.phone).replace(/\D/g, '')
        const match = cleanPhone.match(/^([7,8])?(\d{3})(\d{3})(\d{2})(\d{2})$/)
        if (match) {
          const intlCode = match[1] ? '+7 ' : ''
          return [intlCode, '(', match[2], ') ', match[3], '-', match[4], '-', match[5]].join('')
        }
      }
      return ''
    }
  }
}
