<template>
  <div style="height:400px; width:100%">
    <l-map :zoom="zoom" :center="center" :scroll-wheel-zoom="false" :use-global-leaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="markerPosition"></l-marker>
    </l-map>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({lat: null, lng: null})
const zoom = ref(13)
const center = ref([])
const markerPosition = ref([])
if (props.lat && props.lng) {
  center.value = [props.lat, props.lng]
  markerPosition.value = [props.lat, props.lng]
}
</script>
