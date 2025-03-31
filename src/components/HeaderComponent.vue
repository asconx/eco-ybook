<template>
  <q-header class="main-background flex justify-center">
    <q-toolbar class="wrapper">
      <router-link class="q-pa-md" to="/">
        <img height="45" src="../assets/logo.svg"/>
      </router-link>
      <q-space/>
      <MainMenu/>
      <q-space/>
      <q-btn class="q-mx-sm" color="grey-7" label="PL &#183; zł" outline rounded @click="alert = true" unelevated/>
      <a href="https://panel.ybook.pl/login">
        <q-btn class="q-mx-sm" color="grey-7" label="Zaloguj się" outline rounded unelevated/>
      </a>
      <q-dialog v-model="alert">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">Zmień język</div>
            <div class="q-gutter-sm">
              <q-btn round unelevated color="white" text-color="black" label="Polski" />
              <q-btn round unelevated color="white" text-color="black" label="English" />
              <q-btn round unelevated color="white" text-color="black" label="Čeština" />
              <q-btn round unelevated color="white" text-color="black" label="Slovenčina" />
              <q-btn round unelevated color="white" text-color="black" label="Deutsch" />
              <q-btn round unelevated color="white" text-color="black" label="Lietuvių" />
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-h6">Zmień walutę</div>
            <div class="q-gutter-sm">
              <q-btn unelevated color="yellow-2" text-color="black" label="Złoty polski (PLN - zł)" />
              <q-btn unelevated color="white" text-color="black" label="Euro (EUR - €)" />
              <q-btn unelevated color="white" text-color="black" label="Korona czeska (CZK - Kč)" />
              <q-btn unelevated color="white" text-color="black" label="Frank szwajcarski (CHF - CHF)" />
              <q-btn unelevated color="white" text-color="black" label="Korona duńska (DKK - kr.)" />
              <q-btn unelevated color="white" text-color="black" label="Funt szterling (GBP - £)" />
              <q-btn unelevated color="white" text-color="black" label="Forint (HUF - Ft)" />
              <q-btn unelevated color="white" text-color="black" label="Korona norweska (NOK - kr)" />
              <q-btn unelevated color="white" text-color="black" label="Korona szwedzka (SEK - kr)" />
              <q-btn unelevated color="white" text-color="black" label="Hrywna (UAH - UAH)" />
              <q-btn unelevated color="white" text-color="black" label="Dolar amerykański (USD - $)" />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Zamknij" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';

let alert = ref(false);
</script>

<style lang="sass" scoped>
@media (max-width: 950px)
  .mobile-toolbar
    align-items: start
    padding-top: 18px !important
</style>