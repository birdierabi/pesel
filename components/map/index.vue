<template lang="pug">
  .map-component
    yandex-map(
      v-if="showMap && mapApiKey"
      :settings="settings"
      :coords="coords"
      :zoom="zoom"
      :controls="['fullscreenControl', 'zoomControl']"
      :show-all-markers="markers.length > 1"
      :scroll-zoom="false")
      ymap-marker(
        v-for="marker in markers"
        v-if="marker.latitude && marker.longitude"
        :key="marker.id"
        :coords="[marker.latitude, marker.longitude]"
        :marker-id="`${localId}_${marker.id}`"
        :balloon="noBalloon ? null : getBalloon(marker)")
</template>

<script>
import { mapState } from 'vuex'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'map-component',
  components: { yandexMap, ymapMarker },
  props: {
    id: [String, Number],
    zoom: {
      type: Number,
      default: 13
    },
    coords: {
      type: Array,
      default: () => [59.939040, 30.315764]
    },
    markers: {
      type: Array,
      default: () => []
    },
    noBalloon: Boolean
  },
  computed: {
    ...mapState({
      mapApiKey: state => state.mapApiKey
    })
  },
  data () {
    return {
      localId: this.id,
      settings: {
        apiKey: this.mapApiKey
      },
      showMap: false
    }
  },
  methods: {
    getBalloon (marker) {
      return {
        header: marker.title
      }
    }
  },
  created () {
    if (!this.mapApiKey) {
      this.$store.dispatch('api/getVariable', {
        key: 'YANDEX_MAP_API_KEY'
      }).then(res => {
        this.$store.commit('SET_MAP_API_KEY', res.variable.val)
      }).catch(() => ({}))
    }
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
  },
  mounted () {
    this.showMap = true
  }
}
</script>

<style lang="scss">
.map-component {
  [class$="gototech"] {
    display: none!important;
  }
}
</style>

<style lang="scss" scoped>
  .map-component {
    .ymap-container {
      width: 100%;
      height: 100%;
    }
  }
</style>
