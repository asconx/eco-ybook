<template>
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">Inne języki / Languages</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>English</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Polski</q-item-section>
          </q-item>
          
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-header class="main-background flex justify-center">
    <q-toolbar class="wrapper">
      <router-link class="q-pa-md" to="/">
        <img height="45" src="../assets/logo.svg"/>
      </router-link>
      <q-space/>
      <MainMenu/>
      <q-space/>
      <q-btn @click="alert = true" class="q-mx-sm" color="grey-7" label="PL &#183; zł" outline rounded unelevated/>
      <a href="https://panel.ybook.pl/login">
        <q-btn class="q-mx-sm" color="grey-7" label="Zaloguj się" outline rounded unelevated/>
      </a>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import MainMenu from 'components/MainMenu.vue'
import { ref } from 'vue'

const alert = ref(false)
</script>

<style lang="sass" scoped>
@media (max-width: 950px)
  .mobile-toolbar
    align-items: start
    padding-top: 18px !important
</style>
