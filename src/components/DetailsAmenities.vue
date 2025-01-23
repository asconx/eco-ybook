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
  <q-btn label="Zobacz wszystkie atrakcje i udogodnienia" class="q-my-md" color="primary" rounded 
  unelevated  @click="dialog = true" />

  <q-dialog v-model="dialog" persistent maximized transition-show="slide-up" transition-hide="slide-down">
    <q-card>
      <q-bar>
        <q-space />

        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h4 text-bold wrapper">Co znajdę na miejscu?</div>
      </q-card-section>

      <q-card-section class="q-pt-none wrapper">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4">
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

          <div class="col-12 col-md-4">
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
          <div class="col-12 col-md-4">
            <h6 class="text-h6 q-my-md">Eko Alert</h6>
            <ul class="q-pl-md">
              <li class="text-subtitle1">Dojedziesz bez samochodu</li>
              <li class="text-subtitle1">Promujemy segregację śmieci wśród Gości</li>
              <li class="text-subtitle1">Współpracujemy z lokalną społecznością</li>
              <li class="text-subtitle1">Komary w ciepłe dni</li>
              <li class="text-subtitle1">Muchy</li>
              <li class="text-subtitle1">Nie zmieniamy ręczników codziennie (tylko jeśli poprosisz)</li>
            </ul>
          </div>
        </div>
        <q-separator class="q-my-lg"></q-separator>
        <h5 class="text-h5 text-bold">Co będę jeść?</h5>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4">
            <h6 class="text-h6 q-my-md">Jedzenie na miejscu</h6>
            <ul class="q-pl-md">
              <li class="text-subtitle1">Kawa, herbata gratis</li>
              <li class="text-subtitle1">Kosz z lokalnymi produktami na powitanie w cenie</li>
              <li class="text-subtitle1">Możliwość zamówienia posiłków z dostawą</li>
              <li class="text-subtitle1">Lokalne produkty (ryby, piwo, pieczywo, przetwory, miód)</li>
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

          <div class="col-12 col-md-4">
            <h6 class="text-h6 q-my-md">Dostępna kuchnia</h6>
            <ul class="q-pl-md">
              <li class="text-subtitle1">Ciśnieniowy ekspres do kawy</li>
              <li class="text-subtitle1">Lodówka</li>
              <li class="text-subtitle1">Kuchenka mikrofalowa</li>
              <li class="text-subtitle1">Płyta kuchenna</li>
              <li class="text-subtitle1">Zmywarka do naczyń</li>
              <li class="text-subtitle1">Naczynia i sztućce</li>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <h6 class="text-h6 q-my-md">Eko Alert</h6>
            <ul class="q-pl-md">
              <li class="text-subtitle1">Dojedziesz bez samochodu</li>
              <li class="text-subtitle1">Promujemy segregację śmieci wśród Gości</li>
              <li class="text-subtitle1">Współpracujemy z lokalną społecznością</li>
              <li class="text-subtitle1">Komary w ciepłe dni</li>
              <li class="text-subtitle1">Muchy</li>
              <li class="text-subtitle1">Nie zmieniamy ręczników codziennie (tylko jeśli poprosisz)</li>
            </ul>
          </div>
        </div>
        <q-separator class="q-my-lg"></q-separator>
        <h5 class="text-h5 text-bold">Czy nie będę się nudzić?</h5>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4">
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

          <div class="col-12 col-md-4">
            <h6 class="text-h6 q-my-md">Dla tych, co chcą relaksu</h6>
            <ul class="q-pl-md">
              <li class="text-subtitle1">Gry planszowe</li>
              <li class="text-subtitle1">Biblioteczka</li>
              <li class="text-subtitle1">Ścieżki leśne (1 km)</li>
              <li class="text-subtitle1">Plaża (0 km)</li>
            </ul>
            <h6 class="text-h6 q-my-md">Dla łaknących sztuki</h6>
            <ul class="q-pl-md">
              <li class="text-subtitle1">Muzeum Miasta Gdyni</li>
              <li class="text-subtitle1">Muzeum II Wojny Światowej w Gdańsku</li>
              <li class="text-subtitle1">Muzeum Narodowe w Gdańsku</li>
              <li class="text-subtitle1">Europejskie Centrum Solidarności</li>
            </ul>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const dialog = ref(false)

</script>


<style lang="sass" scoped>


</style>
