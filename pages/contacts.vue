<template lang="pug">
  .page.contacts
    h1(v-html="data && data.pageMeta && data.pageMeta.h1 ? data.pageMeta.h1 : data ? data.title : 'Контакты'")
    .text(v-html="data ? data.subtitle : ''")
    .text(v-if="data.description" v-html="generateDomFromJson(data.description)")
    .text(v-if="data.content" v-html="generateDomFromJson(data.content)")
    .flex.j-between.a-center
      a(v-if="defaultContact.phone" :href="`tel:${defaultContact.phone}`" target="_blank") {{ formattedPhone }}
      a(v-if="defaultContact.email" :href="`mailto:${defaultContact.email}`" target="_blank") {{ defaultContact.email }}
    vMap(
      v-if="defaultContact.longitude && defaultContact.latitude"
      id="contacts-map"
      :markers="[defaultContact]"
      :coords="[defaultContact.latitude, defaultContact.longitude]"
      noBalloon)
    vForm
</template>

<script>
import { generateDomFromJson } from '@/plugins/wysiwyg'
import mixinDefaultContact from '@/mixins/default-contact'
import mixinPage from '@/mixins/page'
import vMap from '@/components/map'
import vForm from '@/components/form'

export default {
  name: 'page-contacts',
  mixins: [mixinPage, mixinDefaultContact],
  components: {
    vMap,
    vForm
  },
  data () {
    return {
      generateDomFromJson
    }
  },
  asyncData ({ store }) {
    return store.dispatch('api/getArticle', {
      data: 'contacts'
    }).then(res => {
      return {
        data: res.article
      }
    }).catch(() => ({}))
  }
}
</script>

<style lang="scss" scoped>
  .page.contacts {
    .map-component {
      width: 100%;
      height: 400px;
    }
  }
</style>
