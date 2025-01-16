<template>
  <h5 class="text-h5 text-bold q-my-md">Co znajdę na miejscu?</h5>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-6">
      <h6 class="text-h6 q-my-md">Popularne udogodnienia</h6>
      <ul class="q-pl-md">
        <li class="text-subtitle1">Gotujemy dla Was posiłki</li>
        <li class="text-subtitle1">Średni Internet / WiFi</li>
        <li class="text-subtitle1">W lesie / na skraju lasu</li>
        <li class="text-subtitle1">Balia na zewnątrz</li>
        <li class="text-subtitle1">Śniadania dodatkowo płatne (25 zł)</li>
        <li class="text-subtitle1">Obiady dodatkowo płatne (50 zł)</li>
        <li class="text-subtitle1">
          Obiadokolacje dodatkowo płatne (50 zł)
        </li>
        <li class="text-subtitle1">
          Pełne wyżywienie (2 posiłki)
        </li>
      </ul>
    </div>

    <div class="col-12 col-md-6">
      <h6 class="text-h6 q-my-md">Nasze uroki</h6>
      <ul class="q-pl-md">
        <li class="text-subtitle1">Dojazd leśną / szutrową drogą</li>
        <li class="text-subtitle1">Słaby zasięg GSM</li>
        <li class="text-subtitle1">Nie mamy telewizorów</li>
        <li class="text-subtitle1">Komary w ciepłe dni</li>
        <li class="text-subtitle1">Muchy</li>
        <li class="text-subtitle1">Zapach wsi</li>
      </ul>
    </div>
  </div>
  <!--TUTAJ JEST PRZYCISK-->
  <q-btn
    class="q-my-lg"
    color="primary"
    label="Zobacz wszystkie atrakcje i udogodnienia"
    rounded
    unelevated
    @click="icon = true"
  />

  <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Atrakcje i udogodnienia</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>

        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const icon = ref(false)
</script>


<style lang="sass" scoped>


</style>
