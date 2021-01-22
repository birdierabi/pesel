export default {
  data () {
    return {
      data: {},
      meta: {
        title: '',
        description: '',
        keywords: ''
      }
    }
  },
  head () {
    return {
      title: this.data && this.data.pageMeta && this.data.pageMeta.title ? this.data.pageMeta.title : this.data && this.data.pageMeta && this.data.pageMeta.h1 ? this.data.pageMeta.h1 : this.data && this.data.title ? this.data.title : this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.data && this.data.pageMeta && this.data.pageMeta.description ? this.data.pageMeta.description : this.meta.description },
        { name: 'keywords', content: this.data && this.data.pageMeta ? this.data.pageMeta.keywords : this.meta.keywords }
      ]
    }
  }
}
