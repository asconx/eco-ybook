<template>
  <q-header class="main-background flex justify-center">
    <q-toolbar class="wrapper">
      <router-link class="q-pa-md" to="/">
        <img height="45" src="../assets/logo.svg"/>
      </router-link>
      <q-space/>
      <MainMenu/>
      <q-space/>
      <q-btn class="q-mx-sm" color="grey-7" label="PL &#183; zł" outline rounded to="/log-in"
             unelevated/>
      <a href="https://panel.ybook.pl/login">
        <q-btn class="q-mx-sm" color="grey-7" label="Zaloguj się" outline rounded to="/log-in"
               unelevated/>
      </a>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" setup>
import MainMenu from 'components/MainMenu.vue';
</script>

<style lang="sass" scoped>

@media (max-width: 950px)
  .mobile-toolbar
    align-items: start
    padding-top: 18px !important
</style>
