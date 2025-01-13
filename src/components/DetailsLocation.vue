<template>
  <h5 class="text-h5 text-bold q-mb-md">Jak dojadę?</h5>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-6">
      <h6 class="text-h6 q-my-md">Samochodem</h6>
      <p class="text-subtitle1">
        Nasz adres: Sojczynek 14, <br />Sojczynek, Podlasie, Polska
      </p>
    </div>
    <div class="col-12 col-md-6">
      <h6 class="text-h6 q-my-md">Transportem publicznym</h6>
      <p class="text-body2">
        <strong>Najbliższe przystanki</strong>
      </p>
      <p class="text-subtitle1">
        Autobus: Grajewo, (20 km), Z dworca PKS Grajewo możecie próbować
        "złapać" zaprzyjaźnioną TAXI, która w kwocie do 100 zł dowiezie Was
        na miejsce. Numer kontaktowy: 722 385 950
      </p>
      <p class="text-subtitle1">
        Pociąg: Grajewo, (20 km), Z dworca PKP Grajewo możecie próbować
        "złapać" zaprzyjaźnioną TAXI, która w kwocie do 100 zł dowiezie Was
        na miejsce. Numer kontaktowy: 722 385 950
      </p>
    </div>
  </div>
  <q-btn
    class="q-my-lg"
    color="primary"
    label="Wyznacz trasę w Google Maps"
    rounded
    unelevated
  />


  <div v-if="props.profile.map_latitude && props.profile.map_longitude" class="q-my-md">
    <MapComponent :lat="props.profile.map_latitude" :lng="props.profile.map_longitude" />
  </div>
</template>
<script lang="ts" setup>
import MapComponent from "components/MapComponent.vue";
const props = defineProps({ profile: null })
</script>


<style lang="sass" scoped>


</style>
